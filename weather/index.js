const apiKey="3b3a9721281fa7fbdd993cadf341672e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");


searchbtn.addEventListener("click", ()=>{
    chechweather(searchbox.value);
    // console.log(searchbox.value);
    // console.log("hello");

})

async function chechweather(city) {
    
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";

}else{
var data=await response.json();
console.log(data); 
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML=Math.round(data.main.humidity)+"%";
document.querySelector(".wind").innerHTML=Math.round(data.wind.speed)+"km/h";
if(data.weather[0].main== "Clouds"){
    weathericon.src="image/cloud.png"
}else if(data.weather[0].main== "clear"){
    weathericon.src="image/clear.png"
}else if(data.weather[0].main== "rain"){
    weathericon.src="image/rain.png"
}else if(data.weather[0].main== "drizzle"){
    weathericon.src="image/Drizzle.png"
}else if(data.weather[0].main== "Mist"){
    weathericon.src="image/mist.png"
}
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";


}
}


// b1ed4eee7a9db73263640d34a6e7dc20





// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}






// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=b1ed4eee7a9db73263640d34a6e7dc20