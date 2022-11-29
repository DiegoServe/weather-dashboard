let weather = {
    "apiKey": "490ad53367baba09e51242fc3ea97ebb",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + "&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        // target each of the elements
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);

        // display each element on the featured city block
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
        document.querySelector(".weather").classList.remove("hidden");
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

// allow enter to excute the search
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});





// var getCityWeather = function(city) {
//     var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + "baltimore" + "&appid=490ad53367baba09e51242fc3ea97ebb";

//     fetch(apiUrl).then(function(response) {
//         response.json().then(function(data) {
//           console.log(data);
//         });
//       });
//     };