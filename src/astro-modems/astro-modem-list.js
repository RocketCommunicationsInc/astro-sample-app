/* eslint-disable no-unused-vars */
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {MutableData} from '@polymer/polymer/lib/mixins/mutable-data.js';
import '@polymer/polymer/lib/elements/array-selector.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import './astro-modem-list-item.js';
import {RuxStatus} from '@astrouxds/rux-status/rux-status.js';
/* eslint-enable no-unused-vars */
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
        observer: '_modemsChanged',
      },
      selectedModem: {
        type: Object,
        notify: true,
      },
    };
  }
  static get template() {
    return html`
      <style>
        :host {
          // min-width: 450px;
          // margin: 0 1.75rem 0 0.75rem;
          // padding: 1rem;

          box-sizing: border-box;

          height: auto;
          // overflow: scroll;
          background-color: var(--paneBackgroundColor, rgb(19, 43, 64));

          scrollbar-face-color: rgb(58, 129, 191);
          scrollbar-face-color: var(--scrollBarThumbBackgroundColor, rgb(58, 129, 191));
          scrollbar-track-color: rgb(32, 50, 70);
          scrollbar-track-color: var(--scrollBarTrackCornerBackgroundColor, rgb(32, 50, 70));
        }

        ::-webkit-scrollbar {
          width: 18px;
          height: 18px;
          background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background-color: rgb(46, 103, 153);
          background-color: var(--scrollBarThumbBackgroundColor, rgb(46, 103, 153));
          border-radius: 10px;
          border: 3px solid transparent;
          background-clip: padding-box;
        }
        /* visually "centers" because the dark edge of the shadow gives the illusion this is offset */
        ::-webkit-scrollbar-thumb:vertical {
          border-left-width: 4px;
        }

        ::-webkit-scrollbar-thumb:horizontal {
          border-top-width: 4px;
        }

        ::-webkit-scrollbar-thumb:active,
        ::-webkit-scrollbar-thumb:hover {
          background-color: rgb(58, 129, 191);
          background-color: var(--scrollBarThumbBackgroundHoverColor, rgb(58, 129, 191));
        }

        ::-webkit-scrollbar-track,
        ::-webkit-scrollbar-corner {
          background-color: rgb(32, 50, 70);
          background-color: var(--scrollBarTrackCornerBackgroundColor, rgb(32, 50, 70));
        }
        ::-webkit-scrollbar-track:vertical {
          -webkit-box-shadow: inset 2px 0 4px rgba(0, 0, 0, 0.15);
        }
        ::-webkit-scrollbar-track:horizontal {
          -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
        }
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        .modem-header {
          display: flex;
          flex-wrap: wrap;
          padding: 1rem 1rem 0 1rem;
          margin: 0;
          justify-content: space-between;
          align-items: baseline;

          background-color: var(--paneBackgroundColor);
        }

        .modem-header h2 {
          margin: 0;
          font-weight: 300;
          font-size: 2.375rem;
          color: var(--fontColor, rgb(255, 255, 255));
        }

        .modem-header__modem-count {
          font-size: 1.25rem;
        }

        .modem-header ul {
          width: 100%;
        }

        .modem-list,
        .modem-list ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .modem-list {
          height: 92%;
          overflow-y: scroll;
          padding-right: 0.5rem;
          margin: 0 0.5rem;
        }

        .modem-list__header {
          display: flex;
          font-size: 0.875rem;
          top: 0px;
          height: 2rem;

          z-index: 100;
          margin: 0 0 0.625rem 0;

          position: -webkit-sticky;
          position: sticky;
          top: 0;
        }

        .modem-list__header ul:before {
          content: '';
          width: 6px;
          display: block;
          position: absolute;
          top: 0;
          background-color: red;
        }

        .modem-list__header ul {
          display: flex;
          flex-grow: 1;

          padding: 0;
          margin: 0 0 0 6px;
          background-color: var(--modemListItemBackgroundColor);
        }

        .modem-list__header li {
          display: flex;
          padding: 0;
          justify-content: center;
          align-items: center;
          width: 14%;
        }

        .modem-list__header .modem-list__reading {
          justify-content: flex-end;
          text-align: right;
          /* margin-right: 1rem; */
        }
      </style>

      <div class="modem-header">
        <h2 on-click="test">Modems</h2>
        <div class="modem-header__modem-count low-contrast">[[modems.length]]/[[modems.length]]</div>
      </div>

      <ul class="modem-list">
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
        <template is="dom-repeat" id="modemList" items="[[modems]]">
          <li>
            <astro-modem-list-item modem="[[item]]" on-click="_selectModem" compact></astro-modem-list-item>
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

  _modemsChanged() {
    if (!this.selectedModem) return;
    this.notifyPath(`modems.${this.selectedModem.index}.txPower`, this.selectedModem.txPower);
  }

  _selectModem(e) {
    const modem = this.$.modemList.itemForElement(e.target);
    modem.index = this.$.modemList.indexForElement(e.target);

    this.$.selector.select(modem);
    this.set('selectedModem', modem);

    this._reset();

    e.currentTarget.setAttribute('selected', '');
  }

  _reset() {
    const _modems = this.shadowRoot.querySelectorAll(['astro-modem-list-item']);
    _modems.forEach((modem) => {
      modem.removeAttribute('selected');
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
    if (val.power) return 'off';
    switch (type) {
      case 'tx':
        _status = val.txPower <= 55 && val.txPower >= 37 ? 'ok' : 'caution';
        break;
      case 'rx':
        _status = val.rxPower <= 15 && val.rxPower >= -15 ? 'ok' : 'caution';
        break;
      case 'carrier':
        _status = val.carrierLock ? 'ok' : 'caution';
        break;
      case 'code':
        _status = val.codeLock ? 'ok' : 'caution';
        break;
      default:
        _status = 'off';
        break;
    }
    return _status;
  }
}
customElements.define('astro-modem-list', AstroModemList);
