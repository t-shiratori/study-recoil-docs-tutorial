import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../recoil/todoList";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";
import { TodoListStats } from "../TodoList/TodoListStats";
import { TodoListFilters } from "../TodoList/TodoListFilters";

export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
