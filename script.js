
const api = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';

const api_key = "900ba812192872cbbb9f73b635236d43";

const inputValue = document.querySelector(".input");
const windspeed = document.querySelector(".windspeed");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");

function input(e){
    e.preventDefault();
   const word =  document.querySelector("#inputValue").value;
//    console.log(word);
 fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${api_key}`
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    var descp = data.weather[0].description;
    var tempt = data.main.temp;
    var windspd = data.wind.speed;

    windspeed.innerHTML = "Windspeed: " + windspd;
    desc.innerHTML = "Desc: " + descp;
    temp.innerHTML = "Temp: " + Math.floor(tempt - 273.15);
  });
}


inputValue.addEventListener('submit', input);
