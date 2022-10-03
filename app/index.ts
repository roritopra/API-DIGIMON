import { getDigimon } from "./services/digimons.js";
import { digiData } from "./types/index.js";
class AppContaniner extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const digimons = await getDigimon(); 
        this.render(digimons);
    }

    render(digimons: Array<digiData>) {
        if(!this.shadowRoot) return;
        
        const digimones =digimons.map (( image, level, name)=> `<article>
            <h3>${name}:  </h3>
            <h3>${level}</h3>
            <img src="${image}">
        </article>`)
        this.shadowRoot.innerHTML = `<section>
            ${digimones.join("")}
        </section>`;
    }
}

customElements.define("app-container", AppContaniner)