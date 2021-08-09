function attachEvents() {
    let baseUrl = 'http://localhost:3030/';
    let authorName = document.querySelectorAll('#controls input')[0];
    let msgText = document.querySelectorAll('#controls input')[1];
    let refreshBtn = document.getElementById('refresh');
    let submitBtn = document.getElementById('submit');
    let messagesArea = document.getElementById('messages');

    submitBtn.addEventListener('click', () => {
        fetch(`${baseUrl}jsonstore/messenger`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    author: authorName.value,
                    content: msgText.value,
                })
            })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(() => console.log(`Error`))
    })

    refreshBtn.addEventListener('click', () => {
        messagesArea.textContent = '';
        fetch(`${baseUrl}jsonstore/messenger`)
            .then(res => res.json())
            .then(result => {
                Object.values(result).forEach(x => {
                    messagesArea.textContent += `${x.author}: ${x.content}\n`;
                })
            })
            .catch(() => console.log(`Error`))
    })
}

attachEvents();