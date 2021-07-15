function search() {
    let searchText = document.querySelector('#searchText').value;
    let townLists = Array.from(document.querySelectorAll('#towns li'));

    townLists.forEach(el => {
        el.style.fontWeight = 'normal';
        el.style.textDecoration = 'none';
    })

    let filtred = townLists.filter(el => el.textContent.includes(searchText));

    filtred.forEach(el => {
        el.style.fontWeight = 'bold';
        el.style.textDecoration = 'underline';
    });
    let result = document.querySelector('#result');
    result.textContent = `${filtred.length} matches found`;
}