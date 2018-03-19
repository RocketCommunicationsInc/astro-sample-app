import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxPopUpMenu extends PolymerElement {
  static get properties() {
    return {
      orientation: {
        type: String
      },
      opened: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },
      target: {
        type: Object,
        observer: "_targetChanged"
      },
      menuItems: {
        type: Array
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-pop-up-menu/rux-pop-up-menu.css">

      
      <nav role="menu">
        <ul>
          <template is="dom-repeat" id="pop-up-menu" items="{{menuItems}}">
            <li><a>{{item.label}}</a></li>
          </template>
        </ul>
      </nav>
    `;
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

  _outsideClick(e) {
    console.log("outside click");
    console.log("target", e.target);
    console.log("currentTarget", e.currentTarget);
    window.removeEventListener("click", this._outsideClick);
  }

  _targetChanged(e) {
    console.log(typeof e);
    if (e == "null") return;
    const _target =
      typeof e === "string" ? this.getRootNode().getElementById(e) : e;
    console.log(_target);

    const _targetBounds = _target.getBoundingClientRect();
    const _popUpBounds = this.getBoundingClientRect();

    let _left = _targetBounds.left;
    let _top = _targetBounds.bottom;

    // Handle edge cases where the menu might be off screen
    if (_targetBounds.left + _popUpBounds.width > window.innerWidth) {
      _left = window.innerWidth - _popUpBounds.width;
    } else if (
      _targetBounds.bottom + _popUpBounds.height >
      window.innerHeight
    ) {
      _top = window.innerHeight - _popUpBounds.height;
    }

    // generate CSS for position of the element
    const _css = `
            position: fixed; 
            top: 0px; 
            left: 0px;
            z-index: 10000`;

    this.setAttribute("style", _css);
    this.opened = true;

    window.addEventListener("click", this._outsideClick);
  }
}

customElements.define("rux-pop-up-menu", RuxPopUpMenu);
