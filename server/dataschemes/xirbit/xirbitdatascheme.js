const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datascheme = require('../data/datascheme');
const user = require('../user/usersscheme');

const xirbitdatascheme = new Schema({
 _id: {
  type: 'string'
 },
 marketing: [],
 moneyandfunds: [],
 requests: {
  now: {
    deposits: {
      count: {
        type: 'number'
      },
      data: [datascheme]
    },
    widthdrawals: {
     count: {
       type: 'number'
     },
     data: [datascheme]
    },
    requests: {
      count: {
       type: 'number',
       default: 0
      },
      data: [datascheme]
    }
  },
  recent: {
   passedtorecent: {
     count: {
      type: 'number',
      default: 0
     },
     data: [datascheme]
   },
   completeddeposits: {
    count: {
     type: 'number'
    },
    data: [datascheme]
    },
    completedwidthdrawals: {
     count: {
      type: 'number'
     },
     data: [datascheme]
    },
    recentrequests: {
     count: {
      type: 'number'
     },
     data: [datascheme]
    }
  },
  completion: {
   now: {
   deposits: {
     type: 'number'
   },
   widthdrawals: {
    type: 'number'
   },
   requests: {
    type: 'number'
   }
   },
   recent: {
    deposits: {
      type: 'number'
    },
    widthdrawals: {
     type: 'number'
    },
    requests: {
     type: 'number'
    }
  }
  }
 },
 transactions: [],
 people: [user],
 processing: [],
 history: []
})

module.exports = xirbitdatascheme;