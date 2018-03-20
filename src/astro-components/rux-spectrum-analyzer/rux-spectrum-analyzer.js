import "/node_modules/@polymer/polymer/polymer.js";
import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxSpectrumAnalyzer extends PolymerElement {
  static get template() {
 }
  static get properties() {
    return {
      chartData: {
        type: Object,
        observer: "_update"
      },
      chartTitle: {
        type: String
      },
      chartLegendX: {
        type: String
      },
      chartLegendY: {
        type: String
      },
      xScaleMin: {
        type: Number
      },
      xScaleMax: {
        type: Number
      },
      xScaleStep: {
        type: Number
      },
      yScaleMin: {
        type: Number
      },
      yScaleMax: {
        type: Number
      },
      height: {
        type: Number
      },
      width: {
        type: Number
      }
    };
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    //this._drawInitialGraph();
    var margin = { top: 20, right: 20, bottom: 30, left: 40 };
    var width = this.width - margin.left - margin.right;
    var height = this.height - margin.top - margin.bottom;
    // set the ranges
    var x = d3.scaleBand()
      .range([0, width])
      .padding(0.1);
    var y = d3.scaleLinear()
      .range([height, 0]);
    // append the svg object to the rux-spectrum-analyzer custom tag
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select(this.parentNode).select('rux-spectrum-analyzer').append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("style", "background-color: #1B3044")
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
    // add the y Axis
    svg.append("g")
      .attr("class", "rux-spectrum-analyzer__axis-label")
      .call(d3.axisLeft(y)
        .ticks(5));
    // Add main chart label
    svg.append("text")
      .attr("x", 10)
      .attr("y", -10)
      .attr("class", "rux-spectrum-analyzer__main-chart-label")
      .text(this.chartTitle);
    // Add x axis label
    svg.append("text")
      .attr("x", -25)
      .attr("y", 186)
      .attr("class", "rux-spectrum-analyzer__chart-legend")
      .text(this.chartLegendY);
    // Add y axis label
    svg.append("text")
      .attr("x", 30)
      .attr("y", 220)
      .attr("class", "rux-spectrum-analyzer__chart-legend")
      .text(this.chartLegendX);
    // start animation
    var ws = new WebSocket("ws://localhost:5100");
    ws.addEventListener('message', function(event) {
      var dataArray = event.data.split('|');
      var scrubbedArray = [];
      dataArray.shift(); // data comes with an extra pipe in the front
      for (var c = 0; c < dataArray.length; c++) {
        var datum = dataArray[c];
        var datumArray = datum.split(':');
        var d = {};
        d.frequency = datumArray[0];
        d.power = datumArray[1];
        d.value = parseInt(datumArray[0]);
        scrubbedArray.push(d);
      }
      var data = scrubbedArray;
      x.domain(data.map(function(d) { return d.frequency; }));
      y.domain([-27, 0]);
      // clear old bars and tips
      svg.selectAll(".rux-spectrum-analyzer__bar").remove();
      svg.selectAll(".rux-spectrum-analyzer__bar-tip").remove();
      // append the rectangles for the bar chart
      svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "rux-spectrum-analyzer__bar")
        .attr("x", function(d) { return x(d.frequency); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.power) - 2; })
        .attr("height", function(d) { return height - y(d.power) - 2; });
      svg.selectAll(".bar-tip")
        .data(data)
        .enter().append("rect")
        .attr("class", "rux-spectrum-analyzer__bar-tip")
        .attr("x", function(d) { return x(d.frequency); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.power) - 2; })
        .attr("height", 2);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  ready() {
    super.ready();
  }
}
customElements.define("rux-spectrum-analyzer", RuxSpectrumAnalyzer);