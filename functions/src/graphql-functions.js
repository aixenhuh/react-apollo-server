const { GraphQLServer } = require('graphql-yoga');
const { resolvers } = require('./graphql/resolvers');

const typeDefs = `type Thumbnails {
  default : Image
  medium : Image
  high : Image
}
type Image {
  url : String!
  width : String!
  height: String!
}
type Video {
  channelId : String!
  searchTitle : String!
  title : String!
  description : String!
  channelTitle : String!
  thumbnails : Thumbnails
  videoId : String
}
type Query {
  video(playlistId:String!) : [Video]!
  playlist(title:String!) : [Video]!
}`;


const server = new GraphQLServer({ typeDefs, resolvers });


server.createHttpServer()


module.exports = server;