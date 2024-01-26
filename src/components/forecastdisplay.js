import createForecastCard from './forecastcard';

export default function renderForecastDisplay(data) {
  const forecastDisplayContainer = document.createElement('div');
  forecastDisplayContainer.className = 'forecastdisplay';

  data.forecast.forecastday.forEach((day) => {
    forecastDisplayContainer.appendChild(createForecastCard(day));
  });

  return forecastDisplayContainer;
}
