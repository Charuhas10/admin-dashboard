import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  const [input, setInput] = useState("");
  return (
    <div>
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
