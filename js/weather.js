const API_KEY = "e48e37cae2577244df7ec51bce55e0f7";


function GeoOk(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    fetch(API)
        .then(value => value.json())
        .then(data => {
            const weather = data.weather[0]["description"];
            const temp = Math.round(data.main.temp);
            const region = data.name;
            const weatherBox = document.querySelector(".weather-box");
            const weatherInfo = weatherBox.querySelector(".weather");
            if (weather.includes('rain')) {
                weatherInfo.innerHTML = "rainy"
            } else if (weather.includes('sun')) {
                weatherInfo.innerHTML = "sunny"
            } else if (weather.includes('cloud')) {
                weatherInfo.innerHTML = "cloud"
            } else {
                weatherInfo.innerHTML = `${weather}`;    
            }
            const weatherTemp = weatherBox.querySelector(".temp");
            const weatherRegion = weatherBox.querySelector(".region");
            weatherTemp.innerHTML = `${temp}`;
            weatherRegion.innerHTML = `${region}`;
        });
}

function GeoErr() {
    alert("We cant find you!");
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoErr);