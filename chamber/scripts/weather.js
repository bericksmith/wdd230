const apiKey = 'bb06f83ae63888ef53975084692c8460';

// Function to fetch weather data
function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

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

// Function to convert temperature from Kelvin to Fahrenheit
function convertKelvinToFahrenheit(kelvin) {
  return (kelvin - 273.15) * 9 / 5 + 32;
}

// Function to display weather data
function displayWeatherData(data) {
  const weatherInfoElement = document.getElementById('weather-info');

  // Extract the required information from the data
  const cityName = data.name;
  const temperatureCelsius = data.main.temp;
  const temperatureFahrenheit = convertKelvinToFahrenheit(temperatureCelsius);
  const description = data.weather[0].description;
  const weatherIcon = data.weather[0].icon;

  // Create the HTML content
  const htmlContent = `
    <p>Temp: ${temperatureFahrenheit.toFixed(2)}°F</p>
    <img class="w-icon" alt="icon" src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png">
    <p>Description: ${description}</p>

  `;

  // Update the weather info element
  weatherInfoElement.innerHTML = htmlContent;
}

// Example usage
const city = 'Vancouver'; // Replace with the desired city name
fetchWeatherData(city);
