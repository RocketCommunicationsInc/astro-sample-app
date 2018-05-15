import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { MutableData } from "@polymer/polymer/lib/mixins/mutable-data.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import { RuxStatus } from "/src/astro-components/rux-status/rux-status.js";
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
    <link rel="stylesheet" href="/src/astro-app/astro-telemetry/astro-telemetry-pane.css">
    <section class="astro-telemetry-pane">
      <h1>[[title]]</h1>
      <rux-spectrum-analyzer chart-legend-x="freq" chart-legend-y="pwr" chart-title="signals" height="384" width="900" x-scale-min="900" x-scale-max="2301" x-scale-step="175" y-scale-min="-30" y-scale-max="0"></rux-spectrum-analyzer>

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
