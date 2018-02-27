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
      hideTimezone: {
        type: Boolean,
        value: false
      },
      hideDate: {
        type: Boolean,
        value: false
      },
      timeOptions: {
        type: Object,
        computed: "_setTimeOptions(hideTimezone)"
      }
    };
  }
  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-clock/rux-clock.css">
      
      <div class="rux-clock">
        <div class="rux-clock__segment rux-clock__day-of-the-year" hidden="[[hideDate]]">
          <div class="rux-clock__segment__value" aria-labeledby="rux-clock__day-of-year-label">[[dayOfYear]]</div>
          <div class="rux-clock__segment__label" id="rux-clock__day-of-year-label">Date</div>
        </div>
        <div class="rux-clock__segment rux-clock__time">
          <div class="rux-clock__segment__value" aria-labeledby="rux-clock__time-label">[[currentTime]]</div>
          <div class="rux-clock__segment__label" id="rux-clock__time-label">Time</div>
        </div>
        <div class="rux-clock__segment rux-clock__aos" hidden="[[!aos]]">
          <div class="rux-clock__segment__value" aria-labeledby="rux-clock__time-label">[[aos]]</div>
          <div class="rux-clock__segment__label" id="rux-clock__time-label">AOS</div>
        </div>
        <div class="rux-clock__segment rux-clock__los" hidden="[[!los]]">
          <div class="rux-clock__segment__value" aria-labeledby="rux-clock__time-label">[[los]]</div>
          <div class="rux-clock__segment__label" id="rux-clock__time-label">LOS</div>
        </div>
      </div>
      `;
  }
  constructor() {
    super();

    this._today = new Date();
    this._oneDay = 1000 * 60 * 60 * 24;
    this._year = new Date(this._today.getFullYear(), 0, 0);
  }

  connectedCallback() {
    super.connectedCallback();

    const _timer = setInterval(() => {
      this._updateTime();
    }, 1000);

    // show time immediately
    this._updateTime();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }

  /*
  **
  ** Set the options for toLocalTimeString. Essentially
  ** only needed to show/hide the time zone string.
  **
  */
  _setTimeOptions(hideTimezone) {
    let _timeOptions = {
      hour12: false,
      timeZone: this.timezone
    };

    // explicitly optin to hide the timzone label
    if (!hideTimezone) {
      _timeOptions.timeZoneName = "short";
    }

    return _timeOptions;
  }

  _getDayOfYear() {
    // May need to polyfill or find an alternate option for .padStart IE11 doesn’t support
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
    this.currentTime = _currentTime.toLocaleTimeString(
      "us-en",
      this.timeOptions
    );
  }
}
customElements.define("rux-clock", RuxClock);
