import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, selectCountriesInfo, selectVisibleCountries } from "./countries-slice";
import { selectAllControls } from "../controls/controls-slice";
import { useEffect } from "react";

export const useCountries = () => {
    const dispatch = useDispatch();

    const {search, region} = useSelector(selectAllControls);
    const countries = useSelector((state) => selectVisibleCountries(state, {search, region}));
    const {status, error, qty} = useSelector(selectCountriesInfo);

    useEffect(() => {
        if (!qty) {
            dispatch(getAllCountries());
        }
    }, [qty, dispatch])

    return [countries, status, error];
}