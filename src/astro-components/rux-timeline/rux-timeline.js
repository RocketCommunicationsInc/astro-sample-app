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
          <div class="x" style$="width: [[_scale]]%;"></div>
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

    this._minScale = 100;
    this._maxScale = 150;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _getLabels() {
    return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
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
