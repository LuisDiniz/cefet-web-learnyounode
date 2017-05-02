var fs = require('fs')

let numLinhas;

if (process.argv.length > 2) {
	let buff = fs.readFileSync(process.argv[2]);
	numLinhas = buff.toString().split("\n");
}

console.log(numLinhas.length-1);


