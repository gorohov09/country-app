export const SET_SEARCH = '@@controls/SET_SEARCH_TEXT';
export const SET_REGION = '@@controls/SET_REGION'
export const CLEAR_CONTROLS = '@@controls/CLEAR_CONTROLS';

export const setSearch = (text) => ({
    type: SET_SEARCH,
    payload: text
})

export const setRegion = (region) => ({
    type: SET_REGION,
    payload: region
})

export const clearControls = {
    type: CLEAR_CONTROLS
}