var fs = require('fs');
var path = require('path');

var extensao = "." + process.argv[3];

fs.readdir(process.argv[2], function (err, lista){
	if (err !== true){
		for (var i = 0; i < lista.length; i++) {
			if (path.extname(lista[i]) === extensao)
				console.log(lista[i]);
		}
	}
	else
		console.log(err);
});