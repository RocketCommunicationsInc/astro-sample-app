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
      padding: 1.25rem;
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
      flex-wrap: nowrap;
      justify-content: space-between;
      align-content: stretch;
      align-items: stretch;
      width: 100%;

      margin-top: 1rem;
      
    }
    
    .astro-telemetry-pane__status__group {
      background-color: var(--modemDetailSectionBackgroundColor);
      // background-color: var(--telemetryPaneBackgroundColor, rgb(255,255,255));
      display: flex;
      flex-wrap: wrap;
      justify-content: stretch;
      align-content: stretch;
      align-items: stretch;      
      flex-grow: 1;
      width: 50%;

    }

    .astro-telemetry-pane__status__group:not(:last-child) {
      margin-right: 1.25rem;
    }
    
    .astro-telemetry-pane__status__group header {
      display: block;
      
    }
    
    .astro-telemetry-pane__status__header {
      width: 100%;
      flex-shrink: 0;
      margin: 0 0 0 0.5rem;
      
    }
    
    .astro-telemetry-pane__status__group h3 {
      
      flex-shrink: 0;
      margin: 1rem;
      color: var(--fontColor, rgb(255,255,255));
    }
    
    .astro-telemetry-pane__status__group ul {
      padding: 0rem 0rem 0rem 0.5rem;
      margin: 0 0;
      list-style: none;
      color: var(--fontColor, rgb(255,255,255));
      width: 100%;
      border-top: 1px solid var(--telemetryPaneBorderColor);
    }
    
    .astro-telemetry-pane__status__group li:nth-child(1) {
      padding-top: 10px;
    }
    
    .astro-telemetry-pane__status__group li {
      margin-bottom: 1em;
      margin-left: 0.5rem;
      text-transform: capitalize;
      display: flex;
    }
    
    .astro-telemetry-pane__status__group rux-status {
      margin-right: 0.5rem;
    }
    
    .astro-telemetry-pane h1 {
      // margin-left: 1.6rem;
    }
    
    h1,
    h2,
    h3 {
      font-weight: 500;
    }
    
    /* Start Spectrum Analyzer */
    
    svg {
      /* background-color: #1b3044; */
      background-color: var(--modemDetailSectionBackgroundColor, rgb(24, 38, 53));
      
    }
    
    .rux-spectrum-analyzer__bar {
      /* fill: #4586be; */
      fill: var(--spectrumAnalyzerBarFill, rgb(113, 189, 255));
    }
    
    .rux-spectrum-analyzer__bar-tip {
      /* fill: #b2bac0; */
      // fill: rgba(255,255,255,0.5);
      fill: none;
    }
    
    text,
    .rux-spectrum-analyzer__main-chart-label {
      /* fill: #bdc3c9; */
      fill: var(--fontColor, rgba(255,255,255));
    }
    
    .rux-spectrum-analyzer__main-chart-label {
      font-family: var(--fontFamily, "Open Sans");
      font-weight: 300;
      font-size: 20px;
      text-transform: capitalize;
      margin-bottom: 5px;
    }
    
    .rux-spectrum-analyzer__chart-legend {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      fill: var(--fontColor, rgb(255,255,255));
    }
    
    g.rux-spectrum-analyzer__axis-label line {
      stroke: none;
    }
    
    /* .line {
      fill: none;
      stroke: steelblue;
      stroke-width: 2px;
    } */
    
    .grid line,
    .domain {
      /* stroke: #455d6e;
      stroke-opacity: 0.3;
      stroke: red; */

      stroke: var(--spectrumAnalyzerGridStrokeColor, rgb(40, 63, 88));
      shape-rendering: crispEdges;
    }


    
    .tick text {
      font-family: var(--fontFamily, "Open Sans");
      font-weight: 300;
      font-size: 12px;
      color: var(--fontColor, #fff);
      font-weight: 300;
    }
    </style>    
    <section class="astro-telemetry-pane">
      <h1>[[title]]</h1>
      <rux-spectrum-analyzer chart-legend-x="freq" chart-legend-y="pwr" chart-title="signals" height="384" width="920" x-scale-min="920" x-scale-max="2301" x-scale-step="175" y-scale-min="-30" y-scale-max="0" data-source="wss://sockets.astrouxds.com/satellite1" data-source-type="web-socket"></rux-spectrum-analyzer>

      <div class="astro-telemetry-pane__status"> 
        <div class="astro-telemetry-pane__status__group">
          <h3>Power</h3>
          <ul>
            <dom-repeat items="[[power]]">
            <template>
              <li><rux-status status=[[_patchStatus(item.status)]]></rux-status>[[item.label]]</li>
            </template>
          </ul>
        </div>

        <div class="astro-telemetry-pane__status__group">
          <h3>Thermal</h3>
          <ul>
            <dom-repeat items="[[thermal]]">
            <template>
              <li><rux-status status=[[_patchStatus(item.status)]]></rux-status>[[item.label]]</li>
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

  _patchStatus(status) {
    return status === "emergency" ? "critical" : status;
  }
}
customElements.define("astro-telemetry-pane", AstroTelemetryPane);
