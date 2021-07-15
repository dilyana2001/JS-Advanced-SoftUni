function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let tbodyList = Array.from(document.querySelectorAll('tbody tr'));
        let searchField = document.querySelector('#searchField');
        let searchText = searchField.value;
        tbodyList.forEach(el => el.className = '');
        tbodyList.filter(el => {
            let childrenRow = Array.from(el.children);
            if (childrenRow.some(el => el.textContent.includes(searchText))) el.className = 'select';
        });
        searchField.value = ''
    }
}