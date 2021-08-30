function hideMonthsElements() {
    let hiddenMonthElements = document.querySelectorAll('.monthCalendar');
    for (let hiddenMonthElement of hiddenMonthElements) {
        hiddenMonthElement.classList.add('hidden');
    }
}
hideMonthsElements();

function hideDaysCalendarElements() {
    let hiddenDaysCalendarElements = document.querySelectorAll('.daysCalendar');
    for (let hiddenDaysCalendarElement of hiddenDaysCalendarElements) {
        hiddenDaysCalendarElement.classList.add('hidden');
    }
}
hideDaysCalendarElements();

let month = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sept: 9, Oct: 10, Nov: 11, Dec: 12 }

document.querySelector('.yearsCalendar').addEventListener('click', (e) => {
    hideMonthsElements();
    hideDaysCalendarElements();
    let currentYear = '';
    let currentMonth = '';
    let currentDay = '';
    let exactTdForAddingANote = '';
    if (e.target.tagName == 'DIV' || e.target.tagName == 'TD') {
        let dataLink = e.target.querySelector('div') || e.target;
        currentYear = dataLink.textContent;
        document.getElementById(`year-${currentYear}`).classList.remove('hidden');

    }

    document.getElementById(`year-${currentYear}`).addEventListener('click', (e) => {
        hideDaysCalendarElements();
        if (e.target.tagName == 'DIV' || e.target.tagName == 'TD') {
            let dataLink = e.target.querySelector('div') || e.target;
            currentMonth = dataLink.textContent;
            document.getElementById(`month-${currentYear}-${month[currentMonth]}`).classList.remove('hidden');
        }

        document.getElementById(`month-${currentYear}-${month[currentMonth]}`).addEventListener('click', (e) => {
            if (e.target.tagName == 'DIV' || e.target.tagName == 'TD') {
                let dataLink = e.target.querySelector('div') || e.target;
                currentDay = dataLink.textContent;
                exactTdForAddingANote = dataLink.parentNode;
            }

            // // note update
            // document.getElementById('notesSection').classList.remove('hidden');

            // let noteHeaderID = document.getElementById('noteHeaderID');
            // let noteHeaderIDH2 = noteHeaderID.querySelector('h2');
            // noteHeaderIDH2.textContent = `Add note for ${currentDay}-${currentMonth}-${currentYear}`;
            // let noteHeaderIDDescr = noteHeaderID.querySelector('p');
            // let noteHeaderIDInput = noteHeaderID.querySelector('input');
            // noteHeaderIDDescr.textContent = '';
            // exactTdForAddingANote.querySelectorAll('.noteForTheDay').innerHTML = '';
            // if (exactTdForAddingANote.querySelectorAll('.noteForTheDay').length > 0) {
            //     for (const note of exactTdForAddingANote.querySelectorAll('.noteForTheDay')) {
            //         let noteP = document.createElement('p')
            //         noteP.textContent = note.textContent;
            //         noteHeaderIDDescr.appendChild(noteP)
            //     }
            // }

            // noteHeaderID.querySelector('button').addEventListener('click', () => {
            //     if (noteHeaderIDInput.value != '') {
            //         let notificationElement = document.createElement('span')
            //         notificationElement.textContent = '-';
            //         let noteDiv = document.createElement('div')
            //         noteDiv.classList.add('hidden');
            //         noteDiv.classList.add('noteForTheDay');
            //         noteHeaderIDDescr.textContent = noteHeaderIDInput.value;
            //         noteDiv.textContent = noteHeaderIDInput.value;
            //         exactTdForAddingANote.appendChild(noteDiv);
            //         exactTdForAddingANote.appendChild(notificationElement);
            //     }
            //     noteHeaderIDInput.value = '';
            // })
        })
    })
})