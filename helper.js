export function loadTpl(template) {
    return class extends HTMLElement {
        constructor() {
            super();
            this.innerHTML = template;
        }
    };
}
