import { useState } from "react";
import { addTodo, updateTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [addInput, setAddInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(addInput));
    setAddInput("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Enter Todo to list"
          value={addInput}
          onChange={(e) => setAddInput(e.target.value)}
        />
        <butto type="submit">Add Todo</button>
      </form>
    </>
  );
}

export default AddTodo;
