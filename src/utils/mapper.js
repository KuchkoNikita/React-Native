import { calCelsius } from './temperatureСonversion'

export const mapperForOpenWeather = response => ({
  city: response.name,
  country: response.sys.country,
  tempreture: calCelsius(response.main.temp),
  humidity: response.main.humidity,
  wind: response.wind.speed,
  description: response.weather[0].description,
  rangeId: response.weather[0].id,
});