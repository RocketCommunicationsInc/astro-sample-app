import '/node_modules/@polymer/polymer/polymer.js';
import { Element } from '../../../@polymer/polymer/polymer-element.js';
/*


//*/
class RuxIcon extends Element {
    static get is() { return 'rux-icon'; }
    static get properties() {
				return {
            icon: {
                type: String,
                observer: '_updateIcon'
            },
            size: {
                type: String
            },
            color: {
                type: String
            }
				}
    }

    constructor() {
				super();
				this._iconLibraryEvent = this._iconLibraryLoaded.bind(this);
    }

    connectedCallback() {
				super.connectedCallback();
				window.addEventListener('icon-library-added', this._iconLibraryEvent);
    }

    disconnectedCallback() {
				super.disconnectedCallback();
				window.removeEventListener('icon-library-added', this._iconLibraryEvent);
    }

    ready() {
				super.ready();
    }






    //
    _iconLibraryLoaded(e) {
				
    }





    //
    _updateIcon(icon) {
				
				// get the icon library and icon name
				const parts = icon.split(':');
				this._iconName = parts.pop();
				this._iconLibrary = parts.pop();

				//
				window.dispatchEvent(new CustomEvent('set-icon', 
            { detail : {
                el: this,
                icon: this._iconName,
                library: this._iconLibrary,
                size: this.size,
                color: this.color
            } }
				));
    }
}

customElements.define(RuxIcon.is, RuxIcon);
