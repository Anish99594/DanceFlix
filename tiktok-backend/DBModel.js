const mongoose = require("mongoose");

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    discription: String,
    shares: String
})

module.exports = mongoose.model('tiktokVideos', tiktokSchema);