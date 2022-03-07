var API_Key = "bee83911dfeeb510a7e77e6f32642452";
var searchBtn = document.querySelector("#search-btn");
var current = document.querySelector('.current-weather');


searchBtn.addEventListener("click", function () {
    currentForecast();

});

function currentForecast() {
    var cityName = document.getElementById("city").value;
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}&units=imperial`;
    fetch(apiURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        current.textContent = "City: " + data.name;

    });
}
