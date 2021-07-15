function getArticleGenerator(articles) {
    let contentDiv = document.querySelector('#content');

    function closure() {
        let articleTag = document.createElement('article');
        while (articles.length > 0) {
            articleTag.textContent = articles.shift();
            contentDiv.appendChild(articleTag);
        } // sektor 8 avtogara => 350
    }
    return closure;
}