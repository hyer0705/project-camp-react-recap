import { useCallback, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { TTodo } from "../../types/todo";

const Todo = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const addTodo = useCallback(({ text }: { text: string }) => {
    setTodos((todos) => [...todos, { id: Date.now(), text, isDone: false }]);
  }, []);

  const deleteTodo = useCallback(
    (id: number) => setTodos((todos) => todos.filter((todo) => todo.id !== id)),
    []
  );

  const toggleCheckTodo = useCallback((id: number) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        } else return todo;
      })
    );
  }, []);

  return (
    <>
      <h1>To Do App</h1>
      <pre>{JSON.stringify(todos)}</pre>
      <div>
        <TodoEditor addTodo={addTodo} />
        <TodoList
          toggleCheckTodo={toggleCheckTodo}
          deleteTodo={deleteTodo}
          todos={todos}
        />
      </div>
    </>
  );
};
export default Todo;
