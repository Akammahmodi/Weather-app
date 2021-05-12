// variable declaration
const country = document.querySelector("#country");
const city = document.querySelector("#city");
const check = document.querySelector("#check");
const tempIcon = document.querySelector("#tempIcon");
const weatherCountry = document.querySelector("#weatherCountry");
const description = document.querySelector("#description");
const weatherDescription = document.querySelector("#weatherDescription");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");
const day4 = document.querySelector("#day4");
const day5 = document.querySelector("#day5");
const day6 = document.querySelector("#day6");





// Here we build the URL so we can get a data from server side.
check.addEventListener("click", () => {
    let key = 'a03812bcccf9afba7e81f97a9075a749';//Set up the API key
    let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=${key}&units=metric`; //use units=metric to convert fahrenheit to celsius
    // let url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value},${country.value}&appid=${key}&units=metric`;

//get Rand number temp
    function roundTemp(temp) {
        temp = Math.round(temp);
        return temp;
    }
// Here we create the AJAX call
    fetch(url1).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);

        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${roundTemp(data.main.temp)} °C`;

//getting right icon using openweather=> "https://openweathermap.org/weather-conditions"
        data.weather.forEach(items => {
            weatherDescription.innerHTML = items.description
            if (items.id < 250) {
                tempIcon.src = `storm.svg`;
            } else if (items.id < 350) {
                tempIcon.src = `drizzle.svg`;
            } else if (items.id < 550) {
                tempIcon.src = `rain.svg`;
            } else if (items.id < 650) {
                tempIcon.src = `snow.svg`;
            } else if (items.id < 750) {
                tempIcon.src = `atmosphere.svg`;
            } else if (items.id === 800) {
                tempIcon.src = `sun.svg`;
            } else if (items.id > 800) {
                tempIcon.src = `clouds.svg`;
            }
        })
    })
})







