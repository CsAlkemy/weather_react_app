const WeatherDetails = (props) => {

  return (
    <div>
      <h1>Weather Report</h1>
      <div className="flex">
        <div>73 F</div>
        <div className="flex-col">
          <h2>Dayy</h2>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="flex">
        <div>Wind</div>
        <div>83%</div>
      </div>
      <div className="flex">
        <div>Humidity</div>
        <div>83%</div>
      </div>
      <div className="flex">
        <div>Pressure</div>
        <div>83%</div>
      </div>
      <div className="flex">
        <div>70</div>
        <div>72</div>
        <div>75</div>
        <div>79</div>
      </div>
    </div>
  );
};

export default WeatherDetails;
