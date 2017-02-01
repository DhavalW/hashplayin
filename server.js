var express = require('express');
var app = express();
var http = require('http')
	.Server(app);



// fs.readFile('package.json', function (err, data) {
// 	console.log('FILEDATA is ', data.toString());
// 	return data;
// });


// app.get('/', function (req, res) {
// 	res.send('<h1>Hello world</h1>');
// });
app.get('/', express.static(__dirname +'/www/' /*, { maxAge: oneDay }*/ ));
app.use('/static', express.static(__dirname + '/www/static' /*, { maxAge: oneDay }*/ ));
app.use('/node_modules', express.static(__dirname + '/www/node_modules' /*, { maxAge: oneDay }*/ ));

app.use('/DIYDM', express.static(__dirname +'/www/diydm/' /*, { maxAge: oneDay }*/ ));
app.use('/DIYDM/static', express.static(__dirname + '/www/diydm/static' /*, { maxAge: oneDay }*/ ));
app.use('/DIYDM/node_modules', express.static(__dirname + '/www/diydm/node_modules' /*, { maxAge: oneDay }*/ ));

var oneDay = 86400000;

//app.use(express.compress());
// console.log('Routes are :');
// console.log('/sfui/composer\t\t=\t'+ __dirname +'/clients/sfui-composer');
// console.log('/sfui/demos/calculator\t=\t'+__dirname + '/clients/demos/calculator');

// app.use('/demos/calculator', express.static(__dirname + '/www/demos/calculator' /*, { maxAge: oneDay }*/ ));



http.listen(process.env.PORT || 5000, function () {
	console.log('listening on port ',process.env.PORT || '5000');
});
