import { useContext } from "react";
import { TTodo } from "../../types/todo";
import TodoListItem from "./TodoListItem";
import { TodoContext } from "../../context/TodoProvider";

const TodoList = () => {
  const { todos } = useContext(TodoContext)!;
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
