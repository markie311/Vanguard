const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const upgradedregistrationsstatus = new Schema({
 date: {
    type: 'string'
 },
 status: {
    type: 'string'
 },
 type: {
    type: 'string'
 }
});

const upgradedregistrationsmessage = new Schema({
 date: {
    type: 'string'
 },
 status: {
    type: 'string'
 },
 payments: {
    amount: {
     type: 'number',
     default: 0,
    },
    currency: {
     type: 'string'
    },
    paymenttype: {
     type: 'string'
    }
 }
});

const upgradedregistrations = new Schema({
   date: {
    type: 'string'
   },
   status: [upgradedregistrationsstatus],
   registration: {
     type: {
        type: 'string'
     },
     registrationspan: {
        type: 'string'
     },
     authenticationspan: {
        type: 'string'
     }
   },
   messages: [upgradedregistrationsmessage]
})

module.exports= upgradedregistrations;