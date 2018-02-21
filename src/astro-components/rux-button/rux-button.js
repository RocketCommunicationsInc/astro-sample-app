import { Element } from '/node_modules/@polymer/polymer/polymer-element.js';
import './rux-icon.js';
class RuxButton extends Element {
				
				static get is() { return 'rux-button'; }
				static get properties() {
            return {
                type: String,
                icon: String,
                default: Boolean,
                disabled: Boolean
            }
				}

				constructor() {
    super();
				}

				ready() {
            super.ready();

            // set default
            this.default = this.default ? 'rux-button--default' : '';

            // hide the icon if there is no icon
            this.hidden = !this.icon;
            
            // set type to standard if there is no type
            this.type = this.type ? this.type : 'standard';


				}
}

customElements.define(RuxButton.is, RuxButton);
