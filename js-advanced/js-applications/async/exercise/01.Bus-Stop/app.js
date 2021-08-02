function getInfo() {
    let baseURL = 'http://localhost:3030/';
    let stopId = document.querySelector('#stopId');
    let stopIdInput = stopId.value;
    let stopNameInput = document.querySelector('#stopName');
    let busesUl = document.querySelector('#buses');
    stopId.value = '';
    fetch(`${baseURL}jsonstore/bus/businfo/${stopIdInput}`)
        .then(res => res.json())
        .then(result => {
            stopNameInput.textContent = result.name;
            Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove());

            Object.entries(result.buses).forEach(x => {
                let currentBus = document.createElement('li');
                currentBus.textContent = `Bus ${x[0]} arrives in ${x[1]}`;
                busesUl.appendChild(currentBus);
            })
        })
        .catch(() => {
            Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove());
            stopNameInput.textContent = `Error`;
        });
}