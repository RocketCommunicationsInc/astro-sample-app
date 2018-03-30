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
      },
      timelineTracks: {
        type: Array
      },
      timelineSelectedRegion: {
        type: Object,
        value: {
          title: "off",
          status: "off"
        },
        observer: "_changed"
      }
    };
  }
  static get template() {
    return html`
    

    <link rel="stylesheet" href="/src/astro-app/astro-pass-plans/astro-pass-plans.css">
    
    <style>

    *[hidden] {
      display: none !important;
    }

    </style>


    <div class="rux-timeline-component">
      <rux-timeline
        label="Satellite Pass Plans"
        initial-scale=100
				tracks=[[tracks]]
				zoom-control=true
				selected-region={{timelineSelectedRegion}}>
			</rux-timeline>


      <div class="rux-timeline__controls" hidden$=[[!timelineSelectedRegion]]>
        
        <rux-status
          icon="advanced-status:satellite-transmit"
          label=[[timelineSelectedRegion.title]]
          status=[[timelineSelectedRegion.status]]></rux-status>

        <div class="rux-button-group">
          <rux-button
            icon="media-controls:play">Play</rux-button>
          <rux-button
            icon="media-controls:pause">Pause</rux-button>
        </div>
        
        <div class="rux-timeline__tasks-status"><span class="rux-timeline__tasks-status__count"><b>[[timelineSelectedRegion.detail.tasks.length]]</b> of <b>7</b></span> Tasks Complete</div>
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

  _changed() {
    console.log("changed");
    console.log(this.timelineSelectedRegion);
  }
  _showPopUp(e) {
    this._popMenuTarget = e.currentTarget;
  }

  _getPower(p) {
    return p.power;
  }
  _getThermal(t) {
    return t.thermal;
  }

  constructor() {
    super();

    const today = new Date();

    // Set up the timeline track data, it‘s just an array of objects
    // for the demo
    this.tracks = [
      {
        label: "LEO",
        regions: [
          {
            label: "Satellite 1",
            status: "caution",
            detail: {
              tasks: [0, 1, 2]
            },
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              7,
              30,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              8,
              30,
              0
            )
          },
          {
            label: "Satellite 2",
            status: "ok",
            detail: {
              tasks: [0, 1, 2, 3, 4, 5, 6]
            },
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              10,
              0,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              13,
              0,
              0
            )
          },
          {
            label: "Satellite 3",
            status: "error",
            detail: {
              tasks: [0]
            },
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              15,
              0,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              20,
              30,
              0
            )
          }
        ]
      }
    ];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}
customElements.define("astro-pass-plans", AstroPassPlans);
