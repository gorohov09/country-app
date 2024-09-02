export const SET_SEARCH = '@@controls/SET_SEARCH_TEXT';
export const CLEAR_SEARCH = '@@controls/CLEAR_SEARCH';

export const setSearch = (text) => ({
    type: SET_SEARCH,
    payload: text
})

export const clearSearch = {
    type: CLEAR_SEARCH
}