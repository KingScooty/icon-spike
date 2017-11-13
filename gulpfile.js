var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var path = require('path');

gulp.task('default', function () {
    return gulp.src('svgs/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [
                    {
                        cleanupIDs: {
                            prefix: prefix + '-',
                            minify: true
                        }
                    },
                    {
                        removeTitle: true
                    },
                    {
                        removeDoctype: true
                    },
                    {
                        removeComments: true
                    },
                    {
                        removeDesc: true
                    },
                    {
                        removeAttrs: {
                            attrs: ['transform']
                        }
                    }
                ]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('./dest'));
});
