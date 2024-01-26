
const API_KEY = "efc2951a1074442c8b241a7e99f12b5d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `Today's weather is ${data.weather[0].main} and temperature is ${data.main.temp}.`
        city.innerText = `You live in ${data.name}.`
    });
}
function onGeoError(){
    alert("Can't find you... No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);