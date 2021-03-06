// src/graphql/typeDefs.js
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

  exports.typeDefs;