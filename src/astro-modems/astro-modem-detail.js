/* eslint-disable no-unused-vars */
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
/* eslint-enable no-unused-vars */

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroModemDetail extends PolymerElement {
  static get properties() {
    return {
      selectedModem: {
        type: Object,
        notify: true,
        value: false,
        observer: '_selectedModemChanged',
      },
      modems: {
        type: Array,
        notify: true,
      },
      selectedModemPower: {
        type: Number,
        observer: '_powerChanged',
      },
    };
  }
  static get template() {
    return html`
      <style>
      :host {
        position: relative;
        display: flex;
        box-sizing: border-box;
        background-color: var(--paneBackgroundColor, rgb(19, 43, 64));
      }
      
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      
      *[hidden] {
        display: none !important;
      }
      .rux-tabs--vertical {
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        justify-content: flex-start;
      
        list-style: none;
      
        width: 6rem;
        padding: 0;
        margin: 0;

        
      
        background-color: var(--verticalTabBackgroundColor);
      }
      
      .rux-tabs--vertical li {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
      
        width: 100%;
        height: 8.125rem;
      
        text-transform: uppercase;
        text-align: center;
      
        font-size: 0.875rem;
        color: var(--colorSecondary);
      
        // border-bottom: 1px solid rgba(0, 0, 0, 1);
        // border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .rux-tabs--vertical li:first-child {
        border-top: none;
      }

      .rux-tabs--vertical li:last-child {
        box-shadow: 0 1px 0 rgba(255,255,255,0.1);
      }
      
      .rux-tabs--vertical .label {
        max-width: 44px;
        margin: 1em auto 0 auto;
      }
      
      .modem-detail__settings {
        position: absolute;
        width: 415px;
        height: 100%;
        left: 96px;
        background-color: var(--modemDetailSettingsBackgroundColor);
        
      }
      
      .modem-detail__settings form {
        display: flex;
        flex-direction: column;
      
        margin: 5em 2.5rem 0 2.5rem;
      }
      
      .modem-detail__settings .rux-button-group {
        display: flex;
        justify-content: flex-end;
        margin-top: 2rem;
      }
      
      .rux-button-group rux-button {
        margin-left: 5px;
      }
      
      .modem-detail__detail {
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-grow: 1;
        align-content: flex-start;
        padding: 1.25rem 1.25rem;
        background-color: var(--modemDetailBackgroundColor);
        
        z-index: 1;
      
        /* filter: drop-shadow(0 6px 6px rgba(0, 0, 0, 0.75)); */
        /* box-shadow: -6px 0 6px rgba(0, 0, 0, 0.75)); */
      
        box-shadow: -4px 1px 4px rgba(0, 0, 0, 0.13);
        transition: margin-left 0.467s ease-in-out;
      }
      
      .modem-detail__detail.open {
        flex-shrink: 0;
        margin-left: 415px;
      }
      
      .modem-detail__detail h1 {
        font-size: 2.375rem;
        margin: 0 0 0.5rem 0;
        width: 100%;
        font-weight: 300;
        line-height: 1;
      }
      
      .modem-detail__modem-settings {
        width: 25rem;
        width: 0;
        display: none;
      }
      
      .modem-detail__detail__section {
        flex-grow: 1;
        max-width: 22.75rem;
        margin-right: 1.25rem;
      }
      
      .modem-detail__detail__section:last-child {
        margin: 0;
      }
      
      .modem-detail__detail__section header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: var(--modemDetailSectionBackgroundColor);
        margin: 0 0 2px 0;
        // border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      }
      
      .modem-detail__detail__section h1 {
        margin: 0;
        padding: 0;
      }
      
      .modem-detail__detail__section header {
        padding: 0.5rem 1.25rem;
      }
      .modem-detail__detail__section dl {
        padding: 0.5rem 1.25rem;
      }
      
      .modem-detail__detail__section dl {
        background-color: var(--modemDetailSectionBackgroundColor);
      
        margin: 0;
        height: 100%;
      }
      
      .modem-detail__detail__section dd {
        color: var(--colorText);
        font-size: 2.5rem;
        line-height: 1;
        margin: 0 0 1.5rem 0;
        padding: 0;
      }
      
      .modem-detail__detail__section dt,
      .modem-detail__detail__section .label {
        color: var(--colorText);
        font-size: 1.125rem;
        margin: 0;
        padding: 0;
      }
      
      .modem-detail__detail__section dt {
        margin-bottom: 0/5rem;
      }
      
      .modem-detail__detail__section .label {
        margin-left: 0.35rem;
      }
      
      .no-modems {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .no-modems h1 {
        font-weight: 300;
      }
      </style>

      
      <template is="dom-if" if=[[!selectedModem]]>
        <div class="no-modems">
          <h1>No Modem Selected</h1>
        </div>
      </template>


      <template is="dom-if" if=[[selectedModem]]>
      <!-- So these are effectively a vertical tabs //-->
      <ul class="rux-tabs--vertical">
        <li on-click="togglePane">
          <!-- <rux-icon color="rgb(77, 172, 255)" on-click="togglePane" icon="astro-demo:set-power"></rux-icon> //-->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 39" style="width: 48px; height: auto; margin: 0 auto;">
            <g fill="rgb(77, 172, 255)" fill-rule="evenodd">
        <path d="M10 20h5v3h-5zM17 15h5v8h-5zM24 10h5v13h-5zM31 5h5v18h-5zM38 0h5v23h-5zM0 31h16v2H0zM28 31h25v2H28z"/>
              <path d="M22 39a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/>
              <circle cx="22" cy="32" r="2"/>
            </g>
          </svg>
          <span class="label">Set Power</span>
        </li>
      </ul>

      <div class="modem-detail__settings">
        <form>
          <rux-slider
            label="Set Power"
            min=-15
            max=80
            step=1
            input=true
            axis-labels="-15, 80"
            val={{selectedModemPower}}></rux-slider>

          <div class="rux-button-group">
            <rux-button type="outline" on-click="_cancelChange">[[closeButtonLabel]]</rux-button>
            <rux-button on-click="_updateModem" disabled=[[applyButtonDisabled]]>Apply</rux-button>
          </div>
        </form>
      </div>

     

      <div class="modem-detail__detail" hidden="[[!selectedModem]]">
        <rux-notification 
          close-after=10
          message=[[modemUpdatedMessage]]></rux-notification>
        
        
        <h1 id="test">Modem [[selectedModem.modemId]]</h1>
        
        <section class="modem-detail__detail__section">
          <header>
            <h1>Tx</h1>
            <rux-status status="[[getStatus(selectedModem.txEnabled)]]"</rux-status>
          </header>
          <dl>
            <dt>Power</dt>
            <dd>[[selectedModem.txPower]]<span class="label">dBm</span></dd>
            <dt>Frequency</dt>
            <dd>[[selectedModem.errorVectorMagnitude]]<span class="label">mHz</span></dd>
            <dt>Symbol Rate</dt>
            <dd>[[selectedModem.txSymbolRate]]<span class="label">samples/sec</span></dd>
          </dl>
        </section>
        
        <section class="modem-detail__detail__section">
          <header>
            <h1>Rx</h1>
            <rux-status status="[[getStatus(selectedModem.rxEnabled)]]"</rux-status>
          </header>
          <dl>
            <dt>Frequency</dt>
            <dd>[[selectedModem.rxFreq]]<span class="label">mHz</span></dd>
            <dt>Symbol Rate</dt>
            <dd>[[selectedModem.rxSymbolRate]]<span class="label">samples/sec</span></dd>
          </dl>
        </section>

        
      </div>
      </template>
    `;
  }
  constructor() {
    super();

    this.closeButtonLabel = 'Close';
    this.applyButtonDisabled = true;
  }
  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  getStatus(ofModem) {
    return ofModem ? 'ok' : 'caution';
  }

  _cancelChange() {
    this.togglePane();
  }

  _selectedModemChanged() {
    this.selectedModemPower = this.selectedModem.txPower;
    this.closeButtonLabel = 'Close';
    this.applyButtonDisabled = true;
  }

  _powerChanged(e) {
    if (e != this.selectedModem.txPower) {
      this.closeButtonLabel = 'Cancel';
      this.applyButtonDisabled = false;
    }
  }

  _updateModem() {
    this.set('selectedModem.txPower', this.selectedModemPower);
    this.set('modems', this.modems.slice());

    this.modemUpdatedMessage = `Modem ${this.selectedModem.modemId}: Tx Power has been updated to ${
      this.selectedModem.txPower
    }dBm`;

    this.togglePane();

    const _notification = this.shadowRoot.querySelectorAll('rux-notification')[0];
    if (_notification.hasAttribute('opened')) {
      _notification.removeAttribute('opened');
    } else {
      _notification.setAttribute('opened', '');
    }
  }

  togglePane() {
    const _pane = this.shadowRoot.querySelectorAll('.modem-detail__detail');
    _pane[0].classList.toggle('open');
  }
}
customElements.define('astro-modem-detail', AstroModemDetail);
