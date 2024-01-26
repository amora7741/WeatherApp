export default function renderMainWeatherDisplay(data) {
  const weatherDisplayContainer = document.createElement('div');
  weatherDisplayContainer.className = 'mainweather';

  const location = document.createElement('h2');
  location.textContent = data.location['name'];

  const temp = document.createElement('h1');
  temp.textContent = `${data.current.temp_f}°`;

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
