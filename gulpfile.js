const {watch ,series,parallel} = require("gulp");
const { create } = require("browser-sync");
const browserSync = require("browser-sync",create());


//url
const url = require("./config/url.js")
//html
// const html = require("./tasks/html.js")
const clear = require("./tasks/clear.js")
const pug = require("./tasks/pug.js")
const image = require("./tasks/scss.js")


const watching = () =>{
    watch(url.pug.watch, pug).on('change',browserSync.reload);
    watch(url.image.watch, image).on('change',browserSync.reload);
}

const server = () =>{
    browserSync.init({
        server:{
            baseDir:url.pro
        }
    })
} 
exports.pug = pug;
exports.watch = watching;
exports.server = server;
exports.clear = clear;
exports.image = image;




exports.start = series(
    clear,
    pug,  
    parallel(pug,image),
    parallel(watching, server)
)