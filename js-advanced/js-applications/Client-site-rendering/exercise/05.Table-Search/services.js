function getAll() {
    return fetch(`http://localhost:3030/jsonstore/advanced/table`).then(res => res.json())
}

export default {
    getAll,
};