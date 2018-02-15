class RuxButton extends HTMLElement {
	constructor() {
		super();
		console.log('Rux Button has loaded');
	}

	
	// OPTIONAL: Component is loaded
	connectedCallback() {
		this.initShadowDom();
		this._onClick();
	}

	// OPTIONAL: Component is attached to the dom
	attachedCallback() {}

	// OPTIONAL: Disconnect event listeners when component is removed from DOM
	disconnectedCallback() {
		this.removeEventListener('click', this._onClick);
	}

	// enable shadow DOM
	initShadowDom() {
		let shadowRoot = this.attachShadow({ mode: 'open' });
				shadowRoot.innerHTML = this.template;
	}

	// internally handle a click event
	_onClick() {
		this.addEventListener('click', (obj) => {

			var data = obj.target.dataset;
			this._propA = 'C';
			
			// dispatch a custom event up the DOM
			this.dispatchEvent(new CustomEvent('clicked', {
				detail: {
					test: 'wonders'
				},
				bubbles: true // bubbles up the DOM
			}));
		});
	}

	get template() {
		return `
			<style>
				:host {
					display: inline-block;
					contain: content; /* This improves CSS performance see: https://developers.google.com/web/updates/2016/06/css-containment */
				}

				

				button {
					display: inline-block;
					position: relative;

					margin: 0;
					padding: 0.375rem 0.8rem;

					width: auto;
  				min-width: 5rem;
					
					background-color: var(--button-background);
				
					border: none;
					border-top: var(--button-border-top);
					border-left: var(--button-border-left);
					border-bottom: var(--button-border-bottom);
					border-right: var(--button-border-right);
				
					color: var(--button-color);
					font-size: 1em;
					vertical-align: middle;
  				text-align: center;
  				white-space: nowrap;
  				line-height: 1.5;
				
					cursor: pointer;
					outline: none;

					-webkit-user-select: none;
     				 -moz-user-select: none;
      				-ms-user-select: none;
          				user-select: none;
				}

				

				button:active:not([disabled]) {
					box-shadow: inset 0 1px 2px 2px rgba(0, 0, 0, 0.5);
  				background-color: var(--button-background);
  				border: 1px solid #0462ab;
				}
				
				
				button:hover:not([disabled]) {
					background-color: var(--button-background--hover)
				}

				
				button:default {
					
				}
				
			</style>
	
			<button slot="default"><slot></slot></button>
		`;
	}
}

window.customElements.define('rux-button', RuxButton);