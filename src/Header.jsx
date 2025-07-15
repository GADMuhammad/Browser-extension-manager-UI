const Header = () => {
  return (
    <header className="bg-gray-50 shadow-md rounded-2xl border-neutral-200 border-2 border-solid flex justify-between mx-32 my-12 px-4 py-3">
      <img src="/public/images/logo.svg" alt="LOGO" />
      <button className="bg-neutral-100 rounded-xl p-2 cursor-pointer">
        <img src="/images/icon-moon.svg" alt="toggle dark mode" />
      </button>
    </header>
  );
};

export default Header;
