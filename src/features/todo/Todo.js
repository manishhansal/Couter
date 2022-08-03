import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, selectTodo, deleteTodo, completedDone } from "./todoSlice";

export const Todo = () => {
  const [value, setValue] = useState({
    title: "",
    completed: false
  });
  const dispatch = useDispatch();
  const todo = useSelector(selectTodo);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setValue({ [id]: value, completed: false });
  };
  const handleSubmit = () => {
    dispatch(addTodo(value));
  };
  const handleDelete = (idx) => {
    dispatch(deleteTodo(idx));
  };
  const handleDone = (idx) => {
    dispatch(completedDone(idx));
  };
  console.log(todo);
  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Enter your todo..."
        value={value.title}
        id="title"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {todo?.map((item, idx) => (
        <div style={{ marginTop: "5px" }}>
          {item.completed ? (
            <span>
              <s>{item.title}</s>
            </span>
          ) : (
            <span key={idx}>{item.title}</span>
          )}
          <button onClick={() => handleDone(idx)}>Done</button>
          <button onClick={() => handleDelete(idx)}>Delete</button>
        </div>
      ))}
    </>
  );
};
