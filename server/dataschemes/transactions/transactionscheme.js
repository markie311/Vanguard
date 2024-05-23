const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const statusscheme = require('../status/statusscheme');

const transactionscheme = new Schema({
 date: {
  proccessed: {
  type: "string"
 },
 submitted: {
 type: "string"
 }
 },
 transaction: {
  transactionid: {
  type: "string"
 },
  transactiontype: {
  type: "string" 
 }
 },
 status: {
  current: [statusscheme],
  requested: [statusscheme],
  confirmedandtobedelivered: [statusscheme],
  delayed: [statusscheme],
  delivered: [statusscheme],
  confirmedasrecieved: [statusscheme]
}, 
messages: [],
products: {
 pricesbreakdown: {
  productpayment: {
   type: "number",
   default: 0
  },
  cargotype: {
   type: "string"
  },
  cargoexpress: {
    type: "string"
  },
  cargofee: {
    type: "number",
    default: 0
  },
  weight: {
    type: "number",
    default: 0
  },
  totalpayment: {
    type: "number",
    default: 0
  }
 },
 list: []
}
});

module.exports = transactionscheme;