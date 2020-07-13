export class AppComponent extends HTMLElement {
    connectedCallback(): void {
        const content = document.createTextNode(`Todo App`);
        this.appendChild(content);
    }
}