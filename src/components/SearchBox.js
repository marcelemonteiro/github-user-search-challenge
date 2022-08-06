import { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../assets/icon-search.svg";
import "./SearchBox.css";

function SearchBox() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/${search}`);
  };

  return (
    <form onSubmit={handleSubmit} className="SearchBox">
      <label htmlFor="search">
        <img src={searchIcon} alt="Search Icon" className="searchIcon" />
      </label>
      <input
        value={search}
        id="search"
        type="text"
        onChange={({ target }) => setSearch(target.value)}
        className="searchInput"
      />
      <button type="submit" className="searchBtn">
        Search
      </button>
    </form>
  );
}

export default SearchBox;
