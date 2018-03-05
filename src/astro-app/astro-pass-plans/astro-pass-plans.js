import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroPassPlans extends PolymerElement {
  static get properties() {
    return {
      title: {
        type: String
      }
    };
  }
  static get template() {
    return html`
    <link rel="stylesheet" href="/src/astro-app/astro-pass-plans/astro-pass-plans.css">
    <h1>[[title]]</h1>
    
      
    `;
  }
  constructor() {
    super();
  }

  _getPower(p) {
    return p.power;
  }

  _getThermal(t) {
    return t.thermal;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  ready() {
    super.ready();
  }
}
customElements.define("astro-pass-plans", AstroPassPlans);
