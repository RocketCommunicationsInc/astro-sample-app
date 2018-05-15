import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

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
      status: {
        type: String,
        value: "null"
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
          font-weight: 500;
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

    
      <rux-status status="[[status]]"></rux-status>
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
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

customElements.define("astro-pass-plan-task", AstroPassPlanTask);
