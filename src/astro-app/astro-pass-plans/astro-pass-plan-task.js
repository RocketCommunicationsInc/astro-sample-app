import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroPassPlanTask extends PolymerElement {
  static get properties() {
    return {
      title: {
        type: String
      },
      status: {
        type: String,
        value: "ok"
      },
      complete: {
        type: Boolean,
        value: false
      },
      pass: {
        type: Boolean,
        value: false
      }
    };
  }

  static get template() {
    return html`
    <li>
      <rux-status status="[[status]]"></rux-status>
      <span class="task">[[title]]</span>
      <span class="task-complete">
        <rux-icon hidden=[[_getComplete(item.complete)]] icon="default:checkmark" size="16" color="#fff"></rux-icon>
      </span>
    </li>
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

customElements.define("astro-pass-plan-task", AstroPassPlanTask);
