import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../reducers/reducer'
import  completedTodosSlice  from '../reducers/completeSlice'

export const store = configureStore({
  reducer:{
    todos:todoReducer,
    completedTodosSlice,
  } ,
})