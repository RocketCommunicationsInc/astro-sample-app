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
      val: {
        type: Number,
        notify: true
      },
      step: Number,
      label: String,
      axisLabels: String,
      disabled: Boolean,
      _axisLabels: {
        type: Array,
        value: "_getAxisValues(axisLabels)"
      },
      _name: {
        type: String,
        value: () => {
          return `slider-${Math.floor(Math.random() * 1000)}`;
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
          <input type="number" on-input="_updateValue" min=[[min]] max=[[max]] step=[[step]] value={{val}} />
        </div>
        <div class="rux-slider__control">
          <input type="range" on-input="_updateValue" class="rux-slider__control__range type="range" min=[[min]] max=[[max]] step=[[step]] value={{val}} disabled=[[disabled]] />
          <ol class="rux-slider__control__labels" hidden=[[!_axisLabels]]>
            <dom-repeat id="sliderAxisLabels" items=[[_axisLabels]]>
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
    console.log(this);
    console.log("axis labels", this.axisLabels);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  _updateValue(e) {
    console.log(e.target.value);
    this.val = e.target.value;
  }
  _getAxisValues(values) {
    console.log("a", values);
    return values.split(",");
  }
}
customElements.define("rux-slider", RuxSlider);
