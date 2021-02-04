import { GiWaterDrop, GiWindsock } from "react-icons/gi";

const WeatherCard = (weathers) => {
  let tempo = weathers.weathers;
  let linkImg = `http://openweathermap.org/img/wn/${tempo.weather[0].icon}@2x.png`;

  const date = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var day = weekday[date.getDay()];
  return (
    <div className='m-1'>
      <div className="flex">
        <div>
          <h1 className="text-5xl mt-3 mb-1 text-gray-600">{tempo.name}</h1>
          <h3 className="text-2xl mb-0 font-light ">{day}</h3>
        </div>
        <div className="ml-8">
          <img src={linkImg} alt={tempo.weather[0].description} />
        </div>
      </div>
      <p className="text-sm">{tempo.weather[0].main}</p>
      <h1 className="text-7xl font-bolder pt-5 pb-5 ">
        {Math.floor(tempo.main.temp)}&#176;C
      </h1>
      <div className="flex mx-auto mb-4">
        <div className="flex">
          <span className="text-3xl mr-3">
            <GiWaterDrop />
          </span>
          <p className="text-xl font-light">{tempo.main.humidity}%</p>
        </div>
        <div className="flex ml-7">
          <span className="text-3xl mr-3">
            <GiWindsock />
          </span>
          <p className="text-xl font-light">
            {Math.floor(tempo.wind.speed)}
            <span className="text-xs"> mph</span>
          </p>
        </div>
      </div>
      <span className="text-xs m-0">
        feels like {Math.floor(tempo.main.feels_like)} &#176;C
      </span>
      <p className='text-xs text-justify mt-2'>All great and beautiful work has come of first gazing without shrinking into the darkness.</p>
      <div></div>
      <button className="bg-purple-600 border-none text-white rounded-md mb-5 mt-7  p-2  w-full">
        Next Week
      </button>
    </div>
  );
};

export default WeatherCard;
