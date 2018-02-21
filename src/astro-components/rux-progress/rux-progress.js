import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";

export class RuxProgress extends PolymerElement {
  static get properties() {
    return {
      min: String,
      max: String,
      value: String,
      text: String
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-progress/rux-progress.css">

      <div class="rux-progress">
          <progress value="[[value]]" min=[[min]] max=[[max]]></progress>
          <div hidden="[[hidden]]">[[value]]</div>
      </div>`;
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

    this.hidden = !this.text;
  }
}

customElements.define("rux-progress", RuxProgress);
