let {PythonShell} = require('python-shell');
let pythonScript = new PythonShell('test-python.py');

pythonScript.on('message', function (message) {
	console.log("message : " + message);
	//console.log(pythonScript.terminated);
});

pythonScript.end(function (err,code,signal) {
	if (err) throw err;
	console.log('finished');
});