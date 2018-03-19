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
import { RuxNotification } from "../astro-components/rux-notification/rux-notification.js";
import { RuxTimeline } from "../astro-components/rux-timeline/rux-timeline.js";

/* Astro App */
import { AstroTelemetry } from "./astro-telemetry/astro-telemetry.js";
import { AstroTelemetryPane } from "./astro-telemetry/astro-telemetry-pane.js";
import { AstroModems } from "./astro-modems/astro-modems.js";
import { AstroModemList } from "./astro-modems/astro-modem-list.js";
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
      }
      

    </style>
    
    

    <rux-global-status-bar
      appname="Astro App"
      version="2.0a">
      
      <rux-tabs>
        <rux-tab id="tab-pass-plans">Pass Plans</rux-tab>
        <rux-tab id="tab-modems">Modems</rux-tab>
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
                notifications=[[item.notifications]]
                on-click="_showPopUp"></rux-status>
            </li>
          </template>
        </dom-repeat>
      </ul>

      

      <rux-button
        type="large"
        icon="default:caution">Master Off</rux-button>
    </rux-global-status-bar>



    <rux-tab-panels>
      <rux-tab-panel aria-labeledby="tab-modems">  
        
        <astro-modems
          title="Modems"
          selected-modem={{astroModem}}
          modems=[[modems]]>

          <astro-modem-list modems={{modems}} selected-modem={{astroModem}}></astro-modem-list>
          <astro-modem-detail selected-modem={{astroModem}} slot-name="detail"></astro-modem-detail>
          
        </astro-modems>
      </rux-tab-panel>



      <rux-tab-panel aria-labeledby="tab-pass-plans">
        <astro-pass-plans
          title="Pass Plans">
        </astro-pass-plans>
      </rux-tab-panel>



      <rux-tab-panel aria-labeledby="tab-telemetry">
        <astro-telemetry
          telemetry-data=[[telemetryDataObj]]>
        </astro-telemetry>
  
      </rux-tab-panel>

    </rux-tab-panels>

    <rux-pop-up-menu
    menu-items=[[_popMenuItems]]
    target=[[_popMenuTarget]]></rux-pop-up-menu>
    `;
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

    this.chart1 = {};
    this.chart2 = {};

    this.astroModem = {
      _id: { $oid: "570cef10e4b0cbcd095d473b" },
      modemId: 1,
      modulatorResource: { sliceId: "255.255.255.004", resourceId: 92976 },
      txModType: "MOD_TYPE_BPSK",
      txSymbolRate: 3900,
      txCoding: "CODING_UNCODED",
      txFreq: 1200,
      txPower: 55,
      txPath: 3,
      txEnabled: true,
      demodulatorResource: { sliceId: "255.255.255.003", resourceId: 61204 },
      rxSymbolRate: 0,
      rxFreq: 0,
      rxPower: -10,
      rxPath: 0,
      rxEnabled: true,
      errorVectorMagnitude: 95,
      carrierLock: true,
      codeLock: true,
      allocated: false
    };

    this.modems = [
      {
        _id: { $oid: "570cef10e4b0cbcd095d473b" },
        modemId: 1,
        modulatorResource: { sliceId: "255.255.255.004", resourceId: 92976 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 3900,
        txCoding: "CODING_UNCODED",
        txFreq: 1200,
        txPower: 55,
        txPath: 3,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.003", resourceId: 61204 },
        rxSymbolRate: 0,
        rxFreq: 0,
        rxPower: -10,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 95,
        carrierLock: true,
        codeLock: true,
        allocated: false
      },
      {
        _id: { $oid: "570cefbfe4b0cbcd095d47cb" },
        modemId: 2,
        modulatorResource: { sliceId: "255.255.255.003", resourceId: 21279 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 9100,
        txCoding: "CODING_UNCODED",
        txFreq: 900,
        txPower: 73,
        txPath: 1,
        txEnabled: false,
        demodulatorResource: { sliceId: "255.255.255.001", resourceId: 63645 },
        rxSymbolRate: 1100,
        rxFreq: 0,
        rxPower: 25,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 57,
        carrierLock: true,
        codeLock: true,
        allocated: false,
        power: false
      },
      {
        _id: { $oid: "570cefd5e4b0cbcd095d47cd" },
        modemId: 3,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 54,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 500,
        rxFreq: 2250,
        rxPower: -14,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 43,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        allocated: true,
        power: true
      },
      {
        _id: { $oid: "570cefece4b0cbcd095d47d2" },
        modemId: 4,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 33,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 500,
        rxFreq: 2050,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 89,
        carrierLock: true,
        codeLock: true,
        allocated: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        power: true
      },
      {
        _id: { $oid: "570cf002e4b0cbcd095d47da" },
        modemId: 5,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 65,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 500,
        rxFreq: 1110,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 0,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        allocated: true,
        power: false
      },
      {
        _id: { $oid: "570cf019e4b0cbcd095d47dd" },
        modemId: 6,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 10,
        txCoding: 10,
        txFreq: 1500,
        txPower: 25,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 50,
        rxFreq: 1500,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 84,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 50,
        allocated: false,
        power: true
      },
      {
        _id: { $oid: "570cf03de4b0cbcd095d47e3" },
        modemId: 7,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 10,
        txCoding: 10,
        txFreq: 1500,
        txPower: 60,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 50,
        rxFreq: 1250,
        rxPath: 0,
        txPower: -15,
        rxEnabled: true,
        errorVectorMagnitude: 67,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 50,
        allocated: true,
        power: true
      },
      {
        _id: { $oid: "570cf059e4b0cbcd095d47e9" },
        modemId: 8,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: "100",
        txCoding: "100",
        txFreq: "1750",
        txPower: 25,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: "100",
        rxFreq: "2450",
        rxPath: 0,
        txPower: 5,
        rxEnabled: true,
        errorVectorMagnitude: 16,
        carrierLock: true,
        codeLock: true,
        power: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "100",
        allocated: false
      },
      {
        _id: { $oid: "570cf084e4b0cbcd095d47ee" },
        modemId: 9,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 0,
        txCoding: 100,
        txFreq: 1200,
        txPower: 53,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 100,
        rxFreq: 1200,
        rxPath: 0,
        txPower: 25,
        rxEnabled: true,
        errorVectorMagnitude: 11,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "",
        allocated: false,
        power: true
      },
      {
        _id: { $oid: "570cf09ee4b0cbcd095d47f1" },
        modemId: 10,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 51,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: -5,
        rxEnabled: true,
        errorVectorMagnitude: 39,
        carrierLock: true,
        codeLock: false,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        allocated: false,
        power: true
      },
      {
        _id: { $oid: "570cf0aee4b0cbcd095d47f3" },
        modemId: 11,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 55,
        txPath: 2,
        txEnabled: false,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: 2,
        rxEnabled: true,
        errorVectorMagnitude: 40,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        allocated: false,
        power: true
      },
      {
        _id: { $oid: "570cf0bfe4b0cbcd095d47f4" },
        modemId: 12,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 0,
        txCoding: 100,
        txFreq: 1200,
        txPower: 34,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 100,
        rxFreq: 1200,
        rxPath: 0,
        txPower: -15,
        rxEnabled: true,
        errorVectorMagnitude: 59,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "",
        allocated: false,
        power: true
      },
      {
        _id: { $oid: "570cf0cfe4b0cbcd095d47f8" },
        modemId: 13,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: "1",
        txCoding: "1",
        txFreq: "2500",
        txPower: 64,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: "100",
        rxFreq: "950",
        rxPath: 0,
        txPower: -5,
        rxEnabled: false,
        errorVectorMagnitude: 13,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "100",
        allocated: false,
        power: true
      },
      {
        _id: { $oid: "570cf0dfe4b0cbcd095d47f9" },
        modemId: 14,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 54,
        txPath: 2,
        txEnabled: false,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: 5,
        rxEnabled: true,
        errorVectorMagnitude: 46,
        carrierLock: true,
        codeLock: false,
        allocated: false,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        power: true
      },
      {
        _id: { $oid: "570cf0ede4b0cbcd095d47fb" },
        modemId: 15,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 0,
        txCoding: 100,
        txFreq: 1200,
        txPower: 21,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 100,
        rxFreq: 1200,
        rxPath: 0,
        txPower: 15,
        rxEnabled: true,
        errorVectorMagnitude: 2,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "",
        allocated: false,
        power: false
      },
      {
        _id: { $oid: "570cf0fee4b0cbcd095d47fd" },
        modemId: 16,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 54,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: 15,
        rxEnabled: true,
        errorVectorMagnitude: 79,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        allocated: true,
        power: true
      },
      {
        _id: { $oid: "570cf10de4b0cbcd095d47fe" },
        modemId: 17,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 10,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: 15,
        rxEnabled: true,
        errorVectorMagnitude: 19,
        carrierLock: false,
        codeLock: true,
        allocated: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        power: true
      },
      {
        _id: { $oid: "570cf11de4b0cbcd095d47ff" },
        modemId: 18,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 13,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: 15,
        rxEnabled: true,
        errorVectorMagnitude: 6,
        carrierLock: true,
        codeLock: true,
        allocated: false,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        power: true
      },
      {
        _id: { $oid: "570cf130e4b0cbcd095d4802" },
        modemId: 19,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 4900,
        txCoding: "CODING_UNCODED",
        txFreq: 1400,
        txPower: 54,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 0,
        rxFreq: 0,
        rxPower: 10,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 20,
        carrierLock: true,
        codeLock: true,
        allocated: false
      },
      {
        _id: { $oid: "570cf150e4b0cbcd095d4805" },
        modemId: 20,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 10,
        txCoding: 10,
        txFreq: "10",
        txPower: 55,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: "10",
        rxFreq: "10",
        rxPath: 0,
        txPower: -5,
        rxEnabled: true,
        errorVectorMagnitude: 53,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "10",
        allocated: true,
        power: true
      },
      {
        _id: { $oid: "570cf16ee4b0cbcd095d4807" },
        modemId: 21,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 0,
        txCoding: 100,
        txFreq: 1200,
        txPower: 55,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 100,
        rxFreq: 1200,
        rxPath: 0,
        txPower: 15,
        rxEnabled: true,
        errorVectorMagnitude: 57,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "",
        allocated: true,
        power: true
      },
      {
        _id: { $oid: "570cf18ee4b0cbcd095d4809" },
        modemId: 22,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 4900,
        txCoding: "CODING_UNCODED",
        txFreq: 1400,
        txPower: 20,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 0,
        rxFreq: 0,
        rxPower: 10,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 47,
        carrierLock: true,
        codeLock: false,
        allocated: true
      },
      {
        _id: { $oid: "570cf1a9e4b0cbcd095d480e" },
        modemId: 23,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 4900,
        txCoding: "CODING_UNCODED",
        txFreq: 1400,
        txPower: 15,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 0,
        rxFreq: 0,
        rxPower: 10,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 98,
        carrierLock: true,
        codeLock: true,
        allocated: true
      },
      {
        _id: { $oid: "570cf1c0e4b0cbcd095d480f" },
        modemId: 24,
        modulatorResource: { sliceId: "255.255.255.002", resourceId: 42120 },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 15,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: { sliceId: "255.255.255.002", resourceId: 47454 },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: 14,
        rxEnabled: true,
        errorVectorMagnitude: 0,
        carrierLock: false,
        codeLock: true,
        allocated: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        power: true
      }
    ];

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
      label: "Satellite 2",
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
      sat2: {
        type: Object,
        computed: "_getSatelliteData(0)"
      },
      sat1: {
        type: Object,
        computed: "_getSatelliteData(1)"
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
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
}

customElements.define("astro-app", AstroApp);
