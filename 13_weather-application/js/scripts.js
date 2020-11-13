// assign the container for the five day forcast to be appended to
let containerDiv = document.getElementById("containerDiv")

// save the fetch url in a variable
const url = "//api.openweathermap.org/data/2.5/forecast?id=4853828&appid=158f06f95bf7aa3bf86c7456d732c557&units=imperial"

// create a new date based on today
const date = new Date()

// pull just the day number from that date
const todayDayNumber = date.getDay()

// assign the day number to a new variable
let forecastDayNumber = todayDayNumber

// fetch the weather data
fetch(url)
  .then((response) => response.json())
  .then((weatherData) => {
    // log weather data to console
    console.log(weatherData)

    // set the city name in the DOM
    document.getElementById("place").innerHTML = weatherData.city.name

    // assign forecast data and nextFiveDaysByName empty arrays
    // to be pushed on later
    let forecast = []
    let nextFiveDaysByName = []

    // create an array that allows me to pull the day name based on the day number
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    // loop through the entire weather data list
    for (i = 0; i < weatherData.list.length; i++) {
      // get the time from each item in the list
      var time = weatherData.list[i].dt_txt

      // if the time includes 6AM (which is 12PM UTC)
      // i am pulling data for Des Moines, which is 6 hours behind UTC
      if (time.includes("06:00:00")) {
        // push the weather data that matches the correct time onto my forecast array
        forecast.push(weatherData.list[i])

        // increment the forecast day number by one
        forecastDayNumber += 1

        // if day number would be 7, make it 0 (for the 0 based arrays)
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0
        }

        // push the actualy day name onto the nextFiveDaysByName array
        nextFiveDaysByName.push(weekday[forecastDayNumber])
      }
    }

    // once all five days have been found and pushed onto the forecast array
    // then populate the DOM
    if (forecast.length === 5) {
      // loop through each of the five items
      forecast.forEach((day, index) => {
        // append the day weather info div to the main container
        // to get the day of the week, use the current array index of forecast
        // to pull the proper day from nextFiveDaysByName
        containerDiv.innerHTML += `
        <div>
        <h3>${nextFiveDaysByName[index]}</h3>
        <p>${day.main.temp}&deg;F</p>
        <img src="//openweathermap.org/img/w/${day.weather[0].icon}.png" alt="${day.weather[0].main}">
        </div>
        `
      })
    }
  })
