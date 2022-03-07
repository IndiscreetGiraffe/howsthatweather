var API_Key = "bee83911dfeeb510a7e77e6f32642452";
var searchBtn = document.querySelector("#search-btn");
var current = document.querySelector('.current-weather');
var cityName = document.getElementById("city").value;


searchBtn.addEventListener("click", function () {
    currentForecast();

});

let currentForecast = function () {
    let cityName = document.getElementById("city").value;
    console.log(cityName);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}&units=imperial`)
    .then(function(response) {
        response.json().then(function(data) {
            console.log(data);

        });
    });
}
