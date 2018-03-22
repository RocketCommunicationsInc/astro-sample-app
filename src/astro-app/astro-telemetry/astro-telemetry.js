import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import { AstroTelemetryPane } from "/src/astro-app/astro-telemetry/astro-telemetry-pane.js";
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
      telemetryData: {
        type: Array
      }
    };
  }
  static get template() {
    return html`
		<link rel="stylesheet" href="/src/astro-app/astro-telemetry/astro-telemetry.css">
    <div class="astro-telemetry-panes">
    <dom-repeat items="[[telemetryData]]">
      <template>
        <astro-telemetry-pane
          title=[[item.label]]
          chart=[[item.chart]]
          power=[[item.power]]
          thermal=[[item.thermal]]></astro-telemetry-pane>
      </template>
    </dom-repeat>
		</div>
    `;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
  ready() {
    super.ready();
  }
}
customElements.define("astro-telemetry", AstroTelemetry);
