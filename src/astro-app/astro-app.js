import { Element } from '../../../@polymer/polymer/polymer-element.js';
import '../astro-components/rux-component.js';
import '../astro-components/rux-button.js';
import '../astro-components/rux-global-status-bar.js';
import '../astro-components/rux-status.js';
import '../astro-components/rux-icons-svg.js';
import '../astro-components/rux-tabs.js';
import '../astro-components/rux-icons-svg.js';
import '../astro-components/rux-progress.js';
import '../astro-components/rux-segmented-button.js';
import '../astro-components/rux-pop-up-menu.js';


/**
 * @customElement
 * @polymer
 */
/* <link rel="import" href="../astro-components/rux-advanced-status.html"> */
/* <link rel="import" href="../astro-components/rux-icon-library.html">
<link rel="import" href="../astro-components/rux-icon.html"> */
class AstroApp extends Element {
  static get template() {
    return `
    <style>
      :host {
        display: block;
        /* box-sizing: border-box; */
      }


      
			/* :host:before,
			:host:after {
				box-sizing: border-box;
			}	 */


      .rux-status-bar-group {
        display: flex; 
        flex-direction: row; 
        justify-content: center;
        align-items: center;
        list-style:none; 
        padding: 0;
        margin: 0;
      }

      .rux-tool-bar-group {
        display: flex;

        justify-content: flex-end;
        align-items: center;

        list-style: none;
        padding: 0;
        margin: 0;

        /* outline: 1px solid green; */
      }

      .rux-navigation-tabs ul {
        display: flex;

        list-style: none;

        outline: 1px solid blue;
      }



    </style>


    
    
    <rux-global-status-bar appname="Astro App" version="v1.022a">




      <!-- for tabbed navigation // -->
      <rux-tabs slot="tabs">
        <rux-tab id="tab-modems">Modems</rux-tab>
        <rux-tab id="tab-pass-plans">Pass Plans</rux-tab>
        <rux-tab id="tab-telemetry">Telemetry</rux-tab>
      </rux-tabs>





      <!-- status icons //-->
      <ul class="rux-status-bar-group" slot="status-bar">
          <li><rux-status id="netcom-status" on-click="_showStatus" status="emergency" label="Netcom" sublabel="Ok" notifications="999" icon="advanced-status:netcom"></rux-status></li>
          <li><rux-status id="thermal-status" on-click="_showStatus" status="emergency" label="Advanced Status" notifications="12,345" sublabel="Error" icon="advanced-status:thermal"></rux-status></li>
          <li><rux-status on-click="_showStatus" status="standby" label="Standby" sublabel="Standby" notifications="923456" icon="advanced-status:propulsion-power"></rux-status></li>
          <li><rux-status on-click="_showStatus" status="standby" label="Standby" sublabel="Standby" notifications="1,534,567" icon="advanced-status:propulsion-power"></rux-status></li>
          <li><rux-status on-click="_showStatus" status="standby" label="Standby" sublabel="Standby" notifications="9,234,567,000" icon="advanced-status:propulsion-power"></rux-status></li>
            <li><rux-status id="propulsion-status" on-click="_showStatus" status="standby" label="Standby" sublabel="Standby" notifications="1,939,234,567,000" icon="advanced-status:propulsion-power"></rux-status></li>
        </ul>

        
      


      <!-- toolbar items //-->
      <ul class="rux-tool-bar-group" slot="tool-bar">
        <li>
          <rux-button type="icon" icon="default:settings">Settings</rux-button>
        </li>
        <li>
          <rux-button type="icon" icon="default:notifications">Notifications</rux-button>
        </li>
        <li>
            <!-- <rux-user
              user="[[]]"></rux-user> -->
        </li>
        <li>
          
        </li>
      </ul>
      
    </rux-global-status-bar>
    
    <rux-tab-panels>
      <rux-tab-panel aria-labeledby="tab-modems">
        <h1>Modems</h1>

          

          <rux-segmented-button data="{{ viewPicker }}"></rux-segmented-button>

          <rux-segmented-button data="{{ timeSelector }}"></rux-segmented-button>

          <rux-segmented-button buttons="[{ &quot;label&quot;: &quot;Manual&quot; },
                      { &quot;label&quot;: &quot;Manual Two&quot; },
                      { &quot;label&quot;: &quot;Manual Three&quot; }]"></rux-segmented-button>

          
          <div>
            view format: [[ viewPicker.selected.label ]]<br>
            time format: [[ timeSelector.selected.label ]]
          </div>


          <rux-progress min="0" max="100" value="10" step="1"></rux-progress>
          <br>
          <rux-progress min="0" max="100" value="99" text="false"></rux-progress>
          <br>
          <rux-progress></rux-progress>
        
          <rux-button type="small">Small</rux-button>
          <rux-button default="true" type="small">Small</rux-button>
          <rux-button disabled="">Disabled</rux-button>
          <rux-button type="narrow">Narrow</rux-button>
          <rux-button type="short">Short</rux-button>
          <rux-button>Cancel</rux-button>
          <rux-button on-click="_someFunction" default="true" icon="default:caution">Default Icon</rux-button>
          <rux-button default="true">Ok</rux-button>
          <rux-button icon="advanced-status:netcom">Master Off</rux-button>
        
            
        <rux-button type="icon" icon="default:notifications">Notifications</rux-button>
        <rux-button type="icon" default="true" icon="default:settings">Settings</rux-button>
            
        <rux-button type="large" icon="default:caution">Master Off</rux-button>
        <rux-button deafult="true" type="large">Master Off</rux-button>
              
      </rux-tab-panel>

      <rux-tab-panel aria-labeledby="tab-pass-plans">
        <h1>Pass Plans</h1>
      </rux-tab-panel>

      <rux-tab-panel aria-labeledby="tab-telemetry">
        <h1>Telemetry</h1>
      </rux-tab-panel>
      
  </rux-tab-panels>

  <rux-pop-up-menu id="pop-menu" orientation="top">
  </rux-pop-up-menu>
`;
  }

  static get is() { return 'astro-app'; }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'astro-app'
      }
    };
  }


  constructor() {
    super();

    // console.log(customElements.get('parent-element'));

    this.viewPicker = {
      buttons: [ 
        { "label": "Track" },
        { "label": "List" }]
    }
    
    this.timeSelector = {
      buttons: [ 
        { "label": "Hour" },
        { "label": "Day" },
        { "label": "Week" }]
    }
  }

  _stringIt(obj) {
    return JSON.stringify(obj);
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('master-off', this._masterOff);
  }

  disconnectedCallback() {
    suer.disconnectedCallback();

    window.removeEventListener('master-off', this._masterOff);
  }

  ready() {
    super.ready();
  }


  _segmentedButton(e) {
    console.log('segmented button',e);
    console.log('segmented button',e.target);
  }


  _masterOff() {
            console.log('master off from Astro App')
        }

  _someFunction() {
    alert('Click Event is handled in the astro-app component')
  }

  _showStatus(e) {
    console.log('showing status',e.target.getAttribute('id'));
    // this.root.getElementById('pop-menu').attribute('target',e.target)
    // console.log('pop-up-menu', this.root.getElementById('pop-menu'));

    this.root.getElementById('pop-menu').setAttribute('target',e.target.getAttribute('id'));
  }
}

window.customElements.define(AstroApp.is, AstroApp);
