/* global React, d3, _ */

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
var width = 921
var height = 500

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
          r: d.r,
          stroke: d3.hsl(d.i % 360, 1, 0.5),
          strokeOpacity: d.o
        }
      })

    svg.append('rect')
      .prop('className', 'cover')
      .prop('width', width)
      .prop('height', height)
      .prop('key', 'cover')
      .prop('onMouseMove', function () { return addParticle })

    function addParticle (e) {
      var circle = {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        i: i++,
        o: 1,
        r: 1e-6
      }

      setTimeout(function () {
        _.remove(circles, circle)
        renderParticles()
      }, 1200)

      circles.push(circle)
      renderParticles()
    }

    return svg.toReact()
  }
})

setInterval(function () {
  _.each(circles, function (c) {
    c.o -= 0.02
    c.r += 1.1
  })
  renderParticles()
}, 10)

function renderParticles () {
  React.render(React.createElement(Particles, {
    circles: circles
  }), document.getElementById('mount-particles'))
}
