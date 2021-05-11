const country = document.querySelector("#country");
const city = document.querySelector("#city");
const check = document.querySelector("#check");

const tempIcon = document.querySelector("#tempIcon");
const weatherCountry = document.querySelector("#weatherCountry");
const description = document.querySelector("#description");
const weatherDescription = document.querySelector("#weatherDescription");

check.addEventListener("click", () => {
    let key = 'a03812bcccf9afba7e81f97a9075a749';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=${key}&units=metric`;

    function roundTemp(temp) {
        temp = Math.round(temp);
        return temp;
    }

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${roundTemp(data.main.temp)} °C`;

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












