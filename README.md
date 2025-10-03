# SkyWatch
SkyWatch is a responsive web application that provides real-time weather updates and a 5-day forecast for any city worldwide. Powered by the OpenWeather API, it displays detailed weather information including temperature, humidity, wind speed, and weather conditions in an elegant and modern interface.

## Description
SkyWatch allows users to search for a city and instantly view current weather conditions along with a 5-day forecast. The app features a sleek UI with smooth animations, gradient backgrounds, responsive design for mobile and desktop, and an intuitive layout. It also includes an enhanced footer with branding and thematic icons.

The application uses the OpenWeather API to fetch weather data and dynamically displays it on the page. It gracefully handles errors and loading states to ensure a smooth user experience.

## Features
- Search for any city worldwide and get current weather.  
- Display weather details:  
  - Temperature and "Feels Like"  
  - Humidity  
  - Wind Speed  
  - Atmospheric Pressure  
  - Weather description and icon  
- 5-day weather forecast with daily icons and temperatures.  
- Responsive design for smartphones, tablets, and desktops.  
- Enter key support for search input.  
- Elegant UI with gradient backgrounds and hover effects.  
- Loading spinner while fetching data.  
- Error handling for invalid city names or API issues.  
- Footer section with logo, copyright, and thematic icons.

  ## How It Works
1. The user enters a city name in the search input and clicks "Get Weather" or presses Enter.  
2. The app fetches current weather data from the OpenWeather API using fetch.  
3. Displays the current weather in a styled container with temperature, humidity, wind speed, pressure, and weather conditions.  
4. Fetches 5-day forecast data from OpenWeather API and displays daily forecasts with icons, temperature, and humidity.  
5. Loading indicators are shown during API calls.  
6. If an invalid city is entered or an API error occurs, an error message is displayed.

   ## Functions
- getWeather(): Fetches current weather and 5-day forecast data from OpenWeather API and updates the UI.  
- showLoading(): Displays a loading spinner while data is being fetched.  
- showError(message): Displays an error message when a city is not found or API call fails.

  ## Installation & Usage

  ## Tech Stack
- Frontend: HTML5, CSS3, JavaScript (ES6)  
- Fonts: Google Fonts (Poppins)  
- API: [OpenWeather API](https://openweathermap.org/api)  
- Design Features:  
  - Responsive layout  
  - Gradient backgrounds  
  - Smooth hover animations  
  - Glassmorphism-inspired containers
 
    ## License
This project is licensed under the MIT License.
 
    
