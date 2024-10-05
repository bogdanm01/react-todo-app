import { useEffect, useRef, useState } from "react";
import ShortUniqueId from "short-unique-id";

const NewTodo = ({ setTodoItems }) => {
  const [taskText, setItemText] = useState("");
  const inputElementRef = useRef(null);

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

  useEffect(() => {
    const inputElement = inputElementRef.current;

    const callback = (e) => {
      if (document.activeElement === inputElement) return;
      if (e.code === "Enter") {
        inputElement.focus();
      }
    };

    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, []);

  return (
    <div className="flex items-center gap-[1.125rem] bg-dark-very-dark-desaturated-blue px-5 py-[1.125rem] mt-7 rounded-md shadow-2xl">
      <div className="min-h-[1.4rem] min-w-[1.4rem] rounded-full border border-dark-very-dark-grayish-blue-alt"></div>
      <input
        value={taskText}
        onKeyDown={(e) => handleOnKeyDown(e)}
        onChange={(e) => setItemText(e.target.value)}
        placeholder="Create a new todo..."
        className="pt-[0.15rem] w-full outline-none bg-transparent text-dark-light-grayish-blue placeholder:text-dark-dark-grayish-blue "
        type="text"
        ref={inputElementRef}
      />
    </div>
  );
};

export default NewTodo;
