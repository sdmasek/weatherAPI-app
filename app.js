// let weather = {
//     "apiKey": "5baf9dbfd246f1b50cd4871d24bc031f",
//     fetchWeather: function () {
//         fetch("https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=5baf9dbfd246f1b50cd4871d24bc031f"
//         ).then((response) => response.json())
//             .then((data) => console.log(data));
//     }
// }
const card = document.querySelector(".card");
const cityName = document.querySelector(".city")

let weather = {
    description: this.description,
    name: this.name

}

function fetchWeather() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=5baf9dbfd246f1b50cd4871d24bc031f"
    ).then((response) => response.json())
        .then((data) => {
            if (data) {

                card.innerHTML = `
                <div class="weather">
                <h2 class="city">Weather in ${data.name}</h2>
                <h1 class="temp">${data.main.temp}</h1>
                </div>
                <img src="" alt="" class="icon">
                <div class="description">${data.description}</div>
                <div class="humidity">Humidity: 60%</div>
                <div class="wind">Wind speed: 6.2k/hr</div>
                
                `
            }

        })
}
