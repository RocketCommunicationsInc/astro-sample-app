import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import { RuxStatus } from "/src/astro-components/rux-status/rux-status.js";
// import { RuxSpectrumAnalyzer } from "/src/astro-components/rux-spectrum-analyzer/rux-spectrum-analyzer.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroTelemetry extends PolymerElement {
  static get properties() {
    return {
      title: {
        type: String
      },
      chart: {
        type: Object
      },
      telemetryData: {
        type: Object
      },
      power: {
        type: Object,
        computed: "_getPower(telemetryData)"
      },
      thermal: {
        type: Object,
        computed: "_getThermal(telemetryData)"
      }
    };
  }
  static get template() {
    return html`
    <link rel="stylesheet" href="/src/astro-app/astro-telemetry/astro-telemetry.css">
    <section class="astro-telemetry">
      <h1>[[title]]</h1>
      

      <div class="astro-telemetry__status">
     
        <h2 class="astro-telemetry__status__header">Telemetry</h2>
       
        
        <div class="astro-telemetry__status__group">
          <h3>Power</h3>

        

          <ul>
            <dom-repeat items="[[power]]">
            <template>
              <li><rux-status status=[[item.status]]></rux-status>[[item.label]]</li>
            </template>
          </ul>
        </div>

        <div class="astro-telemetry__status__group">
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

  _getPower(p) {
    return p.power;
  }

  _getThermal(t) {
    return t.thermal;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.telemetryData) return;
    // console.log(this.telemetryData.thermal);
    // console.log(this);
    // console.log(this.telemetryData[0].power);
    // this.power = telemetryData[0].power;
  }

  ready() {
    super.ready();
  }
}
customElements.define("astro-telemetry", AstroTelemetry);
