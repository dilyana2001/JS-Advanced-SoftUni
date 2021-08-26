import { showHome } from "./home.js";

let main;
let section;

export function setupCreate(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    document.querySelector('#add-movie form').addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget)

        fetch(`http://localhost:3030/data/movies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': localStorage.getItem('auth_token')
                },
                body: JSON.stringify({
                    title: formData.get('title'),
                    description: formData.get('description'),
                    img: formData.get('imageUrl')
                })
            })
            .then(res => res.json())
            .then(movie => {
                showHome()
            })
    })


}

export async function showCreate() {
    main.innerHTML = '';
    main.appendChild(section);
}