let result = document.getElementById('result');
let input = document.getElementById('input-data');

document.getElementById('generate').addEventListener('click', () => {
    result.textContent = '';
    let baseUrl = 'https://swapi.dev/api';
    let inputData = input.value;
    if (inputData) {
        fetch(`${baseUrl}/people/${inputData}`)
            .then((resources) => resources.json())
            .then(character => {
                let nameOfHero = document.createElement('h2');
                let birthYear = document.createElement('p');
                let eyeColor = document.createElement('p');
                let hairColor = document.createElement('p');
                let gender = document.createElement('p');
                let filmHeader = document.createElement('h3');
                let filmography = document.createElement('ul');
                filmography.setAttribute('id', 'film-list');
                nameOfHero.textContent = character.name;
                birthYear.textContent = `Birth year: ` + character['birth_year'];
                if (character.gender != 'n/a') gender.textContent = `Gender: ` + character.gender;
                if (character['hair_color'] != 'n/a') hairColor.textContent = `Hair color: ` + character['hair_color'];
                if (character['eye_color'] != 'n/a') eyeColor.textContent = `Eye color: ` + character['eye_color'];
                filmHeader.textContent = `Movies ${character.name} played in:`;
                for (let current of character.films) {
                    fetch(current)
                        .then(resources => resources.json())
                        .then(movie => {
                            let film = document.createElement('li');
                            film.textContent = movie['title']
                            filmography.appendChild(film);
                        })
                }
                result.appendChild(nameOfHero);
                result.appendChild(birthYear)
                result.appendChild(gender)
                result.appendChild(hairColor)
                result.appendChild(eyeColor);
                result.appendChild(filmHeader);
                result.appendChild(filmography);
                console.log(character);
            })
    }
    input.value = ''
});