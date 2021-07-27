function colorize() {
    let coloredRows = document.querySelectorAll('table tr')
    let index = 0;
    for (let row of coloredRows) {
        index++;
        if (index % 2 == 0)
            row.style.background = "teal";
    }
}