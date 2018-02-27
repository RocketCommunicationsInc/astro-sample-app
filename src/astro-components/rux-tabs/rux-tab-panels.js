import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTabPanels extends PolymerElement {
  static get properties() {
    return {
      type: String
    };
  }

  static get template() {
    return html`
      <style>
        /* 
          define a container for tab panels with some basic assumptions: 
            - Panels should be the height and width of the available screen
            - Panels should not show overflow content or scroll
            - Panels should use box-sizing: border-box (?)
        */
        :host {
          height: 100%;
          width: 100%;
          overflow: hidden;
        }

        
      </style>
      <slot></slot>
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    // set the role to tab
    this.setAttribute("role", "tablist");

    let _panels = this.querySelectorAll("rux-tab-panel");

    window.dispatchEvent(
      new CustomEvent("register-panels", {
        detail: { panels: _panels }
      })
    );

    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }
}

customElements.define("rux-tab-panels", RuxTabPanels);
