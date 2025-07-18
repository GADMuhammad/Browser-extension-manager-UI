import { useReducer, useEffect } from "react";
import Buttons from "./Buttons";
import Extension from "./Extension";
import Header from "./Header";
import extensions from "./extensions";

const App = () => {
  useEffect(() => {
    !localStorage.getItem("extensions") &&
      localStorage.setItem("extensions", JSON.stringify(extensions));
  }, []);

  const extensionsInfo =
    JSON.parse(localStorage.getItem("extensions")) ?? extensions;

  const extensionsReducer = (state, action) => {
    switch (action.type) {
      case "All":
        return { status: "All", displayedExtensions: extensionsInfo };

      case "Active":
      case "Inactive":
        const show = action.type === "Active";
        return {
          status: action.type,
          displayedExtensions: extensionsInfo.filter(
            (ex) => ex.isChecked === show,
          ),
        };

      case "Remove":
        const extensionsAfterRemove = (displayedExtensions) =>
          displayedExtensions.filter((ex) => ex.title !== action.load);

        localStorage.setItem(
          "extensions",
          JSON.stringify(extensionsAfterRemove(extensionsInfo)),
        );

        return {
          ...state,
          displayedExtensions: extensionsAfterRemove(state.displayedExtensions),
        };

      case "Reset":
        localStorage.setItem("extensions", JSON.stringify(extensions));
        return { status: "All", displayedExtensions: extensions };

      case "Refresh":
        if (state.status === "All") return state;
        const stateStatus = state.status === "Active";
        return {
          ...state,
          displayedExtensions: action.load.filter(
            (ex) => ex.isChecked === stateStatus,
          ),
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(extensionsReducer, {
    status: "All",
    displayedExtensions: extensionsInfo,
  });

  return (
    <>
      <Header />
      <Buttons state={state} dispatch={dispatch} />
      <div className="mx-10 mb-6 flex flex-wrap justify-center gap-3">
        {state.displayedExtensions.length ? (
          state.displayedExtensions.map((extension) => (
            <Extension
              key={extension.title}
              {...extension}
              dispatch={dispatch}
            />
          ))
        ) : (
          <p className="mx-auto text-xl tracking-wide max-lg:text-base">
            No{" "}
            {state.status.toLowerCase() !== "all"
              ? state.status.toLowerCase()
              : ""}{" "}
            extensions to display.
          </p>
        )}
      </div>
    </>
  );
};

export default App;
