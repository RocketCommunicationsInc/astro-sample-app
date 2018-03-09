import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxButton } from "../rux-button/rux-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxNotification extends PolymerElement {
  static get properties() {
    return {
      message: {
        type: String
      },
      button: {
        type: Object,
        value: null
      },
      target: {
        type: Object
      },
      type: {
        type: String,
        value: "default"
      },
      hidden: {
        type: Boolean,
        value: false
      }
    };
  }
  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-notification/rux-notification.css">
      <div class="rux-notification" hidden=[[hidden]]>
        <div class="rux-notification__message">[[message]]</div>
      </div>
      `;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();

    console.log("root", this.parentNode);

    const _container = document.createElement("div");
    _container.classList.add("notification-container");
    _container.style.position = "absolute";
    _container.style.backgroundColor = "red";
    _container.style.height = "60px";
    _container.style.width = "100%";
    _container.style.top = "0";
    _container.style.left = "0";
    _container.style.width = "100%";
    _container.style.display = "block";

    this.parentNode.insertBefore(_container, this.parentNode.firstChild);

    const _buffer = document.createElement("div");
    _buffer.classList.add("notification-buffer");
    _buffer.style.position = "relative";
    _buffer.style.outline = "1px solid green";
    _buffer.style.webkitBorderTopRightRadius = "60px";
    _buffer.style.height = "60px";
    _buffer.style.width = "100%";
    _buffer.style.marginLeft = "0";
    _buffer.style.display = "block";
    _buffer.style.zIndex = 10;

    this.parentNode.insertBefore(_buffer, this.parentNode.firstChild);

    console.log("_container.offsetTop", _container.offsetTop);
    console.log("_buffer.offsetTop", _buffer.top);

    // if (!this.parentNode.style.position) {
    //   this.parentNode.style.position = "relative";
    // }

    // let _firstElem = this.parentNode.childNodes[1];
    // console.log("_firstElem", _firstElem);
    // let _container = this.parentNode.insertBefore(
    //   _firstElem,
    //   document.createElement("div")
    // );

    // console.log("root", this.parentNode.style.position);
    // this.parentNode.css('position')
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
}
customElements.define("rux-notification", RuxNotification);
