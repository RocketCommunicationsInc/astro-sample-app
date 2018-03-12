import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import { RuxStatus } from "../rux-status/rux-status.js";
import { RuxSlider } from "../rux-slider/rux-slider.js";
import { RuxTimelineTrack } from "./rux-timeline-track.js";
import { RuxTimelineRegion } from "./rux-timeline-region.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTimeline extends PolymerElement {
  static get properties() {
    return {
      label: {
        type: String,
        value: "Timeline"
      },
      data: {
        type: Object
      },
      tracks: {
        type: Array
      },
      playbackControls: {
        type: String,
        value: null
      },
      zoomControl: {
        type: Boolean,
        value: false
      },
      catchPlayheadControl: {
        type: Boolean,
        value: false
      },
      _scale: {
        type: Number,
        value: 100,
        notify: true
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-timeline/rux-timeline.css">
      
        <header class="rux-timeline__header">
          <rux-status status="ok"></rux-status>
          <h1>[[label]]</h1>
          <rux-slider
            min=[[_minScale]]
            max=[[_maxScale]]
            val={{_scale}}></rux-slider>
        </header>

        
        <section class="rux-timeline__viewport" on-wheel="_scroll">
          
          <div id="x" class="x" style$="width: [[_scale]]%;">
            <div id="rux-timeline__playhead"></div>
          </div>
          <ol class="rux-timeline__viewport__labels" style$="width: [[_scale]]%;">
            <dom-repeat id="rux-timeline__viewport__labels" items=[[_getLabels()]]>
              <template>
                <li>[[item]]</li>
              </template>
            </dom-repeat>
          </ol>
        </section>
      
      `;
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this._running = false;
    this._playhead = this.shadowRoot.getElementById("rux-timeline__playhead");
    this._track = this.shadowRoot.getElementById("x");
    this._playheadProgress = 0;

    // console.log("track", this._track);
    this._duration = this.data.duration;
    this._minScale = 100;
    this._maxScale = 10000;

    this._timeIncementLabels;

    const _timer = setInterval(() => {
      this._updatePlayhead();
    }, 10);

    console.log(this._duration);

    let y = this._getLabels();
    let i = 0;
    console.log(y);
    y.forEach(tic => {
      let z = document.createElement("div");
      z.style.position = "absolute";
      z.style.top = "10px";
      z.style.width = "1px";
      z.style.height = "20px";
      z.style.backgroundColor = "blue";
      z.style.overflow = "hidden";
      z.style.left = 3600000 * i * 1011 / 86400000 + "px";
      z.innerHTML = i;

      this._track.appendChild(z);

      i++;
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _getLabels() {
    return [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23"
    ];

    // return [
    //   "00:00",
    //   "01:00",
    //   "02:00",
    //   "03:00",
    //   "04:00",
    //   "05:00",
    //   "06:00",
    //   "07:00",
    //   "08:00",
    //   "09:00",
    //   "10:00",
    //   "11:00",
    //   "12:00",
    //   "13:00",
    //   "14:00",
    //   "15:00",
    //   "16:00",
    //   "17:00",
    //   "18:00",
    //   "19:00",
    //   "20:00",
    //   "21:00",
    //   "22:00",
    //   "23:00"
    // ];
  }

  _updatePlayhead(timestamp) {
    // if(!this._running) this._running = timestamp;
    // const progress = timestamp - this._running;
    // this._playhead.style.left = Math.min('')
    // const delta = (playHead.style.left += 1);
    // console.log(delta);
    // playHead.style.left = delta + "px";
    // console.log(playHead.style.left);

    // get current width of the timeline
    // console.log(this._track.offsetWidth);
    // then figure out how many milliseconds are in it based on the duration
    // console.log(this._track.offsetWidth / this._duration * 10);

    const now = new Date();
    const then = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0
    );
    // time of today, like right now
    const dif = now.getTime() - then.getTime();

    const place = dif / this._duration;
    const loc = this._track.offsetWidth * place;

    // console.log("pps", dif); ((3600000*1011)/86400000)
    //(3600000*1011)/86400000

    // console.log(this._playheadProgress);

    // this._playheadProgress += pixelsPerSecond;
    this._playhead.style.left = 3600000 * 5 * 1011 / 86400000 + "px";
  }
  /*
  **
  ** Mostly a dev feature, but maybe useful to end users. Scroll the timeline with the mouse wheel
  **
  */
  _scroll(e) {
    if (e.altKey) {
      // This is super ugly. Fix it.
      let _delta = (this._scale += Math.floor(e.deltaY / 10));
      if (_delta < this._minScale) {
        this._scale = this._minScale;
      } else if (_delta > this._maxScale) {
        this._scale = this._maxScale;
      } else {
        this._scale = _delta;
      }
    } else {
      e.currentTarget.scrollLeft += Math.floor(e.deltaY);
    }
  }
  _getScale() {
    console.log(this._scale);
    return this._scale * 100 + "%";
  }
}
customElements.define("rux-timeline", RuxTimeline);
