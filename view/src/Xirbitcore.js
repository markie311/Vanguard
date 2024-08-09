import React, {
  useState,
  useEffect
} from 'react';

import { Routes, 
         Route,
         useLocation,
         useNavigate
        } from 'react-router-dom';

import { Container } from 'react-bootstrap';


import './styles/xirbitcore/xirbitcore.scss';

import axiosCreatedInstance from './components/lib/axiosutil.js';
import { timestamp } from './components/lib/timestamps';

import LandingPage from './components/landingpage/landingpage-component.js';
import XirbitMarketing from './components/xirbitmarketing/xirbitmarketing-component.js';
import Marketing from './components/marketing/items/marketing-component.js';
import DatabaseLogin from './components/database/databaselogin-component.js';
import Database  from './components/database/database-component.js';
import Office from './components/office/office-component.js';
import Purchasing from './components/purchasing/purchasing-component.js'
import VanguardPorttfolio from './components/portfolios/vanguardportfolio-component.js';
import RegistrationsAssistance from './components/teller/registrationsassistance-component.js';

import  barpercentagecalculation from './components/lib/barmovementpercentagecalculation.js';

function VanguardCore() {

const location = useLocation();
const $xsviewport= window.matchMedia('(max-width: 600px)');
const $mdviewport = window.matchMedia('(min-width: 992px)');
const $lgviewport = window.matchMedia('(min-width: 1200px)');

const [viewport, viewportcb] = useState('xs');

const [maintenance, maintenancecb] = useState(true);

const [welcomeinmtroductionmesssage, welcomeinmtroductionmesssagecb] = useState("commonpublicaccountactivation");
const [welcomeintroductiontopprop, welcomeintroductiontoppropcb] = useState("-100vh");
const [welcomeintroductionopacityprop, welcomeintroductionopacitypropcb] = useState("-100vh");

const [landingpagenavigationbargraphwidthproperty, landingpagenavigationbargraphwidthpropertycb] = useState('90%');
const [landingpagenavigationbargraphleftproperty, landingpagenavigationbargraphleftpropertycb] = useState('-100%'); 

const [landingpagedepositnavigationleftproperty, landingpagedepositnavigationleftpropertycb] = useState('-100%');

const [landingpagewidthdrwalnavigationwidthproperty, landingpagewidthdrwalnavigationwidthpropertycb] = useState('90%');
const [landingpagewidthdrwalnavigationleftproperty, landingpagewidthdrwalnavigationleftpropertycb] = useState('-90%');

const [uidata, uidatacb] = useState({
});

const [databasedata, databasedatacb] = useState({
  _id: 'Null',
  marketing: [],
  moneyandfunds: [],
  requests: {
   now: {
    deposits: {
     count: 0,
     data: []
    },
    widthdrawals: {
     count: 0,
     data: []
    },
    requests: {
     count: 1,
     data: [
       {
        request: {
          asked: 'Requesting now',
          authentication: 'Public'
        },
        authentication: {
          transactionid: '12sadasdasd123asd',
         _userprivateauthenticationid: 'asd123asd123asd'
        },
        status: {
          now: true,
          recent: false
        },
        user: {
          userauthenticationid: 'asd123asdas',
        },
        location: {
          user: {
          street:  'street',
          baranggay:  'baranggay',
          trademark:  'trademark',
          city:  'city',
          province: 'province',
          country:  'country'
          },
          destination: {
          street:  'street',
          baranggay:  'baranggay',
          trademark:  'trademark',
          city:  'city',
          province: 'province',
          country:  'country'
          },
          operations: [
          {
            street:  'street',
            baranggay:  'baranggay',
            trademark:  'trademark',
            city:  'city',
            province: 'province',
            country:  'country'
          }
          ]
        },
        message: {
          subject: 'Request to purchase',
          message: 'Message',
        },
        data: {
          specifications: {
          nonmrn: 1,
          mrn: 0,
          },
          pricesbreakdown: {
           price: 10,
           capital: 8,
           suggested_retail_price: 10,
           vat: 2
          },
          express: {
           type: 'Delivery',
           nonmrn: {
            totalweight: 456,
            rate: 10
           },
           mrn: {
            totalweight: 456,
            rate: 10
           },
           totalrate: 800
          },
          products: [
          {
            authentications: {
              producttype: 'Mrn',
              productid: 'Product id'
            },
            set: {
                isaset: {
                type: 'String',
                pcs: 0
                },
                setquencenumber: 0,
                products: []
            },
            locations: {
              operations: [
                {
                street: 'street',
                baranggay: 'baranggay',
                trademark: 'trademark',
                city: 'city',
                province: 'province',
                country: 'country'
              }
              ]
            },
            details: {
              product: {
               xirbitcategory: 'Non-mrn',
               name: 'Product name',
               rapportname: 'String',
               definetion: 'String',
               specifications: {
                part: 'String',
                size: 'String',
                color: 'String',
                weight: 0,
                top: 'String',
                left: 'String',
                bottom: 'String',
                right: 'String'
               }
              },
              pricesbreakdown: {
              price: 10,
              capital: 8,
              suggested_retail_price: 10,
              vat: 2
              }
            },
            cybervisual: {
              images: {
              maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
              main: [
                {
                  displayimage: '../images/landingpage/bondpaperimage.jpg'
                }
              ],
              selection: [
                {
                  displayimage: '../images/landingpage/bondpaperimage.jpg'
                }
              ]
              },
              videos: {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              }
            },
            system: {
              order: [],
              stocks: [
              {
                authentications: {
                producttype: 'Mrn',
                productid: 'Product id'
                },
                set: {
                  isaset: {
                    type: 'String',
                    pcs: 0
                  },
                  setquencenumber: 0,
                  products: []
                },
                locations: {
                  operations: [
                  {
                  street: 'street',
                  baranggay: 'baranggay',
                  trademark: 'trademark',
                  city: 'city',
                  province: 'province',
                  country: 'country'
                  }
                ]
                },
                details: {
                  product: {
                    name: 'String',
                    rapportname: 'String',
                    definetion: 'String',
                    specifications: {
                    part: 'Hat',
                    size: 'sm',
                    color: 'red',
                    weight: 0,
                    top: 'String',
                    left: 'String',
                    bottom: 'String',
                    right: 'String'
                    }
                  },
                  pricesbreakdown: {
                    price: 10,
                    capital: 8,
                    suggested_retail_price: 10,
                    vat: 2
                  }
                },
                cybervisual: {
                images: {
                  maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                  main: [
                  {
                    displayimage: '../images/landingpage/bondpaperimage.jpg'
                  }
                  ],
                  selection: [
                  {
                    displayimage: '../images/landingpage/bondpaperimage.jpg'
                  }
                  ]
                },
                videos: {
                  youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                }
                },
                system: {
                  order: [],
                  stocks: [],
                  purchases: {
                  people: [],
                  xirbit: []
                  }
                }
              }
              ],
              purchases: {
              people: [],
              xirbit: []
              }
            }
          }
          ]
        }
       }
     ]
    },
    passedtorecent: {
      count: 0,
      data: []
    },
    delayed: {
      count: 0,
      data: []
    }
   },
   recent: {
    completeddeposits: {
      count: 0,
      data: []
    },
    completedwidthdrawals: {
       count: 0,
       data: []
    },
    recentrequests: {
      count: 0,
      data: []
    },
    delayedrequests: {
      count: 0,
      data: []
    }
   },
   processing: [],
   completion: {
     now: {
     deposits: 0,
     widthdrawals: 0,
     requests: 0
     },
     recent: {
      deposits: 0,
      widthdrawals: 0,
      requests: 0
    }
   }
  },
  transactions: [],
  people: [],
  processing: [],
  history: []
});

const [user, usercb] = useState({
  authentications: {
   authenticationtype: 'Practicing',
   privateauthenticationkey: 'Privateauthenticationkeysample',
   authenticationid: '1722868338756-m9Z2hw6P-FGH',
   password: {
    set: false,
    password: 'password'
   }
  },
  details: {
   surials: {
    firstname: 'Practicing account firstname' ,
    middlename: 'Practicing account middlename',
    lastname: 'Practicing account lastname',
    nickname: 'Practicing account nickname',
   },
   location: {
     address: {
      street: 'Your current street address',
      baranggay: 'Your current baranggay address',
      trademark: 'Your current trademark address',
      city: 'Your current city address',
      province: 'Your current province address',
      country: 'Your current country address',
      coordinates: {
       lat: 0,
       lon: 0
      }
     },
     shipment: {
       type: '',
       address: {
         street: '',
         baranggay: '',
         trademark: '',
         city: '',
         province: '',
         country: '',
         coordinates: {
           lat: 0,
           lon: 0
         }
       }
     }
   },
   contact: [
    {
     provider: "TM",
     type: "Phone number",
     number: "09539959025",
     date: [
      {
       status: "Configured",
       date: "123-123-123",
       message: "New contact number added/TM"
      } 
     ]
    }
   ]
  },
  moneyandfunds: {
   money: {
    amount: 200,
    history: []
  },
  funds: {
   amount: 100,
   history: []
  }   
  },
  transactions: [
   {
      date: [
        {
        status: "Purchasing details submitted",  
        date: "1111-1111-111",
        message: "All date are to purchase are gathered",
      }
    ],
      status: {
        current: [],
        requested: [],
        confirmedandtobedelivered: [],
        delayed: [],
        delivered: [],
        confirmedasrecieved: []
      },
      transactionid: "",
      transactiontype: "Practicing",
      user: {
        authentications: {
          authenticationtype: 'Public',
          privateauthenticationkey: 'Privateauthenticationkey',
          authenticationid: '1699791814794-KiSYbr8W',
          password: {
          set: false,
          password: 'String'
          }
        },
        details: {
          surials: {
          firstname: 'Commoner 1 FIRST NAME' ,
          middlename: 'Commoner 1 MIDDLE NAME',
          lastname: 'Commoner 1 LAST NAME',
          nickname: 'Commoner 1 NICKNAME',
          },
          location: {
            address: {
            street: 'Current address',
            baranggay: 'Current address',
            trademark: 'Current address',
            city: 'Current address',
            province: 'Current address',
            country: 'Current address',
            coordinates: {
              lat: 0,
              lon: 0
            }
            },
            shipment: {
              type: 'Delivery',
              address: {
                street: '',
                baranggay: '',
                trademark: '',
                city: '',
                province: '',
                country: '',
                coordinates: {
                  lat: 0,
                  lon: 0
                }
              }
            }
          },
        }
      }, 
      messages: [
      {
        status: "Purchasing details submitted",  
        date: "1111-1111-111",
        message: "All date are to purchase are gathered",
        }
      ],
      products: {
        list: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        pricesbreakdown: {
        merchandise: {
        totalpayment: 0,
        totalcapital: 0,
        total_suggested_retail_price:0,
        totalvat: 0,
        },
        cargo: {
          fee: 0
        },
        payment: {
        funds: {
          deducted: false,
          amount: 0,
        },
        money: {
          deducted: false,
          amount: 0
        },
        totalpayment: 0
        }
      }
      },
      cargo: {
        cargotype: "",
        cargoexpress: "",
        weight: 0,
        fee: 0,
        locations: {
        destination: {
          street: "",
          baranggay: "Maa",
          city: "",
          province: "",
          country: "",
        },
        branch: {
          street: "",
          baranggay: "",
          city: "",
          province: "",
          country: "",
        }
        }
      },
      payments: {
        totalproductpayment: 0,
        cargo: 0
      },
      transactiongiveaway: {
        purchaser: 0,
        people: 0,
        vanguard: 0
      } 
   },
   {
      date: [{
        status: "Purchasing details submitted",  
        date: "1111-1111-111",
        message: "All date are to purchase are gathered",
      }],
      status: {
        current: [],
        requested: [],
        confirmedandtobedelivered: [],
        delayed: [],
        delivered: [],
        confirmedasrecieved: []
      },
      transactionid: "",
      transactiontype: "Practicing",
      user: {
        authentications: {
          authenticationtype: 'Public',
          privateauthenticationkey: 'Privateauthenticationkey',
          authenticationid: '1699791814794-KiSYbr8W',
          password: {
          set: false,
          password: 'String'
          }
        },
        details: {
          surials: {
          firstname: 'Commoner 1 FIRST NAME' ,
          middlename: 'Commoner 1 MIDDLE NAME',
          lastname: 'Commoner 1 LAST NAME',
          nickname: 'Commoner 1 NICKNAME',
          },
          location: {
            address: {
            street: 'Current address',
            baranggay: 'Current address',
            trademark: 'Current address',
            city: 'Current address',
            province: 'Current address',
            country: 'Current address',
            coordinates: {
              lat: 0,
              lon: 0
            }
            },
            shipment: {
              type: 'Delivery',
              address: {
                street: '',
                baranggay: '',
                trademark: '',
                city: '',
                province: '',
                country: '',
                coordinates: {
                  lat: 0,
                  lon: 0
                }
              }
            }
          },
        },
      }, 
      messages: [
      {
        status: "Purchasing details submitted",  
        date: "1111-1111-111",
        message: "All date are to purchase are gathered",
        }
      ],
      products: {
        list: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
        pricesbreakdown: {
        merchandise: {
        totalpayment: 0,
        totalcapital: 0,
        total_suggested_retail_price:0,
        totalvat: 0,
        },
        cargo: {
          fee: 0
        },
        payment: {
        funds: {
          deducted: false,
          amount: 0,
        },
        money: {
          deducted: false,
          amount: 0
        },
        totalpayment: 0
        }
      }
      },
      cargo: {
        cargotype: "",
        cargoexpress: "",
        weight: 0,
        fee: 0,
        locations: {
        destination: {
          street: "",
          baranggay: "Trinidad",
          city: "",
          province: "",
          country: "",
        },
        branch: {
          street: "",
          baranggay: "",
          city: "",
          province: "",
          country: "",
        }
        }
      },
      payments: {
        totalproductpayment: 0,
        cargo: 0
      },
      transactiongiveaway: {
        purchaser: 0,
        people: 0,
        vanguard: 0
      } 
   }
  ],
  purchases: {
    current: [
      {
        date: [
          {
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
        }
        ],
        status: {
          current: [],
          requested: [],
          confirmedandtobedelivered: [],
          delayed: [],
          delivered: [],
          confirmedasrecieved: []
        },
        transactionid: "",
        transactiontype: "Practicing",
        user: {
          authentications: {
            authenticationtype: 'Public',
            privateauthenticationkey: 'Privateauthenticationkey',
            authenticationid: '1699791814794-KiSYbr8W',
            password: {
            set: false,
            password: 'String'
            }
          },
          details: {
            surials: {
            firstname: 'Commoner 1 FIRST NAME' ,
            middlename: 'Commoner 1 MIDDLE NAME',
            lastname: 'Commoner 1 LAST NAME',
            nickname: 'Commoner 1 NICKNAME',
            },
            location: {
              address: {
              street: 'Current address',
              baranggay: 'Current address',
              trademark: 'Current address',
              city: 'Current address',
              province: 'Current address',
              country: 'Current address',
              coordinates: {
                lat: 0,
                lon: 0
              }
              },
              shipment: {
                type: 'Delivery',
                address: {
                  street: '',
                  baranggay: '',
                  trademark: '',
                  city: '',
                  province: '',
                  country: '',
                  coordinates: {
                    lat: 0,
                    lon: 0
                  }
                }
              }
            },
          }
        }, 
        messages: [
        {
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
          }
        ],
        products: {
          list: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
          pricesbreakdown: {
          merchandise: {
          totalpayment: 0,
          totalcapital: 0,
          total_suggested_retail_price:0,
          totalvat: 0,
          },
          cargo: {
            fee: 0
          },
          payment: {
          funds: {
            deducted: false,
            amount: 0,
          },
          money: {
            deducted: false,
            amount: 0
          },
          totalpayment: 0
          }
        }
        },
        cargo: {
          cargotype: "",
          cargoexpress: "",
          weight: 0,
          fee: 0,
          locations: {
          destination: {
            street: "",
            baranggay: "Maa",
            city: "",
            province: "",
            country: "",
          },
          branch: {
            street: "",
            baranggay: "",
            city: "",
            province: "",
            country: "",
          }
          }
        },
        payments: {
          totalproductpayment: 0,
          cargo: 0
        },
        transactiongiveaway: {
          purchaser: 0,
          people: 0,
          vanguard: 0
        } 
      },
      {
        date: [{
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
        }],
        status: {
          current: [],
          requested: [],
          confirmedandtobedelivered: [],
          delayed: [],
          delivered: [],
          confirmedasrecieved: []
        },
        transactionid: "",
        transactiontype: "Practicing",
        user: {
          authentications: {
            authenticationtype: 'Public',
            privateauthenticationkey: 'Privateauthenticationkey',
            authenticationid: '1699791814794-KiSYbr8W',
            password: {
            set: false,
            password: 'String'
            }
          },
          details: {
            surials: {
            firstname: 'Commoner 1 FIRST NAME' ,
            middlename: 'Commoner 1 MIDDLE NAME',
            lastname: 'Commoner 1 LAST NAME',
            nickname: 'Commoner 1 NICKNAME',
            },
            location: {
              address: {
              street: 'Current address',
              baranggay: 'Current address',
              trademark: 'Current address',
              city: 'Current address',
              province: 'Current address',
              country: 'Current address',
              coordinates: {
                lat: 0,
                lon: 0
              }
              },
              shipment: {
                type: 'Delivery',
                address: {
                  street: '',
                  baranggay: '',
                  trademark: '',
                  city: '',
                  province: '',
                  country: '',
                  coordinates: {
                    lat: 0,
                    lon: 0
                  }
                }
              }
            },
          },
        }, 
        messages: [
        {
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
          }
        ],
        products: {
          list: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
          pricesbreakdown: {
          merchandise: {
          totalpayment: 0,
          totalcapital: 0,
          total_suggested_retail_price:0,
          totalvat: 0,
          },
          cargo: {
            fee: 0
          },
          payment: {
          funds: {
            deducted: false,
            amount: 0,
          },
          money: {
            deducted: false,
            amount: 0
          },
          totalpayment: 0
          }
        }
        },
        cargo: {
          cargotype: "",
          cargoexpress: "",
          weight: 0,
          fee: 0,
          locations: {
          destination: {
            street: "",
            baranggay: "Trinidad",
            city: "",
            province: "",
            country: "",
          },
          branch: {
            street: "",
            baranggay: "",
            city: "",
            province: "",
            country: "",
          }
          }
        },
        payments: {
          totalproductpayment: 0,
          cargo: 0
        },
        transactiongiveaway: {
          purchaser: 0,
          people: 0,
          vanguard: 0
        } 
      }
    ],
    last15days: [
      {
        date: [
          {
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
        }
      ],
        status: {
          current: [],
          requested: [],
          confirmedandtobedelivered: [],
          delayed: [],
          delivered: [],
          confirmedasrecieved: []
        },
        transactionid: "",
        transactiontype: "Practicing",
        user: {
          authentications: {
            authenticationtype: 'Public',
            privateauthenticationkey: 'Privateauthenticationkey',
            authenticationid: '1699791814794-KiSYbr8W',
            password: {
            set: false,
            password: 'String'
            }
          },
          details: {
            surials: {
            firstname: 'Commoner 1 FIRST NAME' ,
            middlename: 'Commoner 1 MIDDLE NAME',
            lastname: 'Commoner 1 LAST NAME',
            nickname: 'Commoner 1 NICKNAME',
            },
            location: {
              address: {
              street: 'Current address',
              baranggay: 'Current address',
              trademark: 'Current address',
              city: 'Current address',
              province: 'Current address',
              country: 'Current address',
              coordinates: {
                lat: 0,
                lon: 0
              }
              },
              shipment: {
                type: 'Delivery',
                address: {
                  street: '',
                  baranggay: '',
                  trademark: '',
                  city: '',
                  province: '',
                  country: '',
                  coordinates: {
                    lat: 0,
                    lon: 0
                  }
                }
              }
            },
          }
        }, 
        messages: [
        {
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
          }
        ],
        products: {
          list: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
          pricesbreakdown: {
          merchandise: {
          totalpayment: 0,
          totalcapital: 0,
          total_suggested_retail_price:0,
          totalvat: 0,
          },
          cargo: {
            fee: 0
          },
          payment: {
          funds: {
            deducted: false,
            amount: 0,
          },
          money: {
            deducted: false,
            amount: 0
          },
          totalpayment: 0
          }
        }
        },
        cargo: {
          cargotype: "",
          cargoexpress: "",
          weight: 0,
          fee: 0,
          locations: {
          destination: {
            street: "",
            baranggay: "Maa",
            city: "",
            province: "",
            country: "",
          },
          branch: {
            street: "",
            baranggay: "",
            city: "",
            province: "",
            country: "",
          }
          }
        },
        payments: {
          totalproductpayment: 0,
          cargo: 0
        },
        transactiongiveaway: {
          purchaser: 0,
          people: 0,
          vanguard: 0
        } 
      },
      {
        date: [{
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
        }],
        status: {
          current: [],
          requested: [],
          confirmedandtobedelivered: [],
          delayed: [],
          delivered: [],
          confirmedasrecieved: []
        },
        transactionid: "",
        transactiontype: "Practicing",
        user: {
          authentications: {
            authenticationtype: 'Public',
            privateauthenticationkey: 'Privateauthenticationkey',
            authenticationid: '1699791814794-KiSYbr8W',
            password: {
            set: false,
            password: 'String'
            }
          },
          details: {
            surials: {
            firstname: 'Commoner 1 FIRST NAME' ,
            middlename: 'Commoner 1 MIDDLE NAME',
            lastname: 'Commoner 1 LAST NAME',
            nickname: 'Commoner 1 NICKNAME',
            },
            location: {
              address: {
              street: 'Current address',
              baranggay: 'Current address',
              trademark: 'Current address',
              city: 'Current address',
              province: 'Current address',
              country: 'Current address',
              coordinates: {
                lat: 0,
                lon: 0
              }
              },
              shipment: {
                type: 'Delivery',
                address: {
                  street: '',
                  baranggay: '',
                  trademark: '',
                  city: '',
                  province: '',
                  country: '',
                  coordinates: {
                    lat: 0,
                    lon: 0
                  }
                }
              }
            },
          },
        }, 
        messages: [
        {
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
          }
        ],
        products: {
          list: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
          pricesbreakdown: {
          merchandise: {
          totalpayment: 0,
          totalcapital: 0,
          total_suggested_retail_price:0,
          totalvat: 0,
          },
          cargo: {
            fee: 0
          },
          payment: {
          funds: {
            deducted: false,
            amount: 0,
          },
          money: {
            deducted: false,
            amount: 0
          },
          totalpayment: 0
          }
        }
        },
        cargo: {
          cargotype: "",
          cargoexpress: "",
          weight: 0,
          fee: 0,
          locations: {
          destination: {
            street: "",
            baranggay: "Trinidad",
            city: "",
            province: "",
            country: "",
          },
          branch: {
            street: "",
            baranggay: "",
            city: "",
            province: "",
            country: "",
          }
          }
        },
        payments: {
          totalproductpayment: 0,
          cargo: 0
        },
        transactiongiveaway: {
          purchaser: 0,
          people: 0,
          vanguard: 0
        } 
      }
    ],
    history: [
      {
        date: [
          {
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
        }
      ],
        status: {
          current: [],
          requested: [],
          confirmedandtobedelivered: [],
          delayed: [],
          delivered: [],
          confirmedasrecieved: []
        },
        transactionid: "",
        transactiontype: "Practicing",
        user: {
          authentications: {
            authenticationtype: 'Public',
            privateauthenticationkey: 'Privateauthenticationkey',
            authenticationid: '1699791814794-KiSYbr8W',
            password: {
            set: false,
            password: 'String'
            }
          },
          details: {
            surials: {
            firstname: 'Commoner 1 FIRST NAME' ,
            middlename: 'Commoner 1 MIDDLE NAME',
            lastname: 'Commoner 1 LAST NAME',
            nickname: 'Commoner 1 NICKNAME',
            },
            location: {
              address: {
              street: 'Current address',
              baranggay: 'Current address',
              trademark: 'Current address',
              city: 'Current address',
              province: 'Current address',
              country: 'Current address',
              coordinates: {
                lat: 0,
                lon: 0
              }
              },
              shipment: {
                type: 'Delivery',
                address: {
                  street: '',
                  baranggay: '',
                  trademark: '',
                  city: '',
                  province: '',
                  country: '',
                  coordinates: {
                    lat: 0,
                    lon: 0
                  }
                }
              }
            },
          }
        }, 
        messages: [
        {
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
          }
        ],
        products: {
          list: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
          pricesbreakdown: {
          merchandise: {
          totalpayment: 0,
          totalcapital: 0,
          total_suggested_retail_price:0,
          totalvat: 0,
          },
          cargo: {
            fee: 0
          },
          payment: {
          funds: {
            deducted: false,
            amount: 0,
          },
          money: {
            deducted: false,
            amount: 0
          },
          totalpayment: 0
          }
        }
        },
        cargo: {
          cargotype: "",
          cargoexpress: "",
          weight: 0,
          fee: 0,
          locations: {
          destination: {
            street: "",
            baranggay: "Maa",
            city: "",
            province: "",
            country: "",
          },
          branch: {
            street: "",
            baranggay: "",
            city: "",
            province: "",
            country: "",
          }
          }
        },
        payments: {
          totalproductpayment: 0,
          cargo: 0
        },
        transactiongiveaway: {
          purchaser: 0,
          people: 0,
          vanguard: 0
        } 
      },
      {
        date: [{
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
        }],
        status: {
          current: [],
          requested: [],
          confirmedandtobedelivered: [],
          delayed: [],
          delivered: [],
          confirmedasrecieved: []
        },
        transactionid: "",
        transactiontype: "Practicing",
        user: {
          authentications: {
            authenticationtype: 'Public',
            privateauthenticationkey: 'Privateauthenticationkey',
            authenticationid: '1699791814794-KiSYbr8W',
            password: {
            set: false,
            password: 'String'
            }
          },
          details: {
            surials: {
            firstname: 'Commoner 1 FIRST NAME' ,
            middlename: 'Commoner 1 MIDDLE NAME',
            lastname: 'Commoner 1 LAST NAME',
            nickname: 'Commoner 1 NICKNAME',
            },
            location: {
              address: {
              street: 'Current address',
              baranggay: 'Current address',
              trademark: 'Current address',
              city: 'Current address',
              province: 'Current address',
              country: 'Current address',
              coordinates: {
                lat: 0,
                lon: 0
              }
              },
              shipment: {
                type: 'Delivery',
                address: {
                  street: '',
                  baranggay: '',
                  trademark: '',
                  city: '',
                  province: '',
                  country: '',
                  coordinates: {
                    lat: 0,
                    lon: 0
                  }
                }
              }
            },
          },
        }, 
        messages: [
        {
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
          }
        ],
        products: {
          list: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
          pricesbreakdown: {
          merchandise: {
          totalpayment: 0,
          totalcapital: 0,
          total_suggested_retail_price:0,
          totalvat: 0,
          },
          cargo: {
            fee: 0
          },
          payment: {
          funds: {
            deducted: false,
            amount: 0,
          },
          money: {
            deducted: false,
            amount: 0
          },
          totalpayment: 0
          }
        }
        },
        cargo: {
          cargotype: "",
          cargoexpress: "",
          weight: 0,
          fee: 0,
          locations: {
          destination: {
            street: "",
            baranggay: "Trinidad",
            city: "",
            province: "",
            country: "",
          },
          branch: {
            street: "",
            baranggay: "",
            city: "",
            province: "",
            country: "",
          }
          }
        },
        payments: {
          totalproductpayment: 0,
          cargo: 0
        },
        transactiongiveaway: {
          purchaser: 0,
          people: 0,
          vanguard: 0
        } 
      }
    ]
  },
  upgradedregistrations: [] 
});

const [vanguarddata, vanguarddatacb] = useState(
{
_id: "string",
marketing: {
  products: {                                                                                                        
    merchandises: [
      {
        date: [{
          status: "Purchasing details submitted",  
          date: "1111-1111-1111-0",
          message: "All date are to purchase are gathered",
        }],
        status: {
          current: [],
          requested: [],
          confirmedandtobedelivered: [],
          delayed: [],
          delivered: [],
          confirmedasrecieved: []
        },
        transactionid: "",
        transactiontype: "Practicing",
        user: {
          authentications: user.authentications,
          details: user.details
        }, 
        messages: [
         {
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
         }
        ],
        products: {
          list: [
            {
              productname: 'Kohaku / Kohaku Yellow',
              rapportname: 'Rapport name',
              definition: 'Product definition',
              authentications: {
               producttype: 'Product type',
               productid: 'mrn-ricekohaku-1-category1'
              },
              details: {
              product: {
               name: 'Product name',
               rapportname: 'Product rapport name',
               definition: 'Product definition',
               category: 'MRN',
               specification: {
                for: {
                 part: 'Product part',
                 gender: 'Male',
                 category: 'Adults' 
                },
                set: {
                 set: false,
                 productindication: 'Oridinary',
                 pcs: 10
                },
                size: 'Product size',
                color: 'Product color',
                weight: 10,
                top: 'Top product specification',
                left: 'Left product specification',
                bottom: 'Bottom product specification',
                right: 'Right product specification',
                front: 'Front product specification',
                back: 'Back product specification'
               },
               pricesbreakdown: {
                price: 10,
                capital: 8,
                suggested_retail_price: 10,
                vat: 2
               },
               cybervisual: {
                  images: {
                    maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                    maindisplayimages: [
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    }
                    ]
                  },
                  videos: [
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    }
                  ]
               },
              },
              locations: {
                operations: [
                  {
                    street: 'Street',
                    baranggay: 'Baranggay',
                    trademark: 'Trademark',
                    city: 'City',
                    province: 'Province',
                    country: 'Country'
                  }
                ]
              }
              },
              system: {
                request: {
                  pcs: 0,
                  orderspecification: "An order specification",
                  merchandise: {
                    price: 100,
                    capital: 0,
                    suggested_retail_price: 0,
                    vat: 0,
                  },
                  shipping: {
                    category: 'Shipping category',
                    weight: 'Shipping weight',
                    fee: 0
                   },
                   totalpayment: {
                     price: 0
                   },
                  products: [
                  ],
                },
                stocks: [
                  {
                    productname: 'Kohaku / Kohaku Yellow / White Grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    authentications: {
                      producttype: 'Product type',
                      productid: 'mrn-ricekohaku-1-category1-product1'
                     },
                    details: {
                     product: {
                     name: 'Kokahu / Kohaku Yellow / White grains',
                     rapportname: 'Product rapport name',
                     definition: 'Product definition',
                     category: 'MRN',
                     specification: {
                      for: {
                       part: 'Product part',
                       gender: 'Male',
                       category: 'Adults' 
                      },
                      set: {
                       set: false,
                       productindication: 'Oridinary',
                       pcs: 10
                      },
                      size: 'Product size',
                      color: 'Product color',
                      weight: 10,
                      top: 'Top product specification',
                      left: 'Left product specification',
                      bottom: 'Bottom product specification',
                      right: 'Right product specification',
                      front: 'Front product specification',
                      back: 'Back product specification'
                      },
                      pricesbreakdown: {
                        price: 10,
                        capital: 8,
                        suggested_retail_price: 10,
                        vat: 2
                      },
                      cybervisual: {
                        images: {
                          maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                          maindisplayimages: [
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          }
                          ]
                        },
                        videos: [
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          }
                        ]
                      },
                     },
                     locations: {
                      operations: [
                        {
                          street: 'Street',
                          baranggay: 'Baranggay',
                          trademark: 'Trademark',
                          city: 'City',
                          province: 'Province',
                          country: 'Country'
                        }
                      ]
                     }
                     },
                     system: {
                      request: {
                        pcs: 0,
                        orderspecification: "",
                        merchandise: {
                          price: 0,
                          capital: 0,
                          suggested_retail_price: 0,
                          vat: 0
                        },
                        shipping: {
                         category: 'Shipping category',
                         weight: 'Shipping weight',
                         fee: 0
                        },
                        totalpayment: {
                          price: 0
                        },
                        products: [
                        ]
                      },
                      stocks: [],
                      purchase: {
                        people: [],
                        xirbit: []
                      }
                     }
                  },
                  {
                  productname: 'Kohaku / Kohaku Yellow / White Grains',
                  rapportname: 'Product rapport name',
                  definition: 'Product definition',
                  authentications: {
                    producttype: 'Product type',
                    productid: 'mrn-ricekohaku-1-category1-product2'
                  },
                  details: {
                    product: {
                     name: 'Kohaku / Kohaku Yellow / White big grains',
                     rapportname: 'Product rapport name',
                     definition: 'Product definition',
                     category: 'MRN',
                     specification: {
                      for: {
                       part: 'Product part',
                       gender: 'Male',
                       category: 'Adults' 
                      },
                      set: {
                       set: false,
                       productindication: 'Oridinary',
                       pcs: 10
                      },
                      size: 'Product size',
                      color: 'Product color',
                      weight: 10,
                      top: 'Top product specification',
                      left: 'Left product specification',
                      bottom: 'Bottom product specification',
                      right: 'Right product specification',
                      front: 'Front product specification',
                      back: 'Back product specification'
                      },
                      pricesbreakdown: {
                        price: 10,
                        capital: 8,
                        suggested_retail_price: 10,
                        vat: 2
                      },
                      cybervisual: {
                        images: {
                          maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                          maindisplayimages: [
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          }
                          ]
                        },
                        videos: [
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          }
                        ]
                      },
                    },
                    locations: {
                      operations: [
                        {
                          street: 'Street',
                          baranggay: 'Baranggay',
                          trademark: 'Trademark',
                          city: 'City',
                          province: 'Province',
                          country: 'Country'
                        }
                      ]
                    }
                  },
                  system: {
                    request: {
                      pcs: 0,
                      orderspecification: "",
                      merchandise: {
                        price: 0,
                        capital: 0,
                        suggested_retail_price: 0,
                        vat: 0
                      },
                      shipping: {
                       category: 'Shipping category',
                       weight: 'Shipping weight',
                       fee: 0
                      },
                      totalpayment: {
                        price: 0
                      },
                      products: [
                      ]
                     },
                      stocks: [],
                      purchase: {
                        people: [],
                        xirbit: []
                      }
                  }   
                  }
                ],
                purchases: {
                  people: [],
                  vanguard: []
                }
              }
            },
            {
              productname: 'Kohaku / Kohaku Yellow',
              rapportname: 'Rapport name',
              definition: 'Product definition',
              authentications: {
               producttype: 'Product type',
               productid: 'mrn-ricekohaku-1-category1'
              },
              details: {
              product: {
               name: 'Product name',
               rapportname: 'Product rapport name',
               definition: 'Product definition',
               category: 'MRN',
               specification: {
                for: {
                 part: 'Product part',
                 gender: 'Male',
                 category: 'Adults' 
                },
                set: {
                 set: false,
                 productindication: 'Oridinary',
                 pcs: 10
                },
                size: 'Product size',
                color: 'Product color',
                weight: 10,
                top: 'Top product specification',
                left: 'Left product specification',
                bottom: 'Bottom product specification',
                right: 'Right product specification',
                front: 'Front product specification',
                back: 'Back product specification'
               },
               pricesbreakdown: {
                  price: 10,
                  capital: 8,
                  suggested_retail_price: 10,
                  vat: 2
               },
               cybervisual: {
                  images: {
                    maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                    maindisplayimages: [
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    }
                    ]
                  },
                  videos: [
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    }
                  ]
               },
              },
              locations: {
                operations: [
                  {
                    street: 'Street',
                    baranggay: 'Baranggay',
                    trademark: 'Trademark',
                    city: 'City',
                    province: 'Province',
                    country: 'Country'
                  }
                ]
              }
              },
              system: {
                request: {
                  pcs: 0,
                  orderspecification: "",
                  merchandise: {
                    price: 0,
                    capital: 0,
                    suggested_retail_price: 0,
                    vat: 0,
                  },
                  shipping: {
                    category: 'Shipping category',
                    weight: 'Shipping weight',
                    fee: 0
                   },
                   totalpayment: {
                     price: 0
                   },
                  products: [
                  ],
                },
                stocks: [
                  {
                    productname: 'Kohaku / Kohaku Yellow / White Grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    authentications: {
                      producttype: 'Product type',
                      productid: 'mrn-ricekohaku-1-category1-product1'
                     },
                    details: {
                     product: {
                     name: 'Kokahu / Kohaku Yellow / White grains',
                     rapportname: 'Product rapport name',
                     definition: 'Product definition',
                     category: 'MRN',
                     specification: {
                      for: {
                       part: 'Product part',
                       gender: 'Male',
                       category: 'Adults' 
                      },
                      set: {
                       set: false,
                       productindication: 'Oridinary',
                       pcs: 10
                      },
                      size: 'Product size',
                      color: 'Product color',
                      weight: 10,
                      top: 'Top product specification',
                      left: 'Left product specification',
                      bottom: 'Bottom product specification',
                      right: 'Right product specification',
                      front: 'Front product specification',
                      back: 'Back product specification'
                      },
                      pricesbreakdown: {
                        price: 10,
                        capital: 8,
                        suggested_retail_price: 10,
                        vat: 2
                      },
                      cybervisual: {
                        images: {
                          maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                          maindisplayimages: [
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          }
                          ]
                        },
                        videos: [
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          }
                        ]
                      },
                     },
                     locations: {
                      operations: [
                        {
                          street: 'Street',
                          baranggay: 'Baranggay',
                          trademark: 'Trademark',
                          city: 'City',
                          province: 'Province',
                          country: 'Country'
                        }
                      ]
                     }
                     },
                     system: {
                      request: {
                        pcs: 0,
                        orderspecification: "",
                        merchandise: {
                          price: 0,
                          capital: 0,
                          suggested_retail_price: 0,
                          vat: 0
                        },
                        shipping: {
                         category: 'Shipping category',
                         weight: 'Shipping weight',
                         fee: 0
                        },
                        totalpayment: {
                          price: 0
                        },
                        products: [
                        ]
                      },
                      stocks: [],
                      purchase: {
                        people: [],
                        xirbit: []
                      }
                     }
                  },
                  {
                  productname: 'Kohaku / Kohaku Yellow / White Grains',
                  rapportname: 'Product rapport name',
                  definition: 'Product definition',
                  authentications: {
                    producttype: 'Product type',
                    productid: 'mrn-ricekohaku-1-category1-product2'
                  },
                  details: {
                    product: {
                     name: 'Kohaku / Kohaku Yellow / White big grains',
                     rapportname: 'Product rapport name',
                     definition: 'Product definition',
                     category: 'MRN',
                     specification: {
                      for: {
                       part: 'Product part',
                       gender: 'Male',
                       category: 'Adults' 
                      },
                      set: {
                       set: false,
                       productindication: 'Oridinary',
                       pcs: 10
                      },
                      size: 'Product size',
                      color: 'Product color',
                      weight: 10,
                      top: 'Top product specification',
                      left: 'Left product specification',
                      bottom: 'Bottom product specification',
                      right: 'Right product specification',
                      front: 'Front product specification',
                      back: 'Back product specification'
                      },
                      pricesbreakdown: {
                        price: 10,
                        capital: 8,
                        suggested_retail_price: 10,
                        vat: 2
                      },
                      cybervisual: {
                        images: {
                          maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                          maindisplayimages: [
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          }
                          ]
                        },
                        videos: [
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          }
                        ]
                      },
                    },
                    locations: {
                      operations: [
                        {
                          street: 'Street',
                          baranggay: 'Baranggay',
                          trademark: 'Trademark',
                          city: 'City',
                          province: 'Province',
                          country: 'Country'
                        }
                      ]
                    }
                  },
                  system: {
                    request: {
                      pcs: 0,
                      orderspecification: "",
                      merchandise: {
                        price: 0,
                        capital: 0,
                        suggested_retail_price: 0,
                        vat: 0
                      },
                      shipping: {
                       category: 'Shipping category',
                       weight: 'Shipping weight',
                       fee: 0
                      },
                      totalpayment: {
                        price: 0
                      },
                      products: [
                      ]
                     },
                      stocks: [],
                      purchase: {
                        people: [],
                        xirbit: []
                      }
                  }   
                  }
                ],
                purchases: {
                  people: [],
                  vanguard: []
                }
              }
            }
          ],
          pricesbreakdown: {
          merchandise: {
           totalpayment: 0,
           totalcapital: 0,
           total_suggested_retail_price:0,
           totalvat: 0,
          },
          cargo: {
            fee: 0
          },
          payment: {
          funds: {
            deducted: false,
            amount: 0,
          },
          money: {
            deducted: false,
            amount: 0
          },
          totalpayment: 0
          }
        }
        },
        cargo: {
          cargotype: "",
          cargoexpress: "",
          weight: 0,
          fee: 0,
          locations: {
          destination: {
            street: "Trinidad",
            baranggay: "Maa",
            trademark: "",
            city: "",
            province: "",
            country: "",
          },
          branch: {
            street: "",
            baranggay: "",
            city: "",
            province: "",
            country: "",
          }
          }
        },
        payments: {
          totalproductpayment: 0,
          cargo: 0
        },
        transactiongiveaway: {
          purchaser: 0,
          people: 0,
          vanguard: 0
        } 
      },
      {
      date: [{
        status: "Purchasing details submitted",  
        date: "1111-1111-111",
        message: "All date are to purchase are gathered",
      }],
      status: {
        current: [],
        requested: [],
        confirmedandtobedelivered: [],
        delayed: [],
        delivered: [],
        confirmedasrecieved: []
      },
      transactionid: "",
      transactiontype: "Practicing",
      user: {
        authentications: user.authentications,
        details: user.details
      }, 
      messages: [
      {
        status: "Purchasing details submitted",  
        date: "1111-1111-111",
        message: "All date are to purchase are gathered",
        }
      ],
      products: {
        list: [],
        pricesbreakdown: {
        merchandise: {
        totalpayment: 0,
        totalcapital: 0,
        total_suggested_retail_price:0,
        totalvat: 0,
        },
        cargo: {
          fee: 0
        },
        payment: {
        funds: {
          deducted: false,
          amount: 0,
        },
        money: {
          deducted: false,
          amount: 0
        },
        totalpayment: 0
        }
      }
      },
      cargo: {
        cargotype: "",
        cargoexpress: "",
        weight: 0,
        fee: 0,
        locations: {
        destination: {
          street: "Emp",
          baranggay: "Maa",
          trademark: "",
          city: "",
          province: "",
          country: "",
        },
        branch: {
          street: "",
          baranggay: "",
          city: "",
          province: "",
          country: "",
        }
        }
      },
      payments: {
        totalproductpayment: 0,
        cargo: 0
      },
      transactiongiveaway: {
        purchaser: 0,
        people: 0,
        vanguard: 0
      } 
      },
      {
      date: [{
        status: "Purchasing details submitted",  
        date: "1111-1111-111",
        message: "All date are to purchase are gathered",
      }],
      status: {
        current: [],
        requested: [],
        confirmedandtobedelivered: [],
        delayed: [],
        delivered: [],
        confirmedasrecieved: []
      },
      transactionid: "",
      transactiontype: "Practicing",
      user: {
        authentications: user.authentications,
        details: user.details
      }, 
      messages: [
      {
        status: "Purchasing details submitted",  
        date: "1111-1111-111",
        message: "All date are to purchase are gathered",
        }
      ],
      products: {
        list: [],
        pricesbreakdown: {
          merchandise: {
          totalpayment: 0,
          totalcapital: 0,
          total_suggested_retail_price:0,
          totalvat: 0,
        },
        cargo: {
          fee: 0
        },
        payment: {
        funds: {
          deducted: false,
          amount: 0,
        },
        money: {
          deducted: false,
          amount: 0
        },
        totalpayment: 0
        }
      }
      },
      cargo: {
        cargotype: "",
        cargoexpress: "",
        weight: 0,
        fee: 0,
        locations: {
        destination: {
          street: "Quirino",
          baranggay: "Bangkerohan",
          trademark: "",
          city: "",
          province: "",
          country: "",
        },
        branch: {
          street: "",
          baranggay: "",
          city: "",
          province: "",
          country: "",
        }
        }
      },
      payments: {
        totalproductpayment: 0,
        cargo: 0
      },
      transactiongiveaway: {
        purchaser: 0,
        people: 0,
        vanguard: 0
      } 
      }
    ],
    others: {
      load: []
    }
  },
  requests: {
    processing: [
      {
        date: [{
          status: "Purchasing details submitted",  
          date: "1111-1111-1111-0",
          message: "All date are to purchase are gathered",
        }],
        status: {
          current: [],
          requested: [],
          confirmedandtobedelivered: [],
          delayed: [],
          delivered: [],
          confirmedasrecieved: []
        },
        transactionid: "",
        transactiontype: "Practicing",
        user: {
          authentications: user.authentications,
          details: user.details
        }, 
        messages: [
         {
          status: "Purchasing details submitted",  
          date: "1111-1111-111",
          message: "All date are to purchase are gathered",
         }
        ],
        products: {
          list: [
            {
              productname: 'Kohaku / Kohaku Yellow',
              rapportname: 'Rapport name',
              definition: 'Product definition',
              authentications: {
               producttype: 'Product type',
               productid: 'mrn-ricekohaku-1-category1'
              },
              details: {
              product: {
               name: 'Product name',
               rapportname: 'Product rapport name',
               definition: 'Product definition',
               category: 'MRN',
               specification: {
                for: {
                 part: 'Product part',
                 gender: 'Male',
                 category: 'Adults' 
                },
                set: {
                 set: false,
                 productindication: 'Oridinary',
                 pcs: 10
                },
                size: 'Product size',
                color: 'Product color',
                weight: 10,
                top: 'Top product specification',
                left: 'Left product specification',
                bottom: 'Bottom product specification',
                right: 'Right product specification',
                front: 'Front product specification',
                back: 'Back product specification'
               },
               pricesbreakdown: {
                price: 10,
                capital: 8,
                suggested_retail_price: 10,
                vat: 2
               },
               cybervisual: {
                  images: {
                    maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                    maindisplayimages: [
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    }
                    ]
                  },
                  videos: [
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    }
                  ]
               },
              },
              locations: {
                operations: [
                  {
                    street: 'Street',
                    baranggay: 'Baranggay',
                    trademark: 'Trademark',
                    city: 'City',
                    province: 'Province',
                    country: 'Country'
                  }
                ]
              }
              },
              system: {
                request: {
                  pcs: 0,
                  orderspecification: "An order specification",
                  merchandise: {
                    price: 100,
                    capital: 0,
                    suggested_retail_price: 0,
                    vat: 0,
                  },
                  shipping: {
                    category: 'Shipping category',
                    weight: 'Shipping weight',
                    fee: 0
                   },
                   totalpayment: {
                     price: 0
                   },
                  products: [
                  ],
                },
                stocks: [
                  {
                    productname: 'Kohaku / Kohaku Yellow / White Grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    authentications: {
                      producttype: 'Product type',
                      productid: 'mrn-ricekohaku-1-category1-product1'
                     },
                    details: {
                     product: {
                     name: 'Kokahu / Kohaku Yellow / White grains',
                     rapportname: 'Product rapport name',
                     definition: 'Product definition',
                     category: 'MRN',
                     specification: {
                      for: {
                       part: 'Product part',
                       gender: 'Male',
                       category: 'Adults' 
                      },
                      set: {
                       set: false,
                       productindication: 'Oridinary',
                       pcs: 10
                      },
                      size: 'Product size',
                      color: 'Product color',
                      weight: 10,
                      top: 'Top product specification',
                      left: 'Left product specification',
                      bottom: 'Bottom product specification',
                      right: 'Right product specification',
                      front: 'Front product specification',
                      back: 'Back product specification'
                      },
                      pricesbreakdown: {
                        price: 10,
                        capital: 8,
                        suggested_retail_price: 10,
                        vat: 2
                      },
                      cybervisual: {
                        images: {
                          maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                          maindisplayimages: [
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          }
                          ]
                        },
                        videos: [
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          }
                        ]
                      },
                     },
                     locations: {
                      operations: [
                        {
                          street: 'Street',
                          baranggay: 'Baranggay',
                          trademark: 'Trademark',
                          city: 'City',
                          province: 'Province',
                          country: 'Country'
                        }
                      ]
                     }
                     },
                     system: {
                      request: {
                        pcs: 0,
                        orderspecification: "",
                        merchandise: {
                          price: 0,
                          capital: 0,
                          suggested_retail_price: 0,
                          vat: 0
                        },
                        shipping: {
                         category: 'Shipping category',
                         weight: 'Shipping weight',
                         fee: 0
                        },
                        totalpayment: {
                          price: 0
                        },
                        products: [
                        ]
                      },
                      stocks: [],
                      purchase: {
                        people: [],
                        xirbit: []
                      }
                     }
                  },
                  {
                  productname: 'Kohaku / Kohaku Yellow / White Grains',
                  rapportname: 'Product rapport name',
                  definition: 'Product definition',
                  authentications: {
                    producttype: 'Product type',
                    productid: 'mrn-ricekohaku-1-category1-product2'
                  },
                  details: {
                    product: {
                     name: 'Kohaku / Kohaku Yellow / White big grains',
                     rapportname: 'Product rapport name',
                     definition: 'Product definition',
                     category: 'MRN',
                     specification: {
                      for: {
                       part: 'Product part',
                       gender: 'Male',
                       category: 'Adults' 
                      },
                      set: {
                       set: false,
                       productindication: 'Oridinary',
                       pcs: 10
                      },
                      size: 'Product size',
                      color: 'Product color',
                      weight: 10,
                      top: 'Top product specification',
                      left: 'Left product specification',
                      bottom: 'Bottom product specification',
                      right: 'Right product specification',
                      front: 'Front product specification',
                      back: 'Back product specification'
                      },
                      pricesbreakdown: {
                        price: 10,
                        capital: 8,
                        suggested_retail_price: 10,
                        vat: 2
                      },
                      cybervisual: {
                        images: {
                          maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                          maindisplayimages: [
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          }
                          ]
                        },
                        videos: [
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          }
                        ]
                      },
                    },
                    locations: {
                      operations: [
                        {
                          street: 'Street',
                          baranggay: 'Baranggay',
                          trademark: 'Trademark',
                          city: 'City',
                          province: 'Province',
                          country: 'Country'
                        }
                      ]
                    }
                  },
                  system: {
                    request: {
                      pcs: 0,
                      orderspecification: "",
                      merchandise: {
                        price: 0,
                        capital: 0,
                        suggested_retail_price: 0,
                        vat: 0
                      },
                      shipping: {
                       category: 'Shipping category',
                       weight: 'Shipping weight',
                       fee: 0
                      },
                      totalpayment: {
                        price: 0
                      },
                      products: [
                      ]
                     },
                      stocks: [],
                      purchase: {
                        people: [],
                        xirbit: []
                      }
                  }   
                  }
                ],
                purchases: {
                  people: [],
                  vanguard: []
                }
              }
            },
            {
              productname: 'Kohaku / Kohaku Yellow',
              rapportname: 'Rapport name',
              definition: 'Product definition',
              authentications: {
               producttype: 'Product type',
               productid: 'mrn-ricekohaku-1-category1'
              },
              details: {
              product: {
               name: 'Product name',
               rapportname: 'Product rapport name',
               definition: 'Product definition',
               category: 'MRN',
               specification: {
                for: {
                 part: 'Product part',
                 gender: 'Male',
                 category: 'Adults' 
                },
                set: {
                 set: false,
                 productindication: 'Oridinary',
                 pcs: 10
                },
                size: 'Product size',
                color: 'Product color',
                weight: 10,
                top: 'Top product specification',
                left: 'Left product specification',
                bottom: 'Bottom product specification',
                right: 'Right product specification',
                front: 'Front product specification',
                back: 'Back product specification'
               },
               pricesbreakdown: {
                  price: 10,
                  capital: 8,
                  suggested_retail_price: 10,
                  vat: 2
               },
               cybervisual: {
                  images: {
                    maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                    maindisplayimages: [
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    }
                    ]
                  },
                  videos: [
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    }
                  ]
               },
              },
              locations: {
                operations: [
                  {
                    street: 'Street',
                    baranggay: 'Baranggay',
                    trademark: 'Trademark',
                    city: 'City',
                    province: 'Province',
                    country: 'Country'
                  }
                ]
              }
              },
              system: {
                request: {
                  pcs: 0,
                  orderspecification: "",
                  merchandise: {
                    price: 0,
                    capital: 0,
                    suggested_retail_price: 0,
                    vat: 0,
                  },
                  shipping: {
                    category: 'Shipping category',
                    weight: 'Shipping weight',
                    fee: 0
                   },
                   totalpayment: {
                     price: 0
                   },
                  products: [
                  ],
                },
                stocks: [
                  {
                    productname: 'Kohaku / Kohaku Yellow / White Grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    authentications: {
                      producttype: 'Product type',
                      productid: 'mrn-ricekohaku-1-category1-product1'
                     },
                    details: {
                     product: {
                     name: 'Kokahu / Kohaku Yellow / White grains',
                     rapportname: 'Product rapport name',
                     definition: 'Product definition',
                     category: 'MRN',
                     specification: {
                      for: {
                       part: 'Product part',
                       gender: 'Male',
                       category: 'Adults' 
                      },
                      set: {
                       set: false,
                       productindication: 'Oridinary',
                       pcs: 10
                      },
                      size: 'Product size',
                      color: 'Product color',
                      weight: 10,
                      top: 'Top product specification',
                      left: 'Left product specification',
                      bottom: 'Bottom product specification',
                      right: 'Right product specification',
                      front: 'Front product specification',
                      back: 'Back product specification'
                      },
                      pricesbreakdown: {
                        price: 10,
                        capital: 8,
                        suggested_retail_price: 10,
                        vat: 2
                      },
                      cybervisual: {
                        images: {
                          maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                          maindisplayimages: [
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          }
                          ]
                        },
                        videos: [
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          }
                        ]
                      },
                     },
                     locations: {
                      operations: [
                        {
                          street: 'Street',
                          baranggay: 'Baranggay',
                          trademark: 'Trademark',
                          city: 'City',
                          province: 'Province',
                          country: 'Country'
                        }
                      ]
                     }
                     },
                     system: {
                      request: {
                        pcs: 0,
                        orderspecification: "",
                        merchandise: {
                          price: 0,
                          capital: 0,
                          suggested_retail_price: 0,
                          vat: 0
                        },
                        shipping: {
                         category: 'Shipping category',
                         weight: 'Shipping weight',
                         fee: 0
                        },
                        totalpayment: {
                          price: 0
                        },
                        products: [
                        ]
                      },
                      stocks: [],
                      purchase: {
                        people: [],
                        xirbit: []
                      }
                     }
                  },
                  {
                  productname: 'Kohaku / Kohaku Yellow / White Grains',
                  rapportname: 'Product rapport name',
                  definition: 'Product definition',
                  authentications: {
                    producttype: 'Product type',
                    productid: 'mrn-ricekohaku-1-category1-product2'
                  },
                  details: {
                    product: {
                     name: 'Kohaku / Kohaku Yellow / White big grains',
                     rapportname: 'Product rapport name',
                     definition: 'Product definition',
                     category: 'MRN',
                     specification: {
                      for: {
                       part: 'Product part',
                       gender: 'Male',
                       category: 'Adults' 
                      },
                      set: {
                       set: false,
                       productindication: 'Oridinary',
                       pcs: 10
                      },
                      size: 'Product size',
                      color: 'Product color',
                      weight: 10,
                      top: 'Top product specification',
                      left: 'Left product specification',
                      bottom: 'Bottom product specification',
                      right: 'Right product specification',
                      front: 'Front product specification',
                      back: 'Back product specification'
                      },
                      pricesbreakdown: {
                        price: 10,
                        capital: 8,
                        suggested_retail_price: 10,
                        vat: 2
                      },
                      cybervisual: {
                        images: {
                          maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                          maindisplayimages: [
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          },
                          {
                            displayimage: '../images/landingpage/bondpaperimage.jpg'
                          }
                          ]
                        },
                        videos: [
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          },
                          {
                            youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                          }
                        ]
                      },
                    },
                    locations: {
                      operations: [
                        {
                          street: 'Street',
                          baranggay: 'Baranggay',
                          trademark: 'Trademark',
                          city: 'City',
                          province: 'Province',
                          country: 'Country'
                        }
                      ]
                    }
                  },
                  system: {
                    request: {
                      pcs: 0,
                      orderspecification: "",
                      merchandise: {
                        price: 0,
                        capital: 0,
                        suggested_retail_price: 0,
                        vat: 0
                      },
                      shipping: {
                       category: 'Shipping category',
                       weight: 'Shipping weight',
                       fee: 0
                      },
                      totalpayment: {
                        price: 0
                      },
                      products: [
                      ]
                     },
                      stocks: [],
                      purchase: {
                        people: [],
                        xirbit: []
                      }
                  }   
                  }
                ],
                purchases: {
                  people: [],
                  vanguard: []
                }
              }
            }
          ],
          pricesbreakdown: {
          merchandise: {
           totalpayment: 0,
           totalcapital: 0,
           total_suggested_retail_price:0,
           totalvat: 0,
          },
          cargo: {
            fee: 0
          },
          payment: {
          funds: {
            deducted: false,
            amount: 0,
          },
          money: {
            deducted: false,
            amount: 0
          },
          totalpayment: 0
          }
        }
        },
        cargo: {
          cargotype: "",
          cargoexpress: "",
          weight: 0,
          fee: 0,
          locations: {
          destination: {
            street: "Trinidad",
            baranggay: "Maa",
            trademark: "",
            city: "",
            province: "",
            country: "",
          },
          branch: {
            street: "",
            baranggay: "",
            city: "",
            province: "",
            country: "",
          }
          }
        },
        payments: {
          totalproductpayment: 0,
          cargo: 0
        },
        transactiongiveaway: {
          purchaser: 0,
          people: 0,
          vanguard: 0
        } 
      },
      {
      date: [{
        status: "Purchasing details submitted",  
        date: "1111-1111-111",
        message: "All date are to purchase are gathered",
      }],
      status: {
        current: [],
        requested: [],
        confirmedandtobedelivered: [],
        delayed: [],
        delivered: [],
        confirmedasrecieved: []
      },
      transactionid: "",
      transactiontype: "Practicing",
      user: {
        authentications: user.authentications,
        details: user.details
      }, 
      messages: [
      {
        status: "Purchasing details submitted",  
        date: "1111-1111-111",
        message: "All date are to purchase are gathered",
        }
      ],
      products: {
        list: [],
        pricesbreakdown: {
        merchandise: {
        totalpayment: 0,
        totalcapital: 0,
        total_suggested_retail_price:0,
        totalvat: 0,
        },
        cargo: {
          fee: 0
        },
        payment: {
        funds: {
          deducted: false,
          amount: 0,
        },
        money: {
          deducted: false,
          amount: 0
        },
        totalpayment: 0
        }
      }
      },
      cargo: {
        cargotype: "",
        cargoexpress: "",
        weight: 0,
        fee: 0,
        locations: {
        destination: {
          street: "Emp",
          baranggay: "Maa",
          trademark: "",
          city: "",
          province: "",
          country: "",
        },
        branch: {
          street: "",
          baranggay: "",
          city: "",
          province: "",
          country: "",
        }
        }
      },
      payments: {
        totalproductpayment: 0,
        cargo: 0
      },
      transactiongiveaway: {
        purchaser: 0,
        people: 0,
        vanguard: 0
      } 
      },
      {
      date: [{
        status: "Purchasing details submitted",  
        date: "1111-1111-111",
        message: "All date are to purchase are gathered",
      }],
      status: {
        current: [],
        requested: [],
        confirmedandtobedelivered: [],
        delayed: [],
        delivered: [],
        confirmedasrecieved: []
      },
      transactionid: "",
      transactiontype: "Practicing",
      user: {
        authentications: user.authentications,
        details: user.details
      }, 
      messages: [
      {
        status: "Purchasing details submitted",  
        date: "1111-1111-111",
        message: "All date are to purchase are gathered",
        }
      ],
      products: {
        list: [],
        pricesbreakdown: {
          merchandise: {
          totalpayment: 0,
          totalcapital: 0,
          total_suggested_retail_price:0,
          totalvat: 0,
        },
        cargo: {
          fee: 0
        },
        payment: {
        funds: {
          deducted: false,
          amount: 0,
        },
        money: {
          deducted: false,
          amount: 0
        },
        totalpayment: 0
        }
      }
      },
      cargo: {
        cargotype: "",
        cargoexpress: "",
        weight: 0,
        fee: 0,
        locations: {
        destination: {
          street: "Quirino",
          baranggay: "Bangkerohan",
          trademark: "",
          city: "",
          province: "",
          country: "",
        },
        branch: {
          street: "",
          baranggay: "",
          city: "",
          province: "",
          country: "",
        }
        }
      },
      payments: {
        totalproductpayment: 0,
        cargo: 0
      },
      transactiongiveaway: {
        purchaser: 0,
        people: 0,
        vanguard: 0
      } 
      }
    ],
    accepted: [],
    delivered: [],
    waitingforconfirmation: []
  },
  processing: [],
},
moneyandfunds: {
  request: {
    deposits: [],
    widthdrawals: []
  },
  transactions: {
    deposits: [],
    widthdrawals: []
  },
  processing: {
    deposits: [],
    widthdrawals: []
  },
  people: {
    storedtransactiongiveaway: []
  },
  credits: {
    deposits: [],
    funds: [],
    vanguard: [],
    transactiongiveaway: {
      bank: 0
    }
  }
},
people: [],
history: {
  requests: []
}
}
);

