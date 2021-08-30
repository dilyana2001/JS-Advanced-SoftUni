import { e as ce } from './dom.js'

document.querySelector('.new-topic-border form').addEventListener('submit', (e) => {
    e.preventDefault();
    let form = new FormData(e.target);
    fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                topicName: form.get('topicName'),
                username: form.get('username'),
                postText: form.get('postText')
            })
        })
        .then(res => res.json())
        .then(() => {
            confirm(`Posted!`)
        })
})

fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`)
    .then(res => res.json())
    .then(post => {
        console.log(post);
        let header = ce('h3', {}, post.topicName)
        let element =
            ce('div', { className: 'comment', id: post._id },
                ce('div', { className: 'header' },
                    ce('img', { src: './static/profile.png', alt: 'avatar' }),
                    ce('p', {},
                        ce('span', {}, post.username), ' posted on ',
                        ce('time', {}, getTime())),
                    ce('p', { className: 'post-content' }, post.postText)
                ))

        let resultTitle = document.querySelector('.topic-title')
        resultTitle.appendChild(header);
        let textResult = result.querySelector('.topic-container')
        textResult.appendChild(element)


    })