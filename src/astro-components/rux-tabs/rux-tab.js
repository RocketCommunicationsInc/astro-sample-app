import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element as PolymerElement.js";
export class RuxTab extends PolymerElement {
  static get properties() {
    return {
      selected: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    // set the role to tab
    this.setAttribute("role", "tab");
  }

  ready() {
    super.ready();
  }
}

customElements.define("rux-tab", RuxTab);
