import Checkbox from "./checkbox";

const TodoItem = ({ item, handleChecked }) => {
  let { completed, id } = item;

  return (
    <div className="select-none flex items-center gap-[1.125rem] px-5 py-[1.05rem] overflow-hidden border-b border-light-very-light-grayish-blue dark:border-b-dark-very-dark-grayish-blue-alt">
      <Checkbox checked={completed} handleChecked={handleChecked} itemId={id} />
      <p
        className={`${
          completed
            ? "line-through text-light-light-grayish-blue dark:text-dark-very-dark-grayish-blue"
            : "text-light-very-dark-grayish-blue dark:text-dark-light-grayish-blue select-text"
        } pt-[0.15rem]`}
      >
        {item.taskText}
      </p>
    </div>
  );
};

export default TodoItem;