const $viewportscreenbreakpoints = {
  xsviewportscreenbreakpoint: async () => {
    $xsviewport.addListener($viewportscreenbreakpoints.xsviewportscreenbreakpoint);
    if ($xsviewport.matches) {
      viewportcb((viewport)=> viewport = 'xs')
      landingpagenavigationbargraphwidthpropertycb((width)=> width = '90%')
    }
  },
  mdviewportscreenbreakpoint: async () => {
    $mdviewport.addListener($viewportscreenbreakpoints.mdviewportscreenbreakpoint);
    if ($mdviewport.mathces) {
      viewportcb((viewport)=> viewport = 'md')
      landingpagenavigationbargraphwidthpropertycb((width)=> width = '80%')
    }
  },
  lgviewportscreenbreakpoint: async () => {
    $lgviewport.addListener($viewportscreenbreakpoints.lgviewportscreenbreakpoint);
    if ($lgviewport.matches) {
      viewportcb((viewport)=> viewport = 'lg')
      landingpagenavigationbargraphwidthpropertycb((width)=> width = '80%')
    }
  }
} 

const [merchandisescheme, merchandiseschemecb] = useState(
  [
  {
    _id: 'samplemerchandise-food-sdd',
    masterprotectionconstitution: {
    set: {
    setsequencenumber: {
      type: 0
    },
    true: false,
    pcs: 0
    },
    concerns: [],
    questions: [],
    expectations: []
    },
    usage: {
    authentications: {
    id: 0,
    statisticsid: 0,
    purchasable: true
    },
    details: {
      merchandisetype: {
      type: 'Merchandise type',
      respect: 'Merchandise respect',
      optimized: 'Merchandise optimization',
    },
    merchandisename: 'Merchandise name',
    merchandiseoriginator: 'Merchandise originator',
    merchandisespricebreakdown: {
      price: 10,
      capital: 0,
      s_r_p: 0,
      vat:  {
      vat: 0,
      xirbitownbenefits: 0
      }
    },
    merchandisespecifications: {
    primary: {
    description: 'Nerchandise description',
    nutrientspecification: [],
    weight: 100,
    stocks:  0,
    deliveryrate: 0
    },
    front: [],
    top: [],
    left: [],
    back: [],
    right: [],
    bottom: [],
    label: [],
    rapport: [],
    specialdetails: []
    },
    cybervisual: {
    images: {
    maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
    maindisplayimages: [
      {
      displayimage: '../images/landingpage/bondpaperimage.jpg'
      }
    ],
    selectionimages: []
    },
    videos: {
      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
    }
    }
    }
    },
    locations: {
    masterprotectionconsitutionstore: {
      street: 'Street',
      baranggay: 'Baranggay',
      trademark: 'Trademark',
      city: 'City',
      province: 'Province',
      island: 'Island'
    },
    main: {
      street: 'Street',
      baranggay: 'Baranggay',
      trademark: 'Trademark',
      city: 'City',
      province: 'Province',
      island: 'Island'
    },
    others: [
      {
        street: 'Street',
        baranggay: 'Baranggay',
        trademark: 'Trademark',
        city: 'City',
        province: 'Province',
        island: 'Island'
        }
    ],
    masterprotectionconsitutionpurchases: []
    },
    system: {
    canbeboughteverytime: true,
    stocks: {
      approach: [],
      selection: {
      main: [
        {
          idx: 1,
          color: "Red",
          size: "sm",
          indication: "Apple flavor",
          merchandisespecification: {
            front:[],
            left: [],
            back: [],
            right: [],
            bottom: [],
            label: [],
            rapport: [],
            specialdetailsspecification: []
          },
          pcs: 97,
          _id: '6427d00631653bed995a7c82',
          weight: 10,
          deliveryrate: 0
        }
      ],
      colors: [],
      sizes: []
      },
      masterprotectionconstitutionneed: {
      shortage: []
      },
      downfall: [],
    },
    transactions: {
    masterprotectionconstitutiontransport: {
    cargo: [],
    shipping: [],
    deliveries: []
    },
    work: {
    masterprotectionconstitution:{
    cargo: [],
    shipping: [],
    deliveries: []
    },
    branchises: {
    cargo: [],
    shipping: [],
    deliveries: []
    },
    franchises: {
    cargo: [],
    shipping: [],
    deliveries: []
    }
    }, 
    others: []
    },
    data: {
      id: 0,
      statisticsid: 0
    },
    shippingoptions: []
    },
    access: {
    nearest: [],
    places: []
    },
    landscape: {
      coordinates: {
      latitude: 0,
      longitude: 0 
    },
    },
    people: {
      sale: ['Sampla string data'],
      purchases: [],
      compliments: [],
      approach: [],
      statistics: {
        expectation: [],
        exitement: [],
        plan: [],
        must: [], 
        unexpected: [],
        goodness: [],
        normal: [],
        advice: [],
        taken: [],
        respect: []
    }
    }
  },
  {
  _id: 'Merchandise product id',
  masterprotectionconstitution: {
  set: {
  setsequencenumber: {
    type: 0
  },
  true: false,
  pcs: 0
  },
  concerns: [],
  questions: [],
  expectations: []
  },
  usage: {
  authentications: {
  id: 0,
  statisticsid: 0,
  purchasable: true
  },
  details: {
    merchandisetype: {
    type: 'Merchandise type',
    respect: 'Merchandise respect',
    optimized: 'Merchandise optimization',
  },
  merchandisename: 'Merchandise name',
  merchandiseoriginator: 'Merchandise originator',
  merchandisespricebreakdown: {
    price: 0,
    capital: 0,
    s_r_p: 0,
    vat:  {
    vat: 0,
    xirbitownbenefits: 0
    }
  },
  merchandisespecifications: {
  primary: {
  description: 'Nerchandise description',
  nutrientspecification: [],
  weight: 0,
  stocks:  0,
  },
  front: [],
  top: [],
  left: [],
  back: [],
  right: [],
  bottom: [],
  label: [],
  rapport: [],
  specialdetails: []
  },
  cybervisual: {
  images: {
  maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
  maindisplayimages: [
   {
    displayimage: '../images/landingpage/bondpaperimage.jpg'
   }
  ],
  selectionimages: []
  },
  videos: {
    youtubelink: 'Youtube link'
  }
  }
  }
  },
  locations: {
  masterprotectionconsitutionstore: {
   street: 'Street',
   baranggay: 'Baranggay',
   trademark: 'Trademark',
   city: 'City',
   province: 'Province',
   island: 'Island'
  },
  main: {
   street: 'Street',
   baranggay: 'Baranggay',
   trademark: 'Trademark',
   city: 'City',
   province: 'Province',
   island: 'Island'
  },
  others: [],
  masterprotectionconsitutionpurchases: []
  },
  system: {
  canbeboughteverytime: true,
  stocks: {
    approach: [],
    selection: {
    main: [],
    colors: [],
    sizes: []
    },
    masterprotectionconstitutionneed: {
    shortage: []
    },
    downfall: [],
  },
  transactions: {
  masterprotectionconstitutiontransport: {
  cargo: [],
  shipping: [],
  deliveries: []
  },
  work: {
  masterprotectionconstitution:{
  cargo: [],
  shipping: [],
  deliveries: []
  },
  branchises: {
  cargo: [],
  shipping: [],
  deliveries: []
  },
  franchises: {
  cargo: [],
  shipping: [],
  deliveries: []
  }
  }, 
  others: []
  },
  data: {
    id: 0,
    statisticsid: 0
  },
  shippingoptions: []
  },
  access: {
  nearest: [],
  places: []
  },
  landscape: {
    coordinates: {
    latitude: 0,
    longitude: 0 
  },
  },
  people: {
    sale: ['Sampla string data'],
    purchases: [],
    compliments: [],
    approach: [],
    statistics: {
     expectation: [],
     exitement: [],
     plan: [],
     must: [], 
     unexpected: [],
     goodness: [],
     normal: [],
     advice: [],
     taken: [],
     respect: []
  }
  }
  }
  ]
)

