const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactiondatescheme = require('../../transactions/dates/transactiondatescheme.js');
const productlocationscheme = require('../locations/productlocationscheme.js');
const productimagescheme = require('../productimages/productimagescheme.js');
const productvideoscheme = require('../productvideos/productvideoscheme.js');


const productspecificationscheme = new Schema({
    productname: {
      type: 'string'
    },
    rapportname: {
      type: 'string'
    },
    definition: {
      type: 'string'
    },
    authentications: {
      producttype: {
        type: 'string'
      },
      productid: {
        type: 'string'
      },
    },
    details: {
    product: {
      name: {
        type: 'string'
      },
      rapportname: {
        type: 'string'
      },
      definition: {
        type: 'string'
      },
      category: {
        type: 'string'
      },
      specification: {
        for: {
        part: {
          type: 'string'
        },
        gender: {
          type: 'string'
        },
        category:{
          type: 'string'
        }
        },
        set: {
        set: {
          type: 'boolean',
          default: false
        },
        productindication: {
          type: 'string'
        },
        pcs: {
          type: 'number',
          default: 0
        }
        },
        size:  {
          type: 'boolean',
          default: 0
        },
        color:  {
          type: 'boolean',
          default: 0
        },
        weight:  {
          type: 'number',
          default: 0
        },
        top: {
          type: 'string'
        },
        left: {
          type: 'string'
        },
        bottom: {
          type: 'string'
        },
        right: {
          type: 'string'
        },
        front: {
          type: 'string'
        },
        back: {
          type: 'string'
        }
      },
      pricesbreakdown: {
        price: {
          type: 'number',
          default: 0
        },
        capital:{
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
      cybervisual: {
        images: {
          maindisplayimage: {
            type: 'string'
          },
          maindisplayimages: [productimagescheme]
        },
        videos: [productvideoscheme]
      }
    },
    locations: {
      operations: [productlocationscheme]
    }
    },
    system: {
     request: {
      pcs: {
        type: 'number',
        default: 0
      },
      orderspecification: {
        type: 'string'
      },
      merchandise: {
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
        },
      },
      shipping: {
        category: {
          type: 'string',
        },
        weight: {
          type: 'string'
        },
        fee: {
          type: 'number',
          default: 0
        }
      },
      totalpayment: {
        price:{
          type: 'number',
          default: 0
        }
      },
      products: []
     },
     stocks: [],
      purchase: {
        people: [],
        xirbit: []
      }
    }
});

module.exports = productspecificationscheme;