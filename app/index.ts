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
        
        const compts =digimons.map ((_, i)=> i)
        this.shadowRoot.innerHTML = `<section>
            ${compts.join("")}
        </section>`;
    }
}

customElements.define("app-container", AppContaniner)