var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getDigimon } from "./services/digimons.js";
class AppContaniner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const digimons = yield getDigimon();
            console.log(digimons);
            this.render(digimons);
        });
    }
    render(digimons) {
        if (!this.shadowRoot)
            return;
        const digimones = digimons.map(({ img, level, name }) => `<article>
            <h2>${name}:  </h2>
            <p>${level}</p>
            <img src="${img}">
        </article>`);
        console.log(digimones);
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles.css"> 
        <section>
        
            ${digimones.join("")}
        </section>`;
    }
}
customElements.define("app-container", AppContaniner);
