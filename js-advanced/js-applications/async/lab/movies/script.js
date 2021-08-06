function eventHandler() {
    let movieUnList = document.getElementById('movieUnList')
    let baseUrl = 'http://localhost:3030'
    let registerForm = document.getElementById('register-form')
    let movieForm = document.getElementById('add-movie-form')
    let loginForm = document.getElementById('login-form')

    fetch(`${baseUrl}/data/movies`)
        .then(res => res.json())
        .then(result => {
            Object.values(result).forEach(x => {
                let movie = document.createElement('li')
                let movieTitle = document.createElement('h3')
                let movieDescription = document.createElement('p')
                movieDescription.textContent = x.description
                movieTitle.textContent = x.title
                movie.appendChild(movieTitle)
                movie.appendChild(movieDescription)
                movieUnList.appendChild(movie)
            })
        })


    movieForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget)

        console.log([...formData.entries()])
        console.log(formData.get('title'))

        fetch(`${baseUrl}/data/movies`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'X-Authorization': getToken()
                },
                body: JSON.stringify({
                    title: formData.get('title'),
                    description: formData.get('description')
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(() => console.log(`error movieForm`))
    })


    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget)

        console.log([...formData.entries()])
        console.log(formData.get('password'))

        fetch(`${baseUrl}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password')
                })
            })
            .then(res => res.json())
            .then(data => {
                saveToken(data.accessToken)
                console.log(data);


            })
            .catch(() => console.log(`error loginForm`))
    })


    registerForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget)

        console.log([...formData.entries()])
        console.log(formData.get('email'))

        fetch(`${baseUrl}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password')
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                saveToken(data.accessToken)
                registerForm.classList.add('hide') // setArtibute('class', 'hide)
                    // movieForm.classList.remove('hide')
            })
            .catch(() => console.log(`error registerForm`))
    })

    function saveToken(token) {
        localStorage.setItem('auth_token', token)
    }

    function getToken() {
        let token = localStorage.getItem('auth_token')
        return token
    }
}
eventHandler()