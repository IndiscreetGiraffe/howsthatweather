var api_Key = "bee83911dfeeb510a7e77e6f32642452";
var searchBtn = document.querySelector("#searchBtn");
var currentWeather = document.querySelector(".current-weather");
var userCity = document.querySelector("city");


searchBtn.addEventListener("click", function () {
    currentWeather();

});

let currentWeather = function () {
    let userCity = document.getElementById("city");
    console.log(userCity);

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${api_Key}&units=imperial')
    .then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            $('.current-header').text(userCity)
        })
    })
}
