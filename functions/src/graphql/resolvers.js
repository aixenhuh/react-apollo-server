const { videos, getPlaylist } = require("../graphql/db");

exports.resolvers = {
  Query: {
    video: (_, { playlistId }) => videos(playlistId),
    playlist: (_, { title }) => getPlaylist(title)
  },
}