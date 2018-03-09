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
        type: Object
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="/src/astro-app/astro-modems/astro-modem-detail.css">

      

      <!-- So these are effectively a vertical tabs //-->
      <ul class="rux-tabs--vertical">
        <li><rux-icon on-click="togglePane" icon="modem-controls:set-power"></rux-icon><span class="label">Set Power</span></li>
      </ul>

      <div class="modem-detail__settings">
        <form>
          <rux-slider
            label="Set Power"
            min=-0
            max=30
            step=1
            input=true
            axis-labels="0, 5, 10, 15, 20, 25, 30"
            val=[[selectedModem.txPower]]><rux-slider>

          <div class="rux-button-group">
            <rux-button>Apply</rux-button>
            <rux-button default>Cancel</rux-button>
          </div>
        </form>
      </div>

     

      <div class="modem-detail__detail" hidden="[[!selectedModem]]">
        
        <h1 id="test">Modem [[selectedModem.modemId]]</h1>
        
        <section class="modem-detail__detail__section">
          <header>
            <h1>Tx</h1>
            <rux-button on-click='do'>Show Notification</rux-button>
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

        <rux-notification
          message="Hello There">
        </rux-notification>
      </div>
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(this.selectedModem);
  }

  do() {
    console.log("do");
    const _pane = this.shadowRoot.querySelectorAll(".modem-detail__detail");
    console.log(this.shadowRoot.querySelectorAll(".modem-detail__detail"));

    _pane[0].classList.toggle("show");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  togglePane() {
    const _pane = this.shadowRoot.querySelectorAll(".modem-detail__detail");
    _pane[0].classList.toggle("open");
  }
}

customElements.define("astro-modem-detail", AstroModemDetail);
