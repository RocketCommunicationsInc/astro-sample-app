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
      complete: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      pass: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      _status: {
        type: String,
        value: "ok"
      }
    };
  }

  static get template() {
    return html`

      <style>

      *[hidden] {
        display: none !important;
      }

        :host {
          display: flex;
          height: 100%;
          width: 100%;
          align-items: center;
        }

        :host[complete] {
          opacity: 0.2;
        }

        .task {
          margin-left: 1rem;
        }

        .task-complete {
          margin-left: auto;
        }
      </style>

    
      <rux-status status="[[_status]]"></rux-status>
      <span class="task">[[title]]</span>
      <span class="task-complete">
        <rux-icon hidden=[[!complete]] icon="default:checkmark" size="16" color="#fff"></rux-icon>
      </span>
    
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this._status = this.pass ? "ok" : "caution";
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }
}

customElements.define("astro-pass-plan-task", AstroPassPlanTask);
