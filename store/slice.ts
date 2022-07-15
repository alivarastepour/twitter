import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'sidebar',
    initialState: {
        selected: 'home',
    },
    reducers: {
        select: (state, action) => {
            state.selected = action.payload;
        }
    },
})

export const reducers = slice.reducer;

