function solve() {
    let output = document.querySelector('#output');
    let input = document.querySelector('#input');
    let inputValue = input.value;
    let sentences = inputValue.split('.').filter(x => x != '').map(x => x + '.');
    let paragraphRoof = Math.ceil(sentences.length / 3)
    for (let i = 0; i < paragraphRoof; i++) {
        output.innerHTML += `<p>${sentences.splice(0,3).join('')}</p>`
    }
}