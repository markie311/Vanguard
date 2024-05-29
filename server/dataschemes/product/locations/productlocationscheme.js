const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productlocationscheme = new Schema({
street: {
    type: 'string'
},
baranggay: {
type: 'string'
},
trademark: {
    type: 'string'
},
city: {
    type: 'string'
},
province: {
    type: 'string'
},
country: {
    type: 'string'
}
});

module.exports = productlocationscheme;