import "/node_modules/@polymer/polymer/polymer.js";
import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
// import "./d3.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxSpectrumAnalyzer extends PolymerElement {
  static get template() {}
  static get properties() {
    return {
      chartData: {
        type: Object,
        observer: "_update"
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
    // let ws = new WebSocket('ws://dev-dv.rocketcom.com:40510');
    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = this.width - margin.left - margin.right,
      height = this.height - margin.top - margin.bottom;
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
      .attr("style","background-color: #1B3044")
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
    // get the data
    d3.csv("./src/astro-components/rux-spectrum-analyzer/frequency-power.csv", function(error, data) {
      if (error) {
        throw error;
      }
      // format the data
      data.forEach(function(d) {
        d.power = +d.power;
      });
      // Scale the range of the data in the domains
      x.domain(data.map(function(d) { return d.frequency; }));
      y.domain([-25, 0]);
      // append the rectangles for the bar chart
      svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.frequency); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.power) -  2; })
        .attr("height", function(d) { return height - y(d.power) - 2; });

      svg.selectAll(".bar-tip")
        .data(data)
        .enter().append("rect")
        .attr("class","bar-tip")
        .attr("x", function(d) { return x(d.frequency); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.power) - 2; })
        .attr("height", 2);


      // // add the x Axis
      // svg.append("g")
      //   .attr("class", "axis xaxis")
      //   .attr("transform", "translate(0," + height + ")")
      //   .call(d3.axisBottom(x));

      // add the y Axis
      svg.append("g")
        .attr("class","rux-spectrum-analyzer__axis-label")
        .call(d3.axisLeft(y)
          .ticks(5));

      // Add main chart label
      svg.append("text")
        .attr("x", 10)
        .attr("y", -10)
        .attr("text-anchor", "left")
        .attr("class", "rux-spectrum-analyzer__main-chart-label")
        .text("Signals");

      // Add x axis label
      svg.append("text")
        .attr("x", -25)
        .attr("y", 186)
        .attr("text-anchor", "right")
        .attr("fill","white")
        .attr("style","font-size: 10px; font-weight: bold")
        .text("PWR");

      // Add y axis label
      svg.append("text")
        .attr("x", 30)
        .attr("y", 220)
        .attr("text-anchor", "right")
        .attr("fill","white")
        .attr("style","font-size: 10px; font-weight: bold")
        .text("FREQ");

      // Clean up x axis
      var xTicks = svg
        .selectAll("g.xaxis")
        .selectAll("g.tick");



    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  ready() {
    super.ready();
  }
  _update(data) {
    this._clear();
    this._draw(data);
  }
  _clear() {
    this.graph.selectAll(".bar").remove();
  }
  _draw(data) {
    // Using a forEach loop to make use of lexical this, but
    // currently performance of forEach is substantially slower
    // than a standard for().
    //console.log('draw',data);
    this.chartData.forEach(data => {
      this.graph
        .selectAll(".bar")
        .data(this.chartData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", data => {
          return data.frequency;
        })
        .attr("y", data => {
          return data.power;
        })
        .attr("height", data => {
          return this.height - data.power;
        })
        .attr("width", 10);
    });
  }
  _buildXDomain(min, max, step) {
    var xDomain = [];
    for (var c = min; c < max; c = c + step) {
      xDomain.push(c);
    }
    return xDomain;
  }
}
customElements.define("rux-spectrum-analyzer", RuxSpectrumAnalyzer);