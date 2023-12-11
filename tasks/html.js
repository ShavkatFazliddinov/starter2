const {src,dest} = require("gulp");
const gulpFileInclude = require("gulp-file-include")
const htmlMin = require("gulp-htmlmin");
const gulpSize = require("gulp-size");
const url = require("../config/url.js")
const html = () =>{
    return src(url.html.src) 
    .pipe(gulpFileInclude())
    .pipe(gulpSize({
        title:"Before size:"
    }))
    .pipe(htmlMin({
        collapseWhitespace: true
    }
    ))
    .pipe(gulpSize({
        title:"After size:"
    }))
    .pipe(dest(url.html.dest));
}

module.exports = html;