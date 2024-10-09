import Checkbox from "./checkbox";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TodoItem = ({ item, handleChecked, onDeleteItem }) => {
  let { completed, id } = item;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="group cursor-default select-none flex items-center gap-[1.125rem] px-5 py-[1.05rem] overflow-hidden border-b border-light-very-light-grayish-blue dark:border-b-dark-very-dark-grayish-blue-alt"
    >
      <Checkbox checked={completed} handleChecked={handleChecked} itemId={id} />
      <div className="flex w-full cursor-pointer" {...listeners}>
        <p
          className={`${
            completed
              ? "line-through text-light-light-grayish-blue dark:text-dark-very-dark-grayish-blue"
              : "text-light-very-dark-grayish-blue dark:text-dark-light-grayish-blue select-text"
          } pt-[0.15rem] grow`}
        >
          {item.taskText}
        </p>
      </div>
      <img
        onClick={() => onDeleteItem(item.id)}
        className="opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-100"
        src="assets/icons/icon-cross.svg"
        height={14}
        width={14}
        alt=""
      />
    </div>
  );
};

export default TodoItem;
