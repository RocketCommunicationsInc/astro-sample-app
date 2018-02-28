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
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="/src/astro-app/astro-modems/astro-modem-list.css">


      <div class="modem-list">
      <ul class="modem-list__header">
        <li class='modem-list-id'></li>
        <li class='modem-list-tx-power'>Tx</li>
        <li class='modem-list-rx-power'>Rx</li>
        <li class='modem-list-carrier'>Carrier</li>
        <li class='modem-list-code'>Code</li>
        <li class='modem-list-power'>PWR</li>
        <li class='modem-list-evm'>EVM</li>
      </ul>
      <ul class="modem-list__list">
        <template is="dom-repeat" id="modem-list" items=[[modems]]>
          <li class="modem-list__list__list-item" on-click="_selectModem">
            <ul>
              <li>[[item.modemId]]</li>
              <li><rux-status status=[[_getStatus(item,'tx')]]></rux-status></li>
              <li><rux-status status=[[_getStatus(item,'rx')]]></rux-status></li>
              <li><rux-status status=[[_getStatus(item,'carrier')]]></rux-status></li>
              <li><rux-status status=[[_getStatus(item,'code')]]></rux-status></li>
              <li>[[_getModemType(item.txModType)]]</li>
              <li>[[item.errorVectorMagnitude]]dB</li>
            </ul>
          </li>
        </template>
      </ul>
      </div>     
    `;
  }

  _selectModem(e) {
    console.log(e);
    console.log(e.model);
    console.log(e.model.item);
    console.log(e.model.item.selected);

    e.model.item.selected = true;
  }

  _getModemType(raw) {
    if (!raw) return "----";

    let _raw = raw.split("_");
    return _raw[_raw.length - 1];
  }

  _getStatus(val, type) {
    let _status = null;
    console.log(val);

    // if power is off return off to everything?
    if (val.power) return "off";

    switch (type) {
      case "tx":
        _status = val.txPower <= 55 && val.txPower >= 37 ? "ok" : "error";
        break;
      case "rx":
        _status = val.rxPower <= 15 && val.rxPower >= -15 ? "ok" : "error";
        break;
      case "carrier":
        _status = val.carrierLock ? "ok" : "error";
        break;
      case "code":
        _status = val.codeLock ? "ok" : "error";
        break;
      default:
        _status = "off";
        break;
    }
    return _status;
  }

  constructor() {
    super();
    console.log("astro modem list");
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
