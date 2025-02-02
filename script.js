const inputBox=document.querySelector(".input-box");
const btn=document.getElementById("btn");
const temp=document.querySelector(".temperature");
const desc=document.querySelector(".description");
const humidity=document.getElementById("humidity");
const wind=document.getElementById("wind");
const weatherimg=document.querySelector(".weather-img");
const location_not_found=document.querySelector(".location-not-found");
const weatherbody=document.querySelector(".weather-body");
async function checkweather(city){
    let key="enter your api key here";
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    let weatherdata=await fetch(`${url}`).then(response=>response.json())
        console.log(weatherdata);


        if(weatherdata.cod==='404'){
           location_not_found.style.display="flex";
           weatherbody.style.display="none";
            return;
        }

        weatherbody.style.display="flex";
        location_not_found.style.display="none";
    temp.innerHTML=`${Math.round(weatherdata.main.temp-273.15)}°C`;
     desc.innerHTML=weatherdata.weather[0].description;   
     humidity.innerText=`${weatherdata.main.humidity}%`;
     wind.innerText=`${weatherdata.wind.speed}Km/h`;

     switch(weatherdata.weather[0].main){
        case 'Clouds':
            weatherimg.src="./images/cloud.png";
            break;
       case 'Clear':
        weatherimg.src="./images/clear.png";
            break;
        case 'Rain':
            weatherimg.src="./images/rain.png";
            break;
        case 'Snow':
            weatherimg.src="./images/snow.png";
            break;
        case 'Mist':
            weatherimg.src="./images/mist.png";
            break;
    

     }
    
}




btn.addEventListener("click",()=>{
    checkweather(inputBox.value);
})
