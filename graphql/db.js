import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const youtubekey = process.env.YOUTUBEKEY;
export const videos = async (playlistId) => {
    console.log(playlistId);
    var array = [];
    const { data : { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${youtubekey}&maxResults=10`)

    for(var item of items) {
        array.push(item.snippet);
    }
    console.log(array);
    return array;
}

export const getPlaylist = async (title) => {
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