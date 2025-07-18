import Toggle from "./Toggle";
import Swal from "sweetalert2";

const Extension = ({ title, icon, isChecked, description, dispatch }) => {
  const alert = () => {
    const isDark = JSON.parse(localStorage.getItem("darkModeCase"));
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      background: isDark ? "#1f2535" : "#fff",
      color: isDark ? "#fcfdff" : "#000",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "Remove", load: title });
        Swal.fire({
          title: "Deleted!",
          text: "Your extension has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="w-96 h-44 p-4 grid grid-cols-[1fr_4fr] gap-x-0 gap-3 transition-colors duration-300 rounded-2xl border-solid border-1 border-btn-bg bg-header fade-in-up">
      <img src={icon} />
      <div className="justify-stretch">
        <h6 className="text-lg font-bold mb-0.5">{title}</h6>
        <p className="text-sm">{description}</p>
      </div>
      <button
        onClick={alert}
        className="text-sm px-3 py-1.5 rounded-full border-2 border-btn-bg hover:border-transparent hover:bg-main-red hover:text-header duration-300 transition-colors cursor-pointer mt-auto"
      >
        Remove
      </button>
      <Toggle title={title} isChecked={isChecked} dispatch={dispatch} />
    </div>
  );
};

export default Extension;
