var d3 = require('d3')
var React = require('react')
var ReactDOM = require('react-dom')
var ReactFauxDOM = require('react-faux-dom')

var Box = React.createClass({
  getInitialState: function () {
    return {
      mouseOver: false
    }
  },
  render: function () {
    var self = this
    var svg = d3.select(ReactFauxDOM.createElement('svg'))
      .attr({
        width: 300,
        height: 300
      })

    svg
      .append('rect')
      .attr({
        width: 300,
        height: 300,
        fill: this.state.mouseOver ? 'red' : 'green'
      })
      .on('mouseover', function () {
        self.setState({
          mouseOver: true
        })
      })
      .on('mouseout', function () {
        self.setState({
          mouseOver: false
        })
      })

    return svg.node().toReact()
  }
})

ReactDOM.render(React.createElement(Box), document.getElementById('mount'))
