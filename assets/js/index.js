var API_Key = "bee83911dfeeb510a7e77e6f32642452";
var API_Key2 = "0270c110381e718769a34b7888333a3a"
var searchBtn = document.querySelector("#search-btn");
var current = document.querySelector('.current-header');
var temperature = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');
var uvi = document.querySelector('.uvi');
var day1 = document.querySelector('.card-1');




searchBtn.addEventListener("click", function () {
    currentForecast();
    futureForecast();
    saveCity();

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

        current.textContent = data.name;
        temperature.textContent = "Temperature : " + data.main.temp + "F";
        humidity.textContent = "Humidity : " + data.main.humidity + "%";
        wind.textContent = "Wind : " + data.wind.speed + "MPH";
        uvi.textContent = "UVI : " + data.main.uvi;

    });
}

function futureForecast () {
    var currentName = document.getElementById("city").value;
    var futureURL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${currentName}&appid=${API_Key2}&units=imperial`;

    fetch(futureURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

    });
}

function saveCity () {
    var currentName = document.getElementById("city").value;
    var cityHistory = JSON.parse(localStorage.getItem(saveCity)) || [];
    cityHistory.push(currentName);
    localStorage.setItem("cityHistory", JSON.stringify(cityHistory));
    localStorage.getItem(cityHistory)
}


