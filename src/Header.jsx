import { useEffect, useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("darkModeCase"))
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
    <header className="bg-header shadow-md mx-30 flex-wrap max-sm:flex-col rounded-2xl border-border border-2 border-solid flex gap-6 justify-between my-12 px-4 py-3">
      <img src="/images/logo.svg" alt="LOGO" className="mr-auto" />
      <button
        onClick={() => toggleTheme()}
        className="bg-btn-bg rounded-xl p-2 cursor-pointer w-fit max-sm:mx-auto"
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
