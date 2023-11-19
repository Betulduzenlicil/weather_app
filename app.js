
const apiKey = "feec9c8ff3dd920b17ff3d67c65a3910";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cardBody=document.querySelector(".card-body")
const weatherButton= document.querySelector(".btn")
const weatherInput= document.querySelector("#weather-input")
let allconditional=[]
let currentDate=new Date();
let update = currentDate.toLocaleDateString();
let time = currentDate.toLocaleTimeString();

const getWeather = async (city) => {
    try {
  

        const res = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

        if (!res.ok) {
            throw new Error(`${res.status}`);
        }

        const data = await res.json();
        allconditional = data
        weatherCondationals(allconditional)
        console.log(data);

    } catch (error) {
        console.log(error);
    }
};



const weatherCondationals=(allconditional)=>{
    cardBody.innerHTML=`
    <h1>${allconditional.name}, ${allconditional.sys.country}</h1>
    <h2>🌡️${Math.round(allconditional.main.temp)}°C🌡️</h2>
    <p>Weather Conditionals: ${allconditional.weather[0].main}, ${allconditional.weather[0].description}</p>
    <p class= fs-8>💧Humidity: ${allconditional.main.humidity}%💧</p>
    <p>Wind Speed: ${allconditional.wind.speed}km/h</p>
    
    `

   
}

weatherButton.addEventListener("click", () => {
    const Inputvalue = weatherInput.value.trim();
    console.log(Inputvalue);
   allconditional=Inputvalue
    if (Inputvalue) {
        getWeather(Inputvalue);
        Inputvalue.textContent = "";
       
       
    } 
    else {
      alert("Please Enter A Cıty Name");
    }
  });

// getWeather("ankara")

getWeather(allconditional)
