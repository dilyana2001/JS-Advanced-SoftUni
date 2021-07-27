function solve() {
    let text = document.querySelector('#text').value;
    let namingConvention = document.querySelector('#naming-convention').value;
    let result = parse(text, namingConvention);
    let resultDiv = document.querySelector('#result');
    resultDiv.textContent = result;

    function parse(text, namingConvention) {
        const commandParser = {
            'Pascal Case': () => text
                .toLowerCase()
                .split(' ')
                .map(x => x[0].toUpperCase() + x.slice(1))
                .join(''),
            'Camel Case': () => text
                .toLowerCase()
                .split(' ')
                .map((x, i) => i != 0 ? x[0].toUpperCase() + x.slice(1) : x)
                .join(''),
            default: () => 'Error!'
        };
        return (commandParser[namingConvention] || commandParser.default)();
    }
}