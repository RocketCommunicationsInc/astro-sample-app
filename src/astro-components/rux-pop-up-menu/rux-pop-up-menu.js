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

  _targetChanged(e) {
    if (e == "null") return;
    const _target =
      typeof e === "string" ? this.getRootNode().getElementById(e) : e;
    const _hit = document.createElement("div");
    _hit.setAttribute("id", "pop-up-overlay");
    const _hitCSS = `
          position: fixed; 
          top: 0; 
          left: 0;
          height: 100%;
          width: 100%;
          background-color: transparent;
          z-index: 9999`;
    _hit.setAttribute("style", _hitCSS);
    console.log();
    document.getElementsByClassName("dark-theme")[0].appendChild(_hit);

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

    _hit.addEventListener(
      "mousedown",
      event => {
        console.log("event", event);
        console.log("target", event.target);
        console.log("currentTarget", event.currentTarget);
        console.log("_target", _target);
        console.log("this", this);

        this.opened = false;
        const _close = document.getElementById("pop-up-overlay");
        console.log(_close);
        _close.remove();
      },
      false
    );

    // generate CSS for position of the element
    const _css = `
            position: fixed; 
            top: ${_top}px; 
            left: ${_left}px;
            z-index: 10000`;

    this.setAttribute("style", _css);
    this.opened = true;
  }
}

customElements.define("rux-pop-up-menu", RuxPopUpMenu);
