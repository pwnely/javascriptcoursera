function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '4f97170570890ea0e67bbb70c9614fe0';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

    if (data.cod === '404') {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '<p>City not found, try another</p>'

        return;
      }

    console.log('response data', data);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    
                            })
                                 
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '<p>Failed to fetch weather. Please try again.</p>';
      });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );