function sendRequest() {
  var xhttp = new XMLHttpRequest();
  apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=2b95400b35e0b522595d67faef0ebae4";
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  responseJson = this.responseText;
  extractDataFromJsonFile();
  }
};
xhttp.open("GET", apiURL, true);
xhttp.send();

}
function extractDataFromJsonFile(){
    var data = JSON.parse(responseJson);
    var cityName = data.name;
    var countryCode = data.sys.country;
    var generalWeather = data.weather[0].main;
    var weatherDescription = data.weather[0].description;
    var weatherImg = data.weather[0].icon;
    var averageTemperature = data.main.temp;
    var humidity = data.main.humidity;
    var pressure = data.main.pressure;
    var visibility = data.visibility;
    var windSpeed = data.wind.speed;
    document.getElementById("guide").innerHTML = "";
    document.getElementById("city-name").innerHTML = cityName+", "+countryCode;
    document.getElementById("general-info").innerHTML = generalWeather;
    document.getElementById("wether-condition").innerHTML = "General Weather Condition:  " +weatherDescription;
    document.getElementById("avgtemp").innerHTML = "Avergere Temperature:  "+averageTemperature;
    document.getElementById("humidity").innerHTML ="Humidity:  "+ humidity;
    document.getElementById("pressue").innerHTML ="Pressure: "+ pressure;
    document.getElementById("visibility").innerHTML ="visibility:  "+ visibility;
    document.getElementById("speed").innerHTML = "Wind Speed:  "+windSpeed;
    if(weatherImg.substring(0,2) == "02" || weatherImg.substring(0,2) == "03" || weatherImg.substring(0,2) == "04"){
      document.body.style.backgroundImage = "url('images/clouds.jpeg')";
    }
    else if(weatherImg.substring(0,2) == "09" || weatherImg.substring(0,2) == "10"){
      document.body.style.backgroundImage = "url('images/rain.jpeg')";
    }
    else if(weatherImg.substring(0,2) == "11"){
      document.body.style.backgroundImage = "url('images/thunder Strom.jpeg')";
    }else if(weatherImg.substring(0,2) == "13"){
      document.body.style.backgroundImage = "url('images/snow.jpeg')";
    }
    else if(weatherImg.substring(0,2) == "11"){
      document.body.style.backgroundImage = "url('images/mist.jpeg')";
    }
    else{
      document.body.style.backgroundImage = "url('images/clear sky.jpeg')"
    }

}
window.onload = function(){
  city = "";
  document.getElementById("zip-code-input").onchange = function(){
    city = this.value;
  }
  document.getElementsByClassName("fas fa-search")[0].onclick = function(){
    if(city == ""){
      alert("First enter the city name....");
    }
    else{
      sendRequest();
    } 
  } 
}