const Buttons = ({ state, dispatch }) => {
  const buttonsStyle = (label) =>
    `${
      label === state.status
        ? "bg-main-red text-header border-transparent"
        : "bg-header border-btn-bg"
    } border-1 cursor-pointer hover:bg-main-red hover:text-header hover:border-transparent transition-colors duration-300 border-solid rounded-4xl px-4 py-1.5`;

  return (
    <main className="mx-36 mb-6 flex flex-wrap items-center justify-between gap-10 max-lg:mx-auto max-lg:flex-col max-lg:gap-4">
      <h1 className="text-3xl font-bold tracking-wide transition-colors duration-300">
        Extensions List
      </h1>
      <button
        className={`bg-header hover:border-header text-text fade-in-up w-fit cursor-pointer rounded-4xl border-2 border-solid border-transparent px-4 py-2 transition-colors hover:bg-transparent ${
          state.displayedExtensions.length ? "hidden" : "block"
        }`}
        onClick={() => dispatch({ type: "Reset" })}
      >
        Reset all extensions
      </button>
      <nav className="flex gap-2">
        {["All", "Active", "Inactive"].map((label) => (
          <button
            key={label}
            onClick={() => dispatch({ type: label })}
            className={buttonsStyle(label)}
          >
            {label}
          </button>
        ))}
      </nav>
    </main>
  );
};

export default Buttons;
