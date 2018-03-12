import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxButton } from "../rux-button/rux-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxNotification extends PolymerElement {
  static get properties() {
    return {
      message: {
        type: String
      },
      opened: {
        type: String,
        value: false,
        reflectToAttribute: true
      }
    };
  }
  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-notification/rux-notification.css">
      <div class$="rux-notification {{opened}}">
        <div class="rux-notification__message">[[message]]</div>
        <rux-button on-click="_dismiss">Ok</rux-button>
      </div>
      `;
  }
  constructor() {
    super();

    this._notificationListener = this._showNotification(this);
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _showNotification() {
    this.opened = true;
  }
  _dismiss() {
    this.opened = false;
  }
}
customElements.define("rux-notification", RuxNotification);
