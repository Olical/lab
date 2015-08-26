/* global React, d3 */

// BASIC GRAPH
var Graph = React.createClass({
  render: function () {
    var data = [4, 8, 15, 16, 23, 42]
    var chart = d3.select(document.createElement('div'))

    chart
      .selectAll('.bar')
      .data(data)
      .enter().append('div')
      .prop({
        className: 'bar',
        key: function (d, i) {
          return i
        },
        style: function (d, i) {
          return {
            width: d * 10
          }
        }
      })
      .text(function (d) {
        return d
      })

    return chart.toReact()
  }
})

React.render(
  React.createElement(Graph),
  document.getElementById('mount-chart')
)

// PARTICLES
var width = 960
var height = 500

// {x, y, i}
var circles = []
var i = 0

var Particles = React.createClass({
  propTypes: {
    circles: React.PropTypes.array
  },
  render: function () {
    var svg = d3.select(document.createElement('svg'))
      .prop('width', width)
      .prop('height', height)

    svg.selectAll('.particle').data(this.props.circles).enter()
      .append('circle')
      .prop('className', 'particle')
      .prop('key', function (d) { return d.i })
      .prop('style', function (d) {
        return {
          cx: d.x,
          cy: d.y,
          r: 10,
          stroke: d3.hsl(d.i % 360, 1, 0.5),
          strokeOpacity: 1
        }
      })

    svg.append('rect')
      .prop('className', 'cover')
      .prop('width', width)
      .prop('height', height)
      .prop('key', 'cover')
      .prop('onMouseMove', function () { return addParticle })

    function addParticle (e) {
      circles.push({
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        i: i++
      })

      renderParticles()
    }

    return svg.toReact()
  }
})

function renderParticles () {
  React.render(React.createElement(Particles, {
    circles: circles
  }), document.getElementById('mount-particles'))
}

renderParticles()
