const apiKey='cc8f2ca6d4f204750fee41dae055aa36';
const baseApi='https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url=`${baseApi}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(Response => Response.json())
    .then(data => updateUI(data))
}


document.getElementById("button").addEventListener('click',() => {
    const inputCity=document.getElementById("city").value;
    getWeatherData(inputCity)
})

const updateUI = data => {
    document.getElementById("showCity").innerText=data.name || "unknown Location!";
    document.getElementById("show-temperature").innerText=data.main.temp;
    document.getElementById("weather-status").innerText=data.weather[0].main;
    document.getElementById("icon").setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

    document.getElementById("city").value='';
}

getWeatherData('Dhaka');



