import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../assets/searchBar.css";

function SearchBar({ search, setSearch }) {
  const [input, setInput] = useState("");
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
