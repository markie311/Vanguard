const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productimagescheme = new Schema({
    displayimage: {
      type: 'string'
    }
});

module.exports = productimagescheme;