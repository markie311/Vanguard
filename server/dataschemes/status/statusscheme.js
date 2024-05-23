const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statusscheme = new Schema({
 status: {
  type: "string"
 },
 date: {
    type: "string"
 },
 message: {
  type: "string"
 }
});

module.exports = statusscheme;