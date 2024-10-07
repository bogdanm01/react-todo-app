const Footer = ({
  uncompletedItemsCount,
  activeFilter,
  setActiveFilter,
  onClearCompleted,
}) => {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="text-[12px] w-full px-6 py-4 overflow-hidden flex justify-between text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue items-end">
      <p>
        {uncompletedItemsCount}{" "}
        {`${uncompletedItemsCount === 1 ? "item" : "items"}`} left
      </p>
      <span className="flex gap-3 text-sm pl-4">
        {filters.map((filter, index) => (
          <p
            key={index}
            onClick={() => setActiveFilter(filter)}
            className={`${
              activeFilter === filter && "text-bright-blue"
            } cursor-pointer hover:text-bright-blue`}
          >
            {filter}
          </p>
        ))}
      </span>
      <p
        onClick={() => onClearCompleted()}
        className="cursor-pointer hover:text-bright-blue"
      >
        Clear completed
      </p>
    </div>
  );
};

export default Footer;