///// purchasing

const [manualcargoaddressdestinationloadingindication, manualcargoaddressdestinationloadingindicationcb] = useState(false);

const [setascargodestinationloadingindication, setascargodestinationloadingindicationcb] = useState(false);

const [purchasingcargodestination, purchasingcargodestinationcb] = useState(",,,,,");
const [purchasingcargoaddressset, purchasingcargoaddresssetcb] = useState(false);

const [purchasingtotalmerchandisepayment, purchasingtotalmerchandisepaymentcb] = useState(0);
const [purchasingtotalweight, purchasingtotalweightcb] = useState(0);
const [purchasingtotalcargofee, purchasingtotalcargofeecb] = useState(0);
const [purchasigtotalpayment, purchasigtotalpaymentcb] = useState(0);
const [purchasingpaymentset, purchasingpaymentsetcb] = useState(false);

const [purchasingtotalmrnproducts, purchasingtotalmrnproductscb] = useState([]);
const [purchasingmrnproductstotalweight, purchasingmrnproductstotalweightcb] = useState(0);
const [purchasingtotalnonmrnproducts, purchasingtotalnonmrnproductscb] = useState([]);
const [purchasingnonmrnproductstotalweight, purchasingnonmrnproductstotalweightcb] = useState(0);

const [selectedproduct, selectedproductcb] = useState(
{
productname: 'Kohaku Yellow',
rapportname: 'Rapport name',
definition: 'Product definition',
authentications: {
producttype: 'Product type',
productid: 'Product id 0'
},
details: {
product: {
name: 'Product name',
rapportname: 'Product rapport name',
definition: 'Product definition',
category: 'MRN',
specification: {
orderpcs: 0,
orderspecification: "",
for: {
part: 'Product part',
gender: 'Male',
category: 'Adults' 
},
set: {
set: false,
productindication: 'Oridinary',
pcs: 10
},
size: 'Product size',
color: 'Product color',
weight: 'Product weight',
top: 'Top product specification',
left: 'Left product specification',
bottom: 'Bottom product specification',
right: 'Right product specification',
front: 'Front product specification',
back: 'Back product specification'
},
pricesbreakdown: {
price: 10,
capital: 8,
suggested_retail_price: 10,
vat: 2
},
cybervisual: {
images: {
maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
maindisplayimages: [
{
displayimage: '../images/landingpage/bondpaperimage.jpg'
},
{
displayimage: '../images/landingpage/bondpaperimage.jpg'
},
{
displayimage: '../images/landingpage/bondpaperimage.jpg'
}
]
},
videos: [
{
youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
},
{
youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
},
{
youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
},
{
youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
}
]
},
},
locations: {
operations: [
{
street: 'Street',
baranggay: 'Baranggay',
trademark: 'Trademark',
city: 'City',
province: 'Province',
country: 'Country'
}
]
}
},
system: {
request: {
pcs: 0,
orderspecification: "",
merchandise: {
price: 0,
capital: 0,
suggested_retail_price: 0,
vat: 0,
},
shipping: {
category: 'Shipping category',
weight: 'Shipping weight',
fee: 0
},
totalpayment: {
price: 0
},
products: [
]
},
stocks: [
{
details: {
product: {
name: 'Product name',
rapportname: 'Product rapport name',
definition: 'Product definition',
category: 'MRN',
specification: {
for: {
part: 'Product part',
gender: 'Male',
category: 'Adults' 
},
set: {
set: false,
productindication: 'Oridinary',
pcs: 10
},
size: 'Product size',
color: 'Product color',
weight: 'Product weight',
top: 'Top product specification',
left: 'Left product specification',
bottom: 'Bottom product specification',
right: 'Right product specification',
front: 'Front product specification',
back: 'Back product specification'
},
pricesbreakdown: {
price: 10,
capital: 8,
suggested_retail_price: 10,
vat: 2
},
cybervisual: {
images: {
  maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
  maindisplayimages: [
  {
    displayimage: '../images/landingpage/bondpaperimage.jpg'
  },
  {
    displayimage: '../images/landingpage/bondpaperimage.jpg'
  },
  {
    displayimage: '../images/landingpage/bondpaperimage.jpg'
  }
  ]
},
videos: [
  {
    youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
  },
  {
    youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
  },
  {
    youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
  },
  {
    youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
  }
]
},
},
locations: {
operations: [
{
  street: 'Street',
  baranggay: 'Baranggay',
  trademark: 'Trademark',
  city: 'City',
  province: 'Province',
  country: 'Country'
}
]
}
},
system: {
request: {
product: [

],
shipping: {
  category: 'Shipping category',
  weight: 'Shipping weight',
  fee: 0
}
},
stocks: [

],
purchase: {
people: [],
xirbit: []
}
}
}, 
{
details: {
product: {
name: 'Product name',
rapportname: 'Product rapport name',
definition: 'Product definition',
category: 'MRN',
specification: {
for: {
part: 'Product part',
gender: 'Male',
category: 'Kids' 
},
set: {
set: false,
productindication: 'Oridinary',
pcs: 10
},
size: 'Product size',
color: 'Product color',
weight: 'Product weight',
top: 'Top product specification',
left: 'Left product specification',
bottom: 'Bottom product specification',
right: 'Right product specification',
front: 'Front product specification',
back: 'Back product specification'
},
pricesbreakdown: {
price: 10,
capital: 8,
suggested_retail_price: 10,
vat: 2
},
cybervisual: {
images: {
  maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
  maindisplayimages: [
  {
    displayimage: '../images/landingpage/bondpaperimage.jpg'
  },
  {
    displayimage: '../images/landingpage/bondpaperimage.jpg'
  },
  {
    displayimage: '../images/landingpage/bondpaperimage.jpg'
  }
  ]
},
videos: [
  {
    youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
  },
  {
    youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
  },
  {
    youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
  },
  {
    youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
  }
]
},
},
locations: {
operations: [
{
  street: 'Street',
  baranggay: 'Baranggay',
  trademark: 'Trademark',
  city: 'City',
  province: 'Province',
  country: 'Country'
}
]
}
},
system: {
request: {
product: [
  {
  pcs: 0,
  details: {
  for: {
      part: 'Product part',
      gender: 'Male',
      category: 'Adults' 
  },
  set: {
      set: false,
      productindication: 'Oridinary',
      pcs: 10
  },
  size: 'Product size',
  color: 'Product color',
  weight: 'Product weight',
  top: 'Top product specification',
  left: 'Left product specification',
  bottom: 'Bottom product specification',
  right: 'Right product specification',
  front: 'Front product specification',
  back: 'Back product specification'
  },
  pricesbreakdown: {
  price: 0,
  capital: 0,
  suggested_retail_price: 0,
  vat:0
  },
  specification: 'Order specification'
  }
],
shipping: {
  category: 'Shipping category',
  weight: 'Shipping weight',
  fee: 0
}
},
stocks: [
{
  details: {
    product: {
      name: 'Product name',
      rapportname: 'Product rapport name',
      definition: 'Product definition',
      specification: {
        for: {
          gender: 'Gender specification',
          category: 'Gender specificaiton category'
        },
        part: 'Product part',
        size: 'Product size',
        color: 'Product color',
        weight: 'Product weight',
        top: 'Top product specification',
        left: 'Left product specification',
        bottom: 'Bottom product specification',
        right: 'Right product specifi ation'
      },
      pricesbreakdown: {
      price: 10,
      capital: 8,
      suggested_retail_price: 10,
      vat: 2
      },
      cybervisual: {
        images: {
        maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
        maindisplayimages: [
          {
            displayimage: '../images/landingpage/bondpaperimage.jpg'
          },
          {
            displayimage: '../images/landingpage/bondpaperimage.jpg'
          },
          {
            displayimage: '../images/landingpage/bondpaperimage.jpg'
          }
        ]
        },
        videos: [
          {
          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
          }
        ]
      },
    },
    locations: {
    operations: [
      {
        street: 'Street',
        baranggay: 'Baranggay',
        trademark: 'Trademark',
        city: 'City',
        province: 'Province',
        country: 'Country'
      }
    ]
    }
  },
  system: {
    order: {
      specification: 'Order specification'
    },
    stocks: [],
    purchase: {
      people: [],
      xirbit: []
    },
    pricesbreakdown: {
      shipping: {
        category: 'Shipping category',
        weight: 'Shipping weight',
        fee: 0
      }
    }
  }
},
{
  details: {
    product: {
      name: 'Product name',
      rapportname: 'Product rapport name',
      definition: 'Product definition',
      specification: {
        for: {
          gender: 'Gender specification',
          category: 'Gender specificaiton category'
        },
        part: 'Product part',
        size: 'Product size',
        color: 'Product color',
        weight: 'Product weight',
        top: 'Top product specification',
        left: 'Left product specification',
        bottom: 'Bottom product specification',
        right: 'Right product specifi ation'
      },
      pricesbreakdown: {
      price: 10,
      capital: 8,
      suggested_retail_price: 10,
      vat: 2
      },
      cybervisual: {
        images: {
        maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
        maindisplayimages: [
          {
            displayimage: '../images/landingpage/bondpaperimage.jpg'
          }
        ]
        },
        videos: [
          {
          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
          }
        ]
      },
    },
    locations: {
    operations: [
      {
        street: 'Street',
        baranggay: 'Baranggay',
        trademark: 'Trademark',
        city: 'City',
        province: 'Province',
        country: 'Country'
      }
    ]
    }
  },
  system: {
    order: {
      specification: 'Order specification'
    },
    stocks: [],
    purchase: {
      people: [],
      xirbit: []
    },
    pricesbreakdown: {
      shipping: {
        category: 'Shipping category',
        weight: 'Shipping weight',
        fee: 0
      }
    }
  }
},
],
purchase: {
people: [],
xirbit: []
}
}
}
],
purchase: {
people: [],
xirbit: []
}
}
}
);

