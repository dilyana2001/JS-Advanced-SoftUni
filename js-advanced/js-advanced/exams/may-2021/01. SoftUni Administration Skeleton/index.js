function solve() {
    let modules = {};

    document.querySelector('.form-control button').addEventListener('click', (e) => {
        e.preventDefault();

        let lectureNameInput = document.querySelector('input[name="lecture-name"]');
        let lectureDateInput = document.querySelector('input[name="lecture-date"]');
        let lectureModuleSelect = document.querySelector('select[name="lecture-module"]');

        if (!lectureNameInput.value || !lectureDateInput.value || lectureModuleSelect.value == 'Select module') {
            return;
        }

        if (!modules[lectureModuleSelect.value]) {
            modules[lectureModuleSelect.value] = [];
        }

        modules[lectureModuleSelect.value].push({
            name: lectureNameInput.value,
            date: formatDate(lectureDateInput.value)
        })

        lectureNameInput.value = '';
        lectureDateInput.value = '';
        lectureModuleSelect.value = 'Select module';

        createTrainings(modules);
    });

    function createTrainings(modules) {
        let modulesDiv = document.querySelector('.modules');
        modulesDiv.textContent = '';

        for (const module in modules) {

            let moduleElement = createModule(module);
            let unorderList = document.createElement('ul');

            let lectures = modules[module];
            let sortedLecture = lectures.sort((a, b) => a.date.localeCompare(b.date));

            for (const { name, date }
                of sortedLecture) {
                unorderList.appendChild(createLecture(name, date, module));
            }
            moduleElement.appendChild(unorderList);
            modulesDiv.appendChild(moduleElement);
        }
    }

    function createModule(name) {
        let moduleDiv = document.createElement('div');
        let captureHeader = document.createElement('h3');
        moduleDiv.setAttribute('class', 'module');
        captureHeader.textContent = name.toUpperCase() + '-MODULE';
        moduleDiv.appendChild(captureHeader);
        return moduleDiv;
    }

    function createLecture(name, date, module) {
        let listFlex = document.createElement('li');
        let captureDate = document.createElement('h4');
        let deleteBtn = document.createElement('button');

        listFlex.setAttribute('class', 'flex');
        deleteBtn.setAttribute('class', 'red');
        deleteBtn.addEventListener('click', (e) => {
            let unorderListElement = e.target.parentNode.parentNode.parentNode;
            modules[module] = modules[module]
                .filter(x => !(x.name == name && x.date == date));

            if (listFlex.parentElement.querySelectorAll('.flex').length < 2) {
                unorderListElement.remove();
            }
            listFlex.remove();
        });

        captureDate.textContent = `${name} - ${date}`;
        deleteBtn.textContent = 'Del';

        listFlex.appendChild(captureDate);
        listFlex.appendChild(deleteBtn);

        return listFlex;
    }

    function formatDate(dateInput) {
        let [date, time] = dateInput.split('T');
        date = date.replace(/-/g, '/');

        return `${date} - ${time}`
    }
}