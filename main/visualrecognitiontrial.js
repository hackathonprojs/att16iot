/**
 * ibm watson visual recognition api trial
 */

var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visual_recognition = new VisualRecognitionV3({
  api_key: 'b18a80ca677541deacaf9cebce5617b7dd2265ed',
  version_date: '2016-05-19'
});

var params = {
  images_file: fs.createReadStream('./public/camera/p20161015-170803.jpg')
};

// visual_recognition.classify(params, function(err, res) {
//   if (err)
//     console.log(err);
//   else
//     console.log(JSON.stringify(res, null, 2));
// });

visual_recognition.detectFaces(params,
  function(err, response) {
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(response, null, 2));
  });