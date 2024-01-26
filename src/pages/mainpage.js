import renderHeader from '../components/header.js';
import renderMainDisplay from '../components/maindisplay.js';
import renderMainWeatherDisplay from '../components/mainweatherdisplay.js';

export default function renderMainPage(container) {
  container.appendChild(renderHeader());
  container.appendChild(renderMainDisplay());
  const main = document.querySelector('main');

  const searchbtn = document.querySelector('#search');
  searchbtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const qry = document.querySelector('#cityinput').value;
    const weatherData = await fetchWeatherData(qry);

    // Check if main already has the .mainweather child
    const existingMainWeather = main.querySelector('.mainweather');
    if (existingMainWeather) {
      main.removeChild(existingMainWeather);
    }

    main.appendChild(renderMainWeatherDisplay(weatherData));
    // renderForecastDisplay(data);
  });
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
