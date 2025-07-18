import { useState } from "react";

const Toggle = ({ title, isChecked, dispatch }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleOnAndOff = (newValue) => {
    setChecked(newValue);

    const extensions = JSON.parse(localStorage.getItem("extensions")) || [];
    const updated = extensions?.map((ex) =>
      ex.title === title ? { ...ex, isChecked: newValue } : ex,
    );

    localStorage.setItem("extensions", JSON.stringify(updated));
    dispatch({ type: "Refresh", load: updated });
  };

  return (
    <label className="relative mt-auto ml-auto inline-block h-6 w-12 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleOnAndOff(e.target.checked)}
        className="peer sr-only"
      />
      <div className="bg-btn-bg peer-checked:bg-main-red h-full w-full rounded-full transition-colors duration-300" />
      <div className="bg-header absolute top-0.5 left-0.5 h-5 w-5 rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-6" />
    </label>
  );
};

export default Toggle;
