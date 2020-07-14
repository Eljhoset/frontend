import style from './app.style.scss'
const styleElement = document.createElement('style');
styleElement.type = 'text/css';
styleElement.appendChild(document.createTextNode(style));
export class AppComponent extends HTMLElement {
    connectedCallback(): void {
        const content = document.createTextNode(`Todo App`);
        this.appendChild(content);
        this.appendChild(styleElement);
    }
}
customElements.define('todo-app', AppComponent)
