const { Router } = require('express')
const Song = require('./model')
const Playlist = require('../playlists/model')


const router = new Router()


router.post('/playlists/:id/songs', (req, res, next) => {
    Playlist
    .findById(req.params.id)
    .then(() => {
        Song
		.create({
		  title: req.body.title,
		  artist: req.body.artist,
		  album: req.body.album,
		  playlistId: req.params.id
		})
        .then(song => {
			if (!song) {
				return res.status(404).send({
				message: `Song does not exist`
				})
			}
			return res.status(201).send(song)
		})
			.catch(error => next(error))
		})
    
})

module.exports = router