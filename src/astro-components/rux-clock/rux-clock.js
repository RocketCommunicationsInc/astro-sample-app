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
        value: false
      },
      los: {
        type: String,
        value: false
      },
      timezone: {
        type: String,
        value: "UTC"
      },
      timezoneLabel: {
        type: Boolean,
        value: true
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
      <div class="rux-date-group">
        <div class="rux-date-control" hidden="[[!aos]]">
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

    this._today = new Date();
    this._oneDay = 1000 * 60 * 60 * 24;
    this._year = new Date(this._today.getFullYear(), 0, 0);
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
  }

  _getDayOfYear() {
    const _dayOfYear = Math.floor((this._today - this._year) / this._oneDay)
      .toString()
      .padStart(3, "000");

    return _dayOfYear;
  }

  _updateTime() {
    const _currentTime = new Date();

    /* format the current time using toLocaleString
       Requires locale e.g., "us-en" would format U.S. English
       options to force 24 hour clock, timezone support and 
       forcing the timezone tag (maybe allow that to be settable)
    */
    this.currentTime = _currentTime.toLocaleTimeString("us-en", {
      hour12: false,
      timeZone: this.timezone,
      timeZoneName: "short"
    });
  }
}
customElements.define("rux-clock", RuxClock);
