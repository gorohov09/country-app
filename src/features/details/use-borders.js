import { useDispatch, useSelector } from "react-redux";
import { loadCountryBorders, selectBorders } from "./details-slice";
import { useEffect } from "react";

export const useBorders = (borders) => {
    const dispatch = useDispatch();
    const countryBorders = useSelector(selectBorders);

    useEffect(() => {
        if (borders.length) {
            dispatch(loadCountryBorders(borders));
        }
        
    }, [borders, dispatch])

    return [countryBorders];
}