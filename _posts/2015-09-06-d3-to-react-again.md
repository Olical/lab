---
layout: post
title: D3 to React again
---

<style>
.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

.x.axis path {
  display: none;
}

.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 1.5px;
}
</style>

**This tool can be found at [Olical/react-faux-dom][].**

This is a continuation of my [previous experiment][prev], but this time I've built a fake DOM that you give to D3 to manipulate. So you can use your normal D3 methods and then turn the resulting node into React elements easily. This is more efficient and seamless than my previous approach. It should mean that most existing D3 components will work straight away when you swap the normal DOM element for the faux DOM.

The chart below is from the great [mbostock][orig-chart], I've just wrapped the D3 calls in a React component that renders into my faux DOM. Everything else has remained the same, it "just works".

<div id="mount"></div>

<script src="/js/d3-to-react-again/main.min.js"></script>

[particles]: http://bl.ocks.org/mbostock/1062544
[Olical/react-faux-dom]: https://github.com/Olical/react-faux-dom
[prev]: http://lab.oli.me.uk/d3-to-react/
[orig-chart]: http://bl.ocks.org/mbostock/3883245
