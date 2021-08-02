function solve() {
    let infoSpan = document.querySelector('.info')
    let baseUrl = 'http://localhost:3030/'
    let firstStop = 'depot'
    let departInput = document.querySelector('#depart')
    let arriveInput = document.querySelector('#arrive')
    let nameOfArrive;

    function depart() {
        fetch(`${baseUrl}jsonstore/bus/schedule/${firstStop}`)
            .then(res => res.json())
            .then(result => {
                infoSpan.textContent = `Next stop ${result.name}`
                firstStop = result.next
                nameOfArrive = result.name
            })
            .catch(() => infoSpan.value = `Error`)
        departInput.disabled = true
        arriveInput.disabled = false

    }

    function arrive() {
        infoSpan.textContent = `Arriving at ${nameOfArrive}`
        departInput.disabled = false
        arriveInput.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();