import TodoItem from "./todo-item/todo-item";

const TodoItemsList = ({ items, handleChecked }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <TodoItem item={item} handleChecked={handleChecked} />
        </li>
      ))}
    </ul>
  );
};

export default TodoItemsList;
