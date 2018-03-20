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
    

    <link rel="stylesheet" href="/src/astro-app/astro-pass-plans/astro-pass-plans.css">
    <div class="rux-timeline-component">
      <div class="rux-timelne"><img src="/public/img/timeline.svg" /></div>


      <div class="rux-timeline__controls">
        
        <rux-status
          icon="advanced-status:satellite-transmit"
          label="Sat 1"
          status="ok"></rux-status>

        <div class="rux-button-group">
          <rux-button
            icon="media-controls:play">Play</rux-button>
          <rux-button
            icon="media-controls:pause">Pause</rux-button>
        </div>

        <div class="rux-timeline__tasks-status"><span class="rux-timeline__tasks-status__count"><b>[[0]]</b> of <b>[[7]]</b></span> Tasks Complete</div>
      </div>

      <div class="tasks-container">
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