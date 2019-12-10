import { LitElement, html, css } from 'lit-element';

class CustomElement extends LitElement {
  static get is() {
    return 'a100-button-sample';
  }

  static get styles() {
    return css`
    div {
      color: red;
    }
    `
  }

  render() {
    return html`
      <div>これはテストコンポーネント</div>
    `
  }
}

window.customElements.define(CustomElement.is, CustomElement);
export default CustomElement;