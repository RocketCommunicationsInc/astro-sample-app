import { html, Element } from '/node_modules/@polymer/polymer/polymer-element.js';
class RuxComponent extends Element {
        
        static get is() { return 'rux-component'; }
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
            <link rel="stylesheet" href="src/astro-components/rux-component.css">

            <div class="rux-component">This is a blank component template written in Polymer 2.4. Use me as a starting point for a new Component</div>`;	
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

customElements.define(RuxComponent.is, RuxComponent);
