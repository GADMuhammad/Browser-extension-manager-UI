import Toggle from "./Toggle";
import Swal from "sweetalert2";

const Extension = ({ title, icon, isChecked, description, dispatch }) => {
  const alert = () => {
    const isDark = JSON.parse(localStorage.getItem("isDark"));
    const colorsBasedOnMode = {
      background: isDark ? "#1f2535" : "#fff",
      color: isDark ? "#fcfdff" : "#000",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      ...colorsBasedOnMode,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "Remove", load: title });
        Swal.fire({
          ...colorsBasedOnMode,
          title: "Deleted!",
          text: "Your extension has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="border-btn-bg bg-header fade-in-up grid h-44 w-96 grid-cols-[1fr_4fr] gap-3 gap-x-0 rounded-2xl border-1 border-solid p-4 transition-colors duration-300">
      <img src={icon} />
      <div>
        <h6 className="mb-0.5 text-lg font-bold">{title}</h6>
        <p className="text-sm">{description}</p>
      </div>
      <button
        onClick={alert}
        className="border-btn-bg hover:bg-main-red hover:text-header mt-auto cursor-pointer rounded-full border-2 px-3 py-1.5 text-sm transition-colors duration-300 hover:border-transparent"
      >
        Remove
      </button>
      <Toggle title={title} isChecked={isChecked} dispatch={dispatch} />
    </div>
  );
};

export default Extension;
