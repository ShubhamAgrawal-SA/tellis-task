import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
interface todoState {
    value: any
  }
  
  const initialState: todoState = {
    value: [],
  }

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state:any,action: PayloadAction<any>)=>{
           state.push(action.payload);
        }
    }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer