import { useState } from "react";
import Header from "./components/header";
import "./App.css";
import TodoItemsList from "./components/todo-items-list";
import NewTodo from "./components/new-todo";

const dummyItems = [
  {
    id: 1,
    taskText: "Finish JavaScript online course",
    completed: true,
  },
  {
    id: 2,
    taskText: "Practice German",
    completed: false,
  },
  {
    id: 3,
    taskText: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    taskText: "Jog around the park 3x",
    completed: false,
  },
];

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  return (
    <div className="min-h-screen bg-light-very-light-gray dark:bg-dark-very-dark-blue">
      <div className="image-container"></div>
      <div className="max-w-[32rem] -my-[13.6rem] mx-auto">
        <Header />
        <NewTodo setTodoItems={setTodoItems} />
        {/* <TodoItemsList /> */}
      </div>
    </div>
  );
};

export default App;
