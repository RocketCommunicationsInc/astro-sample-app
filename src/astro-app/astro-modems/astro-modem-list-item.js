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
        type: Object,
        value: false
      },
      selected: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      }
    };
  }
  static get template() {
    return html`

			
			<style>
				:host {
					display: flex;
					flex-shrink: 1;
					justify-content: flex-start;
					font-size: 1.375rem;
					color: rgba(255, 255, 255, 0.8);
					background-color: #0f1a24;
					margin: 0 0 0.625rem 0;
					height: 3.5rem;
					min-height: 2rem;
					position: relative;
				
					box-shadow: 0 1px 0 #000;
				
          cursor: pointer;
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        :host::before {
					content: "";
					width: 6px;
					display: block;
					position: absolute;
					top: 0;
					height: 100%;
					background-color: rgba(216, 216, 216, 0.1);
				}
        
        :host([compact]) {
          height: 2.35rem;
        }

        :host([selected]) {
          background-color: #004368;
          box-shadow: 0 1px 0 #000;
          color: #fff;
        }

        :host([selected])::before {
          background-color: #0080f4;
        }

				ul {
          display: flex;
          flex-grow: 1;
          padding: 0;
          margin: 0 0 0 0.5rem;
        }

        li {
          padding: 0;
        
          display: flex;
          justify-content: center;
          align-items: center;
          width: 14%;
          
        }

        .modem-list__reading {
          justify-content: flex-end;
          text-align: right;
          /* margin-right: 1rem; */
        }
        
        
			</style>
      
        
			<ul>
				<li>[[modem.modemId]]</li>
				<li><rux-status status=[[_getStatus(modem.txEnabled,'tx')]]></rux-status></li>
				<li><rux-status status=[[_getStatus(modem.rxEnabled,'rx')]]></rux-status></li>
				<li><rux-status status=[[_getStatus(modem.carrierLock,'carrier')]]></rux-status></li>
				<li><rux-status status=[[_getStatus(modem.codeLock,'code')]]></rux-status></li>
				<li class="modem-list__reading">[[modem.txPower]]</li>
				<li class="modem-list__reading">[[modem.errorVectorMagnitude]]</li>
			</ul>
			
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

  /*
   **
   ** Measure data passed in against operation paramaters and respond with
   ** either an "ok" or "caution" status
   **
   */
  _getStatus(val, type) {
    return val ? "ok" : "caution";
  }
}
customElements.define("astro-modem-list-item", AstroModemListItem);