const [selectedproductarray, selectedproductarraycb] = useState([]);

const [selectedproductarraylength, selectedproductarraylengthcb] = useState(0);

const [companies, companiescb] = useState([
  {
   details: {
     companyname: "Kukaku",
     description: {
      companydescription: "Company description",
      companymotto: "Company motto"
     }
   },
   locations: {
    farm: [],
    plantations: [],
    manufacturing: [],
    packaging: [],
    distributing: [],
    offices: {
      main: [ 
        {
        location: {
          street: "Street",
          baranggay: "Baranggay",
          trademark: "Trademark",
          city: "City",
          province: "Province",
          country: "Country"
        },
        contact: {
          telephone: "0",
          phonenumber: "0",
          emailaddress: "None",
          website: "None"
        }
       }
      ],
      branch: [],
      franchise: []
    }
   },
   product: {
     list: [
      {
        productname: 'Kohaku',
        rapportname: 'Rapport name',
        definition: 'Product definition',
        authentications: {
         producttype: 'Product type',
         productid: 'mrn-ricekohaku-1'
        },
        specifications: [ 
          {
            productname: 'Kohaku Yellow',
            rapportname: 'Rapport name',
            definition: 'Product definition',
            authentications: {
              producttype: 'Product type',
              productid: 'mrn-ricekohaku-1-category1'
            },
            details: {
             product: {
              name: 'Kokaku / Kohaku Yellow',
              rapportname: 'Product rapport name',
              definition: 'Product definition',
              category: 'MRN',
              specification: {
               for: {
                part: 'Product part',
                gender: "Male of Female, for all type's of gender",
                category: 'For adults and children above 4-6 months' 
               },
               set: {
                set: false,
                productindication: 'Oridinary',
                pcs: 10
               },
               size: 'Product size',
               color: 'Product color',
               weight: 10,
               top: 'Top product specification',
               left: 'Left product specification',
               bottom: 'Bottom product specification',
               right: 'Right product specification',
               front: 'Front product specification',
               back: 'Back product specification'
              },
              pricesbreakdown: {
                price: 10,
                capital: 8,
                suggested_retail_price: 10,
                vat: 2
              },
              cybervisual: {
                images: {
                  maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                  maindisplayimages: [
                  {
                    displayimage: '../images/landingpage/bondpaperimage.jpg'
                  },
                  {
                    displayimage: '../images/landingpage/bondpaperimage.jpg'
                  },
                  {
                    displayimage: '../images/landingpage/bondpaperimage.jpg'
                  }
                  ]
                },
                videos: [
                  {
                    youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                  },
                  {
                    youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                  },
                  {
                    youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                  },
                  {
                    youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                  }
                ]
              }
            },
            locations: {
              operations: [
                {
                  street: 'Street',
                  baranggay: 'Baranggay',
                  trademark: 'Trademark',
                  city: 'City',
                  province: 'Province',
                  country: 'Country'
                }
              ]
            }
            },
            system: {
              request: {
                pcs: 0,
                orderspecification: "",
                merchandise: {
                  price: 0,
                  capital: 0,
                  suggested_retail_price: 0,
                  vat: 0,
                },
                shipping: {
                 category: 'Shipping category',
                 weight: 'Shipping weight',
                 fee: 0
                },
                totalpayment: {
                  price: 0
                },
                products: [
                ],
              },
              stocks: [
                {
                  productname: 'Kohaku / Kohaku Yellow / White Grains',
                  rapportname: 'Rapport name',
                  definition: 'Product definition',
                  authentications: {
                    producttype: 'Product type',
                    productid: 'mrn-ricekohaku-1-category1-product1'
                   },
                  details: {
                  product: {
                   name: 'Kokahu / Kohaku Yellow / White grains',
                   rapportname: 'Product rapport name',
                   definition: 'Product definition',
                   category: 'MRN',
                   specification: {
                    for: {
                     part: 'Product part',
                     gender: 'Male',
                     category: 'Adults' 
                    },
                    set: {
                     set: false,
                     productindication: 'Oridinary',
                     pcs: 10
                    },
                    size: 'Product size',
                    color: 'Product color',
                    weight: 'Product weight',
                    top: 'Top product specification',
                    left: 'Left product specification',
                    bottom: 'Bottom product specification',
                    right: 'Right product specification',
                    front: 'Front product specification',
                    back: 'Back product specification'
                    },
                    pricesbreakdown: {
                      price: 10,
                      capital: 8,
                      suggested_retail_price: 10,
                      vat: 2
                    },
                    cybervisual: {
                      images: {
                        maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                        maindisplayimages: [
                        {
                          displayimage: '../images/landingpage/bondpaperimage.jpg'
                        },
                        {
                          displayimage: '../images/landingpage/bondpaperimage.jpg'
                        },
                        {
                          displayimage: '../images/landingpage/bondpaperimage.jpg'
                        }
                        ]
                      },
                      videos: [
                        {
                          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                        },
                        {
                          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                        },
                        {
                          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                        },
                        {
                          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                        }
                      ]
                    },
                  },
                  locations: {
                    operations: [
                      {
                        street: 'Street',
                        baranggay: 'Baranggay',
                        trademark: 'Trademark',
                        city: 'City',
                        province: 'Province',
                        country: 'Country'
                      }
                    ]
                  }
                  },
                  system: {
                    request: {
                      pcs: 0,
                      orderspecification: "",
                      product: [
                      ],
                      shipping: {
                       category: 'Shipping category',
                       weight: 'Shipping weight',
                       fee: 0
                      }
                    },
                    stocks: [],
                    purchase: {
                      people: [],
                      xirbit: []
                    }
                  }
                },
                {
                 productname: 'Kohaku / Kohaku Yellow / White Grains',
                 rapportname: 'Rapport name',
                 definition: 'Product definition',
                 authentications: {
                  producttype: 'Product type',
                  productid: 'mrn-ricekohaku-1-category1-product2'
                 },
                 details: {
                  product: {
                   name: 'Kohaku / Kohaku Yellow / White big grains',
                   rapportname: 'Product rapport name',
                   definition: 'Product definition',
                   category: 'MRN',
                   specification: {
                    for: {
                     part: 'Product part',
                     gender: 'Male',
                     category: 'Adults' 
                    },
                    set: {
                     set: false,
                     productindication: 'Oridinary',
                     pcs: 10
                    },
                    size: 'Product size',
                    color: 'Product color',
                    weight: 'Product weight',
                    top: 'Top product specification',
                    left: 'Left product specification',
                    bottom: 'Bottom product specification',
                    right: 'Right product specification',
                    front: 'Front product specification',
                    back: 'Back product specification'
                    },
                    pricesbreakdown: {
                      price: 10,
                      capital: 8,
                      suggested_retail_price: 10,
                      vat: 2
                    },
                    cybervisual: {
                      images: {
                        maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                        maindisplayimages: [
                        {
                          displayimage: '../images/landingpage/bondpaperimage.jpg'
                        },
                        {
                          displayimage: '../images/landingpage/bondpaperimage.jpg'
                        },
                        {
                          displayimage: '../images/landingpage/bondpaperimage.jpg'
                        }
                        ]
                      },
                      videos: [
                        {
                          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                        },
                        {
                          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                        },
                        {
                          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                        },
                        {
                          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                        }
                      ]
                    },
                  },
                  locations: {
                    operations: [
                      {
                        street: 'Street',
                        baranggay: 'Baranggay',
                        trademark: 'Trademark',
                        city: 'City',
                        province: 'Province',
                        country: 'Country'
                      }
                    ]
                  }
                 },
                 system: {
                    request: {
                      pcs: 0,
                      orderspecification: "",
                      product: [
                      ],
                      shipping: {
                       category: 'Shipping category',
                       weight: 'Shipping weight',
                       fee: 0
                      }
                    },
                    stocks: [],
                    purchase: {
                      people: [],
                      xirbit: []
                    }
                }   
                }      
              ],
              purchase: {
                people: [],
                xirbit: []
              }
            }
          }
        ]
      }
     ]
   },
   projects: [
    {
    date: "111-111-111",
    purpose: "Purpose",
    status: "Status",
    contributions: {
      contributioncompletion: "0",
      contributed: 0
    },
    locations: [
      {
      date: "111-111-111",
      contribution: "0",
      purpose: "Project purpose",
      location: {
        street: "Street",
        trademark: "Trademark",
        baranggay: "Baranggay",
        city: "City",
        province: "Province",
        coutnry: "Country"
      },
      status: "Contributed must be complete to complete the project",
      contributions: {
        contributioncompletion: "0",  
        contributed: 0
      }
      }
    ]
    }
   ]
  },
  {
    details: {
      companyname: "Kukaku",
      description: {
       companydescription: "Company description",
       companymotto: "Company motto"
      }
    },
    locations: {
     farm: [],
     plantations: [],
     manufacturing: [],
     packaging: [],
     distributing: [],
     offices: {
       main: [ 
         {
         location: {
           street: "Street",
           baranggay: "Baranggay",
           trademark: "Trademark",
           city: "City",
           province: "Province",
           country: "Country"
         },
         contact: {
           telephone: "0",
           phonenumber: "0",
           emailaddress: "None",
           website: "None"
         }
        }
       ],
       branch: [],
       franchise: []
     }
    },
    product: {
      list: [
       {
         productname: 'Kohaku',
         rapportname: 'Rapport name',
         definition: 'Product definition',
         authentications: {
          producttype: 'Product type',
          productid: 'mrn-ricekohaku-1'
         },
         specifications: [ 
           {
             productname: 'Kohaku Yellow',
             rapportname: 'Rapport name',
             definition: 'Product definition',
             authentications: {
               producttype: 'Product type',
               productid: 'mrn-ricekohaku-1-category1'
             },
             details: {
              product: {
               name: 'Kokaku / Kohaku Yellow',
               rapportname: 'Product rapport name',
               definition: 'Product definition',
               category: 'MRN',
               specification: {
                for: {
                 part: 'Product part',
                 gender: "Male of Female, for all type's of gender",
                 category: 'For adults and children above 4-6 months' 
                },
                set: {
                 set: false,
                 productindication: 'Oridinary',
                 pcs: 10
                },
                size: 'Product size',
                color: 'Product color',
                weight: 10,
                top: 'Top product specification',
                left: 'Left product specification',
                bottom: 'Bottom product specification',
                right: 'Right product specification',
                front: 'Front product specification',
                back: 'Back product specification'
               },
               pricesbreakdown: {
                 price: 10,
                 capital: 8,
                 suggested_retail_price: 10,
                 vat: 2
               },
               cybervisual: {
                 images: {
                   maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                   maindisplayimages: [
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   },
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   },
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   }
                   ]
                 },
                 videos: [
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   }
                 ]
               }
             },
             locations: {
               operations: [
                 {
                   street: 'Street',
                   baranggay: 'Baranggay',
                   trademark: 'Trademark',
                   city: 'City',
                   province: 'Province',
                   country: 'Country'
                 }
               ]
             }
             },
             system: {
               request: {
                 pcs: 0,
                 orderspecification: "",
                 merchandise: {
                   price: 0,
                   capital: 0,
                   suggested_retail_price: 0,
                   vat: 0,
                 },
                 shipping: {
                  category: 'Shipping category',
                  weight: 'Shipping weight',
                  fee: 0
                 },
                 totalpayment: {
                   price: 0
                 },
                 products: [
                 ],
               },
               stocks: [
                 {
                   productname: 'Kohaku / Kohaku Yellow / White Grains',
                   rapportname: 'Rapport name',
                   definition: 'Product definition',
                   authentications: {
                     producttype: 'Product type',
                     productid: 'mrn-ricekohaku-1-category1-product1'
                    },
                   details: {
                   product: {
                    name: 'Kokahu / Kohaku Yellow / White grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    category: 'MRN',
                    specification: {
                     for: {
                      part: 'Product part',
                      gender: 'Male',
                      category: 'Adults' 
                     },
                     set: {
                      set: false,
                      productindication: 'Oridinary',
                      pcs: 10
                     },
                     size: 'Product size',
                     color: 'Product color',
                     weight: 'Product weight',
                     top: 'Top product specification',
                     left: 'Left product specification',
                     bottom: 'Bottom product specification',
                     right: 'Right product specification',
                     front: 'Front product specification',
                     back: 'Back product specification'
                     },
                     pricesbreakdown: {
                       price: 10,
                       capital: 8,
                       suggested_retail_price: 10,
                       vat: 2
                     },
                     cybervisual: {
                       images: {
                         maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                         maindisplayimages: [
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         }
                         ]
                       },
                       videos: [
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         }
                       ]
                     },
                   },
                   locations: {
                     operations: [
                       {
                         street: 'Street',
                         baranggay: 'Baranggay',
                         trademark: 'Trademark',
                         city: 'City',
                         province: 'Province',
                         country: 'Country'
                       }
                     ]
                   }
                   },
                   system: {
                     request: {
                       pcs: 0,
                       orderspecification: "",
                       product: [
                       ],
                       shipping: {
                        category: 'Shipping category',
                        weight: 'Shipping weight',
                        fee: 0
                       }
                     },
                     stocks: [],
                     purchase: {
                       people: [],
                       xirbit: []
                     }
                   }
                 },
                 {
                  productname: 'Kohaku / Kohaku Yellow / White Grains',
                  rapportname: 'Rapport name',
                  definition: 'Product definition',
                  authentications: {
                   producttype: 'Product type',
                   productid: 'mrn-ricekohaku-1-category1-product2'
                  },
                  details: {
                   product: {
                    name: 'Kohaku / Kohaku Yellow / White big grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    category: 'MRN',
                    specification: {
                     for: {
                      part: 'Product part',
                      gender: 'Male',
                      category: 'Adults' 
                     },
                     set: {
                      set: false,
                      productindication: 'Oridinary',
                      pcs: 10
                     },
                     size: 'Product size',
                     color: 'Product color',
                     weight: 'Product weight',
                     top: 'Top product specification',
                     left: 'Left product specification',
                     bottom: 'Bottom product specification',
                     right: 'Right product specification',
                     front: 'Front product specification',
                     back: 'Back product specification'
                     },
                     pricesbreakdown: {
                       price: 10,
                       capital: 8,
                       suggested_retail_price: 10,
                       vat: 2
                     },
                     cybervisual: {
                       images: {
                         maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                         maindisplayimages: [
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         }
                         ]
                       },
                       videos: [
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         }
                       ]
                     },
                   },
                   locations: {
                     operations: [
                       {
                         street: 'Street',
                         baranggay: 'Baranggay',
                         trademark: 'Trademark',
                         city: 'City',
                         province: 'Province',
                         country: 'Country'
                       }
                     ]
                   }
                  },
                  system: {
                     request: {
                       pcs: 0,
                       orderspecification: "",
                       product: [
                       ],
                       shipping: {
                        category: 'Shipping category',
                        weight: 'Shipping weight',
                        fee: 0
                       }
                     },
                     stocks: [],
                     purchase: {
                       people: [],
                       xirbit: []
                     }
                 }   
                 }      
               ],
               purchase: {
                 people: [],
                 xirbit: []
               }
             }
           }
         ]
       }
      ]
    },
    projects: [
     {
     date: "111-111-111",
     purpose: "Purpose",
     status: "Status",
     contributions: {
       contributioncompletion: "0",
       contributed: 0
     },
     locations: [
       {
       date: "111-111-111",
       contribution: "0",
       purpose: "Project purpose",
       location: {
         street: "Street",
         trademark: "Trademark",
         baranggay: "Baranggay",
         city: "City",
         province: "Province",
         coutnry: "Country"
       },
       status: "Contributed must be complete to complete the project",
       contributions: {
         contributioncompletion: "0",  
         contributed: 0
       }
       }
     ]
     }
    ]
  },
  {
    details: {
      companyname: "Kukaku",
      description: {
       companydescription: "Company description",
       companymotto: "Company motto"
      }
    },
    locations: {
     farm: [],
     plantations: [],
     manufacturing: [],
     packaging: [],
     distributing: [],
     offices: {
       main: [ 
         {
         location: {
           street: "Street",
           baranggay: "Baranggay",
           trademark: "Trademark",
           city: "City",
           province: "Province",
           country: "Country"
         },
         contact: {
           telephone: "0",
           phonenumber: "0",
           emailaddress: "None",
           website: "None"
         }
        }
       ],
       branch: [],
       franchise: []
     }
    },
    product: {
      list: [
       {
         productname: 'Kohaku',
         rapportname: 'Rapport name',
         definition: 'Product definition',
         authentications: {
          producttype: 'Product type',
          productid: 'mrn-ricekohaku-1'
         },
         specifications: [ 
           {
             productname: 'Kohaku Yellow',
             rapportname: 'Rapport name',
             definition: 'Product definition',
             authentications: {
               producttype: 'Product type',
               productid: 'mrn-ricekohaku-1-category1'
             },
             details: {
              product: {
               name: 'Kokaku / Kohaku Yellow',
               rapportname: 'Product rapport name',
               definition: 'Product definition',
               category: 'MRN',
               specification: {
                for: {
                 part: 'Product part',
                 gender: "Male of Female, for all type's of gender",
                 category: 'For adults and children above 4-6 months' 
                },
                set: {
                 set: false,
                 productindication: 'Oridinary',
                 pcs: 10
                },
                size: 'Product size',
                color: 'Product color',
                weight: 10,
                top: 'Top product specification',
                left: 'Left product specification',
                bottom: 'Bottom product specification',
                right: 'Right product specification',
                front: 'Front product specification',
                back: 'Back product specification'
               },
               pricesbreakdown: {
                 price: 10,
                 capital: 8,
                 suggested_retail_price: 10,
                 vat: 2
               },
               cybervisual: {
                 images: {
                   maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                   maindisplayimages: [
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   },
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   },
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   }
                   ]
                 },
                 videos: [
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   }
                 ]
               }
             },
             locations: {
               operations: [
                 {
                   street: 'Street',
                   baranggay: 'Baranggay',
                   trademark: 'Trademark',
                   city: 'City',
                   province: 'Province',
                   country: 'Country'
                 }
               ]
             }
             },
             system: {
               request: {
                 pcs: 0,
                 orderspecification: "",
                 merchandise: {
                   price: 0,
                   capital: 0,
                   suggested_retail_price: 0,
                   vat: 0,
                 },
                 shipping: {
                  category: 'Shipping category',
                  weight: 'Shipping weight',
                  fee: 0
                 },
                 totalpayment: {
                   price: 0
                 },
                 products: [
                 ],
               },
               stocks: [
                 {
                   productname: 'Kohaku / Kohaku Yellow / White Grains',
                   rapportname: 'Rapport name',
                   definition: 'Product definition',
                   authentications: {
                     producttype: 'Product type',
                     productid: 'mrn-ricekohaku-1-category1-product1'
                    },
                   details: {
                   product: {
                    name: 'Kokahu / Kohaku Yellow / White grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    category: 'MRN',
                    specification: {
                     for: {
                      part: 'Product part',
                      gender: 'Male',
                      category: 'Adults' 
                     },
                     set: {
                      set: false,
                      productindication: 'Oridinary',
                      pcs: 10
                     },
                     size: 'Product size',
                     color: 'Product color',
                     weight: 'Product weight',
                     top: 'Top product specification',
                     left: 'Left product specification',
                     bottom: 'Bottom product specification',
                     right: 'Right product specification',
                     front: 'Front product specification',
                     back: 'Back product specification'
                     },
                     pricesbreakdown: {
                       price: 10,
                       capital: 8,
                       suggested_retail_price: 10,
                       vat: 2
                     },
                     cybervisual: {
                       images: {
                         maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                         maindisplayimages: [
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         }
                         ]
                       },
                       videos: [
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         }
                       ]
                     },
                   },
                   locations: {
                     operations: [
                       {
                         street: 'Street',
                         baranggay: 'Baranggay',
                         trademark: 'Trademark',
                         city: 'City',
                         province: 'Province',
                         country: 'Country'
                       }
                     ]
                   }
                   },
                   system: {
                     request: {
                       pcs: 0,
                       orderspecification: "",
                       product: [
                       ],
                       shipping: {
                        category: 'Shipping category',
                        weight: 'Shipping weight',
                        fee: 0
                       }
                     },
                     stocks: [],
                     purchase: {
                       people: [],
                       xirbit: []
                     }
                   }
                 },
                 {
                  productname: 'Kohaku / Kohaku Yellow / White Grains',
                  rapportname: 'Rapport name',
                  definition: 'Product definition',
                  authentications: {
                   producttype: 'Product type',
                   productid: 'mrn-ricekohaku-1-category1-product2'
                  },
                  details: {
                   product: {
                    name: 'Kohaku / Kohaku Yellow / White big grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    category: 'MRN',
                    specification: {
                     for: {
                      part: 'Product part',
                      gender: 'Male',
                      category: 'Adults' 
                     },
                     set: {
                      set: false,
                      productindication: 'Oridinary',
                      pcs: 10
                     },
                     size: 'Product size',
                     color: 'Product color',
                     weight: 'Product weight',
                     top: 'Top product specification',
                     left: 'Left product specification',
                     bottom: 'Bottom product specification',
                     right: 'Right product specification',
                     front: 'Front product specification',
                     back: 'Back product specification'
                     },
                     pricesbreakdown: {
                       price: 10,
                       capital: 8,
                       suggested_retail_price: 10,
                       vat: 2
                     },
                     cybervisual: {
                       images: {
                         maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                         maindisplayimages: [
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         }
                         ]
                       },
                       videos: [
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         }
                       ]
                     },
                   },
                   locations: {
                     operations: [
                       {
                         street: 'Street',
                         baranggay: 'Baranggay',
                         trademark: 'Trademark',
                         city: 'City',
                         province: 'Province',
                         country: 'Country'
                       }
                     ]
                   }
                  },
                  system: {
                     request: {
                       pcs: 0,
                       orderspecification: "",
                       product: [
                       ],
                       shipping: {
                        category: 'Shipping category',
                        weight: 'Shipping weight',
                        fee: 0
                       }
                     },
                     stocks: [],
                     purchase: {
                       people: [],
                       xirbit: []
                     }
                 }   
                 }      
               ],
               purchase: {
                 people: [],
                 xirbit: []
               }
             }
           }
         ]
       }
      ]
    },
    projects: [
     {
     date: "111-111-111",
     purpose: "Purpose",
     status: "Status",
     contributions: {
       contributioncompletion: "0",
       contributed: 0
     },
     locations: [
       {
       date: "111-111-111",
       contribution: "0",
       purpose: "Project purpose",
       location: {
         street: "Street",
         trademark: "Trademark",
         baranggay: "Baranggay",
         city: "City",
         province: "Province",
         coutnry: "Country"
       },
       status: "Contributed must be complete to complete the project",
       contributions: {
         contributioncompletion: "0",  
         contributed: 0
       }
       }
     ]
     }
    ]
  },
  {
    details: {
      companyname: "Kukaku",
      description: {
       companydescription: "Company description",
       companymotto: "Company motto"
      }
    },
    locations: {
     farm: [],
     plantations: [],
     manufacturing: [],
     packaging: [],
     distributing: [],
     offices: {
       main: [ 
         {
         location: {
           street: "Street",
           baranggay: "Baranggay",
           trademark: "Trademark",
           city: "City",
           province: "Province",
           country: "Country"
         },
         contact: {
           telephone: "0",
           phonenumber: "0",
           emailaddress: "None",
           website: "None"
         }
        }
       ],
       branch: [],
       franchise: []
     }
    },
    product: {
      list: [
       {
         productname: 'Kohaku',
         rapportname: 'Rapport name',
         definition: 'Product definition',
         authentications: {
          producttype: 'Product type',
          productid: 'mrn-ricekohaku-1'
         },
         specifications: [ 
           {
             productname: 'Kohaku Yellow',
             rapportname: 'Rapport name',
             definition: 'Product definition',
             authentications: {
               producttype: 'Product type',
               productid: 'mrn-ricekohaku-1-category1'
             },
             details: {
              product: {
               name: 'Kokaku / Kohaku Yellow',
               rapportname: 'Product rapport name',
               definition: 'Product definition',
               category: 'MRN',
               specification: {
                for: {
                 part: 'Product part',
                 gender: "Male of Female, for all type's of gender",
                 category: 'For adults and children above 4-6 months' 
                },
                set: {
                 set: false,
                 productindication: 'Oridinary',
                 pcs: 10
                },
                size: 'Product size',
                color: 'Product color',
                weight: 10,
                top: 'Top product specification',
                left: 'Left product specification',
                bottom: 'Bottom product specification',
                right: 'Right product specification',
                front: 'Front product specification',
                back: 'Back product specification'
               },
               pricesbreakdown: {
                 price: 10,
                 capital: 8,
                 suggested_retail_price: 10,
                 vat: 2
               },
               cybervisual: {
                 images: {
                   maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                   maindisplayimages: [
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   },
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   },
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   }
                   ]
                 },
                 videos: [
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   }
                 ]
               }
             },
             locations: {
               operations: [
                 {
                   street: 'Street',
                   baranggay: 'Baranggay',
                   trademark: 'Trademark',
                   city: 'City',
                   province: 'Province',
                   country: 'Country'
                 }
               ]
             }
             },
             system: {
               request: {
                 pcs: 0,
                 orderspecification: "",
                 merchandise: {
                   price: 0,
                   capital: 0,
                   suggested_retail_price: 0,
                   vat: 0,
                 },
                 shipping: {
                  category: 'Shipping category',
                  weight: 'Shipping weight',
                  fee: 0
                 },
                 totalpayment: {
                   price: 0
                 },
                 products: [
                 ],
               },
               stocks: [
                 {
                   productname: 'Kohaku / Kohaku Yellow / White Grains',
                   rapportname: 'Rapport name',
                   definition: 'Product definition',
                   authentications: {
                     producttype: 'Product type',
                     productid: 'mrn-ricekohaku-1-category1-product1'
                    },
                   details: {
                   product: {
                    name: 'Kokahu / Kohaku Yellow / White grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    category: 'MRN',
                    specification: {
                     for: {
                      part: 'Product part',
                      gender: 'Male',
                      category: 'Adults' 
                     },
                     set: {
                      set: false,
                      productindication: 'Oridinary',
                      pcs: 10
                     },
                     size: 'Product size',
                     color: 'Product color',
                     weight: 'Product weight',
                     top: 'Top product specification',
                     left: 'Left product specification',
                     bottom: 'Bottom product specification',
                     right: 'Right product specification',
                     front: 'Front product specification',
                     back: 'Back product specification'
                     },
                     pricesbreakdown: {
                       price: 10,
                       capital: 8,
                       suggested_retail_price: 10,
                       vat: 2
                     },
                     cybervisual: {
                       images: {
                         maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                         maindisplayimages: [
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         }
                         ]
                       },
                       videos: [
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         }
                       ]
                     },
                   },
                   locations: {
                     operations: [
                       {
                         street: 'Street',
                         baranggay: 'Baranggay',
                         trademark: 'Trademark',
                         city: 'City',
                         province: 'Province',
                         country: 'Country'
                       }
                     ]
                   }
                   },
                   system: {
                     request: {
                       pcs: 0,
                       orderspecification: "",
                       product: [
                       ],
                       shipping: {
                        category: 'Shipping category',
                        weight: 'Shipping weight',
                        fee: 0
                       }
                     },
                     stocks: [],
                     purchase: {
                       people: [],
                       xirbit: []
                     }
                   }
                 },
                 {
                  productname: 'Kohaku / Kohaku Yellow / White Grains',
                  rapportname: 'Rapport name',
                  definition: 'Product definition',
                  authentications: {
                   producttype: 'Product type',
                   productid: 'mrn-ricekohaku-1-category1-product2'
                  },
                  details: {
                   product: {
                    name: 'Kohaku / Kohaku Yellow / White big grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    category: 'MRN',
                    specification: {
                     for: {
                      part: 'Product part',
                      gender: 'Male',
                      category: 'Adults' 
                     },
                     set: {
                      set: false,
                      productindication: 'Oridinary',
                      pcs: 10
                     },
                     size: 'Product size',
                     color: 'Product color',
                     weight: 'Product weight',
                     top: 'Top product specification',
                     left: 'Left product specification',
                     bottom: 'Bottom product specification',
                     right: 'Right product specification',
                     front: 'Front product specification',
                     back: 'Back product specification'
                     },
                     pricesbreakdown: {
                       price: 10,
                       capital: 8,
                       suggested_retail_price: 10,
                       vat: 2
                     },
                     cybervisual: {
                       images: {
                         maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                         maindisplayimages: [
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         }
                         ]
                       },
                       videos: [
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         }
                       ]
                     },
                   },
                   locations: {
                     operations: [
                       {
                         street: 'Street',
                         baranggay: 'Baranggay',
                         trademark: 'Trademark',
                         city: 'City',
                         province: 'Province',
                         country: 'Country'
                       }
                     ]
                   }
                  },
                  system: {
                     request: {
                       pcs: 0,
                       orderspecification: "",
                       product: [
                       ],
                       shipping: {
                        category: 'Shipping category',
                        weight: 'Shipping weight',
                        fee: 0
                       }
                     },
                     stocks: [],
                     purchase: {
                       people: [],
                       xirbit: []
                     }
                 }   
                 }      
               ],
               purchase: {
                 people: [],
                 xirbit: []
               }
             }
           }
         ]
       }
      ]
    },
    projects: [
     {
     date: "111-111-111",
     purpose: "Purpose",
     status: "Status",
     contributions: {
       contributioncompletion: "0",
       contributed: 0
     },
     locations: [
       {
       date: "111-111-111",
       contribution: "0",
       purpose: "Project purpose",
       location: {
         street: "Street",
         trademark: "Trademark",
         baranggay: "Baranggay",
         city: "City",
         province: "Province",
         coutnry: "Country"
       },
       status: "Contributed must be complete to complete the project",
       contributions: {
         contributioncompletion: "0",  
         contributed: 0
       }
       }
     ]
     }
    ]
  }
])

