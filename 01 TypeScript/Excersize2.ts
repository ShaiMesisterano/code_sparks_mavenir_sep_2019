interface IPlay {
    play: (song: string) => void;
    next: () => void;
    prev: () => void;
}

enum Instrument {
    Guitar,
    Drums,
    Buss,
    None
}

enum ColorRadio {
    Red,
    Blue,
    Yellow
}

class Musician implements IPlay {
    private songs: string[] = ["song1","song2","song3"];
    private songIndex:number = 0;

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


class Band implements IPlay {
    private songs: string[] = ["song1","song2","song3"];
    private songIndex:number = 0;

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

class Radio implements IPlay {
    private songs: string[] = ["song1","song2","song3"];
    private songIndex:number = 0;

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

let radio = new Radio("radio_101.7",ColorRadio.Yellow, 12);
radio.play("song2");
radio.prev();
radio.next();
radio.next();

console.log();

let mus = new Musician("mus1",23,Instrument.Guitar);
mus.play("song2");
mus.prev();
mus.next();
mus.next();

console.log();

let band = new Band("best_band", [
    new Musician("mus1",23,Instrument.Guitar),
    new Musician("mus2",21,Instrument.Buss),
    new Musician("mus3",20,Instrument.Drums),
    new Musician("mus4",19,Instrument.None),
]);

band.play("song2");
band.prev();
band.next();
band.next();
