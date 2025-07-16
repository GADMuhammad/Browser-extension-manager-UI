import Toggle from "./Toggle";

const Extension = () => {
  return (
    <div className="w-96 h-48 p-4 grid grid-cols-[1fr_4fr] gap-x-0.5 items-start gap-3 justify-between rounded-2xl border-solid border-1 border-neutral-300 bg-white mx-32">
      <img src="/images/logo-devLens.svg" />
      <div className="justify-stretch">
        <h6 className="text-xl font-bold">DivLens</h6>
        <p className="text-neutral-600">
          Quickly inspect page layouts and visualize element boundaries.
        </p>
      </div>
      <button class="text-sm px-3 py-1.5 rounded-full border border-neutral-300 cursor-pointer mt-auto">
        Remove
      </button>
      <Toggle />
    </div>
  );
};

export default Extension;
