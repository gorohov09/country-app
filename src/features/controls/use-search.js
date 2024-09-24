import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "./controls-slice";

export const useSearch = () => {
    const dispatch = useDispatch();
    const search = useSelector(selectSearch);

    const handleSearch = (value) => dispatch(setSearch(value));

    return [search, handleSearch];
}