import { useReducer } from "react";
import { useEffect } from "react";
import Buttons from "./buttons";
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
            (ex) => ex.isChecked === show
          ),
        };

      default:
        if (state.status === "All") return state;
        const stateStatus = state.status === "Active";
        return {
          ...state,
          displayedExtensions: action.load.filter(
            (ex) => ex.isChecked === stateStatus
          ),
        };
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
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {state.displayedExtensions.map((extension) => (
          <Extension key={extension.title} {...extension} dispatch={dispatch} />
        ))}
        {!state.displayedExtensions.length && (
          <p className="mx-auto text-xl tracking-wide">
            No {state.status.toLowerCase()} extensions to display.
          </p>
        )}
      </div>
    </>
  );
};

export default App;
