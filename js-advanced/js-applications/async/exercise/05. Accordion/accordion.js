function solution() {
    let baseUrl = 'http://localhost:3030/'
    fetch(`${baseUrl}jsonstore/advanced/articles/list`)
        .then(res => res.json())
        .then(res => console.log(res))
    console.log(`bla`)
}