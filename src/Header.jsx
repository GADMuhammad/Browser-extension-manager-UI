const Header = ({ state, dispatch }) => {
  return (
    <header className="bg-gray-50 shadow-md rounded-2xl border-neutral-200 border-2 border-solid flex gap-6 justify-between my-12 px-4 py-3">
      <img src="/images/logo.svg" alt="LOGO" className="mr-auto" />
      <button
        className={`bg-neutral-100 py-2 px-4 text-neutral-900 rounded-4xl cursor-pointer ${
          state.displayedExtensions.length ? "hidden" : "block"
        }`}
        onClick={() => dispatch({ type: "Reset" })}
      >
        Reset all extensions
      </button>
      <button className="bg-neutral-100 rounded-xl p-2 cursor-pointer">
        <img src="/images/icon-moon.svg" alt="toggle dark mode" />
      </button>
    </header>
  );
};

export default Header;
