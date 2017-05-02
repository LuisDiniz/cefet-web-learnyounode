var fs = require('fs');
var path = require('path');

module.exports = function (diretorio, extensao, callback) {

	let extensaoArquivo = "." + extensao;
	let listaArquivos = [];

	fs.readdir(diretorio, function (err, lista){
		if (err)
			return callback(err);
		else{
			for (var i = 0; i < lista.length; i++) {
				if (path.extname(lista[i]) === extensaoArquivo)
					listaArquivos.push(lista[i]);
			}
			return callback(null, listaArquivos);
		}
	});

}