import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroModems extends PolymerElement {
  static get properties() {
    return {
      title: {
        type: String
      },
      modems: {
        type: Object
      },
      selectedModem: {
        type: Object,
        observer: "selectedModemChanged"
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="/src/astro-app/astro-modems/astro-modems.css">
      <astro-modem-list modems={{modems}} selected-modem={{selectedModem}}></astro-modem-list>
      <astro-modem-detail selected-modem={{selectedModem}} slot-name="detail"></astro-modem-detail>
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

  selectedModemChanged(e) {
    console.log("sm changed", e);
  }

  ready() {
    super.ready();
  }
}

customElements.define("astro-modems", AstroModems);
