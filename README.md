copied from http://c2journal.com/2014/07/30/gulp-pipe-callback/

Usage
-----
```
var gcallback = require(' gulp-callback ')
 
gulp.src(' ... ')
  .pipe(concat(" ... "))
  .pipe(gulp.dest(' ... '))
  .pipe(gcallback(function() {
    console.log(' here ');
  }));
```