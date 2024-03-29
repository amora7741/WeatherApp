export default function renderCurrentWeatherDisplay(data, isCelsius) {
  const weatherDisplayContainer = document.createElement('div');
  weatherDisplayContainer.className = 'currentweather';

  const location = document.createElement('h2');
  location.textContent = `${data.location['name']}, ${data.location['region']}`;

  const temp = document.createElement('h1');
  temp.textContent = isCelsius
    ? `${data.current.temp_c}°C`
    : `${data.current.temp_f}°F`;

  const condition = document.createElement('h3');
  condition.textContent = data.current.condition['text'];

  const weatherIcon = new Image();
  weatherIcon.src = data.current.condition.icon;

  weatherDisplayContainer.appendChild(location);
  weatherDisplayContainer.appendChild(temp);
  weatherDisplayContainer.appendChild(condition);
  weatherDisplayContainer.appendChild(weatherIcon);

  return weatherDisplayContainer;
}