const [businesses, businessescb] = useState([
  {
    details: {
      businessname: "MCKENZIE",
      description: {
       businessdescription: "Business description",
       businessmotto: "Business motto"
      }
    },
    locations: {
     farm: [],
     plantations: [],
     manufacturing: [],
     packaging: [],
     distributing: [],
     offices: {
       main: [ 
         {
         location: {
           street: "Street",
           baranggay: "Baranggay",
           trademark: "Trademark",
           city: "City",
           province: "Province",
           country: "Country"
         },
         contact: {
           telephone: "0",
           phonenumber: "0",
           emailaddress: "None",
           website: "None"
         }
        }
       ],
       branch: [],
       franchise: []
     }
    },
    product: {
      list: [
       {
         productname: 'Kohaku',
         rapportname: 'Rapport name',
         definition: 'Product definition',
         authentications: {
          producttype: 'Product type',
          productid: 'mrn-ricekohaku-1'
         },
         specifications: [ 
           {
             productname: 'Kohaku Yellow',
             rapportname: 'Rapport name',
             definition: 'Product definition',
             authentications: {
               producttype: 'Product type',
               productid: 'mrn-ricekohaku-1-category1'
             },
             details: {
              product: {
               name: 'Kokaku / Kohaku Yellow',
               rapportname: 'Product rapport name',
               definition: 'Product definition',
               category: 'MRN',
               specification: {
                for: {
                 part: 'Product part',
                 gender: "Male of Female, for all type's of gender",
                 category: 'For adults and children above 4-6 months' 
                },
                set: {
                 set: false,
                 productindication: 'Oridinary',
                 pcs: 10
                },
                size: 'Product size',
                color: 'Product color',
                weight: 10,
                top: 'Top product specification',
                left: 'Left product specification',
                bottom: 'Bottom product specification',
                right: 'Right product specification',
                front: 'Front product specification',
                back: 'Back product specification'
               },
               pricesbreakdown: {
                 price: 10,
                 capital: 8,
                 suggested_retail_price: 10,
                 vat: 2
               },
               cybervisual: {
                 images: {
                   maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                   maindisplayimages: [
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   },
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   },
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   }
                   ]
                 },
                 videos: [
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   }
                 ]
               }
             },
             locations: {
               operations: [
                 {
                   street: 'Street',
                   baranggay: 'Baranggay',
                   trademark: 'Trademark',
                   city: 'City',
                   province: 'Province',
                   country: 'Country'
                 }
               ]
             }
             },
             system: {
               request: {
                 pcs: 0,
                 orderspecification: "",
                 merchandise: {
                   price: 0,
                   capital: 0,
                   suggested_retail_price: 0,
                   vat: 0,
                 },
                 shipping: {
                  category: 'Shipping category',
                  weight: 'Shipping weight',
                  fee: 0
                 },
                 totalpayment: {
                   price: 0
                 },
                 products: [
                 ],
               },
               stocks: [
                 {
                   productname: 'Kohaku / Kohaku Yellow / White Grains',
                   rapportname: 'Rapport name',
                   definition: 'Product definition',
                   authentications: {
                     producttype: 'Product type',
                     productid: 'mrn-ricekohaku-1-category1-product1'
                    },
                   details: {
                   product: {
                    name: 'Kokahu / Kohaku Yellow / White grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    category: 'MRN',
                    specification: {
                     for: {
                      part: 'Product part',
                      gender: 'Male',
                      category: 'Adults' 
                     },
                     set: {
                      set: false,
                      productindication: 'Oridinary',
                      pcs: 10
                     },
                     size: 'Product size',
                     color: 'Product color',
                     weight: 'Product weight',
                     top: 'Top product specification',
                     left: 'Left product specification',
                     bottom: 'Bottom product specification',
                     right: 'Right product specification',
                     front: 'Front product specification',
                     back: 'Back product specification'
                     },
                     pricesbreakdown: {
                       price: 10,
                       capital: 8,
                       suggested_retail_price: 10,
                       vat: 2
                     },
                     cybervisual: {
                       images: {
                         maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                         maindisplayimages: [
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         }
                         ]
                       },
                       videos: [
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         }
                       ]
                     },
                   },
                   locations: {
                     operations: [
                       {
                         street: 'Street',
                         baranggay: 'Baranggay',
                         trademark: 'Trademark',
                         city: 'City',
                         province: 'Province',
                         country: 'Country'
                       }
                     ]
                   }
                   },
                   system: {
                     request: {
                       pcs: 0,
                       orderspecification: "",
                       product: [
                       ],
                       shipping: {
                        category: 'Shipping category',
                        weight: 'Shipping weight',
                        fee: 0
                       }
                     },
                     stocks: [],
                     purchase: {
                       people: [],
                       xirbit: []
                     }
                   }
                 },
                 {
                  productname: 'Kohaku / Kohaku Yellow / White Grains',
                  rapportname: 'Rapport name',
                  definition: 'Product definition',
                  authentications: {
                   producttype: 'Product type',
                   productid: 'mrn-ricekohaku-1-category1-product2'
                  },
                  details: {
                   product: {
                    name: 'Kohaku / Kohaku Yellow / White big grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    category: 'MRN',
                    specification: {
                     for: {
                      part: 'Product part',
                      gender: 'Male',
                      category: 'Adults' 
                     },
                     set: {
                      set: false,
                      productindication: 'Oridinary',
                      pcs: 10
                     },
                     size: 'Product size',
                     color: 'Product color',
                     weight: 'Product weight',
                     top: 'Top product specification',
                     left: 'Left product specification',
                     bottom: 'Bottom product specification',
                     right: 'Right product specification',
                     front: 'Front product specification',
                     back: 'Back product specification'
                     },
                     pricesbreakdown: {
                       price: 10,
                       capital: 8,
                       suggested_retail_price: 10,
                       vat: 2
                     },
                     cybervisual: {
                       images: {
                         maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                         maindisplayimages: [
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         }
                         ]
                       },
                       videos: [
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         }
                       ]
                     },
                   },
                   locations: {
                     operations: [
                       {
                         street: 'Street',
                         baranggay: 'Baranggay',
                         trademark: 'Trademark',
                         city: 'City',
                         province: 'Province',
                         country: 'Country'
                       }
                     ]
                   }
                  },
                  system: {
                     request: {
                       pcs: 0,
                       orderspecification: "",
                       product: [
                       ],
                       shipping: {
                        category: 'Shipping category',
                        weight: 'Shipping weight',
                        fee: 0
                       }
                     },
                     stocks: [],
                     purchase: {
                       people: [],
                       xirbit: []
                     }
                 }   
                 }      
               ],
               purchase: {
                 people: [],
                 xirbit: []
               }
             }
           }
         ]
       }
      ]
    },
    projects: [
     {
     date: "111-111-111",
     purpose: "Purpose",
     status: "Status",
     contributions: {
       contributioncompletion: "0",
       contributed: 0
     },
     locations: [
       {
       date: "111-111-111",
       contribution: "0",
       purpose: "Project purpose",
       location: {
         street: "Street",
         trademark: "Trademark",
         baranggay: "Baranggay",
         city: "City",
         province: "Province",
         coutnry: "Country"
       },
       status: "Contributed must be complete to complete the project",
       contributions: {
         contributioncompletion: "0",  
         contributed: 0
       }
       }
     ]
     }
    ]
  },
  {
    details: {
      businessname: "MCKENZIE",
      description: {
       businessdescription: "Business description",
       businessmotto: "Business motto"
      }
    },
    locations: {
     farm: [],
     plantations: [],
     manufacturing: [],
     packaging: [],
     distributing: [],
     offices: {
       main: [ 
         {
         location: {
           street: "Street",
           baranggay: "Baranggay",
           trademark: "Trademark",
           city: "City",
           province: "Province",
           country: "Country"
         },
         contact: {
           telephone: "0",
           phonenumber: "0",
           emailaddress: "None",
           website: "None"
         }
        }
       ],
       branch: [],
       franchise: []
     }
    },
    product: {
      list: [
       {
         productname: 'Kohaku',
         rapportname: 'Rapport name',
         definition: 'Product definition',
         authentications: {
          producttype: 'Product type',
          productid: 'mrn-ricekohaku-1'
         },
         specifications: [ 
           {
             productname: 'Kohaku Yellow',
             rapportname: 'Rapport name',
             definition: 'Product definition',
             authentications: {
               producttype: 'Product type',
               productid: 'mrn-ricekohaku-1-category1'
             },
             details: {
              product: {
               name: 'Kokaku / Kohaku Yellow',
               rapportname: 'Product rapport name',
               definition: 'Product definition',
               category: 'MRN',
               specification: {
                for: {
                 part: 'Product part',
                 gender: "Male of Female, for all type's of gender",
                 category: 'For adults and children above 4-6 months' 
                },
                set: {
                 set: false,
                 productindication: 'Oridinary',
                 pcs: 10
                },
                size: 'Product size',
                color: 'Product color',
                weight: 10,
                top: 'Top product specification',
                left: 'Left product specification',
                bottom: 'Bottom product specification',
                right: 'Right product specification',
                front: 'Front product specification',
                back: 'Back product specification'
               },
               pricesbreakdown: {
                 price: 10,
                 capital: 8,
                 suggested_retail_price: 10,
                 vat: 2
               },
               cybervisual: {
                 images: {
                   maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                   maindisplayimages: [
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   },
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   },
                   {
                     displayimage: '../images/landingpage/bondpaperimage.jpg'
                   }
                   ]
                 },
                 videos: [
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   },
                   {
                     youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                   }
                 ]
               }
             },
             locations: {
               operations: [
                 {
                   street: 'Street',
                   baranggay: 'Baranggay',
                   trademark: 'Trademark',
                   city: 'City',
                   province: 'Province',
                   country: 'Country'
                 }
               ]
             }
             },
             system: {
               request: {
                 pcs: 0,
                 orderspecification: "",
                 merchandise: {
                   price: 0,
                   capital: 0,
                   suggested_retail_price: 0,
                   vat: 0,
                 },
                 shipping: {
                  category: 'Shipping category',
                  weight: 'Shipping weight',
                  fee: 0
                 },
                 totalpayment: {
                   price: 0
                 },
                 products: [
                 ],
               },
               stocks: [
                 {
                   productname: 'Kohaku / Kohaku Yellow / White Grains',
                   rapportname: 'Rapport name',
                   definition: 'Product definition',
                   authentications: {
                     producttype: 'Product type',
                     productid: 'mrn-ricekohaku-1-category1-product1'
                    },
                   details: {
                   product: {
                    name: 'Kokahu / Kohaku Yellow / White grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    category: 'MRN',
                    specification: {
                     for: {
                      part: 'Product part',
                      gender: 'Male',
                      category: 'Adults' 
                     },
                     set: {
                      set: false,
                      productindication: 'Oridinary',
                      pcs: 10
                     },
                     size: 'Product size',
                     color: 'Product color',
                     weight: 'Product weight',
                     top: 'Top product specification',
                     left: 'Left product specification',
                     bottom: 'Bottom product specification',
                     right: 'Right product specification',
                     front: 'Front product specification',
                     back: 'Back product specification'
                     },
                     pricesbreakdown: {
                       price: 10,
                       capital: 8,
                       suggested_retail_price: 10,
                       vat: 2
                     },
                     cybervisual: {
                       images: {
                         maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                         maindisplayimages: [
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         }
                         ]
                       },
                       videos: [
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         }
                       ]
                     },
                   },
                   locations: {
                     operations: [
                       {
                         street: 'Street',
                         baranggay: 'Baranggay',
                         trademark: 'Trademark',
                         city: 'City',
                         province: 'Province',
                         country: 'Country'
                       }
                     ]
                   }
                   },
                   system: {
                     request: {
                       pcs: 0,
                       orderspecification: "",
                       product: [
                       ],
                       shipping: {
                        category: 'Shipping category',
                        weight: 'Shipping weight',
                        fee: 0
                       }
                     },
                     stocks: [],
                     purchase: {
                       people: [],
                       xirbit: []
                     }
                   }
                 },
                 {
                  productname: 'Kohaku / Kohaku Yellow / White Grains',
                  rapportname: 'Rapport name',
                  definition: 'Product definition',
                  authentications: {
                   producttype: 'Product type',
                   productid: 'mrn-ricekohaku-1-category1-product2'
                  },
                  details: {
                   product: {
                    name: 'Kohaku / Kohaku Yellow / White big grains',
                    rapportname: 'Product rapport name',
                    definition: 'Product definition',
                    category: 'MRN',
                    specification: {
                     for: {
                      part: 'Product part',
                      gender: 'Male',
                      category: 'Adults' 
                     },
                     set: {
                      set: false,
                      productindication: 'Oridinary',
                      pcs: 10
                     },
                     size: 'Product size',
                     color: 'Product color',
                     weight: 'Product weight',
                     top: 'Top product specification',
                     left: 'Left product specification',
                     bottom: 'Bottom product specification',
                     right: 'Right product specification',
                     front: 'Front product specification',
                     back: 'Back product specification'
                     },
                     pricesbreakdown: {
                       price: 10,
                       capital: 8,
                       suggested_retail_price: 10,
                       vat: 2
                     },
                     cybervisual: {
                       images: {
                         maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                         maindisplayimages: [
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         },
                         {
                           displayimage: '../images/landingpage/bondpaperimage.jpg'
                         }
                         ]
                       },
                       videos: [
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         },
                         {
                           youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                         }
                       ]
                     },
                   },
                   locations: {
                     operations: [
                       {
                         street: 'Street',
                         baranggay: 'Baranggay',
                         trademark: 'Trademark',
                         city: 'City',
                         province: 'Province',
                         country: 'Country'
                       }
                     ]
                   }
                  },
                  system: {
                     request: {
                       pcs: 0,
                       orderspecification: "",
                       product: [
                       ],
                       shipping: {
                        category: 'Shipping category',
                        weight: 'Shipping weight',
                        fee: 0
                       }
                     },
                     stocks: [],
                     purchase: {
                       people: [],
                       xirbit: []
                     }
                 }   
                 }      
               ],
               purchase: {
                 people: [],
                 xirbit: []
               }
             }
           }
         ]
       }
      ]
    },
    projects: [
     {
     date: "111-111-111",
     purpose: "Purpose",
     status: "Status",
     contributions: {
       contributioncompletion: "0",
       contributed: 0
     },
     locations: [
       {
       date: "111-111-111",
       contribution: "0",
       purpose: "Project purpose",
       location: {
         street: "Street",
         trademark: "Trademark",
         baranggay: "Baranggay",
         city: "City",
         province: "Province",
         coutnry: "Country"
       },
       status: "Contributed must be complete to complete the project",
       contributions: {
         contributioncompletion: "0",  
         contributed: 0
       }
       }
     ]
     }
    ]
  }
]);

