const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[38px] font-bold tracking-[0.85rem] text-light-very-light-gray select-none">
        TODO
      </h1>
      <img
        className="cursor-pointer w-6 h-6 mb-2"
        src="assets/icons/icon-sun.svg"
        alt="theme toggle"
      />
    </div>
  );
};

export default Header;
