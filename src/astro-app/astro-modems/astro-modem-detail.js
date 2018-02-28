import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroModemDetail extends PolymerElement {
  static get properties() {
    return {
      min: String
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="/src/astro-app/astro-modems/astro-modem-detail.css">
      <h1>Modem Detail</h1>
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }
}

customElements.define("astro-modem-detail", AstroModemDetail);
