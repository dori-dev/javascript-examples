let form = document.querySelector("form");
let token = "221783:63f4a8277152a";
let url = `https://one-api.ir/weather/?token=${token}&action=current&city=`;
let iconUrl = `https://one-api.ir/weather/?token=${token}&action=icon&id=`;
let result = document.querySelector("#result");
let showCity = document.querySelector("#showCity");
let showDescription = document.querySelector("#showDescription");
let weatherIcon = document.querySelector(".weather-wrapper img");
let maxTemp = document.querySelector("#maxTemp .deg");
let temp = document.querySelector("#temp .deg");
let minTemp = document.querySelector("#minTemp .deg");

async function getWeather(city) {
  try {
    const response = await fetch(url + city);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let value = e.target.city.value;
  if (value) {
    let result = await getWeather(value);
    result = result.result;
    showCity.textContent = value;
    showDescription.textContent = result.weather[0].description;
    weatherIcon.src = iconUrl + result.weather[0].icon;
    maxTemp.textContent = Math.round(result.main.temp_max);
    temp.textContent = Math.round(result.main.temp);
    minTemp.textContent = Math.round(result.main.temp_min);
  }
});
