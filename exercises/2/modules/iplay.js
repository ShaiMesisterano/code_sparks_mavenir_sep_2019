"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Musician = /** @class */ (function () {
    function Musician(name, age, instrument) {
        this.name = name;
        this.age = age;
        this.instrument = instrument;
        this.songs = ["song1", "song2", "song3"];
        this.songIndex = 0;
    }
    Musician.prototype.play = function (song) {
        this.songIndex = this.songs.indexOf(song);
        console.log("Musician playing song " + song);
    };
    ;
    Musician.prototype.prev = function () {
        this.songIndex--;
        var song = this.songs[this.songIndex];
        console.log("Musician previous song " + song);
    };
    ;
    Musician.prototype.next = function () {
        this.songIndex++;
        var song = this.songs[this.songIndex];
        console.log("Musician next song " + song);
    };
    ;
    return Musician;
}());
exports.Musician = Musician;
var Band = /** @class */ (function () {
    function Band(name, musicians) {
        this.name = name;
        this.musicians = musicians;
        this.songs = ["song1", "song2", "song3"];
        this.songIndex = 0;
    }
    Band.prototype.play = function (song) {
        this.songIndex = this.songs.indexOf(song);
        console.log("Band playing song " + song);
    };
    ;
    Band.prototype.prev = function () {
        this.songIndex--;
        var song = this.songs[this.songIndex];
        console.log("Band previous song " + song);
    };
    ;
    Band.prototype.next = function () {
        this.songIndex++;
        var song = this.songs[this.songIndex];
        console.log("Band next song " + song);
    };
    ;
    return Band;
}());
exports.Band = Band;
var Radio = /** @class */ (function () {
    function Radio(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.price = price;
        this.songs = ["song1", "song2", "song3"];
        this.songIndex = 0;
    }
    Radio.prototype.play = function (song) {
        this.songIndex = this.songs.indexOf(song);
        console.log("Radio playing song " + song);
    };
    ;
    Radio.prototype.prev = function () {
        this.songIndex--;
        var song = this.songs[this.songIndex];
        console.log("Radio previous song " + song);
    };
    ;
    Radio.prototype.next = function () {
        this.songIndex++;
        var song = this.songs[this.songIndex];
        console.log("Radio next song " + song);
    };
    ;
    return Radio;
}());
exports.Radio = Radio;
