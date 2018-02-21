import { Element } from '/node_modules/@polymer/polymer/polymer-element.js';
class RuxTab extends Element {
				
				static get is() { return 'rux-tab'; }
				static get properties() {
            return {
                selected: {
                    type: Boolean,
                    reflectToAttribute: true
                }
            }
				}

				constructor() {
    super();
				}

				connectedCallback() {
            super.connectedCallback();

            // set the role to tab
            this.setAttribute('role','tab');
				}

				ready() {
            super.ready();
				}
}

customElements.define(RuxTab.is, RuxTab);
