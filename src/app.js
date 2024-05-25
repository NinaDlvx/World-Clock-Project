function updateTime() {
  //LA
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date"); // or document.querySelector("#los-angeles.date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesMeridiem = losAngelesElement.querySelector(".meridiem");

  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("hh:mm:ss");
  losAngelesMeridiem.innerHTML = moment().tz("America/Los_Angeles").format("A");

  //Brussels
  let brusselsElement = document.querySelector("#brussels");
  let brusselsDateElement = brusselsElement.querySelector(".date");
  let brusselsTimeElement = brusselsElement.querySelector(".time");
  let brusselsMeridiem = brusselsElement.querySelector(".meridiem");

  brusselsDateElement.innerHTML = moment()
    .tz("Europe/Brussels")
    .format("MMMM Do YYYY");
  brusselsTimeElement.innerHTML = moment()
    .tz("Europe/Brussels")
    .format("hh:mm:ss");
  brusselsMeridiem.innerHTML = moment().tz("Europe/Brussels").format("A");

  //New Delhi
  let newDelhiElement = document.querySelector("#new-delhi");
  let newDelhiDateElement = newDelhiElement.querySelector(".date");
  let newDelhiTimeElement = newDelhiElement.querySelector(".time");
  let newDelhiMeridiem = newDelhiElement.querySelector(".meridiem");

  newDelhiDateElement.innerHTML = moment()
    .tz("Asia/Kolkata")
    .format("MMMM Do YYYY");
  newDelhiTimeElement.innerHTML = moment()
    .tz("Asia/Kolkata")
    .format("hh:mm:ss");
  newDelhiMeridiem.innerHTML = moment().tz("Asia/Kolkata").format("A");

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyMeridiem = sydneyElement.querySelector(".meridiem");

  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("hh:mm:ss");
  sydneyMeridiem.innerHTML = moment().tz("Australia/Sydney").format("A");
}
setInterval(updateTime, 1000);
//setInterval(function () {}); if you don't have function created

function updateCity(event) {
  setInterval(function () {
    let cityTimezone = event.target.value;
    let cityName = event.target.options[event.target.selectedIndex].text;
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div>
            <h2 class="time">${cityTime.format("hh:mm:ss")}</h2>
            <div class="meridiem">${cityTime.format("A")}</div>
          </div>
        </div>`;
  }, 1000);
}

let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement.addEventListener("change", updateCity);
