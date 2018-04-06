import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import { MutableData } from "/node_modules/@polymer/polymer/lib/mixins/mutable-data.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroModems extends MutableData(PolymerElement) {
  static get properties() {
    return {
      title: {
        type: String
      },
      modems: {
        type: Array
      },
      selectedModem: {
        type: Object
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="/src/astro-app/astro-modems/astro-modems.css">
      <astro-modem-list modems={{modems}} selected-modem={{selectedModem}}></astro-modem-list>
      <astro-modem-detail modems={{modems}} selected-modem={{selectedModem}}></astro-modem-detail>
    `;
  }

  constructor() {
    super();

    this.modems = [
      {
        _id: {
          $oid: "570cef10e4b0cbcd095d473b"
        },
        modemId: 1,
        modulatorResource: {
          sliceId: "255.255.255.004",
          resourceId: 92976
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 3900,
        txCoding: "CODING_UNCODED",
        txFreq: 1200,
        txPower: 55,
        txPath: 3,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.003",
          resourceId: 61204
        },
        rxSymbolRate: 0,
        rxFreq: 0,
        rxPower: -10,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 95,
        carrierLock: true,
        codeLock: true,
        allocated: false
      },
      {
        _id: {
          $oid: "570cefbfe4b0cbcd095d47cb"
        },
        modemId: 2,
        modulatorResource: {
          sliceId: "255.255.255.003",
          resourceId: 21279
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 9100,
        txCoding: "CODING_UNCODED",
        txFreq: 900,
        txPower: 73,
        txPath: 1,
        txEnabled: false,
        demodulatorResource: {
          sliceId: "255.255.255.001",
          resourceId: 63645
        },
        rxSymbolRate: 1100,
        rxFreq: 0,
        rxPower: 25,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 57,
        carrierLock: true,
        codeLock: true,
        allocated: false,
        power: false
      },
      {
        _id: {
          $oid: "570cefd5e4b0cbcd095d47cd"
        },
        modemId: 3,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 54,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 500,
        rxFreq: 2250,
        rxPower: -14,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 43,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        allocated: true,
        power: true
      },
      {
        _id: {
          $oid: "570cefece4b0cbcd095d47d2"
        },
        modemId: 4,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 33,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 500,
        rxFreq: 2050,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 89,
        carrierLock: true,
        codeLock: true,
        allocated: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        power: true
      },
      {
        _id: {
          $oid: "570cf002e4b0cbcd095d47da"
        },
        modemId: 5,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 65,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 500,
        rxFreq: 1110,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 0,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        allocated: true,
        power: false
      },
      {
        _id: {
          $oid: "570cf019e4b0cbcd095d47dd"
        },
        modemId: 6,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 10,
        txCoding: 10,
        txFreq: 1500,
        txPower: 25,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 50,
        rxFreq: 1500,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 84,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 50,
        allocated: false,
        power: true
      },
      {
        _id: {
          $oid: "570cf03de4b0cbcd095d47e3"
        },
        modemId: 7,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 10,
        txCoding: 10,
        txFreq: 1500,
        txPower: 60,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 50,
        rxFreq: 1250,
        rxPath: 0,
        txPower: -15,
        rxEnabled: true,
        errorVectorMagnitude: 67,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 50,
        allocated: true,
        power: true
      },
      {
        _id: {
          $oid: "570cf059e4b0cbcd095d47e9"
        },
        modemId: 8,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: "100",
        txCoding: "100",
        txFreq: "1750",
        txPower: 25,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: "100",
        rxFreq: "2450",
        rxPath: 0,
        txPower: 5,
        rxEnabled: true,
        errorVectorMagnitude: 16,
        carrierLock: true,
        codeLock: true,
        power: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "100",
        allocated: false
      },
      {
        _id: {
          $oid: "570cf084e4b0cbcd095d47ee"
        },
        modemId: 9,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 0,
        txCoding: 100,
        txFreq: 1200,
        txPower: 53,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 100,
        rxFreq: 1200,
        rxPath: 0,
        txPower: 25,
        rxEnabled: true,
        errorVectorMagnitude: 11,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "",
        allocated: false,
        power: true
      },
      {
        _id: {
          $oid: "570cf09ee4b0cbcd095d47f1"
        },
        modemId: 10,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 51,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: -5,
        rxEnabled: true,
        errorVectorMagnitude: 39,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        allocated: false,
        power: true
      },
      {
        _id: {
          $oid: "570cf0aee4b0cbcd095d47f3"
        },
        modemId: 11,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 55,
        txPath: 2,
        txEnabled: false,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: 2,
        rxEnabled: true,
        errorVectorMagnitude: 40,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        allocated: false,
        power: true
      },
      {
        _id: {
          $oid: "570cf0bfe4b0cbcd095d47f4"
        },
        modemId: 12,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 0,
        txCoding: 100,
        txFreq: 1200,
        txPower: 34,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 100,
        rxFreq: 1200,
        rxPath: 0,
        txPower: -15,
        rxEnabled: true,
        errorVectorMagnitude: 59,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "",
        allocated: false,
        power: true
      },
      {
        _id: {
          $oid: "570cf0cfe4b0cbcd095d47f8"
        },
        modemId: 13,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: "1",
        txCoding: "1",
        txFreq: "2500",
        txPower: 64,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: "100",
        rxFreq: "950",
        rxPath: 0,
        txPower: -5,
        rxEnabled: false,
        errorVectorMagnitude: 13,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "100",
        allocated: false,
        power: true
      },
      {
        _id: {
          $oid: "570cf0dfe4b0cbcd095d47f9"
        },
        modemId: 14,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 54,
        txPath: 2,
        txEnabled: false,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: 5,
        rxEnabled: true,
        errorVectorMagnitude: 46,
        carrierLock: true,
        codeLock: true,
        allocated: false,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        power: true
      },
      {
        _id: {
          $oid: "570cf0ede4b0cbcd095d47fb"
        },
        modemId: 15,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 0,
        txCoding: 100,
        txFreq: 1200,
        txPower: 21,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 100,
        rxFreq: 1200,
        rxPath: 0,
        txPower: 15,
        rxEnabled: true,
        errorVectorMagnitude: 2,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "",
        allocated: false,
        power: false
      },
      {
        _id: {
          $oid: "570cf0fee4b0cbcd095d47fd"
        },
        modemId: 16,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 54,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: 15,
        rxEnabled: true,
        errorVectorMagnitude: 79,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        allocated: true,
        power: true
      },
      {
        _id: {
          $oid: "570cf10de4b0cbcd095d47fe"
        },
        modemId: 17,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 10,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: 15,
        rxEnabled: true,
        errorVectorMagnitude: 19,
        carrierLock: false,
        codeLock: true,
        allocated: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        power: true
      },
      {
        _id: {
          $oid: "570cf11de4b0cbcd095d47ff"
        },
        modemId: 18,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 13,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: 15,
        rxEnabled: true,
        errorVectorMagnitude: 6,
        carrierLock: true,
        codeLock: true,
        allocated: false,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        power: true
      },
      {
        _id: {
          $oid: "570cf130e4b0cbcd095d4802"
        },
        modemId: 19,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 4900,
        txCoding: "CODING_UNCODED",
        txFreq: 1400,
        txPower: 54,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 0,
        rxFreq: 0,
        rxPower: 10,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 20,
        carrierLock: true,
        codeLock: true,
        allocated: false
      },
      {
        _id: {
          $oid: "570cf150e4b0cbcd095d4805"
        },
        modemId: 20,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 10,
        txCoding: 10,
        txFreq: "10",
        txPower: 55,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: "10",
        rxFreq: "10",
        rxPath: 0,
        txPower: -5,
        rxEnabled: true,
        errorVectorMagnitude: 53,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "10",
        allocated: true,
        power: true
      },
      {
        _id: {
          $oid: "570cf16ee4b0cbcd095d4807"
        },
        modemId: 21,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 0,
        txCoding: 100,
        txFreq: 1200,
        txPower: 55,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 100,
        rxFreq: 1200,
        rxPath: 0,
        txPower: 15,
        rxEnabled: true,
        errorVectorMagnitude: 57,
        carrierLock: true,
        codeLock: true,
        rxModType: "CODING_UNCODED",
        rxCoding: "",
        allocated: true,
        power: true
      },
      {
        _id: {
          $oid: "570cf18ee4b0cbcd095d4809"
        },
        modemId: 22,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 4900,
        txCoding: "CODING_UNCODED",
        txFreq: 1400,
        txPower: 20,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 0,
        rxFreq: 0,
        rxPower: 10,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 47,
        carrierLock: true,
        codeLock: true,
        allocated: true
      },
      {
        _id: {
          $oid: "570cf1a9e4b0cbcd095d480e"
        },
        modemId: 23,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 4900,
        txCoding: "CODING_UNCODED",
        txFreq: 1400,
        txPower: 15,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 0,
        rxFreq: 0,
        rxPower: 10,
        rxPath: 0,
        rxEnabled: true,
        errorVectorMagnitude: 98,
        carrierLock: true,
        codeLock: true,
        allocated: true
      },
      {
        _id: {
          $oid: "570cf1c0e4b0cbcd095d480f"
        },
        modemId: 24,
        modulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 42120
        },
        txModType: "MOD_TYPE_BPSK",
        txSymbolRate: 500,
        txCoding: 500,
        txFreq: 1250,
        txPower: 15,
        txPath: 2,
        txEnabled: true,
        demodulatorResource: {
          sliceId: "255.255.255.002",
          resourceId: 47454
        },
        rxSymbolRate: 500,
        rxFreq: 1250,
        rxPath: 0,
        txPower: 14,
        rxEnabled: true,
        errorVectorMagnitude: 0,
        carrierLock: false,
        codeLock: true,
        allocated: true,
        rxModType: "CODING_UNCODED",
        rxCoding: 500,
        power: true
      }
    ];

    this._fauxModemUpdate = setInterval(() => {
      this._updateModems();
    }, 3000);
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // fake evm update.
  _updateEVM(evm) {
    return Math.random() > 0.5
      ? (evm += Math.floor(Math.random() * 10) - 5)
      : evm;
  }

  _updateDasBlinkenLights() {
    return Math.random() > 0.7 ? false : true;
  }

  _updateModems() {
    this.modems.forEach((modem, index) => {
      this.set(`modems.${index}.carrierLock`, this._updateDasBlinkenLights());
      this.set(`modems.${index}.codeLock`, this._updateDasBlinkenLights());
      this.set(`modems.${index}.codeLock`, this._updateDasBlinkenLights());
      this.set(
        `modems.${index}.errorVectorMagnitude`,
        this._updateEVM(modem.errorVectorMagnitude)
      );
    });
  }
}

customElements.define("astro-modems", AstroModems);
