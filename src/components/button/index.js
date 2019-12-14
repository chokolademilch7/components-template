import { LitElement, html } from 'lit-element';
import style from './button.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a-button';
  }

  static get styles() {
    return [style];
  }

  static get properties() {
    return {
      label: { type: String, reflect: true }
    };
  }
  
  constructor() {
    super();
    debugger
    this.label = "";
  }

  render() {
    const { label } = this;
    return html`
      <div class="button">
        ${label}
      </div>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;
