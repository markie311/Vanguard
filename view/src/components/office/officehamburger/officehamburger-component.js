import React, {
	        useState,
                useCallback
              } from "react";

import { Row, 
         Col,
         Spinner } from "react-bootstrap"; 

import "../../../styles/office/officehamburger/officehamburger.scss";

import VideoPlayer from '../../videoplayer/videoplayer-component.js';

export default function OfficeHamburger(props) {

 const [, rerendercomponent] = useState();
 const compttemptforceupdatetempfunction = useCallback(() => rerendercomponent({}), []);

 const [officehamburgercontentview, officehamburgercontentviewcb] = useState("Hamburger");

 const [officehamburgerdataview, officehamburgerdataviewcb] = useState("Monitoring");

 const [officehamburgermarketingdataview, officehamburgermarketingdataviewcb] = useState("Merchandise");

 const [officehamburgerformdataconfigurationviewtypeview, officehamburgerformdataconfigurationviewtypeviewcb] = useState("Search");

 const [officehamburgersearchedproduct, officehamburgersearchedproductcb] = useState({data:{
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
        },system: {
          request: {
            product: [
             {
             pcs: 0,                                                                                                                                      details: {                                                                                                                                    for: {
                  part: 'Product part',                                                                                                                        gender: 'Male',                                                                                                                              category: 'Adults'                                                                                                                       },
              set: {
                  set: false,                                                                                                                                  productindication: 'Oridinary',
                  pcs: 10                                                                                                                                  },
              size: 'Product size',                                                                                                                        color: 'Product color',
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
            },{
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
                  pricesbreakdown: {                                                                                                                           price: 10,                                                                                                                                   capital: 8,
                  suggested_retail_price: 10,                                                                                                                  vat: 2                                                                                                                                       },                                                                                                                                           cybervisual: {
                    images: {
                    maindisplayimage: '../images/landingpage/bondpaperimage.jpg',                                                                                maindisplayimages: [
                      {                                                                                                                                              displayimage: '../images/landingpage/bondpaperimage.jpg'
                      }                                                                                                                                          ]
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
  }} );

const [officehamburgerproductdatascheme, officehamburgerproductdataschemecb] = useState(
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
             pcs: 0,                                                                                  details: {                                                                                 for: {
                  part: 'Product part',                                                                   gender: 'Male',                                                                         category: 'Adults'                                                                     },
                 set: {
                  set: false,                                                                             productindication: 'Oridinary',
                  pcs: 10                                                                               },
               size: 'Product size',                                                                  color: 'Product color',
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
          stocks: [],
          purchase: {
            people: [],
            xirbit: []
          }
        }
     }
    ]
  } );

const [officehamburgerproductdataschemeproductid, officehamburgerproductdataschemeproductidcb] = useState("");

const [officehamburgerproducttypeproductspecification, officehamburgerproducttypeproductspecificationcb] = useState("Product type");

const [officehamburgerproductidproductspecification, officehamburgerproductidproductspecificationcb] = useState("Product id");

const [officehamburgerproductcategoryproductspecification, officehamburgerproductcategoryproductspecificationcb] = useState("Product category");

const [officehamburgerproductnameproductspecification, officehamburgerproductnameproductspecificationcb] = useState("Product name");

const [officehamburgerproductrapportnameproductspecification, officehamburgerproductrapportnameproductspecificationcb] = useState("Product rapport name");

const [officehamburgerproductdefinitionproductspecification, officehamburgerproductdefinitionproductspecificationcb] = useState("Product definition");

const [officehamburgerproductspecification, officehamburgerproductspecificationcb] = useState([]);

const [officehamburgerrequestsdataview, officehamburgerrequestsdataviewcb]  = useState(false);

const [officehamburgertransactionsdataview, officehamburgertransactionsdataviewcb]  = useState(false);

const [officehamburgercargodataview, officehamburgercargodataviewcb]  = useState(false);

const [officehamburgerrequesttransactionacceptloadingindication, officehamburgerrequesttransactionacceptloadingindicationcb] = useState(false);

const [officehamburgerrequesttransactionoutofstockloadingindication, officehamburgerrequesttransactionoutofstockloadingindicationcb] = useState(false);

const [officehamburgerrequesttransactionchangeofstockloadingindication, officehamburgerrequesttransactionchangeofstockloadingindicationcb] = useState(false);

const [officehamburgertransactionpassedtocargoloadingindication, officehamburgertransactionpassedtocargoloadingindicationcb] = useState(false);

const [officehamburgercargotransactionshippedloadingindication, officehamburgercargotransactionshippedloadingindicationcb] = useState(false);

const [officehamburgertransactiondataheader, officehamburgertransactiondataheadercb] = useState("Commoner accounts");

return (
 <Row id="officehamburger">
   <Row id='office-hamburgercontentnavigation'>
     <Col xs={12} 
	  md={3}
	  lg={3}  
	  className="office-hamburgercontent-navigationbuttoncontainer"> 
        <button className="office-hamburgercontent-navigationbutton"
            onClick={(evt)=> {
	     officehamburgercontentviewcb((view
)=> view = evt.target.innerText);                               }}>
       Hamburger
     </button>
   </Col>
    <Col xs={12}
	 md={3}   
         lg={3}
	 className="office-hamburgercontent-navigationbuttoncontainer">
      <button className="office-hamburgercontent-navigationbutton"
	      onClick={(evt)=> {
		officehamburgercontentviewcb((view)=> view = evt.target.innerText);
	      }}>e
       Assistants
      </button>
   </Col>
   <Col xs={12}
	md={3}
	lg={3}
	className="office-hamburgercontent-navigationbuttoncontainer">
    <button className="office-hamburgercontent-navigationbutton"
	    onClick={(evt)=> {
                officehamburgercontentviewcb((view)=> view = evt.target.innerText);
              }}>
     Office
    </button>
   </Col>
   <Col xs={12}
	md={3}
	lg={3}
	className="office-hamburgercontent-navigationbuttoncontainer">
    <button className="office-hamburgercontent-navigationbutton"
	    onClick={(evt) => {
	props.officemainnavigationcontentviewcb((mainnavigationview)=> mainnavigationview = 'Auth');
	props.mainnavigationbuttonscontainerdisplaypropertycb((displayproperty)=> displayproperty = 'flex' );
	    }}>
     log out
    </button>
   </Col>
  </Row>
  <Col id='office-hamburgercontent'>
   <OfficeHamburgerContentView officehamburgercontentview={officehamburgercontentview}
                               officehamburgercontentviewcb={officehamburgercontentviewcb}
	                       officehamburgerdataview={officehamburgerdataview}
	                       officehamburgerdataviewcb={officehamburgerdataviewcb}
	                       officehamburgermarketingdataview={officehamburgermarketingdataview}
	                       officehamburgermarketingdataviewcb={officehamburgermarketingdataviewcb}
	                       officehamburgerformdataconfigurationviewtypeview={officehamburgerformdataconfigurationviewtypeview}
officehamburgerformdataconfigurationviewtypeviewcb={officehamburgerformdataconfigurationviewtypeviewcb}

	                       officehamburgerproductdatascheme={officehamburgerproductdatascheme}
	                       officehamburgerproductdataschemecb={officehamburgerproductdataschemecb}

	                       officehamburgerproductdataschemeproductid={officehamburgerproductdataschemeproductid}
	                      officehamburgerproductdataschemeproductidcb={officehamburgerproductdataschemeproductidcb}

	                      officehamburgerproducttypeproductspecification={officehamburgerproducttypeproductspecification} 
	                      officehamburgerproducttypeproductspecificationcb={officehamburgerproducttypeproductspecificationcb}

	                     officehamburgerproductidproductspecification={officehamburgerproductidproductspecification} 
	                      officehamburgerproductidproductspecificationcb={officehamburgerproductidproductspecificationcb}

                              officehamburgerproductcategoryproductspecification={officehamburgerproductcategoryproductspecification} 
	                      officehamburgerproductcategoryproductspecificationcb={officehamburgerproductcategoryproductspecificationcb}

	                      officehamburgerproductnameproductspecification={officehamburgerproductnameproductspecification} 
	                      officehamburgerproductnameproductspecificationcb={officehamburgerproductnameproductspecificationcb}
                              
                              officehamburgerproductrapportnameproductspecification={officehamburgerproductrapportnameproductspecification}
	                      officehamburgerproductrapportnameproductspecificationcb={officehamburgerproductrapportnameproductspecificationcb}
                            
	                     officehamburgerproductdefinitionproductspecification={officehamburgerproductdefinitionproductspecification} 
	                      officehamburgerproductdefinitionproductspecificationcb={officehamburgerproductdefinitionproductspecificationcb}
                        
 	                      officehamburgerproductspecification={officehamburgerproductspecification}
	                      officehamburgerproductspecificationcb={officehamburgerproductspecificationcb}
	compttemptforceupdatetempfunction={compttemptforceupdatetempfunction}
	 
	                     officehamburgercargodataview={officehamburgercargodataview}

officehamburgercargodataviewcb={officehamburgercargodataviewcb}

officehamburgerrequesttransactionacceptloadingindication={officehamburgerrequesttransactionacceptloadingindication}

officehamburgerrequesttransactionacceptloadingindicationcb={officehamburgerrequesttransactionacceptloadingindicationcb}

officehamburgerrequesttransactionoutofstockloadingindication={officehamburgerrequesttransactionoutofstockloadingindication}

officehamburgerrequesttransactionoutofstockloadingindicationcb={officehamburgerrequesttransactionoutofstockloadingindicationcb}

officehamburgerrequesttransactionchangeofstockloadingindication={officehamburgerrequesttransactionchangeofstockloadingindication}

officehamburgerrequesttransactionchangeofstockloadingindicationcb={officehamburgerrequesttransactionchangeofstockloadingindicationcb}


officehamburgercargotransactionshippedloadingindication={officehamburgercargotransactionshippedloadingindication}

officehamburgercargotransactionshippedloadingindicationcb={officehamburgercargotransactionshippedloadingindicationcb}

                  officehamburgertransactionpassedtocargoloadingindication={officehamburgertransactionpassedtocargoloadingindication}
                      officehamburgertransactionpassedtocargoloadingindicationcb={officehamburgertransactionpassedtocargoloadingindicationcb}

	                        officehamburgertransactiondataheader={officehamburgertransactiondataheader}

officehamburgertransactiondataheadercb={officehamburgertransactiondataheadercb}

                                	                                     officehamburgerrequestsdataview={officehamburgerrequestsdataview}

                                  officehamburgerrequestsdataviewcb={officehamburgerrequestsdataviewcb}


	                         officehamburgertransactionsdataview={officehamburgertransactionsdataview}

                                 officehamburgertransactionsdataviewcb={officehamburgertransactionsdataviewcb}


	/>

  </Col>
 </Row>
)

}

function OfficeHamburgerContentView(props) {

 if ( props.officehamburgercontentview === "Hamburger" ) {
  return (
  <Col id="officehamburgercontentview">               <OfficeHamburgerView  officehamburgerdataview={props.officehamburgerdataview}
	                  officehamburgerdataviewcb={props.officehamburgerdataviewcb}
	                  officehamburgermarketingdataview={props.officehamburgermarketingdataview}
	                  officehamburgermarketingdataviewcb={props.officehamburgermarketingdataviewcb}
	        
	                  officehamburgerformdataconfigurationviewtypeview={props.officehamburgerformdataconfigurationviewtypeview}
officehamburgerformdataconfigurationviewtypeviewcb={props.officehamburgerformdataconfigurationviewtypeviewcb}            
	                 officehamburgerproductdatascheme={props.officehamburgerproductdatascheme}
	                 officehamburgerproductdataschemecb={props.officehamburgerproductdataschemecb}

                         
	                  officehamburgerproductdataschemeproductid={props.officehamburgerproductdataschemeproductid}
	                  officehamburgerproductdataschemeproductidcb={props.officehamburgerproductdataschemeproductidcb}

                          officehamburgerproducttypeproductspecification={props.officehamburgerproducttypeproductspecification} 
	                  officehamburgerproducttypeproductspecificationcb={props.officehamburgerproducttypeproductspecificationcb}

	                  officehamburgerproductidproductspecification={props.officehamburgerproductidproductspecification} 
	                  officehamburgerproductidproductspecificationcb={props.officehamburgerproductidproductspecificationcb}

                          officehamburgerproductcategoryproductspecification={props.officehamburgerproductcategoryproductspecification} 
	                  officehamburgerproductcategoryproductspecificationcb={props.officehamburgerproductcategoryproductspecificationcb}

	                  officehamburgerproductnameproductspecification={props.officehamburgerproductnameproductspecification} 
	                  officehamburgerproductnameproductspecificationcb={props.officehamburgerproductnameproductspecificationcb}

                          officehamburgerproductrapportnameproductspecification={props.officehamburgerproductrapportnameproductspecification} 
	                  officehamburgerproductrapportnameproductspecificationcb={props.officehamburgerproductrapportnameproductspecificationcb}
                            
	                  officehamburgerproductdefinitionproductspecification={props.officehamburgerproductdefinitionproductspecification} 
	                  officehamburgerproductdefinitionproductspecificationcb={props.officehamburgerproductdefinitionproductspecificationcb}

                         officehamburgerproductspecification={props.officehamburgerproductspecification}
	                 officehamburgerproductspecificationcb={props.officehamburgerproductspecificationcb}
                         compttemptforceupdatetempfunction={props.compttemptforceupdatetempfunction}

	                 officehamburgercargodataview={props.officehamburgercargodataview}

officehamburgercargodataviewcb={props.officehamburgercargodataviewcb} 
	   
	                                              	                                     officehamburgerrequestsdataview={props.officehamburgerrequestsdataview}

                                  officehamburgerrequestsdataviewcb={props.officehamburgerrequestsdataviewcb}


	                         officehamburgertransactionsdataview={props.officehamburgertransactionsdataview}

                                 officehamburgertransactionsdataviewcb={props.officehamburgertransactionsdataviewcb}

                        officehamburgerrequesttransactionacceptloadingindication={props.officehamburgerrequesttransactionacceptloadingindication}

officehamburgerrequesttransactionacceptloadingindicationcb={props.officehamburgerrequesttransactionacceptloadingindicationcb}

officehamburgerrequesttransactionoutofstockloadingindication={props.officehamburgerrequesttransactionoutofstocktloadingindication}

officehamburgerrequesttransactionoutofstockloadingindicationcb={props.officehamburgerrequesttransactionoutofstockloadingindicationcb}

officehamburgerrequesttransactionchangeofstockloadingindication={props.officehamburgerrequesttransactionchangeofstockloadingindication}

officehamburgerrequesttransactionchangeofstockloadingindicationcb={props.officehamburgerrequesttransactionchangeofstockloadingindicationcb}


officehamburgercargotransactionshippedloadingindication={props.officehamburgercargotransactionshippedloadingindication}

officehamburgercargotransactionshippedloadingindicationcb={props.officehamburgercargotransactionshippedloadingindicationcb}

	               officehamburgertransactionpassedtocargoloadingindication={props.officehamburgertransactionpassedtocargoloadingindication}
officehamburgertransactionpassedtocargoloadingindicationcb={props.officehamburgertransactionpassedtocargoloadingindicationcb}

	                officehamburgertransactiondataheader={props.officehamburgertransactiondataheader}

officehamburgertransactiondataheadercb={props.officehamburgertransactiondataheadercb}

/>              
  </Col>
  )
 }

 if ( props.officehamburgercontentview === "Assistants" ) {
  return (
  <Col id="officehamburgercontentview">
    <OfficeHamburgerAssistantsView />
  </Col>
  )
 }

 if ( props.officehamburgercontentview === "Office" ) {
   return (
    <Col id="officehamburgercontentview">
     <OfficeHamburgerOfficeView officehamburgerformdataconfigurationviewtypeview={props.officehamburgerformdataconfigurationviewtypeview}
officehamburgerformdataconfigurationviewtypeviewcb={props.officehamburgerformdataconfigurationviewtypeviewcb}/>
    </Col>
   )
 }

}

function OfficeHamburgerView(props) {
 return (
  <Col id="officehamburgerview">   

    <Row id="officehamburger-dataview">

     <Col xs={12}
	  md={12}
	  lg={12}
	  id="officehamburger-dataview-navigationpositioningcontainer">

      <Row id="officehamburger-dataview-navigationgridcontainer">

        <Col xs={12}
	     md={3}
	     lg={3}
	     className="officehamburger-dataview-navigationgridcontainer-navigationbuttoncontainer">
	 <button className="officehamburger-dataview-navigationgridcontainer-navigationbutton"
	         onClick={(evt)=> {
                   props.officehamburgerdataviewcb((view)=> view = evt.target.innerText);
		 }}>
	  Monitoring
	 </button>
        </Col>

	<Col xs={12}
	     md={3}
	     lg={3}
	     className="officehamburger-dataview-navigationgridcontainer-navigationbuttoncontainer">
	 <button className="officehamburger-dataview-navigationgridcontainer-navigationbutton"
	         onClick={(evt)=> {
                   props.officehamburgerdataviewcb((view)=> view = evt.target.innerText);
		 }}>
	  People
	 </button>
        </Col>

        <Col xs={12}
	     md={3}
	     lg={3}
	     className="officehamburger-dataview-navigationgridcontainer-navigationbuttoncontainer">
	 <button className="officehamburger-dataview-navigationgridcontainer-navigationbutton"
	         onClick={(evt)=> {
                   props.officehamburgerdataviewcb((view)=> view = evt.target.innerText);
		 }}>
	  Marketing
	 </button>
        </Col>
        
        <Col xs={12}
	     md={3}
	     lg={3}
	     className="officehamburger-dataview-navigationgridcontainer-navigationbuttoncontainer">
	 <button className="officehamburger-dataview-navigationgridcontainer-navigationbutton" 
	        onClick={(evt)=> {
                   props.officehamburgerdataviewcb((view)=> view = evt.target.innerText);
		 }}>
	  Money and Funds
	 </button>
       </Col>

       <Col xs={12}
	    md={3}
	    lg={3}
	    className="officehamburger-dataview-navigationgridcontainer-navigationbuttoncontainer">
	 <button className="officehamburger-dataview-navigationgridcontainer-navigationbutton" 
	        onClick={(evt)=> {
	           props.officehamburgerrequestsdataviewcb((transaction)=> transaction = true)
	          props.officehamburgercargodataviewcb((transaction)=> transaction = false)
	          props.officehamburgertransactionsdataviewcb((transaction)=> transaction = false)

                   props.officehamburgerdataviewcb((view)=> view = evt.target.innerText);

		 }}>
	  Requests
	 </button>
       </Col>

       <Col xs={12}
	    md={3}
	    lg={3}
	    className="officehamburger-dataview-navigationgridcontainer-navigationbuttoncontainer">
	 <button className="officehamburger-dataview-navigationgridcontainer-navigationbutton" 
	        onClick={(evt)=> {
	           props.officehamburgertransactionsdataviewcb((transaction)=> transaction = true)
                   props.officehamburgercargodataviewcb((transaction)=> transaction = false)
	           props.officehamburgerrequestsdataviewcb((transaction)=> transaction = false)
         
                   props.officehamburgerdataviewcb((view)=> view = evt.target.innerText);

		 }}>
	  Transactions
	 </button>
       </Col>
  
      <Col xs={12}
	    md={3}
	    lg={3}
	    className="officehamburger-dataview-navigationgridcontainer-navigationbuttoncontainer">
	 <button className="officehamburger-dataview-navigationgridcontainer-navigationbutton" 
	        onClick={(evt)=> {
	           props.officehamburgercargodataviewcb((transaction)=> transaction = true)
	           props.officehamburgerrequestsdataviewcb((transaction)=> transaction = false)
                  props.officehamburgertransactionsdataviewcb((transaction)=> transaction = false)
        
                   props.officehamburgerdataviewcb((view)=> view = evt.target.innerText);

		 }}>
	  Cargo
	 </button>
       </Col>
 
     </Row>

     <Row id="officehamburger-dataview-datacontainer">
      <OfficeHamburgerDataModal officehamburgerdataview={props.officehamburgerdataview} 
	                        officehamburgermarketingdataview={props.officehamburgermarketingdataview}
	                        officehamburgermarketingdataviewcb={props.officehamburgermarketingdataviewcb}
	                        officehamburgerformdataconfigurationviewtypeview={props.officehamburgerformdataconfigurationviewtypeview}
                                officehamburgerformdataconfigurationviewtypeviewcb={props.officehamburgerformdataconfigurationviewtypeviewcb}

     	                       officehamburgerproductdatascheme={props.officehamburgerproductdatascheme}
	                       officehamburgerproductdataschemecb={props.officehamburgerproductdataschemecb}
       
	                       officehamburgerproductdataschemeproductid={props.officehamburgerproductdataschemeproductid}
	                      officehamburgerproductdataschemeproductidcb={props.officehamburgerproductdataschemeproductidcb}

	                     officehamburgerproducttypeproductspecification={props.officehamburgerproducttypeproductspecification} 
	                  officehamburgerproducttypeproductspecificationcb={props.officehamburgerproducttypeproductspecificationcb}

	                  officehamburgerproductidproductspecification={props.officehamburgerproductidproductspecification} 
	                  officehamburgerproductidproductspecificationcb={props.officehamburgerproductidproductspecificationcb}

                          officehamburgerproductcategoryproductspecification={props.officehamburgerproductcategoryproductspecification} 
	                  officehamburgerproductcategoryproductspecificationcb={props.officehamburgerproductcategoryproductspecificationcb}

	                  officehamburgerproductnameproductspecification={props.officehamburgerproductnameproductspecification} 
	                  officehamburgerproductnameproductspecificationcb={props.officehamburgerproductnameproductspecificationcb}

                          officehamburgerproductrapportnameproductspecification={props.officehamburgerproductrapportnameproductspecification} 
	                  officehamburgerproductrapportnameproductspecificationcb={props.officehamburgerproductrapportnameproductspecificationcb}
                            
	                  officehamburgerproductdefinitionproductspecification={props.officehamburgerproductdefinitionproductspecification} 
	                  officehamburgerproductdefinitionproductspecificationcb={props.officehamburgerproductdefinitionproductspecificationcb}

	                 officehamburgerproductspecification={props.officehamburgerproductspecification}
	                 officehamburgerproductspecificationcb={props.officehamburgerproductspecificationcb}

                         compttemptforceupdatetempfunction={props.compttemptforceupdatetempfunction}

	                 officehamburgercargodataview={props.officehamburgercargodataview}

officehamburgercargodataviewcb={props.officehamburgercargodataviewcb}

	                        	                                     officehamburgerrequestsdataview={props.officehamburgerrequestsdataview}

                                  officehamburgerrequestsdataviewcb={props.officehamburgerrequestsdataviewcb}


	                         officehamburgertransactionsdataview={props.officehamburgertransactionsdataview}

                                 officehamburgertransactionsdataviewcb={props.officehamburgertransactionsdataviewcb}

                        officehamburgerrequesttransactionacceptloadingindication={props.officehamburgerrequesttransactionacceptloadingindication}

officehamburgerrequesttransactionacceptloadingindicationcb={props.officehamburgerrequesttransactionacceptloadingindicationcb}

officehamburgerrequesttransactionoutofstockloadingindication={props.officehamburgerrequesttransactionoutofstocktloadingindication}

officehamburgerrequesttransactionoutofstockloadingindicationcb={props.officehamburgerrequesttransactionoutofstockloadingindicationcb}

officehamburgerrequesttransactionchangeofstockloadingindication={props.officehamburgerrequesttransactionchangeofstockloadingindication}

officehamburgerrequesttransactionchangeofstockloadingindicationcb={props.officehamburgerrequesttransactionchangeofstockloadingindicationcb}


officehamburgercargotransactionshippedloadingindication={props.officehamburgercargotransactionshippedloadingindication}

officehamburgercargotransactionshippedloadingindicationcb={props.officehamburgercargotransactionshippedloadingindicationcb}

	                  officehamburgertransactionpassedtocargoloadingindication={props.officehamburgertransactionpassedtocargoloadingindication}
officehamburgertransactionpassedtocargoloadingindicationcb={props.officehamburgertransactionpassedtocargoloadingindicationcb}


                               officehamburgertransactiondataheader={props.officehamburgertransactiondataheader}

officehamburgertransactiondataheadercb={props.officehamburgertransactiondataheadercb}

/>
     </Row>

    </Col>
    
    </Row> 

    <Row id="officehamburger-modalcontainer">
     Modal
    </Row>

  </Col>
 ) 
}

function OfficeHamburgerDataModal(props) {

 if ( props.officehamburgerdataview === "Monitoring") {
return (
  <Col id="officehamburger-dataview-datamodal">
   <OfficeHamburgerMonitoringDataView />
  </Col>
 )
 }

 if ( props.officehamburgerdataview === "People") {
return (
  <Col id="officehamburger-dataview-datamodal">
   <OfficeHamburgerPeopleDataView />
  </Col>
 )
 }

 if ( props.officehamburgerdataview === "Marketing") {
return (
  <Col id="officehamburger-dataview-datamodal">
   <OfficeHamburgerMarketingDataView officehamburgermarketingdataview={props.officehamburgermarketingdataview}
	                             officehamburgermarketingdataviewcb={props.officehamburgermarketingdataviewcb}
	                             officehamburgerformdataconfigurationviewtypeview={props.officehamburgerformdataconfigurationviewtypeview}
officehamburgerformdataconfigurationviewtypeviewcb={props.officehamburgerformdataconfigurationviewtypeviewcb}
                                    officehamburgerproductdatascheme={props.officehamburgerproductdatascheme}
	                            officehamburgerproductdataschemecb={props.officehamburgerproductdataschemecb}

                                    officehamburgerproductdataschemeproductid={props.officehamburgerproductdataschemeproductid}
	                            officehamburgerproductdataschemeproductidcb={props.officehamburgerproductdataschemeproductidcb}

	                            officehamburgerproducttypeproductspecification={props.officehamburgerproducttypeproductspecification} 
	                  officehamburgerproducttypeproductspecificationcb={props.officehamburgerproducttypeproductspecificationcb}

	                  officehamburgerproductidproductspecification={props.officehamburgerproductidproductspecification} 
	                  officehamburgerproductidproductspecificationcb={props.officehamburgerproductidproductspecificationcb}

                          officehamburgerproductcategoryproductspecification={props.officehamburgerproductcategoryproductspecification} 
	                  officehamburgerproductcategoryproductspecificationcb={props.officehamburgerproductcategoryproductspecificationcb}

	                  officehamburgerproductnameproductspecification={props.officehamburgerproductnameproductspecification} 
	                  officehamburgerproductnameproductspecificationcb={props.officehamburgerproductnameproductspecificationcb}

                          officehamburgerproductrapportnameproductspecification={props.officehamburgerproductrapportnameproductspecification} 
	                  officehamburgerproductrapportnameproductspecificationcb={props.officehamburgerproductrapportnameproductspecificationcb}
                            
	                  officehamburgerproductdefinitionproductspecification={props.officehamburgerproductdefinitionproductspecification} 
	                  officehamburgerproductdefinitionproductspecificationcb={props.officehamburgerproductdefinitionproductspecificationcb}
    
                          officehamburgerproductspecification={props.officehamburgerproductspecification}
	                 officehamburgerproductspecificationcb={props.officehamburgerproductspecificationcb}
                         compttemptforceupdatetempfunction={props.compttemptforceupdatetempfunction}

	                 officehamburgertransactiondataheader={props.officehamburgertransactiondataheader}

officehamburgertransactiondataheadercb={props.officehamburgertransactiondataheadercb}


/>
  </Col>
 )
 }


 if ( props.officehamburgerdataview === "Money and Funds") {
return (
  <Col id="officehamburger-dataview-datamodal">
   <OfficeHamburgerMoneyAndFundsDataView />
  </Col>
 )
 }
 
 if ( props.officehamburgerdataview === "Requests") {
return (
  <Col id="officehamburger-dataview-datamodal">
   <OfficeHamburgerTransactionDataView officehamburgercargodataview={props.officehamburgercargodataview}

officehamburgercargodataviewcb={props.officehamburgercargodataviewcb}

	                 officehamburgerrequestsdataview={props.officehamburgerrequestsdataview}

officehamburgerrequestsdataviewcb={props.officehamburgerrequestsdataviewcb}

                             officehamburgertransactionsdataview={props.officehamburgertransactionsdataview}

                              officehamburgertransactionsdataviewcb={props.officehamburgertransactionsdataviewcb}

                                                officehamburgerrequesttransactionacceptloadingindication={props.officehamburgerrequesttransactionacceptloadingindication}

officehamburgerrequesttransactionacceptloadingindicationcb={props.officehamburgerrequesttransactionacceptloadingindicationcb}

officehamburgerrequesttransactionoutofstockloadingindication={props.officehamburgerrequesttransactionoutofstocktloadingindication}

officehamburgerrequesttransactionoutofstockloadingindicationcb={props.officehamburgerrequesttransactionoutofstockloadingindicationcb}

officehamburgerrequesttransactionchangeofstockloadingindication={props.officehamburgerrequesttransactionchangeofstockloadingindication}

officehamburgerrequesttransactionchangeofstockloadingindicationcb={props.officehamburgerrequesttransactionchangeofstockloadingindicationcb}


officehamburgercargotransactionshippedloadingindication={props.officehamburgercargotransactionshippedloadingindication}

officehamburgercargotransactionshippedloadingindicationcb={props.officehamburgercargotransactionshippedloadingindicationcb}

                           officehamburgertransactionpassedtocargoloadingindication={props.officehamburgertransactionpassedtocargoloadingindication}
officehamburgertransactionpassedtocargoloadingindicationcb={props.officehamburgertransactionpassedtocargoloadingindicationcb}

	                       officehamburgertransactiondataheader={props.officehamburgertransactiondataheader}

officehamburgertransactiondataheadercb={props.officehamburgertransactiondataheadercb}

 
/>
  </Col>
 )
 }

 if ( props.officehamburgerdataview === "Transactions") {
return (
  <Col id="officehamburger-dataview-datamodal">
   <OfficeHamburgerTransactionDataView officehamburgercargodataview={props.officehamburgercargodataview}

officehamburgercargodataviewcb={props.officehamburgercargodataviewcb}
	                                    officehamburgerrequestsdataview={props.officehamburgerrequestsdataview}

officehamburgerrequestsdataviewcb={props.officehamburgerrequestsdataviewcb}

                             officehamburgertransactionsdataview={props.officehamburgertransactionsdataview}

                              officehamburgertransactionsdataviewcb={props.officehamburgertransactionsdataviewcb}

                                              officehamburgerrequesttransactionacceptloadingindication={props.officehamburgerrequesttransactionacceptloadingindication}

officehamburgerrequesttransactionacceptloadingindicationcb={props.officehamburgerrequesttransactionacceptloadingindicationcb}

officehamburgerrequesttransactionoutofstockloadingindication={props.officehamburgerrequesttransactionoutofstocktloadingindication}

officehamburgerrequesttransactionoutofstockloadingindicationcb={props.officehamburgerrequesttransactionoutofstockloadingindicationcb}

officehamburgerrequesttransactionchangeofstockloadingindication={props.officehamburgerrequesttransactionchangeofstockloadingindication}

officehamburgerrequesttransactionchangeofstockloadingindicationcb={props.officehamburgerrequesttransactionchangeofstockloadingindicationcb}

officehamburgercargotransactionshippedloadingindication={props.officehamburgercargotransactionshippedloadingindication}

officehamburgercargotransactionshippedloadingindicationcb={props.officehamburgercargotransactionshippedloadingindicationcb}

	                       officehamburgertransactionpassedtocargoloadingindication={props.officehamburgertransactionpassedtocargoloadingindication}
officehamburgertransactionpassedtocargoloadingindicationcb={props.officehamburgertransactionpassedtocargoloadingindicationcb}

	                       officehamburgertransactiondataheader={props.officehamburgertransactiondataheader}

officehamburgertransactiondataheadercb={props.officehamburgertransactiondataheadercb}

 
/>
  </Col>
 )
 }

 if ( props.officehamburgerdataview === "Cargo") {
return (
  <Col id="officehamburger-dataview-datamodal">
   <OfficeHamburgerTransactionDataView officehamburgercargodataview={props.officehamburgercargodataview}

officehamburgercargodataviewcb={props.officehamburgercargodataviewcb}
	                      officehamburgercargodataview={props.officehamburgercargodataview}

officehamburgerrequestsdataviewcb={props.officehamburgerrequestsdataviewcb}

                             officehamburgertransactionsdataview={props.officehamburgertransactionsdataview}

                              officehamburgertransactionsdataviewcb={props.officehamburgertransactionsdataviewcb}
                                                                           officehamburgerrequesttransactionacceptloadingindication={props.officehamburgerrequesttransactionacceptloadingindication}

officehamburgerrequesttransactionacceptloadingindicationcb={props.officehamburgerrequesttransactionacceptloadingindicationcb}

officehamburgerrequesttransactionoutofstockloadingindication={props.officehamburgerrequesttransactionoutofstocktloadingindication}

officehamburgerrequesttransactionoutofstockloadingindicationcb={props.officehamburgerrequesttransactionoutofstockloadingindicationcb}

officehamburgerrequesttransactionchangeofstockloadingindication={props.officehamburgerrequesttransactionchangeofstockloadingindication}

officehamburgerrequesttransactionchangeofstockloadingindicationcb={props.officehamburgerrequesttransactionchangeofstockloadingindicationcb}

                   

officehamburgercargotransactionshippedloadingindication={props.officehamburgercargotransactionshippedloadingindication}

officehamburgercargotransactionshippedloadingindicationcb={props.officehamburgercargotransactionshippedloadingindicationcb}

	               officehamburgertransactionpassedtocargoloadingindication={props.officehamburgertransactionpassedtocargoloadingindication}
officehamburgertransactionpassedtocargoloadingindicationcb={props.officehamburgertransactionpassedtocargoloadingindicationcb}


	                       officehamburgertransactiondataheader={props.officehamburgertransactiondataheader}

officehamburgertransactiondataheadercb={props.officehamburgertransactiondataheadercb}

 
/>
  </Col>
 )
 }

}

function OfficeHamburgerTransactionDataView(props) {
 return (
   <Row id="officehamburger-dataview-datacontainer-cargo">
    <OfficehamburgerTransactionsData officehamburgercargodataview={props.officehamburgercargodataview}
 
officehamburgercargodataviewcb={props.officehamburgercargodataviewcb}
	                      
              officehamburgerrequestsdataview={props.officehamburgerrequestsdataview}


officehamburgerrequestsdataviewcb={props.officehamburgerrequestsdataviewcb}

                             officehamburgertransactionsdataview={props.officehamburgertransactionsdataview}

                              officehamburgertransactionsdataviewcb={props.officehamburgertransactionsdataviewcb}

                        officehamburgerrequesttransactionacceptloadingindication={props.officehamburgerrequesttransactionacceptloadingindication}

officehamburgerrequesttransactionacceptloadingindicationcb={props.officehamburgerrequesttransactionacceptloadingindicationcb}

officehamburgerrequesttransactionoutofstockloadingindication={props.officehamburgerrequesttransactionoutofstocktloadingindication}

officehamburgerrequesttransactionoutofstockloadingindicationcb={props.officehamburgerrequesttransactionoutofstockloadingindicationcb}

officehamburgerrequesttransactionchangeofstockloadingindication={props.officehamburgerrequesttransactionchangeofstockloadingindication}

officehamburgerrequesttransactionchangeofstockloadingindicationcb={props.officehamburgerrequesttransactionchangeofstockloadingindicationcb}



officehamburgercargotransactionshippedloadingindication={props.officehamburgercargotransactionshippedloadingindication}

officehamburgercargotransactionshippedloadingindicationcb={props.officehamburgercargotransactionshippedloadingindicationcb} 
	             
	                          officehamburgertransactionpassedtocargoloadingindication={props.officehamburgertransactionpassedtocargoloadingindication}
officehamburgertransactionpassedtocargoloadingindicationcb={props.officehamburgertransactionpassedtocargoloadingindicationcb}

	                           officehamburgertransactiondataheader={props.officehamburgertransactiondataheader}

officehamburgertransactiondataheadercb={props.officehamburgertransactiondataheadercb}

 />
   </Row>
  )
}

function OfficehamburgerTransactionsData(props) {
 return (
  <Col id="officehamburger-transactionsdata">
    <Row id="officehamburger-transactionsdata-navigationcontainer">
      <Col xs={6}
           md={3}
	   lg={3}
	   className="officehamburger-transactionsdata-navigationcontainer-navigationbuttoncontainer">
        <button className="officehamburger-transactionsdata-navigationcontainer-navigationbutton"
	        onClick={(evt)=> {
                   props.officehamburgertransactiondataheadercb((header)=> header = "Commoner accounts")
		}}>
	  Commoner accounts
	</button>
      </Col>
      <Col xs={6}
           md={3}
	   lg={3}
	   className="officehamburger-transactionsdata-navigationcontainer-navigationbuttoncontainer">
        <button className="officehamburger-transactionsdata-navigationcontainer-navigationbutton"
	        onClick={(evt)=> {
                   props.officehamburgertransactiondataheadercb((header)=> header = "Public accounts")
		}}>
	  Public accounts
	</button>
      </Col>
      <Col xs={8}
           md={3}
	   lg={3}
	   className="officehamburger-transactionsdata-navigationcontainer-navigationbuttoncontainer">
        <button className="officehamburger-transactionsdata-navigationcontainer-navigationbutton"
	        onClick={(evt)=> {
                   props.officehamburgertransactiondataheadercb((header)=> header = "Private accounts authentication")
		}}>
	  Private accounts authentications
	</button>
      </Col>
    </Row>
    <Col id="officehamburger-transactionsdata-view">
     <Row id="officehamburger-transactionsdata-indicationscontainer">
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-transactionsdata-indicationscontainer-transactiondataheaderindicationcontainer">
       <h1 className="officehamburger-transactionsdata-indicationscontainer-transactiondataheaderindication">      
	 {props.officehamburgertransactiondataheader}
      </h1>
     </Col>
     <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-transactionsdata-indicationscontainer-transactiondataheaderindicationcontainer"> 
       {
         props.officehamburgerrequestsdataview && 
	<p className="officehamburger-transactionsdata-indicationscontainer-transactiondataunderlinedheaderindication"
	  onClick={(evt)=> {

           const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-baranggaydatamodal");

	   _baranggaydatacontainer.style.display = "block";

	  }}>     
         Requests
       </p>
	}
	{
         props.officehamburgertransactionsdataview && 
	<p className="officehamburger-transactionsdata-indicationscontainer-transactiondataunderlinedheaderindication"
	  onClick={(evt)=> {

           const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-baranggaydatamodal");

	   _baranggaydatacontainer.style.display = "block";

	  }}>     
         Transactions
       </p>
	}

        {
         props.officehamburgercargodataview && 
	<p className="officehamburger-transactionsdata-indicationscontainer-transactiondataunderlinedheaderindication"
	  onClick={(evt)=> {

           const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-baranggaydatamodal");

	   _baranggaydatacontainer.style.display = "block";

	  }}>     
         Cargo
       </p>
	}

       </Col>

     </Row>

     <Row id="officehamburger-transactionsdata-baranggaydatamodal">
      <Row id="officehamburger-transactionsdata-baranggaydatamodal-datacontainer">
       <Col xs={12}
	    md={12}
	    lg={12}
	    className="officehamburger-transactionsdata-baranggaydatamodal-datacontainer-indicationscontainer">
        <button className="officehamburger-transactionsdata-baranggaydatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay">
         <h1 className="officehamburger-transactionsdata-baranggaydatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">Baranggay: Maa</h1>
	  <p className="officehamburger-transactionsdata-baranggaydatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">There 0 requests on 12 different individual streets</p>
         <p className="officehamburger-transactionsdata-baranggaydatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">Overall grams to be delivered here, 0 grams</p>
         <p className="officehamburger-transactionsdata-baranggaydatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">Total requests payment, 0 peso"s</p>
	 <button className="officehamburger-transactionsdata-baranggaydatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-configurationbutton"
                onClick={(evt)=> {

                  const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-streetsdatamodal");

	   _baranggaydatacontainer.style.display = "block";

		}}>View data by Streets</button>
	</button>
       </Col>

      </Row>
      <Col id="officehamburger-transactionsdata-baranggaydatamodal-closebuttoncontainer">
       <button id="officehamburger-transactionsdata-baranggaydatamodal-closebutton"
              onClick={(evt)=> {

                const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-baranggaydatamodal");

	        _baranggaydatacontainer.style.display = "none";

	      }}>
	close
       </button>
      </Col>
     </Row>

    <Row id="officehamburger-transactionsdata-streetsdatamodal">  

      <Row id="officehamburger-transactionsdata-streetsdatamodal-datacontainer">

       <Col xs={12}
	    md={12}
	    lg={12}
	    className="officehamburger-transactionsdata-streetsdatamodal-datacontainer-indicationscontainer">
        <button className="officehamburger-transactionsdata-streetsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay">
         <h1 className="officehamburger-transactionsdata-streetsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">Trinidad street</h1>
	<p className="officehamburger-transactionsdata-streetsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">Complete location: Street, barangay, trademark, city, province, country</p>
	  <p className="officehamburger-transactionsdata-baranggaydatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">There 0 requests on this street</p>
         <p className="officehamburger-transactionsdata-streetsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">Overall grams to be delivered here, 0 grams</p>
         <p className="officehamburger-transactionsdata-streetsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">Total requests payment, 0 peso"s</p>
	 <button className="officehamburger-transactionsdata-streetsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-configurationbutton"
                onClick={(evt)=> {

                  const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-requestsdatamodal");

	   _baranggaydatacontainer.style.display = "block";

		}}>View requests</button>
	</button>
       </Col>

      </Row>
      <Col id="officehamburger-transactionsdata-streetsdatamodal-closebuttoncontainer">
       <button id="officehamburger-transactionsdata-streetsdatamodal-closebutton"
              onClick={(evt)=> {

                const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-streetsdatamodal");

	        _baranggaydatacontainer.style.display = "none";

	      }}>
	close
       </button>
      </Col>

    </Row>

    <Row id="officehamburger-transactionsdata-requestsdatamodal">  

      <Row id="officehamburger-transactionsdata-requestsdatamodal-datacontainer">

       <Col xs={12}
	    md={12}
	    lg={12}
	    className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer">
        <button className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay">
         <h1 className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">First name, Middle name, Last name</h1>
	<p className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">Complete location: Street, barangay, trademark, city, province, country</p>
	<p className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">Status: To be process</p>
	  <p className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">There 0 mrn requests on this request</p>
          <p className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">There 0 non-mrn requests on this request</p>

         <p className="officehamburger-transactionsdata-streetsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">Total mrn grams, 0 grams</p>
         <p className="officehamburger-transactionsdata-streetsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">Total non-mrn grams, 0 grams</p>
         <p className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">Total payment, 0 peso"s</p>
	 <p className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-headerindication">Total cargo payment, 0 peso"s</p>
	 <button className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-configurationbutton"
                onClick={(evt)=> {

                  const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-requestdatamodal");

	   _baranggaydatacontainer.style.display = "block";

		}}>View request</button>

        { props.officehamburgerrequestsdataview && 
	<Col className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-accountbuttonscontainer">

          {
            props.officehamburgerrequesttransactionacceptloadingindication ?
	   (
           <Spinner animation="border" variant="secondary" />
           )
	   :
	   (
	    <button className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-configurationbutton"
                onClick={(evt)=> {

                  const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-requestdatamodal");

	          _baranggaydatacontainer.style.display = "block";

		}}>
	    Accept
  	   </button>
           )
	  }

	  {
            props.officehamburgerrequesttransactionacceptloadingindication ?
	   (
           <Spinner animation="border" variant="secondary" />
           )
	   :
	   (
	    <button className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-configurationbutton"
                onClick={(evt)=> {

                  const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-requestdatamodal");

	          _baranggaydatacontainer.style.display = "block";

		  alert(props.officehamburgerrequesttransactionoutofstockloadingindication)
		}}>
	    Out of stock
  	   </button>
           )
	  }

          {
            props.officehamburgerrequesttransactionchangeofstockloadingindication ?
	   (
           <Spinner animation="border" variant="secondary" />
           )
	   :
	   (
	    <button className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-configurationbutton"
                onClick={(evt)=> {

                  const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-requestdatamodal");

	          _baranggaydatacontainer.style.display = "block";

		}}>
	    Change of stock
  	   </button>
           )
	  }


	</Col>}

       { props.officehamburgertransactionsdataview && 
	<Col className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-accountbuttonscontainer">

          {
            props.officehamburgercargotransactionshippedloadingindication ?
	   (
           <Spinner animation="border" variant="secondary" />
           )
	   :
	   (
	    <button className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-configurationbutton"
                onClick={(evt)=> {

                  const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-requestdatamodal");

	          _baranggaydatacontainer.style.display = "block";

		}}>
	    Passed to cargo
  	   </button>
           )
	  }
	  
           {
            props.officehamburgerrequesttransactionacceptloadingindication ?
	   (
           <Spinner animation="border" variant="secondary" />
           )
	   :
	   (
	    <button className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-configurationbutton"
                onClick={(evt)=> {

                  const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-requestdatamodal");

	          _baranggaydatacontainer.style.display = "block";

		  alert(props.officehamburgerrequesttransactionoutofstockloadingindication)
		}}>
	    Out of stock
  	   </button>
           )
	  }

          {
            props.officehamburgerrequesttransactionchangeofstockloadingindication ?
	   (
           <Spinner animation="border" variant="secondary" />
           )
	   :
	   (
	    <button className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-configurationbutton"
                onClick={(evt)=> {

                  const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-requestdatamodal");

	          _baranggaydatacontainer.style.display = "block";

		}}>
	    Change of stock
  	   </button>
           )
	  }

	</Col>}

       { props.officehamburgercargodataview && 
	<Col className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-accountbuttonscontainer">

          {
            props.officehamburgercargotransactionshippedloadingindication ?
	   (
           <Spinner animation="border" variant="secondary" />
           )
	   :
	   (
	    <button className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-configurationbutton"
                onClick={(evt)=> {

                  const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-requestdatamodal");

	          _baranggaydatacontainer.style.display = "block";

		}}>
	    Ship
  	   </button>
           )
	  }
	  <button className="officehamburger-transactionsdata-requestsdatamodal-datacontainer-indicationscontainer-indicationcontainerasabuttontodisplay-configurationbutton"
                onClick={(evt)=> {

                  const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-requestmapmodal");

	   _baranggaydatacontainer.style.display = "block";

		}}>
	   Map
	 </button>

	</Col>}

	</button>
        
       </Col>

      </Row>
      <Col id="officehamburger-transactionsdata-requestsdatamodal-closebuttoncontainer">
       <button id="officehamburger-transactionsdata-requestsdatamodal-closebutton"
              onClick={(evt)=> {

                const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-requestsdatamodal");

	        _baranggaydatacontainer.style.display = "none";

	      }}>
	close
       </button>
      </Col>

    </Row>

    <Row id="officehamburger-transactionsdata-requestdatamodal">
     <Row id="officehamburger-transactionsdata-requestdatamodal-datagridcontainer">
      <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Name: </p>
      <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Account number: </p>
      <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Contact number: </p>
      <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Transaction id: </p>
      <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Address:  </p>
      <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Delivery given address: </p>
      <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Product</p>
      <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Mrn</p>
      <Row className="officehamburger-transactionsdata-requestdatamodal-merchandisespecificationgridcontainer">
       <Col xs={7}
	    md={6}
	    lg={6}
	    className="officehamburger-transactionsdata-requestdatamodal-merchandiseimagecontainer">
	<img src='../images/landingpage/bondpaperimage.jpg'
	     className="officehamburger-transactionsdata-requestdatamodal-merchandiseimage"
	     alt="Xirbit-Product-Image"/>
       </Col>
       <Col xs={5}
	    md={6}
	    lg={6} 
	    className="officehamburger-transactionsdata-requestdatamodal-merchandisecargodetailscontainer">
        <Row className="officehamburger-transactionsdata-requestdatamodal-merchandisespecificationgridcontainer">
 	 <Col xs={12}
	      md={6}
	      lg={6}
	      className="officehamburger-transactionsdata-requestdatamodal-indicationcontainer">
         <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Size: 0 </p>
         <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Color: 0</p>
	<p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Part: 10000</p>
	  <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Pcs: 10000</p>
         </Col>
         <Col xs={12}
	      md={6}
	      lg={6}
	      className="officehamburger-transactionsdata-requestdatamodal-indicationcontainer">

	  <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Price: 10,000</p>
         </Col>
         <Col xs={12}
	      md={6}
	      lg={6}
	      className="officehamburger-transactionsdata-requestdatamodal-indicationcontainer">

          <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Weight: 100000</p>
         </Col>
        </Row>
       </Col>
       <Col xs={12}
	    md={12}
	    lg={12}>
        <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Total weight: 0 grams</p>
        <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Total price: 0 peso's</p>
       </Col>
      </Row>
      <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Non-mrn</p>
      <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Overall total weight: 0 grams</p>
      <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Overall total price: 0 peso's</p>
      <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Overall total shipment: 0 grams</p>
     <p className="officehamburger-transactionsdata-requestdatamodal-headerindication">Overall total payment: 0 grams</p>
     </Row>
     <Col id="officehamburger-transactionsdata-requestdatamodal-closebuttoncontainer">
      <button id="officehamburger-transactionsdata-requestdatamodal-closebutton"
	      onClick={(evt)=> {

                const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-requestdatamodal");

	        _baranggaydatacontainer.style.display = "none";

	      }}>
       close
      </button>
     </Col>
   </Row>

   <Row id="officehamburger-transactionsdata-requestmapmodal">
    <Col id="officehamburger-transactionsdata-requestmapmodal-mapcontainer">
    </Col>
    <Col id="officehamburger-transactionsdata-requestmapmodal-closebuttoncontainer">
     <button id="officehamburger-transactionsdata-requestmapmodal-closebutton"
	     onClick={(evt)=> {

                const _baranggaydatacontainer = document.querySelector("#officehamburger-transactionsdata-requestmapmodal");

	        _baranggaydatacontainer.style.display = "none";

	     }}>
       close
     </button>
    </Col>
   </Row>

   </Col>
   </Col>
 )
}

function OfficeHamburgerMonitoringDataView() {
 return (
   <Row id="officehamburger-dataview-datacontainer-monitoring">
    Monitoring
   </Row>
 )
}

function OfficeHamburgerPeopleDataView() {
 return (
   <Row id="officehamburger-dataview-datacontainer-people">
    People
   </Row>
 )
}

function OfficeHamburgerMarketingDataView(props) {
 return (
   <Row id="officehamburger-dataview-datacontainer-marketing">

    <Row id="officehamburger-dataview-datacontainer-marketingnavigtionbuttongridcontainer">
     <Col xs={12}
	  md={3}
	  lg={3}
	  className="officehamburger-dataview-datacontainer-marketing-navigtionbuttoncontainer">
	<button className="officehamburger-dataview-datacontainer-marketing-navigtionbutton"
	        onClick={(evt)=> {
                  props.officehamburgermarketingdataviewcb((view)=> view = evt.target.innerText);
 }}>
	  Merchandise
	</button>
     </Col>
     <Col xs={12}
	  md={3}
	  lg={3}
	  className="officehamburger-dataview-datacontainer-marketing-navigtionbuttoncontainer">
	<button className="officehamburger-dataview-datacontainer-marketing-navigtionbutton"
	        onClick={(evt)=> {
                   props.officehamburgermarketingdataviewcb((view)=> view = evt.target.innerText);
 }}>
	  Load product's
	</button>
     </Col>
   </Row>
   
   <Col id="officehamburger-dataview-datacontainer-datacontainer">
     <HamburgerMarketingDataView officehamburgermarketingdataview={props.officehamburgermarketingdataview}
	                         officehamburgerformdataconfigurationviewtypeview={props.officehamburgerformdataconfigurationviewtypeview}
officehamburgerformdataconfigurationviewtypeviewcb={props.officehamburgerformdataconfigurationviewtypeviewcb}
	                        officehamburgerproductdatascheme={props.officehamburgerproductdatascheme}
	                        officehamburgerproductdataschemecb={props.officehamburgerproductdataschemecb}
           
	                       officehamburgerproductdataschemeproductid={props.officehamburgerproductdataschemeproductid}
	                      officehamburgerproductdataschemeproductidcb={props.officehamburgerproductdataschemeproductidcb}

	                      officehamburgerproducttypeproductspecification={props.officehamburgerproducttypeproductspecification} 
	                  officehamburgerproducttypeproductspecificationcb={props.officehamburgerproducttypeproductspecificationcb}

	                  officehamburgerproductidproductspecification={props.officehamburgerproductidproductspecification} 
	                  officehamburgerproductidproductspecificationcb={props.officehamburgerproductidproductspecificationcb}

                          officehamburgerproductcategoryproductspecification={props.officehamburgerproductcategoryproductspecification} 
	                  officehamburgerproductcategoryproductspecificationcb={props.officehamburgerproductcategoryproductspecificationcb}

	                  officehamburgerproductnameproductspecification={props.officehamburgerproductnameproductspecification} 
	                  officehamburgerproductnameproductspecificationcb={props.officehamburgerproductnameproductspecificationcb}

                          officehamburgerproductrapportnameproductspecification={props.officehamburgerproductrapportnameproductspecification} 
	                  officehamburgerproductrapportnameproductspecificationcb={props.officehamburgerproductrapportnameproductspecificationcb}
                            
	                  officehamburgerproductdefinitionproductspecification={props.officehamburgerproductdefinitionproductspecification} 
	                  officehamburgerproductdefinitionproductspecificationcb={props.officehamburgerproductdefinitionproductspecificationcb}

	                 officehamburgerproductspecification={props.officehamburgerproductspecification}
	                 officehamburgerproductspecificationcb={props.officehamburgerproductspecificationcb}

	                 compttemptforceupdatetempfunction={props.compttemptforceupdatetempfunction}

/>
   </Col>

   </Row>
 )
}

function HamburgerMarketingDataView(props) {

 if ( props.officehamburgermarketingdataview === "Merchandise") {
 return (
  <Col id="officehamburger-dataview-datacontainer-datacontainer-dataview">
  <HamburgerMarketingMerchandiseDataView officehamburgerformdataconfigurationviewtypeview={props.officehamburgerformdataconfigurationviewtypeview}
                                         officehamburgerformdataconfigurationviewtypeviewcb={props.officehamburgerformdataconfigurationviewtypeviewcb}
   
	                                officehamburgerproductdatascheme={props.officehamburgerproductdatascheme}
	                               officehamburgerproductdataschemecb={props.officehamburgerproductdataschemecb}
 
	                               officehamburgerproductdataschemeproductid={props.officehamburgerproductdataschemeproductid}
	                               officehamburgerproductdataschemeproductidcb={props.officehamburgerproductdataschemeproductidcb}

	                               officehamburgerproducttypeproductspecification={props.officehamburgerproducttypeproductspecification} 
	                  officehamburgerproducttypeproductspecificationcb={props.officehamburgerproducttypeproductspecificationcb}

	                  officehamburgerproductidproductspecification={props.officehamburgerproductidproductspecification} 
	                  officehamburgerproductidproductspecificationcb={props.officehamburgerproductidproductspecificationcb}

                          officehamburgerproductcategoryproductspecification={props.officehamburgerproductcategoryproductspecification} 
	                  officehamburgerproductcategoryproductspecificationcb={props.officehamburgerproductcategoryproductspecificationcb}

	                  officehamburgerproductnameproductspecification={props.officehamburgerproductnameproductspecification} 
	                  officehamburgerproductnameproductspecificationcb={props.officehamburgerproductnameproductspecificationcb}

                          officehamburgerproductrapportnameproductspecification={props.officehamburgerproductrapportnameproductspecification} 
	                  officehamburgerproductrapportnameproductspecificationcb={props.officehamburgerproductrapportnameproductspecificationcb}
                            
	                  officehamburgerproductdefinitionproductspecification={props.officehamburgerproductdefinitionproductspecification} 
	                  officehamburgerproductdefinitionproductspecificationcb={props.officehamburgerproductdefinitionproductspecificationcb}

	                 officehamburgerproductspecification={props.officehamburgerproductspecification}
	                 officehamburgerproductspecificationcb={props.officehamburgerproductspecificationcb}
                          compttemptforceupdatetempfunction={props.compttemptforceupdatetempfunction}

/>
  </Col>
 )
 }
 
 if ( props.officehamburgermarketingdataview === "Load product\'s") {
 return (
  <Col id="officehamburger-dataview-datacontainer-datacontainer-dataview">
  <HamburgerMarketingLoadProductsDataView />
  </Col>
 )
 }

}

function HamburgerMarketingMerchandiseDataView(props) {
 return (
   <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer">

      <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedata">

       <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-configurationcontainer">

       <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-searchcontainer">
	 <p id="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-searchcontainer-enterproductidheaderindication">
	  Enter product id:
	 </p>
	 <input type="text"
	        id="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-searchcontainer-productidsearchfield"/>
	 <p id="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-searchcontainer-searchfieldresponsemessage">
	 Response message
	 </p>
       </Col>
       <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-configurationbuttonsgridcontainer">
	 <Col xs={12}
	      md={3}
	      lg={3}
	      className="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-configurationbuttoncontainer">
	   <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-configurationbutton"
	           onClick={(evt)=> {

                    const _merchandisedatacontainer = document.querySelector(".officehamburger-dataview-datacontainer-datacontainer-merchandisedataresultscontainer");

		    props.officehamburgerformdataconfigurationviewtypeviewcb((configurationdataview)=> configurationdataview = evt.target.innerText);

		    _merchandisedatacontainer.classList.toggle("officehamburger-dataview-datacontainer-datacontainer-merchandisetoggleddataresultscontainer");

		   }}>
	     Search
           </button>
	 </Col>
         <Col xs={12}
	      md={3}
	      lg={3}
	      className="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-configurationbuttoncontainer">
	   <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-configurationbutton"
	           onClick={(evt)=> {

                    const _merchandisedataconfigurationcontainer = document.querySelector(".officehamburger-dataview-datacontainer-datacontainer-merchandisedataconfigurationcontainer");

		   const _productid = document.querySelector("#officehamburger-dataview-datacontainer-datacontainer-merchandisedata-searchcontainer-productidsearchfield") 
		    props.officehamburgerformdataconfigurationviewtypeviewcb((configurationdataview)=> configurationdataview = evt.target.innerText);
                    
		    props.officehamburgerproductdatascheme.authentications.productid = _productid.value;

		    props.officehamburgerproductdataschemeproductidcb((productid)=> productid = _productid.value);

		    _merchandisedataconfigurationcontainer.classList.toggle("officehamburger-dataview-datacontainer-datacontainer-merchandisetoggleddataconfigurationcontainer");

		   }}>
	     Add product
	   </button>
	 </Col>
	 <Col xs={12}
	      md={3}
	      lg={3}
	      className="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-configurationbuttoncontainer">
	   <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-configurationbutton"
	           onClick={(evt)=> {

                    const _merchandisedataconfigurationcontainer = document.querySelector(".officehamburger-dataview-datacontainer-datacontainer-merchandisedataconfigurationcontainer");

		   const _productid = document.querySelector("#officehamburger-dataview-datacontainer-datacontainer-merchandisedata-searchcontainer-productidsearchfield") 
		    props.officehamburgerformdataconfigurationviewtypeviewcb((configurationdataview)=> configurationdataview = evt.target.innerText);
                    
		    props.officehamburgerproductdatascheme.authentications.productid = _productid.value;

		    props.officehamburgerproductdataschemeproductidcb((productid)=> productid = _productid.value);

		    _merchandisedataconfigurationcontainer.classList.toggle("officehamburger-dataview-datacontainer-datacontainer-merchandisetoggleddataconfigurationcontainer");

		   }}>
	     Add a product specification
	   </button>
	 </Col>

         <Col xs={12}
	      md={3}
	      lg={3}
	      className="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-configurationbuttoncontainer">
	   <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-configurationbutton"
	           onClick={(evt)=> {

                     const _merchandisedataconfigurationcontainer = document.querySelector(".officehamburger-dataview-datacontainer-datacontainer-merchandisedataconfigurationcontainer");

		    props.officehamburgerformdataconfigurationviewtypeviewcb((configurationdataview)=> configurationdataview = evt.target.innerText);

		    _merchandisedataconfigurationcontainer.classList.toggle("officehamburger-dataview-datacontainer-datacontainer-merchandisetoggleddataconfigurationcontainer");

		   }}>
	     Edit
	   </button>
	 </Col>
         <Col xs={12}
	      md={3}
	      lg={3}
	      className="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-configurationbuttoncontainer">
	   <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-configurationbutton"
	           onClick={(evt)=> {

                    const _merchandisedatacontainer = document.querySelector(".officehamburger-dataview-datacontainer-datacontainer-merchandisedataresultscontainer");

		    props.officehamburgerformdataconfigurationviewtypeviewcb((configurationdataview)=> configurationdataview = evt.target.innerText);

		    _merchandisedatacontainer.classList.toggle("officehamburger-dataview-datacontainer-datacontainer-merchandisetoggleddataresultscontainer");

		   }}>
	     Delete
	   </button>
	 </Col>

       </Row>

       <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedata-buttonscontainer">
       </Col>

      </Col>

      </Col>

     <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedataresultscontainer">
      <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedataresultslayoutcontainer">
      <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedataresultslayoutcontainer-closebuttoncontainer">
       <p id="officehamburger-dataview-datacontainer-datacontainer-merchandisedataresultscontainer-closebuttonheaderindication"
	  onClick={(evt)=> {
    
            const _merchandisedatacontainer = document.querySelector(".officehamburger-dataview-datacontainer-datacontainer-merchandisetoggleddataresultscontainer");
           
	   _merchandisedatacontainer.classList.remove("officehamburger-dataview-datacontainer-datacontainer-merchandisetoggleddataresultscontainer");
		   }}>
	 close
       </p>
       </Col>
       <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedataresultscontainer-merchandisedataresultscontainer-formdatamodalcontainer">
         <HamburgerMarketingMerchandiseFormDataModal 
	  officehamburgerformdataconfigurationviewtypeview={props.officehamburgerformdataconfigurationviewtypeview}
officehamburgerformdataconfigurationviewtypeviewcb={props.officehamburgerformdataconfigurationviewtypeviewcb}

/>
       </Col>
      </Col>
     </Col>

     <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedataconfigurationcontainer">
     <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedataconfigurationcontainer-layoutcontainer">

      <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedataconfigurationcontainer-closebuttonheaderindicationcontainer">
       <p id="officehamburger-dataview-datacontainer-datacontainer-merchandisedataconfigurationcontainer-closebuttonheaderindication"
	  onClick={(evt)=> {

            const _merchandisedataconfigurationcontainer = document.querySelector(".officehamburger-dataview-datacontainer-datacontainer-merchandisetoggleddataconfigurationcontainer");

            _merchandisedataconfigurationcontainer.classList.remove("officehamburger-dataview-datacontainer-datacontainer-merchandisetoggleddataconfigurationcontainer");
		   }}>
	 close
       </p>
      </Col>
      <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedataconfigurationcontainer-formdatacontainer">
       <HamburgerMarketingMerchandiseFormDataModal          officehamburgerformdataconfigurationviewtypeview={props.officehamburgerformdataconfigurationviewtypeview}
officehamburgerformdataconfigurationviewtypeviewcb={props.officehamburgerformdataconfigurationviewtypeviewcb}
    officehamburgerproductdatascheme={props.officehamburgerproductdatascheme}
	                 officehamburgerproductdataschemecb={props.officehamburgerproductdataschemecb}
                           
	                  officehamburgerproductdataschemeproductid={props.officehamburgerproductdataschemeproductid}
	                 officehamburgerproductdataschemeproductidcb={props.officehamburgerproductdataschemeproductidcb}

                        officehamburgerproducttypeproductspecification={props.officehamburgerproducttypeproductspecification} 
	                  officehamburgerproducttypeproductspecificationcb={props.officehamburgerproducttypeproductspecificationcb}

	                  officehamburgerproductidproductspecification={props.officehamburgerproductidproductspecification} 
	                  officehamburgerproductidproductspecificationcb={props.officehamburgerproductidproductspecificationcb}

                          officehamburgerproductcategoryproductspecification={props.officehamburgerproductcategoryproductspecification} 
	                  officehamburgerproductcategoryproductspecificationcb={props.officehamburgerproductcategoryproductspecificationcb}

	                  officehamburgerproductnameproductspecification={props.officehamburgerproductnameproductspecification} 
	                  officehamburgerproductnameproductspecificationcb={props.officehamburgerproductnameproductspecificationcb}

                          officehamburgerproductrapportnameproductspecification={props.officehamburgerproductrapportnameproductspecification} 
	                  officehamburgerproductrapportnameproductspecificationcb={props.officehamburgerproductrapportnameproductspecificationcb}
                            
	                  officehamburgerproductdefinitionproductspecification={props.officehamburgerproductdefinitionproductspecification} 
	                  officehamburgerproductdefinitionproductspecificationcb={props.officehamburgerproductdefinitionproductspecificationcb}
 
	                 officehamburgerproductspecification={props.officehamburgerproductspecification}
	                 officehamburgerproductspecificationcb={props.officehamburgerproductspecificationcb}

                         compttemptforceupdatetempfunction={props.compttemptforceupdatetempfunction}

/>
      </Col>
     </Col>
   </Col>
  </Col>
 )
}

function HamburgerMarketingMerchandiseFormDataModal(props) {

 const [samplevalue, samplevaluecb] = useState("");

 const [addingproductloadingindication, addingproductloadingindicationcb] = useState(false);

 const [officehamburgerproductspecification, officehamburgerproductspecificationcb] = useState([]);

 if ( props.officehamburgerformdataconfigurationviewtypeview === "Search" ) {
   return (
   <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer">
   </Row> 
   )

 }

 if ( props.officehamburgerformdataconfigurationviewtypeview === "Add product" ) {
 return (
  <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer">
   
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
        Authentications
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product type
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              props.officehamburgerproductdatascheme.authentications.producttype = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product id
      </p>
      <input type="text"		
	     value={props.officehamburgerproductdataschemeproductid}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
	      props.officehamburgerproductdatascheme.authentications.productid = evt.target.value;
             }}/>

    </Col>
     
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
	Primary details
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product category
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product name
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product rapport name
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>
  
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product definition
      </p>
     <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>
 
    <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationcotaniner">
       <Col xs={12}
	    md={12}
	    lg={12}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-responsemessagecontainer">
        <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-responsemessage">Product successfully added</p>
       </Col>
       <Col xs={12}
	    md={12}
	    lg={12}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbuttoncontainer">
      {
       addingproductloadingindication ? 
       (
        <Spinner animation="border" variant="secondary" />
       )
       :
       (
        <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbutton">
        add
       </button> 
       )
      }
      </Col>
     </Row>

    </Row>
 )

 }
 
 if ( props.officehamburgerformdataconfigurationviewtypeview === "Add a product specification" ) {
 return (
  <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer"> 

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
        Authentications
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product type
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       {props.officehamburgerproducttypeproductspecification}
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product id
      </p>
       <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	{props.officehamburgerproductidproductspecification}

      </p>
   </Col>
     
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
	Primary details
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product category
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	{props.officehamburgerproductcategoryproductspecification}

      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product name
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	{props.officehamburgerproductnameproductspecification}
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication"
	 onClick={(evt)=> {
          alert(props.officehamburgerproductrapportnameproductspecification)
	 }}>
	Product rapport name
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       {props.officehamburgerproductrapportnameproductspecification}
      </p>
    </Col>
  
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product definition
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	{props.officehamburgerproductdefinitionproductspecification}
      </p>
    </Col>

    <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-productspeficationformdatacontainer">
    {
     officehamburgerproductspecification.length === 0 ?
     (
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-productspeficationformdatacontainer-adddifferentproductspecificationheaderindication">Add different product specification to this product
      </p>
     )
     :
     (
     <React.Fragment>
     {
      officehamburgerproductspecification.map((productspecification, productspecificationindx)=> {
       return (
        <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-productspeficationformdatacontainer-productspecificationdatmodal"
	     key={productspecificationindx}>

         <Col xs={12}
	      md={3}
	      lg={3}
	      className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
           <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
	    Product specification {productspecificationindx + 1} 
           </p>
        </Col>

       <Col xs={12}
	    md={3}
	    lg={3}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
	Display image
      </p>
    </Col>

    <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer">

      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimagecategoryheaderindication">main</p>

     <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaycontainer">
      <img src="../images/landingpage/bondpaperimage.jpg"                                                      id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaycontainer-displayimage"
	  className={`officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaycontainer-productspecification${productspecificationindx}displayimage`}
	 onClick={(evt)=>{
          const _imagecontainer = evt.target.parentElement.parentElement;
          const _displayimagemodal = _imagecontainer.children[2];
         _displayimagemodal.style.display = "block";
	 }}/>
     </Col>

     <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer">
      <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-displayimagecontainer">
       <img src="../images/landingpage/bondpaperimage.jpg"
	    id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-displayimage"/>

      </Col>
      <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-closebuttoncontainer">
       <p id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-closebutton" 
	 onClick={(evt)=>{
          const _closebuttoncontainer = evt.target.parentElement.parentElement.parentElement;
          const _displayimagemodal = _closebuttoncontainer.children[2];
	  _displayimagemodal.style.display = "none";
	 }}>
	 close
       </p>
      </Col>
     </Col>
    </Col>

    <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationcotaniner">
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationfieldcontainer">
       <input type="text"
              className={`officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-imageconfigurationfield officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-imageconfigurationfield${productspecificationindx}`  }
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
      </Col>
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbuttoncontainer">
       <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbutton" onClick={(evt)=> {
     
	const _inputfieldimgeurlvalue = document.querySelector(`.officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-imageconfigurationfield${productspecificationindx}`);

        const _productspecifiationimage = document.querySelector(".officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaycontainer-productspecification0displayimage")
       
      _productspecifiationimage.src = `../images/${_inputfieldimgeurlvalue}`;

       }}>
        add image url to change product main display image
       </button>
      </Col>
     </Row>

    <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer">
     
      <Col xs={12}
	   md={12}
	   lg={12}>
	<p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimagecategoryheaderindication">other image's</p>
      </Col>

      {
       productspecification.details.product.cybervisual.images.maindisplayimages.length === 0 ?
      (
       <Col xs={12}
	    md={3}
	    lg={3}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Add image url
      </p>
    </Col>
      )
      :
      (
       <React.Fragment>
        {
        productspecification.details.product.cybervisual.images.maindisplayimages.map((maindisplayimages, maindisplayimagesindx)=> {
       return (
       <Col xs={12}
	    md={12}
            lg={12}
            className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagecontainer">
        <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagecontainer-displayimagecontainer">
         <img src="../images/landingpage/bondpaperimage.jpg"                                                      className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagecontainer-displayimage"
	      onClick={(evt)=>{

               const _imagecontainer = evt.target.parentElement.parentElement;
	       const _displayimagemodal = _imagecontainer.children[1];
	       _displayimagemodal.style.display = "block";

	 }}/>

         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimageconfigurationcontainer">
          <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimageconfigurationcontainer-configurationbutton"
	        onClick={(evt)=> {
                  productspecification.details.product.cybervisual.images.maindisplayimages.splice(maindisplayimagesindx, 1);
	         props.compttemptforceupdatetempfunction();

		}}>
	   delete
         </button>
         </Col>

        </Col>

        <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer">
         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-displayimagecontainer">

             <img src="../images/landingpage/bondpaperimage.jpg" 
	          className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-displayimage" />
         </Col>
         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-closebuttoncontainer">
         <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-closebuttonheaderindication"
           onClick={(evt)=> {
            const _closebuttoncontainer = evt.target.parentElement.parentElement.parentElement;
            const _displayimagemodal = _closebuttoncontainer.children[1]

	    _displayimagemodal.style.display = "none";
	   }}>
	   close
         </p>
         </Col>
        </Col>
        </Col>
       )
      })
     }

       </React.Fragment>
      )
      }
      </Row>

    <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationcotaniner">
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationfieldcontainer">
       <input type="text"
              className={`officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-imageconfigurationfield officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-imageconfigurationproductspecificaionmaindisplayimage${productspecificationindx}field`}
             onChange={(evt)=> {
        
             }}/>
      </Col>
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbuttoncontainer">
       <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbutton"
	      onClick={(evt)=> {

	       const _productspecificationrelavantmaindisplayimageurlfield = document.querySelector(`.officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-imageconfigurationproductspecificaionmaindisplayimage${productspecificationindx}field`);

              productspecification.details.product.cybervisual.images.maindisplayimages.push(`../iamges/${_productspecificationrelavantmaindisplayimageurlfield.value}`)
 
	     props.compttemptforceupdatetempfunction();

	      }}>
        add
       </button>
      </Col>
     </Row>  

     <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Purchasing details
      </p>
    </Col>

     <Col xs={12}
	  md={3}
	  lg={3}
	  className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Set
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.set.set = evt.target.value; 
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Set sequence number
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              
             }}/>

    </Col>

   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Pcs
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.set.pcs = evt.target.value;
             }}/>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Set type product indication
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.set.productindication = evt.target.value;
             }}/>

    </Col>


     <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Details
      </p>
    </Col>

       <Col xs={12}
   	    md={3}
	    lg={3}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Part
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.for.part = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
   	    md={3}
	    lg={3}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Gender
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.for.gender = evt.target.value; 
             }}/>

    </Col>

   <Col xs={12}
   	md={3}
        lg={3}
        className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Category
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.for.category = evt.target.value;
             }}/>

    </Col>

   <Col xs={12}
 	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Size
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.size = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Color
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.color = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Weight
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.weight = evt.target.value;
             }}/>
    </Col>
 
   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Design
      </p>
    </Col>

    <Col xs={12}
         md={3}
         lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Top design
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.top= evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
         md={3}
         lg={3}
         className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Left design
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.left = evt.target.value;
             }}/>

    </Col>
    
    <Col xs={12}
   	    md={3}
	    lg={3}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Bottom design
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.bottom = evt.target.value;
             }}/>

    </Col>

   <Col xs={12}
   	    md={3}
	    lg={3}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Right deaign
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.right = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
   	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Back design
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.back = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
   	    md={3}
	    lg={3}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Front design
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              productspecification.details.product.specification.front = evt.target.value;
             }}/>

    </Col>
	
   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Price's breakdown
      </p>
    </Col>

   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Price
      </p>
     <input type="text"
            className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
            onChange={(evt)=> {
              productspecification.details.product.pricesbreakdown.price = evt.target.value;
             }}/>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Capital
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
               productspecification.details.product.pricesbreakdown.capital = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Suggested Retail Price
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
               productspecification.details.product.pricesbreakdown.suggested_retail_price = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
        Vat
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
               productspecification.details.product.pricesbreakdown.vat = evt.target.value;
             }}/>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Marketing fee
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
               productspecification.details.product.pricesbreakdown.marketingfee = evt.target.value;
             }}/>
    </Col> 

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
	About stocks
      </p>
    </Col>
    {
     productspecification.system.stocks.length === 0 ?
     (
     <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
	no similar stocks
      </p>
    </Col>
 
     )
     :
     (
      <React.Fragment>
       {
     productspecification.system.stocks.map((stocksproductspecification, stocksproductspecificationindx)=> {
       return (
        <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-productspeficationformdatacontainer-productspecificationstocksdatmodal"
	     key={stocksproductspecificationindx}>

          <Col xs={12}
	      md={3}
	      lg={3}
	      className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
           <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
	    Relavant stocks specification {stocksproductspecificationindx + 1} 
           </p>
        </Col>

       <Col xs={12}
	    md={3}
	    lg={3}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
	Display image
      </p>
    </Col>

    <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer">

      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimagecategoryheaderindication">main</p>

     <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaycontainer">
      <img src="../images/landingpage/bondpaperimage.jpg"                                                      id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaycontainer-displayimage"
	  className={`officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaycontainer-stocksproductspecification${stocksproductspecificationindx}displayimage`}
	 onClick={(evt)=>{
          const _imagecontainer = evt.target.parentElement.parentElement;
          const _displayimagemodal = _imagecontainer.children[2];
         _displayimagemodal.style.display = "block";
	 }}/>
     </Col>

     <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer">
      <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-displayimagecontainer">
       <img src="../images/landingpage/bondpaperimage.jpg"
	    id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-displayimage"/>

      </Col>
      <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-closebuttoncontainer">
       <p id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-closebutton" 
	 onClick={(evt)=>{
          const _closebuttoncontainer = evt.target.parentElement.parentElement.parentElement;
          const _displayimagemodal = _closebuttoncontainer.children[2];
	  _displayimagemodal.style.display = "none";
	 }}>
	 close
       </p>
      </Col>
     </Col>
    </Col>

    <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationcotaniner">
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationfieldcontainer">
       <input type="text"
              className={`officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-imageconfigurationfield officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-stocksimageconfigurationfield${stocksproductspecificationindx}`  }
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
      </Col>
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbuttoncontainer">
       <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbutton" onClick={(evt)=> {
     
	const _inputfieldimgeurlvalue = document.querySelector(`.officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-stocksimageconfigurationfield${stocksproductspecificationindx}`);

        const _productspecifiationimage = document.querySelector(".officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaycontainer-stocksproductspecification0displayimage")
       
      _productspecifiationimage.src = `../images/${_inputfieldimgeurlvalue}`;

       }}>
        add image url to change product main display image
       </button>
      </Col>
     </Row>

    <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer">
     
      <Col xs={12}
	   md={12}
	   lg={12}>
	<p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimagecategoryheaderindication">other image's</p>
      </Col>

      {
       stocksproductspecification.details.product.cybervisual.images.maindisplayimages.length === 0 ?
      (
       <Col xs={12}
	    md={3}
	    lg={3}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Add image url
      </p>
    </Col>
      )
      :
      (
       <React.Fragment>
        {
        stocksproductspecification.details.product.cybervisual.images.maindisplayimages.map((stocksmaindisplayimages, stocksmaindisplayimagesindx)=> {
       return (
       <Col xs={12}
	    md={12}
            lg={12}
            className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagecontainer"
	   key={stocksmaindisplayimages}>
        <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagecontainer-displayimagecontainer">
         <img src="../images/landingpage/bondpaperimage.jpg"                                                      className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagecontainer-displayimage"
	      onClick={(evt)=>{

               const _imagecontainer = evt.target.parentElement.parentElement;
	       const _displayimagemodal = _imagecontainer.children[1];
	       _displayimagemodal.style.display = "block";

	 }}/>

         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimageconfigurationcontainer">
          <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimageconfigurationcontainer-configurationbutton"
	        onClick={(evt)=> {
                  stocksproductspecification.details.product.cybervisual.images.maindisplayimages.splice(stocksmaindisplayimagesindx, 1);
	         props.compttemptforceupdatetempfunction();

		}}>
	   delete
         </button>
         </Col>

        </Col>

        <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer">
         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-displayimagecontainer">

             <img src="../images/landingpage/bondpaperimage.jpg" 
	          className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-displayimage" />
         </Col>
         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-closebuttoncontainer">
         <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-closebuttonheaderindication"
           onClick={(evt)=> {
            const _closebuttoncontainer = evt.target.parentElement.parentElement.parentElement;
            const _displayimagemodal = _closebuttoncontainer.children[1]

	    _displayimagemodal.style.display = "none";
	   }}>
	   close
         </p>
         </Col>
        </Col>
        </Col>
       )
      })
     }

       </React.Fragment>
      )
      }
      </Row>

    <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationcotaniner">
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationfieldcontainer">
       <input type="text"
              className={`officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-imageconfigurationfield officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-stocksimageconfigurationproductspecificaionmaindisplayimage${stocksproductspecificationindx}field`}
             onChange={(evt)=> {

             }}/>
      </Col>
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbuttoncontainer">
       <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbutton"
	      onClick={(evt)=> {

	       const _productspecificationrelavantmaindisplayimageurlfield = document.querySelector(`.officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-stocksimageconfigurationproductspecificaionmaindisplayimage${stocksproductspecificationindx}field`);

              stocksproductspecification.details.product.cybervisual.images.maindisplayimages.push(`../iamges/${_productspecificationrelavantmaindisplayimageurlfield.value}`)

	     props.compttemptforceupdatetempfunction();

	      }}>
        add
       </button>
      </Col>
     </Row>  

     <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Purchasing details
      </p>
    </Col>

     <Col xs={12}
	  md={3}
	  lg={3}
	  className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Set
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.set.set = evt.target.value; 
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Set sequence number
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              
             }}/>

    </Col>

   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Pcs
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.set.pcs = evt.target.value;
             }}/>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Set type product indication
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.set.productindication = evt.target.value;
             }}/>

    </Col>


     <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Details
      </p>
    </Col>

       <Col xs={12}
   	    md={3}
	    lg={3}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Part
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.for.part = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
   	    md={3}
	    lg={3}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Gender
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.for.gender = evt.target.value; 
             }}/>

    </Col>

   <Col xs={12}
   	md={3}
        lg={3}
        className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Category
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.for.category = evt.target.value;
             }}/>

    </Col>

   <Col xs={12}
 	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Size
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.size = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Color
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.color = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Weight
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.weight = evt.target.value;
             }}/>
    </Col>
 
   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Design
      </p>
    </Col>

    <Col xs={12}
         md={3}
         lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Top design
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.top= evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
         md={3}
         lg={3}
         className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Left design
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.left = evt.target.value;
             }}/>

    </Col>
    
    <Col xs={12}
   	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Bottom design
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.bottom = evt.target.value;
             }}/>

    </Col>

   <Col xs={12}
        md={3}
	lg={3}
	className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Right deaign
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.right = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
   	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Back design
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.back = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
   	    md={3}
	    lg={3}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Front design
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              stocksproductspecification.details.product.specification.front = evt.target.value;
             }}/>

    </Col>
	
   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Price's breakdown
      </p>
    </Col>

   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Price
      </p>
     <input type="text"
            className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
            onChange={(evt)=> {
              stocksproductspecification.details.product.pricesbreakdown.price = evt.target.value;
             }}/>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Capital
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
               stocksproductspecification.details.product.pricesbreakdown.capital = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Suggested Retail Price
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
               stocksproductspecification.details.product.pricesbreakdown.suggested_retail_price = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
        Vat
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
               stocksproductspecification.details.product.pricesbreakdown.vat = evt.target.value;
             }}/>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Marketing fee
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
               stocksproductspecification.details.product.pricesbreakdown.marketingfee = evt.target.value;
             }}/>
    </Col> 
       </Row>
       )
      })
     }

      </React.Fragment>
     )
    }
    

   <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationcotaniner">
       <Col xs={12}
	    md={12}
	    lg={12}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-responsemessagecontainer">
        <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-responsemessage">Product successfully added</p>
       </Col>
       <Col xs={12}
	    md={12}
	    lg={12}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbuttoncontainer">
      {
       addingproductloadingindication ? 
       (
        <Spinner animation="border" variant="secondary" />
       )
       :
       (
        <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbutton"
	        onClick={(evt)=> {
	    
		 const produtspecificationdata = {
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
                      vat: 2,
		      marketingfee: 10
                    },
                    cybervisual: {
                      images: {
                       maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                       maindisplayimages: [
                       ]
                      },
                      videos: [
                      ]
                     },
                    },
                    locations: {
                     operations: [
                 
                     ]
                    }
		  },
		  system: {
                   request: {
                    product: [],
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
        
	 productspecification.system.stocks.push(produtspecificationdata) 
         props.compttemptforceupdatetempfunction();
        }}>
         add similar stocks
        </button> 
       )
      }
      </Col>
     </Row>


   </Row>
       )
      })
     }
    </React.Fragment>
     )
    }
    </Row>

    <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationcotaniner">
       <Col xs={12}
	    md={12}
	    lg={12}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-responsemessagecontainer">
        <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-responsemessage">Product successfully added</p>
       </Col>
       <Col xs={12}
	    md={12}
	    lg={12}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbuttoncontainer">
      {
       addingproductloadingindication ? 
       (
        <Spinner animation="border" variant="secondary" />
       )
       :
       (
        <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbutton"
	       onClick={(evt)=> {
	    
		 const produtspecificationdata = {
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
                      vat: 2,
		      marketingfee: 10
                    },
                    cybervisual: {
                      images: {
                       maindisplayimage: '../images/landingpage/bondpaperimage.jpg',
                       maindisplayimages: [
                       ]
                      },
                      videos: [
                      ]
                     },
                    },
                    locations: {
                     operations: [
                 
                     ]
                    }
		  },
		  system: {
                   request: {
                    product: [],
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
        
	 officehamburgerproductspecification.push(produtspecificationdata);
	 props.compttemptforceupdatetempfunction();
        }}>
        add product specs
       </button> 
       )
      }
      </Col>
     </Row>

     <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationcotaniner">
       <Col xs={12}
	    md={12}
	    lg={12}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-responsemessagecontainer">
        <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-responsemessage">Product successfully added</p>
       </Col>
       <Col xs={12}
	    md={12}
	    lg={12}
	    className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-addproductsconfigurationbuttoncontainer">
      {
       addingproductloadingindication ? 
       (
        <Spinner animation="border" variant="secondary" />
       )
       :
       (
        <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbutton"
	       onClick={(evt)=> {
	    
        }}>
        add product/product's
       </button> 
       )
      }
      </Col>
     </Row>

    </Row>
 )

 }

 
 if ( props.officehamburgerformdataconfigurationviewtypeview === "Edit" ) {
 return (
   <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer">
   
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
        Authentications
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product type
      </p>
      <input type="text"
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              props.officehamburgerproductdatascheme.authentications.producttype = evt.target.value;
             }}/>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product id
      </p>
      <input type="text"		
	     value={props.officehamburgerproductdataschemeproductid}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
	      props.officehamburgerproductdatascheme.authentications.productid = evt.target.value;
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
	Primary details
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product name
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product rapport name
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>
  
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product definition
      </p>
     <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>


    <Col xs={12}
	  md={3}
	  lg={3}
	  className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Set
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Set sequence number
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>
  
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
	Primary details
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product category
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product name
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product rapport name
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>
  
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product definition
      </p>
     <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
	Product specification
      </p>
    </Col>
   
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Part
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>

    <Col xs={12}
 	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Size
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Color
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Weight
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
    </Col>
	
   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Price's breakdown
      </p>
    </Col>

   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Price
      </p>
     <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Capital
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Suggested Retail Price
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
        Vat
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
    </Col>

    <Col xs={12}
	 md={12}
	 lg={12}
         id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer">      

     <p id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimageheaderindication">Display image's</p>
    
     <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer">

      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimagecategoryheaderindication">main</p>

     <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaycontainer">
      <img src="../images/landingpage/bondpaperimage.jpg"                                                      id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaycontainer-displayimage"
	 onClick={(evt)=>{
          const _imagecontainer = evt.target.parentElement.parentElement;
          const _displayimagemodal = _imagecontainer.children[2];
         _displayimagemodal.style.display = "block";
	 }}/>
     </Col>

     <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer">
      <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-displayimagecontainer">
       <img src="../images/landingpage/bondpaperimage.jpg"
	    id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-displayimage"/>

      </Col>
      <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-closebuttoncontainer">
       <p id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-closebutton" 
	 onClick={(evt)=>{
          const _closebuttoncontainer = evt.target.parentElement.parentElement.parentElement;
          const _displayimagemodal = _closebuttoncontainer.children[2];
	  _displayimagemodal.style.display = "none";
	 }}>
	 close
       </p>
      </Col>
     </Col>
    </Col>

    <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationcotaniner">
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationfieldcontainer">
       <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-imageconfigurationfield"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
      </Col>
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbuttoncontainer">
       <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbutton">
        add
       </button>
      </Col>
     </Row>


    <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer">
     
      <Col xs={12}
	   md={12}
	   lg={12}>
	<p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimagecategoryheaderindication">other image's</p>
      </Col>

      {
      [
       "../images/landingpage/bondpaperimage.jpg",
       "../images/landingpage/bondpaperimage.jpg",
       "../images/landingpage/bondpaperimage.jpg"
      ].map((maindisplayimages, maindisplayimagesindx)=> {
       return (
       <Col xs={12}
	    md={12}
            lg={12}
            className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagecontainer">
        <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagecontainer-displayimagecontainer">
         <img src="../images/landingpage/bondpaperimage.jpg"                                                      className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagecontainer-displayimage"
	      onClick={(evt)=>{

               const _imagecontainer = evt.target.parentElement.parentElement;
	       const _displayimagemodal = _imagecontainer.children[1];
	       _displayimagemodal.style.display = "block";

	 }}/>
        </Col>
        <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer">
         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-displayimagecontainer">

             <img src="../images/landingpage/bondpaperimage.jpg" 
	          className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-displayimage" />
         </Col>
         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-closebuttoncontainer">
         <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-closebuttonheaderindication"
           onClick={(evt)=> {
            const _closebuttoncontainer = evt.target.parentElement.parentElement.parentElement;
            const _displayimagemodal = _closebuttoncontainer.children[1]

	    _displayimagemodal.style.display = "none";
	   }}>
	   close
         </p>
         </Col>
        </Col>
       </Col>
       )
      })
     }
    </Row>

    <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationcotaniner">
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationfieldcontainer">
       <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-imageconfigurationfield"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
      </Col>
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbuttoncontainer">
       <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbutton">
        add
       </button>
      </Col>
     </Row>
   
    <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer">
      <Col xs={12}
	   md={12}
	   lg={12}>
	<p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimagecategoryheaderindication">Selection</p>
      </Col>

      {
      [
       "../images/landingpage/bondpaperimage.jpg",
       "../images/landingpage/bondpaperimage.jpg",
       "../images/landingpage/bondpaperimage.jpg"
      ].map((maindisplayimages, maindisplayimagesindx)=> {
       return (
       <Col xs={12}
	    md={12}
            lg={12}
            className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimagesgridcontainer-selectiondisplayimagecontainer">
        <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer-selectiondisplayimagecontainer-displayimagecontainer">
         <img src="../images/landingpage/bondpaperimage.jpg"             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer-selectiondisplayimagecontainer-displayimage"
	      onClick={(evt)=>{
              
	       const _imagecontainer = evt.target.parentElement.parentElement;
	       const _displayimagemodal = _imagecontainer.children[1];

               _displayimagemodal.style.display = "block";

	 }}/>
        </Col>
        <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer-selectiondisplayimagemodalcontainer">
         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer-selectiondisplayimagemodalcontainer-displayimagecontainer">

             <img src="../images/landingpage/bondpaperimage.jpg" 
	          className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-displayimage" />
         </Col>
         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer-selectiondisplayimagemodalcontainer-closebuttoncontainer">
         <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer-maindisplayimagemodalcontainer-closebuttonheaderindication"
           onClick={(evt)=> {

             const _closebuttoncontainer = evt.target.parentElement.parentElement.parentElement;
             const _displayimagemodal = _closebuttoncontainer.children[1];

	    _displayimagemodal.style.display = "none";

	   }}>
	   close
         </p>
         </Col>
        </Col>
       </Col>
       )
      })
     }

    </Row>
    </Col>
     
    <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-videoplayerdisplaycontainercontainer">
     {
      [
       "https://www.youtube.com/watch?v=Kr3oqC5YgKw",
       "https://www.youtube.com/watch?v=Kr3oqC5YgKw",
       "https://www.youtube.com/watch?v=Kr3oqC5YgKw"
      ].map((videoplayer, videoplayerindx)=> {
       return (
        <Col xs={12}
             md={12}
	     lg={12}
             key={videoplayerindx}
	     className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandise-videoplayerdisplaycontainercontainer-videoplayerdisplaycontainercontainer">
           <VideoPlayer xs={12}
                        md={12}
	                lg={12}
                        url={videoplayer} />
        </Col>
       )
      })
     }
    </Row>

    <Row className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationcotaniner">
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationfieldcontainer">
       <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-imageconfigurationfield"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
      </Col>
      <Col xs={12}
	   md={12}
	   lg={12}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbuttoncontainer">
       <button className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-configurationbutton">
        add
       </button>
      </Col>
     </Row>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Design specification
      </p>
    </Col>

   <Col xs={12}
        md={3}
	lg={3}
	className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Top deisgn
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
    </Col>

    <Col xs={12}
         md={3}
         lg={3}
     	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Left design
      </p>
    </Col>

     <Col xs={12}
        md={3}
	lg={3}
	className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Bottom deisgn
      </p>
    </Col>

     <Col xs={12}
          md={3}
   	  lg={3}
  	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Right deisgn
      </p>
    </Col>

   <Col xs={12}
        md={3}
        lg={3}
         className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product description
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       About Stocks
      </p>
    </Col>

   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Location
      </p>
    </Col>

   {

   [
    "Location data" 
   ].map((location, locationindx)=> {
    return (
     <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationscontainer">
      <Col xs={12}
           md={3}
	   lg={3}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
         <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	 Street
        </p>
        <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

     </Col>
     <Col xs={12}
          md={3}
          lg={3}
          className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Baranggay
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
    </Col>
    <Col xs={12}
         md={3}
 	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Trademark
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
    </Col>
    <Col xs={12}
         md={3}
         lg={3}
  	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	City
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
    </Col>
   <Col xs={12}
        md={3}
	lg={3}
	className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Province
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>

    </Col>
    <Col xs={12}
        md={3}
	lg={3}
	className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Country
      </p>
      <input type="text"
	     value={samplevalue}
             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-field"
             onChange={(evt)=> {
              samplevaluecb((sv)=> sv = evt.target.value)
             }}/>
    </Col>

   </Row>
    )
   })

    }

  </Row>

 )

 }

 if ( props.officehamburgerformdataconfigurationviewtypeview === "Delete" ) {
 return (
  <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer">
   
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
        Authentications
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product type
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product id
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

    <Col xs={12}
	  md={3}
	  lg={3}
	  className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Set
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Value
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Set sequence number
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>
  
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
	Primary details
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product category
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product name
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product rapport name
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>
  
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product definition
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
	Product specification
      </p>
    </Col>
   
    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Part
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

    <Col xs={12}
 	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Size
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Color
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Value
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Weight
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>
	
   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Price's breakdown
      </p>
    </Col>

   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Price
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Capital
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Suggested Retail Price
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
        Vat
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

    <Col xs={12}
	 md={12}
	 lg={12}
         id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer">      

     <p id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimageheaderindication">Display image's</p>
    
     <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer">

      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimagecategoryheaderindication">main</p>

     <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaycontainer">
      <img src="../images/landingpage/bondpaperimage.jpg"                                                      id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaycontainer-displayimage"
	 onClick={(evt)=>{
          const _imagecontainer = evt.target.parentElement.parentElement;
          const _displayimagemodal = _imagecontainer.children[2];
         _displayimagemodal.style.display = "block";
	 }}/>
     </Col>

     <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer">
      <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-displayimagecontainer">
       <img src="../images/landingpage/bondpaperimage.jpg"
	    id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-displayimage"/>

      </Col>
      <Col id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-closebuttoncontainer">
       <p id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagecontainer-imagedisplaymodalcontainer-closebutton" 
	 onClick={(evt)=>{
          const _closebuttoncontainer = evt.target.parentElement.parentElement.parentElement;
          const _displayimagemodal = _closebuttoncontainer.children[2];
	  _displayimagemodal.style.display = "none";
	 }}>
	 close
       </p>
      </Col>
     </Col>
    </Col>

    <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer">
     
      <Col xs={12}
	   md={12}
	   lg={12}>
	<p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimagecategoryheaderindication">other image's</p>
      </Col>

      {
      [
       "../images/landingpage/bondpaperimage.jpg",
       "../images/landingpage/bondpaperimage.jpg",
       "../images/landingpage/bondpaperimage.jpg"
      ].map((maindisplayimages, maindisplayimagesindx)=> {
       return (
       <Col xs={12}
	    md={12}
            lg={12}
            className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagecontainer">
        <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagecontainer-displayimagecontainer">
         <img src="../images/landingpage/bondpaperimage.jpg"                                                      className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagecontainer-displayimage"
	      onClick={(evt)=>{

               const _imagecontainer = evt.target.parentElement.parentElement;
	       const _displayimagemodal = _imagecontainer.children[1];
	       _displayimagemodal.style.display = "block";

	 }}/>
        </Col>
        <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer">
         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-displayimagecontainer">

             <img src="../images/landingpage/bondpaperimage.jpg" 
	          className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-displayimage" />
         </Col>
         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-closebuttoncontainer">
         <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-closebuttonheaderindication"
           onClick={(evt)=> {
            const _closebuttoncontainer = evt.target.parentElement.parentElement.parentElement;
            const _displayimagemodal = _closebuttoncontainer.children[1]

	    _displayimagemodal.style.display = "none";
	   }}>
	   close
         </p>
         </Col>
        </Col>
       </Col>
       )
      })
     }
    </Row>
    <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer">
      <Col xs={12}
	   md={12}
	   lg={12}>
	<p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimagecategoryheaderindication">Selection</p>
      </Col>

      {
      [
       "../images/landingpage/bondpaperimage.jpg",
       "../images/landingpage/bondpaperimage.jpg",
       "../images/landingpage/bondpaperimage.jpg"
      ].map((maindisplayimages, maindisplayimagesindx)=> {
       return (
       <Col xs={12}
	    md={12}
            lg={12}
            className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-displayimagesgridcontainer-selectiondisplayimagecontainer">
        <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer-selectiondisplayimagecontainer-displayimagecontainer">
         <img src="../images/landingpage/bondpaperimage.jpg"             className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer-selectiondisplayimagecontainer-displayimage"
	      onClick={(evt)=>{
              
	       const _imagecontainer = evt.target.parentElement.parentElement;
	       const _displayimagemodal = _imagecontainer.children[1];

               _displayimagemodal.style.display = "block";

	 }}/>
        </Col>
        <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer-selectiondisplayimagemodalcontainer">
         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer-selectiondisplayimagemodalcontainer-displayimagecontainer">

             <img src="../images/landingpage/bondpaperimage.jpg" 
	          className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-maindisplayimagesgridcontainer-maindisplayimagemodalcontainer-displayimage" />
         </Col>
         <Col className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer-selectiondisplayimagemodalcontainer-closebuttoncontainer">
         <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-displayimagescontainer-selectiondisplayimagesgridcontainer-maindisplayimagemodalcontainer-closebuttonheaderindication"
           onClick={(evt)=> {

             const _closebuttoncontainer = evt.target.parentElement.parentElement.parentElement;
             const _displayimagemodal = _closebuttoncontainer.children[1];

	    _displayimagemodal.style.display = "none";

	   }}>
	   close
         </p>
         </Col>
        </Col>
       </Col>
       )
      })
     }

    </Row>
    </Col>
     
    <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-videoplayerdisplaycontainercontainer">
     {
      [
       "https://www.youtube.com/watch?v=Kr3oqC5YgKw",
       "https://www.youtube.com/watch?v=Kr3oqC5YgKw",
       "https://www.youtube.com/watch?v=Kr3oqC5YgKw"
      ].map((videoplayer, videoplayerindx)=> {
       return (
        <Col xs={12}
             md={12}
	     lg={12}
             key={videoplayerindx}
	     className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandise-videoplayerdisplaycontainercontainer-videoplayerdisplaycontainercontainer">
           <VideoPlayer xs={12}
                        md={12}
	                lg={12}
                        url={videoplayer} />
        </Col>
       )
      })
     }
    </Row>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Design specification
      </p>
    </Col>

   <Col xs={12}
        md={3}
	lg={3}
	className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Top deisgn
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

    <Col xs={12}
         md={3}
         lg={3}
     	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Left design
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

     <Col xs={12}
        md={3}
	lg={3}
	className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Bottom deisgn
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

     <Col xs={12}
          md={3}
   	  lg={3}
  	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Right deisgn
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

   <Col xs={12}
        md={3}
        lg={3}
         className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Product description
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

    <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       About Stocks
      </p>
    </Col>

   <Col xs={12}
	 md={3}
	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-primaryheaderindication">
       Location
      </p>
    </Col>

   {

   [
    "Location data" 
   ].map((location, locationindx)=> {
    return (
     <Row id="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationscontainer">
      <Col xs={12}
           md={3}
	   lg={3}
	   className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
         <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	 Street
        </p>
        <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
       </p>
     </Col>
     <Col xs={12}
          md={3}
          lg={3}
          className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Baranggay
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>
    <Col xs={12}
         md={3}
 	 lg={3}
	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
       Trademark
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>
    <Col xs={12}
         md={3}
         lg={3}
  	 className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	City
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>
   <Col xs={12}
        md={3}
	lg={3}
	className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Province
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>
    <Col xs={12}
        md={3}
	lg={3}
	className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindicationcontainer">
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Country
      </p>
      <p className="officehamburger-dataview-datacontainer-datacontainer-merchandisedatacontainer-merchandiseformdatacontainer-dataheaderindication">
	Value
      </p>
    </Col>

   </Row>
    )
   })

    }

  </Row>
 )

 }

}

function HamburgerMarketingLoadProductsDataView() {
 return (
   <Col id="officehamburger-dataview-datacontainer-datacontainer-loadproductsdatacontainer">
     <Col id="officehamburger-dataview-datacontainer-datacontainer-loadproductsdata">
       Load products  data
     </Col>
     <Col id="officehamburger-dataview-datacontainer-datacontainer-loadproductsdataresultscontainer">
       Load proucts data results
     </Col>
     <Col id="officehamburger-dataview-datacontainer-datacontainer-loadproductsdataconfigurationcontainer">
      Load products data configuration	
     </Col>
  </Col>

 )
}

function OfficeHamburgerMoneyAndFundsDataView() {
 return (
   <Row id="officehamburger-dataview-datacontainer-moneyandfunds">
     Money and Funds
   </Row>
 )
}


function OfficeHamburgerAssistantsView() {
 return (
  <Col id="officehamburgerassistantview">
   Office hamburger assisant view
  </Col>
 )
}

function OfficeHamburgerOfficeView() {
 return (
  <Col id="office-haburgerofficeview">
   Office hanburger view
  </Col>
 )
}
