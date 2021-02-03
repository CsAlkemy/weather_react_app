import { fetchWeather } from "../apis/config";
import React, { useState } from "react";

const SearchLoc = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  console.log(query, weather);
  const onSearch = async (e) => {
    const data = await fetchWeather(query);
    setWeather(data);
    setQuery("");
  };
  const onKeyPressed = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex w-11/12 md:w-1/3 mx-auto">
      <input
        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={onKeyPressed}
        aria-label="Filter projects"
        placeholder="Search Location"
        required
      />
      <button
        className="bg-blue-600 pr-2 pl-2 text-base text-white rounded-lg ml-2"
        onClick={onSearch}
      >
        CHECK
      </button>
    </div>
  );
};

export default SearchLoc;
