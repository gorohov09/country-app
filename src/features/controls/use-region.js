import { useDispatch, useSelector } from "react-redux";
import { selectRegion, setRegion } from "./controls-slice";

export const useRegion = () => {
    const dispatch = useDispatch();
    const region = useSelector(selectRegion);

    const handleRegion = (value) => dispatch(setRegion(value));
    
    return [region, handleRegion]
}