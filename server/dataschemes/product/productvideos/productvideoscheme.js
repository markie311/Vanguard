const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const producvideoscheme = new Schema({
 youtubelink: {
  type: 'string'
 }
});

module.exports = producvideoscheme;