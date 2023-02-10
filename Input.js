import { inputCSS, icons } from "./input-constants.js";

export class Input extends HTMLElement {
    constructor() {
        super();

        this.shadowDOM = this.attachShadow({mode: "open"});

        this.inputElement = document.createElement("input");
        this.labelElement = document.createElement("label");
        this.pElement = document.createElement("p");
        this.spanElement = document.createElement("span");

        this.sectionElement = document.createElement("section");
        this.shadowDOM.appendChild(this.sectionElement);

        this.sectionElement.appendChild(this.pElement);
        this.sectionElement.appendChild(this.inputElement);
        this.sectionElement.appendChild(this.labelElement);
        this.sectionElement.appendChild(this.spanElement);
        
        this.textareaElement = document.createElement("textarea");
        this.shadowDOM.appendChild(this.textareaElement);
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
        this.setPermaHoverAndFocus();
        this.setDisabled();
        this.setHelperText();
        this.setStartIcon();
        this.setEndIcon();
        this.setInitialText();
        this.setSize();
        this.setFullWidth();
        this.setMultiline();
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

    setPermaHoverAndFocus() {
        if(!this.hasAttribute("class")) return;

        if(this.getAttribute("class") === "hover") {
            this.inputElement.style.borderColor = "#333333";
            this.labelElement.style.color = "#333333";

        } else if(this.getAttribute("class") === "focus") {
            if(this.hasAttribute("error")) {
                this.inputElement.style.borderColor = "#D32F2F";
                this.labelElement.style.color = "#D32F2F";

            } else {
                this.inputElement.style.borderColor = "#2962FF";
                this.labelElement.style.color = "#2962FF";
            }

        } else return;
    }

    setDisabled() {
        if(!this.hasAttribute("disabled")) return;

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

    setStartIcon() {
        if(!this.getAttribute("startIcon")) return;

        let iconName = this.getAttribute("startIcon");
        if(!icons[iconName]) return;

        this.spanElement.style.display = "block";
        this.spanElement.setAttribute("class", "material-icons startIcon");
        this.inputElement.setAttribute("class", "startIconInput");
        this.spanElement.appendChild(document.createTextNode(iconName));

    }

    setEndIcon() {
        if(!this.getAttribute("endIcon")) return;

        let iconName = this.getAttribute("endIcon");
        if(!icons[iconName]) return;

        this.spanElement.style.display = "block";
        this.spanElement.setAttribute("class", "material-icons endIcon");
        this.inputElement.setAttribute("class", "endIconInput");
        this.spanElement.appendChild(document.createTextNode(iconName));
    }

    setInitialText() {
        if(!this.hasAttribute("text")) return;

        let textValue = this.getAttribute("text") || "Empty";
        this.inputElement.value = textValue;

    }

    setSize() {
        if(!this.hasAttribute("size")) return;

        if(this.getAttribute("size") !== "sm") return;

        this.inputElement.style.height = "40px";
    }

    setFullWidth() {
        if(!this.hasAttribute("fullWidth")) return;

        this.inputElement.style.width = "100%";
    }

    setMultiline() {
        if(!this.hasAttribute("multiline")) return;
        if(!this.getAttribute("row")) return;


        let row = this.getAttribute("row");

        this.inputElement.style.display = "none";
        this.textareaElement.style.display = "block";

        this.textareaElement.placeholder = this.inputElement.placeholder;
        this.textareaElement.name = this.inputElement.id;

        this.textareaElement.rows = row;
    }

}