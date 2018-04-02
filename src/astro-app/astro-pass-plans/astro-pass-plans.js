import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-if.js";
import { MutableData } from "/node_modules/@polymer/polymer/lib/mixins/mutable-data.js";
import { AstroPassPlanTask } from "./astro-pass-plan-task.js";
import { RuxIcon } from "../../astro-components/rux-icon/rux-icon.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroPassPlans extends MutableData(PolymerElement) {
  static get properties() {
    return {
      title: {
        type: String
      },
      timelineTracks: {
        type: Array
      },
      selectedSatellite: {
        type: Object,
        observer: "_selectedSatelliteChanged",
        value: false
      },
      completedTasks: {
        type: Number
      },
      tasks: {
        type: Array,
        value: false
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

    .complete {
      /* border: 1px solid green; */
    }

    .incomplete {
      opacity: 0.5;
    }

    .pass {
     /*  background-color: green; */
    }

    .fail {
      /* background-color: red; */
    }

    rux-icon {
      margin-left: auto;
    }

    .task {
      margin-right: auto;
    }

    .no-selection {
      display: flex;
      height: 200%;
      justify-content: center;
      align-items: center;
      /* outline: 1px solid red; */
    }

    .no-selection h1 {
      font
      font-weight: 300;
    }

    </style>


    <div class="rux-timeline-component">
      <rux-timeline
        label="Satellite Pass Plans"
        initial-scale=100
				tracks=[[tracks]]
				zoom-control=true
				selected-region={{selectedSatellite}}>
			</rux-timeline>


      <template is="dom-if" if=[[selectedSatellite]]>
        <div class="rux-timeline__controls">
          
          <rux-status
            icon="advanced-status:satellite-transmit"
            label=[[selectedSatellite.title]]
            status=[[selectedSatellite.status]]></rux-status>

          <div class="rux-button-group">
            <rux-button
              icon="media-controls:play">Play</rux-button>
            <rux-button
              icon="media-controls:pause">Pause</rux-button>
          </div>
          
          <div class="rux-timeline__tasks-status"><span class="rux-timeline__tasks-status__count"><b>[[completedTasks]]</b> of <b>7</b></span> Tasks Complete</div>
        </div>

        
        <div class="tasks-container">
          <ol class="tasks">
            <template is="dom-repeat" id="pass-plan-tasks" items={{tasks}} mutable-data>
              <li class$=[[_isComplete(item.complete)]]>
                <astro-pass-plan-task
                  title=[[item.title]]
                  status=[[item.status]]
                  pass=[[item.pass]]
                  complete=[[item.complete]]></astro-pass-plan-task>
              </li>
            </template>
          </ol>
        </div>
      </template>

      <template is="dom-if" if=[[!selectedSatellite]]>
        <div class="no-selection">
          <h1>No Pass Selected</h1>
        </div>

      </template>
    </div>  
    `;
  }

  _selectedSatelliteChanged(e) {
    if (!this.selectedSatellite) return;
    // get the task list from the selected satellite
    const _taskCheckList = e.detail.tasks;

    try {
      // filter out incomplete tasks and update the task complete indicator
      const _completedTasks = _taskCheckList.filter(task => {
        return task.complete;
      });
      this.completedTasks = _completedTasks.length;

      // update the tasks array with the information from the
      // selected satellite
      _taskCheckList.forEach((task, index) => {
        this.tasks[index].complete = task.complete;
        this.tasks[index].pass = task.pass;
      });

      this.tasks = this.tasks.slice();
    } catch (err) {
      console.log("This was an error", err);
    }
  }

  constructor() {
    super();

    // Hard coded tasks. In a real world use case it these tasks might be attached
    // to individual elements (using their detail object property to pass both the
    // title of the task and its status, or possibly in an init of the app sending
    // a single task list. In this instance it’s the same tasks for all regions)
    this.tasks = [
      { title: "Acquire and confirm signal" },
      { title: "Confirm telemetry data reception" },
      { title: "Analyze thermal data" },
      { title: "Analyze payload data" },
      { title: "Analyze battery levels" },
      { title: "Upload commanding" },
      { title: "Check ACOS" }
    ];

    const today = new Date();

    // Set up the timeline track data, it‘s just an array of objects
    // for the demo. In a real world example it would be attached to
    // a web service.
    this.tracks = [
      {
        label: "LEO",
        regions: [
          {
            label: "Satellite 1",
            status: "caution",
            detail: {
              tasks: [
                { complete: true, pass: true },
                { complete: true, pass: true },
                { complete: true, pass: true },
                { complete: true, pass: false },
                { complete: false, pass: false },
                { complete: false, pass: false },
                { complete: false, pass: false }
              ]
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
              tasks: [
                { complete: true, pass: true },
                { complete: true, pass: true },
                { complete: true, pass: true },
                { complete: true, pass: true },
                { complete: true, pass: true },
                { complete: true, pass: true },
                { complete: true, pass: true }
              ]
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
              tasks: [
                { complete: true, pass: true },
                { complete: true, pass: true },
                { complete: false, pass: false },
                { complete: false, pass: false },
                { complete: true, pass: false },
                { complete: false, pass: false },
                { complete: false, pass: false }
              ]
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

  _isComplete(task) {
    return task ? "complete" : "incomplete";
  }
}
customElements.define("astro-pass-plans", AstroPassPlans);
