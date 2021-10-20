function solve() {
    let mainSection = document.querySelector('main section');

    document.querySelector('form button.btn.create').addEventListener('click', formButtonHandler);

    function formButtonHandler(e) {
        e.preventDefault();
        let asideSection = document.querySelector('aside section');
        let authorInputElement = asideSection.querySelector('#creator');
        let titleInputElement = asideSection.querySelector('#title');
        let categoryInputElement = asideSection.querySelector('#category');
        let contentTextareaElement = asideSection.querySelector('#content');

        if (!authorInputElement.value ||
            !titleInputElement.value ||
            !categoryInputElement.value ||
            !contentTextareaElement.value) {
            return;
        }

        mainSection.appendChild(createArticle(
            titleInputElement.value,
            categoryInputElement.value,
            authorInputElement.value,
            contentTextareaElement.value
        ));

        authorInputElement.value = '';
        titleInputElement.value = '';
        categoryInputElement.value = '';
        contentTextareaElement.value = '';
    }

    function createArticle(capture, category, creator, content) {
        let article = document.createElement('article');
        let articleCapture = document.createElement('h1');
        let articleCategoryParagraph = document.createElement('p');
        let articleCategoryStrong = document.createElement('strong');
        let articleCreatorParagraph = document.createElement('p');
        let articleCreatorStrong = document.createElement('strong');
        let articleContentParagraph = document.createElement('p');
        let divOfBtns = document.createElement('div');
        let deleteBtn = document.createElement('button');
        let archiveBtn = document.createElement('button');
        divOfBtns.setAttribute('class', 'buttons');
        deleteBtn.setAttribute('class', 'btn delete');
        archiveBtn.setAttribute('class', 'btn archive');
        articleCapture.textContent = capture;
        articleCategoryParagraph.textContent = 'Category:';
        articleCategoryStrong.textContent = category;
        articleCreatorParagraph.textContent = 'Creator:';
        articleCreatorStrong.textContent = creator;
        articleContentParagraph.textContent = content;
        deleteBtn.textContent = 'Delete';
        archiveBtn.textContent = 'Archive';
        article.appendChild(articleCapture);
        article.appendChild(articleCategoryParagraph);
        articleCategoryParagraph.appendChild(articleCategoryStrong);
        article.appendChild(articleCreatorParagraph);
        articleCreatorParagraph.appendChild(articleCreatorStrong);
        article.appendChild(articleContentParagraph);
        article.appendChild(divOfBtns);
        divOfBtns.appendChild(deleteBtn);
        divOfBtns.appendChild(archiveBtn);
        deleteBtn.addEventListener('click', deleteArticle);
        archiveBtn.addEventListener('click', archiveArticle);
        return article;
    }

    function deleteArticle(e) {
        e.target.parentNode.parentNode.remove();
    }

    function archiveArticle(e) {
        let archiveObj = [];
        let articleTitle = e.target.parentNode.parentNode.querySelector('h1');
        let archiveSectionOrderList = document.querySelector('ol');
        let archiveList = archiveSectionOrderList.querySelectorAll('li');
        archiveObj.push(articleTitle.textContent);
        for (let list of archiveList) { archiveObj.push(list.textContent) }
        archiveObj.sort((a, b) => a.localeCompare(b));
        archiveSectionOrderList.textContent = '';
        for (let x of archiveObj) {
            let listTitleElement = document.createElement('li');
            listTitleElement.textContent = x;
            archiveSectionOrderList.appendChild(listTitleElement);
        }
        deleteArticle(e);
    }
}