function attachEvents() {
    let submitInput = document.getElementById('submit');
    let forecastDiv = document.getElementById('forecast');
    let locationInput = document.getElementById('location');
    let currentDayWeather = document.getElementById('current')
    let baseUrl = 'http://localhost:3030/';

    submitInput.addEventListener('click', () => {
        forecastDiv.style.display = 'block';
        let currentDiv = forecastDiv.querySelector('#current');
        let currentWeather = document.createElement('div');
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
                                let currentSymbol = ''
                                if (res.forecast.condition === 'Sunny') {
                                    currentSymbol = `&#x2600;`;
                                } else if (res.forecast.condition === 'Partly sunny') {
                                    currentSymbol = '&#x26C5;';
                                } else if (res.forecast.condition === 'Overcast') {
                                    currentSymbol = '&#x2601;';
                                } else if (res.forecast.condition === 'Rain') {
                                    currentSymbol = '&#x2614;';
                                }
                                //  Degrees &#176;  °
                                // forecast:
                                // condition: "Sunny"
                                // high: "19"
                                // low: "8"
                                // [[Prototype]]: Object
                                // name: "New York, USA"

                                let conditionSymbol = document.createElement('span');
                                conditionSymbol.textContent = currentSymbol;
                                currentWeather.appendChild(conditionSymbol);


                                console.log(res);
                            })
                            .catch(err => console.log(err));
                    }
                })
            })
            .catch(err => console.log(err));





    })
}
attachEvents();