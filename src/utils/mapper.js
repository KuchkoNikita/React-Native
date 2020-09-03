import { calCelsius } from './temperatureСonversion'

export const mapperForOpenWeather = response => ({
  city: response.name,
  country: response.sys.country,
  tempreture: calCelsius(response.main.temp),
  humidity: response.main.humidity,
  wind: response.wind.speed,
  description: response.weather[0].description,
  coordinates: { lat: response.coord.lon, lng: response.coord.lat },
  icon: response.weather[0].icon,
});

export const mapperForYandexGeolocation = response => response.response.GeoObjectCollection.featureMember[2].GeoObject.name;