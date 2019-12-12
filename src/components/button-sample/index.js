import { LitElement, html } from 'lit-element';
import style from './button-sample.gen.css';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-button-sample';
  }

  static get styles() {
    return [style];
  }

  render() {
    return html`
      <div>これはテストコンポーネント</div>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;