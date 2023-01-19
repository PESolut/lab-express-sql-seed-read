const db = require('../db/dbConfig');

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM seed")
        // console.log('test')
        return allSongs;
    } catch (error) {
        return error;
    }
}

const getSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM seed WHERE id=$1", id)
        // console.log(oneSong)
        return oneSong
    } catch (error) {
        return error;
    }
}

const createSong = async (song) => {
    try {
        const newSong = await db.one(
            "INSERT INTO seed (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [song.name, song.artist, song.album, song.time, song.is_favorite]
        )
        return newSong
    } catch (error) {
        return error
    }
}

module.exports = { getAllSongs, getSong, createSong }