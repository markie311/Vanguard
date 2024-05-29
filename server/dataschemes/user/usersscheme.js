const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionscheme = require('../transactions/product/transactionscheme');

const user = new Schema({
 authentications: {
  authenticationtype: {
    type: 'string'
  },
  authenticationid: {
    type: 'string'
  },
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
      }
    },
    shipment: {
      type: {
        type: 'string'
      },
      location: {
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
      }
    }
   },
 },
 moneyandfunds: {
  money: {
    amount: {
     type: 'number',
     default: 0
    },
    history: []
  },
  funds: {
    amount: {
     type: 'number',
     default: 0
    },
    history: []
  }
 },
 transactions: [transactionscheme],
 purchases: [transactionscheme]
})

module.exports= user;