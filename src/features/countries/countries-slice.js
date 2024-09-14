import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCountries = createAsyncThunk(
    '@@countries/get-all-countries',
    async (_, {rejectWithValue, extra: api}) => {
        try {
            return await api.getAllCountries();
        } catch (err) {
            return rejectWithValue('Не получилось загрузить все записи')
        }
    }
)

const countriesSlice = createSlice({
    name: '@@countries',
    initialState: {
        list: [],
        status: 'idle', // loading | received | rejected
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCountries.pending, (state, _) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getAllCountries.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload || action.error.message;
            })
            .addCase(getAllCountries.fulfilled, (state, action) => {
                state.status = 'received'
                state.list = action.payload;
            })
    }
})

export const countriesReducer = countriesSlice.reducer;

export const selectVisibleCountries = (state, {search = '', region = ''}) => {
    return state.countries.list.filter(
        country => (
            country.name.toLowerCase().includes(search.toLowerCase())
            && country.region.toLowerCase().includes(region.toLowerCase())
        )
    );
}

export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length
})