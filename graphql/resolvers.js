import { videos, getPlaylist } from "../graphql/db"

export const resolvers = {
    Query: {
      video: (_, {playlistId}) => videos(playlistId),
      playlist : (_, {title}) => getPlaylist(title)
    },
  }