// Fetch data

async function getWeatherData() {
    try {
        const response = await fetch(
            'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Shanghai/next7days?unitGroup=metric&include=fcst%2Cstatsfcst%2Cstats%2Cdays%2Ccurrent&key=K9DBXADCCF4V6TWJPWSSWFCBN&contentType=json',
            {mode:'cors'});
        const weatherData = await response.json();
        matchToday(weatherData);
        return weatherData
    } catch(error) {

    }
}


// get data for today
const matchToday = function (data) {
    city.textContent = data["address"];
    tempatureToday.textContent = data["days"][0]["temp"];
    descriptionToday.textContent = data["description"];
    condition.textContent = data["days"][0]["conditions"];
}




// get data for tomorrow












// Set display control
const city = document.querySelector(".location")
const tempatureToday = document.querySelector(".temp")
const descriptionToday = document.querySelector(".description")
const condition = document.querySelector(".condition")
