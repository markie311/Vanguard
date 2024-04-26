import React, 
       {
        useState,
        useEffect,
        useMemo,
        useCallback
       } from 'react';

import { Row,
         Col,
         Dropdown,
         DropdownButton } from 'react-bootstrap';

import '../../styles/database/database.scss';

import { useNavigate } from "react-router-dom";

import { operations } from '../lib/operations.js';

import L from 'leaflet';

import { MapContainer, 
         TileLayer,
         useMap,
         useMapEvents,
         Marker,
         Popup } from 'react-leaflet';

import TransactionsNavigation from '../transactions/request/transactionsnavigation-component.js';
import Transactions from '../transactions/request/transactions-component.js';
import DatabaseDepositsConfigurationModal from '../database/databasedepositsconfigurationmodal-component.js';

import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
  });
  
L.Marker.prototype.options.icon = DefaultIcon;


export default function Database(props) {
  
 const navigate = useNavigate();
 const [, states] = useState();
 const deepupdate = useCallback(() => states({}), []);

 const [databaseview, databaseviewcb] = useState('Monitoring');

 const [uniquerequests, uniquerequestscb] = useState([]);

 const [uniquelocationsnowrequests, uniquelocationsnowrequestscb] = useState([
  {
    request: {
     asked: 'Request/Purchasing',
     authentication: ''
    },
    authentication: {
      transactionid: '',
     _userprivateauthenticationid: ''
    },
    status: {
     now: true,
     recent: false
    },
    user: {
     userauthenticationid: '',
    },
    location: {
     user: {
      street:  '',
      baranggay:  '',
      trademark:  '',
      city:  '',
      province: '',
      country: ''
     },
     destination: {
      street:  '',
      baranggay:  '',
      trademark:  '',
      city:  '',
      province: '',
      country: ''
     },
     operations: []
    },
    message: {
     subject: 'Request to purchase',
     message: '',
    },
    data: {
      specifications: {
        nonmrn: 0,
        mrn: 0,
        },
        pricesbreakdown: {
         price: 0,
         capital: 0,
         suggested_retail_price: 0,
         vat: 0
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
         totalexpressrate: 0
        },
        products: [
        {
          authentications: {
            producttype: 'String',
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
              producttype: 'Apparel',
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
 ]);

 const [uniquepublicrequests, uniquepublicrequestscb] = useState([]);
 const [uniqueprivaterequests, uniqueprivaterequestscb] = useState([]);
 const [angledpublicrequests, angledpublicrequestscb] = useState([]);
 const [angledprivaterequests, angledprivaterequestscb] = useState([]);

 const [nownonmrnrequests, nownonmrnrequestscb] = useState(0);
 const [nowmrnrequests, nowmrnrequestscb] = useState(0);
 const [nownonmrnrequestsdata, nownonmrnrequestsdatacb] = useState([]);
 const [nowmrnrequestsdata, nowmrnrequestsdatacb] = useState([])
 const [totalpricenowrequest, totalpricenowrequestcb] = useState(0);
 const [totalshipmentratenowrequest, totalshipmentratenowrequestcb] = useState(0);

 const [requestsnow, requestsnowcb] = useState([]);
 const [requests, requestscb] = useState([]);

 const [configurationsnippet, configurationsnippetcb] = useState('Delay/NowRequest');
 const [databaseresponsemessage, databaseresponsemessagecb] = useState({
  indication: 'Response message indication',
  details: 'Response message details'
 });

 const [delayrequests, delayrequestscb] = useState('');

 const depositsconfigurationcontainer = () => {
  const _depositsconfigurationmodal = document.querySelectorAll('.database-depositsconfigurationmodalcontainer')[1];
  _depositsconfigurationmodal.style.display = 'none';
 }

 const databasedata = useMemo( async ()=> {

  const _uniquepublicrequests = props.databasedata.requests.now.requests.data.filter((request, index) => {
    return request.request.authentication === 'Public' ;
  });

  const _uniqueprivaterequests = props.databasedata.requests.now.requests.data.filter((request, index) => {
    return request.request.authentication === 'Private' ;
  });

  const _angledpublicrequests = _uniquepublicrequests .filter((request, index) => {
    return index ===_uniquepublicrequests.findIndex(location => request.location.destination.street === location.location.destination.street);
  });

  const _angledprivaterequests =  _uniqueprivaterequests.filter((request, index) => {
    return index === _uniqueprivaterequests.findIndex(location => request.location.destination.street === location.location.destination.street);
  });

  angledpublicrequestscb((requests)=> _angledpublicrequests)
  angledprivaterequestscb((requests)=> _angledprivaterequests)

  {/*
    const _nonmrnrequests = _uniquerequests.reduce((previousValue, currentValue)=> previousValue + currentValue.data.specifications.nonmrn, 0);
    const _mrnrequests = _uniquerequests.reduce((previousValue, currentValue)=> previousValue + currentValue.data.specifications.mrn, 0);
    const _nowrequeststotalprice = _uniquerequests.reduce((previousValue, currentValue)=> previousValue + currentValue.data.pricesbreakdown.price, 0);
    const _nowrequeststotalnonmrnprice = _uniquerequests.reduce((previousValue, currentValue)=> previousValue + currentValue.data.express.nonmrn.rate, 0);
    const _nowrequeststotalmrnprice = _uniquerequests.reduce((previousValue, currentValue)=> previousValue + currentValue.data.express.mrn.rate, 0);

    for ( let i = 0; i < _uniquerequests.length; i++ ) {
      const _uniquerequestsdata = _uniquerequests[i].data.products;
      for ( let x = 0; x < _uniquerequestsdata.length; x++ ) {
        const _data = _uniquerequestsdata[i].authentications.producttype
        if ( _data === 'Mrn') {
          nownonmrnrequestsdatacb((data)=> [...data, _uniquerequestsdata[i]])
        } else {
          nowmrnrequestsdatacb((data)=> [...data, _uniquerequestsdata[i]])
        }
      }
    }

    await nownonmrnrequestscb((count)=> count = _nonmrnrequests)
    await nowmrnrequestscb((count)=> count = _mrnrequests)
    await totalpricenowrequestcb((total)=> total = _nowrequeststotalprice)
    await totalshipmentratenowrequestcb((rate)=> rate = Number(_nowrequeststotalnonmrnprice) + Number(_nowrequeststotalmrnprice))
    await uniquelocationsnowrequestscb((data)=> {return _uniquerequests})

    console.log(uniquelocationsnowrequests)
  */}

 }, [totalshipmentratenowrequest, nownonmrnrequests, nowmrnrequests, totalpricenowrequest])

 useEffect(()=> {

 },[databasedata, requests])

 async function selectrequestauthentication(requestauthentication) {
  
    if ( requestauthentication === 'Public' ) {
   
      const _allarepublicrequests = requests.every((transaction)=> transaction.request.authentication === 'Public' )
      
      if (_allarepublicrequests) {
        requestsnowcb((requests)=> angledpublicrequests)
      } else {
        requestscb((requests)=> [])
      }
      
    } 

    if (  requestauthentication === 'Private' ) {

      const _allarepublicrequests = requests.every((transaction)=> transaction.request.authentication === 'Private' )


        if (_allarepublicrequests) {
          requestsnowcb((requests)=> angledprivaterequests)
        } else {
          requestscb((requests)=> [])
        }

    }

 }

 const [databasemoneyandfundsdatacontent, databasemoneyandfundsdatacontentcb] = useState('Money');
 const [databasemainmonitoringdataview, databasemainmonitoringdataviewcb] = useState('Main monitoring data');

 return (
  <Col id='database'>
    
    <Row id='database-navigationgridcontainer'>
     <Col xs={12}
          md={12}
          lg={12}
          className='database-navigationcontainer'>
      <p className='database-navigationcontainer-navigationheaderindication'>Xirbit management system</p>
     </Col>
     <Col xs={6}
          md={6}
          lg={6}
          className='database-navigationcontainer'>
      <button className='database-navigationcontainer-navigationbutton'
              onClick={(evt)=> {
                databaseviewcb((view)=> view = 'Monitoring');
              }}>
        Data
      </button> 
     </Col>
     <Col xs={6}
          md={6}
          lg={6}
          className='database-navigationcontainer'>
      <button className='database-navigationcontainer-navigationbutton'
              onClick={(evt)=> {
                navigate('/office')
              }}>
                Office
      </button> 
     </Col>
    </Row>

    <Col id='database-viewcontainer'>
     <DatabaseDataView databasedata={props.databasedata}
                       databasedatacb={props.databasedatacb}
                       databaseview={databaseview}
                       databaseviewcb={databaseviewcb}
                       uniquerequests={uniquerequests}
                       uniquelocationsnowrequests={uniquelocationsnowrequests}
                       nownonmrnrequests={nownonmrnrequests}
                       nowmrnrequests={nowmrnrequests}
                       nownonmrnrequestsdata={nownonmrnrequestsdata}
                       nowmrnrequestsdata={nowmrnrequestsdata}
                       totalpricenowrequest={totalpricenowrequest}
                       totalshipmentratenowrequest={totalshipmentratenowrequest}
                       requestsnow={requestsnow}
                       requests={requests}
                       requestscb={requestscb}
                       selectrequestauthentication={selectrequestauthentication}
                       configurationsnippet={configurationsnippet}
                       databaseresponsemessage={databaseresponsemessage}
                       databaseresponsemessagecb={databaseresponsemessagecb}
                       delayrequests={delayrequests}
                       delayrequestscb={delayrequestscb}
                       depositsconfigurationcontainer={depositsconfigurationcontainer}
                       deepupdate={deepupdate} 
                       
                       databasemoneyandfundsdatacontent={databasemoneyandfundsdatacontent}
                       databasemoneyandfundsdatacontentcb={databasemoneyandfundsdatacontentcb}
                       
                       databasemainmonitoringdataview={databasemainmonitoringdataview}
                       databasemainmonitoringdataviewcb={databasemainmonitoringdataviewcb}/>
    </Col>

  </Col>
 )
}


function DatabaseDataView(props) {

 if ( props.databaseview === 'Monitoring' ) {
 return (
   <Col id='database-dataview'>
     <DatabaseDataNavigation databaseviewcb={props.databaseviewcb} />
   </Col>
 )
 }

 if ( props.databaseview === 'Requests' ) {
  return (
   <Col id='database-dataview'>
    <Requests databaseviewcb={props.databaseviewcb}/>
   </Col>
  )
 }

 if ( props.databaseview === 'Motto' ) {
  return (
   <Col id='database-dataview'>
    <Motto databaseviewcb={props.databaseviewcb}/>
   </Col>
  )
 }

 if ( props.databaseview === 'Transactions' ) {
  return (
    <Col id='database-dataview'>
    <DatabaseTransactions databaseviewcb={props.databaseviewcb}/>
   </Col>
  )
 }

 if ( props.databaseview === 'People' ) {
  return (
    <Col id='database-dataview'>
       <DatabasePeople databaseviewcb={props.databaseviewcb}/>
    </Col>
  )
 }

 if ( props.databaseview === 'Money and funds' ) {
  return (
    <Col id='database-dataview'>
       <DatabaseMoneyAndFunds databaseviewcb={props.databaseviewcb}
                              databasemoneyandfundsdatacontent={props.databasemoneyandfundsdatacontent}
                              databasemoneyandfundsdatacontentcb={props.databasemoneyandfundsdatacontentcb}/>
    </Col>
  )
 }

 if ( props.databaseview === 'History' ) {
  return (
    <Col id='database-dataview'>
       <DatabaseHistory databaseviewcb={props.databaseviewcb}
                        databasemoneyandfundsdatacontent={props.databasemoneyandfundsdatacontent}
                        databasemoneyandfundsdatacontentcb={props.databasemoneyandfundsdatacontentcb}/>
    </Col>
  )
 }

 if ( props.databaseview === 'Marketing' ) {
  return (
    <Col id='database-dataview'>
       <DatabaseMarketing databaseviewcb={props.databaseviewcb}
                          databasemoneyandfundsdatacontent={props.databasemoneyandfundsdatacontent}
                          databasemoneyandfundsdatacontentcb={props.databasemoneyandfundsdatacontentcb}
                          databasemainmonitoringdataview={props.databasemainmonitoringdataview}
                          databasemainmonitoringdataviewcb={props.databasemainmonitoringdataviewcb}/>
    </Col>
  )
 }

}

function DatabaseDataNavigation(props) {
  return (
    <Col id='database-datanavigation'>  
      <DatabaseDataNavigationButtons databaseviewcb={props.databaseviewcb}/>
      <DatabaseMonitoring />
    </Col>
  )
}

function DatabaseDataNavigationButtons(props) {
 return (
  <Row id='database-datanavigationbuttons'>
    <Col xs={12}
         md={2}
         lg={2} 
         className='database-datanavigationbutton-navigationbuttoncontainer'>
      <button className='database-datanavigationbutton-navigationbutton'   
              onClick={(evt)=> {
                props.databaseviewcb((view)=> view = evt.target.innerText);
              }}>
        Motto
      </button>
    </Col>
    <Col xs={12}
         md={2}
         lg={2} 
         className='database-datanavigationbutton-navigationbuttoncontainer'>
      <button className='database-datanavigationbutton-navigationbutton'   
              onClick={(evt)=> {
                props.databaseviewcb((view)=> view = evt.target.innerText);
              }}>
        People
      </button>
    </Col>
     <Col xs={12}
         md={2}
         lg={2} 
         className='database-datanavigationbutton-navigationbuttoncontainer'>
      <button className='database-datanavigationbutton-navigationbutton'
              onClick={(evt)=> {
                props.databaseviewcb((view)=> view = evt.target.innerText);
              }}>
        Money and funds
      </button>
    </Col>
    <Col xs={12}
         md={2}
         lg={2} 
         className='database-datanavigationbutton-navigationbuttoncontainer'>
      <button className='database-datanavigationbutton-navigationbutton'
              onClick={(evt)=> {
                props.databaseviewcb((view)=> view = evt.target.innerText);
              }}>
        History
      </button>
    </Col>
    <Col xs={12}
         md={2}
         lg={2} 
         className='database-datanavigationbutton-navigationbuttoncontainer'>
      <button className='database-datanavigationbutton-navigationbutton'
              onClick={(evt)=> {
                props.databaseviewcb((view)=> view = evt.target.innerText);
              }}>
        Marketing
      </button>
    </Col>
    <Col xs={12}
         md={2}
         lg={2} 
         className='database-datanavigationbutton-navigationbuttoncontainer'>
      <button className='database-datanavigationbutton-navigationbutton'
               onClick={(evt)=> {
                props.databaseviewcb((view)=> view = evt.target.innerText);
              }}>
        Monitoring
      </button>
    </Col>
    <Col xs={12}
         md={2}
         lg={2} 
         className='database-datanavigationbutton-navigationbuttoncontainer'>
      <button className='database-datanavigationbutton-navigationbutton'
              onClick={(evt)=> {
                props.databaseviewcb((view)=> view = evt.target.innerText);
              }}>
        Transactions 
      </button>
    </Col>
    <Col xs={12}
         md={2}
         lg={2} 
         className='database-datanavigationbutton-navigationbuttoncontainer'>
      <button className='database-datanavigationbutton-navigationbutton'
              onClick={(evt)=> {
                props.databaseviewcb((view)=> view = evt.target.innerText);
              }}>
        Requests
      </button>
    </Col>
  </Row>
 )
}

function DatabaseMonitoring(props) {
 return (
  <Row id='database-monitoring'>
    <Col xs={12}
        md={6}
        lg={6}
        className='database-monitoring-contentcontainer'>

      <p className='database-monitoringheaderindication'>
        PEOPLE
      </p> 

      <br />
      <br />

      <p className='database-monitoringheaderindication'>
        There are 0 records that are new 
      </p>

      <br />
      <br />
      <br />

      <p className='database-monitoringheaderindication'>
        Now
      </p>
      <p className='database-monitoringheaderindication'>
        0%
      </p>
      <div className='database-monitoring-bargraphcontainer'>
      <div className='database-monitoring-bargraph'>

      </div>
      </div>
  
      <br />
      <br />

      <p className='database-monitoringheaderindication'>
        Recent authentication
      </p> 
      <p className='database-monitoringheaderindication'>
        0%
      </p>
      <div className='database-monitoring-bargraphcontainer'>
      <div className='database-monitoring-bargraph'>

      </div>
      </div>

    </Col>
    <Col xs={12}
        md={6}
        lg={6}
        className='database-monitoring-contentcontainer'>

    <p className='database-monitoringheaderindication'>
      LOCATIONS
    </p>

    <br />
    <br />

      <p className='database-monitoringheaderindication'>
      There are 0 new location saved as a home address 
      </p>
      <br />
      <p className='database-monitoringheaderindication'>
      There are 0 records changed/transfered location as a home address
      </p>
      <br />

      <br />
      <br />
      <br />

      <p className='database-monitoringheaderindication'>
      Now
      </p>
      <p className='database-monitoringheaderindication'>
        0%
      </p>
      <div className='database-monitoring-bargraphcontainer'>
      <div className='database-monitoring-bargraph'>

      </div>
      </div>
  
      <br />
      <br />

      <p className='database-monitoringheaderindication'>
      Recent authentication
      </p> 
      <p className='database-monitoringheaderindication'>
        0%
      </p>
      <div className='database-monitoring-bargraphcontainer'>
      <div className='database-monitoring-bargraph'>

      </div>
      </div>

    </Col>
    <Col xs={12}
        md={5}
        lg={5}
        className='database-monitoring-contentcontainer'>
    <p className='database-monitoringheaderindication'>
      MARKETING 
    </p> 
    
    <br />
    <br />
    <br />

    <p className='database-monitoringheaderindication'>
      Now 
    </p>
    <p className='database-monitoringheaderindication'>
      0%
    </p>
    <div className='database-monitoring-bargraphcontainer'>
      <div className='database-monitoring-bargraph'>

      </div>
    </div>

      <br />
      <br />

    <p className='database-monitoringheaderindication'>
      Recent authentication
    </p> 
    <p className='database-monitoringheaderindication'>
      0%
    </p>
    <div className='database-monitoring-bargraphcontainer'>
      <div className='database-monitoring-bargraph'>

      </div>
    </div>

    </Col>
    <Col xs={12}
        md={7}
        lg={7}
        className='database-monitoring-contentcontainer'>
    <p className='database-monitoringheaderindication'>
      FUNDS
    </p> 

    <br />
    <br />

    <p className='database-monitoringheaderindication'>
      Location, <span className='database-monitoringheaderindication-spanbuttonheaderindication'>see entire location</span> 
    </p>
    <p className='database-monitoringheaderindication'>
      Now 
    </p>
    <p className='database-monitoringheaderindication'>
      0%
    </p>
    <div className='database-monitoring-bargraphcontainer'>
      <div className='database-monitoring-bargraph'>

      </div>
    </div>

    <br />

    <p className='database-monitoringheaderindication'>
      Recent authentication
    </p> 
    <p className='database-monitoringheaderindication'>
      0%
    </p>
    <div className='database-monitoring-bargraphcontainer'>
      <div className='database-monitoring-bargraph'>

      </div>
    </div>

    </Col>

    <Col xs={12}
        md={4}
        lg={4}
        className='database-monitoring-contentcontainer'>
    
    </Col>
    <Col xs={12}
        md={4}
        lg={4}
        className='database-monitoring-contentcontainer'>
    
    </Col>
    <Col xs={12}
        md={4}
        lg={4}
        className='database-monitoring-contentcontainer'>
    
    </Col>
  </Row>
 )
}

function Motto(props) {
  return (
    <Col id='database-datanavigationbutton-navigationheaderindicationcontainer'>
      <h1 className='database-datanavigationbutton-navigationbuttoncontainer-navigationheaderindication'>Welcome</h1>
      <h3 className='database-datanavigationbutton-navigationbuttoncontainer-navigationheaderindication'>To be engaged with People is a silence, knowing what are done, the did's and all the longing wanting attention efforts, all reactions on both partie's suppose to be considered as strong. Presence of Money is present on tricks and the Funds are impossible not to be absence, happened with experienced and will, all tricks are just the same. History was called by an attention and newly fresh experience's not all has it, what must be done must shock the a Globally audience making it different longing it to happen with the common understandings. Marketing, Monitoring, Transactions, Request's, is just a harmony, a question mark yet understood.</h3>
    </Col>
  )
}

function DatabasePeople(props) {

 const [people, peoplecb] = useState([
  {
    authentications: {
      authenticationtype: 'Public',
      privateauthenticationkey: 'Privateauthenticationkey',
      authenticationid: '213ad12312awdas123123',
      password: {
       set: false,
       password: 'String'
      }
     },
     details: {
      surials: {
       firstname: 'String',
       middlename: 'String',
       lastname: 'String',
       nickname: 'String',
      },
      location: {
        address: {
         street: 'Trinidad street',
         baranggay: 'Maa',
         trademark: 'At the top from Lexis grill',
         city: 'Davao city',
         province: 'Davao Del Sur',
         country: 'Country',
         coordinates: {
          lat: 7.0885,
          lon: 125.5804
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
      }
     },
     moneyandfunds: {
      money: {
       amount: 100,
       history: []
     },
     funds: {
      amount: 10,
      history: []
     }
     },
     transactions: [],
     purchases: []
  },
  {
    authentications: {
      authenticationtype: 'Public',
      privateauthenticationkey: 'Privateauthenticationkey',
      authenticationid: '213ad12312awdas123123',
      password: {
       set: false,
       password: 'String'
      }
     },
     details: {
      surials: {
       firstname: 'String',
       middlename: 'String',
       lastname: 'String',
       nickname: 'String',
      },
      location: {
        address: {
          street: 'Trinidad street',
          baranggay: 'Maa',
          trademark: 'At the top from Lexis grill',
          city: 'Davao city',
          province: 'Davao Del Sur',
          country: 'Country',
          coordinates: {
           lat: 7.0685,
           lon: 125.5804
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
      }
     },
     moneyandfunds: {
      money: {
       amount: 100,
       history: []
     },
     funds: {
      amount: 10,
      history: []
     }
     },
     transactions: [],
     purchases: []
  }
 ]);

 const position = [51.505, -0.09];
 const position1 = [51.500, -0.09];
 const position2 = [51.495, -0.09];

 const [locationdestination, locationdestinationcb] = useState([ 
  51.505,
  -0.09
 ]);
  
 const [searchmapreference, searchmapreferencecb] = useState(null);
 const [databasepeoplepeoplesmarkers, databasepeoplepeoplesmarkerscb] = useState([]);
 const [databasepeoplebaranggaylocationdisplaydata, databasepeoplebaranggaylocationdisplaydatacb] = useState('');

 return (
  <Row id='database-databasepeople'>
   <Col xs={12}
        md={12}
        lg={12}
        id='databaase-databasepeople-mapcontainer'>
     <p id='databaase-databasepeople-mapcontainer-datapopulationheaderindication'>Data population, {people.length} people</p>
     <Col id='databaase-databasepeople-map'>
        <Col id='database-databasepeople-mapnavigationcontainer'>
        <DropdownButton id="dropdown-basic-button" 
                        className='database-databasepeople-mapnavigationcontainer-dropdownbutton'
                        title="Dropdown button"
                        onSelect={(evt)=> {
                         const _operation = JSON.parse(evt);
                         const _privateauthenticationlocation = operations.find((location)=> location.coordinates.lat ===  _operation.coordinates.lat && location.coordinates.lon ===  _operation.coordinates.lon );
                         const _peoplesdata = people.filter((people)=> people.details.location.address.baranggay === _privateauthenticationlocation.baranggay)
                         locationdestination.lat = _privateauthenticationlocation.coordinates.lat;
                         locationdestination.lon =  _privateauthenticationlocation.coordinates.lon;
                
                         const center = [locationdestination.lat, locationdestination.lon];

                         const zoom = 13;
                         searchmapreference.setView(center, zoom);

                         locationdestinationcb((coordinates)=> coordinates = {
                          lat: locationdestination.lat,
                          lng: locationdestination.lon
                         })

                         databasepeoplebaranggaylocationdisplaydatacb((baranggaylocationdata)=> baranggaylocationdata = _privateauthenticationlocation.baranggay)
                         databasepeoplepeoplesmarkerscb((peoples)=> peoples = _peoplesdata);

                        }}>
        {
           operations.map((operation, operationidx)=> {
             return (
               <Dropdown.Item className='database-databasepeople-mapnavigationcontainer-dropdownselectionbutton'
                              key={operationidx} 
                              eventKey={JSON.stringify(operation)}>
                  <p className='database-databasepeople-mapnavigationcontainer-dropdownselectionbutton-locationheaderindication'>{operation.baranggay}, {operation.province}, {operation.city}, {operation.trademark}, {operation.country}</p><br/>
               </Dropdown.Item>
             )
           })
         }
        </DropdownButton>
        </Col>
        <Col id='database-databasepeople-navigationcontainer-maptiler'>
         <MapContainer center={locationdestination} 
                        style={{height:'100%', width: '100%'}}
                        zoom={13} 
                        scrollWheelZoom={false}
                        ref={searchmapreferencecb}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            databasepeoplepeoplesmarkers.length === 0 ? 
            (
            <React.Fragment></React.Fragment>
            )
            :
            (
            <React.Fragment>
              {
                databasepeoplepeoplesmarkers.map((people, peoplesindx)=> {
                  return (
                    <Marker position={[people.details.location.address.coordinates.lat, people.details.location.address.coordinates.lon]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                  )
                })
              }
            </React.Fragment>
            )
          }
         </MapContainer>
       </Col>
     </Col>
   </Col>
   <Col xs={12}
        md={12}
        lg={12}
        id='databaase-databasepeople-peopledatacontainer'>
    {
     databasepeoplepeoplesmarkers.length === 0 ? 
     (
      <React.Fragment>
       <p className='databaase-databasepeople-peopledatacontainer-displaydataheaderindication'>DISPLAY DATA</p>
      </React.Fragment>
     )
     :
     (
     <React.Fragment>
        <p className='databaase-databasepeople-peopledatacontainer-displaydataheaderindication'>Branggay {databasepeoplebaranggaylocationdisplaydata}, {databasepeoplepeoplesmarkers.length} data population</p>
     </React.Fragment>
     
     )
    }
   </Col>
   <Col xs={12}
        md={12}
        lg={12}
        id='databaase-databasepeople-peopledataconfigurationcontainer'>
     <p className='databaase-databasepeople-peopledataconfigurationcontainer-peopledataheaderindication'>Information availability</p>
     <p className='databaase-databasepeople-peopledataconfigurationcontainer-peopledataheaderindication'>Deposits, Withdrawals, Locations and Transactions</p>
   </Col>
   
   <button id='database-databasepeople-backtomonitoringviewbutton'
           onClick={(evt)=> {
            props.databaseviewcb((view)=> view = 'Monitoring');
           }}>
      back to monitoring view
   </button>
  </Row>
 )
}

function DatabaseMoneyAndFunds(props) { 

 const [moneyandfunds] = useState({
  totalmoney: {
    accumulating: {
      amount: 0
    },
    last15daysauthentication: {
      amount: 0
    },
    calculation: {
      amount: 0
    }
  },
  totalfunds: {
    accumulating: {
      amount: 0
    },
    last15daysauthentication: {
      amount: 0
    },
    calculation: {
      amount: 0
    }
  },
  totalexpenses: {
    business: {
      accumulating: {
        amount: 0
      },
      last15daysauthentication: {
        amount: 0
      },
      calculation: {
        amount: 0
      }
    },
    projects: {
      accumulating: {
       amount: 0
      },
      last15daysauthentication: {
       amount: 0
      },
      calculation: {
       amount: 0
      }
    }
  },
  amountbreakdown: {
    vat: {
      accumulating: {
        nonmrnproducts: {
          amount: 0
         },
         mrnproducts: {
          amount:0
        }
      },
      last15daysauthentication: {
        nonmrnproducts: {
          amount: 0
         },
         mrnproducts: {
          amount:0
         },
         calculation: {
          amount: 0
         }
      }
    },
    commissions: {
      accumulating: {
        nonmrnproducts: {
          amount: 0
         },
         mrnproducts: {
          amount:0
        }
      },
      last15daysauthentication: {
        nonmrnproducts: {
          amount: 0
         },
         mrnproducts: {
          amount:0
         },
         calculation: {
          amount: 0
         }
      }
    },
    cargo: {
      accumulating: {
        nonmrnproducts: {
          amount: 0
         },
         mrnproducts: {
          amount:0
        }
      },
      last15daysauthentication: {
        nonmrnproducts: {
          amount: 0
         },
         mrnproducts: {
          amount:0
         },
         calculation: {
          amount: 0
         }
      }
    },
    expenses: {
      accumulating: {
        nonmrnproducts: {
          amount: 0
         },
         mrnproducts: {
          amount:0
        }
      },
      last15daysauthentication: {
        nonmrnproducts: {
          amount: 0
         },
         mrnproducts: {
          amount:0
         },
         calculation: {
          amount: 0
         }
      }
    }
  }
 });

 return (
  <Row id='database-databasemoneyandfunds'>
    <Row id='database-databasemoneyandfunds-navigationgridcontainer'>
       <Col xs={3}
            md={3}
            lg={3}
            className='database-databasemoneyandfunds-navigationcontainer'>
        <p className='database-databasemoneyandfunds-navigationbuttonheaderindication'
           onClick={(evt)=> {

             const _databasemoneyandfundsnavigationbutton = document.querySelectorAll('.database-databasemoneyandfunds-navigationbuttonheaderindication');
             const _databasemoneynavigationbutton = _databasemoneyandfundsnavigationbutton[0];
             const _databasefundsnavigationbutton = _databasemoneyandfundsnavigationbutton[1];

             props.databasemoneyandfundsdatacontentcb((data)=> data = 'Money');

             _databasemoneynavigationbutton.style.borderBottom = '0.1vh solid white';
             _databasefundsnavigationbutton.style.borderBottom = 'none';

           }}>
            Money
       </p>
       </Col>
       <Col xs={3}
            md={3}
            lg={3}
            className='database-databasemoneyandfunds-navigationcontainer'>
        <p className='database-databasemoneyandfunds-navigationbuttonheaderindication'
           onClick={(evt)=> {

              const _databasemoneyandfundsnavigationbutton = document.querySelectorAll('.database-databasemoneyandfunds-navigationbuttonheaderindication');
              const _databasemoneynavigationbutton = _databasemoneyandfundsnavigationbutton[0];
              const _databasefundsnavigationbutton = _databasemoneyandfundsnavigationbutton[1];
 
              props.databasemoneyandfundsdatacontentcb((data)=> data = 'Funds');

              _databasemoneynavigationbutton.style.borderBottom = 'none';
              _databasefundsnavigationbutton.style.borderBottom = '0.1vh solid white';
 
            }}>
          Funds
        </p>
       </Col>
    </Row>
    <Col xs={12}
         md={12}
         lg={12}
         id='database-databasemoneyandfunds-datacontentcontainer'>
      {
        props.databasemoneyandfundsdatacontent === 'Money' ? 
        (
          <DatabaseMoneyData databaseviewcb={ props.databaseviewcb}/>
        )
        :
        (
         <DatabaseFundsData />
        )
      } 
    </Col>

    <button id='database-databasemoneyanddata-backtomonitoringbutton'
            onClick={(evt)=> {
              props.databaseviewcb((view)=> view = 'Monitoring');
            }}>
      back to monitoring
    </button>

  </Row>
 )
}

function DatabaseMoneyData(props) {
 return (
  <Row id='database-databasemoneydata'>
    <Col xs={12}
         md={6}
         lg={6}
         className='database-databasemoneyanddata-datacontainer'>

      <h1 className='database-databasemoneyanddata-datacontainer-dataheaderindication'>PROFIT</h1>

      <br />

      <p className='database-databasemoneyanddata-datacontainer-dataheaderindication'>Average accumulating money integrated by the system</p>

      <p className='database-databasemoneyanddata-datacontainer-datapercentageheaderindication'>0%</p>
      <div className='database-databasemoneyanddata-datacontainer-bargraphcontainer'>
        <div className='database-databasemoneyanddata-datacontainer-bargraph'>
        </div>
      </div>
 
      <br />
      <br />

      <p className='database-databasemoneyanddata-datacontainer-dataheaderindication'>Average money last 15 days authentication integrated by the business</p>
      <p className='database-databasemoneyanddata-datacontainer-dataheadersubindication'>0 peso's</p>

      <br />
      <br />

      <p className='database-databasemoneyanddata-datacontainer-dataheaderindication'>Total money integrated by the business</p>
      <p className='database-databasemoneyanddata-datacontainer-dataheadersubindication'>0 peso's</p>

    </Col>

    <Col xs={12}
         md={6}
         lg={6}
         className='database-databasemoneyanddata-datacontainer'>
      
      <h1 className='database-databasemoneyanddata-datacontainer-dataheaderindication'>EXPENSE'S</h1>

      <br /> 

      <p className='database-databasemoneyanddata-datacontainer-dataheaderindication'>Accumulating expense's integrated by the entire business</p>
      <p className='database-databasemoneyanddata-datacontainer-datapercentageheaderindication'>0%</p>
      <div className='database-databasemoneyanddata-datacontainer-bargraphcontainer'>
        <div className='database-databasemoneyanddata-datacontainer-bargraph'>
        </div>
      </div>

      <br />
      <br />

      <p className='database-databasemoneyanddata-datacontainer-dataheaderindication'>Expense's last 15 days authentication integrated by the system</p>
      <p className='database-databasemoneyanddata-datacontainer-dataheadersubindication'>0 peso's</p>

      <br />
      <br />

    </Col>

    <Col xs={12}
         md={12}
         lg={12}
         className='database-databasemoneyanddata-datacontainer'>

      <h1 className='database-databasemoneyanddata-datacontainer-dataheaderindication'>Project's funding</h1>

      <br />
      <br />
      <br />

      <p className='database-databasemoneyanddata-datacontainer-dataheaderindication'>Cleanliness project</p>
      <p className='database-databasemoneyanddata-datacontainer-datapercentageheaderindication'>0%</p>
      <div className='database-databasemoneyanddata-datacontainer-bargraphcontainer'>
        <div className='database-databasemoneyanddata-datacontainer-bargraph'>
        </div>
      </div>
      <br />
      <br />
      <br />
      <p className='database-databasemoneyanddata-datacontainer-dataheaderindication'>E-bike for service's project</p>
      <p className='database-databasemoneyanddata-datacontainer-datapercentageheaderindication'>0%</p>
      <div className='database-databasemoneyanddata-datacontainer-bargraphcontainer'>
        <div className='database-databasemoneyanddata-datacontainer-bargraph'>
        </div>
      </div>

    </Col>
    <Col xs={12}
         md={12}
         lg={12}
         id='database-databasemoneyanddata-locationsdatalayoutcontainer'>
      <Row id='database-databasemoneyanddata-locationsdatagridcontainer'>
        <Col xs={12}
             md={7}
             lg={7}
             className='database-databasemoneyanddata-locationsdatacontainer'>
          <p className='database-databasemoneyanddata-locationsdatacontainer-locationsheaderindication'>Maa</p>
           <ul className='database-databasemoneyanddata-locationsdatacontainer-listgroup'>
            <li className='database-databasemoneyanddata-locationsdatacontainer-listgroupheaderindication'>Trinidad street, 0 pesos</li>
           </ul>
        </Col>
        <Col xs={12}
             md={5}
             lg={5}
             className='database-databasemoneyanddata-locationsdatacontainer-databreakdowncontainer'>
          <p className='database-databasemoneyanddata-locationsdatacontainer-databreakdowncontaine-headerindication'>Data</p>
        </Col>
      </Row>
    </Col>
    
  </Row>
 )
}

function DatabaseFundsData(props) {
 return (
  <Row id='database-databasefundsdata'>
    <p id='database-databasefundsdata-ownpersonalcurrencyheaderindication'>Own personal currency to be requested by the people</p>
  </Row>
 )
}

function DatabaseHistory(props) {
 return (
  <Col id='database-databasehistory'>

    <Col className='database-databasehistory-historycontentcontainer'>
     <p className='database-databasehistory-headerindication'>Transactions</p>
     <p className='database-databasehistory-headerindication'>Accumalating 0 transactions</p>
     <p className='database-databasehistory-headerindication'>Last 15 days</p>
    </Col>
    <Col className='database-databasehistory-historycontentcontainer'>
     <p className='database-databasehistory-headerindication'>Money and funds</p>
     <p className='database-databasehistory-headerindication'>Accumalating 0 transactions</p>
     <p className='database-databasehistory-headerindication'>Last 15 days</p>
    </Col>
    <Col className='database-databasehistory-historycontentcontainer'>
     <p className='database-databasehistory-headerindication'>New locations</p>
     <p className='database-databasehistory-headerindication'>Accumalating 0 transactions</p>
     <p className='database-databasehistory-headerindication'>Last 15 days</p>
    </Col>
    <Col className='database-databasehistory-historycontentcontainer'>
     <p className='database-databasehistory-headerindication'>People</p>
     <p className='database-databasehistory-headerindication'>Accumalating 0 transactions</p>
     <p className='database-databasehistory-headerindication'>Last 15 days</p>
    </Col>

    <button id='database-databasehistory-backtomonitoringbutton'
            onClick={(evt)=> {
              props.databaseviewcb((view)=> view = 'Monitoring');
            }}>
      back to monitoring
    </button>
  </Col>
 )
}

function DatabaseMarketing(props) {

  return (
    <Col id='database-databasemarketing'>
     <Col className='database-databasemarketing-headerindicationcontainer'>
      <p className='database-databasemarketing-headerindicationcontainer-headerindication'>Marketing</p>
     </Col>
     <Row id='database-databasemarketing-navigationgridcontainer'>
     <Col xs={6}
          md={2}
          lg={2}
           className='database-databasemarketing-navigationbuttoncontainer'>
        <button className='database-databasemarketing-navigationbutton'
                onClick={(evt)=> {
                  const _databasemarketingnavigationbuttons = document.querySelectorAll('.database-databasemarketing-navigationbutton');
                  for ( let i = 0; i < _databasemarketingnavigationbuttons.length; i++) {
                    _databasemarketingnavigationbuttons[i].style.borderBottom = 'none';
                  }
                   props.databasemainmonitoringdataviewcb((view)=> view = evt.target.innerText);
                  _databasemarketingnavigationbuttons[0].style.borderBottom = '0.1vh solid white';
                }}>
          Main monitoring data
        </button>
      </Col>
      <Col  xs={6}
            md={2}
            lg={2}
            className='database-databasemarketing-navigationbuttoncontainer'>
        <button className='database-databasemarketing-navigationbutton'
                onClick={(evt)=> {
                 const _databasemarketingnavigationbuttons = document.querySelectorAll('.database-databasemarketing-navigationbutton');
                 for ( let i = 0; i < _databasemarketingnavigationbuttons.length; i++) {
                  _databasemarketingnavigationbuttons[i].style.borderBottom = 'none';
                 }
                 props.databasemainmonitoringdataviewcb((view)=> view = evt.target.innerText);
                 _databasemarketingnavigationbuttons[1].style.borderBottom = '0.1vh solid white';
                }}>
          Marketing
        </button>
      </Col>
      <Col xs={6}
           md={2}
           lg={2}
           className='database-databasemarketing-navigationbuttoncontainer'>
        <button className='database-databasemarketing-navigationbutton'
                 onClick={(evt)=> {
                  const _databasemarketingnavigationbuttons = document.querySelectorAll('.database-databasemarketing-navigationbutton');
                  for ( let i = 0; i < _databasemarketingnavigationbuttons.length; i++) {
                    _databasemarketingnavigationbuttons[i].style.borderBottom = 'none';
                  }
                  props.databasemainmonitoringdataviewcb((view)=> view = evt.target.innerText);
                  _databasemarketingnavigationbuttons[2].style.borderBottom = '0.1vh solid white';
                 }}>
          Production
        </button>
      </Col>
      <Col xs={4}
           md={2}
           lg={2}
           className='database-databasemarketing-navigationbuttoncontainer'>
        <button className='database-databasemarketing-navigationbutton'
                 onClick={(evt)=> {
                  const _databasemarketingnavigationbuttons = document.querySelectorAll('.database-databasemarketing-navigationbutton');
                  for ( let i = 0; i < _databasemarketingnavigationbuttons.length; i++) {
                    _databasemarketingnavigationbuttons[i].style.borderBottom = 'none';
                  }
                  props.databasemainmonitoringdataviewcb((view)=> view = evt.target.innerText);
                  _databasemarketingnavigationbuttons[3].style.borderBottom = '0.1vh solid white';
                 }}>
          People
        </button>
      </Col>
      <Col xs={4}
           md={2}
           lg={2}
           className='database-databasemarketing-navigationbuttoncontainer'>
        <button className='database-databasemarketing-navigationbutton'
                  onClick={(evt)=> {
                    const _databasemarketingnavigationbuttons = document.querySelectorAll('.database-databasemarketing-navigationbutton');
                    for ( let i = 0; i < _databasemarketingnavigationbuttons.length; i++) {
                      _databasemarketingnavigationbuttons[i].style.borderBottom = 'none';
                    }
                    props.databasemainmonitoringdataviewcb((view)=> view = evt.target.innerText);
                    _databasemarketingnavigationbuttons[4].style.borderBottom = '0.1vh solid white';
                  }}>
         Sales
        </button>
      </Col>
     </Row>
     <Col id='database-databasemarketing-viewcontainer'>
     <DatabaseMarketingDataView databasemainmonitoringdataview={props.databasemainmonitoringdataview}/>
     </Col>
     <button id='database-databasemarketing-backtomonitoringbutton'
            onClick={(evt)=> {
              props.databaseviewcb((view)=> view = 'Monitoring');
            }}>
      back to monitoring
    </button>
    </Col>
  )
}

function DatabaseMarketingDataView(props) {

 if ( props.databasemainmonitoringdataview === 'Main monitoring data') {
   return (
    <Col id='database-databasemarketing-databasemarketingview'>
     <DatabaseMarketingMainMonitoringData />
    </Col>
   )
 }

 if ( props.databasemainmonitoringdataview === 'Marketing' ) {
  return (
   <Col id='database-databasemarketing-databasemarketingview'>
    <DatabaseMarketingMarketingData />
   </Col>
  )
 }

 if ( props.databasemainmonitoringdataview === 'Production' ) {
  return (
   <Col id='database-databasemarketing-databasemarketingview'>
    <DatabaseMarketingProduction />
   </Col>
  )
 }

 if ( props.databasemainmonitoringdataview === 'People' ) {
  return (
   <Col id='database-databasemarketing-databasemarketingview'>
    <DatabaseMarketingPeoplesData />
   </Col>
  )
 }

 if ( props.databasemainmonitoringdataview === 'Sales' ) {
  return (
   <Col id='database-databasemarketing-databasemarketingview'>
    <DatabaseMarketingSales />
   </Col>
  )
 }

}

function DatabaseMarketingMainMonitoringData(props) {
 return (
  <Col id='database-databasemarketing-mainmonitoringdatacontainer'>
    <p className='database-databasemarketing-mainmonitoringdatacontainer-mainmonitoringdataheaderindication'>Main monitoring data</p>
  </Col>
 )
}

function DatabaseMarketingMarketingData(props) {
 return (
  <Col id='database-databasemarketing-marketingdata'>
    <p className='database-databasemarketing-marketingdata-marketingdataheaderindication'>Database marketing</p>
  </Col>
 )
}

function DatabaseMarketingProduction(props) {
 return (
  <Col id='database-databasemarketing-production'>
   <p className='database-databasemarketing-production-productheaderindication'>Database production</p>
  </Col>
 )
}

function DatabaseMarketingPeoplesData(props) {
 return (
  <Col id='database-databasemarketing-peoplesdata'>
    <p className='database-databasemarketing-peoplesdata-peoplesdataheaderindication'>Database peoples data</p>
  </Col>
 )
}

function DatabaseMarketingSales(props) {
 return (
  <Col id='database-databasemarketing-sales'>
    <p className='database-databasemarketing-salesheaderindication'>Database marketing sales</p>
  </Col>
 )
}

function DatabaseTransactions(props) {
  return(
    <Col id='database-databasetransactions'>
      <h1 className='database-databasetransactions-databasetransactionbaranggayheaderindication'>Maa</h1>
      <p className='database-databasetransactions-dataheaderindication database-databasetransactions-positioningdataheaderindication '>Now, public and private authentication</p>
      <p className='database-databasetransactions-dataheaderindication'>Total of 0 request's</p>
      <p className='database-databasetransactions-dataheaderindication'>0 non mrn products are given</p>
      <p className='database-databasetransactions-dataheaderindication'>0 mrn products are given</p>
      <p className='database-databasetransactions-databargraphpercentageheaderindication'>0%</p>
      <div className='database-databasetransacations-bargraphcontainer'>
       <div className='database-databasetransacations-bargraph'>

       </div>
      </div> 
      <p className='database-databasetransactions-dataheaderindication database-databasetransactions-positioningdataheaderindication '>Last 15 days private/public authentication</p>
      <p className='database-databasetransactions-dataheaderindication'>Total of 0 request's</p>
      <p className='database-databasetransactions-dataheaderindication'>0 non mrn products are given</p>
      <p className='database-databasetransactions-dataheaderindication'>0 mrn products are given</p>
      <p className='database-databasetransactions-databargraphpercentageheaderindication'>0%</p>
      <div className='database-databasetransacations-bargraphcontainer'>
       <div className='database-databasetransacations-bargraph'>

       </div>
      </div>
      <ul>
        <li className='database-databasetransactions-datalistgroupheaderindication'>Trinindad street</li>
        <p className='database-databasetransactions-dataheaderindication'>Now, public and private authentication</p>
        <p className='database-databasetransactions-dataheaderindication'>Total of 0 request's</p>
        <p className='database-databasetransactions-dataheaderindication'>0 non mrn products are given</p>
        <p className='database-databasetransactions-dataheaderindication'>0 mrn products are given</p>
        <p className='database-databasetransactions-databargraphpercentageheaderindication'>0%</p>
        <div className='database-databasetransacations-bargraphcontainer'>
         <div className='database-databasetransacations-bargraph'>

         </div>
        </div>
        <p className='database-databasetransactions-dataheaderindication'>Last 15 days private/public authentication</p>
        <p className='database-databasetransactions-dataheaderindication'>Total of 0 request's</p>
        <p className='database-databasetransactions-dataheaderindication'>0 non mrn products are given</p>
        <p className='database-databasetransactions-dataheaderindication'>0 mrn products are given</p>
        <p className='database-databasetransactions-databargraphpercentageheaderindication'>0%</p>
        <div className='database-databasetransacations-bargraphcontainer'>
         <div className='database-databasetransacations-bargraph'>

         </div>
        </div>
      </ul>
      <button id='database-databasetransactions-backtomonitoringviewbutton'
              onClick={(evt)=> {
                props.databaseviewcb((view)=> view = 'Monitoring');
              }}>
        back to monitoring view
      </button>
    </Col>
  )
}

function Requests(props) {
 return (
  <Col id='database-requestsview'>

    <Row id='database-requestsview-nowdatagridcontainer'> 
     <Col xs={12}
          md={12}
          lg={12}
          className='database-requestsview-nowdatacontainer'> 
      <p className='database-requestsview-recentdatacontainer-nowdataheaderindication'>Now</p>
     </Col>
     <Col xs={12}
          md={6}
          lg={6}
          className='database-requestsview-nowdatacontainer'>
      <p className='database-requestsview-recentdatacontainer-nowdataheaderindication'>Processing</p>
      <p className='database-requestsview-recentdatacontainer-nowdataheaderindication'>Total of 0 non-mrn products, 0 mrn products to be given within Maa</p>
     </Col>
     <Col xs={12}
          md={6}
          lg={6}
          className='database-requestsview-nowdatacontainer'>
      <p className='database-requestsview-recentdatacontainer-nowdataheaderindication'>Completion,0</p>
      <p className='database-requestsview-recentdatacontainer-nowdataheaderindication'>Processing, 0 </p>
      <p className='database-requestsview-recentdatacontainer-nowdataheaderindication'>Total request's, 0 </p>
      <p className='database-requestsview-recentdatacontainer-nowdataheaderindication'>0 non-mrn products, 0 mrn products are already given within Maa</p>
     </Col>
    </Row>

    <Row id='database-requestsview-requestsdatagridcontainer'>
     <Col xs={12}
          md={6}
          lg={6}
          className='database-requestsview-requestsdatacontainer'>
      <p className='database-requestsview-recentdatacontainer-requestsdataheaderindication'>Requests</p>
      <p className='database-requestsview-recentdatacontainer-requestsdataheaderindication'>There were still 0 requests that needed to be take care within 0 operations scope</p>
      <p className='database-requestsview-recentdatacontainer-requestsdataheaderindication'>List</p>
      <ul className='database-requestsview-recentdatacontainer-listgroupheaderindication'>
        <li className='database-requestsview-recentdatacontainer-listgroupheaderindication'>Maa, <ul>
                  <li className='database-requestsview-recentdatacontainer-listgroupheaderindication'>Trinidad street, 0 non-mrn products and 0 mrn products requested as a need <button className='database-requestsview-recentdatacontainer-listgroupheaderindication-productbreakdownbutton'>products breakdown</button></li>
                 </ul>
        </li>
      </ul>
     </Col>
    </Row>

    <button id='database-requestsview-backtomonitoringviewbutton'
       onClick={(evt)=> {
        props.databaseviewcb((view)=> view = 'Monitoring');
       }}>
      back to monitoring view
    </button>

  </Col>
 )
}

function DepositsConfigurationModal(props) {

  return (
  <Col className='database-depositsconfigurationmodalcontainer'>
    <DatabaseDepositsConfigurationModal depositsconfigurationcontainer={props.depositsconfigurationcontainer}/>
  </Col>
  )
}
  
//// processing
function Processing() {
 return (
  <Col xs={12}
       md={12}
       lg={12}
       id='processing'>
    <Row id='processing-processinggridcontainer'>
     <Col xs={12}
          md={12}
          lg={12}
          id='processing-processinggridcontainer-transactioncontainer'>
        <Transactions />
     </Col>
     <Col xs={12}
          md={12}
          lg={12}
          id='processing-processinggridcontainer-transactiondetailscontainer'>
     </Col>
    </Row>
  </Col>
 )
}

function DatabaseResponseMessageModal(props) {
  return (
    <Col id='database-responsemessagemodal'>
      <Col id='database-responsemessagelayoutcontainer'> 
       <Col  id='database-responsemessagelayoutcontainer-mesagecontainer'>
        <h1 className='database-responsemessageheaderindication'>
          {props.databaseresponsemessage.indication}
        </h1>
        <p className='database-responsemessagedetailsheaderindication'>
          {props.databaseresponsemessage.details}
        </p>
       </Col>
       <Col id='database-responsemessagelayoutcontainer-responsemessagecontainerclosebuttoncontainer'>
         <button id='database-responsemessagelayoutcontainer-responsemessagecontainerclosebutton'
                 onClick={(evt)=> {
                   const _responsemessagemodal = document.querySelector('#database-responsemessagemodal');
                   _responsemessagemodal.style.display = 'none';
                 }}>
          x
         </button>
       </Col>
      </Col>
    </Col>
  )
}

                   
