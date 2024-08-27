import { createContext, useCallback, useMemo, useState } from "react";
import { TTodo } from "../types/todo";

type TodoContextType = {
  todos: TTodo[];
};
type TodoFnContextType = {
  addTodo: ({ text }: { text: string }) => void;
  deleteTodo: (id: number) => void;
  toggleCheckTodo: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);
export const TodoFnContext = createContext<TodoFnContextType | null>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
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

  const memoFn = useMemo(() => ({ addTodo, deleteTodo, toggleCheckTodo }), []);

  return (
    <TodoFnContext.Provider value={memoFn}>
      <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
    </TodoFnContext.Provider>
  );
};
