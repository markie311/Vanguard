import React, {
          useState
       } from 'react';

import { Row, 
         Col } from 'react-bootstrap';

import VideoPlayer from '../videoplayer/videoplayer-component.js';

import '../../styles/xirbitmarketing/xirbitmarketingdisplay.scss';

export default function MarketingDisplay(props) {

 const [marketingcategories, marketingcategoriescb] = useState(
 [
  {
   marketingcategory: 'A',
   backgroundcolor: 'dodgerblue'
  },
  {
    marketingcategory: 'F',
    backgroundcolor: 'orange'
  },
  {
    marketingcategory: 'EF',
    backgroundcolor: 'chocolate'
  },
  {
    marketingcategory: 'SN',
    backgroundcolor: 'magenta'
  },
  {
    marketingcategory: 'WD',
    backgroundcolor: 'green'
  },
  {
    marketingcategory: 'D',
    backgroundcolor: 'blue'
  },
  {
    marketingcategory: 'T',
    backgroundcolor: 'red'
  },
  {
    marketingcategory: 'S',
    backgroundcolor: 'yellow'
  },
  {
    marketingcategory: 'SH',
    backgroundcolor: 'pink'
  },
  {
    marketingcategory: 'B',
    backgroundcolor: 'brown'
  },
  {
    marketingcategory: 'C',
    backgroundcolor: 'maroon'
  },
  {
    marketingcategory: 'H',
    backgroundcolor: 'skyblue'
  },
 ]
 );

 const sellables = [    
  {
    data: 'p1'
  },
  {
    data: 'p2'
  },
  {
    data: 'p3'
  },
  {
    data: 'p4'
  },
 ]

const [selectedmerchandise, selectedmerchandisecb] = useState({
    productname: 'Rice',
    rapportname: 'Rapport name',
    definition: 'Product definition',
    authentications: {
     producttype: 'Product type',
     productid: 'Product id'
    },
    specifications: [
      {
        details: {
        product: {
         name: 'Kohaku',
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
          ],
          purchase: {
            people: [],
            xirbit: []
          }
        }
      }
    ]
});

 const [selectedmerchandisepast, selectedmerchandisepastcb] = useState(
  {
    productname: 'Product name',
    rapportname: 'Rapport name',
    definition: 'Product definition',
    authentications: {
     producttype: 'Product type',
     productid: 'Product id'
    },
    specifications: [
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
	        back: 'Back product specification',
          front: 'Front product specification',
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
    ]
  }
 );

 const [productdisplayimages, productdisplayimagescb] = useState([]);

 const [productdisplayimage, productdisplayimagecb] = useState({
  displayimage: 'displayimage'
 });

 const [productavailablevideos, productavailablevideoscb] = useState([]);

 const merchandiseviewbutton = (evt, idx) => {
    
  const _parentcontainer = evt.target.parentElement.parentElement.parentElement;
  const _merchandiseviewmodal = _parentcontainer.children[0]
  const _merchandiseviewmodaloffsetleft = _merchandiseviewmodal.offsetLeft

  alert(_merchandiseviewmodal.className)
  alert(_merchandiseviewmodaloffsetleft)

 }

 return(
  <Row id='xirbitmarketingdisplay'>

    <Row id='marketing-merchandisescontainer'>

      {
      props.products.map((merchandise, idx)=> {
        return (
           <Col xs={6}
                md={2}
                lg={2}
                key={idx}
                className='marketing-merchandisescontainer-merchandisemodal'>

            <Col className='marketing-merchandisescontainer-merchandisemodal-merchandise'>
            
             <Col className='marketing-merchandisescontainer-merchandisemodal-merchandisemaindisplaycontainer'>

              <p className='marketing-merchandisecontainer-merchandisemodal-merchandiseviewdisplaybuttoncontainer'>
                 {merchandise.productname} 
              </p>

              <p className='marketing-merchandisecontainer-merchandisemodal-merchandiseviewdisplaybuttoncontainer'
                 onClick={(evt, idx)=> {
                  selectedmerchandisecb((viewedmerchandise)=> viewedmerchandise = merchandise)
                  const merchandisedetailscontainer = document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainer')
                  merchandisedetailscontainer.style.display = 'block';
                  }}>
               view
              </p>  

             </Col>

            </Col>

           </Col>
        )
       }) 
      }

       <Row className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainer'>

         <Col xs={12}
              md={12}
              lg={12} 
              className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainer-merchandisedetailscontainer'>
          
          <MarketingDisplayNavigationHeader />
          <MarketingDisplayMerchandiseDetails user={props.user}
                                              products={props.products}
                                              purchasing={props.purchasing}
                                              purchasingcb={props.purchasingcb}
                                              selectedmerchandise={selectedmerchandise}
                                              productdisplayimages={productdisplayimages}
                                              productdisplayimagescb={productdisplayimagescb} 
                                              productdisplayimage={productdisplayimage}
                                              productdisplayimagecb={productdisplayimagecb} 
                                              productavailablevideos={productavailablevideos}
                                              productavailablevideoscb={productavailablevideoscb}
           />

          <MarketingDisplayPaymentDetails user={props.user}
                                          selectedmerchandise={selectedmerchandise}
                                          purchasing={props.purchasing}
                                          purchasingcb={props.purchasingcb}/>
            

          </Col>

       </Row>

    </Row>

  </Row>
 )
}

