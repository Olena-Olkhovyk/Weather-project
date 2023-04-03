function displayTemperature(response){
    console.log(response.data);
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
    descriptionElement.innerHTML=response.data.condition.description;

}

let apiKey = 'bc7dota507232177ccef048eb1a1ae2a';
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Kyiv&key=${apiKey}&units=metric`
axios.get(apiUrl).then(displayTemperature);
