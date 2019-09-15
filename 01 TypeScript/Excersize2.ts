import {Radio, Band, Musician} from "./modules/iplay";
import {Instrument, ColorRadio} from "./modules/enumsEx2";


let radio = new Radio("radio_101.7", ColorRadio.Yellow, 12);
radio.play("song2");
radio.prev();
radio.next();
radio.next();

console.log();

let mus = new Musician("mus1", 23, Instrument.Guitar);
mus.play("song2");
mus.prev();
mus.next();
mus.next();

console.log();

let band = new Band("best_band", [
    new Musician("mus1", 23, Instrument.Guitar),
    new Musician("mus2", 21, Instrument.Buss),
    new Musician("mus3", 20, Instrument.Drums),
    new Musician("mus4", 19, Instrument.None),
]);

band.play("song2");
band.prev();
band.next();
band.next();
