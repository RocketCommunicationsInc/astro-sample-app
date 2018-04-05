import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import { MutableData } from "/node_modules/@polymer/polymer/lib/mixins/mutable-data.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroModems extends MutableData(PolymerElement) {
  static get properties() {
    return {
      title: {
        type: String
      },
      modems: {
        type: Array,
        observer: "modemListChanged"
      },
      selectedModem: {
        type: Object
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="/src/astro-app/astro-modems/astro-modems.css">
      <astro-modem-list modems={{modems}} selected-modem={{selectedModem}}></astro-modem-list>
      <astro-modem-detail modems={{modems}} selected-modem={{selectedModem}}></astro-modem-detail>
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

  modemListChanged(e) {
    console.log("sm changed", e);
  }

  ready() {
    super.ready();
  }
}

customElements.define("astro-modems", AstroModems);
