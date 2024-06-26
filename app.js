let current4cast = document.querySelector('.current-forecast');

function weatherWizard(){
    let apiKey = '9da597c47ba44e7ba434f530653fc329',
        city = document.querySelector('.searchbox').value;
    
    if(!city){
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`,
            forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`;
    
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch( error => {
            console.log(`Error fetching curent weather data: ${error}`);
            alert('Error fetching current weather data. Please try again');
        });
    
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.list);
        })
        .catch( error => {
            console.log('Error fetching hourly forecast data:',error);
            alert('Error fetching hourly forecast data. Please try again');
        });
}

function displayWeather(data){
    const tempinfo = document.querySelector('.temp-info'),
        weatherData = document.querySelector('.weather-info'),
        weatherIcon = document.querySelector('#weathericon'),
        hourlyforecast = document.querySelector('.hourly-forecast');
    
    tempinfo.innerHTML = '';
    weatherData.innerHTML = '';
    hourlyforecast.innerHTML = '';

    if(data.cod='404'){
        weatherData.innerHTML = `<p>${data.message}</p>`
    }else{
        const cityName = data.name,
            temprature = Math.round(data.main.temp),
            description = data.weather[0].description,
            iconCode = data.weather[0].icon,
            iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`,
            tempHTML = `<p>${temprature}</p>`,
            weatherHTML = `
                <p>${cityName}</p>
                <p>${description}</p>
            `;
        
        tempinfo.innerHTML = tempHTML;
        weatherData.innerHTML = weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

function displayHourlyForecast(hourlyData){
    const hourlyforecast = document.querySelector('.hourly-forecast'),
        next24Hours = hourlyData.slice(0,8);

    next24Hours.forEach(item =>{

    })
}
