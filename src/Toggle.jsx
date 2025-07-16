const Toggle = () => {
  return (
    <label class="relative ml-auto mt-auto inline-block w-12 h-6 cursor-pointer">
      <input type="checkbox" class="peer sr-only" />
      <div class="w-full h-full bg-gray-300 rounded-full peer-checked:bg-red-500 transition-colors duration-300" />
      <div class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-6" />
    </label>
  );
};

export default Toggle;
