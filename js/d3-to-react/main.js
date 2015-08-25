/* global React, d3, _ */

/**
 * Converts plain DOM into React elements. Uses recursion which obviously won't
 * work for deep structures, which is a shame.
 *
 * @param {Element} node
 * @return {ReactElement}
 */
function reactFromElement (node) {
  var elName = node.nodeName.toLowerCase()
  var children = node.childNodes
  var attrs = _.zipObject(_.map(node.attributes, function (attr) {
    return [attr.name, attr.value]
  }))

  if (elName === '#text') {
    return node.textContent
  } else if (_.isEmpty(children)) {
    return React.createElement(elName, attrs)
  } else {
    return React.createElement(elName, attrs, _.map(children, reactFromElement))
  }
}

var SimpleD3 = React.createClass({
  render: function () {
    var data = [4, 8, 15, 16, 23, 42]
    var el = document.createElement('div')
    d3.select(el)
      .selectAll('p')
      .data(data)
      .enter().append('p')
      .attr('key', function (d, i) {
        return i
      })
      .text(function (d) {
        return d
      })

    return reactFromElement(el)
  }
})

React.render(
  React.createElement(SimpleD3),
  document.getElementById('mount')
)
