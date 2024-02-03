const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const api = "6f56866adc684862cbcbd2141c376586";
weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value;
  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      console.error(error);
    }
  } else {
    displayError("Please Enter a City");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("invalid input");
  }

  return await response.json();
}

function displayWeatherData(data) {
  console.log(data);
  const {
    name: city,
    main: { humidity, temp: temperature },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temperature - 273.5).toFixed(2)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  tempDisplay.classList.add("tempDisplay");
  cityDisplay.classList.add("cityDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {}

function displayError(message) {
  const errorElement = document.createElement("p");
  errorElement.textContent = message;
  errorElement.classList.add("errorDisplay");

  card.textContent = "";
  card.appendChild(errorElement);
  card.style.display = "block";
}
