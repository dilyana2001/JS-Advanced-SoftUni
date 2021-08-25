import { e } from './dom.js'

async function getMovieById(id) {
    const response = await fetch(`http://localhost:3030/data/movies/${id}`);
    const data = await response.json();

    return data;
}

function createMovieCard(movie) {
    const controls =
        e('div', { className: 'col-md-4 text-center' },
            e('h3', { className: 'my-3 ' }, 'Movie Description'),
            e('p', {}, movie.description));

    const userId = localStorage.getItem('userId');
    if (userId != null) {
        if (userId == movie._ownerId) {
            controls.appendChild(e('a', { className: 'btn btn-danger', href: '#' }, 'Delete'));
            controls.appendChild(e('a', { className: 'btn btn-warning', href: '#' }, 'Edit'));
        } else {
            controls.appendChild(e('a', { className: 'btn btn-primary', href: '#' }, 'Like'));
        }
    }
    controls.appendChild(e('span', { className: 'enrolled-span' }, `Liked 1`));

    const element =
        e('div', { className: 'container' },
            e('div', { className: 'row bg-light text-dark' },
                e('h1', {}, `Movie title: ${movie.title}`),
                e('div', { className: 'col-md-8' },
                    e('img', { className: 'img-thumbnail', src: movie.img, alt: 'Movie' })),
                controls))
    return element;
}

let main;
let section;

export function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showDetails(id) {
    section.innerHTML = '';
    main.innerHTML = '';
    main.appendChild(section);
    const movie = await getMovieById(id);
    const card = createMovieCard(movie);
    section.appendChild(card);
}