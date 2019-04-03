/* eslint-disable no-unused-vars */
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/array-selector.js';
import {RuxStatus} from '@astrouxds/rux-status/rux-status.js';
/* eslint-enable no-unused-vars */
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroModemListItem extends PolymerElement {
  static get properties() {
    return {
      modem: {
        type: Object,
        value: false,
      },
      selected: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true,
      },
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
        
        color: var(--textColor);
        
        background-color: var(--modemListItemBackgroundColor);
        
        margin: 0 0 0.625rem 0;
        height: 3.5rem;
        min-height: 2rem;
        position: relative;
      
        
      
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
        background-color: var(--modemListItemAccentColor);
        
      }
      
      :host([compact]) {
        height: 2.35rem;
      }

      :host([selected]) {
        background-color: var(--modemListItemSelectedBackgroundColor);
        color: #fff;
      }

      :host([selected])::before {
        background-color: var(--modemListItemSelectedAccentColor);
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
  _getStatus(val) {
    return val ? 'ok' : 'caution';
  }
}
customElements.define('astro-modem-list-item', AstroModemListItem);
