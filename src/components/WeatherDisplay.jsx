import { useGetWeatherCityQuery } from "../redux/api/weatherApi";

const WeatherDisplay = ({ city }) => {
  const { data, isLoading, error } = useGetWeatherCityQuery(city, { skip: !city || city === '' });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return <p>Please enter a city</p>;
  }

  const currentCondition = data?.current_condition?.[0];

  if (!currentCondition) {
    return <p>No weather data available</p>;
  }

  return (
    <div className="weather-info">
      <h2>Weather in {city}</h2>
      <p>Temperature: {currentCondition.temp_C} °C</p>
      <p>Weather Conditions: {currentCondition.weatherDesc[0].value}</p>
    </div>
  );
};

export default WeatherDisplay;
