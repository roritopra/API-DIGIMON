import { getDigimon } from "./services/digimons.js";
class AppContaniner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        const digimons = getDigimon();
        this.render(digimons);
    }
    render(digimons) {
        if (!this.shadowRoot)
            return;
        const compts = digimons.map(() => "He");
        this.shadowRoot.innerHTML = `<section>
            ${compts.join("")}
        </section>`;
    }
}
customElements.define("app-container", AppContaniner);
