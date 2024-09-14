import { createSlice } from "@reduxjs/toolkit";

const controlsSlice = createSlice({
    name: '@@controls',
    initialState: {
        search: '',
        region: ''
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setRegion: (state, action) => {
            state.region = action.payload
        },
        clearControls: (state, _) => {
            state.search = ''
            state.region = ''
        }
    }
})

export const {setSearch, setRegion, clearControls} = controlsSlice.actions;

export const controlsReducer = controlsSlice.reducer;

export const selectRegion = (state) => state.controls.region;
export const selectSearch = (state) => state.controls.search;
export const selectAllControls = (state) => state.controls;