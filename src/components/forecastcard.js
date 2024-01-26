export default function createForecastCard(day) {
  const forecastCard = document.createElement('div');
  forecastCard.className = 'forecastcard';
  console.log(day);

  const dateValue = new Date(day.date);

  const weekday = getWeekday(dateValue.getUTCDay(), new Date().getUTCDay());
  console.log(weekday);

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
