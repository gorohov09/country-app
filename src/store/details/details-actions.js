export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const SET_COUNTRY = '@@details/SET_COUNTRY';
export const SET_BORDERS = '@@details/SET_BORDERS';
export const CLEAR_COUNTRY = '@@details/CLEAR_COUNTRY'


const setLoading = {
    type: SET_LOADING
}

export const clearCountry = {
    type: CLEAR_COUNTRY
}

const setError = (err) => ({
    type: SET_ERROR,
    payload: err
})

const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country
})

export const setBorders = (borders) => ({
    type: SET_BORDERS,
    payload: borders
})

export const loadCountryByName = (name) => (dispatch, _, {client, api}) => {
    dispatch(setLoading);
    
    client.get(api.searchByCountry(name))
        .then(({data}) => dispatch(setCountry(data[0])))
        .catch((err) => dispatch(setError(err)))
}

export const loadCountryBorders = (codes) => (dispatch, _, {client, api}) => {
    client.get(api.filterByCode(codes))
        .then(({data}) => {
            const borders = data.map(item => ({
                name: item.name
            }));
            dispatch(setBorders(borders));
        })
        .catch((err) => console.log(err))
}