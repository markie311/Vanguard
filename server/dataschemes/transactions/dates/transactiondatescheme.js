const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productstatusscheme = require('../../statuses/product/productstatusscheme');

const transactiondatescheme = new Schema({
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

module.exports = transactiondatescheme;