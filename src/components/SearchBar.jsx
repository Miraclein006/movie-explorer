import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) {
      return;
    }

    onSearch(query.trim());
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <button type="submit">
        🔍 Search
      </button>
    </form>
  );
}

export default SearchBar;