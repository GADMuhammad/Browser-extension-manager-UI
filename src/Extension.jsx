import Toggle from "./Toggle";
import Swal from "sweetalert2";

const Extension = ({ title, icon, isChecked, description, dispatch }) => {
  const alert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
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
    <div className="w-[25rem] h-44 p-4 shadow-lime-400 grid grid-cols-[1fr_4fr] gap-x-0 items-start gap-3 justify-between rounded-2xl border-solid border-1 border-neutral-300 bg-white fade-in-up">
      <img src={icon} />
      <div className="justify-stretch">
        <h6 className="text-lg font-bold mb-0.5">{title}</h6>
        <p className="text-neutral-600 text-sm">{description}</p>
      </div>
      <button
        onClick={alert}
        className="text-sm px-3 py-1.5 rounded-full border-2 border-neutral-300 hover:border-transparent hover:bg-red-500 hover:text-white duration-300 transition-colors cursor-pointer mt-auto"
      >
        Remove
      </button>
      <Toggle title={title} isChecked={isChecked} dispatch={dispatch} />
    </div>
  );
};

export default Extension;
