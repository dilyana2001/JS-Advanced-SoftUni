function focused() {
    let sections = document.querySelectorAll('body div div')
    for (let section of sections) {
        let input = section.querySelector('input')
        input.addEventListener('focus', () => {
            section.setAttribute('class', 'focused')
        })
        input.addEventListener('blur', () => {
            section.removeAttribute('class')
        })
    }
}