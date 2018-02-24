import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
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
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";

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


      .astro-advanced-status-indicators {
        display: flex;
        
        padding: 0;
        margin: 0;

        list-style: none;
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
        Modems
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-pass-plans">
        Pass Plans
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-telemetry">
        Telemetry
      </rux-tab-panel>
    </rux-tab-panels>

    <rux-button
      icon="default:caution">Caution</rux-button>

    <rux-icon
      icon="default:settings"></rux-icon>

    <rux-component></rux-component>

    
    <rux-status
      status="error"></rux-status>
    
    <rux-status
      id="netcom"
      on-click="_showStatus"
      status="error"
      label="Netcom"
      sublabel="45Khz"
      icon="advanced-status:thermal"
      notifications=1000001></rux-status>
  
      
    `;
  }

  constructor() {
    super();
    this.name = "3.0 preview";

    console.log(RuxSegmentedButton);

    this.timeSelector = {
      buttons: [{ label: "Hour" }, { label: "Day" }, { label: "Week" }]
    };

    this.statusIndicators = [
      {
        status: "ok",
        label: "Power",
        icon: "advanced-status:propulsion-power"
      },
      {
        status: "error",
        label: "Satellite 2",
        sublabel: "Sublabel",
        icon: "advanced-status:thermal",
        notifications: 10
      }
    ];
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: "astro-app"
      }
    };
  }

  _stringIt(obj) {
    return JSON.stringify(obj);
  }

  _showStatus(e) {
    console.log("showing status", e.target.getAttribute("id"));
    // this.root.getElementById('pop-menu').attribute('target',e.target)
    // console.log('pop-up-menu', this.root.getElementById('pop-menu'));

    this.root
      .getElementById("pop-menu")
      .setAttribute("target", e.target.getAttribute("id"));
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
