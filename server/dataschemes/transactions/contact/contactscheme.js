const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactiondatescheme = require('../dates/transactiondatescheme');

const contactscheme = new Schema({
provider: {
 type: 'string'
},
type: {
 type: "string"
},
number: {
 type: 'string'
},
date: [transactiondatescheme]
});

module.exports = contactscheme;