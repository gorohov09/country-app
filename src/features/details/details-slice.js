import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountryByName = createAsyncThunk(
    '@@details/load-country-by-name',
    async (name, {rejectWithValue, extra: api}) => {
        try {
            return await api.loadCountryByName(name);
        } catch (err) {
            return rejectWithValue('Не получилось загрузить страну')
        }
    }
)

export const loadCountryBorders = createAsyncThunk(
    '@@details/load-country-borders',
    async (codes, {rejectWithValue, extra: api}) => {
        try {
            return await api.loadCountryBorders(codes);
        } catch (err) {
            return rejectWithValue('Не удалось загрузить соседей')
        }
    }
)

const initialState = {
    currentCountry: null,
    borders: [],
    status: 'idle',
    errror: null,
}

const detailsSlice = createSlice({
    name: '@@details',
    initialState: initialState,
    reducers: {
        clearCountry: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountryByName.pending, (state, _) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCountryByName.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload || action.error.message;
            })
            .addCase(loadCountryByName.fulfilled, (state, action) => {
                state.status = 'received'
                state.currentCountry = action.payload[0];
            })
            .addCase(loadCountryBorders.fulfilled, (state, action) => {
                const borders = action.payload.map(item => ({
                    name: item.name
                }));
                state.borders = borders;
            })
    }
})

export const {clearCountry} = detailsSlice.actions;

export const detailsReducer = detailsSlice.reducer;

export const selectCurrentCountry = (state) => state.details.currentCountry;
export const selectDetails = (state) => state.details;
export const selectBorders = (state) => state.details.borders;