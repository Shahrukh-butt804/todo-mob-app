import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  completedTodos:[]
};

export const completedTodosSlice = createSlice({
  name: "completedTodos",
  initialState,
  reducers: {
    addCompletedTodo: (state, action) => {
      // alert(action.payload.id)
      state.completedTodos.push(action.payload);
    },
    removeCompletedTodo: (state, action) => {
      state.completedTodos=state.completedTodos.filter(todo=>{
        return todo.id!==action.payload});
    },
  },
});


export const { addCompletedTodo,removeCompletedTodo } = completedTodosSlice.actions;
export default completedTodosSlice.reducer;