import { useState } from "react";
import ShortUniqueId from "short-unique-id";

const NewTodo = ({ setTodoItems }) => {
  const [taskText, setItemText] = useState("");

  const handleOnKeyDown = (e) => {
    if (e.code === "Enter") {
      if (taskText.trim() !== "") {
        setTodoItems((items) => [
          ...items,
          {
            id: new ShortUniqueId({ length: 10 }).rnd(),
            taskText,
            completed: false,
          },
        ]);
        setItemText("");
      }
    }
  };

  return (
    <div className="flex items-center gap-4 bg-dark-very-dark-desaturated-blue px-6 py-[1.125rem] mt-7 rounded shadow-2xl">
      <div className="min-h-6 min-w-6 rounded-full border border-dark-very-dark-grayish-blue"></div>
      <input
        value={taskText}
        onKeyDown={(e) => handleOnKeyDown(e)}
        onChange={(e) => setItemText(e.target.value)}
        placeholder="Create a new todo..."
        className="pt-[0.15rem] w-full outline-none bg-transparent text-dark-light-grayish-blue placeholder:text-dark-dark-grayish-blue "
        type="text"
      />
    </div>
  );
};

export default NewTodo;
