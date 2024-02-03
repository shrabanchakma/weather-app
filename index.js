const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const api = "6f56866adc684862cbcbd2141c376586";
console.log("wow");
weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const city = cityInput.value;
  console.log("pressed");
  if (city) {
    // do something
  } else {
    displayError("Please Enter a City");
  }
});

async function getWeatherData(city) {}

function displayWeatherData(data) {}

function getWeatherEmoji(weatherId) {}

function displayError(message) {
  const errorElement = document.createElement("p");
  errorElement.textContent = message;
  errorElement.classList.add("errorDisplay");

  card.textContent = "";
  card.appendChild(errorElement);
  card.style.display = "flex";
}
