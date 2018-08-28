/**
 * script.js
 * - All our useful JS goes here, awesome!
 */

window.onload = function () {
    // Variables
    // API to get the location of the user
    var ipUrl = "https://ipinfo.io/json";
    var appID = "appid=034e9ce6aadc1239230625edbae3c1be";

    var location = document.getElementById("location-header");

    // Call ipinfo.io/json function   
    asyncHttpGetIp(ipUrl);

    // Request to ipinfo.io/json to get the location details
    function asyncHttpGetIp(url, callback) {
        var httpRequestIP = new XMLHttpRequest();
        httpRequestIP.open("GET", url, true);
        httpRequestIP.onreadystatechange = function () {
            if (httpRequestIP.readyState == 4 && httpRequestIP.status == 200) {
                var jsonIP = JSON.parse(httpRequestIP.responseText);
                var city=jsonIP.city;
                var country=jsonIP.country;
                // update the location detail on the header element on HTML
                location.innerHTML=`${city},${country}`;

                // Get Latitude & Longitude from location tag from json response
                var longitude = jsonIP.loc.split(",")[0];
                var latitude = jsonIP.loc.split(",")[1];
                //Form the URL to send to OpenweatherMap
                var weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&${appID}`;
                // Call openweathermap API
				httpReqWeatherAsync(weatherUrl);
            }
        }
        httpRequestIP.send();
    }

    // Request to get openweathermap.com json
	function httpReqWeatherAsync(url, callback) {
    }
} 