function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', () => {
        let baseUrl = 'http://localhost:3030/';
        let selectTagPosts = document.getElementById('posts');
        let currentOption = '';
        let defultOption = '';
        let postBody = document.getElementById('post-body');
        let postHeader = document.getElementById('post-title');
        let postComments = document.getElementById('post-comments');

        fetch(`${baseUrl}jsonstore/blog/posts`)
            .then(res => res.json())
            .then(posts => {
                Object.values(posts).forEach(x => {
                    let optionTag = document.createElement('option');
                    optionTag.setAttribute('value', x.id);
                    optionTag.textContent = x.title;
                    selectTagPosts.appendChild(optionTag);
                })

                selectTagPosts.addEventListener('change', (e) => {
                    currentOption = e.target[e.target.selectedIndex].value;
                })

                btnViewPost.addEventListener('click', () => {
                    Object.values(posts).forEach(x => {
                        if (currentOption == x.id) {
                            postHeader.textContent = x.title;
                            postBody.textContent = x.body;
                            fetch(`${baseUrl}jsonstore/blog/comments`)
                                .then(res => res.json())
                                .then(comments => {
                                    Object.values(comments).forEach(comment => {
                                        if (currentOption == comment.postId) {
                                            let commentListElement = document.createElement('li');
                                            commentListElement.textContent = comment.text;
                                            postComments.appendChild(commentListElement);
                                        }
                                    })
                                })
                        }
                    })
                })
            })
    })
}

attachEvents();