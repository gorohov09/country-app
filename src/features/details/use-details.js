import { useDispatch, useSelector } from "react-redux";
import { clearCountry, loadCountryByName, selectDetails } from "./details-slice";
import { useEffect } from "react";

export const useDetails = (name) => {
    const dispatch = useDispatch();

    const {currentCountry, error, status} = useSelector(selectDetails);

    useEffect(() => {
        dispatch(loadCountryByName(name));
        return () => {
            dispatch(clearCountry())
        }
    }, [name, dispatch])

    return [currentCountry, status, error];
}