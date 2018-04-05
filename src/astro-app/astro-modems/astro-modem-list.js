import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/array-selector.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import "./astro-modem-list-item.js";
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
        notify: true,
        observer: "_listChanged"
      }
    };
  }
  static get template() {
    return html`
        <style>
        :host {
          display: flex;
          flex-direction: column;
          min-width: 450px;
        
          margin-right: 3.125rem;
          margin: 1.75rem;
        
          padding-bottom: 1rem;
          overflow: hidden;
        }
        
        .modem-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 0;
          margin-bottom: 1rem;
        }
        
        .modem-header h2 {
          font-weight: 300;
          font-size: 2rem;
          color: #bdc3c9;
        }
        
        .modem-header__modem-count {
          font-size: 1.25rem;
          color: #bdc3c9;
        }

        .modem-list__header {
          display: flex;
          flex-shrink: 1;
          justify-content: flex-start;
          font-size: 1.375rem;
          color: rgba(255, 255, 255, 0.8);
          background-color: #0f1a24;
          margin: 0 0 0.625rem 0;

          height: 2.3rem;
          font-size: 0.875rem;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .modem-list {
          list-style: none;
          outline: 1px solid red;
        }
        
        
      </style>        

      
        <div class="modem-header">
          <h2>Modems</h2>
          <div class="modem-header__modem-count">[[modemCount]]/[[modemTotal]]</div>
        </div>
        
        <ul class="modem-list modem-list--compact">
          <li class="modem-list__header">
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
            <li on-click="_selectModem">
              <astro-modem-list-item
                modem=[[item]] compact></astro-modem-list-item>
            </li>
          </template>
        </ul>
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this.modemCount = 24;
    this.modemTotal = 24;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _listChanged() {
    console.log("list changed");
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
