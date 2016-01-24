var colors = require('colors');
exports.printMsg =  function(color){
	if(!color) color = 'red';
	console.log('This is a message from demo package.'[color]);
}
