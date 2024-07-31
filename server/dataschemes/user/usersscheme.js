const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionscheme = require('../transactions/product/transactionscheme');
const contactscheme = require('../transactions/contact/contactscheme');
const privateauthenticationkey = require('../transactions/privateauthenticationkey/privateauthenticationkeyscheme');
const upgradedregistrations = require('../transactions/upgradedregistrations/upgradedregistrationsscheme');

const user = new Schema({
 authentications: {
  authenticationtype: {
    type: 'string'
  },
  authenticationid: {
    type: 'string'
  },
  privateauthenticationkey: [privateauthenticationkey],
  password: {
    set: {
      type: 'boolean',
      default: false
    },
    password: {
     type: 'string'
    }
  }
 },
 details: {
   surials: {
    firstname: {
     type: 'string'
    },
    middlename: {
     type: 'string'
    },
    lastname: {
     type: 'string'
    },
    nickname: {
     type: 'string'
    }
   },
   location: {
    address: {
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
      },
      coordinates: {
        lat: {
          type: 'number',
          default: 0,
        },
        lon: {
          type: 'number',
          default: 0,
        }
       }
    },
    shipment: {
      type: {
        type: 'string'
      },
      address: {
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
      },
      coordinates: {
        lat: {
          type: 'number',
          default: 0,
        },
        lon: {
          type: 'number',
          default: 0,
        }
       }
      }
    }
   },
   contact: [contactscheme]
 },
 moneyandfunds: {
  money: {
    amount: {
     type: 'number',
     default: 0
    },
    history: [transactionscheme]
  },
  funds: {
    amount: {
     type: 'number',
     default: 0
    },
    history: [transactionscheme]
  }
 },
 transactions: [transactionscheme],
 purchases: {
  current: [transactionscheme],
  last15days: [transactionscheme],
  history: [transactionscheme]
 },
 upgradedregistrations: [upgradedregistrations] 
})

module.exports= user;