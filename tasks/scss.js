const {src,dest} = require("gulp");
const url = require("../config/url.js");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const size = require("gulp-size");
const mediaCss = require("gulp-group-css-media-queries")
const sass = require("gulp-sass")(require("sass"))
const gulpSaccGlob=require("gulp-sass-glob")
const scss = () =>{
    return src(url.scss.src)
    .pipe(gulpSaccGlob())
    .pipe(sass())
    .pipe(plumber({
        errorHandler:notify.onError(error =>({
            title: "Scss",
            message:error.message
        }))
    }))
    
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(mediaCss())
    .pipe(size({
        title:"main.css"
    }))
    .pipe(dest(url.css.dest))
    .pipe(csso())
    .pipe(size({
        title:"main.min.css"
    }))
    .pipe(rename({
        suffix: ".min"
    }))
    
    .pipe(dest(url.css.dest));
}

module.exports = scss;