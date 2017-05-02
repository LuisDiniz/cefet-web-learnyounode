var fs = require('fs')

fs.readFile(process.argv[2],'utf8', callback);

function callback(err, data){
	if (err !== true)
		console.log(data.split('\n').length-1);
	else
		console.log('erro');
}