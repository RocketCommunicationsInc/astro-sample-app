import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import { MutableData } from "/node_modules/@polymer/polymer/lib/mixins/mutable-data.js";
import "/node_modules/@polymer/polymer/lib/elements/array-selector.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import "./astro-modem-list-item.js";
import { RuxStatus } from "/src/astro-components/rux-status/rux-status.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroModemList extends MutableData(PolymerElement) {
  static get properties() {
    return {
      modems: {
        type: Array,
        notify: true,
        observer: "_modemsChanged"
      },
      selectedModem: {
        type: Object,
        notify: true
      }
    };
  }
  static get template() {
    return html`
        <style>
          :host {
            min-width: 450px;
            margin: 0.75rem 3.75rem 0.75rem 0.75rem;
          }
          
          .modem-header {
            display: flex;
            padding: 0;
            margin: 1rem 0 0.5rem 0;
            justify-content: space-between;
            align-items: baseline;
            

          }
          
          .modem-header h2 {
            margin: 0;
            font-weight: 300;
            font-size: 2rem;
            color: #bdc3c9;
          }
          
          .modem-header__modem-count {
            font-size: 1.25rem;
            color: #bdc3c9;
          }

          .modem-list,
          .modem-list ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .modem-list__header {
            
            font-size: 0.875rem;
            position: sticky;
            top: 0;
            z-index: 100;

            background-color: red;
            
          }

          .modem-list__header:before {
            content: "";
            width: 6px;
            display: block;
            position: absolute;
            top: 0;
            
            height: 100%;
            background-color: rgba(216, 216, 216, 1);
          }

          .modem-list__header ul {
            flex-grow: 1;
            padding: 0;
            margin: 0;
            outline: 1px solid green;
          
            display: flex;
          }
  
          .modem-list__header li {
            padding: 0;
          
            display: flex;
            justify-content: center;
            align-items: center;
            width: 14%;
            
          }
  
          .modem-list__header .modem-list__reading {
            justify-content: flex-end;
            text-align: right;
            margin-right: 1rem;
          }
        
        </style>        

      
        <div class="modem-header">
          <h2 on-click="test">Modems</h2>
          <div class="modem-header__modem-count">[[modems.length]]/[[modems.length]]</div>
        </div>
        
        <ul class="modem-list">
          <li class="modem-list__header">
            <ul>
              <li>1</li>
              <li>Tx</li>
              <li>Rx</li>
              <li>Carrier</li>
              <li>Code</li>
              <li class="modem-list__reading">PWR</li>
              <li class="modem-list__reading">EVM</li>
            </ul>
          </li>

          <template is="dom-repeat" id="modemList" items=[[modems]]>
            <li>
              <astro-modem-list-item
                modem=[[item]]
                on-click="_selectModem"
                compact></astro-modem-list-item>
            </li>
          </template>
        </ul>
        <array-selector id="selector" items="{{modems}}" selected="{{selected}}"></array-selector>
    `;
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

  _modemsChanged(e) {
    if (!this.selectedModem) return;
    this.notifyPath(
      `modems.${this.selectedModem.index}.txPower`,
      this.selectedModem.txPower
    );
  }

  _selectModem(e) {
    let modem = this.$.modemList.itemForElement(e.target);

    // major short cut time. Getting the index of the selected modem
    // in the modems array and assigning that to the selected modem
    // object, so the modem list can update, because for the life of
    // me I cannot figure out how to update dom-repeat of an array of
    // objects
    modem.index = this.$.modemList.indexForElement(e.target);

    this.$.selector.select(modem);
    this.selectedModem = modem;

    this.notifyPath("selectedModem");

    this._reset();
    e.currentTarget.setAttribute("selected", "");
  }

  _reset() {
    const _modems = this.shadowRoot.querySelectorAll(["astro-modem-list-item"]);
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
