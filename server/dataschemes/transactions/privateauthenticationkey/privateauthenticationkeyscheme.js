const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const privateauthenticationkeystatus = new Schema({
 date: {
    type: 'string'
 },
 status: {
    type: 'string'
 }
});

const privateauthenticationkeymessage = new Schema({
    date: {
       type: 'string'
    },
    message: {
       type: 'string'
    }
});

const privateauthenticationkey = new Schema({
   date: {
    type: 'string'
   },
   status: [privateauthenticationkeystatus],
   concern: {
    concern: {
     type: 'string'
    },
    messages: [privateauthenticationkeymessage]
   }
})

module.exports= privateauthenticationkey;