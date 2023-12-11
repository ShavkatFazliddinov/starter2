const {src,dest} = require("gulp");
const url = require("../config/url.js")
const gulpSize = require("gulp-size");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const pug = () =>{
    return image(url.image.src)

    .pipe(gulpSize({
        title:"Before size:"
    }))
    .pipe(gulpSize({
        title:"After size:"
    }))
    .pipe(dest(url.pug.dest));
}

module.exports = image;