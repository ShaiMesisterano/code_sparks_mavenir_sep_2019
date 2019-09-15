"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iplay_1 = require("./modules/iplay");
var enumsEx2_1 = require("./modules/enumsEx2");
var radio = new iplay_1.Radio("radio_101.7", enumsEx2_1.ColorRadio.Yellow, 12);
radio.play("song2");
radio.prev();
radio.next();
radio.next();
console.log();
var mus = new iplay_1.Musician("mus1", 23, enumsEx2_1.Instrument.Guitar);
mus.play("song2");
mus.prev();
mus.next();
mus.next();
console.log();
var band = new iplay_1.Band("best_band", [
    new iplay_1.Musician("mus1", 23, enumsEx2_1.Instrument.Guitar),
    new iplay_1.Musician("mus2", 21, enumsEx2_1.Instrument.Buss),
    new iplay_1.Musician("mus3", 20, enumsEx2_1.Instrument.Drums),
    new iplay_1.Musician("mus4", 19, enumsEx2_1.Instrument.None),
]);
band.play("song2");
band.prev();
band.next();
band.next();
