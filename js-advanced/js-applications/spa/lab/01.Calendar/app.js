function hideMonthsElements() {
    const hiddenMonthElements = document.querySelectorAll('.monthCalendar');
    for (const hiddenMonthElement of hiddenMonthElements) {
        hiddenMonthElement.classList.add('hidden');
    }
}
hideMonthsElements();

function hideDaysCalendarElements() {
    const hiddenDaysCalendarElements = document.querySelectorAll('.daysCalendar');
    for (const hiddenDaysCalendarElement of hiddenDaysCalendarElements) {
        hiddenDaysCalendarElement.classList.add('hidden');
    }
}
hideDaysCalendarElements();

const month = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sept: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
}

document.querySelector('.yearsCalendar').addEventListener('click', (e) => {
    hideMonthsElements();
    hideDaysCalendarElements();
    let currentYear = '';
    let currentMonth = '';
    if (e.target.tagName == 'DIV' || e.target.tagName == 'TD') {
        const dataLink = e.target.querySelector('div') || e.target;
        currentYear = dataLink.textContent;
        document.getElementById(`year-${currentYear}`).classList.remove('hidden');

    }

    document.getElementById(`year-${currentYear}`).addEventListener('click', (e) => {
        hideDaysCalendarElements();
        if (e.target.tagName == 'DIV' || e.target.tagName == 'TD') {
            const dataLink = e.target.querySelector('div') || e.target;
            currentMonth = dataLink.textContent;
            document.getElementById(`month-${currentYear}-${month[currentMonth]}`).classList.remove('hidden');
        }
    })
})