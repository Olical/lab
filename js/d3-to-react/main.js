/* global React, d3 */

var SimpleD3 = React.createClass({
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
  React.createElement(SimpleD3),
  document.getElementById('mount')
)
