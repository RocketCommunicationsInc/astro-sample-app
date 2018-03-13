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
        observer: "_updateTics"
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
          <rux-button on-click="_catchPlayhead">P</rux-button>
        </header>

        
        
        <section class="rux-timeline__viewport" on-wheel="_scroll">
          <div id="x" class="x">
            <div id="rux-timeline__playhead"></div>
          </div>  
        </section>

        <footer class="rux-timeline__footer"></footer>
      `;
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this._playhead = this.shadowRoot.getElementById("rux-timeline__playhead");
    this._track = this.shadowRoot.getElementById("x");

    this._duration = this.data.duration;
    this._minScale = 100;
    this._maxScale = 500;

    this._tracks = this.data.tracks;
    this._regions = this.data.tracks[0].regions;
    // console.log(this._regions);

    const _timer = setInterval(() => {
      this._updatePlayhead();
    }, 10);

    this._tics = new Array();
    this._setTics();

    this._setRegions();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _catchPlayhead() {
    console.log("catch playhead");

    // if(this._playhead.offsetLeft > 1000) {
    //   this.
    // }
  }

  _setRegions() {
    console.log(this._regions);
    var now = new Date();
    var today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0
    );
    this._regions.forEach((region, i) => {
      let _regionDuration =
        region.endTime.getTime() - region.startTime.getTime();
      let _regionWidth =
        _regionDuration * this._track.offsetWidth / this._duration + "px";

      let _regionStart =
        (region.startTime.getTime() - today.getTime()) *
        this._track.offsetWidth /
        this._duration;
      console.log(`Width is ${_regionWidth} and Start is ${_regionStart}`);

      let g = document.createElement("div");
      g.style.position = "absolute";
      g.style.fontSize = "9px";
      g.style.top = "-10px";
      g.style.width = _regionWidth;
      g.style.height = "20px";
      g.style.backgroundColor = "purple";
      // z.style.overflow = "hidden";
      g.style.left = _regionStart + "px";
      g.innerHTML = region.label;

      this._track.appendChild(g);
    });
  }

  _getLabels() {
    return [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00"
    ];
  }

  _updatePlayhead(timestamp) {
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

    this._playhead.style.left =
      dif * this._track.offsetWidth / this._duration + "px";
  }

  _updateTics() {
    if (!this._tics) return;

    this._scale = Number(this._scale);
    this._track.style.width = this._scale + "%";
    this._tics.forEach((tic, i) => {
      tic.style.left =
        3600000 * i * this._track.offsetWidth / this._duration + "px";
    });
  }

  _setTics() {
    if (!this._track) return;
    let y = this._getLabels();
    let i = 0;

    y.forEach(tic => {
      let z = document.createElement("div");
      z.style.position = "absolute";
      z.style.fontSize = "9px";
      z.style.top = "10px";
      z.style.width = "1px";
      z.style.height = "20px";
      z.style.backgroundColor = "blue";
      // z.style.overflow = "hidden";
      z.style.left =
        3600000 * i * this._track.offsetWidth / this._duration + "px";
      z.innerHTML = y[i];

      this._track.appendChild(z);
      this._tics[i] = z;

      i++;
    });
  }

  _isScaling() {
    // console.log(`_scale is ${this._scale}`);
    // this._updateTics();
  }

  /*
  **
  ** Mostly a dev feature, but maybe useful to end users. Scroll the timeline with the mouse wheel
  **
  */

  _scroll(e) {
    let a = "b";

    if (e.altKey) {
      let _delta = (this._scale += Math.floor(e.deltaY / 10));

      if (_delta < this._minScale) {
        _delta = this._minScale;
      } else if (_delta > this._maxScale) {
        _delta = this._maxScale;
      }

      this._scale = _delta;
    } else {
      e.currentTarget.scrollLeft += Math.floor(e.deltaY);
    }
  }
}
customElements.define("rux-timeline", RuxTimeline);
