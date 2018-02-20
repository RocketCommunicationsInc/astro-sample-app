import { Element } from '/node_modules/@polymer/polymer/polymer-element.js';
class RuxTabPanel extends Element {
				
				static get is() { return 'rux-tab-panel'; }
				static get properties() {
            return {
                type: String
            }
				}

				constructor() {
    super();
				}


				connectedCallback() {
            super.connectedCallback();

            // set the role to tab
            this.setAttribute('role','tabpanel');
				}

				disconnectedCallback() {
            super.disconnectedCallback();
            
				}


				ready() {
            super.ready();
				}
}

customElements.define(RuxTabPanel.is, RuxTabPanel);
