const forecastapiKey = 'bb06f83ae63888ef53975084692c8460';
const forecastlatitude = 33.158;
const forecastlongitude = -117.351;

const forecastAPIurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${forecastlatitude}&lon=${forecastlongitude}&units=imperial&appid=${forecastapiKey}`;

const forecastGrid = document.getElementById('forecast-grid');

fetch(forecastAPIurl)
  .then(response => response.json())
  .then(data => {
    const forecastData = data.list;

    const groupedData = {};
    forecastData.forEach(forecast => {
      const date = forecast.dt_txt.split(' ')[0];
      if (!groupedData[date]) {
        groupedData[date] = forecast;
      }
    });

    let counter = 0;
    Object.keys(groupedData).forEach(date => {
      if (counter >= 3) {
        return;
      }

      const forecast = groupedData[date];

      const forecastCard = document.createElement('div');
      forecastCard.classList.add('forecast-card');

      const dateElement = document.createElement('p');
      dateElement.textContent = getDayName(date);
      dateElement.classList.add('headline');
      dateElement.classList.add('green');
      forecastCard.appendChild(dateElement);

      const temperature = document.createElement('p');
      temperature.textContent = Math.round(forecast.main.temp) + '°F';
      temperature.classList.add('weather-temp');
      forecastCard.appendChild(temperature);

      const weatherIconSpan = document.createElement('span');
      let weatherIcon = forecast.weather[0].icon;
      weatherIconSpan.innerHTML = `<img class="weather-forcast-img" alt="${temperature.textContent}" src="https://openweathermap.org/img/w/${weatherIcon}.png">`;
      forecastCard.appendChild(weatherIconSpan);

      forecastGrid.appendChild(forecastCard);

      counter++;
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });

function getDayName(dateString) {
  const date = new Date(dateString);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}










