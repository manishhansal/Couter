import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, selectTodo, deleteTodo } from "./todoSlice";

export const Todo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector(selectTodo);
  const handleChange = (e) => {
    setValue(() => e.target.value);
  };
  const handleSubmit = () => {
    dispatch(addTodo(value));
  };
  const handleDelete = (idx) => {
    dispatch(deleteTodo(idx));
  };
  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Enter your todo..."
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {todo?.map((item, idx) => (
        <div style={{ marginTop: "5px" }}>
          <span key={idx}>{item}</span>
          <button onClick={() => handleDelete(idx)}>Delete</button>
        </div>
      ))}
    </>
  );
};
