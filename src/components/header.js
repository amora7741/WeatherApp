import renderSearchBar from './search';
import cloud from '../icons/weather-cloudy.svg';

export default function renderHeader(onTemperatureUnitChange) {
  const header = document.createElement('header');
  const logo = document.createElement('div');
  logo.className = 'logo';

  const icon = new Image();
  icon.src = cloud;

  logo.appendChild(icon);

  const title = document.createElement('h1');
  title.textContent = 'BreezyZone';

  logo.appendChild(title);

  header.appendChild(logo);

  const tempSwitchButton = document.createElement('button');
  tempSwitchButton.textContent = 'C°/F°';
  tempSwitchButton.addEventListener('click', onTemperatureUnitChange);
  header.appendChild(tempSwitchButton);

  header.appendChild(renderSearchBar());

  return header;
}
