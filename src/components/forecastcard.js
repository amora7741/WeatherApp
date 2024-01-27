export default function createForecastCard(day, isCelsius) {
  const forecastCard = document.createElement('div');
  forecastCard.className = 'forecastcard';

  const dateValue = new Date(day.date);

  const weekday = getWeekday(dateValue.getUTCDay(), new Date().getDay());
  const dayTitle = document.createElement('h1');
  dayTitle.textContent = `${weekday}`;

  forecastCard.appendChild(dayTitle);

  const weatherIcon = new Image();
  weatherIcon.src = day.day.condition['icon'];

  forecastCard.appendChild(weatherIcon);

  const hiLow = document.createElement('h2');
  const minTemp = isCelsius ? day.day.mintemp_c : day.day.mintemp_f;
  const maxTemp = isCelsius ? day.day.maxtemp_c : day.day.maxtemp_f;
  hiLow.textContent = `Low: ${minTemp}° / High: ${maxTemp}°`;

  forecastCard.appendChild(hiLow);

  return forecastCard;
}

function getWeekday(dayIndex, currentDayIndex) {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  if (dayIndex === currentDayIndex) {
    return 'Today';
  } else {
    return weekdays[dayIndex];
  }
}
