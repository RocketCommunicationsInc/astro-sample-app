import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { MutableData } from "@polymer/polymer/lib/mixins/mutable-data.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import { RuxStatus } from "@astrouxds/rux-status/rux-status.js";
// import { RuxSpectrumAnalyzer } from "/src/astro-components/rux-spectrum-analyzer/rux-spectrum-analyzer.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroTelemetryPane extends PolymerElement {
  static get properties() {
    return {
      title: {
        type: String
      },
      chart: {
        type: Object
      },
      power: {
        type: Object
      },
      thermal: {
        type: Object
      }
    };
  }
  static get template() {
    return html`
    <style>
    :host {
      height: 100%;
      padding: 0rem 3rem 3rem 3rem;
      width: 100%;
      box-sizing: border-box;
      background-color: var(--paneBackgroundColor, rgb(19, 43, 64));
      
    }
    
    *,
    *:after,
    *:before {
      box-sizing: inherit;
    }
    
    .astro-telemetry-pane__status {
      display: flex;
      flex-wrap: wrap;
      align-content: stretch;
      align-items: stretch;
      width: 920px;
    }
    
    .astro-telemetry-pane__status__group {
      flex-grow: 1;
      background-color: var(--colorTertiaryDarken2);
      display: flex;
      flex-wrap: wrap;
      align-content: stretch;
      align-items: stretch;
      margin: 1%;
      width: 414px;
    }
    
    .astro-telemetry-pane__status__group header {
      display: block;
      border: 2px solid red;
    }
    
    .astro-telemetry-pane__status__header {
      width: 100%;
      flex-shrink: 0;
      margin: 0 0 0 0.5rem;
      /* outline: 1px solid red; */
    }
    
    .astro-telemetry-pane__status__group h3 {
      width: 100%;
      flex-shrink: 0;
      margin: 1rem;
      color: #bdc3c9;
    }
    
    .astro-telemetry-pane__status__group ul {
      padding: 0rem 0rem 0rem 0.5rem;
      margin: 0 0;
      list-style: none;
      color: #fff;
      width: 100%;
      border-top: 1px solid #122231;
    }
    
    .astro-telemetry-pane__status__group li:nth-child(1) {
      padding-top: 10px;
    }
    
    .astro-telemetry-pane__status__group li {
      margin-bottom: 1em;
      margin-left: 0.5rem;
      text-transform: capitalize;
    }
    
    .astro-telemetry-pane__status__group rux-status {
      margin-right: 0.5rem;
    }
    
    .astro-telemetry-pane h1 {
      margin-left: 1.6rem;
    }
    
    h1,
    h2,
    h3 {
      font-weight: 300;
    }
    
    /* Start Spectrum Analyzer */
    
    svg {
      background-color: #1b3044;
      margin: 0px 0px 0px 10px;
    }
    
    .rux-spectrum-analyzer__bar {
      fill: #4586be;
    }
    
    .rux-spectrum-analyzer__bar-tip {
      fill: #b2bac0;
    }
    
    text,
    .rux-spectrum-analyzer__main-chart-label {
      fill: #bdc3c9;
    }
    
    .rux-spectrum-analyzer__main-chart-label {
      font-family: "Open Sans";
      font-weight: 300;
      font-size: 20px;
      text-transform: capitalize;
      margin-bottom: 5px;
    }
    
    .rux-spectrum-analyzer__chart-legend {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      fill: #fff;
    }
    
    g.rux-spectrum-analyzer__axis-label line {
      stroke: none;
    }
    
    .line {
      fill: none;
      stroke: steelblue;
      stroke-width: 2px;
    }
    
    .grid line {
      stroke: #455d6e;
      stroke-opacity: 0.3;
      shape-rendering: crispEdges;
    }
    
    .tick text {
      font-family: "Open Sans";
      font-weight: 300;
      font-size: 12px;
      color: #bdc3c9;
      font-weight: 300;
    }
    </style>    
    <section class="astro-telemetry-pane">
      <h1>[[title]]</h1>
      <rux-spectrum-analyzer chart-legend-x="freq" chart-legend-y="pwr" chart-title="signals" height="384" width="900" x-scale-min="900" x-scale-max="2301" x-scale-step="175" y-scale-min="-30" y-scale-max="0" data-source="wss://satellite-1.astrouxds.com" data-source-type="web-socket"></rux-spectrum-analyzer>

      <div class="astro-telemetry-pane__status"> 
        <div class="astro-telemetry-pane__status__group">
          <h3>Power</h3>
          <ul>
            <dom-repeat items="[[power]]">
            <template>
              <li><rux-status status=[[item.status]]></rux-status>[[item.label]]</li>
            </template>
          </ul>
        </div>

        <div class="astro-telemetry-pane__status__group">
          <h3>Thermal</h3>
          <ul>
            <dom-repeat items="[[thermal]]">
            <template>
              <li><rux-status status=[[item.status]]></rux-status>[[item.label]]</li>
            </template>
          </ul>
        </div>
      </div>
    </section>
    
      
    `;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.telemetryData) return;
  }
  ready() {
    super.ready();
  }
}
customElements.define("astro-telemetry-pane", AstroTelemetryPane);
