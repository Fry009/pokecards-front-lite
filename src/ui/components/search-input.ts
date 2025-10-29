import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('search-input')
export class SearchInput extends LitElement {
  static styles = css`
    :host { display: inline-block; width: 100%; }
    .wrapper { position: relative; width: 100%; }
    input {
      width: 100%;
      box-sizing: border-box;
      padding: 0.625rem 0.875rem 0.625rem 2.25rem;
      border: 1px solid #e3e3e3;
      border-radius: 10px;
      outline: none;
      font: inherit;
      transition: border-color .15s ease, box-shadow .15s ease;
      background:
        url("data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>\
<circle cx='11' cy='11' r='8'/>\
<line x1='21' y1='21' x2='16.65' y2='16.65'/>\
</svg>") no-repeat 10px center / 18px 18px;
    }
    input::placeholder { color: #9aa0a6; }
    input:focus {
      border-color: #8bb8ff;
      box-shadow: 0 0 0 3px rgba(24, 119, 242, .15);
    }
    .clear {
      position: absolute;
      right: 6px; top: 50%;
      transform: translateY(-50%);
      border: none; background: transparent; padding: 6px;
      cursor: pointer; border-radius: 8px;
    }
    .clear:focus { outline: 2px solid #8bb8ff; }
    .clear svg { width: 16px; height: 16px; stroke: #888; }
  `;

  render() {
    return html`
      <h2>Search input component</h2>
    `;
  }
  
}
