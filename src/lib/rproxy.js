module.exports = function(options) {
	// options: {host:, port}
	if (process.argv.length != 1 && process.argv.length != 2) {
		console.error("Usage: rproxy host [port]");
		process.exit(1);
	}

	var proxy = require('http-proxy').createProxyServer();

//	proxy.on('proxyReq', function(proxyReq) {
//		var h = options.host.replace(/https?\:\/\//, '');
//		proxyReq.setHeader('Host', h);
//	});

	require('http').createServer(function(req, res) {
		req.headers["host"] = options.host.replace(/https?\:\/\//, '');
		proxy.web(req, res, {target:options.host});
	}).listen(options.port) && console.log('Reverse proxy to '+options.host+' listening on port '+options.port);
};
