import articleData from "../../articleData.js";
import { titleFormatter } from "../views/utils.js";

const articlesTemplate = (data) => /*javascript*/ `
<article> 
    <h3>${data.title}</h3>
    <a href="/articles/${titleFormatter(data.title)}">Read More</a>
</article>
`;

export default function(context) {
    let rootElement = document.getElementById('root');
    let articlesHtml = articleData.map(x => articlesTemplate(x)).join('<hr>');

    rootElement.innerHTML = articlesHtml;
}