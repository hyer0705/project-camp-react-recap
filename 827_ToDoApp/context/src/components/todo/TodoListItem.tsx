import { twMerge } from "tailwind-merge";
import { TTodo } from "../../types/todo";
import React, { useContext } from "react";
import { TodoFnContext } from "../../context/TodoProvider";

const TodoListItem = ({ todo }: { todo: TTodo }) => {
  console.log("TodoListItem render");

  const { id, text, isDone } = todo;

  const { deleteTodo, toggleCheckTodo } = useContext(TodoFnContext)!;

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
