import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxStatus } from "../astro-components/rux-status/rux-status.js";
import { RuxIcon } from "../astro-components/rux-icon/rux-icon.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroApp extends PolymerElement {
  static get template() {
    return `
    <style>
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
      }

      ul li {
        margin 0 1rem;
      }
    </style>

    <div class="section">
      <h1>Astro Status</h1>
      <ul>
        <li><rux-status status="emergency"></rux-status></li>
        <li><rux-status status="caution"></rux-status></li>
        <li><rux-status status="error"></rux-status></li>
        <li><rux-status status="ok"></rux-status></li>
        <li><rux-status status="standby"></rux-status></li>
        <li><rux-status status="off"></rux-status></li>
      </ul>
    </div>


    <section class="section">
      <h1>Astro Advanced Status</h1>
      <ul>
        <li>
          <rux-status
            id="netcom"
            on-click="_showStatus"
            status="emergency"
            label="Netcom"
            sublabel="45Khz"
            icon="advanced-status:netcom"
            notifications=1></rux-status>
        </li>
        <li>
          <rux-status
            id="thermal"
            on-click="_showStatus"
            status="caution"
            label="Thermal"
            sublabel="45Khz"
            icon="advanced-status:thermal"
            notifications=1234></rux-status>
        </li>
        <li>
          <rux-status
            id="propulsion"
            on-click="_showStatus"
            status="error"
            label="Propulsion"
            sublabel="45Khz"
            icon="advanced-status:propulsion-power"
            notifications=456782></rux-status>
        </li>
        <li>
          <rux-status
            id="netcom2"
            on-click="_showStatus"
            status="ok"
            label="Satelite 1"
            sublabel="45Khz"
            icon="advanced-status:netcom"
            notifications="12000001"></rux-status>
        </li>
        <li>
          <rux-status
            id="thermal2"
            on-click="_showStatus"
            status="standby"
            label="Satelite 2"
            sublabel="45Khz"
            icon="advanced-status:thermal"
            notifications="12,400,000,000"></rux-status>
        </li>
        <li>
          <rux-status
            id="propulsion2"
            on-click="_showStatus"
            status="off"
            label="Satelite 3"
            sublabel="45Khz"
            icon="advanced-status:propulsion-power"
            notifications="12340981234098213412341234098"></rux-status>
        </li>
      </ul>



    </section>
    <section>
      <h1>Object Based Status</h1>
        <ul>
        <dom-repeat id="advancedStatusIcons" items="{{ advancedStatus }}">
        <template>
          <li>
            <rux-status
              status="[[item.status]]"
              label="[[item.label]]"
              sublabel="[[item.sublabel]]"
              icon="[[item.icon]]"
              notifications="[[item.notifications]]">
            </rux-status>

          </li>
        </template>
        </dom-repeat>
        </ul>
      </section>
    `;
  }

  constructor() {
    super();

    this.timeSelector = {
      buttons: [{ label: "Hour" }, { label: "Day" }, { label: "Week" }]
    };

    this.advancedStatus = [
      {
        status: "off",
        label: "Satellite 1",
        sublabel: "Sublabel",
        icon: "advanced-status:propulsion-power",
        notifications: "13"
      },
      {
        status: "error",
        label: "Satellite 2",
        sublabel: "Sublabel",
        icon: "advanced-status:thermal"
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
