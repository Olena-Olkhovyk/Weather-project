function formatDate(timestamp){
   let date =new Date(timestamp);
   let hours=date.getHours();
   if(hours < 10){
     hours=`0${hours}`
   }
   let minutes=date.getMinutes();
   if(minutes < 10){
     minutes=`0${minutes}`
   }
   let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}`;
}
function displayTemperature(response){
  console.log(response.data);
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let humidityElement=document.querySelector("#humid");
    let windElement=document.querySelector("#wind");
    let dateElement=document.querySelector("#date");
    let descriptionElement=document.querySelector("#description");
    let picElement=document.querySelector("#pic");
  
    temperatureElement.innerHTML=Math.round(celsiusTemperature);
    celsiusTemperature=response.data.temperature.current
    cityElement.innerHTML=response.data.city;
    humidityElement.innerHTML=response.data.temperature.humidity;
    windElement.innerHTML=response.data.wind.speed;
    dateElement.innerHTML=formatDate(response.data.time*1000);
    descriptionElement.innerHTML=response.data.condition.description;
    picElement.setAttribute("src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`);
    picElement.setAttribute("alt",
    response.data.condition.description);
}
function search(city){
  let apiKey = 'bc7dota507232177ccef048eb1a1ae2a';
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
  axios.get(apiUrl).then(displayTemperature);
  }
function handleSubmit(event){
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}
let celsiusTemperature=null;

function showFahrenheitTemperature(event){
  event.preventDefault();
  let temperatureFahr=document.querySelector("#temperature");
  celsius.classList.remove("active");
  fahrenheit.classList.add("active");
  let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  temperatureFahr.innerHTML = Math.round(fahrenheitTemp);
}
function showCelsiusTemperature(event){
  event.preventDefault();
  celsius.classList.add("active");
  fahrenheit.classList.remove("active");
  let temperatureElement=document.querySelector("#temperature");
  temperatureElement.innerHTML=Math.round(celsiusTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);


let fahrenheit=document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", showFahrenheitTemperature);
let celsius=document.querySelector("#celsius-link");
celsius.addEventListener("click", showCelsiusTemperature);
search("Kyiv");