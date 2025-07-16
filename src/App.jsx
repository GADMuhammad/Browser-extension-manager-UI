import { useEffect } from "react";
import Buttons from "./buttons";
import Extension from "./Extension";
import Header from "./Header";

const extensions = [
  {
    title: "DevLens",
    icon: "/images/logo-devLens.svg",
    isChecked: true,
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
  },
  {
    title: "Color Magic",
    icon: "/images/logo-style-spy.svg",
    isChecked: true,
    description: "Pick, save, and generate beautiful color palettes with ease.",
  },
  {
    title: "UX Feedback",
    icon: "/images/logo-speed-boost.svg",
    isChecked: true,
    description: "Collect in-app feedback from users to improve your product.",
  },
  {
    title: "WebShield",
    icon: "/images/logo-json-wizard.svg",
    isChecked: true,
    description: "Block trackers and ensure privacy while browsing any site.",
  },
  {
    title: "TimeWise",
    icon: "/images/logo-tab-master-pro.svg",
    isChecked: true,
    description: "Track your web activity and stay focused during work hours.",
  },
  {
    title: "FormFlow",
    icon: "/images/logo-viewport-buddy.svg",
    isChecked: true,
    description: "Test and debug HTML forms with mock submissions and logging.",
  },
];

const App = () => {
  //
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
      <div className="grid grid-cols-3 gap-y-3">
        {extensionsInfo.map((extension) => (
          <Extension key={extension.title} {...extension} />
        ))}
      </div>
    </>
  );
};

export default App;
