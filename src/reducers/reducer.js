import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos:[],
}

export const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers:{
    addTodo: (state,action)=>{
                const newTodo={
                  id:nanoid(),
                  text:action.payload
                }
                state.todos.push(newTodo)
               },

    removeTodo: (state,action)=>{
                  state.todos=state.todos.filter((todo)=>{
                    return action.payload != todo.id
                         
                  })
                   },
    completeTodo: (state,action)=>{

                  

                  state.todos=state.todos.filter((todo)=>{
                    return action.payload != todo.id
                         
                  })
                   },
    updateTodo: (state,action)=>{
      state.todos=state.todos.filter((todo)=>{
        if(action.payload.id == todo.id){
          todo.text=action.payload.text
        }
          return todo
      })
    }
  }
  
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer