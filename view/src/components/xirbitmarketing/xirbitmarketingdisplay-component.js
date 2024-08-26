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

     <Col xs={12}
          md={12}
          lg={12}
          id='marketing-merchandisescontainer-fooddepartment'>
       <Col id="marketing-merchandisescontainer-fooddepartment-categotyheaderindicationcontainer">
        <p id="marketing-merchandisescontainer-fooddepartment-categoryheaderindication"
           onClick={()=> {

             const _fooddepartment = document.querySelector("#marketing-merchandisescontainer-fooddepartment");
             const _fooddepartmentcategoryspecificationmodal = document.querySelector("#marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-layoutcontainer");
        
              if (_fooddepartmentcategoryspecificationmodal.style.height === "0px") {
                _fooddepartmentcategoryspecificationmodal.style.height = "auto";
              } else {
                _fooddepartmentcategoryspecificationmodal.style.height = "0px";
              }

           }}>Food department</p>
       </Col>
       <Col id="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-layoutcontainer">
         <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-layoutcontainer-categoryspecificationcontainer">
           <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryspecificationheaderindicationcontainer">
            <p className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryheaderindication"
               onClick={()=> {
                const _fooddepartmentcategoryspecificationproductlistcontainer = document.querySelectorAll(".marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer");
             
            if ( _fooddepartmentcategoryspecificationproductlistcontainer[0].style.height === "") {
                _fooddepartmentcategoryspecificationproductlistcontainer[0].style.height = "auto";
             } else if ( _fooddepartmentcategoryspecificationproductlistcontainer[0].style.height === "0px" ) {
              _fooddepartmentcategoryspecificationproductlistcontainer[0].style.height = "auto";
             } else {
                _fooddepartmentcategoryspecificationproductlistcontainer[0].style.height = "0px";
            }
               }}>Rice</p>
           </Col>
           <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer">

           {
              props.fooddepartment.map((product, productidx)=> {
                const riceproducts = props.fooddepartment.filter((specification)=> specification.category.includes("Rice"));
                return (
                 <React.Fragment key={productidx}>
                  {
                    riceproducts.map((ricespecification, ricespecificationidx)=> {
                      return (
                        <Col key={ricespecificationidx}
                             className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer-productcontainer">
                          <p className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer-productcontainer-productnameheaderindiation">
                            {ricespecification.productname}
                          </p>
                          <p className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer-productcontainer-productcategoryheaderindiation">
                            Food category: {ricespecification.category}
                          </p>
                          <p className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer-productcontainer-productavailabilitiesheaderindiation">
                           Availabilties
                          </p>
                          <Row className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer-productcontainer-productavailabilitiescontainer">
                          {
                            ricespecification.specifications.map((productspecification, productspecificationidx)=> {
                              return (
                                <Col xs={12}
                                     md={2}
                                     lg={2}
                                     key={productspecificationidx}
                                    className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer-productcontainer-productavailabilitiescontainer-productspecificationcontainer">
                                    <Col  key={productspecificationidx}
                                          className='marketing-merchandisescontainer-merchandisemodal'>

                                      <Col className='marketing-merchandisescontainer-merchandisemodal-merchandise'>
                                      
                                      <Col className='marketing-merchandisescontainer-merchandisemodal-merchandisemaindisplaycontainer'>

                                        <p className='marketing-merchandisecontainer-merchandisemodal-merchandiseviewdisplaybuttoncontainer'>
                                          {productspecification.productname} 
                                        </p>

                                        <p className='marketing-merchandisecontainer-merchandisemodal-merchandiseviewdisplaybuttoncontainer'>
                                          {productspecification.category} 
                                        </p>

                                        <p className='marketing-merchandisecontainer-merchandisemodal-merchandiseviewdisplaybuttoncontainer'
                                          onClick={(evt, idx)=> {
                                              selectedmerchandisecb((viewedmerchandise)=> viewedmerchandise = productspecification);
                                              const merchandisedetailscontainer = document.querySelector('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainer')
                                              merchandisedetailscontainer.style.display = 'block';
                                            }}>
                                        view
                                        </p>  

                                      </Col>

                                      </Col>

                                    </Col>
                                </Col>
                              )
                            })
                          }
                          </Row>
                       </Col>
                      )
                    })
                   }
                 </React.Fragment>
                )
              })
             }
  
           </Col>
         </Col>
         <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-layoutcontainer-categoryspecificationcontainer">
           <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryspecificationheaderindicationcontainer">
            <p className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryheaderindication"
               onClick={()=> {
                const _fooddepartmentcategoryspecificationproductlistcontainer = document.querySelectorAll(".marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer");
             
            if ( _fooddepartmentcategoryspecificationproductlistcontainer[1].style.height === "") {
                _fooddepartmentcategoryspecificationproductlistcontainer[1].style.height = "100vh";
             } else if ( _fooddepartmentcategoryspecificationproductlistcontainer[1].style.height === "0px" ) {
              _fooddepartmentcategoryspecificationproductlistcontainer[1].style.height = "100vh";
             } else {
                _fooddepartmentcategoryspecificationproductlistcontainer[1].style.height = "0px";
            }
               }}>Canned</p>
           </Col>
           <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer">
           </Col>
         </Col>
         <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-layoutcontainer-categoryspecificationcontainer">
          <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryspecificationheaderindicationcontainer">
           <p className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryheaderindication"
              onClick={()=> {
               const _fooddepartmentcategoryspecificationproductlistcontainer = document.querySelectorAll(".marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer");
            
           if ( _fooddepartmentcategoryspecificationproductlistcontainer[2].style.height === "") {
               _fooddepartmentcategoryspecificationproductlistcontainer[2].style.height = "100vh";
            } else if ( _fooddepartmentcategoryspecificationproductlistcontainer[2].style.height === "0px" ) {
             _fooddepartmentcategoryspecificationproductlistcontainer[2].style.height = "100vh";
            } else {
               _fooddepartmentcategoryspecificationproductlistcontainer[2].style.height = "0px";
           }
              }}>Cupped</p>
          </Col>
          <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer">
          </Col>
         </Col>
         <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-layoutcontainer-categoryspecificationcontainer">
           <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryspecificationheaderindicationcontainer">
            <p className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryheaderindication"
               onClick={()=> {
                const _fooddepartmentcategoryspecificationproductlistcontainer = document.querySelectorAll(".marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer");
             
            if ( _fooddepartmentcategoryspecificationproductlistcontainer[3].style.height === "") {
                _fooddepartmentcategoryspecificationproductlistcontainer[3].style.height = "100vh";
             } else if ( _fooddepartmentcategoryspecificationproductlistcontainer[3].style.height === "0px" ) {
              _fooddepartmentcategoryspecificationproductlistcontainer[3].style.height = "100vh";
             } else {
                _fooddepartmentcategoryspecificationproductlistcontainer[3].style.height = "0px";
            }
               }}>Bread</p>
           </Col>
           <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer">
           </Col>
         </Col>
         <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-layoutcontainer-categoryspecificationcontainer">
           <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryspecificationheaderindicationcontainer">
            <p className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryheaderindication"
               onClick={()=> {
                const _fooddepartmentcategoryspecificationproductlistcontainer = document.querySelectorAll(".marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer");
             
            if ( _fooddepartmentcategoryspecificationproductlistcontainer[4].style.height === "") {
                _fooddepartmentcategoryspecificationproductlistcontainer[4].style.height = "100vh";
             } else if ( _fooddepartmentcategoryspecificationproductlistcontainer[4].style.height === "0px" ) {
              _fooddepartmentcategoryspecificationproductlistcontainer[4].style.height = "100vh";
             } else {
                _fooddepartmentcategoryspecificationproductlistcontainer[4].style.height = "0px";
            }
               }}>Snacks</p>
           </Col>
           <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer">
           </Col>
         </Col>
         <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-layoutcontainer-categoryspecificationcontainer">
           <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryspecificationheaderindicationcontainer">
            <p className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryheaderindication"
               onClick={()=> {
                const _fooddepartmentcategoryspecificationproductlistcontainer = document.querySelectorAll(".marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer");
             
            if ( _fooddepartmentcategoryspecificationproductlistcontainer[5].style.height === "") {
                _fooddepartmentcategoryspecificationproductlistcontainer[5].style.height = "100vh";
             } else if ( _fooddepartmentcategoryspecificationproductlistcontainer[5].style.height === "0px" ) {
              _fooddepartmentcategoryspecificationproductlistcontainer[5].style.height = "100vh";
             } else {
                _fooddepartmentcategoryspecificationproductlistcontainer[5].style.height = "0px";
            }
               }}>Meat</p>
           </Col>
           <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer">
           </Col>
         </Col>
         <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-layoutcontainer-categoryspecificationcontainer">
           <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryspecificationheaderindicationcontainer">
            <p className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-categoryheaderindication"
               onClick={()=> {
                const _fooddepartmentcategoryspecificationproductlistcontainer = document.querySelectorAll(".marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer");
             
            if ( _fooddepartmentcategoryspecificationproductlistcontainer[6].style.height === "") {
                _fooddepartmentcategoryspecificationproductlistcontainer[6].style.height = "100vh";
             } else if ( _fooddepartmentcategoryspecificationproductlistcontainer[6].style.height === "0px" ) {
              _fooddepartmentcategoryspecificationproductlistcontainer[6].style.height = "100vh";
             } else {
                _fooddepartmentcategoryspecificationproductlistcontainer[6].style.height = "0px";
            }
               }}>Drinks</p>
           </Col>
           <Col className="marketing-merchandisescontainer-fooddepartment-categoryspecificationheaderindicationcontainer-productlistcontainer">
           </Col>
         </Col>
       </Col>
     </Col>

     <Col xs={12}
          md={12}
          lg={12}
          id='marketing-merchandisescontainer-condimentsdepartment'>
       <Col id="marketing-merchandisescontainer-condimentsdepartment-categotyheaderindicationcontainer">
        <p id="marketing-merchandisescontainer-condimentsdepartment-categoryheaderindication"
           onClick={()=> {

             const _condimentsdepartment = document.querySelector("#marketing-merchandisescontainer-condimentsdepartment");
             const _condimentsdepartmentcategoryspecificationmodal = document.querySelector("#marketing-merchandisescontainer-condimentsdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer");

              if ( _condimentsdepartmentcategoryspecificationmodal.style.height === "0px" ) {
                _condimentsdepartmentcategoryspecificationmodal.style.height = "auto";
              } else {
                _condimentsdepartmentcategoryspecificationmodal.style.height = "0px";
              }

           }}>Condiments</p>
       </Col>
       <Col id="marketing-merchandisescontainer-condimentsdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer">
       <Col className="marketing-merchandisescontainer-condimentsdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer-categoryspecificationcontainer">
           <Col className="marketing-merchandisescontainer-condimentsdepartment-categoryspecificationheaderindicationcontainer-categoryspecificationheaderindicationcontainer">
            <p className="marketing-merchandisescontainer-condimentsdepartment-categoryspecificationheaderindicationcontainer-categoryheaderindication"
               onClick={()=> {

                const _condimentsdepartmentcategoryspecificationproductlistcontainer = document.querySelectorAll(".marketing-merchandisescontainer-condimentsdepartment-categoryspecificationheaderindicationcontainer-productlistcontainer");
             
            if ( _condimentsdepartmentcategoryspecificationproductlistcontainer[0].style.height === "") {
                _condimentsdepartmentcategoryspecificationproductlistcontainer[0].style.height = "100vh";
             } else if ( _condimentsdepartmentcategoryspecificationproductlistcontainer[0].style.height === "0px" ) {
              _condimentsdepartmentcategoryspecificationproductlistcontainer[0].style.height = "100vh";
             } else {
                _condimentsdepartmentcategoryspecificationproductlistcontainer[0].style.height = "0px";
            }
               }}>Rice</p>
           </Col>
           <Col className="marketing-merchandisescontainer-condimentsdepartment-categoryspecificationheaderindicationcontainer-productlistcontainer">
           </Col>
         </Col>
       </Col>
     </Col>

     <Col xs={12}
          md={12}
          lg={12}
          id='marketing-merchandisescontainer-meatdepartment'>
       <Col id="marketing-merchandisescontainer-meatdepartment-categotyheaderindicationcontainer">
        <p id="marketing-merchandisescontainer-meatdepartment-categoryheaderindication"
           onClick={()=> {

             const _meatdepartment = document.querySelector("#marketing-merchandisescontainer-meatdepartment");
             const _meatdepartmentcategoryspecificationmodal = document.querySelector("#marketing-merchandisescontainer-meatdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer");
        
              if (_meatdepartmentcategoryspecificationmodal.style.height === "0px") {
                _meatdepartmentcategoryspecificationmodal.style.height = "auto";
              } else {
                _meatdepartmentcategoryspecificationmodal.style.height = "0px";
              }

           }}>Meat</p>
       </Col>
       <Col id="marketing-merchandisescontainer-meatdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer">
         <Col className="marketing-merchandisescontainer-meatdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer-categoryspecificationcontainer">
           <Col className="marketing-merchandisescontainer-meatdepartment-categoryspecificationheaderindicationcontainer-categoryspecificationheaderindicationcontainer">
            <p className="marketing-merchandisescontainer-meatdepartment-categoryspecificationheaderindicationcontainer-categoryheaderindication"
               onClick={()=> {
                const _meatdepartmentcategoryspecificationproductlistcontainer = document.querySelectorAll(".marketing-merchandisescontainer-meatdepartment-categoryspecificationheaderindicationcontainer-productlistcontainer");
             
            if ( _meatdepartmentcategoryspecificationproductlistcontainer[0].style.height === "") {
                _meatdepartmentcategoryspecificationproductlistcontainer[0].style.height = "100vh";
             } else if ( _meatdepartmentcategoryspecificationproductlistcontainer[0].style.height === "0px" ) {
              _meatdepartmentcategoryspecificationproductlistcontainer[0].style.height = "100vh";
             } else {
                _meatdepartmentcategoryspecificationproductlistcontainer[0].style.height = "0px";
            }
               }}>Rice</p>
           </Col>
           <Col className="marketing-merchandisescontainer-meatdepartment-categoryspecificationheaderindicationcontainer-productlistcontainer">
           </Col>
         </Col>
       </Col>
     </Col>

     <Col xs={12}
          md={12}
          lg={12}
          id='marketing-merchandisescontainer-fruitsdepartment'>
       <Col id="marketing-merchandisescontainer-fruitsdepartment-categotyheaderindicationcontainer">
        <p id="marketing-merchandisescontainer-fruitsdepartment-categoryheaderindication"
           onClick={()=> {

             const _fruitsdepartment = document.querySelector("#marketing-merchandisescontainer-fruitsdepartment");
             const _fruitdepartmentcategoryspecificationmodal = document.querySelectorAll("#marketing-merchandisescontainer-fruitsdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer");
        
              if (_fruitdepartmentcategoryspecificationmodal[0].style.height === "0px") {
                _fruitdepartmentcategoryspecificationmodal[0].style.height = "auto";
              } else {
                _fruitdepartmentcategoryspecificationmodal[0].style.height = "0px";
              }

           }}>Fruits</p>
       </Col>
       <Col id="marketing-merchandisescontainer-fruitsdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer">
         <Col className="marketing-merchandisescontainer-fruitsdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer-categoryspecificationcontainer">
           <Col className="marketing-merchandisescontainer-fruitsdepartment-categoryspecificationheaderindicationcontainer-categoryspecificationheaderindicationcontainer">
            <p className="marketing-merchandisescontainer-fruitsdepartment-categoryspecificationheaderindicationcontainer-categoryheaderindication"
               onClick={()=> {
                const _fruitsdepartmentcategoryspecificationproductlistcontainer = document.querySelectorAll(".marketing-merchandisescontainer-fruitsdepartment-categoryspecificationheaderindicationcontainer-productlistcontainer");
             
            if ( _fruitsdepartmentcategoryspecificationproductlistcontainer.style.height === "" ) {
                _fruitsdepartmentcategoryspecificationproductlistcontainer.style.height = "100vh";
             } else if ( _fruitsdepartmentcategoryspecificationproductlistcontainer.style.height === "0px" ) {
              _fruitsdepartmentcategoryspecificationproductlistcontainer.style.height = "100vh";
             } else {
               _fruitsdepartmentcategoryspecificationproductlistcontainer.style.height = "0px";
            }
               }}>Rice</p>
           </Col>
           <Col className="marketing-merchandisescontainer-fruitsdepartment-categoryspecificationheaderindicationcontainer-productlistcontainer">
           </Col>
         </Col>
       </Col>
     </Col>

     <Col xs={12}
          md={12}
          lg={12}
          id='marketing-merchandisescontainer-bathingessentialsdepartment'>
       <Col id="marketing-merchandisescontainer-bathingessentialsdepartment-categotyheaderindicationcontainer">
        <p id="marketing-merchandisescontainer-bathingessentialsdepartment-categoryheaderindication"
           onClick={()=> {

             const _bathingessentialsdepartment = document.querySelector("#marketing-merchandisescontainer-bathingessentialsdepartment");
             const _bathingessentialsdepartmentcategoryspecificationmodal = document.querySelector("#marketing-merchandisescontainer-bathingessentialsdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer");
      
              if ( _bathingessentialsdepartmentcategoryspecificationmodal.style.height === "0px") {
                _bathingessentialsdepartmentcategoryspecificationmodal.style.height = "auto";
              } else {
                _bathingessentialsdepartmentcategoryspecificationmodal.style.height = "0px";
             }

           }}>Bathing essentials</p>
       </Col>
       <Col id="marketing-merchandisescontainer-bathingessentialsdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer">
         <Col className="marketing-merchandisescontainer-bathingessentialsdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer-categoryspecificationcontainer">
           <Col className="marketing-merchandisescontainer-bathingessentialsdepartment-categoryspecificationheaderindicationcontainer-categoryspecificationheaderindicationcontainer">
            <p className="marketing-merchandisescontainer-bathingessentialsdepartment-categoryspecificationheaderindicationcontainer-categoryheaderindication"
               onClick={()=> {
                const _bathingessentialsdepartmentcategoryspecificationproductlistcontainer = document.querySelectorAll(".marketing-merchandisescontainer-bathingessentialsdepartment-categoryspecificationheaderindicationcontainer-productlistcontainer");
             
            if ( _bathingessentialsdepartmentcategoryspecificationproductlistcontainer[0].style.height === "") {
                _bathingessentialsdepartmentcategoryspecificationproductlistcontainer[0].style.height = "100vh";
             } else if ( _bathingessentialsdepartmentcategoryspecificationproductlistcontainer[0].style.height === "0px" ) {
              _bathingessentialsdepartmentcategoryspecificationproductlistcontainer[0].style.height = "100vh";
             } else {
                _bathingessentialsdepartmentcategoryspecificationproductlistcontainer[0].style.height = "0px";
            }
               }}>Rice</p>
           </Col>
           <Col className="marketing-merchandisescontainer-bathingessentialsdepartment-categoryspecificationheaderindicationcontainer-productlistcontainer">
           </Col>
         </Col>
       </Col>
     </Col>

     <Col xs={12}
          md={12}
          lg={12}
          id='marketing-merchandisescontainer-beautyproductsdepartment'>

       <Col id="marketing-merchandisescontainer-beautyproductsdepartment-categotyheaderindicationcontainer">
        <p id="marketing-merchandisescontainer-beautyproductsdepartment-categoryheaderindication"
           onClick={()=> {

             const _beautyproductsdepartmentdepartment = document.querySelector("#marketing-merchandisescontainer-beautyproductsdepartment");
             const _beautyproductsdepartmentcategoryspecificationmodal = document.querySelector("#marketing-merchandisescontainer-beautyproductsdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer");
        
              if (_beautyproductsdepartmentcategoryspecificationmodal.style.height === "0px") {
                _beautyproductsdepartmentcategoryspecificationmodal.style.height = "auto";
              } else {
                _beautyproductsdepartmentcategoryspecificationmodal.style.height = "0px";
              }

           }}>Beauty products</p>
       </Col>
       
       <Col id="marketing-merchandisescontainer-beautyproductsdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer">
         <Col className="marketing-merchandisescontainer-beautyproductsdepartment-categoryspecificationheaderindicationcontainer-layoutcontainer-categoryspecificationcontainer">
           <Col className="marketing-merchandisescontainer-beautyproductsdepartment-categoryspecificationheaderindicationcontainer-categoryspecificationheaderindicationcontainer">
            <p className="marketing-merchandisescontainer-beautyproductsdepartment-categoryspecificationheaderindicationcontainer-categoryheaderindication"
               onClick={()=> {
                const _beautyproductsdepartmentcategoryspecificationproductlistcontainer = document.querySelectorAll(".marketing-merchandisescontainer-beautyproductsdepartment-categoryspecificationheaderindicationcontainer-productlistcontainer");
             
            if ( _beautyproductsdepartmentcategoryspecificationproductlistcontainer[0].style.height === "") {
                _beautyproductsdepartmentcategoryspecificationproductlistcontainer[0].style.height = "100vh";
             } else if ( _beautyproductsdepartmentcategoryspecificationproductlistcontainer[0].style.height === "0px" ) {
              _beautyproductsdepartmentcategoryspecificationproductlistcontainer[0].style.height = "100vh";
             } else {
                _beautyproductsdepartmentcategoryspecificationproductlistcontainer[0].style.height = "0px";
            }
               }}>Rice</p>
           </Col>
           <Col className="marketing-merchandisescontainer-beautyproductsdepartment-categoryspecificationheaderindicationcontainer-productlistcontainer">
           </Col>
         </Col>
       </Col>

     </Col>

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
              Find merchandise details and choose a product specefication to load image's on this modal
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
          Find merchandise details and choose a product specefication to load video's on this modal
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
           {props.selectedmerchandise.details.product.name}
         </p>
      </Col>

      <Col className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-forgridlayoutcontainer'>
    
        <Row className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-forgridcontainer'>

          <Col xs={12}
                md={12}
                lg={12}
                className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
                  <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-forgenderpecificationheaderindication'>
                    {props.selectedmerchandise.details.product.specification.for.gender}
                  </p>
          </Col>
    
           <Row  className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-forgridcontainer-forsdetailsandspecificationscontainer'>
            <Col xs={12}
                 md={12}
                 lg={12}
                 className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
              <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-forcategoryspecificationheaderindication'>
              {props.selectedmerchandise.details.product.specification.for.category}
              </p>
            </Col>
            <Col  xs={12}
                  md={12}
                  lg={12}
                  className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
            <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-specificationsheaderindication'>
              Product name: {props.selectedmerchandise.details.product.name}
            </p>
            </Col>
            <Col xs={12}
                md={12}
                lg={12}
                className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer'>
              <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-specificationsheaderindication'>
                Value: {props.selectedmerchandise.details.product.pricesbreakdown.price} peso's
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
              props.selectedmerchandise.system.stocks.map((stocks, stocksidx)=> {
                return (
                  <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-stocksspecificationsheaderindication'
                      key={stocksidx}>
                      0{stocksidx}. {stocks.details.product.specification.for.part},  {stocks.details.product.specification.for.gender}, {stocks.details.product.specification.for.category}. Product cateroy is {stocks.details.product.category}, size is {stocks.details.product.specification.size}, color is {stocks.details.product.specification.color}, weighting {stocks.details.product.specification.weight} grams, that has a {stocks.details.product.specification.front} front design, that has a {stocks.details.product.specification.back} back design, that has a top {stocks.details.product.specification.top} design, that has a {stocks.details.product.specification.left} left design, that has a {stocks.details.product.specification.bottom} bottom design, that has a {stocks.details.product.specification.right} right design -> <br /> <span className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication-viewproductparcelboxspanbutton'
                                                                                                                                                                                                                                              onClick={(evt)=> {

                                                                                                                                                                                                                                                const _allbuttons = document.querySelectorAll('.marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-merchandisedetailscontainer-detailscontainer-merchandisedetailscontainermerchandisedetailscontainer-merchandisedetailsheaderindication-viewproductparcelboxspanbutton');
                                                                                                                                                                                                                                                const _button = evt.target;
                                                                                                                                                                                                                                                const _buttonindication = _button.innerText;
                                                                                                                                                                                                                                               // const _productdata =  props.selectedmerchandise.specifications.find((product)=> product = stocks);
                                                                                                                                                                                                                                               const _productdata =  props.selectedmerchandise;                        
                                                                                                                                                                                     
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
                Vanguard transaction give away covered 
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
       props.selectedmerchandise.system.stocks.map((selectedmerchandise, selectedmerchandiseidx)=> {
        return (
         <Col xs={12}
               md={6}
               lg={6}
               key={selectedmerchandiseidx}
               className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-paymentdetailscontainer-layoutcontainer'>
            <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-paymentdetailscontainer-layoutcontainer-headerindication'>For</p>
            <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-paymentdetailscontainer-layoutcontainer-headerindication'>{selectedmerchandise.details.product.specification.for.part}, {selectedmerchandise.details.product.specification.for.gender}, {selectedmerchandise.details.product.specification.for.category}. Product cateroy is {selectedmerchandise.details.product.category}, size is {selectedmerchandise.details.product.specification.size}, color is {selectedmerchandise.details.product.specification.color}, weighting {selectedmerchandise.details.product.specification.weight} grams, that has a {selectedmerchandise.details.product.specification.front} front design, that has a {selectedmerchandise.details.product.specification.back} back design, that has a {selectedmerchandise.details.product.specification.top} top design, that has a {selectedmerchandise.details.product.specification.left} left design, that has a {selectedmerchandise.details.product.specification.bottom} bottom design, that has a {selectedmerchandise.details.product.specification.right} right design.</p> 
            <p className='marketing-merchandisescontainer-merchandisemodal-merchandiseviewgridcontainerheader-paymentdetailscontainer-layoutcontainer-headerindication'>Dont worry about the experience's. All of this was prepared personally. Preparations will tell it have freedom before selecting "ADD TO PURCHASING".</p>
             <Col className='marketing-merchandisecontainer-merchandisemodal-addtopurchasingcontainer'>
              <button className='marketing-merchandisecontainer-merchandisemodal-addtopurchasingbutton'
                      onClick={(evt)=> {
                      // alert(JSON.stringify(selectedmerchandise))
                      // console.log(selectedmerchandise)
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
