const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactiondatescheme = require('../../transactions/dates/transactiondatescheme.js');
const productlocationscheme = require('../locations/productlocationscheme');
const productimagescheme = require('../productimages/productimagescheme');
const productvideoscheme = require('../productvideos/productvideoscheme');

{/*
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
*/}

//// new

const transactionproductspecificationscheme = new Schema({
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

const productscheme = new Schema({
productname: {
  type: "string"
},
rapportname: {
  type: 'string'
},
definition: {
  type: "string"
},
authentications: {
  producttype: {
  type: "string"
},
  productid: {
  type: "string"
},
},
specification: {
for: {
part: {
 type: 'string'
},
gender: {
  type: 'string'
},
category: {
  type: 'string'
 }
},
specifications: [transactionproductspecificationscheme]
});


module.exports = productscheme;
