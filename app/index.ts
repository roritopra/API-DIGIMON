import { getDigimon } from "./services/digimons.js";
import { digiData } from "./types/data.js";
class AppContaniner extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const digimons = await getDigimon(); 
        console.log(digimons);
        this.render(digimons);
    }

    render(digimons: Array<digiData>) {
        if(!this.shadowRoot) return;
        
        
        const digimones =digimons.map (( {img, level, name} )=> `<article>
            <h2>${name}:  </h2>
            <p>${level}</p>
            <img src="${img}">
        </article>`)
        console.log(digimones)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles.css"> 
        <section>
        
            ${digimones.join("")}
        </section>`;
    }
}

customElements.define("app-container", AppContaniner)