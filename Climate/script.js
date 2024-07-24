const wheatherApi = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0a279d526cmshdefcbcde807bdd6p129a4fjsn4595f13ccf41",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

let temp = document.getElementById("temp");
let weatherIcon = document.getElementById("imgbox");

async function CheckWheather() {
  let city = temp.value;
  const dataFetch = await fetch(
    `https://open-weather13.p.rapidapi.com/city/${city}`,
    wheatherApi
  );
  const result = await dataFetch.json();
  console.log(result);
  document.getElementById("city").innerHTML = result.name;
  document.getElementById("cel").innerHTML = Math.round(result.main.temp);
  document.querySelector(".hum").innerHTML = result.main.humidity + "%";
  document.querySelector(".wind").innerHTML = result.wind.speed + "km/h";

  if (result.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (result.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (result.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (result.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (result.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (result.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  }
}
