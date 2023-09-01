const apiKey = "de6353bd06247c778359e8948f7b796a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const img = document.querySelector(".content img")

async function checkWeather(city){
    const response = await fetch(apiUrl+ city+`&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

    if(data.weather[0].main=='Clear'){
        img.src = "images/clear.png"
    }else if(data.weather[0].main=='Clouds'){
        img.src = "images/clouds.png"
    }else if(data.weather[0].main=='Drizzle'){
        img.src = "images/drizzle.png"
    }else if(data.weather[0].main=='Mist'){
        img.src = "images/mist.png"
    }else if(data.weather[0].main=='Rain'){
        img.src = "images/rain.png"
    }else if(data.weather[0].main=='Snow'){
        img.src = "images/snow.png"
    }

    console.log(data);
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
