export default function createForecastCard(day) {
  const forecastCard = document.createElement('div');
  forecastCard.className = 'forecastcard';

  const dateValue = new Date(day.date);

  const weekday = getWeekday(dateValue.getUTCDay(), new Date().getUTCDay());
  const dayTitle = document.createElement('h1');
  dayTitle.textContent = `${weekday}`;

  forecastCard.appendChild(dayTitle);

  const weatherIcon = new Image();
  weatherIcon.src = day.day.condition['icon'];

  forecastCard.appendChild(weatherIcon);

  const hiLow = document.createElement('h2');
  hiLow.textContent = `Low: ${day.day.mintemp_f} / High: ${day.day.maxtemp_f}`;

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
