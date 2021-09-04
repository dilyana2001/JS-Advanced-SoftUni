import articleData from "../../articleData.js";
import { titleFormatter } from "./utils.js";

const articleTemplate = (data) => /*javascript*/ `
<article>
        <header>
           <h1>${data.title}</h1> 
        </header>
        <main>
            <p>  ${data.content}  </p>
        </main>
        <footer> 
            <p>  created by: ${data.author || 'Dilyana Nedelcheva'}  </p>
            <button id="finishBtn">Finish</button>
        </footer>

</article>
`;

export default function(context) {
    let rootElement = document.getElementById('root');

    let currentArticle = articleData.find(x => titleFormatter(x.title) == context.params.id);

    console.log(context.params.id);
    rootElement.innerHTML = articleTemplate(currentArticle);
    rootElement.querySelector('#finishBtn').addEventListener('click', () => {
        context.page.redirect('/articles');
    })
}