import createForecastCard from './forecastcard';

export default function renderForecastDisplay(data, isCelsius) {
  const forecastDisplayContainer = document.createElement('div');
  forecastDisplayContainer.className = 'forecastcontainer';

  const forecastTitle = document.createElement('h1');
  forecastTitle.className = 'forecasttitle';
  forecastTitle.textContent = '3 Day Forecast:';

  forecastDisplayContainer.appendChild(forecastTitle);

  const forecastCardContainer = document.createElement('div');
  forecastCardContainer.className = 'forecastcardcontainer';

  data.forecast.forecastday.forEach((day) => {
    forecastCardContainer.appendChild(createForecastCard(day, isCelsius));
  });

  forecastDisplayContainer.appendChild(forecastCardContainer);

  return forecastDisplayContainer;
}
