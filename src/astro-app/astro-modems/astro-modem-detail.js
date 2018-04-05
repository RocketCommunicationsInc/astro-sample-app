import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";

/* <div class="modem-detail__modem-settings">
 */

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroModemDetail extends PolymerElement {
  static get properties() {
    return {
      selectedModem: {
        type: Object,
        observer: "_selectedModemChanged"
      },
      selectedModemPower: {
        type: Number,
        observer: "_powerChanged"
      }
    };
  }
  static get template() {
    return html`
      <link rel="stylesheet" href="/src/astro-app/astro-modems/astro-modem-detail.css">

      

      <!-- So these are effectively a vertical tabs //-->
      <ul class="rux-tabs--vertical">
        <li><rux-icon on-click="togglePane" icon="astro-demo:set-power"></rux-icon><span class="label">Set Power</span></li>
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
            <rux-button on-click="_cancelChange">[[closeButtonLabel]]</rux-button>
            <rux-button on-click="_updateModem" default disabled=[[applyButtonDisabled]]>Apply</rux-button>
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
          </header>
          <dl>
            <dt>Frequency</dt>
            <dd>[[selectedModem.rxFreq]]<span class="label">mHz</span></dd>
            <dt>Symbol Rate</dt>
            <dd>[[selectedModem.rxSymbolRate]]<span class="label">samples/sec</span></dd>
          </dl>
        </section>

        
      </div>
    `;
  }
  constructor() {
    super();

    this.closeButtonLabel = "Close";
    this.applyButtonDisabled = true;
  }
  connectedCallback() {
    super.connectedCallback();
    // console.log(this.selectedModem);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _cancelChange(e) {
    this.togglePane();
  }

  _powerChanged(e) {
    if (e != this.selectedModem.txPower) {
      this.closeButtonLabel = "Cancel";
      this.applyButtonDisabled = false;
    }
  }

  _selectedModemChanged(e) {
    this.selectedModemPower = this.selectedModem.txPower;
  }

  _updateModem() {
    this.selectedModem.txPower = this.selectedModemPower;
    this.notifyPath("selectedModem.txPower", this.selectedModem.txPower);
    this.modemUpdatedMessage = `Modem ${
      this.selectedModem.modemId
    }’s txPower has been updated to ${this.selectedModem.txPower}`;

    this.togglePane();

    const _notification = this.shadowRoot.querySelectorAll(
      "rux-notification"
    )[0];
    if (_notification.hasAttribute("opened")) {
      _notification.removeAttribute("opened");
    } else {
      _notification.setAttribute("opened", "");
    }
  }

  togglePane() {
    const _pane = this.shadowRoot.querySelectorAll(".modem-detail__detail");
    _pane[0].classList.toggle("open");
  }
}
customElements.define("astro-modem-detail", AstroModemDetail);
