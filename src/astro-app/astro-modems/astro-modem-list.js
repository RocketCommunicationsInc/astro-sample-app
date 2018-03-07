import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/array-selector.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import { RuxStatus } from "/src/astro-components/rux-status/rux-status.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroModemList extends PolymerElement {
  static get properties() {
    return {
      modems: {
        type: Array
      },
      selected: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="/src/astro-app/astro-modems/astro-modem-list.css">

      <!-- <div class="modem-list"> //-->

        <ul class="modem-list">
          <li class="modem-list__list-item modem-list__header">
            <ul>
              <li></li>
              <li>Tx</li>
              <li>Rx</li>
              <li>Carrier</li>
              <li>Code</li>
              <li class="modem-list__reading">PWR</li>
              <li class="modem-list__reading">EVM</li>
            </ul>
          </li>
          <template is="dom-repeat" id="modem-list" items=[[modems]]>
            <li class="modem-list__list-item" on-click="_selectModem">
              <ul>
                <li>[[item.modemId]]</li>
                <li><rux-status status=[[_getStatus(item,'tx')]]></rux-status></li>
                <li><rux-status status=[[_getStatus(item,'rx')]]></rux-status></li>
                <li><rux-status status=[[_getStatus(item,'carrier')]]></rux-status></li>
                <li><rux-status status=[[_getStatus(item,'code')]]></rux-status></li>
                <li class="modem-list__reading">[[_getModemType(item.txModType)]]</li>
                <li class="modem-list__reading">[[item.errorVectorMagnitude]]dB</li>
              </ul>
            </li>
          </template>
        </ul>

        
      <!-- </div> //-->
    `;
  }

  _selectModem(e) {
    console.log(e);
    console.log(e.model);
    console.log(e.model.item);

    e.model.item.selected = true;
    console.log(this.shadowRoot);
    console.log(this.shadowRoot.querySelectorAll("[li]"));
    this._modems = Array.from(this.querySelectorAll(".modem-list__list-item"));
    const selectedModem = this._modems.find(modem => modem.selected);

    console.log("selectedModem", selectedModem);
    console.log(this._modems);
    console.log(e.model.item.selected);
  }

  _getModemType(raw) {
    if (!raw) return "----";

    let _raw = raw.split("_");
    return _raw[_raw.length - 1];
  }

  /*
  **
  ** Measure data passed in against operation paramaters and respond with
  ** either an "ok" or "caution" status
  **
  */
  _getStatus(val, type) {
    let _status = null;

    // if power is off return off to everything?
    if (val.power) return "off";

    switch (type) {
      case "tx":
        _status = val.txPower <= 55 && val.txPower >= 37 ? "ok" : "caution";
        break;
      case "rx":
        _status = val.rxPower <= 15 && val.rxPower >= -15 ? "ok" : "caution";
        break;
      case "carrier":
        _status = val.carrierLock ? "ok" : "caution";
        break;
      case "code":
        _status = val.codeLock ? "ok" : "caution";
        break;
      default:
        _status = "off";
        break;
    }
    return _status;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }
}

customElements.define("astro-modem-list", AstroModemList);
