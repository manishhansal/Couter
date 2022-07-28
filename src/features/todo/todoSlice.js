import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: ["manish"]
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
    deleteTodo: (state, action) => {
      let temp = state.todo.filter((item, idx) => idx !== action.payload);
      state.todo = [...temp];
    }
  }
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const selectTodo = (state) => state.todo.todo;

export default todoSlice.reducer;
