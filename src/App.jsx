import { useState } from "react";
import Header from "./components/header";
import "./App.css";
import TodoItemsList from "./components/todo-items-list";
import NewTodo from "./components/new-todo";
import Footer from "./components/footer";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const [todoItems, setTodoItems] = useLocalStorage("storedItems", []);
  const [activeFilter, setActiveFilter] = useState("All");
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }

  const handleClearCompleted = () => {
    setTodoItems((items) => items.filter((i) => !i.completed));
  };

  const getFilteredItems = () => {
    if (activeFilter === "All") {
      return todoItems;
    } else if (activeFilter === "Active") {
      return todoItems.filter((item) => item.completed === false);
    } else {
      return todoItems.filter((item) => item.completed === true);
    }
  };

  const filteredItems = getFilteredItems();

  const uncompletedItemsCount = todoItems.filter(
    (item) => !item.completed
  ).length;

  const handleChecked = (itemId) => {
    setTodoItems((items) => {
      return items.map((item) => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };

  return (
    <div className="min-h-screen bg-light-very-light-gray dark:bg-dark-very-dark-blue">
      <div className="image-container"></div>
      <div className="max-w-[32rem] -my-[13.6rem] mx-auto">
        <Header setTheme={setTheme} />
        <NewTodo setTodoItems={setTodoItems} />

        {todoItems.length > 0 && (
          <>
            <div className="mt-5 drop-shadow-xl bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue rounded">
              <TodoItemsList
                items={filteredItems}
                handleChecked={handleChecked}
              />
              <Footer
                uncompletedItemsCount={uncompletedItemsCount}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                onClearCompleted={handleClearCompleted}
              />
            </div>
            <p className="text-center mt-10 pb-4 text-[13px] text-light-dark-grayish-blue dark:text-dark-very-dark-grayish-blue">
              Drag and drop to reorder list
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
