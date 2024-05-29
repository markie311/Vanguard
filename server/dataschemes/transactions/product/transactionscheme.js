const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productstatusscheme = require('../../statuses/product/productstatusscheme');
const transactiondatescheme = require('../dates/transactiondatescheme');
const productspecificationscheme = require('../../product/product/productspecificationscheme');
const transactionmessagescheme = require('../../transactions/messages/transactionmessagescheme');

const transactionscheme = new Schema(
  {
  date: [transactiondatescheme],
  status: {
    current: [productstatusscheme],
    requested: [productstatusscheme],
    confirmedandtobedelivered: [productstatusscheme],
    delayed: [productstatusscheme],
    delivered: [productstatusscheme],
    confirmedasrecieved: [productstatusscheme]
  },
  transactionid: {
    type: "string"
  },
  transactiontype: {
    type: "string"
  },
  user: {
    authentications: {
      authenticationtype: {
        type: 'string'
      },
      privateauthenticationkey: {
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
          default: 0
          },
          lon:{
          type: 'number',
          default: 0
        },
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
           province:{
            type: 'string'
           },
           country: {
            type: 'string'
           },
           coordinates: {
             lat: {
              type: 'number',
              default: 0
             },
             lon: {
              type: 'number',
              default: 0
            }
           }
         }
      }
    },
  }, 
  messages: [transactionmessagescheme],
  products: {
   list: [],
   pricesbreakdown: {
    merchandise: {
    totalpayment: {
      type: 'number',
      default: 0
    },
    totalcapital:{
      type: 'number',
      default: 0
    },
    total_suggested_retail_price: {
      type: 'number',
      default: 0
    },
    totalvat: {
      type: 'number',
      default: 0
    },
    cargo: {
      fee: {
        type: 'number',
        default: 0
      }
    },
    payment: {
    funds: {
      deducted: {
        type: 'boolean',
        default: false
      },
      amount: {
        type: 'number',
        default: 0
      }
    },
    money: {
      deducted: {
        type: 'boolean',
        default: false
      },
      amount:  {
        type: 'number',
        default: 0
      }
    },
    totalpayment: {
      type: 'number',
      default: 0
    }
    }
    }
   },
  cargo: {
   cargotype: {
    type: 'string'
   },
   cargoexpress:{
    type: 'string'
   },
   weight: {
    type: 'number',
    default: 0
  },
   fee: {
    type: 'number',
    default: 0
  },
   locations: {
    destination: {
     street:  {
        type: 'string'
     },
     baranggay: {
        type: 'string'
     },
     city: {
        type: 'string'
     },
     province: {
        type: 'string'
     },
     country:{
        type: 'string'
     }
    },
    branch: {
     street: {
        type: 'string'
     },
     baranggay: {
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
  payments: {
    totalproductpayment: {
      type: 'number',
      default: 0
    },
    cargo:{
      type: 'number',
      default: 0
    }
  },
  transactiongiveaway: {
    purchaser: {
      type: 'number',
      default: 0
    },
    people: {
      type: 'number',
      default: 0
    },
    vanguard: {
      type: 'number',
      default: 0
    }
  } 
  }
});

module.exports = transactionscheme;