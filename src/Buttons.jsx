import { useState } from "react";

const Buttons = () => {
  const [display, setDisplay] = useState("All");

  const buttonsStyle = (label) =>
    `${
      label === display
        ? "bg-red-500 text-white border-transparent"
        : "bg-white border-neutral-300"
    } border-1 cursor-pointer hover:bg-red-500 hover:text-white hover:border-transparent transition-colors duration-300 border-solid rounded-4xl px-4 py-1.5`;

  return (
    <main className="mx-32 mb-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold tracking-wide">Extensions List</h1>
      <nav className="flex gap-2">
        {["All", "Active", "Inactive"].map((label) => (
          <button
            key={label}
            onClick={() => setDisplay(label)}
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
