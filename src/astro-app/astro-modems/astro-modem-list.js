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
      selectedModem: {
        type: Object,
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
                <li class="modem-list__reading">[[item.txPower]]</li>
                <li class="modem-list__reading">[[item.errorVectorMagnitude]]dB</li>
              </ul>
            </li>
          </template>
        </ul>

        
      <!-- </div> //-->
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener("click", this._onClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.removeEventListener("click", this._onClick);
  }

  _selectModem(e) {
    this._reset();

    e.currentTarget.setAttribute("selected", "");
    this.selectedModem = e.model.item;
    this.notifyPath("slectedModem.selected");
  }

  _reset() {
    const _modems = this.shadowRoot.querySelectorAll(
      "li.modem-list__list-item"
    );
    _modems.forEach(modem => {
      modem.removeAttribute("selected");
    });
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
}

customElements.define("astro-modem-list", AstroModemList);
