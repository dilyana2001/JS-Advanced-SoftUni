function solve() {
    const addPetButton = document.querySelector('form#add #container button');
    addPetButton.addEventListener('click', addPetHandler);

    function addPetHandler(e) {
        e.preventDefault();
        const petNameInput = document.querySelector('form#add #container input[placeholder="Name"]');
        const petAgeInput = document.querySelector('form#add #container input[placeholder="Age"]');
        const petKindInput = document.querySelector('form#add #container input[placeholder="Kind"]');
        const petCurrentOwnerInput = document.querySelector('form#add #container input[placeholder="Current Owner"]');

        petAgeInput.setAttribute('type', 'number');

        if (!petNameInput.value || (!petAgeInput.value || petAgeInput.value <= 0) ||
            !petKindInput.value || !petCurrentOwnerInput.value) {
            return;
        }

        document.querySelector('section#adoption ul').appendChild(
            addPet(petNameInput.value, petAgeInput.value, petKindInput.value, petCurrentOwnerInput.value)
        );

        petNameInput.value = '';
        petAgeInput.value = '';
        petKindInput.value = '';
        petCurrentOwnerInput.value = '';
    }

    function interpolate(one, two, three) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = `<strong>${one}</strong> is a <strong>${two}</strong> year old <strong>${three}</strong>`;
        return paragraph;
    }

    function contactOwnerHandler(e) {
        e.preventDefault();
        const currentButtonParent = e.target.parentNode;

        const divHolder = document.createElement('div');
        const enterYourNamesInput = document.createElement('input');
        const yesBtn = document.createElement('button');

        enterYourNamesInput.setAttribute('placeholder', 'Enter your names');
        yesBtn.textContent = 'Yes! I take it!';

        divHolder.appendChild(enterYourNamesInput);
        divHolder.appendChild(yesBtn);
        yesBtn.addEventListener('click', adoptedHandler);
        e.target.remove();
        currentButtonParent.appendChild(divHolder);
    }


    function adoptedHandler(e) {
        const petForAdopt = e.target.parentNode.parentNode;
        const petNameInput = petForAdopt.querySelector('p > strong:nth-child(1)');
        const petAgeInput = petForAdopt.querySelector('p > strong:nth-child(2)');
        const petKindInput = petForAdopt.querySelector('p > strong:nth-child(3)');
        const petNewOwner = petForAdopt.querySelector('input');

        if (!petNewOwner.value) {
            return;
        }

        document.querySelector('section#adopted ul').appendChild(
            adoptedPet(petNameInput.textContent, petAgeInput.textContent, petKindInput.textContent, petNewOwner.value)
        );

        deletePetCardHandler(e);
    }

    function adoptedPet(name, age, kind, currentOwner) {
        const checkedBtn = document.createElement('button');
        checkedBtn.textContent = `Checked`;
        checkedBtn.addEventListener('click', deletePetCardHandler)
        const newOwner = true;
        const listElement = cardPet(name, age, kind, currentOwner, newOwner);
        listElement.appendChild(checkedBtn);

        return listElement;
    }

    function addPet(name, age, kind, currentOwner) {
        const contactOwnerBtn = document.createElement('button');
        contactOwnerBtn.textContent = `Contact with owner`;
        const newOwner = false;
        const listElement = cardPet(name, age, kind, currentOwner, newOwner);
        listElement.appendChild(contactOwnerBtn);
        contactOwnerBtn.addEventListener('click', contactOwnerHandler);

        return listElement;
    }

    function cardPet(name, age, kind, currentOwner, newOwner) {
        const listElement = document.createElement('li');
        const paragraphElement = interpolate(name, age, kind);
        const spanOwner = document.createElement('span');

        listElement.appendChild(paragraphElement);

        spanOwner.textContent = newOwner ? `New Owner: ${currentOwner}` : `Owner: ${currentOwner}`;

        listElement.appendChild(paragraphElement);
        listElement.appendChild(spanOwner);

        return listElement;
    }

    function deletePetCardHandler(e) {
        e.target.closest('li').remove();
    }
}