const apiKey = 'YOUR_API_KEY';

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    // Fetch current weather data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const temperature = (data.main.temp - 273.15).toFixed(1); // Convert from Kelvin to Celsius
            const weatherCondition = data.weather[0].description;
            const cityName = data.name;
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            weatherInfo.innerHTML = `
                <h1>${cityName}</h1>
                <h2>${temperature}°C</h2>
                <p>${weatherCondition}</p>
                <img src="${iconUrl}" alt="${weatherCondition}">
            `;
        })
        .catch(error => console.error('Error fetching current weather data:', error));

    // Fetch 5-day forecast data
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecastInfo = document.getElementById('forecastInfo');
            forecastInfo.innerHTML = ''; // Clear previous forecast data

            // Iterate over the forecast data
            data.list.forEach((item, index) => {
                if (index % 8 === 0) { // Show forecast data for each day
                    const temperature = (item.main.temp - 273.15).toFixed(1); // Convert from Kelvin to Celsius
                    const weatherCondition = item.weather[0].description;
                    const iconUrl = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
                    const date = new Date(item.dt * 1000).toLocaleDateString(); // Convert timestamp to readable date

                    forecastInfo.innerHTML += `
                        <div>
                            <h3>${date}</h3>
                            <p>${temperature}°C</p>
                            <p>${weatherCondition}</p>
                            <img src="${iconUrl}" alt="${weatherCondition}">
                        </div>
                    `;
                }
            });
        })
        .catch(error => console.error('Error fetching forecast data:', error));
});
