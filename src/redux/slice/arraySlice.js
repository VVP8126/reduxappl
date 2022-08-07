import { createSlice } from '@reduxjs/toolkit';

export const arraySlice = createSlice({
    name: 'arrayObject',
    initialState: {
        items: [
            {id:1, value:1}, {id:2, value:2}, {id:3, value:4}, {id:4, value:8}
        ]
    },
    reducers: {
        push: (state, action) => {
            const nextId = state.items[state.items.length - 1].id + 1;
            state.items.push( { id:nextId, value:action.payload } );
        },
        // remove: (state, action) => { state.items.remove(action.payload); },
        removeLast: (state) => {
            if(state.items.length !==0 ) {
                state.items.pop();
            }
        },
        removeFirst: (state) => {
            if(state.items.length !==0 ) {
                state.items.shift();
            }
        },
        update: {
            reducer(state, action) {
              const { id, newValue } = action.payload;
              let i = 0;
              while(i < state.items.length) {
                if(state.items[i].id === id) {
                    state.items[i].value = newValue;
                    break;
                }
                i++;
              }
            },
            prepare(id, newValue) {
              return {
                payload: { id, newValue }
              }
            }
        },
    }
});

export const {push, removeFirst, removeLast, update}=arraySlice.actions;
export default arraySlice.reducer;
