import React from "react";
import useFetch from "./hooks/UseFetch";
import SearchLoc from "./components/SearchLoc";
import { API_KEY, URL } from "./apis/config";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const { data, error,  setUrl } = useFetch();

  const getContent = () => {
    if (error)
      return (
        <div
          className="bg-pink-200 border-l-4 border- rounded  border-red-600 mt-10 pt-4 pb-4 "
          role="alert"
        >
          <h1 className='ml-5 pl-4'>Error when featching: {error}</h1>
          <p className='ml-5 pl-4 text-sm font-thin'>Please re-check your city and Search again.. </p>
        </div>
      );
    if (!data) return null;
    return (
      <>
        <div className="flex-1 max-w-5xl p-5 md:p-16 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-y-2 md:gap-2 mx-auto">
            <div className="p-4 bg-gradient-to-br from-green-100 via-white to-blue-100 border-1-8 border-transparent rounded-sm shadow-lg space-y-2">
              <WeatherCard weathers={data} />
            </div>
            <div className="p-4 bg-white border-1-8 col-span-2 border-transparent rounded-sm shadow-lg space-y-2">
              <WeatherDetails weathers={data} />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="container mx-auto mt-24">
      <SearchLoc
        onSearch={(city) =>
          setUrl(`${URL}?q=${city}&cnt=5&appid=${API_KEY}&units=metric`)
        }
      />

      {getContent()}
    </div>
  );
}

export default App;
