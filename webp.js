let imagemin = require("imagemin"),
    webp = require("imagemin-webp"),
    outputFolder = "./src/img",
    PNGImages = "./src/img/*.png",
    JPEGImages = "./src/img/*.jpg";

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