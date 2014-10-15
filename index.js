// written by David Parlevliet (c2journal.com)
// published by Oliver Foster (oliver.foster@kineo.com), thanks David
 
var Stream = require("stream");
 
function gulpCallback(obj) {
  "use strict";
  var stream = new Stream.Transform({objectMode: true});
 
  stream._transform = function(file, unused, callback) {
    obj()
    callback(null, file);
  }
 
  return stream;
};
 
module.exports = gulpCallback;