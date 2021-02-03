const WeatherCard = (props) => {
  let data=props.data.data;
  return (
    <div>
      <h3>SATURDAY, 16:00</h3>
      <p></p>
      <h1 className="">{} &#176;C</h1>
      <div className="flex">
        <div>
          <span></span>
          <p>67%</p>
        </div>
        <div>
          <span></span>
          <p>6%</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, magni.
      </p>
      <button className="bg-purple-600 border-none text-white rounded-md  p-2 mt-3 w-full">
        Next Week
      </button>
    </div>
  );
};

export default WeatherCard;
