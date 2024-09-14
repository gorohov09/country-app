import { ALL_COUNTRIES, filterByCode, searchByCountry } from "./config";

export const getAllCountries = async () => {
    const res = await fetch(ALL_COUNTRIES)
    return await res.json();
}

export const loadCountryByName = async (name) => {
    const res = await fetch(searchByCountry(name))
    return await res.json();
}

export const loadCountryBorders = async (codes) => {
    const res = await fetch(filterByCode(codes))
    return await res.json();
}