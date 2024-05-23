const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datascheme = require('../data/datascheme');
const user = require('../user/usersscheme');
const productscheme = require('../product/productscheme');
const transactionscheme = require('../transactions/transactionscheme');

const xirbitdatascheme = new Schema({
 _id: {
  type: 'string'
 },
 marketing: {
   products: {                                                                                                        
    merchandises: [productscheme],
    nonmernchandises: [productscheme],
    etc: {
      load: [productscheme]
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
 },
 people: {
  commonpublic: [user],
  public: [user],
  private: [user]
 },
 history: [transactionscheme]
})

module.exports = xirbitdatascheme;