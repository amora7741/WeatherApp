export default function renderForecastDisplay(data) {
  const forecastDisplayContainer = document.createElement('div');
  forecastDisplayContainer.className = 'forecastdisplay';

  for (let index = 0; index < 3; index++) {
    const placeholder = document.createElement('div');
    placeholder.className = 'placeholder';
    placeholder.textContent = `Placeholder ${index}`;

    forecastDisplayContainer.appendChild(placeholder);
  }

  return forecastDisplayContainer;
}
