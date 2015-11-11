---
layout: post
title: react-faux-dom state
---

I see a lot of people attempting to use [react-faux-dom][] with stateful D3 components (which doesn't work without modification) and then opening GitHub issues about the problem. This little example should hopefully clear things up around how to make stateful D3 components render through [react-faux-dom][].

Essentially, you can't just mutate the element, because there is no element to mutate inside the render function, it's React! So instead you have to use `setState` to get React to re-render you component with some new settings, you then use those settings to render the component with your desired modifications in place.

The example isn't that impressive, but [the source code][source] for it should explain a lot.

<div id="mount"></div>

Yes this isn't using things like D3 animation or brushing, but to be quite honest I'm not sure how I could get those to work very easily right now. If you want to animate things, use a React animation library (they're great and work fine with faux DOM), you have to find the React way to do things, sadly some D3 concepts just don't translate. If you want some physics based graph full of state then you're probably better off keeping to the original way of embedding D3 in React, dropping out of React and letting D3 mutate that element.

[react-faux-dom][] allows you to embed stateless D3 components into your React components (or vice versa) with ease, it's not designed to support every single stateful mutation D3 can throw at it. I have built an interactive graph with hover based tooltips which works great, physics and complex D3 plugins don't seem very easy to integrate with though.

<script src="/js/react-faux-dom-state/main.min.js"></script>

[react-faux-dom]: https://github.com/Olical/react-faux-dom
[source]: https://github.com/Olical/lab/tree/gh-pages/js/react-faux-dom-state/
