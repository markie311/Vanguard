const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datascheme = require('../data/datascheme');
const user = require('../user/usersscheme');
const productscheme = require('../product/product/productscheme');
const transactionscheme = require('../transactions/product/transactionscheme');
const moneyandfundstransactionscheme = require('../transactions/moneyandfunds/moneyandfundstransactionscheme.js');

const xirbitdatascheme = new Schema({
 _id: {
  type: 'string'
 },
 marketing: {
   products: {                                                                                                        
    merchandises: [transactionscheme],
    others: {
      load: [transactionscheme]
    }
   },
   requests: {
    merchandises: [transactionscheme],
    nonmernchandises: [transactionscheme],
    etc: {
      load: [transactionscheme]
    }
   },
   processing: [transactionscheme],
 },
 moneyandfunds: {
  request: {
    deposits: [transactionscheme],
    widthdrawals: [transactionscheme]
  },
  transactions: {
    deposits: [transactionscheme],
    widthdrawals: [transactionscheme]
  },
  processing: {
    deposits: [transactionscheme],
    widthdrawals: [transactionscheme]
  },
  people: {
    storedtransactiongiveaway: [transactionscheme]
  },
  credits: {
    deposits: [moneyandfundstransactionscheme],
    funds: [moneyandfundstransactionscheme],
    vanguard: [moneyandfundstransactionscheme],
    transactiongiveaway: {
      bank: {
        type: "number",
        default: 0
      }
    }
  }
 },
 people: [user],
 history: [transactionscheme]
})

module.exports = xirbitdatascheme;

{/*
{
  commonpublic: [user],
  public: [user],
  private: [user]
 },
*/}