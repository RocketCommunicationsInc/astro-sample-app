import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroPassPlans extends PolymerElement {
  static get properties() {
    return {
      title: {
        type: String
      }
    };
  }
  static get template() {
    return html`
    

    <link rel="stylesheet" href="/src/astro-app/astro-pass-plans/astro-pass-plans.css">
    


    <div class="rux-timeline-component">
      <rux-timeline
        label="Timeline"
        type="realtime"
        data=[[timeline]]
        playback-controls="footer"
        zoom-control=true
        catch-playhead-control=false>
      </rux-timeline>


      <div class="rux-timeline__controls">
        
        <rux-status
          icon="advanced-status:satellite-transmit"
          label="Sat 1"
          status="ok"
          on-click="_showPopUp"></rux-status>

        <div class="rux-button-group">
          <rux-button
            icon="media-controls:play">Play</rux-button>
          <rux-button
            icon="media-controls:pause">Pause</rux-button>
        </div>

        <div class="rux-timeline__tasks-status"><span class="rux-timeline__tasks-status__count"><b>[[0]]</b> of <b>[[7]]</b></span> Tasks Complete</div>
      </div>

      <div class="tasks-container">
        <ol class="tasks">
          <li>Acquire and confirm signal</li>
          <li>Confirm telemetry data reception</li>
          <li>Analyze thermal data</li>
          <li>Analyze payload data</li>
          <li>Analyze battery levels</li>
          <li>Upload commanding</li>
          <li>Check ACOS</li>
        </ol>
      </div>

    </div>

    
      
    `;
  }

  _showPopUp(e) {
    this._popMenuTarget = e.currentTarget;
  }
  constructor() {
    super();

    this._popMenuItems = [
      {
        label: "Menu Item 1",
        action: "doSomething"
      },
      {
        label: "Menu Item 2",
        action: "doSomethingElse"
      }
    ];

    const today = new Date();

    this.timeline = {
      duration: 86400000,
      tracks: [
        {
          label: "Huey",
          regions: [
            {
              label: "Satellite 1",
              status: "ok",
              startTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                9,
                0,
                0
              ),
              endTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                11,
                0,
                0
              )
            },
            {
              label: "Satellite 2",
              status: "ok",
              startTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                13,
                0,
                0
              ),
              endTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                13,
                30,
                0
              )
            },
            {
              label: "Satellite 3",
              status: "error",
              startTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                15,
                0,
                0
              ),
              endTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                17,
                0,
                0
              )
            }
          ]
        },
        {
          label: "Dewey",
          regions: [
            {
              label: "Satellite 4",
              status: "ok",
              startTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                7,
                0,
                0
              ),
              endTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                10,
                0,
                0
              )
            },
            {
              label: "Satellite 5",
              status: "error",
              startTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                13,
                0,
                0
              ),
              endTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                14,
                30,
                0
              )
            },
            {
              label: "Satellite 6",
              status: "off",
              startTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                19,
                0,
                0
              ),
              endTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                10,
                0,
                0
              )
            }
          ]
        },
        {
          label: "Louie",
          regions: [
            {
              label: "Satellite 7",
              status: "ok",
              startTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                4,
                0,
                0
              ),
              endTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                4,
                15,
                0
              )
            },
            {
              label: "Satellite 8",
              status: "caution",
              startTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                16,
                0,
                0
              ),
              endTime: new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                17,
                0,
                0
              )
            }
          ]
        }
      ]
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}
customElements.define("astro-pass-plans", AstroPassPlans);
