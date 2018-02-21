import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxButton } from "../rux-button/rux-button.js";

export class RuxGlobalStatusBar extends PolymerElement {
  static get properties() {
    return {
      appname: String,
      version: String
    };
  }

  static get template() {
    return html`
    <link rel="stylesheet" href="/src/astro-components/rux-global-status-bar/rux-global-status-bar.css">

      <header>
        <div class="app-meta" hidden="[[!appname]]">
          <h1>[[appname]]<span class="app-version">[[version]]</span></h1>
        </div>

        <!-- optional for tabbed based UIs //-->
        <slot name="tabs"></slot>

        <!-- optional for status icons //-->
        <slot name="status-bar"></slot>

        <!-- optional for toolbars //-->
        <slot name="tool-bar"></slot>

        <rux-button
          on-click="_masterOff"
          type="large"
          icon="default:caution">Master Off</rux-button>
      </header>`;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    // if the user hasn’t defined an appname then explicitly
    // set the appname property to false to hide the app-meta
    // section from being included in the flex DOM
    if (!this.appname) this.appname = false;
  }

  _masterOff() {
    console.log("master off from inside global status");
    window.dispatchEvent(
      new CustomEvent("master-off", {
        detail: { off: "yo" }
      })
    );
  }

  ready() {
    super.ready();
  }
}

customElements.define("rux-global-status-bar", RuxGlobalStatusBar);
