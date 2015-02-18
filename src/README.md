rproxy
======

Creates a simple HTTP reverse proxy. Listens on a local port, proxies to the HTTP host you provide.

CLI
---

Npm install with -g for this option.

	rproxy https://www.edusight.co 5000

JS
---

	require('rproxy')({host:'https://www.edusight.co', port:5000});