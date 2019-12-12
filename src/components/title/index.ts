import {
  LitElement, html, customElement
} from 'lit-element';

@customElement('a100-title')
export class a100Title extends LitElement {
  render() {
    return html`
      <div>これはタイトル</div>
    `;
  }
}