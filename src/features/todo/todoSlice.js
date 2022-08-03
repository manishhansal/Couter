import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [{ title: "Manish", completed: false }]
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
    deleteTodo: (state, action) => {
      let temp = state.todo.filter((item, idx) => idx !== action.payload);
      state.todo = [...temp];
    },
    completedDone: (state, action) => {
      let temp = [...state.todo];
      temp.forEach((item, idx) => {
        if (idx === action.payload) {
          item.completed = !item.completed;
        }
      });
      state.todo = [...temp];
    }
  }
});

export const { addTodo, deleteTodo, completedDone } = todoSlice.actions;

export const selectTodo = (state) => state.todo.todo;

export default todoSlice.reducer;
