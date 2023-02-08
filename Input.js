import { inputCSS } from "./input-constants.js";

export class Input extends HTMLElement {
    constructor() {
        super();

        this.shadowDOM = this.attachShadow({mode: "open"});

        this.inputElement = document.createElement("input");
        this.shadowDOM.appendChild(this.inputElement);
        
        this.labelElement = document.createElement("label");
        this.shadowDOM.appendChild(this.labelElement);

        this.pElement = document.createElement("p");
        this.shadowDOM.appendChild(this.pElement);

        this.sectionElement = document.createElement("section");
        this.shadowDOM.appendChild(this.sectionElement);

        this.sectionElement.appendChild(this.pElement);
        this.sectionElement.appendChild(this.inputElement);
        this.sectionElement.appendChild(this.labelElement);
    }

    connectedCallback() {
        this.labelElement.appendChild(
            document.createTextNode(this.getAttribute("label") ?? "Label")
          );

          this.sectionElement.setAttribute("class", "component-container");

        let inputStyle = document.createElement("style");
        inputStyle.innerHTML = inputCSS;
        this.shadowDOM.appendChild(inputStyle);

        this.setName();
        this.setPlaceholder();
        this.setErrorState();
        this.setDisabled();
        this.setHelperText();
    }

    setName(){
        let name = this.getAttribute("name") || "nameDefault";

        this.labelElement.setAttribute("for", name);
        this.inputElement.setAttribute("id", name);
    }

    setPlaceholder() {
        let placeholderValue = this.getAttribute("placeholder") || "Placeholder";
        this.inputElement.placeholder = placeholderValue;
    }

    setErrorState() {
        if(!this.hasAttribute("error")) return;

        this.inputElement.setAttribute("class", "inputError");
        this.labelElement.setAttribute("class", "labelError");
    }

    setDisabled() {
        if(!this.hasAttribute("disabled")) return

        this.inputElement.disabled = true;
        this.inputElement.style.borderColor = "#E0E0E0";
        this.inputElement.style.backgroundColor = "#F2F2F2";
    }

    setHelperText() {
        if(!this.hasAttribute("helpertext")) return; 
        
        this.pElement.appendChild(
            document.createTextNode(this.getAttribute("helpertext") || "Empty")
          );
        this.pElement.style.display = "block";

        if(!this.hasAttribute("error")) return;

        this.pElement.setAttribute("class", "pError");
    }

}