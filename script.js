$(document).ready(function() {
  
  if(navigator.geolocation) {
   var latitude;
    var longitude;
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
  
  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lon="+longitude+"&lat="+latitude,function(json) {
       
    $("#loc").html("Current Location: "+(json.name)+", "+(json.sys.country)+"<br>Current Temperature: "+(json.main.temp)+" degree Celsius");
    
  });
    });     
}
});