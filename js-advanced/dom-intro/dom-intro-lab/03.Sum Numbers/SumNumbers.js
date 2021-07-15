function calc() {
    let firstNumber = document.querySelector('#num1').value
    let secondNumber = document.querySelector('#num2').value
    let sum = Number(firstNumber) + Number(secondNumber)
    document.querySelector('#sum').value = sum
}