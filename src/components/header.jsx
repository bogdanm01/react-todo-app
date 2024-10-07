const Header = ({ theme, setTheme }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[38px] font-bold tracking-[0.85rem] text-light-very-light-gray select-none">
        TODO
      </h1>
      <img
        onClick={() =>
          setTheme((theme) => {
            if (theme === "dark") return "light";
            else return "dark";
          })
        }
        className="cursor-pointer w-6 h-6 mb-2"
        src={`${
          theme === "dark"
            ? "assets/icons/icon-sun.svg"
            : "assets/icons/icon-moon.svg"
        }`}
        alt="theme toggle"
      />
    </div>
  );
};

export default Header;