const [products, productscb] = useState([
  {
    productname: 'Kohaku',
    rapportname: 'Rapport name',
    definition: 'Product definition',
    category: 'Food/Rice',
    authentications: {
     producttype: 'Product type',
     productid: 'mrn-ricekohaku-1'
    },
    specification: {
      for: {
       part: '50kg',
       gender: "Male or Female, for all type's of gender",
       category: 'For adults and children around 6 months' 
      }
    },
    specifications: [ 
      {
        productname: 'Kohaku Yellow',
        rapportname: 'Rapport name',
        definition: 'Product definition',
        category: 'Food/Rice',
        authentications: {
          producttype: 'Product type',
          productid: 'mrn-ricekohaku-1-category1'
        },
        details: {
         product: {
          name: 'Kokaku / Kohaku Yellow',
          rapportname: 'Product rapport name',
          definition: 'Product definition',
          category: 'Food/Rice',
          specification: {
           for: {
            part: '50kg',
            gender: "Male or Female, for all type's of gender",
            category: 'For adults and children around 6 months' 
           },
           set: {
            set: false,
            productindication: 'Special',
            pcs: 0
           },
           size: 'Product size',
           color: 'Product color',
           weight: 50000,
           top: 'Top product specification',
           left: 'Left product specification',
           bottom: 'Bottom product specification',
           right: 'Right product specification',
           front: 'Front product specification',
           back: 'Back product specification',
           facts: {
            ingredients: []
           }
          },
          pricesbreakdown: {
            price: 10,
            capital: 8,
            suggested_retail_price: 10,
            vat: 2
          },
          cybervisual: {
            images: {
              maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
              maindisplayimages: [
              {
                displayimage: '../images/landingpage/bondpaperimage.jpg'
              },
              {
                displayimage: '../images/landingpage/bondpaperimage.jpg'
              },
              {
                displayimage: '../images/landingpage/bondpaperimage.jpg'
              }
              ]
            },
            videos: [
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              },
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              },
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              },
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              }
            ]
          }
        },
        locations: {
          operations: [
            {
              street: 'Street',
              baranggay: 'Baranggay',
              trademark: 'Trademark',
              city: 'City',
              province: 'Province',
              country: 'Country'
            }
          ]
        }
        },
        system: {
          request: {
            pcs: 0,
            orderspecification: "",
            merchandise: {
              price: 0,
              capital: 0,
              suggested_retail_price: 0,
              vat: 0,
            },
            shipping: {
             category: 'Shipping category',
             weight: 'Shipping weight',
             fee: 0
            },
            totalpayment: {
              price: 0
            },
            products: [
            ],
          },
          stocks: [
            {
              productname: 'Kohaku / Kohaku Yellow / White Grains',
              rapportname: 'Rapport name',
              definition: 'Product definition',
              authentications: {
                producttype: 'Product type',
                productid: 'mrn-ricekohaku-1-category1-product1'
               },
              details: {
              product: {
               name: 'Kokahu / Kohaku Yellow / White grains',
               rapportname: 'Product rapport name',
               definition: 'Product definition',
               category: 'MRN',
               specification: {
                for: {
                 part: 'Product part',
                 gender: "Male or Female, for all type's of gender",
                 category: 'For adults and children around 6 months' 
                },
                set: {
                 set: false,
                 productindication: 'Oridinary',
                 pcs: 10
                },
                size: 'Product size',
                color: 'Product color',
                weight: 'Product weight',
                top: 'Top product specification',
                left: 'Left product specification',
                bottom: 'Bottom product specification',
                right: 'Right product specification',
                front: 'Front product specification',
                back: 'Back product specification'
                },
                pricesbreakdown: {
                  price: 10,
                  capital: 8,
                  suggested_retail_price: 10,
                  vat: 2
                },
                cybervisual: {
                  images: {
                    maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                    maindisplayimages: [
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    }
                    ]
                  },
                  videos: [
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    }
                  ]
                },
              },
              locations: {
                operations: [
                  {
                    street: 'Street',
                    baranggay: 'Baranggay',
                    trademark: 'Trademark',
                    city: 'City',
                    province: 'Province',
                    country: 'Country'
                  }
                ]
              }
              },
              system: {
                request: {
                  pcs: 0,
                  orderspecification: "",
                  product: [
                  ],
                  shipping: {
                   category: 'Shipping category',
                   weight: 'Shipping weight',
                   fee: 0
                  }
                },
                stocks: [],
                purchase: {
                  people: [],
                  xirbit: []
                }
              }
            },
            {
             productname: 'Kohaku / Kohaku Yellow / White Grains',
             rapportname: 'Rapport name',
             definition: 'Product definition',
             authentications: {
              producttype: 'Product type',
              productid: 'mrn-ricekohaku-1-category1-product2'
             },
             details: {
              product: {
               name: 'Kohaku / Kohaku Yellow / White big grains',
               rapportname: 'Product rapport name',
               definition: 'Product definition',
               category: 'MRN',
               specification: {
                for: {
                 part: 'Product part',
                 gender: "Male or Female, for all type's of gender",
                 category: 'For adults and children around 6 months' 
                },
                set: {
                 set: false,
                 productindication: 'Oridinary',
                 pcs: 10
                },
                size: 'Product size',
                color: 'Product color',
                weight: 'Product weight',
                top: 'Top product specification',
                left: 'Left product specification',
                bottom: 'Bottom product specification',
                right: 'Right product specification',
                front: 'Front product specification',
                back: 'Back product specification'
                },
                pricesbreakdown: {
                  price: 10,
                  capital: 8,
                  suggested_retail_price: 10,
                  vat: 2
                },
                cybervisual: {
                  images: {
                    maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                    maindisplayimages: [
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    }
                    ]
                  },
                  videos: [
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    }
                  ]
                },
              },
              locations: {
                operations: [
                  {
                    street: 'Street',
                    baranggay: 'Baranggay',
                    trademark: 'Trademark',
                    city: 'City',
                    province: 'Province',
                    country: 'Country'
                  }
                ]
              }
             },
             system: {
                request: {
                  pcs: 0,
                  orderspecification: "",
                  product: [
                  ],
                  shipping: {
                   category: 'Shipping category',
                   weight: 'Shipping weight',
                   fee: 0
                  }
                },
                stocks: [],
                purchase: {
                  people: [],
                  xirbit: []
                }
            }   
            }      
          ],
          purchase: {
            people: {
              withinthiscoming15days: [],
              last15days: [],
              history: []
            },
            vanguard: {
              withinthiscoming15days: [],
              last15days: [],
              history: []
            }
          }
        }
      },
      {
        productname: 'Kohaku Yellow',
        rapportname: 'Rapport name',
        definition: 'Product definition',
        category: 'Food/Rice',
        authentications: {
          producttype: 'Product type',
          productid: 'mrn-ricekohaku-1-category1'
        },
        details: {
         product: {
          name: 'Kokaku / Kohaku Yellow',
          rapportname: 'Product rapport name',
          definition: 'Product definition',
          category: 'Food/Rice',
          specification: {
           for: {
            part: '50kg',
            gender: "Male or Female, for all type's of gender",
            category: 'For adults and children around 6 months' 
           },
           set: {
            set: false,
            productindication: 'Special',
            pcs: 0
           },
           size: 'Product size',
           color: 'Product color',
           weight: 50000,
           top: 'Top product specification',
           left: 'Left product specification',
           bottom: 'Bottom product specification',
           right: 'Right product specification',
           front: 'Front product specification',
           back: 'Back product specification',
           facts: {
            ingredients: []
           }
          },
          pricesbreakdown: {
            price: 10,
            capital: 8,
            suggested_retail_price: 10,
            vat: 2
          },
          cybervisual: {
            images: {
              maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
              maindisplayimages: [
              {
                displayimage: '../images/landingpage/bondpaperimage.jpg'
              },
              {
                displayimage: '../images/landingpage/bondpaperimage.jpg'
              },
              {
                displayimage: '../images/landingpage/bondpaperimage.jpg'
              }
              ]
            },
            videos: [
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              },
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              },
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              },
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              }
            ]
          }
        },
        locations: {
          operations: [
            {
              street: 'Street',
              baranggay: 'Baranggay',
              trademark: 'Trademark',
              city: 'City',
              province: 'Province',
              country: 'Country'
            }
          ]
        }
        },
        system: {
          request: {
            pcs: 0,
            orderspecification: "",
            merchandise: {
              price: 0,
              capital: 0,
              suggested_retail_price: 0,
              vat: 0,
            },
            shipping: {
             category: 'Shipping category',
             weight: 'Shipping weight',
             fee: 0
            },
            totalpayment: {
              price: 0
            },
            products: [
            ],
          },
          stocks: [
            {
              productname: 'Kohaku / Kohaku Yellow / White Grains',
              rapportname: 'Rapport name',
              definition: 'Product definition',
              authentications: {
                producttype: 'Product type',
                productid: 'mrn-ricekohaku-1-category1-product1'
               },
              details: {
              product: {
               name: 'Kokahu / Kohaku Yellow / White grains',
               rapportname: 'Product rapport name',
               definition: 'Product definition',
               category: 'MRN',
               specification: {
                for: {
                 part: 'Product part',
                 gender: "Male or Female, for all type's of gender",
                 category: 'For adults and children around 6 months' 
                },
                set: {
                 set: false,
                 productindication: 'Oridinary',
                 pcs: 10
                },
                size: 'Product size',
                color: 'Product color',
                weight: 'Product weight',
                top: 'Top product specification',
                left: 'Left product specification',
                bottom: 'Bottom product specification',
                right: 'Right product specification',
                front: 'Front product specification',
                back: 'Back product specification'
                },
                pricesbreakdown: {
                  price: 10,
                  capital: 8,
                  suggested_retail_price: 10,
                  vat: 2
                },
                cybervisual: {
                  images: {
                    maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                    maindisplayimages: [
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    }
                    ]
                  },
                  videos: [
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    }
                  ]
                },
              },
              locations: {
                operations: [
                  {
                    street: 'Street',
                    baranggay: 'Baranggay',
                    trademark: 'Trademark',
                    city: 'City',
                    province: 'Province',
                    country: 'Country'
                  }
                ]
              }
              },
              system: {
                request: {
                  pcs: 0,
                  orderspecification: "",
                  product: [
                  ],
                  shipping: {
                   category: 'Shipping category',
                   weight: 'Shipping weight',
                   fee: 0
                  }
                },
                stocks: [],
                purchase: {
                  people: [],
                  xirbit: []
                }
              }
            },
            {
             productname: 'Kohaku / Kohaku Yellow / White Grains',
             rapportname: 'Rapport name',
             definition: 'Product definition',
             authentications: {
              producttype: 'Product type',
              productid: 'mrn-ricekohaku-1-category1-product2'
             },
             details: {
              product: {
               name: 'Kohaku / Kohaku Yellow / White big grains',
               rapportname: 'Product rapport name',
               definition: 'Product definition',
               category: 'MRN',
               specification: {
                for: {
                 part: 'Product part',
                 gender: "Male or Female, for all type's of gender",
                 category: 'For adults and children around 6 months' 
                },
                set: {
                 set: false,
                 productindication: 'Oridinary',
                 pcs: 10
                },
                size: 'Product size',
                color: 'Product color',
                weight: 'Product weight',
                top: 'Top product specification',
                left: 'Left product specification',
                bottom: 'Bottom product specification',
                right: 'Right product specification',
                front: 'Front product specification',
                back: 'Back product specification'
                },
                pricesbreakdown: {
                  price: 10,
                  capital: 8,
                  suggested_retail_price: 10,
                  vat: 2
                },
                cybervisual: {
                  images: {
                    maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                    maindisplayimages: [
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    },
                    {
                      displayimage: '../images/landingpage/bondpaperimage.jpg'
                    }
                    ]
                  },
                  videos: [
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    },
                    {
                      youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
                    }
                  ]
                },
              },
              locations: {
                operations: [
                  {
                    street: 'Street',
                    baranggay: 'Baranggay',
                    trademark: 'Trademark',
                    city: 'City',
                    province: 'Province',
                    country: 'Country'
                  }
                ]
              }
             },
             system: {
                request: {
                  pcs: 0,
                  orderspecification: "",
                  product: [
                  ],
                  shipping: {
                   category: 'Shipping category',
                   weight: 'Shipping weight',
                   fee: 0
                  }
                },
                stocks: [],
                purchase: {
                  people: [],
                  xirbit: []
                }
            }   
            }      
          ],
          purchase: {
            people: {
              withinthiscoming15days: [],
              last15days: [],
              history: []
            },
            vanguard: {
              withinthiscoming15days: [],
              last15days: [],
              history: []
            }
          }
        }
      }
    ]
  }
]);

