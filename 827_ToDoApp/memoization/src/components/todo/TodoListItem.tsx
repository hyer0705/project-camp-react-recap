import { twMerge } from "tailwind-merge";
import { TTodo } from "../../types/todo";
import React from "react";

const TodoListItem = ({
  todo,
  deleteTodo,
  toggleCheckTodo,
}: {
  todo: TTodo;
  deleteTodo: (id: number) => void;
  toggleCheckTodo: (id: number) => void;
}) => {
  console.log("TodoListItem render");

  const { id, text, isDone } = todo;

  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            className="mr-4"
            checked={isDone}
            onChange={() => toggleCheckTodo(id)}
          />
          <span className={twMerge("mr-4", isDone && "line-through")}>
            {text}
          </span>
        </label>
        <button
          onClick={() => deleteTodo(id)}
          className="border bg-rose-500 p-1"
        >
          delete
        </button>
      </li>
    </>
  );
};
export default React.memo(TodoListItem);
