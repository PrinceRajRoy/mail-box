import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useQuery from "../../hooks/useQuery";

function SearchBar() {
  const searchQuery = useQuery("search");
  const [query, setQuery] = useState(searchQuery);
  const history = useHistory();

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      history.replace({
        pathname: `/${history.location.pathname.split("/")[1]}`,
        search: `search=${query}`,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 justify-center my-4 mx-3"
    >
      <input
        type="text"
        className="px-3 py-2 rounded-md w-full border border-gray-300 shadow-sm"
        placeholder="Search Mail"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="text-sm font-semibold text-white bg-green-500 p-3 rounded-md">
        Submit
      </button>
    </form>
  );
}

export default SearchBar;
