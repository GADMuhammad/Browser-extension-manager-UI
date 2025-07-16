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

  return (
    <>
      <Header />
      <Buttons />
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        {extensionsInfo.map((extension) => (
          <Extension key={extension.title} {...extension} />
        ))}
      </div>
    </>
  );
};

export default App;
