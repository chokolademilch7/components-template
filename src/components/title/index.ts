import {
  LitElement, html, customElement, property
} from 'lit-element';
import style from './index.gen.css'

@customElement('a100-title')
export class a100Title extends LitElement {
  @property({type: String}) name = '';

  static get styles() {return [style]}
  render() {
    return html`
      <div>これはタイトル</div>
    `;
  }
}