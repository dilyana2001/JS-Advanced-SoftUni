function validate() {
    let input = document.querySelector('input')
    let regex = /([\w\-.]+)@([a-z]+)(\.[a-z]+)/g
    input.addEventListener('blur', () => {
        if (regex.test(input.value)) {
            input.removeAttribute('class')
            return
        }
        input.setAttribute('class', 'error')
    })
}