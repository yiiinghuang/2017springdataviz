var url1 = 'https://gbfs.citibikenyc.com/gbfs/en/station_status.json';
//var url2 = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json'
var bikeData;
var bikeAvlb = 0;
var dockAvlb = 0;
var totalBikeAvlb =0;
var totalDockAvlb =0;
var button;
var rawData;
var stations;

function setup(){
	createCanvas(1000, 5000);
	button = select('#submit');
	button.mousePressed(queryAPI);
	queryAPI();
	setInterval(queryAPI, 10000);

}

function queryAPI(){
	totalBikeAvlb = 0;
	totalDockAvlb = 0;
	loadJSON(url1, gotData);
	//loadJSON(url2, gotData);
	console.log('loading..');
}

/*
function gotData(apiData){
	rawData = {};
	stations = apiData.data.stations;
	for (var i = 0; i < stations.length; i++){
		if(rawData[stations[i].station_id] == undefined){
			rawData.station_id = [];
			rawData.station_id.push(stations[i].num_bikes_available);
			rawData.station_id.push(stations[i].num_docks_available);
			totalBikeAvlb += stations[i].num_bikes_available;
			totalDockAvlb += stations[i].num_docks_available;
		} else {
			rawData.station_id.push(stations[i].name);
		}
    console.log(totalDockAvlb);
    console.log(totalBikeAvlb);
	}
} 
*/


function gotData(apiData){
	bikeData = apiData
	for(var i = 0; i < apiData.data.stations.length; i++) {
		stationID = apiData.data.stations[i].station_id;
		bikeAvlb = apiData.data.stations[i].num_bikes_available;
		dockAvlb = apiData.data.stations[i].num_docks_available;
		totalBikeAvlb += bikeAvlb;
		totalDockAvlb += dockAvlb;
	}

	console.log(totalBikeAvlb);
	console.log(totalDockAvlb);
}


function draw(apiData){
  background(255);
  fill(0);
  stroke(0);
  textAlign(LEFT, TOP);
  text('Total Number of Available Bikes: ' + totalBikeAvlb, 0, 20);
  rect(220, 20,totalBikeAvlb * 0.02, 12);
  text('Total Number of Available Docks:' + totalDockAvlb, 0, 40);
  rect(220, 40,totalDockAvlb * 0.02, 12); 

}



/*
function draw(apiData){
background(255);
  noFill;
  stroke(0);
  rect(220, 20,totalBikeAvlb * 0.02 + totalDockAvlb * 0.02 , 12);
  rect(220, 40,totalDockAvlb * 0.02 + totalBikeAvlb * 0.02 , 12); 

}
*/




