import {Instrument, ColorRadio} from "./enumsEx2";

export interface IPlay {
    play: (song: string) => void;
    next: () => void;
    prev: () => void;
}

export class Musician implements IPlay {
    private songs: string[] = ["song1", "song2", "song3"];
    private songIndex: number = 0;

    constructor(private name: string,
                private age: number,
                private instrument: Instrument) {
    }

    public play(song: string) {
        this.songIndex = this.songs.indexOf(song);
        console.log(`Musician playing song ${song}`)
    };

    public prev() {
        this.songIndex--;
        let song = this.songs[this.songIndex];
        console.log(`Musician previous song ${song}`)
    };

    public next() {
        this.songIndex++;
        let song = this.songs[this.songIndex];
        console.log(`Musician next song ${song}`)
    };
}


export class Band implements IPlay {
    private songs: string[] = ["song1", "song2", "song3"];
    private songIndex: number = 0;

    constructor(private name: string,
                private musicians: Musician[]) {
    }

    public play(song: string) {
        this.songIndex = this.songs.indexOf(song);
        console.log(`Band playing song ${song}`)
    };

    public prev() {
        this.songIndex--;
        let song = this.songs[this.songIndex];
        console.log(`Band previous song ${song}`)
    };

    public next() {
        this.songIndex++;
        let song = this.songs[this.songIndex];
        console.log(`Band next song ${song}`)
    };
}

export class Radio implements IPlay {
    private songs: string[] = ["song1", "song2", "song3"];
    private songIndex: number = 0;

    constructor(private brand: string,
                private color: ColorRadio,
                private price: number) {
    }

    public play(song: string) {
        this.songIndex = this.songs.indexOf(song);
        console.log(`Radio playing song ${song}`)
    };

    public prev() {
        this.songIndex--;
        let song = this.songs[this.songIndex];
        console.log(`Radio previous song ${song}`)
    };

    public next() {
        this.songIndex++;
        let song = this.songs[this.songIndex];
        console.log(`Radio next song ${song}`)
    };
}
