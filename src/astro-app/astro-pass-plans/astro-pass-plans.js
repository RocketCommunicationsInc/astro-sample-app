import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroPassPlans extends PolymerElement {
  static get properties() {
    return {
      title: {
        type: String
      }
    };
  }
  static get template() {
    return html `
    <style>
      .task-container {
        width: 100%;
        padding: 0.25rem;
        background: rgba(0,0,0,0.2);
      }

      ol {
        width: 100%;
      }

      ol li {
        background-color: #20313F;
        padding: 0.5rem;
        margin: 0 0 .025rem 0;
      }
    </style>

    <link rel="stylesheet" href="/src/astro-app/astro-pass-plans/astro-pass-plans.css">
    <div class="rux-timeline-component">
      <div class="rux-timelne"><img src="/public/img/timeline.svg" /></div>
      <div class="rux-timeline__controls">
        <rux-status
          icon="advanced-status:satellite-transmit"
          label="Sat 1"
          status="ok"></rux-status>

        <rux-button
          icon="media-controls:play">Play</rux-button>
        <rux-button
          icon="media-controls:pause">Pause</rux-button>

        <div class="tasks-status">[[0]] of [[7]] Tasks Complete</div>
      </div>

      <div class="task-container">
        <ol class="tasks">
          <li>Acquire and confirm signal</li>
          <li>Confirm telemetry data reception</li>
          <li>Analyze thermal data</li>
          <li>Analyze payload data</li>
          <li>Analyze battery levels</li>
          <li>Upload commanding</li>
          <li>Check ACOS</li>
        </ol>
      </div>

    </div>

    
      
    `;
  }
  constructor() {
    super();
  }

  _getPower(p) {
    return p.power;
  }

  _getThermal(t) {
    return t.thermal;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  ready() {
    super.ready();
  }
}
customElements.define("astro-pass-plans", AstroPassPlans);
