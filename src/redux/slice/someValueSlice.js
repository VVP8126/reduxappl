import { createSlice } from '@reduxjs/toolkit';
// Example using @reduxjs/toolkit

export const someValueSlice = createSlice({
    name: 'someValue',
    initialState: {
        value: 0
    },
    reducers: {
        add: (state, action) => {
            state.value = state.value + action.payload
        },
        subtract: (state, action) => {
            state.value = state.value - action.payload
        },
        increment: state => {
            state.value += 1
        }
    }
});

export const {add, subtract, increment} = someValueSlice.actions;
export default someValueSlice.reducer;
