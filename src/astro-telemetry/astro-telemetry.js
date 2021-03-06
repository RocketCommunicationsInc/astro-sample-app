/* eslint-disable no-unused-vars */
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import {AstroTelemetryPane} from './astro-telemetry-pane.js';
/* eslint-enable no-unused-vars */
/**
 * @polymer
 * @extends HTMLElement
 */

export class AstroTelemetry extends PolymerElement {
  static get properties() {
    return {
      title: {
        type: String,
      },
      telemetryData: {
        type: Array,
        observer: '_changed',
      },
    };
  }
  static get template() {
    return html`
      <style>
        :host {
          box-sizing: border-box;
          height: 100%;
        }

        *,
        *:after,
        *:before {
          box-sizing: inherit;
        }

        .astro-telemetry-panes {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
        }

        astro-telemetry-pane {
          margin-right: 1.25rem;
        }
      </style>

      <div class="astro-telemetry-panes">
        <template is="dom-repeat" items="[[telemetryData]]">
          <astro-telemetry-pane
            title="[[item.satelliteName]]"
            chart="[[item.chart]]"
            power="[[item.power]]"
            thermal="[[item.temperature]]"
          ></astro-telemetry-pane>
        </template>
      </div>
    `;
  }
  constructor() {
    super();

    /* const ws = new WebSocket("wss://satellite-1.astrouxds.com");
    ws.addEventListener("message", event => {
      const data = JSON.parse(event.data);

      console.log(this.telemetryData[0].thermal);

      this.telemetryData[0].power = data.power;
      this.notifyPath("telemetryData.0.power");
    }); */
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
customElements.define('astro-telemetry', AstroTelemetry);
