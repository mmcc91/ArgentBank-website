import { createSlice } from '@reduxjs/toolkit'  
export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
      // add your non-async reducers here
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    },
    extraReducers: {
      // add your async reducers here
    }
  })
  // Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;