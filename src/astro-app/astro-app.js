import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";

/* Rux Components */
import {
  RuxGlobalStatusBar
} from "../astro-components/rux-global-status-bar/rux-global-status-bar.js";
import {
  RuxSegmentedButton
} from "../astro-components/rux-segmented-button/rux-segmented-button.js";
import {
  RuxComponent
} from "../astro-components/rux-component/rux-component.js";
import {
  RuxProgress
} from "../astro-components/rux-progress/rux-progress.js";
import {
  RuxButton
} from "../astro-components/rux-button/rux-button.js";
import {
  RuxStatus
} from "../astro-components/rux-status/rux-status.js";
import {
  RuxIcon
} from "../astro-components/rux-icon/rux-icon.js";
import {
  RuxTabs
} from "../astro-components/rux-tabs/rux-tabs.js";
import {
  RuxPopUpMenu
} from "../astro-components/rux-pop-up-menu/rux-pop-up-menu.js";
import {
  RuxClock
} from "../astro-components/rux-clock/rux-clock.js";

/* Astro App */
import {
  AstroTelemetry
} from "./astro-telemetry/astro-telemetry.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroApp extends PolymerElement {
  static get template() {
    return `
    <style>
      :host {
        display: block;
        /* box-sizing: border-box; */
      }

      .telemetry-tab {
        display: flex;
      }

    </style>
    
    <rux-global-status-bar
      appname="Astro App"
      version="2.0a">
      
      <rux-tabs>
        <rux-tab id="tab-modems">Modems</rux-tab>
        <rux-tab id="tab-pass-plans">Pass Plans</rux-tab>
        <rux-tab id="tab-telemetry">Telemetry</rux-tab>
      </rux-tabs>

      <rux-clock></rux-clock>

      
      <ul class="astro-advanced-status-indicators">
        <dom-repeat id="astroAdvancedStatus" items="{{statusIndicators}}">
          <template>
            <li>
              <rux-status
                status=[[item.status]]
                label=[[item.label]]
                icon=[[item.icon]]
                notifications=[[item.notifications]]></rux-status>
            </li>
          </template>
        </dom-repeat>
      </ul>
      

      <rux-button
        type="icon"
        icon="default:settings"></rux-button>
      

    </rux-global-status-bar>



    <rux-tab-panels>
      <rux-tab-panel aria-labeledby="tab-modems">
        <div class="telemetry-tab">
          <astro-telemetry
            title="Sat 1"
            telemetry-data=[[telemetryDataObj]]></astro-telemetry>
          <astro-telemetry
            title="Sat 2">
            telemetry-data=[[satelliteData2]]></astro-telemetry>
        </div>
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-pass-plans">
        Pass Plans
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-telemetry">
        
      </rux-tab-panel>
    </rux-tab-panels>

      
    `;
  }

  constructor() {
    super();
    this.name = "3.0 preview";

    this.telemetryDataObj = [{
      power: [{
          label: "Pwr 1",
          status: "error"
        },
        {
          label: "Pwr 2",
          status: "error"
        },
        {
          label: "Pwr 3",
          status: "error"
        },
        {
          label: "Pwr 4",
          status: "error"
        },
        {
          label: "Pwr 5",
          status: "error"
        },
        {
          label: "Pwr 6",
          status: "error"
        }
      ]
    }];


    /* this.telemetryDataObj = [{
      satellite1: {
        power: [{
            label: "Pwr 1",
            status: "error"
          },
          {
            label: "Pwr 2",
            status: "error"
          },
          {
            label: "Pwr 3",
            status: "error"
          },
          {
            label: "Pwr 4",
            status: "error"
          },
          {
            label: "Pwr 5",
            status: "error"
          },
          {
            label: "Pwr 6",
            status: "error"
          }
        ]
      }
    }]; */

  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: "astro-app"
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    suer.disconnectedCallback();
  }

  ready() {
    super.ready();
  }
}

customElements.define("astro-app", AstroApp);
