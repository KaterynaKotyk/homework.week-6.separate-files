let now = new Date();

let hour = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let day = days[now.getDay()];

let time = document.querySelector("#time");
time.innerHTML = `${day} ${hour}:${minutes}`;

function CityName(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  city.innerHTML = `${cityInput.value}`;
}

let ButtonForCityName = document.querySelector("#city-button");
ButtonForCityName.addEventListener("submit", CityName);
