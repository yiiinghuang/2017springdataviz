// ***** Global variables ***** //

var apiKey = '45c66834e16c6a60b0cc926ba1f82cf6';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city;
var units = 'metric';
var weatherData;
var temperature = 0;
var humidity = 0;
var button;



// ***** Setup function ***** //

function setup(){
  createCanvas(1000,1000);
  button = select('#submit');
  city = select('#city');
  button.mousePressed(queryAPI);
}

function queryAPI(){
    var query = baseURL + city.value()+ '&apiKey=' + apiKey + '&units=' + units;
    loadJSON(query,getWeatherData);
}

 function getWeatherData(apiData){
   weatherData = apiData;
   temperture = weatherData.main.temp;
   humidity = weatherData.main.humidity;
   console.log(weatherData);
 }

// ***** Draw function ***** //


function draw(){
  background(255);
  fill(0);
  noStroke();
  if (weatherData){
    ellipse(300, 300, temperture * 10, humidity * 5);
    }
  }
