import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
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
        type: Array,
        observer: "_changed"
      }
    };
  }
  static get template() {
    return html`
    <link rel="stylesheet" href="/src/astro-app/astro-telemetry/astro-telemetry.css">
    <div class="astro-telemetry-panes">
    <template is="dom-repeat" items="[[telemetryData]]">
      <astro-telemetry-pane
        title=[[item.satelliteName]]
        chart=[[item.chart]]
        power=[[item.power]]
        thermal=[[item.temperature]]></astro-telemetry-pane>
    </template>
    
    </div>
    `;
  }
  constructor() {
    super();

    // const ws = new WebSocket("ws://dev-wss.rocketcom.com:6001");
    // ws.addEventListener("message", event => {
    //   const data = JSON.parse(event.data);

    //   console.log(this.telemetryData[0].power);

    //   this.telemetryData[0].power = data.power;
    //   this.notifyPath("telemetryData.0.power");
    // });
  }

  _changed() {
    // console.log("changed");
  }
  connectedCallback() {
    super.connectedCallback();

    // console.log("title", this.title);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
}
customElements.define("astro-telemetry", AstroTelemetry);
