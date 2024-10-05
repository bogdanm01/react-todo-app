import { useState } from "react";
import Header from "./components/header";
import "./App.css";
import TodoItemsList from "./components/todo-items-list";
import NewTodo from "./components/new-todo";
import Footer from "./components/footer";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

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
        <Header />
        <NewTodo setTodoItems={setTodoItems} />

        {todoItems.length > 0 && (
          <>
            <div className="mt-5 drop-shadow-xl bg-dark-very-dark-desaturated-blue rounded">
              <TodoItemsList items={todoItems} handleChecked={handleChecked} />
              <Footer uncompletedItemsCount={uncompletedItemsCount} />
            </div>
            <p className="text-center mt-10 pb-4 text-[13px] text-dark-very-dark-grayish-blue">
              Drag and drop to reorder list
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
