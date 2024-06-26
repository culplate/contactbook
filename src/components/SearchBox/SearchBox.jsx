import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts:</label>
      <input type="text" id="searchBox" onChange={handleSearch} />
    </div>
  );
};
