import { html } from "../node_modules/lit-html/lit-html.js";
import oneCotTemplate from "./oneCotTemplate.js";

export default (cats) => html `
<ul>
    ${cats.map(cat=> html `${oneCotTemplate(cat)}`)}
</ul>
`;