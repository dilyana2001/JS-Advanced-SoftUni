function getArticleGenerator(articles) {
    let contentDiv = document.querySelector('#content');

    function closure() {
        let articleTag = document.createElement('article');
        if (articles.length <= 0) return
        articleTag.textContent = articles.shift()
        contentDiv.appendChild(articleTag);
    }
    return closure;
}