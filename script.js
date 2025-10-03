const apiKey = '34a17150e01d6f47aaaddd8b9552a3eb';

document.getElementById('cityInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    getWeather();
  }
});

function showLoading() {
  const currentWeather = document.getElementById('current-weather');
  const forecast = document.getElementById('forecast');
  currentWeather.innerHTML = '<div class="loading"></div>';
  forecast.innerHTML = '<div class="loading"></div>';
}

function showError(message) {
  const currentWeather = document.getElementById('current-weather');
  currentWeather.innerHTML = `<div class="error-message">${message}</div>`;
  document.getElementById('forecast').innerHTML = '';
}

function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) {
    showError('Please enter a city name');
    return;
  }

  showLoading();

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`)
    .then(res => {
      if (!res.ok) {
        throw new Error('City not found or API error');
      }
      return res.json();
    })
    .then(data => {
      const html = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}" />
        <div class="weather-info">
          <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
          <p>Temperature: ${Math.round(data.main.temp)}°C</p>
          <p>Feels like: ${Math.round(data.main.feels_like)}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
          <p>Pressure: ${data.main.pressure} hPa</p>
        </div>
      `;
      document.getElementById('current-weather').innerHTML = html;
    })
    .catch(() => {
      showError('City not found. Please check the spelling and try again.');
    });

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Forecast data not available');
      }
      return res.json();
    })
    .then(data => {
      const forecastContainer = document.getElementById('forecast');
      forecastContainer.innerHTML = '';

      const dailyForecast = {};
      const today = new Date().toISOString().split('T')[0];

      data.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0];
        const hour = item.dt_txt.split(' ')[1];
        if (date !== today && hour === "12:00:00" && !dailyForecast[date]) {
          dailyForecast[date] = item;
        }
      });

      const forecastDays = Object.keys(dailyForecast).slice(0, 5);

      if (forecastDays.length === 0) {
        data.list.slice(0, 5).forEach(item => {
          const card = document.createElement('div');
          card.className = 'forecast-day';
          card.innerHTML = `
            <h4>${new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</h4>
            <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png" alt="${item.weather[0].description}" />
            <p>${item.weather[0].main}</p>
            <p>${Math.round(item.main.temp)}°C</p>
            <p>${item.main.humidity}%</p>
          `;
          forecastContainer.appendChild(card);
        });
      } else {
        forecastDays.forEach(date => {
          const item = dailyForecast[date];
          const card = document.createElement('div');
          card.className = 'forecast-day';
          card.innerHTML = `
            <h4>${new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}</h4>
            <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="${item.weather[0].description}" />
            <p>${item.weather[0].main}</p>
            <p>${Math.round(item.main.temp)}°C</p>
            <p>${item.main.humidity}% Humidity</p>
          `;
          forecastContainer.appendChild(card);
        });
      }
    })
    .catch(() => {});
}