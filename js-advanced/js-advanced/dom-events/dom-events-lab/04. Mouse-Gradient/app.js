function attachGradientEvents() {
    let gradientItem = document.querySelector('#gradient')
    let output = document.querySelector('#result')

    gradientItem.addEventListener('mouseover', (e) => {
        let percent = Math.floor((e.offsetX / e.currentTarget.offsetWidth) * 100)
        output.textContent = `${percent}%`
    })
}