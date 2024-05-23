const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const operations = new Schema({
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

const stocksscheme = new Schema({
authentications: {
  producttype: {
  type: 'string'
  },
  productid: {
  type: 'string'
  },
},
set: {
  isaset: {
  type: {
    type: 'string'
  },
  pcs: {
    type: 'number',
    default: 0
  }  
  },
  setquencenumber: {
  type: 'number',
  default: 0
  },
products: []
},
locations: {
  operations: [operations]
},
details: {
  product: {
  name: {
    type: 'string'
  },
  rapportname: {
    type: 'string'
  },
  definetion: {
    type: 'string'
  },
  specifications: {
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
    }
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
  }
},
system: {
  stocks: []
},
purchases: {
  people: [],
  xirbit: []
}
});

const orderresponse = new Schema({
  type: 'string'
})

const displayimage = new Schema({
  displayimage: {
    type: 'string'
  }
})

const order = new Schema({
 request: {
  part: {
    type: 'string'
  },
  size: {
    type: 'string'
  },
  color: {
    type: 'string'
  },
  weight: {
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
  }
 },
 message: {
  status: {
    type: 'string'
  },
  response: [orderresponse]
 },
 image: [displayimage]
})

const stocks = new Schema({
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
  },
  currentstockpcs: {
    type: 'number',
    default: 0
  }
})

const productsscheme = new Schema({
 authentications: {
  producttype: {
   type: 'string'
  },
  productid: {
   type: 'string'
  },
 },
 set: {
  isaset: {
   type: {
    type: 'string' // promo or packed set
   },
   pcs: {
    type: 'number',
    default: 0
   }  
  },
  setquencenumber: {
   type: 'number',
   default: 0
  },
  products: []
 },
 locations: {
  operations: [operations]
 },
 details: {
  product: {
   xirbitcategory: {
     type: 'string'
   },
   name: {
    type: 'string'
   },
   rapportname: {
    type: 'string'
   },
   definition: {
    type: 'string'
   },
   specifications: {
    part: {
     type: 'string'
    },
    size: {
      type: 'string'
    },
    color: {
     type: 'string'
    },
    weight: {
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
  }
 },
 cybervisual: {
   images: {
    maindisplayimage: {
      type: 'string'
    },
    main: [displayimage],
    selection: [displayimage]
   },
   videos: {
    youtubelink: {
      type: 'string'
    }
   }
 },
 system: {
  order: [order],
  stocks: [stocks],
  purchases: {
  people: [],
  xirbit: []
  }
 }
});

/// sysmte detection / with parts 
const productscheme = new Schema({
 authentications: {
  producttype: {
   type: 'string'
  },
  productid: {
   type: 'string'
  },
 },
 set: {
  isaset: {
   type: {
    type: 'string' // promo or packed set
   },
   pcs: {
    type: 'number',
    default: 0
   }  
  },
  setquencenumber: {
   type: 'number',
   default: 0
  },
  products: [productsscheme]
 },
 locations: {
  operations: [operations]
 },
 details: {
  product: {
   xirbitcategory: {
     type: 'string'
   },
   name: {
    type: 'string'
   },
   rapportname: {
    type: 'string'
   },
   definition: {
    type: 'string'
   },
   specifications: {
    part: {
     type: 'string'
    },
    size: {
      type: 'string'
    },
    color: {
     type: 'string'
    },
    weight: {
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
  }
 },
 cybervisual: {
   images: {
    maindisplayimage: {
      type: 'string'
    },
    main: [displayimage],
    selection: [displayimage]
   },
   videos: {
    youtubelink: {
      type: 'string'
    }
   }
 },
 system: {
  order: [order],
  stocks: [stocks],
  purchases: {
  people: [],
  xirbit: []
  }
 }
});

module.exports = productscheme;
