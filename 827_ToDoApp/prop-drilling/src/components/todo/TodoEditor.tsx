import { useState } from "react";

const TodoEditor = ({
  addTodo,
}: {
  addTodo: ({ text }: { text: string }) => void;
}) => {
  const [todo, setTodo] = useState("");

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
export default TodoEditor;
