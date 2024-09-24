import { useDispatch, useSelector } from "react-redux";
import { selectTheme, switchTheme } from "./theme-slice";
import { useEffect } from "react";

export const useTheme = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => dispatch(switchTheme());

    return [theme, toggleTheme];
}