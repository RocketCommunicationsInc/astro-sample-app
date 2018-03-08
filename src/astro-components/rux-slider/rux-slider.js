import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxSlider extends PolymerElement {
  static get properties() {
    return {
      min: Number,
      max: Number,
      value: Number,
      step: Number,
      label: String,
      axisLabels: Array,
      disabled: Boolean,
      _name: {
        type: String,
        value: () => {
          return `slider-${Math.random() * 100}`;
        }
      },
      input: {
        type: Boolean,
        value: false
      }
    };
  }
  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-slider/rux-slider.css">

      <div class="rux-slider">
        <div class="rux-slider__label">
          <label>[[label]]</label>
          <input type="number" min=[[min]] max=[[max]] step=[[step]] disabled=[[disabled]] />
        </div>
        <div class="rux-slider__control">
          <input type="range" class="rux-slider__control__range type="range" min=[[min]] max=[[max]] step=[[step]] disabled=[[disabled]] />
          <ol class="rux-slider__control__labels">
            <dom-repeat id="sliderAxisLabels" items=[[axisLabels]]>
            <template>
              <li>[[item]]</li>
            </template>
            </dom-repeat>
          </ol>
        </div>
      </div>`;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  ready() {
    super.ready();
  }
}
customElements.define("rux-slider", RuxSlider);
