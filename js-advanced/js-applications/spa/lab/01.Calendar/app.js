let hiddenMonthElements = document.querySelectorAll('.monthCalendar')
for (let hiddenMonthElement of hiddenMonthElements) {
    hiddenMonthElement.classList.add('hidden');
}
let hiddenDaysCalendarElements = document.querySelectorAll('.daysCalendar')
for (let hiddenDaysCalendarElement of hiddenDaysCalendarElements) {
    hiddenDaysCalendarElement.classList.add('hidden');
}
let year = {
    year2020: 'y0',
    year2021: 'y1',
    year2022: 'y2',
    year2023: 'y3'
}

document.querySelector('.yearsCalendar').addEventListener('click', (e) => {
    let innerP = e.target || e.target.children[0];

    let key = (innerP.querySelector('div') || innerP).id;
    let currentClick = year[key];
    let data = document.getElementById(`year-202${currentClick[1]}`);
    let otherYears = []
    for (const kvp in year) {
        if (year[kvp][1] != currentClick[1]) {
            otherYears.push(year[kvp])
        }
    }
    hidePage(otherYears)
    showPage(data);
})

function showPage(data) {
    data.classList.remove('hidden');
}

function hidePage(data) {
    for (const id of data) {
        document.getElementById(`year-202${id[1]}`).classList.add('hidden');
    }
}