function MarketingDisplayNavigationHeader() {
return (
  <Row className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-navigationheadercontainer'>
   <Col xs={4}
        md={4}
        lg={4}
        className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisenavigationheadercontainer marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisenavigationheader'>
      <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailsnavigationheaderindication marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisenavigationheaderindication'
         onClick={(evt)=> {
          const _navigationcontainer = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisenavigationheader')
          const _navigationheaderindication = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisenavigationheaderindication')
          const merchandisedetailscontainer = document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer')
          const paymentdetailscontainer = document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-paymentdetailscontainer')
          _navigationcontainer[0].style.backgroundColor = 'black';
          _navigationcontainer[1].style.backgroundColor = 'white';
          _navigationheaderindication[0].style.color = 'white';
          _navigationheaderindication[1].style.color = 'black';
          merchandisedetailscontainer.style.display = 'block'
          paymentdetailscontainer.style.display = 'none'
         }}>
        Merchandise
      </p>
  </Col>
  <Col xs={4}
       md={4}
       lg={4}
       className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-purchasedetailsnavigationheadercontainer marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisenavigationheader'>
     <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-purchasedetailsnavigationheaderindication marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisenavigationheaderindication'
        onClick={(evt)=> {
          const _navigationcontainer = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisenavigationheader')
          const _navigationheaderindication = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisenavigationheaderindication')
          const merchandisedetailscontainer = document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer')
          const paymentdetailscontainer = document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-paymentdetailscontainer')
          merchandisedetailscontainer.style.display = 'none';
          paymentdetailscontainer.style.display = 'flex';
          _navigationcontainer[0].style.backgroundColor = 'white';
          _navigationcontainer[1].style.backgroundColor = 'black';
          _navigationheaderindication[0].style.color = 'black';
          _navigationheaderindication[1].style.color = 'white';
        }}>
          Purchase 
     </p> 
  </Col>
  <Col xs={4}
       md={4}
       lg={4}
       className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-closedetailsnavigationheadercontainer'>
     <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-closeedetailsnavigationheaderindication'
        onClick={(evt)=> {
          const merchandisedetailscontainer = document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainer');
          merchandisedetailscontainer.style.display = 'none';
        }}>
      close
     </p> 
  </Col>
 </Row>
)
}

