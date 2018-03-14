import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxTimelineRegion } from "./rux-timeline-region.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";

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
        observer: "_setRegions"
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
        
          <template is="dom-repeat" id="regionsElements" items={{regions}} mutable-data>
            
              <li>
                <rux-timeline-region class="rux-timeline-region"
                  title=[[item.label]]
                  status=[[item.status]]
                  start-time=[[item.startTime]]
                  end-time=[[item.endTime]]
                  left=[[item.left]]
                  width=[[item.width]]>
                </rux-timeline-region>
              </li>
            </template>
          
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

    this._setRegions();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _setRegions() {
    if (!this._base) return;

    var now = new Date();
    var today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0
    );

    /* var self = this;
    for (let i = 0; i < this.regions.length; i++) {
      const _regionDuration =
        self.regions[i].endTime.getTime() - self.regions[i].startTime.getTime();
      self.regions[i].width =
        _regionDuration * this._base.offsetWidth / this.duration;

      self.regions[i].left =
        (self.regions[i].startTime.getTime() - today.getTime()) *
        this._base.offsetWidth /
        this.duration;
    } */

    this.regions.forEach((region, i) => {
      const _regionDuration =
        region.endTime.getTime() - region.startTime.getTime();
      region.width = _regionDuration * this._base.offsetWidth / this.duration;

      region.label = new Date().getSeconds();

      region.left =
        (region.startTime.getTime() - today.getTime()) *
        this._base.offsetWidth /
        this.duration;

      this.regions[i].left = region.left;
      this.regions[i].width = region.width;
      this.notifyPath("regions.0.left");
      this.notifyPath("regions.1.left");
      this.notifyPath("regions.2.left");
      this.notifyPath("regions.3.left");
      this.notifyPath("regions.4.left");
    });
  }
}
customElements.define("rux-timeline-track", RuxTimelineTrack);
