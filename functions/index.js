const functions = require('firebase-functions');
const server = require('./src/graphql-functions');

exports.graphYoutubeServer = functions.https.onRequest(server.express);