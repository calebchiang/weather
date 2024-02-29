const searchButton = document.querySelector('#search-btn');
const weatherDisplay = document.querySelector('#weather-display');
const iconDisplay = document.querySelector('img');



async function getWeather(location){

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=10a06ac1e1484b90a70220948242902&q=${location}&aqi=no`, {mode:'cors'});
    const weatherData = await response.json();
    console.log(weatherData.current.temp_c);
    weatherDisplay.innerHTML = `Temperature in ${location}: ${weatherData.current.temp_c}°C<br>Conditions: ${weatherData.current.condition.text}`;
    iconDisplay.src = `${weatherData.current.condition.icon}`;

}

searchButton.addEventListener('click', () => {
    const locationInput = document.querySelector('input').value;
    getWeather(locationInput);
});