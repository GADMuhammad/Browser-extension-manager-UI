const Buttons = ({ state, dispatch }) => {
  const buttonsStyle = (label) =>
    `${
      label === state.status
        ? "bg-main-red text-header border-transparent"
        : "bg-header border-btn-bg"
    } border-1 cursor-pointer hover:bg-main-red hover:text-header hover:border-transparent transition-colors duration-300 border-solid rounded-4xl px-4 py-1.5`;

  return (
    <main className="mb-6 mx-36 flex flex-wrap gap-10 justify-between items-center">
      <h1 className="text-3xl font-bold tracking-wide">Extensions List</h1>
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
