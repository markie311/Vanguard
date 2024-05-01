const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productscheme = require('../product/productscheme.js');

const locations = new Schema({
 street:  {
  type: 'string'
 },
 baranggay:  {
  type: 'string'
 },
 trademark:  {
  type: 'string'
 },
 city:  {
  type: 'string'
 },
 province:  {
 type: 'string'
 },
 country:  {
 type: 'string'
 }
})

const operations = new Schema({
 product: {
  type: 'string',
 },
 operations: [locations]
})

const datascheme = new Schema({
 request: {
  asked: {
   type: 'string'
  },
  auhentication: {
   type: 'string'
  }
 },
 authentication: {
  transactionid: {
    type: 'string'
  },
  userprivateauthenticationid: {
   type: 'string'
  }
 },
 status: {
  now: {
   type: 'boolean',
   default: false
  },
  recent: {
    type: 'boolean',
    default: false
  }
 },
 user: {
  userauthenticationid: {
    type: 'string'
  },
 },
 location: {
  user: {
   street:  {
    type: 'string'
   },
   baranggay:  {
     type: 'string'
   },
   trademark:  {
     type: 'string'
   },
   city:  {
     type: 'string'
   },
   province:  {
     type: 'string'
   },
   country:  {
     type: 'string'
   }
  },
  destination: {
    street:  {
      type: 'string'
     },
     baranggay:  {
       type: 'string'
     },
     trademark:  {
       type: 'string'
     },
     city:  {
       type: 'string'
     },
     province:  {
       type: 'string'
     },
     country:  {
       type: 'string'
     }
  },
  operations: [operations]
 },
 message: {
  subject: {
    type: 'string'
  },
  message: {
   type: 'string'
  }
 },
 data: {
  specifications: {
   nonmrn: {
    type: 'number',
    default: 0
   },
   mrn: {
    type: 'number',
    default: 0
   }
  },
  pricesbreakdown: {
   price: {
    type: 'number',
    default: 0
   },
  capital: {
   type: 'number',
   default: 0
  },
  suggested_retail_price: {
   type: 'number',
   default: 0
  },
  vat: {
   type: 'number',
   default: 0
  }
  },
  express: {
   type: {
    type: 'string'
   },
   nonmrn: {
     totalweight: {
      type: 'number',
      default: 0
     },
     rate: {
      type: 'number',
      default: 0
     }
   },
   mrn: {
     totalweight: {
      type: 'number',
      default: 0
     },
     rate: {
      type: 'number',
      default: 0
     }
   },
   totalrate: {
     type: 'number',
     default: 0
   }
  },
  products: [productscheme] 
 } 
})

module.exports = datascheme;