const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const youtubekey = process.env.YOUTUBEKEY;
exports.videos = async (playlistId) => {
    console.log(playlistId);
    var array = [];
    const { data : { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${youtubekey}&maxResults=10`)

    for(var item of items) {
        array.push(item.snippet);
    }
    console.log(array);
    return array;
}

exports.getPlaylist = async (title) => {
    var array = [];
    const { data : { items } } = await axios.get(encodeURI(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title}&key=${youtubekey}&maxResults=10`))

    for(var item of items) {
        array.push({
            ...item.id,
            ...item.snippet}
            );
    }
    console.log(array);
    return array;
}