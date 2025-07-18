import { useEffect, useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("darkModeCase")),
  );

  useEffect(() => {
    isDark && document.documentElement.classList.add("dark");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDark", !isDark);
  };

  return (
    <header className="bg-header border-border mx-30 my-12 flex flex-wrap justify-between gap-6 rounded-2xl border-2 border-solid px-4 py-3 shadow-md transition-colors duration-300 max-sm:flex-col">
      <img src="/images/logo.svg" alt="LOGO" className="mr-auto" />
      <button
        onClick={() => toggleTheme()}
        className="bg-btn-bg w-fit cursor-pointer rounded-xl p-2 max-sm:mx-auto"
      >
        <img
          src={`/images/icon-${isDark ? "sun" : "moon"}.svg`}
          alt="toggle dark mode"
        />
      </button>
    </header>
  );
};

export default Header;
