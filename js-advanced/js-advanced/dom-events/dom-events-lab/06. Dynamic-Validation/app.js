function validate2() {
    let input = document.querySelector('input')
    let regex = /([\w\-.]+)@([a-z]+)(\.[a-z]+)/g
    input.addEventListener('blur', () => {
        if (regex.test(input.value)) input.removeAttribute('class')
        else input.setAttribute('class', 'error')
    })
}

function validate1() {
    let input = document.querySelector('input')
    let regex = /([\w\-.]+)@([a-z]+)(\.[a-z]+)/g
    input.addEventListener('blur', innerValidate)

    function innerValidate() {
        if (regex.test(input.value)) {
            input.removeAttribute('class')
            return
        }
        input.setAttribute('class', 'error')
    }
}

function validate() {
    let input = document.querySelector('input')
    let regex = /([\w\-.]+)@([a-z]+)(\.[a-z]+)/g
    input.addEventListener('blur', function() {
        regex.test(input.value) ? input.removeAttribute('class') : input.setAttribute('class', 'error')
    })
}