function MarketingDisplayMerchandiseDetails(props) {

  return(
    <Col xs={12}
         md={12}
         lg={12}
         className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer'>

    <Row className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer-navigationheadercontainer'>
      <Col xs={4}
           md={4}
           lg={4}
           className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer-navigationheadercontainer-navigationheader'>
        <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer-navigationheadercontainer-navigationheaderindication'
           onClick={(evt)=> {
             const _nagivationcontainer = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer-navigationheadercontainer-navigationheader');
             const _navigationheaderindication = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer-navigationheadercontainer-navigationheaderindication');
             const merchandisedisplayimagemodal = document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-displayimagescontainer');
             const merchandisevideoplayermodal =  document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-videoplayercontainer');
             const merchandisedetailsmodal = document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainer');
             _nagivationcontainer[0].style.backgroundColor = 'black';
             _nagivationcontainer[1].style.backgroundColor = 'white';
             _nagivationcontainer[2].style.backgroundColor = 'white';
             _navigationheaderindication[0].style.color = 'white';
             _navigationheaderindication[1].style.color = 'black';
             _navigationheaderindication[2].style.color = 'black';
             merchandisedisplayimagemodal.style.display = 'block'
             merchandisevideoplayermodal.style.display = 'none'
             merchandisedetailsmodal.style.display = 'none'
           }}>
          Images
        </p>
      </Col>
      <Col xs={4}
           md={4}
           lg={4}
          className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer-navigationheadercontainer-navigationheader'>
        <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer-navigationheadercontainer-navigationheaderindication'
           onClick={(evt)=> {
            const _nagivationcontainer = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer-navigationheadercontainer-navigationheader');
            const _navigationheaderindication = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer-navigationheadercontainer-navigationheaderindication');
            const merchandisedisplayimagemodal = document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-displayimagescontainer');
            const merchandisevideoplayermodal =  document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-videoplayercontainer');
            const merchandisedetailsmodal = document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainer');
            _nagivationcontainer[0].style.backgroundColor = 'white';
            _nagivationcontainer[1].style.backgroundColor = 'black';
            _nagivationcontainer[2].style.backgroundColor = 'white';
            _navigationheaderindication[0].style.color = 'black';
            _navigationheaderindication[1].style.color = 'white';
            _navigationheaderindication[2].style.color = 'black';
            merchandisedisplayimagemodal.style.display = 'none';
            merchandisevideoplayermodal.style.display = 'block';
            merchandisedetailsmodal.style.display = 'none';
        }}>
          Videos
        </p>
      </Col>
      <Col xs={4}
           md={4}
           lg={4}
           className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer-navigationheadercontainer-navigationheader'>
          <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer-navigationheadercontainer-navigationheaderindication'
             onClick={(evt)=> {
              const _nagivationcontainer = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer-navigationheadercontainer-navigationheader');
              const _navigationheaderindication = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-merchandisedetailscontainer-navigationheadercontainer-navigationheaderindication');
              const merchandisedisplayimagemodal = document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-displayimagescontainer');
              const merchandisevideoplayermodal =  document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-videoplayercontainer');
              const merchandisedetailsmodal = document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainer');
              _nagivationcontainer[0].style.backgroundColor = 'white';
              _nagivationcontainer[1].style.backgroundColor = 'white';
              _nagivationcontainer[2].style.backgroundColor = 'black';
              _navigationheaderindication[0].style.color = 'black';
              _navigationheaderindication[1].style.color = 'black';
              _navigationheaderindication[2].style.color = 'white';
              merchandisedisplayimagemodal.style.display = 'none'
              merchandisevideoplayermodal.style.display = 'none'
              merchandisedetailsmodal.style.display = 'block'
          }}>
            Details
          </p>
      </Col>
    </Row>

    <Row className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-displayimagescontainer'>
     
      <Col xs={12}
           md={12}
           lg={12}
           className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainerdetailscontainer-merchandiseimagelistlayoutcontainer'>
         {
          props.productdisplayimages.length === 0 ? 
          (
            <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainerdetailscontainer-merchandiseimagelistpreparingforadisplayheaderindication'>
              Choose a merchandise details find view image's and video's to be displayed on the modal
            </p>
          )
          :
          (
           <React.Fragment>
            {
              props.productdisplayimages.map((productdisplayimage, productdisplayimageidx)=> {
                return (
                  <Row className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainerdetailscontainer-merchandiseimagelistgridcontainer'>
                    <Col className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainerdetailscontainer-merchandiseimagecontainer'
                        key={productdisplayimageidx}
                        xs={12}
                        md={3}
                        lg={3}>
                    <img src={productdisplayimage.displayimage}
                        className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainerdetailscontainer-merchandiseimagedisplaymodalcontainer-merchandiseimage'
                        onClick={(evt)=> {
                          const _merchandiseimagedisplaymodal = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainerdetailscontainer-merchandiseimagedisplaymodalcontainer');
                          const _displayimage = evt.target.src.slice(22,100);
                          props.productdisplayimagecb((displayimage)=> displayimage = `../${_displayimage}`);
                          _merchandiseimagedisplaymodal[productdisplayimageidx].style.display = 'block';
                        }}
                        alt='Xirbit-MerchandiseImage' />
                    </Col>
                    <Col xs={12}
                        md={12}
                        lg={12}
                        className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainerdetailscontainer-merchandiseimagedisplaymodalcontainer'>

                      <Col className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainerdetailscontainer-merchandiseimagedisplaymodalcontainer-closebuttoncontainer'>

                          <button className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainerdetailscontainer-merchandiseimagedisplaymodalcontainer-closebutton'
                                  onClick={(evt)=> { 
                                     const _merchandiseimagedisplaymodal = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainerdetailscontainer-merchandiseimagedisplaymodalcontainer');
                                    _merchandiseimagedisplaymodal[productdisplayimageidx].style.display = 'none';
                                  }}>
                            x
                          </button>

                      </Col>

                      <Col className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainerdetailscontainer-merchandiseimagedisplaymodalcontainer-merchandiseimagecontainer'>
                          <img src={props.productdisplayimage}
                              className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainerdetailscontainer-merchandiseimagedisplaymodalcontainer-merchandiseimage'
                              onClick={(evt)=> {
                                    
                              }}
                              alt='Xirbit-MerchandiseImage'/>
                      </Col>

                    </Col>
                 </Row>
                )
              })
            }   
           </React.Fragment>
          )
        }  
      </Col>
    </Row>

    <Row className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-videoplayercontainer'>
       {
         props.productavailablevideos.length === 0 ? 
         (
          <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainerdetailscontainer-merchandiseimagelistpreparingforadisplayheaderindication'>
           Choose a merchandise details find view image's and video's to be displayed on the modal
          </p>
         )
         :
         (
          <React.Fragment>
            {
              props.productavailablevideos.map((availablevids, availablevidsidx)=> {
                return (
                  <VideoPlayer xs='12'
                               md='12'
                               lg='12'
                               key={availablevidsidx}
                               url={availablevids.youtubelink}/>
                )
              })
            }
            
          </React.Fragment>
         )
       }
    </Row>

     <Row className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainer'>
     
      <Col xs={12}
           md={12}
           lg={12}>
         <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-productheaderindication'>
           Product
         </p>
      </Col>

      <Col className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-forgridlayoutcontainer'>
       
        <Row className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-forgridcontainer'>

          {
            props.selectedmerchandise.specifications.map((specification, specificationidx)=> {
            return (
              <React.Fragment key={specificationidx}>
                <Col xs={12}
                      md={12}
                      lg={12}
                      className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
                        <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-forgenderpecificationheaderindication'>
                          {specification.details.product.specification.for.gender}
                        </p>
                  </Col>
          
                  <Row className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-forgridcontainer-forsdetailsandspecificationscontainer'>
                  <Col xs={12}
                        md={12}
                        lg={12}
                        className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
                    <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-forcategoryspecificationheaderindication'>
                    {specification.details.product.specification.for.category}
                    </p>
                  </Col>
                  <Col  xs={12}
                        md={12}
                        lg={12}
                        className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
                  <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-specificationsheaderindication'>
                    Product name: {specification.details.product.name}
                  </p>
                  </Col>
                  <Col xs={12}
                      md={12}
                      lg={12}
                      className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
                    <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-specificationsheaderindication'>
                      Value: {specification.details.product.pricesbreakdown.price}
                    </p>
                  </Col>
                  <Col xs={12}
                        md={12}
                        lg={12}
                        className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
                    <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-specificationsheaderindication'>
                      Need's available for 
                    </p>
                  </Col>
                  <Col xs={12}
                        md={12}
                        lg={12}
                        className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-productavailabilitiescontainer'>
                  {
                    specification.system.stocks.map((stocks, stocksidx)=> {
                      return (
                        <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-stocksspecificationsheaderindication'
                            key={stocksidx}>
                            0{stocksidx}. product category, xs size, color green weighting 0 grams, that has a front design, that has a back design, that has a top design, that has a left design, that has a bottom design, that has a right design -> <br /> <span className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication-viewproductparcelboxspanbutton'
                                                                                                                                                                                                                                                    onClick={(evt)=> {

                                                                                                                                                                                                                                                      const _allbuttons = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication-viewproductparcelboxspanbutton');
                                                                                                                                                                                                                                                      const _button = evt.target;
                                                                                                                                                                                                                                                      const _buttonindication = _button.innerText;
                                                                                                                                                                                                                                                      const _productdata =  props.selectedmerchandise.specifications.find((product)=> product = stocks);

                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                      for ( let x = 0; x < _allbuttons.length; x++) {
                                                                                                                                                                                                                                                        _allbuttons[x].innerText = 'load parcel display';
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                      if ( _buttonindication === 'load parcel display' ) {
                                                                                                                                                                                                                                                        props.productdisplayimagescb((displayimages)=> displayimages = _productdata.details.product.cybervisual.images.maindisplayimages)
                                                                                                                                                                                                                                                        props.productavailablevideoscb((availablevids)=> availablevids = _productdata.details.product.cybervisual.videos)
                                                                                                                                                                                                                                                        _button.innerText = 'Parcel display prepared';
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        _button.innerText = 'load parcel display';
                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                    }}>
                                                                                                                                                                                                                                              load parcel display
                                                                                                                                                                                                                                              </span>
                        </p>
                      )
                    })
                  }
                    
                  </Col>
                  <Col xs={12}
                        md={12}
                        lg={12} 
                        className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
                    <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-tagspecificationheaderindication'>
                      Tags: 
                    </p>
                    <button className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication-tagsbutton'>
                      Xirbit transaction give away covered 
                    </button>
                    <br />
                    <br />
                    <button className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication-tagsbutton'>
                      Prepared, as a shipment 
                    </button>
                    <br />
                    <br />
                    <button className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication-tagsbutton'>
                      Prepared, as any type of a cargo
                    </button>
                  </Col>
                  <Col xs={12}
                        md={12}
                        lg={12}
                        className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
                    <p></p>
                  </Col>
                  <Col xs={12}
                        md={12}
                        lg={12}
                      className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
                    <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication'>
                      Category: Mrn
                    </p>
                  </Col>
                  </Row>  
              </React.Fragment>
            )
            })
          }
            
        </Row>

      </Col>

     <Col xs={12}
          md={12}
          lg={12}>
       <p  className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication'>
       TRANSACTIONS
       </p>
     </Col>
     <Col xs={12}
          mg={12}
          lg={12}
          className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
      <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication'>
       Handing out service fee: Foods are free for deliveries below 10 kilo's within public and private authentication location scope. Common public are not included having common public authentications.
      </p>
      <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication'>
       For shipment's are negotionable due to categorization, that is for shipments, for  delivery andr of the same consideration of a door to door delivery of the same service. See purchasing for total delivery or door to door fee 
      </p>
      <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication'>
       Shipment fee: Tempo E-car and its space for storage, always 300 pesos weighting more than 10 kilo's, delays are handled solid and an organized transaction will be expected. 
      </p>
      <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication'>
       Cargo: Delivery and door to door service:  
      </p>
      <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication'>
       Organized transactions: always 100 pesos for each kilo ( 200 pesos on 2 kilo's cargo).
      </p>
      <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication'>
       Friendly transactions: always 100 pesos even weighting more than 10 kilo's
      </p>
     </Col>
     <Col xs={12}
          mg={12}
          lg={12}
        className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
      <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication'>
        Handling, 
      </p>
      <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication'>
        For friendly transactions
      </p>
     </Col>
     <Col xs={12}
          mg={12}
          lg={12}
          className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
      <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication'>
        Delay for shipments, cargo e.g delivery or a door to door service: 1 night within the day of handling
      </p>
     </Col>
     </Row>

   </Col>
  )
}

function MarketingDisplayPaymentDetails(props) {
 return(
  <Row xs={12}
       md={12}
       lg={12}
       className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-paymentdetailscontainer'>

     {
       props.selectedmerchandise.specifications.map((selectedmerchandise, selectedmerchandiseidx)=> {
        return (
         <Col xs={12}
               md={6}
               lg={6}
               key={selectedmerchandiseidx}
               className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-paymentdetailscontainer-layoutcontainer'>
            <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-paymentdetailscontainer-layoutcontainer-headerindication'>For</p>
            <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-paymentdetailscontainer-layoutcontainer-headerindication'>{selectedmerchandise.details.product.specification.for.gender}, {selectedmerchandise.details.product.specification.for.category}</p>
            <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-paymentdetailscontainer-layoutcontainer-headerindication'>Dont worry about the EXPERIENCES. All of this was prepared PERSONALLY. PREPARATIONS WILL TELL IT WILL HAVE FREEDOM, BEFORE SELECTING "ALONE".</p>
             <Col className='marketing-merchandisecontainer-merchandisemodal-addtopurchasingcontainer'>
              <button className='marketing-merchandisecontainer-merchandisemodal-addtopurchasingbutton'
                      onClick={(evt)=> {
                       alert(JSON.stringify(selectedmerchandise))
                       console.log(selectedmerchandise)
                       props.purchasingcb((selectedmerchandises) => [...selectedmerchandises, selectedmerchandise])
                      }}>
                 add to purchasing
               </button>
            </Col>
          </Col> 
        )
       })
     }
 

   </Row>
 )
}
