import { DndContext } from "@dnd-kit/core";
import TodoItem from "./todo-item/todo-item";
import { SortableContext } from "@dnd-kit/sortable";

import {
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";

const TodoItemsList = ({ items, setTodoItems, handleChecked }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    console.log(active, over);

    if (active.id !== over.id) {
      setTodoItems((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <ul>
      <DndContext
        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items}>
          {items.map((item) => (
            // <li key={item.id}>
            <TodoItem
              key={item.id}
              item={item}
              id={item.id}
              handleChecked={handleChecked}
            />
            // </li>
          ))}
        </SortableContext>
      </DndContext>
    </ul>
  );
};

export default TodoItemsList;
