//Task Manager
function solve() {
    document.querySelector('#add').addEventListener('click', addArticleHandler);

    function addArticleHandler(e) {
        e.preventDefault();
        const nameOfTask = document.querySelector('#task');
        const descriptionOfTask = document.querySelector('#description');
        const dateOfTask = document.querySelector('#date');
        const wrapperDiv = document.querySelector('.wrapper section:nth-child(2) div:nth-child(2)');
        if (!nameOfTask.value || !descriptionOfTask.value || !dateOfTask.value) { return }
        const startGreenBtn = ['Start', 'green'];
        const deleteRedBtn = ['Delete', 'red'];
        const ifButtons = true;

        wrapperDiv.appendChild(
            createTask(nameOfTask.value,
                descriptionOfTask.value,
                dateOfTask.value,
                ifButtons,
                startGreenBtn,
                deleteRedBtn));

        nameOfTask.value = '';
        descriptionOfTask.value = '';
        dateOfTask.value = '';
    }

    function deleteTaskHandler(e) {
        const article = e.target.parentNode.parentNode;
        article.remove();
    }

    function startTaskHandler(e) {
        const article = e.target.parentNode.parentNode;
        const nameOfTask = article.querySelector('h3');
        const descriptionOfTask = article.querySelector('p:nth-child(2)');
        descriptionOfTask.textContent = descriptionOfTask.textContent.split('Description: ').join('');
        const dateOfTask = article.querySelector('p:nth-child(3)')
        dateOfTask.textContent = dateOfTask.textContent.split('Due Date: ').join('');
        console.log(dateOfTask.textContent)
        const wrapperDiv = document.querySelector('.wrapper section:nth-child(3) div:nth-child(2)');
        const deleteRedBtn = ['Delete', 'red'];
        const orangeFinishBtn = ['Finish', 'orange'];
        const ifButtons = true;

        wrapperDiv.appendChild(
            createTask(nameOfTask.textContent,
                descriptionOfTask.textContent,
                dateOfTask.textContent,
                ifButtons,
                deleteRedBtn,
                orangeFinishBtn));
        deleteTaskHandler(e);
    }



    function finishTaskHandler(e) {
        const article = e.target.parentNode.parentNode;
        const nameOfTask = article.querySelector('h3');
        const descriptionOfTask = article.querySelector('p:nth-child(2)');
        descriptionOfTask.textContent = descriptionOfTask.textContent.split('Description: ').join('');
        const dateOfTask = article.querySelector('p:nth-child(3)');
        dateOfTask.textContent = dateOfTask.textContent.split('Due Date: ').join('');
        const wrapperDiv = document.querySelector('.wrapper section:nth-child(4) div:nth-child(2)');
        const ifButtons = false;

        wrapperDiv.appendChild(
            createTask(nameOfTask.textContent,
                descriptionOfTask.textContent,
                dateOfTask.textContent,
                ifButtons));
        deleteTaskHandler(e);

    }

    function createTask(name, description, date, ifButtons, firstBtn, secondBtn) {
        const article = document.createElement('article');
        const h3Article = document.createElement('h3');
        const pDescrArticle = document.createElement('p');
        const pDaterticle = document.createElement('p');
        const btnsDiv = document.createElement('div');
        const startBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        h3Article.textContent = name
        pDescrArticle.textContent = `Description: ${description}`;
        pDaterticle.textContent = `Due Date: ${date}`;
        article.appendChild(h3Article);
        article.appendChild(pDescrArticle);
        article.appendChild(pDaterticle);

        if (ifButtons) {
            if (firstBtn[0] == 'Start') {
                startBtn.addEventListener('click', startTaskHandler);
            } else if (firstBtn[0] == 'Delete') {
                startBtn.addEventListener('click', deleteTaskHandler);
            }

            if (secondBtn[0] == 'Delete') {
                deleteBtn.addEventListener('click', deleteTaskHandler);
            } else if (secondBtn[0] == 'Finish') {
                deleteBtn.addEventListener('click', finishTaskHandler);
            }
            startBtn.textContent = firstBtn[0];
            deleteBtn.textContent = secondBtn[0];
            btnsDiv.classList = 'flex';
            startBtn.classList = firstBtn[1];
            deleteBtn.classList = secondBtn[1];
            article.appendChild(btnsDiv);
            btnsDiv.appendChild(startBtn);
            btnsDiv.appendChild(deleteBtn);
        }
        return article;
    }
}
