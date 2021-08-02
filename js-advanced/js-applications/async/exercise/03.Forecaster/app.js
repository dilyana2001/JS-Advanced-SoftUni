function attachEvents() {
    let submitInput = document.getElementById('submit');
    let forecastDiv = document.getElementById('forecast');
    let locationInput = document.getElementById('location');
    locationInput.setAttribute('placeholder', 'New York, London, Barcelona');
    let upcomingDiv = document.getElementById('upcoming');
    let currentSymbol = '';
    let baseUrl = 'http://localhost:3030/';

    submitInput.addEventListener('click', () => {

        if (locationInput.value) {
            forecastDiv.style.display = 'block';
            let currentDiv = document.getElementById('current');
            let currentWeather = document.createElement('div');
            currentWeather.setAttribute('class', 'forecasts');
            currentDiv.appendChild(currentWeather);
            let locationInputValue = locationInput.value;
            let currentID = '';

            fetch(`${baseUrl}jsonstore/forecaster/locations`)
                .then(res => res.json())
                .then(result => {
                    Object.values(result).map(loc => {
                        if (locationInputValue === Object.values(loc)[1]) {
                            currentID = Object.values(loc)[0];

                            fetch(`${baseUrl}jsonstore/forecaster/today/${currentID}`)
                                .then(res => res.json())
                                .then(res => {
                                    conditionToSymbol(res.forecast);
                                    let conditionSymbol = document.createElement('span');
                                    let spanCondition = document.createElement('span');
                                    let forecastCurrentDataName = document.createElement('span');
                                    let forecastCurrentDataDegrees = document.createElement('span');
                                    let forecastCurrentDataCondition = document.createElement('span');

                                    conditionSymbol.textContent = currentSymbol;
                                    conditionSymbol.setAttribute('class', 'condition symbol');
                                    forecastCurrentDataName.textContent = res.name;
                                    forecastCurrentDataName.setAttribute('class', 'forecast-data')
                                    forecastCurrentDataDegrees.textContent = `${res.forecast.high}°/${res.forecast.low}°`;
                                    forecastCurrentDataDegrees.setAttribute('class', 'forecast-data');
                                    forecastCurrentDataCondition.textContent = res.forecast.condition;
                                    forecastCurrentDataCondition.setAttribute('class', 'forecast-data');

                                    currentWeather.appendChild(conditionSymbol);
                                    currentWeather.appendChild(spanCondition);
                                    spanCondition.appendChild(forecastCurrentDataCondition);
                                    spanCondition.appendChild(forecastCurrentDataDegrees);
                                    spanCondition.appendChild(forecastCurrentDataName);
                                })
                                .catch(err => console.log(err));

                            fetch(`${baseUrl}jsonstore/forecaster/upcoming/${currentID}`)
                                .then(res => res.json())
                                .then(res => {
                                    let forecastInfoDiv = document.createElement('div');
                                    upcomingDiv.appendChild(forecastInfoDiv);
                                    Object.values(res.forecast).forEach(day => {
                                        let upcomingInnerSpan = document.createElement('span');
                                        upcomingInnerSpan.setAttribute('class', 'upcoming');
                                        forecastInfoDiv.appendChild(upcomingInnerSpan);

                                        let symbolSpan = document.createElement('span');
                                        symbolSpan.setAttribute('class', 'symbol');
                                        currentSymbol = conditionToSymbol(day);
                                        symbolSpan.textContent = currentSymbol;
                                        upcomingInnerSpan.appendChild(symbolSpan);
                                        let forecastUpcomingDataDegrees = document.createElement('span');
                                        let forecastUpcomingDataName = document.createElement('span');

                                        forecastUpcomingDataDegrees.textContent = `${day.high}°/${day.low}°`;
                                        forecastUpcomingDataDegrees.setAttribute('class', 'forecast-data');
                                        forecastUpcomingDataName.textContent = day.condition;
                                        forecastUpcomingDataName.setAttribute('class', 'forecast-data');

                                        upcomingInnerSpan.appendChild(forecastUpcomingDataDegrees);
                                        upcomingInnerSpan.appendChild(forecastUpcomingDataName);
                                    })
                                })
                        }
                    })
                })
                .catch(err => console.log(err));
            locationInput.value = '';
        }
    })

    function conditionToSymbol(res) {
        if (res.condition === 'Sunny') {
            currentSymbol = '☀';
        } else if (res.condition === 'Partly sunny') {
            currentSymbol = '⛅';
        } else if (res.condition === 'Overcast') {
            currentSymbol = '☁';
        } else if (res.condition === 'Rain') {
            currentSymbol = '☂';
        }
        return currentSymbol;
    }
}
attachEvents();