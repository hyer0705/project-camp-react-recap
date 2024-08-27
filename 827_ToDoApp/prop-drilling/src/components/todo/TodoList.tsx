import { TTodo } from "../../types/todo";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos,
  deleteTodo,
  toggleCheckTodo,
}: {
  todos: TTodo[];
  deleteTodo: (id: number) => void;
  toggleCheckTodo: (id: number) => void;
}) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoListItem
            toggleCheckTodo={toggleCheckTodo}
            deleteTodo={deleteTodo}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
