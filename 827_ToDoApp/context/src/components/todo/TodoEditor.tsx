import React, { useContext, useState } from "react";
import { TodoFnContext } from "../../context/TodoProvider";

const TodoEditor = () => {
  // console.log("editor render");

  const [todo, setTodo] = useState("");

  const { addTodo } = useContext(TodoFnContext)!;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ text: todo });
    setTodo("");
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          className="border py-1 px-2 rounded-md"
          type="text"
          placeholder="Enter the todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="border bg-blue-500 py-1 px-2 rounded-md">Add</button>
      </form>
    </>
  );
};
export default React.memo(TodoEditor);
