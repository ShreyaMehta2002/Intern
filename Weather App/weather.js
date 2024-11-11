document.getElementById('btnWeather').addEventListener('click',getWeather);
    

function getWeather(){
    let city =document.getElementById('cityInput').value;
    if(!city){
        alert('Please enter a city !!');
        console.log("Error");
        return;

    }

    const apiKey='d5c968a170482ee415953aa03bef0fdb';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    //fetching information from the url
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        });
       
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const cityName = data.name;

    const weatherDisplay = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${description}</p>
    `;
    document.getElementById('weatherResult').innerHTML = weatherDisplay;
}



