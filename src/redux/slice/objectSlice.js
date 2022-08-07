import { createSlice } from '@reduxjs/toolkit';

export const objectSlice = createSlice({
    name: 'someObject',
    initialState: {
        description: "",
        id: 0,
        isActive: false
    },
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        toggleActive: (state, action) => {
            state.isActive = action.payload;
        }
    }
});

export const {setId, setDescription, toggleActive}=objectSlice.actions;
export default objectSlice.reducer;