const [fooddepartment, fooddepartmentcb] = useState([]);
const [condiments, condimentscb] = useState([]);
const [meat, meatcb] = useState([]);
const [fruits, fruitscb] = useState([]);
const [bathingessentials, bathingessentialscb] = useState([]);
const [beautyproducts, beautyproductscb] = useState([]);

const [purchasing, purchasingcb] = useState([
 {
  productname: 'Kohaku / Kohaku Yellow',
  rapportname: 'Rapport name',
  definition: 'Product definition',
  authentications: {
   producttype: 'Product type',
   productid: 'mrn-ricekohaku-1-category1'
  },
  details: {
  product: {
   name: 'Product name',
   rapportname: 'Product rapport name',
   definition: 'Product definition',
   category: 'MRN',
   specification: {
    for: {
     part: 'Product part',
     gender: 'Male',
     category: 'Adults' 
    },
    set: {
     set: false,
     productindication: 'Oridinary',
     pcs: 10
    },
    size: 'Product size',
    color: 'Product color',
    weight: 10,
    top: 'Top product specification',
    left: 'Left product specification',
    bottom: 'Bottom product specification',
    right: 'Right product specification',
    front: 'Front product specification',
    back: 'Back product specification'
   },
   pricesbreakdown: {
      price: 10,
      capital: 8,
      suggested_retail_price: 10,
      vat: 2
   },
   cybervisual: {
      images: {
        maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
        maindisplayimages: [
        {
          displayimage: '../images/landingpage/bondpaperimage.jpg'
        },
        {
          displayimage: '../images/landingpage/bondpaperimage.jpg'
        },
        {
          displayimage: '../images/landingpage/bondpaperimage.jpg'
        }
        ]
      },
      videos: [
        {
          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
        },
        {
          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
        },
        {
          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
        },
        {
          youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
        }
      ]
   },
  },
  locations: {
    operations: [
      {
        street: 'Street',
        baranggay: 'Baranggay',
        trademark: 'Trademark',
        city: 'City',
        province: 'Province',
        country: 'Country'
      }
    ]
  }
  },
  system: {
    request: {
      pcs: 0,
      orderspecification: "",
      merchandise: {
        price: 0,
        capital: 0,
        suggested_retail_price: 0,
        vat: 0,
      },
      shipping: {
        category: 'Shipping category',
        weight: 'Shipping weight',
        fee: 0
       },
       totalpayment: {
         price: 0
       },
      products: [
      ],
    },
    stocks: [
      {
        productname: 'Kohaku / Kohaku Yellow / White Grains',
        rapportname: 'Product rapport name',
        definition: 'Product definition',
        authentications: {
          producttype: 'Product type',
          productid: 'mrn-ricekohaku-1-category1-product1'
         },
        details: {
         product: {
         name: 'Kokahu / Kohaku Yellow / White grains',
         rapportname: 'Product rapport name',
         definition: 'Product definition',
         category: 'MRN',
         specification: {
          for: {
           part: 'Product part',
           gender: 'Male',
           category: 'Adults' 
          },
          set: {
           set: false,
           productindication: 'Oridinary',
           pcs: 10
          },
          size: 'Product size',
          color: 'Product color',
          weight: 10,
          top: 'Top product specification',
          left: 'Left product specification',
          bottom: 'Bottom product specification',
          right: 'Right product specification',
          front: 'Front product specification',
          back: 'Back product specification'
          },
          pricesbreakdown: {
            price: 10,
            capital: 8,
            suggested_retail_price: 10,
            vat: 2
          },
          cybervisual: {
            images: {
              maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
              maindisplayimages: [
              {
                displayimage: '../images/landingpage/bondpaperimage.jpg'
              },
              {
                displayimage: '../images/landingpage/bondpaperimage.jpg'
              },
              {
                displayimage: '../images/landingpage/bondpaperimage.jpg'
              }
              ]
            },
            videos: [
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              },
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              },
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              },
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              }
            ]
          },
         },
         locations: {
          operations: [
            {
              street: 'Street',
              baranggay: 'Baranggay',
              trademark: 'Trademark',
              city: 'City',
              province: 'Province',
              country: 'Country'
            }
          ]
         }
         },
         system: {
          request: {
            pcs: 0,
            orderspecification: "",
            merchandise: {
              price: 0,
              capital: 0,
              suggested_retail_price: 0,
              vat: 0
            },
            shipping: {
             category: 'Shipping category',
             weight: 'Shipping weight',
             fee: 0
            },
            totalpayment: {
              price: 0
            },
            products: [
            ]
          },
          stocks: [],
          purchase: {
            people: [],
            xirbit: []
          }
         }
      },
      {
      productname: 'Kohaku / Kohaku Yellow / White Grains',
      rapportname: 'Product rapport name',
      definition: 'Product definition',
      authentications: {
        producttype: 'Product type',
        productid: 'mrn-ricekohaku-1-category1-product2'
      },
      details: {
        product: {
         name: 'Kohaku / Kohaku Yellow / White big grains',
         rapportname: 'Product rapport name',
         definition: 'Product definition',
         category: 'MRN',
         specification: {
          for: {
           part: 'Product part',
           gender: 'Male',
           category: 'Adults' 
          },
          set: {
           set: false,
           productindication: 'Oridinary',
           pcs: 10
          },
          size: 'Product size',
          color: 'Product color',
          weight: 10,
          top: 'Top product specification',
          left: 'Left product specification',
          bottom: 'Bottom product specification',
          right: 'Right product specification',
          front: 'Front product specification',
          back: 'Back product specification'
          },
          pricesbreakdown: {
            price: 10,
            capital: 8,
            suggested_retail_price: 10,
            vat: 2
          },
          cybervisual: {
            images: {
              maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
              maindisplayimages: [
              {
                displayimage: '../images/landingpage/bondpaperimage.jpg'
              },
              {
                displayimage: '../images/landingpage/bondpaperimage.jpg'
              },
              {
                displayimage: '../images/landingpage/bondpaperimage.jpg'
              }
              ]
            },
            videos: [
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              },
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              },
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              },
              {
                youtubelink: 'https://www.youtube.com/watch?v=Kr3oqC5YgKw'
              }
            ]
          },
        },
        locations: {
          operations: [
            {
              street: 'Street',
              baranggay: 'Baranggay',
              trademark: 'Trademark',
              city: 'City',
              province: 'Province',
              country: 'Country'
            }
          ]
        }
      },
      system: {
        request: {
          pcs: 0,
          orderspecification: "",
          merchandise: {
            price: 0,
            capital: 0,
            suggested_retail_price: 0,
            vat: 0
          },
          shipping: {
           category: 'Shipping category',
           weight: 'Shipping weight',
           fee: 0
          },
          totalpayment: {
            price: 0
          },
          products: [
          ]
         },
          stocks: [],
          purchase: {
            people: [],
            xirbit: []
          }
      }   
      }
    ],
    purchases: {
      people: [],
      vanguard: []
    }
  }
 }
]); 

