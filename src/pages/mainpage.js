import renderHeader from '../components/header.js';
import renderMainDisplay from '../components/maindisplay.js';
import renderCurrentWeatherDisplay from '../components/currentweatherdisplay.js';

export default function renderMainPage(container) {
  container.appendChild(renderHeader());
  container.appendChild(renderMainDisplay());

  displayWeatherData('Los Angeles');

  const searchbtn = document.querySelector('#search');
  searchbtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const qry = document.querySelector('#cityinput').value;
    displayWeatherData(qry);
  });
}

async function displayWeatherData(qry) {
  const weatherData = await fetchWeatherData(qry);

  const existingMainWeather = document.querySelector('main .currentweather');
  const existingWeatherForecast = document.querySelector(
    'main .weatherforecast'
  );
  if (existingMainWeather) {
    existingMainWeather.remove();
  }
  if (existingWeatherForecast) {
    existingWeatherForecast.remove();
  }

  const mainWeatherDisplay = renderCurrentWeatherDisplay(weatherData);
  document.querySelector('main').appendChild(mainWeatherDisplay);
}

async function fetchWeatherData(qry) {
  const KEY = '9e582be9796f4a0fbac203630242401';
  const API_ENDPOINT = 'https://api.weatherapi.com/v1/forecast.json';
  const forecastAmount = 3;
  let weatherData;

  try {
    const response = await fetch(
      `${API_ENDPOINT}?key=${KEY}&q=${qry}&days=${forecastAmount}`,
      {
        mode: 'cors',
      }
    );

    weatherData = await response.json();
  } catch (err) {
    alert(err);
  }

  return weatherData;
}
