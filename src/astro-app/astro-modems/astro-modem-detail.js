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

      <ul>
        <li><rux-icon icon="modem-controls:set-power"></rux-icon>Set Power</li>
      </ul>

      <h1>[[Modem Detail]]</h1>
      <section>
        <h1>Tx</h1>
        <dl>
          <dt>Power</dt>
          <dd>[[Power]]dBm</dd>
          <dt>Frequency</dt>
          <dd>[[Power]]mHz</dd>
          <dt>Symbol Rate</dt>
          <dd>[[Power]]samples/sec</dd>
        </dl>
      </section>
      <section>
        <h1>Rx</h1>
        <dl>
          <dt>Frequency</dt>
          <dd>[[Power]]mHz</dd>
          <dt>Symbol Rate</dt>
          <dd>[[Power]]samples/sec</dd>
        </dl>
      </section>

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
