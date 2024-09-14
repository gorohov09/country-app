import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: '@@theme',
    initialState: 'light',
    reducers: {
        switchTheme: (state, _) => {
            return state === 'light' ? 'dark' : 'light'
        }
    }
})

export const {switchTheme} = themeSlice.actions;

export const themeReducer = themeSlice.reducer;

export const selectTheme = (state) => state.theme;