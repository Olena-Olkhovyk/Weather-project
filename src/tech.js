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
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let humidityElement=document.querySelector("#humid");
    let windElement=document.querySelector("#wind");
    let dateElement=document.querySelector("#date");
    let descriptionElement=document.querySelector("#description");
  
    temperatureElement.innerHTML=Math.round(response.data.temperature.current);
    cityElement.innerHTML=response.data.city;
    humidityElement.innerHTML=response.data.temperature.humidity;
    windElement.innerHTML=response.data.wind.speed;
    dateElement.innerHTML=formatDate(response.data.time*1000);
    descriptionElement.innerHTML=response.data.condition.description;

}

let apiKey = 'bc7dota507232177ccef048eb1a1ae2a';
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Kyiv&key=${apiKey}&units=metric`
axios.get(apiUrl).then(displayTemperature);
