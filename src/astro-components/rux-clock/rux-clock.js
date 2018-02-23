import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxClock extends PolymerElement {
  static get properties() {
    return {
      dayOfYear: {
        type: String,
        computed: "_getDayOfYear()"
      },
      currentTime: {
        type: String
      },
      aos: {
        type: String,
        value: "08:29:15"
      },
      los: {
        type: String,
        value: "08:53:12"
      },
      timezone: {
        type: String,
        value: "UTC"
      }
    };
  }
  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-clock/rux-clock.css">

      <div id="rux-clock">
      <div class="rux-date-group">
        <div class="rux-date-control rux-left">
          <label for="rux-day-of-year">Date</label>
          <input name="rux-day-of-year" id="rux-day-of-year" type="text" size="3" value=[[dayOfYear]]> 
        </div>
        <div class="rux-date-control rux-right">
          <label for="rux-time">Time</label>
          <input name="rux-time" id="rux-time" type="text" size="12" value=[[currentTime]]> 
        </div>
      </div>
      <div class="rux-date-group" hidden="[[!aos]]">
        <div class="rux-date-control">
          <label for="rux-aos">AOS</label>
          <input name="rux-aos" id="rux-aos" type="text" size="8" value=[[aos]]> 
        </div>
        <div class="rux-date-control" hidden="[[!los]]">
          <label for="rux-los">LOS</label>
          <input name="rux-los" id="rux-los" type="text" size="8" value=[[los]]> 
        </div>
      </div>
    </div>`;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();

    let _timer = setInterval(() => {
      this._updateTime();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    _timer = null;
  }

  ready() {
    super.ready();

    // show a time immediately
    this._updateTime();
  }

  _getDayOfYear() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    let dayOfYear = Math.floor(diff / oneDay);
    let formattedDayOfYear = null;

    if (dayOfYear < 100) {
      formattedDayOfYear = "0" + dayOfYear;
    } else if (dayOfYear < 10) {
      formattedDayOfYear = "00" + dayOfYear;
    } else {
      formattedDayOfYear = dayOfYear;
    }
    this.dayOfYear = formattedDayOfYear;
    return formattedDayOfYear;
  }

  _updateTime() {
    const _currentTime = new Date();
    this.currentTime = _currentTime.toLocaleTimeString("us-en", {
      hour12: false,
      timeZone: this.timezone,
      timeZoneName: "short"
    });
  }
}
customElements.define("rux-clock", RuxClock);
