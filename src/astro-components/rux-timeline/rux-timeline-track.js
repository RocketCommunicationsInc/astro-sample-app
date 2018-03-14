import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxTimelineRegion } from "./rux-timeline-region.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTimelineTrack extends PolymerElement {
  static get properties() {
    return {
      label: {
        type: String
      },
      regions: {
        type: Object
      },
      scale: {
        type: Number,
        observer: "_updateRegionScale"
      },
      duration: {
        type: Number
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-timeline/rux-timeline-track.css">
      <div class="rux-timeline__track">
        <div class="rux-timeline__track__label">[[label]]</div>
        <ol>
          <dom-repeat id="rux-timeline-regions" items=[[regions]]>
            <template>
              <li>
                <rux-timeline-region class="rux-timeline-region"
                  title=[[item.title]]
                  status=[[item.status]]
                  start-time=[[item.startTime]]
                  end-time=[[item.endTime]]
                  left=[[item._left]]
                  width=[[item._width]]>
                </rux-timeline-region>
              </li>
            </template>
          </dom-repeat>
        <ol>
      </div>

      `;
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    let x = this.shadowRoot.querySelectorAll(".rux-timeline__track");

    this._base = x[0];
    this._regionEls = new Array();

    // this._setRegions();
    this._init();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _updateRegionScale() {
    if (!this._regionEls) return;
    var now = new Date();
    var today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0
    );
    this._regionEls.forEach((region, i) => {
      let _regionDuration =
        this.regions[i].endTime.getTime() - this.regions[i].startTime.getTime();
      let _regionWidth =
        _regionDuration * this._base.offsetWidth / this.duration + "px";

      let _regionStart =
        (this.regions[i].startTime.getTime() - today.getTime()) *
        this._base.offsetWidth /
        this.duration;

      region.style.width = _regionWidth;
      region.style.left = _regionStart + "px";
    });
  }

  _init() {
    var now = new Date();
    var today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0
    );

    this.regions.forEach((region, i) => {
      const _duration = region.endTime.getTime() - region.startTime.getTime();
      region._width = _duration * this._base.offsetWidth / this.duration;

      region._left =
        (region.startTime.getTime() - today.getTime()) *
        this._base.offsetWidth /
        this.duration;
    });
  }

  _setRegions() {
    var now = new Date();
    var today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0
    );
    this.regions.forEach((region, i) => {
      let _regionDuration =
        region.endTime.getTime() - region.startTime.getTime();
      let _regionWidth =
        _regionDuration * this._base.offsetWidth / this.duration + "px";

      let _regionStart =
        (region.startTime.getTime() - today.getTime()) *
        this._base.offsetWidth /
        this.duration;

      let g = document.createElement("rux-timeline-region");
      g.classList.add("rux-timeline__track__region");
      g.style.width = _regionWidth;
      g.style.left = _regionStart + "px";
      g.innerHTML = region.label;

      this._regionEls[i] = g;
      this._base.appendChild(g);
    });
  }
}
customElements.define("rux-timeline-track", RuxTimelineTrack);
