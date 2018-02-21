import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxComponent } from "../astro-components/rux-component/rux-component.js";
import { RuxSegmentedButton } from "../astro-components/rux-segmented-button/rux-segmented-button.js";
import { RuxProgress } from "../astro-components/rux-progress/rux-progress.js";
import { RuxButton } from "../astro-components/rux-button/rux-button.js";
import { RuxStatus } from "../astro-components/rux-status/rux-status.js";

// import { RuxIcon } from "../astro-components/rux-icon/rux-icon.js";

// import '../astro-components/rux-button.js';
// import '../astro-components/rux-global-status-bar.js';
// import '../astro-components/rux-status.js';
// import '../astro-components/rux-icons-svg.js';
// import '../astro-components/rux-tabs.js';
// import '../astro-components/rux-icons-svg.js';
// import '../astro-components/rux-progress.js';
// import '../astro-components/rux-segmented-button.js';
// import '../astro-components/rux-pop-up-menu.js';

/**
 * @customElement
 * @polymer
 */
export class AstroApp extends PolymerElement {
  static get template() {
    return `
    <style>
      :host {
        display: block;
        /* box-sizing: border-box; */
      }
    </style>
    
    <rux-component></rux-component>

    <rux-status
      status="error"></rux-status>
    
    <rux-status
      status="error"
      label="Netcom"
      sublabel="45Khz"
      notifications=1000001></rux-status>

    <div class="rux-button-group">
      <rux-button>Cancel</rux-button>
      <rux-button type="default">Ok</rux-button>
    </div>

    <rux-segemented-button
    min="0"
    max="20"
    value="10"
    label=true></rux-segmented-button>

    <rux-progress
      min="0"
      max="20"
      value="10"
      label=true></rux-progress>`;
  }

  constructor() {
    super();
    this.name = "3.0 preview";
    console.log(RuxSegmentedButton.template);

    // this.timeSelector = {
    //   buttons: [{ label: "Hour" }, { label: "Day" }, { label: "Week" }]
    // };
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: "astro-app"
      }
    };
  }

  _stringIt(obj) {
    return JSON.stringify(obj);
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    suer.disconnectedCallback();
  }

  ready() {
    super.ready();
  }
}

customElements.define("astro-app", AstroApp);
