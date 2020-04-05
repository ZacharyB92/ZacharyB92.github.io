
    // Tucson Weather
    const apiURLWeather = 'https://api.openweathermap.org/data/2.5/weather?id=' +
        5318313 + '&appid=a401ede909567530b4dc74a0420779f5&units=imperial';

    fetch(apiURLWeather)
        .then(response => response.json())
        .then(
            jsObject => {
                console.log(jsObject);
                let currentTemp = jsObject.main.temp;
                let windSpeed = jsObject.wind.speed;
                let highTemp = jsObject.main.temp_max;
                let windChill = 0;

                if (currentTemp < 50 && windSpeed > 3) {
                    windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
                }

                document.getElementById("currentTemp").innerHTML = currentTemp.toFixed(0) + '&deg;';
                document.getElementById("windSpeed").innerHTML = windSpeed.toFixed(0) + 'mph';

                if (windChill === 0) {
                    document.getElementById("windChill").innerHTML = 'N/A';
                } else {
                    document.getElementById("windChill").innerHTML = Math.round(windChill) + '&deg;';
                }

                document.querySelector('#humidity').textContent = jsObject.main.humidity + '%';

                document.getElementById('highTemp').innerHTML = highTemp.toFixed(0) + '&deg;';

                document.querySelector('#weatherDesc').textContent =
                    jsObject.weather[0].main;

                let imageUrl = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

                document.querySelector('#weatherImage')
                    .setAttribute('src', imageUrl);

                document.querySelector('#weatherImage')
                    .setAttribute('alt', jsObject.weather[0].main);
            }
        );

// Gilbert Weather
const apiURLWeather2 = 'https://api.openweathermap.org/data/2.5/weather?id=' +
    5295903 + '&appid=a401ede909567530b4dc74a0420779f5&units=imperial';

    fetch(apiURLWeather2)
        .then(response2 => response2.json())
        .then(
            jsObject2 => {
                console.log(jsObject2);
                let currentTemp = jsObject2.main.temp;
                let windSpeed = jsObject2.wind.speed;
                let highTemp = jsObject2.main.temp_max;
                let windChill = 0;

                if (currentTemp < 50 && windSpeed > 3) {
                    windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
                }

                document.getElementById("currentTemp2").innerHTML = currentTemp.toFixed(0) + '&deg;';
                document.getElementById("windSpeed2").innerHTML = windSpeed.toFixed(0) + 'mph';

                if (windChill === 0) {
                    document.getElementById("windChill2").innerHTML = 'N/A';
                } else {
                    document.getElementById("windChill2").innerHTML = Math.round(windChill) + '&deg;';
                }

                document.querySelector('#humidity2').textContent = jsObject2.main.humidity + '%';

                document.getElementById('highTemp2').innerHTML = highTemp.toFixed(0) + '&deg;';

                document.querySelector('#weatherDesc2').textContent =
                    jsObject2.weather[0].main;

                let imageUrl = `https://openweathermap.org/img/w/${jsObject2.weather[0].icon}.png`;

                document.querySelector('#weatherImage2')
                    .setAttribute('src', imageUrl);

                document.querySelector('#weatherImage2')
                    .setAttribute('alt', jsObject2.weather[0].main);
            }
        );

        
    // Rexurb Weather
    const apiURLWeather3 = 'https://api.openweathermap.org/data/2.5/weather?id=' +
    5605242 + '&appid=a401ede909567530b4dc74a0420779f5&units=imperial';

    fetch(apiURLWeather3)
        .then(response3 => response3.json())
        .then(
            jsObject3 => {
                console.log(jsObject3);
                let currentTemp = jsObject3.main.temp;
                let windSpeed = jsObject3.wind.speed;
                let highTemp = jsObject3.main.temp_max;
                let windChill = 0;

                if (currentTemp < 50 && windSpeed > 3) {
                    windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
                }

                document.getElementById("currentTemp3").innerHTML = currentTemp.toFixed(0) + '&deg;';
                document.getElementById("windSpeed3").innerHTML = windSpeed.toFixed(0) + 'mph';

                if (windChill === 0) {
                    document.getElementById("windChill3").innerHTML = 'N/A';
                } else {
                    document.getElementById("windChill3").innerHTML = Math.round(windChill) + '&deg;';
                }

                document.querySelector('#humidity3').textContent = jsObject3.main.humidity + '%';

                document.getElementById('highTemp3').innerHTML = highTemp.toFixed(0) + '&deg;';

                document.querySelector('#weatherDesc3').textContent =
                    jsObject3.weather[0].main;

                let imageUrl = `https://openweathermap.org/img/w/${jsObject3.weather[0].icon}.png`;

                document.querySelector('#weatherImage3')
                    .setAttribute('src', imageUrl);

                document.querySelector('#weatherImage3')
                    .setAttribute('alt', jsObject.weather[0].main);
            }
        );

        // Rexurb Weather
    const apiURLWeather4 = 'https://api.openweathermap.org/data/2.5/weather?id=' +
    4259418 + '&appid=a401ede909567530b4dc74a0420779f5&units=imperial';

    fetch(apiURLWeather4)
        .then(response4 => response4.json())
        .then(
            jsObject4 => {
                console.log(jsObject4);
                let currentTemp = jsObject4.main.temp;
                let windSpeed = jsObject4.wind.speed;
                let highTemp = jsObject4.main.temp_max;
                let windChill = 0;

                if (currentTemp < 50 && windSpeed > 3) {
                    windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
                }

                document.getElementById("currentTemp4").innerHTML = currentTemp.toFixed(0) + '&deg;';
                document.getElementById("windSpeed4").innerHTML = windSpeed.toFixed(0) + 'mph';

                if (windChill === 0) {
                    document.getElementById("windChill4").innerHTML = 'N/A';
                } else {
                    document.getElementById("windChill4").innerHTML = Math.round(windChill) + '&deg;';
                }

                document.querySelector('#humidity4').textContent = jsObject4.main.humidity + '%';

                document.getElementById('highTemp4').innerHTML = highTemp.toFixed(0) + '&deg;';

                document.querySelector('#weatherDesc4').textContent =
                    jsObject4.weather[0].main;

                let imageUrl = `https://openweathermap.org/img/w/${jsObject4.weather[0].icon}.png`;

                document.querySelector('#weatherImage4')
                    .setAttribute('src', imageUrl);

                document.querySelector('#weatherImage4')
                    .setAttribute('alt', jsObject4.weather[0].main);
            }
        );
