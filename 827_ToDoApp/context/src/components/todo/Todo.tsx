import { TodoProvider } from "../../context/TodoProvider";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <>
      <h1>To Do App</h1>
      <div>
        <TodoProvider>
          <TodoEditor />
          <TodoList />
        </TodoProvider>
      </div>
    </>
  );
};
export default Todo;
