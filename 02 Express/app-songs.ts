import express, {request, response} from 'express';
import {songs} from "./data/songs";
import uuid from 'uuid';
import bodyParser from "body-parser";
import {ISong} from "./ISong";

const port = 5000;
const app = express();

const getIndexById = (arr: { id: string }[], id: string) => arr.findIndex(item => item.id === id);

app.use(bodyParser.json());

app.get('/songs', (req: express.Request, res: express.Response): express.Response => {
    let sortField: string | null = null;

    if (req && req.query && req.query.sort) {
        sortField = req.query.sort;
    }

    let answer: ISong[] = JSON.parse(JSON.stringify(songs));

    if (sortField && (sortField in songs[0])) {
        answer.sort((a, b) => (a.title > b.title) ? 1 : -1)
    }

    return res.json(answer)
});


app.post('/songs', (req, res) => {
    const newSongId: string = uuid();
    let newSongTitle: string = "";
    let newSongSinger: string = "";
    let newSongWords: string = "";
    if (req && req.body
        && req.body.title
        && req.body.singer
        && req.body.words) {
        newSongTitle = req.body.title;
        newSongSinger = req.body.singer;
        newSongWords = req.body.words;
    }
    console.log("req.body:", req.body);

    if (newSongTitle) {
        songs.push({
            id: newSongId,
            title: newSongTitle,
            singer: newSongSinger,
            words: newSongWords
        });
        res.json({
            status: "success"
        });
    } else {
        res.json({
            status: "error"
        })
    }
});

app.delete('/songs/:songId', (req, res) => {
    const songId: string = req.params.songId;
    const songIndex = getIndexById(songs, songId);
    if (songIndex > -1) {
        songs.splice(songIndex, 1);
        res.json({
            status: "success"
        });
    } else {
        res.json({
            status: "error"
        });
    }
});


app.put('/songs/:songId', (req, res) => {
    const songId: string = req.params.songId;
    const songIndex = getIndexById(songs, songId);

    if (songs[songIndex] !== undefined) {
        songs[songIndex].title = req.body.title;
        songs[songIndex].singer = req.body.singer;
        songs[songIndex].words = req.body.words;

        res.json({
            status: "success"
        });
    } else {
        res.json({
            status: "error"
        });
    }
});


app.listen(port, () => console.log("Server is running"));
