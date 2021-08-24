function createMoviePreview(x) {
    let element = document.createElement('div');
    element.classList = ('card mb-4');
    element.innerHTML = `
                   <img class="card-img-top" src="${x.img}" alt="Card image cap" width="400">
                   <div class="card-body">
                       <h4 class="card-title">${x.title}</h4>
                   </div>
                   <div class="card-footer">
                       <a href="#">
                           <button type="button" class="btn btn-info">Details</button>
                       </a>
                   </div>
                   `
    return element;

}

let main;
let section;
let container;

export function setupHome(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    container = document.querySelector('.justify-content-center');
}

export async function showHome() {
    container.innerHTML = 'Loading...';
    main.innerHTML = '';
    main.appendChild(section);
    fetch(`http://localhost:3030/data/movies`)
        .then(res => res.json())
        .then(x => {
            const cards = x.map(createMoviePreview);
            const fragment = document.createDocumentFragment();
            cards.forEach(c => fragment.appendChild(c))
            container.innerHTML = '';
            container.appendChild(fragment)
        })
        .catch(err => console.log(err.message))



}