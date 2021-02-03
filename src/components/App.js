import WeatherDetails from "./WeatherDetails";
import WeatherCard from "./WeatherCard";
import { fetchWeather } from "../apis/config";
import React, { useState } from "react";


function App() {
  const [query, setQuery] = useState('Dhaka');
  const [weather, setWeather] = useState({});

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
    <div className="container mx-auto mt-24">
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
          className="bg-blue-600 pr-2 pl-2 text-white rounded-lg ml-2"
          onClick={onSearch}
        >
          CHECK
        </button>
      </div>
      <div className="flex-1 max-w-5xl p-5 md:p-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-y-2 md:gap-2 mx-auto">
          <div className="p-4 bg-white border-1-8 border-transparent rounded-sm shadow-lg space-y-2">
            <WeatherCard data={weather} />
          </div>
          <div className="p-4 bg-white border-1-8 col-span-2 border-transparent rounded-sm shadow-lg space-y-2">
            <WeatherDetails data={weather} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
