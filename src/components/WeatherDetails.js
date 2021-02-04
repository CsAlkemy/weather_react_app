import rise from '../image/sunrise.png'
import sunSet from '../image/sunset.png'
import hot from '../image/hot.png'
import cold from '../image/cold.png'

const WeatherDetails = (weathers) => {
  let tempo = weathers.weathers;
  let linkImg = `http://openweathermap.org/img/wn/${tempo.weather[0].icon}@2x.png`;


  //TimeStamp to 12h base time
  var date= new Date(tempo.sys.sunrise*1000);
  console.log(date.getTime());

  return (
    <div className='m-1'>
      <div className="flex mx-auto m-2">
        <img className="text-sm h-14 w-14 " src={linkImg} alt="2nd_card"></img>
        <div className="text-6xl font-thin text-blue-400">{Math.floor((tempo.main.temp*1.8)+32)}&#176;F</div>
        <p className='text-2xl font-extralight ml-3 mt-5'>
          {tempo.name},<span className='font-medium text-gray-600'> {tempo.sys.country}</span>
        </p>
      </div>
      <div className="flex">
        <p className='text-md font-normal text-gray-600 ml-0 m-4'>Wind</p>
        <p className='text-md font-normal text-gray-600 m-3 mx-auto'>{Math.floor(tempo.wind.speed)}<span className='text-xs'>mph</span></p>
      </div>
      <div className="flex">
        <p className='text-md font-normal text-gray-600   m-2 ml-0'>Humidity</p>
        <p className='text-md font-normal text-gray-600  m-2  mx-auto'>{tempo.main.humidity}%</p>
      </div>
      <div className="flex">
        <p className='text-md font-normal text-gray-600  m-2 ml-0 '>Pressure</p>
        <p className='text-md font-normal text-gray-600 m-2  mx-auto'>{tempo.main.pressure} pa</p>
      </div>
      <hr className='divide-solid mt-7'></hr>
      <div className="flex mt-10">
        <div className='flex-col  mx-auto'>
          <img  className='h-9 md:h-12' src={rise} alt="sunrise"/>
          <p className='text-gray-500'>Sunrise</p>
          <p>9:20Am</p>
        </div>
        <div className='flex-col  mx-auto'>
          <img className='h-9 md:h-12' src={sunSet} alt="sunset"/>
          <p className='text-gray-500'>Sunset</p>
          <p>5:20Am</p>
        </div>
        <div className='flex-col  mx-auto'>
          <img  className='h-9 md:h-12' src={hot} alt="hot"/>
          <p className='text-gray-500'>Max Temp</p>
          <p>{tempo.main.temp_max}&#176;C</p>
        </div>
        <div className='flex-col  mx-auto'>
          <img className='h-9 md:h-12' src={cold} alt="cold"/>
          <p className='text-gray-500'>Min Temp</p>
          <p>{tempo.main.temp_min}&#176;C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
