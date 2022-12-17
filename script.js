var fetchDatabtn = document.querySelector("#fetchDataBtn");
var heading1 = document.querySelector("#heading1");
var header = document.querySelector("#header");

// var x = document.querySelector("#coord");

var weatherData;
var latitude = 27;
var longitude = 81;
var container;

function showPosition(position) {
    latitude = Math.round(position.coords.latitude);
    longitude = Math.round(position.coords.longitude);
    console.log(latitude + "   " + longitude);
}
navigator.geolocation.getCurrentPosition(showPosition);


// fetch("https://api.openweathermap.org/data/2.5/weather?lat=23&lon=81&appid=0db5651271ddadd063ad6732add762c8").then(x => x.json()).then(data => console.log(data.clouds));

function fecthingData(){
    return new Promise((resolve, reject) =>{
        let data = fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ latitude + "&lon=" + longitude + "&appid=0db5651271ddadd063ad6732add762c8");
        resolve(data);
        reject("rejected url");
    });
}

fecthingData().then((data)=>{
    weatherData = data.json();
    return weatherData;
}).then((data) =>{

    container = document.createElement("div");

    var p1 = document.createElement("p");
    p1.innerText = "Location: " + data.name;
    container.appendChild(p1);

    var p2 = document.createElement("p");
    p2.innerText = "Lat: " + data.coord.lat;
    container.appendChild(p2);

    var p3 = document.createElement("p");
    p3.innerText = "Long: " + data.coord.lon;
    container.appendChild(p3);

    var p4 = document.createElement("p");
    p4.innerText = "TimeZone: " + data.timezone;
    container.appendChild(p4);

    var p5 = document.createElement("p");
    p5.innerText = "Wind Speed: " + data.wind.speed;
    container.appendChild(p5);

    var p6 = document.createElement("p");
    p6.innerText = "Pressure: " + data.main.pressure;
    container.appendChild(p6);

    var p7 = document.createElement("p");
    p7.innerText = "Humidity: " + data.main.humidity;
    container.appendChild(p7);

    var p8 = document.createElement("p");
    p8.innerText = "Wind Direction: " + data.wind.deg;
    container.appendChild(p8);

    var p9 = document.createElement("p");
    p9.innerText = "UV Index: " + "5.2";
    container.appendChild(p9);

    var p10 = document.createElement("p");
    p10.innerText = "Feels Like: " + data.main.feels_like;
    container.appendChild(p10);



}).catch((err) =>{
    console.log(err);
});

function renderData(){
    fetchDatabtn.style.display= "none";

    heading1.innerHTML = "Weather API";

    var HeadingLat = document.createElement("p");
    HeadingLat.innerText=`latitude: ${latitude}`;

    var HeadingLon = document.createElement("p");
    HeadingLon.innerText=`longitude: ${longitude}`;

    header.appendChild(HeadingLat);
    header.appendChild(HeadingLon);

    var h1 = document.createElement("h1");
    h1.innerText = "Weather Data";

    document.body.appendChild(h1);
    document.body.appendChild(container);
}

// function renderData() {
//     fetchDatabtn.style.display = "none";
//     var elementsCreated = [];
//     elementsCreated.push(document.createElement("h1").innerText = "Weather Data");
//     elementsCreated.push(document.createElement("p").innerText = "Location: " + weatherData.name);
//     elementsCreated.push(document.createElement("p").innerText = "Lat: " + weatherData.coord.lat);
//     elementsCreated.push(document.createElement("p").innerText = "Long: " + weatherData.coord.lon);
//     elementsCreated.push(document.createElement("p").innerText = "TimeZone: " + weatherData.timezone);
//     elementsCreated.push(document.createElement("p").innerText = "Wind Speed: " + weatherData.wind.speed);
//     elementsCreated.push(document.createElement("p").innerText = "Pressure: " + weatherData.main.pressure);
//     elementsCreated.push(document.createElement("p").innerText = "Humidity: " + weatherData.main.humidity);
//     elementsCreated.push(document.createElement("p").innerText = "Wind Direction: " + weatherData.wind.deg);
//     elementsCreated.push(document.createElement("p").innerText = "UV Index: " + "5.2");
//     elementsCreated.push(document.createElement("p").innerText = "Feels Like: " + weatherData.main.feels_like);

//     for(var i=0; i< elementsCreated.length; i++){
//         document.body.appendChild(elementsCreated[i]);
//     }

// };

fetchDatabtn.addEventListener("click", renderData);