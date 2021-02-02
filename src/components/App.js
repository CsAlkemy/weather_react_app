import Search from "./SearchLoc";
import WeatherDetails from "./WeatherDetails";
import WeatherCard from "./WeatherCard";

function App() {
  return (
    <div className="container mx-auto mt-24">
      <div>
        <Search />
      </div>
      <div className="flex-1 max-w-5xl p-5 md:p-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-y-2 md:gap-2 mx-auto">
          <div className="p-4 bg-white border-1-8 border-transparent rounded-sm shadow-lg space-y-2">
            <WeatherCard />
          </div>
          <div className="p-4 bg-white border-1-8 col-span-2 border-transparent rounded-sm shadow-lg space-y-2">
            <WeatherDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
