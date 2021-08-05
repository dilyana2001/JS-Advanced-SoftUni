function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', (e) => {
        let baseUrl = 'http://localhost:3030/';
        let selectTagPosts = document.getElementById('posts');
        let currentOption = '';
        let postBody = document.getElementById('post-body');
        let postHeader = document.getElementById('post-title');
        let postComments = document.getElementById('post-comments');
        let defId = '';

        fetch(`${baseUrl}jsonstore/blog/posts`)
            .then(res => res.json())
            .then(posts => {
                Object.values(posts).forEach(x => {
                    let optionTag = document.createElement('option');
                    optionTag.setAttribute('value', x.id);
                    optionTag.textContent = x.title;
                    selectTagPosts.appendChild(optionTag);
                });

                selectTagPosts.addEventListener('change', (e) => {
                    currentOption = e.target[e.target.selectedIndex].value;

                });

                btnViewPost.addEventListener('click', () => {

                    for (let x = 0; x < Object.values(posts).length; x++) {
                        if (currentOption == '' || currentOption == Object.values(posts)[x].id) {
                            if (currentOption == '') {
                                postHeader.textContent = Object.values(posts)[0].title;
                                postBody.textContent = Object.values(posts)[0].body;
                                defId = Object.values(posts)[0].id;
                            } else {
                                postHeader.textContent = Object.values(posts)[x].title;
                                postBody.textContent = Object.values(posts)[x].body;
                            }
                        }
                    }
                    Array.from(postComments.querySelectorAll('li')).forEach(li => li.remove());

                    fetch(`${baseUrl}jsonstore/blog/comments`)
                        .then(res => res.json())
                        .then(comments => {
                            Object.values(comments).forEach(x => {
                                if (currentOption == x.postId || currentOption == '') {
                                    if (currentOption == '') currentOption = defId;
                                    let commentListElement = document.createElement('li');
                                    commentListElement.textContent = x.text;
                                    postComments.appendChild(commentListElement);
                                }
                            });
                        })
                        .catch(() => console.log(`Error`));
                });
            })
            .catch(() => console.log(`Error`));
        e.currentTarget.disabled = true;
    })
}

attachEvents();