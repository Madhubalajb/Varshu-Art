let imagemin = require("imagemin"),
    webp = require("imagemin-webp"),
    outputFolder = "./img",
    PNGImages = "./img/*.png",
    JPEGImages = "./img/*.jpg";

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