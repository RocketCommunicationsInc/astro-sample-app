import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
/* Rux Components */
import { RuxGlobalStatusBar } from "../astro-components/rux-global-status-bar/rux-global-status-bar.js";
import { RuxSegmentedButton } from "../astro-components/rux-segmented-button/rux-segmented-button.js";
import { RuxComponent } from "../astro-components/rux-component/rux-component.js";
import { RuxProgress } from "../astro-components/rux-progress/rux-progress.js";
import { RuxButton } from "../astro-components/rux-button/rux-button.js";
import { RuxStatus } from "../astro-components/rux-status/rux-status.js";
import { RuxIcon } from "../astro-components/rux-icon/rux-icon.js";
import { RuxTabs } from "../astro-components/rux-tabs/rux-tabs.js";
import { RuxPopUpMenu } from "../astro-components/rux-pop-up-menu/rux-pop-up-menu.js";
import { RuxClock } from "../astro-components/rux-clock/rux-clock.js";
import { RuxSlider } from "../astro-components/rux-slider/rux-slider.js";
import { RuxSpectrumAnalyzer } from "../astro-components/rux-spectrum-analyzer/rux-spectrum-analyzer.js";
import { RuxNotification } from "../astro-components/rux-notification/rux-notification.js";
import { RuxTimeline } from "../astro-components/rux-timeline/rux-timeline.js";

