import renderHeader from '../components/header.js';

export default function renderMainPage(container) {
  container.appendChild(renderHeader());

  const searchbtn = document.querySelector('#search');
  searchbtn.addEventListener('click', (e) => {
    getData().then(function (data) {
      console.log(data);
    });
    e.preventDefault();
  });
}

async function getData() {
  const KEY = '9e582be9796f4a0fbac203630242401';
  const qry = document.querySelector('#cityinput').value;

  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${qry}&days=3`,
    { mode: 'cors' }
  );

  const weatherData = await response.json();

  return weatherData;
}
