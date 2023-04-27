const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.description');
const minmax = document.querySelector('.minmax');

const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'f123c5b83b4fa3c22579a2469e1dd47c';

const setQuery = (e) => {
    if(e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult =(cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query).then(weather => {
        return weather.json();
    }).then(displayResult)
    //console.log(query);
}
const displayResult = (result) => {
    console.log(result);
    city.innerText = `${result.name}, ${result.sys.country}`;
    temp.innerText = `${Math.round(result.main.temp)}°C`;
    desc.innerText = result.weather[0].description;
    console.log(desc);
    minmax.innerText = `${Math.round(result.main.temp_min)} °C / ${Math.round(result.main.temp_max)} °C`;
    console.log(minmax);
}
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);