/* Astro App */
import { AstroTelemetry } from "./astro-telemetry/astro-telemetry.js";
import { AstroTelemetryPane } from "./astro-telemetry/astro-telemetry-pane.js";
import { AstroModems } from "./astro-modems/astro-modems.js";
import { AstroModemList } from "./astro-modems/astro-modem-list.js";
import { AstroModemListItem } from "./astro-modems/astro-modem-list-item.js";
import { AstroModemDetail } from "./astro-modems/astro-modem-detail.js";
import { AstroPassPlans } from "./astro-pass-plans/astro-pass-plans.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroApp extends PolymerElement {
  static get template() {
    return `
    <style>
      :host {
        
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        padding: 0 2.625rem;
        min-width: 1620px;
        box-sizing: border-box; 
        overflow: hidden;
        
      }

      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }

      

      .astro-advanced-status-indicators {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
      }

      rux-tab-panels {
        height: calc(100% - 140px);

      }
    </style>
    
    

    <rux-global-status-bar
      appname="Astro"
      version="2.0a">
      
      <rux-tabs>
        <rux-tab id="tab-modems">Modems</rux-tab>
        <rux-tab id="tab-pass-plans">Pass Plans</rux-tab>
        <rux-tab id="tab-satellites">Satellites</rux-tab>
      </rux-tabs>

      <rux-clock></rux-clock>

      <ul class="astro-advanced-status-indicators">
        <dom-repeat id="astroAdvancedStatus" items="{{statusIndicators}}">
          <template>
            <li>
              <rux-status
                status="ok"
                label=[[item.label]]
                icon=[[item.icon]]
                notifications=[[item.notifications]]
                on-click="_showPopUp"></rux-status>
            </li>
          </template>
        </dom-repeat>
      </ul>

      

      <rux-button
        type="large"
        icon="default:caution"
        on-click="goFullScreen">Master Off</rux-button>
    </rux-global-status-bar>
    
    

    <rux-pop-up-menu
    menu-items=[[_popMenuItems]]
    target=[[_popMenuTarget]]></rux-pop-up-menu>
    <rux-tab-panels>
      <rux-tab-panel aria-labeledby="tab-modems">  
        
        <astro-modems
          title="Modems"
          modems={{modems}}>
        </astro-modems>
      </rux-tab-panel>



      <rux-tab-panel aria-labeledby="tab-pass-plans">
        <astro-pass-plans
          title="Pass Plans">
        </astro-pass-plans>
      </rux-tab-panel>



      <rux-tab-panel aria-labeledby="tab-satellites">
        <astro-telemetry
          telemetry-data=[[telemetryDataObj]]>
        </astro-telemetry>
  
      </rux-tab-panel>

    </rux-tab-panels>
    `;
  }

  goFullScreen() {
    if (document.fullScreenEnabled) {
      document.webkitExitFullscreen();
    } else {
      document.documentElement.webkitRequestFullscreen();
    }
  }

  _showPopUp(e) {
    this._popMenuTarget = e.currentTarget;
  }

  constructor() {
    super();
    this.name = "3.0 preview";

    this._popMenuItems = [
      {
        label: "Menu Item 1",
        action: "doSomething"
      },
      {
        label: "Menu Item 2",
        action: "doSomethingElse"
      }
    ];
    // this._popMenuTarget = null;

    this.satellite1 = {
      label: "Satellite 1",
      power: [
        {
          label: "Power 1",
          status: "ok"
        },
        {
          label: "Power 2",
          status: "emergency"
        },
        {
          label: "Power 3",
          status: "error"
        },
        {
          label: "Power 4",
          status: "caution"
        },
        {
          label: "Power 5",
          status: "off"
        },
        {
          label: "Power 6",
          status: "error"
        }
      ],
      thermal: [
        {
          label: "Thermal 1",
          status: "caution"
        },
        {
          label: "Thermal 2",
          status: "error"
        },
        {
          label: "Thermal 3",
          status: "standby"
        },
        {
          label: "Thermal 4",
          status: "standby"
        },
        {
          label: "Thermal 5",
          status: "off"
        },
        {
          label: "Thermal 6",
          status: "error"
        }
      ]
    };
    this.satellite2 = {
      label: "Satellite A",
      power: [
        {
          label: "Power 1",
          status: "off"
        },
        {
          label: "Power 2",
          status: "caution"
        },
        {
          label: "Power 3",
          status: "ok"
        },
        {
          label: "Power 4",
          status: "ok"
        },
        {
          label: "Power 5",
          status: "off"
        },
        {
          label: "Power 6",
          status: "error"
        }
      ],
      thermal: [
        {
          label: "Thermal 1",
          status: "ok"
        },
        {
          label: "Thermal 2",
          status: "ok"
        },
        {
          label: "Thermal 3",
          status: "standby"
        },
        {
          label: "Thermal 4",
          status: "error"
        },
        {
          label: "Thermal 5",
          status: "off"
        },
        {
          label: "Thermal 6",
          status: "error"
        }
      ]
    };
    // emulate a JSON object for telemetry
    this.telemetryDataObj = [this.satellite1, this.satellite2];
    // emulate a JSON object for advanced status
    this.statusIndicators = [
      {
        label: "Power",
        status: "ok",
        icon: "advanced-status-egs:propulsion-power",
        notifications: 1
      },
      {
        label: "Communications",
        status: "ok",
        icon: "advanced-status-egs:netcom",
        notifications: 0
      }
    ];
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: "astro-app"
      },
      telemetryDataObj: {
        type: Object,
        notify: true
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    const ws1 = new WebSocket("ws://dev-wss.rocketcom.com:6001");
    ws1.addEventListener("message", event => {
      // convert data to JSON
      const data = JSON.parse(event.data);

      // assign power and temp data to the correct array index
      this.telemetryDataObj[0].power = data.power;
      this.telemetryDataObj[0].temperature = data.temperature;

      // notify the object it’s been updated and with what
      this.set("telemetryDataObj.0", data);
    });

    // Same as above, but with
    const ws2 = new WebSocket("ws://dev-wss.rocketcom.com:6002");
    ws2.addEventListener("message", event => {
      const data = JSON.parse(event.data);
      this.telemetryDataObj[1].power = data.power;
      this.telemetryDataObj[1].temperature = data.temperature;
      this.set("telemetryDataObj.1", data);
    });
  }
  disconnectedCallback() {
    suer.disconnectedCallback();
  }
  _getSatelliteData(id) {
    return this.telemetryDataObj[id];
  }
  ready() {
    super.ready();
  }

  showNotification() {
    console.log(this.telemetryDataObj);
    this.telemetryDataObj[0].label = "Sat B";
    this.notifyPath("telemetryDataObj");
    this.notifyPath("telemetryData");
    this.notifyPath("telemetry-data-obj");
    this.notifyPath("telemetry-data");
    console.log(this.telemetryDataObj);
  }
}
customElements.define("astro-app", AstroApp);
