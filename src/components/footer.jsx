const Footer = ({ uncompletedItemsCount }) => {
  return (
    <div className="text-[12px] w-full px-6 py-4 overflow-hidden flex justify-between text-dark-dark-grayish-blue items-end">
      <p>
        {uncompletedItemsCount}{" "}
        {`${uncompletedItemsCount === 1 ? "item" : "items"}`} left
      </p>
      <span className="flex gap-3 text-sm pl-4">
        <p className="cursor-pointer hover:text-bright-blue">All</p>
        <p className="cursor-pointer hover:text-bright-blue">Active</p>
        <p className="cursor-pointer hover:text-bright-blue">Completed</p>
      </span>
      <p className="cursor-pointer hover:text-bright-blue">Clear completed</p>
    </div>
  );
};

export default Footer;
