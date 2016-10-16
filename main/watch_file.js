var fs = require('fs')
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

// watch a directory for new file, 
// then send that new file to watson for 
// facial recognition


var dirname = 'public/camera';




fs.watch(dirname, function(event, filename) {
	console.log('event is: ' + event);
	if (filename) {
		console.log('filename provided: ' + filename);
	} else {
		console.log('filename not provided');
	}
});

