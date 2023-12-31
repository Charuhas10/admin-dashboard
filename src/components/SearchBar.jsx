import { useState } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import "../assets/searchBar.css";

function SearchBar({ search, setSearch, deleteBulk }) {
  const [input, setInput] = useState("");
  return (
    <div className="search-bar-container">
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
      <button className="bulk-delete-button" onClick={deleteBulk}>
        <FaTrash />
      </button>
    </div>
  );
}

export default SearchBar;
