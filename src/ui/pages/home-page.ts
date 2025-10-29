import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';


@customElement('home-page')
export class HomePage extends LitElement {
  static styles = css`section{max-width:720px;margin:2rem auto;padding:0 1rem;}`;

  render() {
    return html`
      <h1>This is my home Page</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-page': HomePage
  }
}

