function sendRequest() {
//   Add your api here like "htpp:...q="+city+"&..."
  apiURL = ;
  $.getJSON(apiURL, function(result){
    data = result;
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
    $("#guide").html("");
    $("#city-name").html(cityName+", "+countryCode);
    $("#general-info").html(generalWeather);
    $("#wether-condition").html("General Weather Condition:  " +weatherDescription);
    $("#avgtemp").html("Avergere Temperature:  "+averageTemperature);
    $("#humidity").html("Humidity:  "+ humidity);
    $("#pressue").html("Pressure: "+ pressure);
    $("#visibility").html("visibility:  "+ visibility);
    $("#speed").html( "Wind Speed:  "+windSpeed);
    if(weatherImg.substring(0,2) == "02" || weatherImg.substring(0,2) == "03" || weatherImg.substring(0,2) == "04"){
      $(document.body).css('background-image', "url('images/clouds.jpeg')");
    }
    else if(weatherImg.substring(0,2) == "09" || weatherImg.substring(0,2) == "10"){
      $(document.body).css('background-image', "url('images/rain.jpeg')");
    }
    else if(weatherImg.substring(0,2) == "11"){
      $(document.body).css('background-image', "url('images/thunder Strom.jpeg')");
    }else if(weatherImg.substring(0,2) == "13"){
      $(document.body).css('background-image', "url('images/snow.jpeg')");
    }
    else if(weatherImg.substring(0,2) == "11"){
      $(document.body).css('background-image', "url('images/mist.jpeg')");
    }
    else{
      $(document.body).css('background-image', "url('images/clear sky.jpeg')");
    } 
}); 
}

$( document ).ready(function() {
  city = "";
  $("#zip-code-input").change(function(){
    city = this.value;
  });
  $(".fas").click(function(){
    if(city == ""){
      alert("First enter the city name....");
    }
    else{
      sendRequest();
    } 
  });
});
