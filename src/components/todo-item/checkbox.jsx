const Checkbox = ({ checked, handleChecked, itemId }) => {
  return (
    <>
      {checked ? (
        <div
          onClick={() => handleChecked(itemId)}
          className="min-h-[1.4rem] min-w-[1.4rem] flex items-center justify-center rounded-full cursor-pointer bg-check-gradient border-light-very-light-grayish-blue dark:border-dark-very-dark-grayish-blue-alt"
        >
          <img
            className="select-none"
            src="assets/icons/icon-check.svg"
            alt="check icon"
          />
        </div>
      ) : (
        <div
          onClick={() => handleChecked(itemId)}
          className="min-h-[1.4rem] min-w-[1.4rem] rounded-full border border-light-very-light-grayish-blue dark:border-dark-very-dark-grayish-blue-alt cursor-pointer"
        />
      )}
    </>
  );
};

export default Checkbox;
