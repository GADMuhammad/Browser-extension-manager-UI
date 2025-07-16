import Toggle from "./Toggle";

const Extension = ({ title, icon, isChecked, description }) => {
  return (
    <div className="w-[25rem] h-44 p-4 shadow-lime-400 grid grid-cols-[1fr_4fr] gap-x-0 items-start gap-3 justify-between rounded-2xl border-solid border-1 border-neutral-300 bg-white">
      <img src={icon} />
      <div className="justify-stretch">
        <h6 className="text-lg font-bold mb-1">{title}</h6>
        <p className="text-neutral-600 text-sm">{description}</p>
      </div>
      <button className="text-sm px-3 py-1.5 rounded-full border-2 border-neutral-300 hover:border-neutral-900 duration-300 transition-colors cursor-pointer mt-auto">
        Remove
      </button>
      <Toggle title={title} isChecked={isChecked} />
    </div>
  );
};

export default Extension;
