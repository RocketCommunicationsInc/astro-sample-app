import { Element } from '/node_modules/@polymer/polymer/polymer-element.js';
import { html } from '../../../@polymer/polymer/polymer.js';
class RuxProgress extends Element {
				
				static get is() { return 'rux-progress'; }
				static get properties() {
            return {
                min: String,
                max: String,
                value: String,
                text: String
            }
				}

				static get template() {
            return html`
            <link rel="stylesheet" href="src/astro-components/rux-progress.css">

            <div class="rux-progress">
                <progress value="[[value]]" min=[[min]] max=[[max]]></progress>
                <div hidden="[[hidden]]">[[value]]</div>
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

            this.hidden = !this.text;
				}
}

customElements.define(RuxProgress.is, RuxProgress);
