 const apiKey = '3b95912a41a475fb7b7e99574663bd9a';
        const cityInput = document.getElementById('cityInput');
        const getWeatherButton = document.getElementById('getWeather');
        const weatherInfoDiv = document.getElementById('weatherInfo');
        const loadingDiv = document.getElementById('loading');

        getWeatherButton.addEventListener('click', () => {
            const city = cityInput.value;
            if (city) {
                getWeather(city);
            } else {
                weatherInfoDiv.textContent = 'Введите названия города.';
            }
        });

        async function getWeather(city) {
            loadingDiv.style.display = 'block';
            weatherInfoDiv.textContent = '';

            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(apiUrl);
                if (response.ok) {
                    const data = await response.json();
                    displayWeather(data);
                    setBackground(data.weather[0].main);

                } else {

                    throw new Error(`${response.status}`);
                }


            } catch (error) {
                weatherInfoDiv.textContent = 'Failed Fetch. Try another city.';
            } finally {
                loadingDiv.style.display = 'none';
            }
        }

        function displayWeather(data) {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const description = data.weather[0].description;
            const cityName = data.name;

            const weatherHtml = `
                <h2>Weather in ${cityName}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;

            weatherInfoDiv.innerHTML = weatherHtml;
        }

        function setBackground(weatherCondition) {
            let imageUrl = '';

            switch (weatherCondition) {
                case 'Clear':
                    imageUrl = 'img/Clear.jpg';
                    break;
                case 'Clouds':
                    imageUrl = 'img/Clouds.jpg';
                    break;
                case 'Rain':
                case 'Drizzle':
                    imageUrl = 'img/Drizzle.jpg';
                    break;
                case 'Thunderstorm':
                    imageUrl = 'img/Thunderstorm.jpg';
                    break;
                case 'Snow':
                    imageUrl = 'img/Snow.jpg';
                    break;
                default:
                    imageUrl = 'img/Bruh.jpg';
                    break;
            }

            document.body.style.backgroundImage = `url('${imageUrl}')`;
        }