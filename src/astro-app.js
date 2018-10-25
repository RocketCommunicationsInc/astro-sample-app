import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
/* Rux Components */

import { RuxButton } from "@astrouxds/rux-button/rux-button.js";
import { RuxClock } from "@astrouxds/rux-clock/rux-clock.js";
import { RuxGlobalStatusBar } from "@astrouxds/rux-global-status-bar/rux-global-status-bar.js";
import { RuxIcon } from "@astrouxds/rux-icon/rux-icon.js";
import { RuxNotification } from "@astrouxds/rux-notification/rux-notification.js";
import { RuxModal } from "@astrouxds/rux-modal/rux-modal.js";
import { RuxPopUpMenu } from "@astrouxds/rux-pop-up-menu/rux-pop-up-menu.js";
import { RuxPushButton } from "@astrouxds/rux-push-button/rux-push-button.js";
import { RuxProgress } from "@astrouxds/rux-progress/rux-progress.js";
import { RuxSegmentedButton } from "@astrouxds/rux-segmented-button/rux-segmented-button.js";
import { RuxSlider } from "@astrouxds/rux-slider/rux-slider.js";
// import { RuxSpectrumAnalyzer } from "@astrouxds/rux-spectrum-analyzer/rux-spectrum-analyzer.js";
import { RuxStatus } from "@astrouxds/rux-status/rux-status.js";
import { RuxTabs } from "@astrouxds/rux-tabs/rux-tabs.js";
import { RuxTimeline } from "@astrouxds/rux-timeline/rux-timeline.js";
import { RuxToggle } from "@astrouxds/rux-toggle/rux-toggle.js";
import { RuxTree } from "@astrouxds/rux-tree/rux-tree.js";

/* Astro App */
import { AstroTelemetry } from "./astro-telemetry/astro-telemetry.js";
import { AstroTelemetryPane } from "./astro-telemetry/astro-telemetry-pane.js";
import { AstroModems } from "./astro-modems/astro-modems.js";
import { AstroModemList } from "./astro-modems/astro-modem-list.js";
import { AstroModemListItem } from "./astro-modems/astro-modem-list-item.js";
import { AstroModemDetail } from "./astro-modems/astro-modem-detail.js";
import { AstroPassPlans } from "./astro-pass-plans/astro-pass-plans.js";
import { AstroElements } from "./astro-elements/astro-elements.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroApp extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet" href="/public/css/astro.css">
    <style>
      :host {
        
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        margin: 0 auto;
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
        
        margin: 0 5rem;
        display: flex;
        flex-grow: 1;
        justify-content: center;
        


        
        height: 5.5rem;
      }

      .astro-advanced-status-indicators li {
        margin: 0 0.5rem;
      }

      .astro-advanced-status-indicators li:nth-last-child(2)  {
        margin-right: 0;
        margin-left: auto;
      }

      rux-global-status-bar {
        padding: 0 2.625rem;
        height: 110px;
        margin-bottom: 1.3125rem
      }

      rux-tab-panels {
        height: calc(100vh - 200px);
        margin: 0 2.625rem;
        
      }

      .theme-switcher {
        
        margin: 0 2.725rem 0.5rem;
        

        display: flex;
        justify-content: flex-end;

      }

      .theme-switcher * {
        margin-left: 0.5rem;
      }   
      
      rux-global-status-bar > *:not(:last-child) {
        margin: 0 3rem;
      }

      
    </style>
    
    

    <rux-global-status-bar
      appname="Astro App"
      version="2.0a"
      theme="dark">
      
      <rux-tabs main>
        <rux-tab id="tab-modems">Modems</rux-tab>
        <rux-tab id="tab-pass-plans">Pass Plans</rux-tab>
        <rux-tab id="tab-satellites">Satellites</rux-tab>
      </rux-tabs>

      <rux-clock class="dark-theme"></rux-clock>

      <ul class="astro-advanced-status-indicators">
        <dom-repeat id="astroAdvancedStatus" items="{{statusIndicators}}">
          <template>
            <li>
              <rux-status
                status=[[item.status]]
                label=[[item.label]]
                sublabel="sub label"
                icon=[[item.icon]]
                notifications=[[item.notifications]]
                on-click="_showPopUp"></rux-status>
            </li>
            
          </template>
        </dom-repeat>
        <li>
          <rux-status
            label="Notifications"
            icon="default:notifications"
            notifications=5
            active></rux-status>
        </li>
        <li>
            <rux-status
              label="Settings"
              icon="default:settings"></rux-status>
          </li>
        </li>
      </ul>



      

      

      <rux-button
        type="large"
        icon="default:caution"
        on-click="goFullScreen">Master Off</rux-button>
    </rux-global-status-bar>
    
    

    <rux-pop-up-menu
    menu-items=[[_popMenuItems]]
    target=[[_popMenuTarget]]></rux-pop-up-menu>

    <div class="theme-switcher">
    
    <div id="toggle1">Light Mode</div>
    <rux-toggle aria-labeledby="toggle1" on-click="_setTheme"></rux-toggle>

</div>

    <rux-tab-panels
      main
      transparent>


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
        status: "caution",
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

    // const ws1 = new WebSocket("wss://satellite-1.astrouxds.com");
    // ws1.addEventListener("message", event => {
    //   // convert data to JSON
    //   const data = JSON.parse(event.data);

    //   // assign power and temp data to the correct array index
    //   this.telemetryDataObj[0].power = data.power;
    //   this.telemetryDataObj[0].temperature = data.temperature;

    //   // notify the object it’s been updated and with what
    //   this.set("telemetryDataObj.0", data);
    // });

    // // Same as above, but with
    // const ws2 = new WebSocket("wss://satellite-2.astrouxds.com");
    // ws2.addEventListener("message", event => {
    //   const data = JSON.parse(event.data);
    //   this.telemetryDataObj[1].power = data.power;
    //   this.telemetryDataObj[1].temperature = data.temperature;
    //   this.set("telemetryDataObj.1", data);
    // });
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

  _setTheme(e) {
    console.log("set theme", e.currentTarget.checked);

    if (e.currentTarget.checked) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }

    console.log(document.body);
  }

  showNotification() {
    this.telemetryDataObj[0].label = "Sat B";
    this.notifyPath("telemetryDataObj");
    this.notifyPath("telemetryData");
    this.notifyPath("telemetry-data-obj");
    this.notifyPath("telemetry-data");
  }
}
customElements.define("astro-app", AstroApp);
