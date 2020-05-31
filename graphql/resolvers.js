import { videos, getPlaylist } from "../graphql/db"

export const resolvers = {
    Query: {
      video: () => videos(),
      playlist : (_, {title}) => getPlaylist(title)
    },
  }