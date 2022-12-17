



        var container = document.createElement("div");
        var h1 = document.createElement("h1");
        h1.innerText = "Weather Data";
        container.appendChild(h1);

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

document.body.appendChild(container);