const [requesttransactiondata, requesttransactiondatacb] = useState(
{
date: [{
 status: "Purchasing details submitted",  
 date: "1111-1111-111",
 message: "All date are to purchase are gathered",
}],
status: {
  current: [],
  requested: [],
  confirmedandtobedelivered: [],
  delayed: [],
  delivered: [],
  confirmedasrecieved: []
},
transactionid: "",
transactiontype: "Practicing",
user: {
  authentications: user.authentications,
  details: user.details
}, 
messages: [
{
  status: "Purchasing details submitted",  
  date: "1111-1111-111",
  message: "All date are to purchase are gathered",
  }
],
products: {
 list: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
 pricesbreakdown: {
  merchandise: {
  totalpayment: 0,
  totalcapital: 0,
  total_suggested_retail_price:0,
  totalvat: 0,
  },
  cargo: {
    fee: 0
  },
  payment: {
  funds: {
    deducted: false,
    amount: 0,
  },
  money: {
    deducted: false,
    amount: 0
  },
  totalpayment: 0
  }
}
},
cargo: {
 cargotype: "",
 cargoexpress: "",
 weight: 0,
 fee: 0,
 locations: {
  destination: {
    street: "",
    baranggay: "",
    trademark: "",
    city: "",
    province: "",
    country: "",
  },
  branch: {
    street: "",
    baranggay: "",
    city: "",
    province: "",
    country: "",
  }
 }
},
payments: {
  totalproductpayment: 0,
  cargo: 0
},
transactiongiveaway: {
  purchaser: 0,
  people: 0,
  vanguard: 0
} 
}
);

//// purchasing 
/// handling product categories 

async function handleproductcategories() {
  const _foodproducts = await products.filter((products)=> products.category.includes("Food"));
  await fooddepartmentcb((fooddepartment)=> fooddepartment = _foodproducts);
}

useEffect(()=> {

   $viewportscreenbreakpoints.xsviewportscreenbreakpoint();
   $viewportscreenbreakpoints.mdviewportscreenbreakpoint();
   $viewportscreenbreakpoints.lgviewportscreenbreakpoint();

   //getUIUserAuthenticationData()
   //getDatabaseData()
 
   handleproductcategories();
   loadWelcomeIntroductionModal();

}, []);

//// fooddepartment, condiments,fruits ,bathingessentials, beautyproducts

function setCommonPublicAccountAuthenticationIDCookie(userauthentication) {
  document.cookie = `thisuser=${userauthentication.userauthentication.authentications.authenticationid}; expires=${timestamp.getDay()}, ${timestamp.getDate()} ${timestamp.getMonth()} ${timestamp.getFullYear() + 1} ${timestamp.getHour()}:${timestamp.getMinutes()}:${timestamp.getSeconds()} UTC`;
}

async function assistcommonpublicregistration() {

    const _usercookie = document.cookie;

     await axiosCreatedInstance.get("/userauthentication/commonpublicaccountauthentication", {
        $usercookie: _usercookie
      }).then((response)=> {
        const _responsedata = response.data;
        console.log(_responsedata)
        if ( _responsedata === "Assist common public account authentication and it's registration" ) {
          document.cookie = `thisuser=${_responsedata.authentications.authenticationid}; expires=${timestamp.getDay()}, ${timestamp.getDate()} ${timestamp.getMonth()} ${timestamp.getFullYear() + 1} ${timestamp.getHour()}:${timestamp.getMinutes()}:${timestamp.getSeconds()} UTC`;
          welcomeinmtroductionmesssagecb((message)=> message = "commonpublicaccountactivation");
          loadWelcomeIntroductionModal();
        } else {
          welcomeinmtroductionmesssagecb((message)=> message = "commonpublicaccountconfiguration");  
          loadWelcomeIntroductionModal();
        }
      })

} 

async function loadWelcomeIntroductionModal() {

  if ( location.pathname === "/" ) {
     welcomeintroductiontoppropcb((top)=> top = "0");
     welcomeintroductionopacitypropcb((opacity)=> opacity = "1");
  }

}

async function getUIUserAuthenticationData() {

  const _usercookie = document.cookie;
  const _user = _usercookie.slice(9, 45);
 
  if ( _user !== '' ) {
     axiosCreatedInstance.post('/userauthentication/authentication', {
     user: _user
  })
    .then( async (response)=> {
      const _userauthenticationdata = response.data;
      usercb((data)=> data = _userauthenticationdata)
    })
 } else {
    axiosCreatedInstance.post('/userauthentication/authentication', {
    user: _user
  })
    .then( async (response)=> {
      const _userauthenticationdata = response.data;
      console.log(_userauthenticationdata)
      document.cookie = `thisuser=${_userauthenticationdata.authentications.authenticationid}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
      usercb((data)=> data = _userauthenticationdata)
    })
 }

}

async function getDatabaseData() {

   axiosCreatedInstance.get('/data/getdata')
    .then( async (response)=> {
      databasedatacb((data)=> data = response.data)
    })

}

const navigate = useNavigate();

  return (
    <Container fluid
               id='xirbitcore'> 
       <button id="navigatetodbbutton"
               onClick={(evt)=> {
           // getDatabaseData()
           navigate('/database')
       }}>navigate</button>
      <Routes>
        <Route path='/'
               element={<LandingPage maintenance={maintenance}
                                     maintenancecb={maintenancecb}

                                     viewport={viewport}
                    
                                     user={user}
                                     usercb={usercb}

                                     setCommonPublicAccountAuthenticationIDCookie={setCommonPublicAccountAuthenticationIDCookie}

                                     welcomeinmtroductionmesssage={welcomeinmtroductionmesssage}
                                     welcomeinmtroductionmesssagecb={welcomeinmtroductionmesssagecb}

                                     welcomeintroductiontopprop={welcomeintroductiontopprop}
                                     welcomeintroductiontoppropcb={welcomeintroductiontoppropcb}
                                     welcomeintroductionopacityprop={welcomeintroductionopacityprop}
                                     welcomeintroductionopacitypropcb={welcomeintroductionopacitypropcb}

                                     landingpagenavigationbargraphwidthproperty={landingpagenavigationbargraphwidthproperty}
                                     landingpagenavigationbargraphwidthpropertycb={landingpagenavigationbargraphwidthpropertycb}
                                     landingpagenavigationbargraphleftproperty={landingpagenavigationbargraphleftproperty}
                                     landingpagenavigationbargraphleftpropertycb={landingpagenavigationbargraphleftpropertycb}

                                     landingpagedepositnavigationleftproperty={landingpagedepositnavigationleftproperty}
                                     landingpagedepositnavigationleftpropertycb={landingpagedepositnavigationleftpropertycb}

                                     landingpagewidthdrwalnavigationwidthproperty={landingpagewidthdrwalnavigationwidthproperty}
                                     landingpagewidthdrwalnavigationwidthpropertycb={landingpagewidthdrwalnavigationwidthpropertycb}
                                     landingpagewidthdrwalnavigationleftproperty={landingpagewidthdrwalnavigationleftproperty}
                                     landingpagewidthdrwalnavigationleftpropertycb={landingpagewidthdrwalnavigationleftpropertycb}

                                     />}>
        </Route>
        <Route path='/xirbitmarketing'
               element={<XirbitMarketing viewport={viewport}
                                         user={user}
                                         usercb={usercb}
                                         purchasing={purchasing}
                                         purchasingcb={purchasingcb}
                                         merchandisescheme={merchandisescheme}
                                         products={products}
                                         requesttransactiondata={requesttransactiondata}
                                         
                                         companies={companies}
                                         companiescb={companiescb}
                                         
                                         businesses={businesses}
                                         businessescb={businessescb}

                                         fooddepartment={fooddepartment}
                                         fooddepartmentcb={fooddepartmentcb}
                                         condiments={condiments}
                                         condimentscb={condimentscb}
                                         meat={meat}
                                         meatcb={meatcb}
                                         fruits={fruits}
                                         fruitscb={fruitscb}
                                         bathingessentials={bathingessentials}
                                         bathingessentialscb={bathingessentialscb}
                                         beautyproducts={beautyproducts}
                                         beautyproductscb={beautyproductscb}

                                         />}>
        </Route>
        <Route path='/marketing/selling'
               element={<Marketing  merchandisescheme={merchandisescheme}
                                    requesttransactiondata={requesttransactiondata}/>}>
  
        </Route>

        <Route path='/database/account'
               element={<DatabaseLogin viewport={viewport}
                                       user={user}
                                       usercb={usercb}
                                       requesttransactiondata={requesttransactiondata}/>}> 
        </Route>
       
         <Route path='/database'
                element={<Database viewport={viewport}
                                   databasedata={databasedata}
                                   databasedatacb={databasedatacb}
                                   
                                   requesttransactiondata={requesttransactiondata}/>}>

         </Route>

          <Route path='/vanguardportfolio'
                  element={<VanguardPorttfolio companies={companies}
                                               companiescb={companiescb}
                                               businesses={businesses}
                                               businessescb={businessescb}/>}>

         </Route>
         <Route path='/purchasing'
                element={<Purchasing viewport={viewport}
                                     user={user}
                                     usercb={usercb}
                                     purchasing={purchasing}
                                     purchasingcb={purchasingcb}
                                     databasedata={databasedata}
                                     databasedatacb={databasedatacb}

                                     manualcargoaddressdestinationloadingindication={manualcargoaddressdestinationloadingindication}
                                     manualcargoaddressdestinationloadingindicationcb={manualcargoaddressdestinationloadingindicationcb}
                                     setascargodestinationloadingindication={setascargodestinationloadingindication}
                                     setascargodestinationloadingindicationcb={setascargodestinationloadingindicationcb}
                                     purchasingcargodestination={purchasingcargodestination}
                                     purchasingcargodestinationcb={purchasingcargodestinationcb}
                                     purchasingcargoaddressset={purchasingcargoaddressset}
                                     purchasingcargoaddresssetcb={purchasingcargoaddresssetcb}
                                     purchasingtotalmerchandisepayment={purchasingtotalmerchandisepayment}
                                     purchasingtotalmerchandisepaymentcb={purchasingtotalmerchandisepaymentcb}
                                     purchasingtotalweight={purchasingtotalweight}
                                     purchasingtotalweightcb={purchasingtotalweightcb}
                                     purchasingtotalcargofee={purchasingtotalcargofee}
                                     purchasingtotalcargofeecb={purchasingtotalcargofeecb}
                                     purchasigtotalpayment={purchasigtotalpayment}
                                     purchasigtotalpaymentcb={purchasigtotalpaymentcb}
                                     purchasingpaymentset={purchasingpaymentset}
                                     purchasingpaymentsetcb={purchasingpaymentsetcb}
                                     purchasingtotalmrnproducts={purchasingtotalmrnproducts}
                                     purchasingtotalmrnproductscb={purchasingtotalmrnproductscb}
                                     purchasingmrnproductstotalweight={purchasingmrnproductstotalweight}
                                     purchasingmrnproductstotalweightcb={purchasingmrnproductstotalweightcb}
                                     purchasingtotalnonmrnproducts={purchasingtotalnonmrnproducts}
                                     purchasingtotalnonmrnproductscb={purchasingtotalnonmrnproductscb}
                                     purchasingnonmrnproductstotalweight={purchasingnonmrnproductstotalweight}
                                     purchasingnonmrnproductstotalweightcb={purchasingnonmrnproductstotalweightcb}
                                     selectedproduct={selectedproduct}
                                     selectedproductcb={selectedproductcb}
                                     selectedproductarray={selectedproductarray}
                                     selectedproductarraycb={selectedproductarraycb}
                                     selectedproductarraylength={selectedproductarraylength}
                                     selectedproductarraylengthcb={selectedproductarraylengthcb}

                                     requesttransactiondata={requesttransactiondata}
                                     requesttransactiondatacb={requesttransactiondatacb}
                                     
                                    />}>
         </Route>
         <Route path='/office'
                element={<Office viewport={viewport}
                                 user={user}
                                 usercb={usercb}
                                 purchasing={purchasing}
                                 purchasingcb={purchasingcb}
                                 databasedata={databasedata}
                                 databasedatacb={databasedatacb}

                                 vanguarddata={vanguarddata}
                                 vanguardatacb={vanguarddatacb} 
                                 
                                 user={user}
                                 usercb={usercb}/>}>
         </Route>

         <Route path='/registrationsassistance'
                       element={<RegistrationsAssistance />}>
                        
         </Route>

      </Routes>
    </Container>
  );
}

export default VanguardCore;
