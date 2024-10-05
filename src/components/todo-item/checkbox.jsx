import React from "react";

const Checkbox = ({ checked, handleChecked, itemId }) => {
  return (
    <>
      {checked ? (
        <div
          onClick={() => handleChecked(itemId)}
          className="min-h-[1.4rem] min-w-[1.4rem] flex items-center justify-center rounded-full cursor-pointer bg-check-gradient"
        >
          <img
            className="select-none"
            src="src/assets/icons/icon-check.svg"
            alt="check icon"
          />
        </div>
      ) : (
        <div
          onClick={() => handleChecked(itemId)}
          className="min-h-[1.4rem] min-w-[1.4rem] rounded-full border border-dark-very-dark-grayish-blue-alt cursor-pointer"
        />
      )}
    </>
  );
};

export default Checkbox;
