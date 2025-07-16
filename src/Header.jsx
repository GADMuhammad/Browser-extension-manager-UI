import { useEffect, useState } from "react";

const Header = ({ state, dispatch }) => {
  const [darkModeCase, setDarkModeCase] = useState(
    !!JSON.parse(localStorage.getItem("darkModeCase"))
  );

  useEffect(() => {
    darkModeCase && document.documentElement.classList.add("dark");
  }, [darkModeCase]);

  const toggleTheme = () => {
    setDarkModeCase((prev) => !prev);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkModeCase", !darkModeCase);
  };

  return (
    <header className="bg-header shadow-md rounded-2xl border-border border-2 border-solid flex gap-6 justify-between my-12 px-4 py-3">
      <img src="/images/logo.svg" alt="LOGO" className="mr-auto" />
      <button
        className={`bg-btn-bg py-2 px-4 text-text rounded-4xl cursor-pointer fade-in-up ${
          state.displayedExtensions.length ? "hidden" : "block"
        }`}
        onClick={() => dispatch({ type: "Reset" })}
      >
        Reset all extensions
      </button>
      <button
        onClick={() => toggleTheme()}
        className="bg-btn-bg rounded-xl p-2 cursor-pointer"
      >
        <img
          src={`/images/icon-${darkModeCase ? "sun" : "moon"}.svg`}
          alt="toggle dark mode"
        />
      </button>
    </header>
  );
};

export default Header;
