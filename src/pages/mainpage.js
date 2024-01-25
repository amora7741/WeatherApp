import renderHeader from '../components/header.js';

export default function renderMainPage(container) {
  container.appendChild(renderHeader());

  const searchbtn = document.querySelector('#search');
  searchbtn.addEventListener('click', (e) => {
    const qry = document.querySelector('#cityinput').value;
    fetchWeatherData(qry).then(function (data) {
      console.log(data);
      //renderMainWeatherDisplay(data);
      //renderForecastDisplay(data);
    });
    e.preventDefault();
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
