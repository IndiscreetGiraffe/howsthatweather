var API_Key = "bee83911dfeeb510a7e77e6f32642452";
var searchBtn = document.querySelector("#search-btn");
var current = document.querySelector('.current-header');
var temperature = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');
var uv = document.querySelector('.uvi');



searchBtn.addEventListener("click", function () {
    currentForecast();
    futureForecast();

});

function currentForecast() {
    var  currentName = document.getElementById("city").value;
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${currentName}&appid=${API_Key}&units=imperial`;
    fetch(apiURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        current.textContent = "City : " + data.name;
        temperature.textContent = "Temperature : " + data.main.temp + "F";
        humidity.textContent = "Humidity : " + data.main.humidity + "%";
        wind.textContent = "Wind : " + data.wind.speed + "MPH";

    });
}

function futureForecast () {
    var currentName = document.getElementById("city").value;
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentName}&appid=${API_Key}&units=imperial`;

    fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
}
