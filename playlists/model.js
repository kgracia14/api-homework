const Sequelize = require('sequelize')
const sequelize = require('../db')
const User = require('../users/model')
const Song = require('../songs/model')


const Playlist = sequelize.define('playlists', {
    userId: {
        type: Sequelize.INTEGER,
        field: 'userId',
    },
    songId: {
        type: Sequelize.INTEGER,
        field: 'songId',
    },
    name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNull: false
      },  
    },
    {
    timestamps: false,
    tableName: 'playlists' })

Playlist.belongsTo(User)
Playlist.belongsTo(Song)

module.exports = Playlist
