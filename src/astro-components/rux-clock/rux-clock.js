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
        observer: "_getDayOfYear"
      },
      currentTime: {
        type: String,
        observer: "_updateTime"
      },
      aos: {
        type: String,
        value: "08:29:15"
      },
      los: {
        type: String,
        value: "08:53:12"
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
          <input name="rux-day-of-year" id="rux-day-of-year" type="text" size="3" value=[[dayOfYear]]> </div>
        <div class="rux-date-control rux-right">
          <label for="rux-time">Time</label>
          <input name="rux-time" id="rux-time" type="text" size="12" value=[[currentTime]]> </div>
      </div>
      <div class="rux-date-group">
        <div class="rux-date-control">
          <label for="rux-aos">AOS</label>
          <input name="rux-aos" id="rux-aos" type="text" size="8" value=[[aos]]> </div>
        <div class="rux-date-control">
          <label for="rux-los">LOS</label>
          <input name="rux-los" id="rux-los" type="text" size="8" value=[[los]]> </div>
      </div>
    </div>`;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    // function updateTime() {
    //   let currentTime = new Date();
    //   let hours = currentTime.getUTCHours();
    //   let minutes = currentTime.getMinutes();
    //   let seconds = currentTime.getSeconds();
    //   if (hours < 10) {
    //     hours = "0" + hours;
    //   }
    //   if (minutes < 10) {
    //     minutes = "0" + minutes;
    //   }
    //   if (seconds < 10) {
    //     seconds = "0" + seconds;
    //   }
    //   let formatted = hours + ":" + minutes + ":" + seconds + " UTC";
    //   return formatted;
    // }
    // setInterval(updateTime, 1000);
    // $("#rux-aos").val("08:29:15");
    // $("#rux-los").val("08:53:12");
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  ready() {
    super.ready();
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
    return formattedDayOfYear;
  }
  _updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getUTCHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    let formatted = hours + ":" + minutes + ":" + seconds + " UTC";
    return formatted;
  }
  _updateAos() {
    return "08:29:15";
  }
  _updateLos() {
    return "08:53:12";
  }
}
customElements.define("rux-clock", RuxClock);
