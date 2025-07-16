import { useState } from "react";

const Toggle = ({ title, isChecked, dispatch }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleOnAndOff = (newValue) => {
    setChecked(newValue);

    const extensions = JSON.parse(localStorage.getItem("extensions")) || [];
    const updated = extensions.map((extension) =>
      extension.title === title
        ? { ...extension, isChecked: newValue }
        : extension
    );

    localStorage.setItem("extensions", JSON.stringify(updated));
    dispatch({ type: "Refresh", load: updated });
  };

  return (
    <label className="relative ml-auto mt-auto inline-block w-12 h-6 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleOnAndOff(e.target.checked)}
        className="peer sr-only"
      />
      <div className="w-full h-full bg-btn-bg rounded-full peer-checked:bg-main-red transition-colors duration-300" />
      <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-header rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-6" />
    </label>
  );
};

export default Toggle;
