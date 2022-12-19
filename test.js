navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
    var latitude = Math.round(position.coords.latitude);
    var longitude = Math.round(position.coords.longitude);
    console.log(latitude + "   " + longitude);

}