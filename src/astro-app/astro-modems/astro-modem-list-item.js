import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/array-selector.js";
import { RuxStatus } from "/src/astro-components/rux-status/rux-status.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroModemListItem extends PolymerElement {
  static get properties() {
    return {
      modem: {
        type: Object
      }
    };
  }
  static get template() {
    return html`

			<link rel="stylesheet" href="/src/astro-app/astro-modems/astro-modem-list.css">
			<style>
				:host {
					display: flex;
					flex-shrink: 1;
					justify-content: flex-start;
					font-size: 1.375rem;
					color: rgba(255, 255, 255, 0.8);
					background-color: #0f1a24;
					/* background-color: blue; */
					margin: 0 0 0.625rem 0;
					height: 3.5rem;
					min-height: 2rem;
					position: relative;
				
					box-shadow: 0 1px 0 #000;
				
					cursor: pointer;
				}

				:host:before {
					content: "";
					width: 6px;
					display: block;
					position: absolute;
					top: 0;
					height: 100%;
					background-color: rgba(216, 216, 216, 0.1);
				}

				:host ul {
					list-style: none;
					border: 1px solid orange;
					padding: 0;
					margin: 0;
					
				}
			</style>
      

			<ul>
				<li>[[modem.modemId]]</li>
				
				<!--
				<li>[[modem.modemId]]</li>
				<li><rux-status status=[[_getStatus(modem,'tx')]]></rux-status></li>
				<li><rux-status status=[[_getStatus(modem,'rx')]]></rux-status></li>
				<li><rux-status status=[[_getStatus(modem,'carrier')]]></rux-status></li>
				<li><rux-status status=[[_getStatus(modem,'code')]]></rux-status></li>
				<li class="modem-list__reading">[[modem.txPower]]</li>
				<li class="modem-list__reading">[[modem.errorVectorMagnitude]]</li>

				//-->
			</ul>
			
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("modem", this.modem.modemId);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
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
customElements.define("astro-modem-list-item", AstroModemListItem);
