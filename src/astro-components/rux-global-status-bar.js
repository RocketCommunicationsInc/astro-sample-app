import { Element } from '/node_modules/@polymer/polymer/polymer-element.js';
import '/src/astro-components/rux-button.js';
class RuxGlobalStatusBar extends Element {
				
				static get is() { return 'rux-global-status-bar'; }
				static get properties() {
            return {
                appname: String,
                version: String
            }
				}
				constructor() {
    super();

            // console.log('Astro Global Status Bar has loaded … ')
				}


				connectedCallback() {
    super.connectedCallback();
            
            // if the user hasn’t defined an appname then explicitly
            // set the appname property to false to hide the app-meta
            // section from being included in the flex DOM
            if(!this.appname) this.appname = false;
				
            
				}

				_masterOff() {
            console.log('master off from inside global status');
            window.dispatchEvent(new CustomEvent('master-off', 
                { detail : 
                    { off: "yo" }
                }
            ));
				}

				ready() {
            super.ready();
				}
}

customElements.define(RuxGlobalStatusBar.is, RuxGlobalStatusBar);
