window.addEventListener('load', solve);

function solve() {
    document.querySelector('#add-btn').addEventListener('click', addSongToCollectionHandler);

    function addSongToCollectionHandler(e) {
        e.preventDefault();
        const [genre, nameOfSong, author, dateOfCreation] = document.querySelectorAll('.container-text form input');
        if (!genre.value, !nameOfSong.value, !author.value, !dateOfCreation.value) {
            return;
        }
        document.querySelector('.all-hits-container')
            .appendChild(addSongTemplate(genre.value, nameOfSong.value, author.value, dateOfCreation.value));

        genre.value = '';
        nameOfSong.value = '';
        author.value = '';
        dateOfCreation.value = '';
    }


    function addSongTemplate(genre, nameOfSong, author, dateOfCreation) {
        const hitsInfoDiv = document.createElement('div');
        const img = document.createElement('img');
        const h2Genre = document.createElement('h2');
        const h2NameOfSong = document.createElement('h2');
        const h2Author = document.createElement('h2');
        const h3Date = document.createElement('h3');
        const buttonSave = document.createElement('button');
        const buttonLike = document.createElement('button');
        const buttonDelete = document.createElement('button');

        hitsInfoDiv.classList = 'hits-info';
        buttonSave.classList = 'save-btn';
        buttonLike.classList = 'like-btn';
        buttonDelete.classList = 'delete-btn';
        buttonSave.addEventListener('click', saveTheSongHandler);
        buttonLike.addEventListener('click', likeTheSongHandler);
        buttonDelete.addEventListener('click', deleteTheSongHandler);

        img.setAttribute('src', './static/img/img.png');
        h2Genre.textContent = `Genre: ${genre}`;
        h2NameOfSong.textContent = `Name: ${nameOfSong}`;
        h2Author.textContent = `Author: ${author}`;
        h3Date.textContent = `Date: ${dateOfCreation}`;
        buttonSave.textContent = `Save song`;
        buttonLike.textContent = `Like song`;
        buttonDelete.textContent = `Delete`;

        hitsInfoDiv.appendChild(img);
        hitsInfoDiv.appendChild(h2Genre);
        hitsInfoDiv.appendChild(h2NameOfSong);
        hitsInfoDiv.appendChild(h2Author);
        hitsInfoDiv.appendChild(h3Date);
        hitsInfoDiv.appendChild(buttonSave);
        hitsInfoDiv.appendChild(buttonLike);
        hitsInfoDiv.appendChild(buttonDelete);

        return hitsInfoDiv;
    }

    function saveTheSongHandler(e) {
        let song = e.target.parentNode;
        let genre = song.querySelector('h2:nth-child(2)');
        let nameOfSong = song.querySelector('h2:nth-child(3)');
        let author = song.querySelector('h2:nth-child(4)');
        let date = song.querySelector('h3:nth-child(5)');
        genre.value = genre.textContent.split(': ')[1];
        nameOfSong.value = nameOfSong.textContent.split(': ')[1];
        author.value = author.textContent.split(': ')[1];
        date.value = date.textContent.split(': ')[1];
        console.log(song)
        document.querySelector('#saved-hits .saved-container')
            .appendChild(saveSongTemplate(genre.value, nameOfSong.value, author.value, date.value));
    }

    function likeTheSongHandler(e) {
        let numberOfLikes = document.querySelector('#total-likes .likes p');
        let number = numberOfLikes.textContent.split('Total Likes: ')[1];
        number = Number(number) + 1;
        numberOfLikes.textContent = '';
        numberOfLikes.textContent = `Total Likes: ${number}`;
        if (e.target.disabled == false) {
            e.target.disabled = true;
        }
    }

    function deleteTheSongHandler(e) {
        let song = e.target.parentNode;
        song.remove();
    }

    function saveSongTemplate(genre, nameOfSong, author, dateOfCreation) {
        const hitsInfoDiv = document.createElement('div');
        const img = document.createElement('img');
        const h2Genre = document.createElement('h2');
        const h2NameOfSong = document.createElement('h2');
        const h2Author = document.createElement('h2');
        const h3Date = document.createElement('h3');
        const buttonDelete = document.createElement('button');

        hitsInfoDiv.classList = 'hits-info';
        img.setAttribute('src', './static/img/img.png');
        buttonDelete.classList = 'delete-btn';
        buttonDelete.addEventListener('click', deleteTheSongHandler);

        h2Genre.textContent = `Genre: ${genre}`;
        h2NameOfSong.textContent = `Name: ${nameOfSong}`;
        h2Author.textContent = `Author: ${author}`;
        h3Date.textContent = `Date: ${dateOfCreation}`;
        buttonDelete.textContent = `Delete`;

        hitsInfoDiv.appendChild(img);
        hitsInfoDiv.appendChild(h2Genre);
        hitsInfoDiv.appendChild(h2NameOfSong);
        hitsInfoDiv.appendChild(h2Author);
        hitsInfoDiv.appendChild(h3Date);
        hitsInfoDiv.appendChild(buttonDelete);

        return hitsInfoDiv;
    }
}