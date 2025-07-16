import Buttons from "./buttons";
import Extension from "./Extension";
import Header from "./Header";

const extensions = [
  {
    title: "DevLens",
    icon: "/images/logo-devLens.svg",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
  },
  {
    title: "Color Magic",
    icon: "/images/logo-style-spy.svg",
    description: "Pick, save, and generate beautiful color palettes with ease.",
  },
  {
    title: "UX Feedback",
    icon: "/images/logo-speed-boost.svg",
    description: "Collect in-app feedback from users to improve your product.",
  },
  {
    title: "WebShield",
    icon: "/images/logo-json-wizard.svg",
    description: "Block trackers and ensure privacy while browsing any site.",
  },
  {
    title: "TimeWise",
    icon: "/images/logo-tab-master-pro.svg",
    description: "Track your web activity and stay focused during work hours.",
  },
  {
    title: "FormFlow",
    icon: "/images/logo-viewport-buddy.svg",
    description: "Test and debug HTML forms with mock submissions and logging.",
  },
];

const App = () => {
  return (
    <>
      <Header />
      <Buttons />
      <div className="grid grid-cols-3 gap-y-3">
        {extensions.map((extension) => (
          <Extension key={extension.title} {...extension} />
        ))}
      </div>
    </>
  );
};

export default App;
