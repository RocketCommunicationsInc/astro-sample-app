import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import {
  RuxStatus
} from "/src/astro-components/rux-status/rux-status.js"


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

      },
      telemetryData: {
        type: Object
      },
      power: {
        type: Object,
        computed: "_getPower(telemetryData)"
      }
    };
  }
  static get template() {
    return html `
    <link rel="stylesheet" href="/src/astro-app/astro-telemetry/astro-telemetry.css">
    <section class="astro-telemetry">
      <h1>[[title]]</h1>
      <rux-spectrum-analyser></rux-spectrum-analyser>

      <div class="astro-telemetry__status">
        <h2>Telemetry</h2>
        <div class="astro-telemetry__status__power">
          <h3>Power</h3>
          <ul>
            <dom-repeat id="power-telemetry" items="[[power]]">
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

  _getPower(t) {
    console.log(t[0].power);
    return t[0].power;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.telemetryData) return;
    // console.log(this);
    // console.log(this.telemetryData[0].power);
    // this.power = telemetryData[0].power;
  }

  ready() {
    super.ready();
  }
}
customElements.define("astro-telemetry", AstroTelemetry);
