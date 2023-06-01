const apiKey = 'bb06f83ae63888ef53975084692c8460';
const latitude = 45.6387;
const longitude = -122.6615

// Function to fetch weather data
function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Process the weather data
      displayWeatherData(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Function to display weather data
function displayWeatherData(data) {
  const weatherInfoElement = document.getElementById('weather-info');

  // Extract the required information from the data
  const cityName = data.name;
  const temperatureFahrenheit = data.main.temp;
  const description = data.weather[0].description;
  const weatherIcon = data.weather[0].icon;
  const windspeed = data.wind.speed;

  // Create the HTML content
  const htmlContent = `
    <span class="weather-headline">${city} Weather</span>
    <img class="weather-img" alt="Weather icon" src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png">
    <span class="weather-temp">${temperatureFahrenheit.toFixed(1)}°F</span>
    <span class="weather-description">${description}</span>
    <span class="weather-seven">Wind Speed: ${windspeed}mph</span>
  `;

  // Update the weather info element
  weatherInfoElement.innerHTML = htmlContent;
}

// Example usage
const city = 'Vancouver'; // Replace with the desired city name
fetchWeatherData(city);
