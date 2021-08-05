function solution() {
    let mainSector = document.getElementById('main')
    let baseUrl = 'http://localhost:3030/'

    fetch(`${baseUrl}jsonstore/advanced/articles/list`)
        .then(res => res.json())
        .then(res => {
            Object.values(res).forEach(x => {
                fetch(`${baseUrl}jsonstore/advanced/articles/details/${x._id}`)
                    .then(res => res.json())
                    .then(res => {
                        let accordionDiv = document.createElement('div');
                        let headDiv = document.createElement('div');
                        let spanHeader = document.createElement('span');
                        let buttonShowHide = document.createElement('button');
                        let extraDiv = document.createElement('div');
                        let paragraphInfo = document.createElement('p');

                        accordionDiv.setAttribute('class', 'accordion')
                        accordionDiv.style.margin = 5 + 'px'
                        headDiv.setAttribute('class', 'head')
                        spanHeader.textContent = `${res.title}`
                        buttonShowHide.setAttribute('class', 'button')
                        buttonShowHide.setAttribute('id', '')
                        buttonShowHide.textContent = `MORE`
                        extraDiv.setAttribute('class', 'extra')
                        paragraphInfo.textContent = `${res.content}`

                        mainSector.appendChild(accordionDiv)
                        accordionDiv.appendChild(headDiv)
                        headDiv.appendChild(spanHeader)
                        headDiv.appendChild(buttonShowHide)
                        accordionDiv.appendChild(extraDiv)
                        extraDiv.appendChild(paragraphInfo)
                        buttonShowHide.addEventListener('click', () => {
                            if (buttonShowHide.textContent == `MORE`) {
                                extraDiv.setAttribute('class', '')
                                buttonShowHide.textContent = `LESS`
                            } else {
                                extraDiv.setAttribute('class', 'extra')
                                buttonShowHide.textContent = `MORE`
                            }

                        })
                    })
                    .catch(() => console.log(`Error`))
            })
        })
        .catch(() => console.log(`Error`))
}
solution()