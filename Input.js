import { inputCSS } from "./input-constants.js";

export class Input extends HTMLElement {
    constructor() {
        super();

        this.shadowDOM = this.attachShadow({mode: "open"});

        this.inputElement = document.createElement("input");
        this.shadowDOM.appendChild(this.inputElement);
    }

    connectedCallBack() {
        let inputStyle = document.createElement("style");
        inputStyle.innerHTML = inputCSS;

        if (this.hasAttribute("class"))
            this.inputElement.setAttribute("class", this.getAttribute("class"));
          

        this.shadowDOM.appendChild(inputStyle);
    }
}