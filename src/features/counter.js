import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
  error: null
}

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload
    },
    decrement: (state, action) => {
      state.value -= action.payload
    },
    multiply: (state, action) => {
      state.value = state.value * action.payload
    },
    divide: (state, action) => {
      if (action.payload === 0) {
        state.error = "Impossible de diviser par 0 !"
        return
      }
      state.value = state.value / action.payload
      state.error = null   // reset l’erreur si tout va bien
    }
  }
})

export const { increment, decrement, multiply, divide } = counter.actions
export default counter.reducer