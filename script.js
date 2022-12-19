var fetchDatabtn = document.querySelector("#fetchDataBtn");
var heading1 = document.querySelector("#heading1");
var header = document.querySelector("#header");

// var x = document.querySelector("#coord");
// fetch("https://api.openweathermap.org/data/2.5/weather?lat=23&lon=81&appid=0db5651271ddadd063ad6732add762c8").then(x => x.json()).then(data => console.log(data.clouds));

var weatherData;
var container;

function mainFunction(){

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                reject("refresh & allow to Know You Location !");
            }, 10000);

            // getting location
            navigator.geolocation.getCurrentPosition( (position) =>{
                lat = Math.round(position.coords.latitude);
                lon = Math.round(position.coords.longitude);
                console.log(lat + "   " + lon);

                resolve(position.coords);

              });

        });

}

// promise handlers only take only one parameter because any function( Promise ) can return only one value
mainFunction().then((coords) =>{
    console.log(coords.latitude + "   " + coords.longitude);
    let data = fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ coords.latitude + "&lon=" + coords.longitude + "&appid=0db5651271ddadd063ad6732add762c8");

    return data;

}).then((data) =>{

    weatherData = data.json();

    return weatherData;

}).then((data) =>{

    console.log("third then", data);
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



    function renderData(){
        console.log("I got clicked");
    
        console.log(container);
    
        fetchDatabtn.style.display= "none";
    
        heading1.innerHTML = "Weather API";
    
        var HeadingLat = document.createElement("p");
        HeadingLat.innerText=`latitude: ${lat}`;
    
        var HeadingLon = document.createElement("p");
        HeadingLon.innerText=`longitude: ${lon}`;
    
        header.appendChild(HeadingLat);
        header.appendChild(HeadingLon);
    
        var h1 = document.createElement("h1");
        h1.innerText = "Weather Data";
    
        document.body.appendChild(h1);
        document.body.appendChild(container);
    }



    fetchDatabtn.addEventListener("click", renderData);


}).catch((err) =>{
    window.alert(err);
});




// function renderData() {
//     fetchDatabtn.style.display = "none";
//     var elementsCreated = [];
//     elementsCreated.push(document.createElement("h1").innerText = "Weather Data");
//     document.getElementById("latti").innerHTML = `${data.coord.lat}`

//     for(var i=0; i< elementsCreated.length; i++){
//         document.body.appendChild(elementsCreated[i]);
//     }

// };