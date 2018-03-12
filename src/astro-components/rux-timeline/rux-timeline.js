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
        value: 1
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-timeline/rux-timeline.css">
      
        <header class="rux-timeline__header">
          <rux-status status="ok"></rux-status>
          <h1>[[label]]</h1>
          <rux-slider></rux-slider>
        </header>
        <section class="rux-timeline__viewport">
          <ul class="rux-timeline__viewport__ruler">
            
          </ul>
        </section>
      
      `;
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(this.data);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}
customElements.define("rux-timeline", RuxTimeline);
