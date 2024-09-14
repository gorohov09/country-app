import { SET_COUNTRY, SET_LOADING, SET_ERROR, CLEAR_COUNTRY, SET_BORDERS } from "./details-actions";

const initialState = {
    currentCountry: null,
    borders: [],
    status: 'idle',
    errror: null,
}

export const detailsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_COUNTRY: {
            return {
                ...state,
                currentCountry: payload,
                status: 'received'
            }
        }
        case SET_BORDERS: {
            return {
                ...state,
                borders: payload
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                status: 'loading',
                error: null
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                status: 'rejected',
                error: payload
            }
        }
        case CLEAR_COUNTRY: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}