let imagemin = require("imagemin")
let webp = require("imagemin-webp")
let outputFolder = "./img"
let PNGImages = "./img/*.png"
let JPEGImages = "./img/*.jpg"

imagemin([PNGImages], outputFolder, {
    plugins: [webp({
        loassless: true
    })]
});

imagemin([JPEGImages], outputFolder, {
    plugins: [webp({
        quality: 65
    })]
});