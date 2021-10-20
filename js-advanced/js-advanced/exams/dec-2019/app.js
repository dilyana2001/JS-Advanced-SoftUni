function solution() {
    document.querySelector('.container section:nth-child(1) button').addEventListener('click', addGiftToListhandler)

    function addGiftToListhandler(e) {

        const input = document.querySelector('input[placeholder="Gift name"]');
        if (!input.value) { return }
        let giftSection = document.querySelector('.container section:nth-child(2) ul');
        giftSection.appendChild(createGift(input.value));
        const allGifts = document.querySelectorAll('.container section:nth-child(2) ul li');
        let sorted = Array.from(allGifts).sort((a, b) => a.textContent.localeCompare(b.textContent));
        input.value = '';

        for (let li of Array.from(giftSection)) { li.remove() }
        for (let li of sorted) { giftSection.appendChild(li) }
    }

    function createGift(name) {
        const liElement = document.createElement('li');
        const sendButton = document.createElement('button');
        const discardButton = document.createElement('button');
        liElement.setAttribute('class', 'gift');
        sendButton.setAttribute('id', 'sendButton');
        sendButton.addEventListener('click', sendGiftHandler);
        discardButton.setAttribute('id', 'discardButton');
        discardButton.addEventListener('click', discardGiftHandler)
        liElement.textContent = name;
        sendButton.textContent = `Send`;
        discardButton.textContent = `Discard`;
        liElement.appendChild(sendButton);
        liElement.appendChild(discardButton);
        return liElement;
    }

    function sendGiftHandler(e) {
        const giftName = e.currentTarget.parentNode.textContent.replace('SendDiscard', '').trim();
        document.querySelector('.container section:nth-child(3) ul').appendChild(moveGiftElement(giftName));
        e.currentTarget.parentNode.remove();
    }

    function discardGiftHandler(e) {
        const giftName = e.currentTarget.parentNode.textContent.replace('SendDiscard', '').trim();
        document.querySelector('.container section:nth-child(4) ul').appendChild(moveGiftElement(giftName));
        e.currentTarget.parentNode.remove();
    }

    function moveGiftElement(name) {
        const liElement = document.createElement('li');
        liElement.setAttribute('class', 'gift');
        liElement.textContent = name;
        return liElement;
    }
}