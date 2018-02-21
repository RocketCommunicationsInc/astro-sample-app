import { Element } from '/node_modules/@polymer/polymer/polymer-element.js';
class RuxTabPanels extends Element {
				
				static get is() { return 'rux-tab-panels'; }
				static get properties() {
            return {
                type: String
            }
				}

				constructor() {
    super();					
				}


				connectedCallback() {
            
            // set the role to tab
            this.setAttribute('role','tablist');

            let _panels = this.querySelectorAll('rux-tab-panel');
            
            window.dispatchEvent(new CustomEvent('register-panels', 
                { detail : 
                    { panels: _panels }
                }
            ));
            
            super.connectedCallback();
				}

				disconnectedCallback() {
            super.disconnectedCallback();
				}

				ready() {
            super.ready();
				}
    }


customElements.define(RuxTabPanels.is, RuxTabPanels);
