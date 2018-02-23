import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxClock } from "../astro-components/rux-clock/rux-clock.js";
/**
 * @polymer
 * @extends HTMLElement
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
    
    <section>
      <h1>Clock</h1>
      <rux-clock
        aos=""
        los=""
        timezone="America/Los_Angeles"></rux-clock>
    </section>
      
    `;
  }
  constructor() {
    super();
    this.name = "3.0 preview";
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: "astro-app"
      }
    };
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
