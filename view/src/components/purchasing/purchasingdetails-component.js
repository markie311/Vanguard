import React, {
    useState,
    useRef,
    useCallback,
    useMemo
  } from 'react';

import { Row,
         Col,
         Spinner,
         Carousel,
         Dropdown,
         DropdownButton } from 'react-bootstrap';

import axiosCreatedInstance from '../lib/axiosutil.js';

import L from 'leaflet';

import { MapContainer, 
         TileLayer,
         useMap,
         useMapEvents,
         Marker,
         Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import '../../styles/purchasing/purchasingdetails.scss';

import { operations } from '../lib/operations.js';
import { timestamp } from '../lib/timestamps.js';

import XirbitGraph from '../graph/xirbitgraph-component.js';

export default function PurchasingDetais(props) { 

const [, updateStates] = React.useState()
const componentupdate = React.useCallback(() => updateStates({}), []);

//const [manualcargoaddressdestinationloadingindication, manualcargoaddressdestinationloadingindicationcb] = useState(false);

//const [setascargodestinationloadingindication, setascargodestinationloadingindicationcb] = useState(false);

//const [purchasingcargodestination, purchasingcargodestinationcb] = useState(",,,,,");
//const [purchasingcargoaddressset, purchasingcargoaddresssetcb] = useState(false);

//const [purchasingtotalmerchandisepayment, purchasingtotalmerchandisepaymentcb] = useState(0);
//const [purchasingtotalweight, purchasingtotalweightcb] = useState(0);
//const [purchasingtotalcargofee, purchasingtotalcargofeecb] = useState(0);
//const [purchasigtotalpayment, purchasigtotalpaymentcb] = useState(0);

//const [purchasingtotalmrnproducts, purchasingtotalmrnproductscb] = useState([]);
//const [purchasingmrnproductstotalweight, purchasingmrnproductstotalweightcb] = useState(0);
//const [purchasingtotalnonmrnproducts, purchasingtotalnonmrnproductscb] = useState([]);
//const [purchasingnonmrnproductstotalweight, purchasingnonmrnproductstotalweightcb] = useState(0);

const [privateauthenticationlocations, privateauthenticationlocationscb] = useState(false);

{/*
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
const [selectedproductarray, selectedproductarraycb] = useState([                                                                                                                                                                                                             

]);
const [selectedproductarraylength, selectedproductarraylengthcb] = useState(0);
*/}

const [selectedproductdisplayimages, selectedproductdisplayimagescb] = useState(
[
{
displayimage: '../images/landingpage/bondpaperimage.jpg'
},
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
);

const [cargotype, cargotypecb] = useState('');

const [searchmapreference, searchmapreferencecb] = useState(null);

const [locationdestination, locationdestinationcb] = useState(
{
lat: 33.2232,
lng: 43.6793,
}
);

const [searchmapmarkerreference, searchmapmarkerreferencecb] = useState(locationdestination);

const [geocoordinatesresult, geocoordinatesresultcb] = useState({
lat: 0,
lon: 0
});

let DefaultIcon = L.icon({
iconUrl: icon,
shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function purchasinggetcurrentposition(position) {

 const _cargolocationdestinationheaderindications = document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication');

 console.log(position);

 locationdestinationcb((coordinates)=> coordinates =  {
  lat: position.coords.latitude,
  lng: position.coords.longitude
 })
 searchmapmarkerreferencecb((coordinates)=> coordinates = {
  lat: locationdestination.lat,
  lng: locationdestination.lng
 })
 geocoordinatesresultcb((coordinates)=> coordinates = {
  lat: position.coords.latitude,
  lon: position.coords.longitude
 })


const center = [position.coords.latitude, position.coords.longitude];
const zoom = 17;
searchmapreference.setView(center, zoom);

_cargolocationdestinationheaderindications[8].innerText = `Lat: ${position.coords.latitude}`;
_cargolocationdestinationheaderindications[9].innerText = `Lon: ${position.coords.longitude}`;

}

function purchasinggetprivateauthenticationlocations(location, location2) {
 alert(location)
}

function getCargoFee(weight) {

  switch(true) {
   case weight === 0:
    return 0;
   break;
   case weight === 1000:
   return 100;
   break;
   case weight < 1000:
    return 100;
   break;
   case weight > 1000:
    return 200;
   break;
   case weight === 2000:
   return 200;
   break;
   case weight < 2000:
    return 200;
   break;
   case weight > 2000:
    return 300;
   break;
   case weight === 3000:
   return 300;
   break;
   case weight < 3000:
    return 300;
   break;
   case weight > 3000:
    return 400;
   break;
   case weight === 4000:
   return 400;
   break;
   case weight < 4000:
    return 400;
   break;
   case weight > 4000:
    return 500;
   break;
   case weight === 5000:
   return 500;
   break;
   case weight < 5000:
    return 500;
   break;
   case weight > 5000:
    return 600;
   break;
   case weight === 6000:
   return 600;
   break;
   case weight < 6000:
    return 600;
   break;
   case weight > 6000:
    return 700;
   break;
   case weight === 7000:
   return 700;
   break;
   case weight < 7000:
    return 700;
   break;
   case weight > 7000:
    return 800;
   break;
   case weight === 8000:
   return 800;
   break;
   case weight < 8000:
    return 800;
   break;
   case weight > 8000:
    return 900;
   break;
   case weight === 9000:
   return 900;
   break;
   case weight < 9000:
    return 900;
   break;
   case weight > 9000:
    return 1000;
   break;
   case weight === 10000:
   return 1000;
   break;
   case weight < 10000:
    return 1000;
   break;
   case weight > 10000:
    return false;
   break;
   default:
  }

}

return (
<Row id='purchasingdetails'>

  <Col xs={12}
      md={12}
      lg={12}
      id='purchasingdetails-purchasedetailscontainer'>

  <Row  id='purchasingdetails-purchasedetailsgridcontainer'>

  <Col xs={12}
        md={12}
        lg={12}
        id='purchasingdetails-mapcontainer'>

    <Row id='purchasingdetails-mapcontainer-configurationscontainer'>

      <h1 className="purchasingdetails-mapcontainer-configurationscontainer-headerindication">Cargo assistace/Shipping assistance/Delivery need assistance</h1>
      <h4 className="purchasingdetails-mapcontainer-configurationscontainer-headerindication">select location for shipping</h4>

      <Col xs={12}
            md={6}
            lg={6}
            id='purchasingdetails-mapcontainer-configurationscontainer-automaticselectioncontainer'>
              
        <p className='purchasingdetails-mapcontainer-configurationscontainer-typeofselectionconfigurationheaderindication'>01. Private authentication</p>

        <DropdownButton id="dropdown-basic-button" 
                        title="Dropdown button" disabled={privateauthenticationlocations} 
                        onClick={()=> {

                          const _yourprivateauthenticationisnotprivate = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-privateauthenticationresponseheaderindication");
                          const _manualshippinglocationupdateresponseindication = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-manualshipinglocationselectionresponseheaderindication");
                          const _bysatellitecargodestinationaddressresponseheaderindication = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-byclicklocationselectionresponseheaderindication");

                        if ( props.user.authentications.authenticationtype === "Private" ) {

                              privateauthenticationlocationscb((selections)=> selections = false); 
                              _manualshippinglocationupdateresponseindication[0].style.display = "none";
                              _manualshippinglocationupdateresponseindication[1].style.display = "none";
                              _bysatellitecargodestinationaddressresponseheaderindication[0].style.display = "none";

                        } else {
                            privateauthenticationlocationscb((selections)=> selections = true);
                            _yourprivateauthenticationisnotprivate[0].innerText = "You're authentication is not private. Proceeding with this option setting a cargo destination address will result into an error response. Change your authentication as Private.";
                            _manualshippinglocationupdateresponseindication[0].style.display = "none";
                            _manualshippinglocationupdateresponseindication[1].style.display = "none";
                            _bysatellitecargodestinationaddressresponseheaderindication[0].style.display = "none";
                        }
                      }}             
                        onSelect={(evt)=> {

                          const _cargostatusindication = document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication");

                          const _cargolocationdestinationstatus =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-cargodestinationsetstatusheaderindication");
                          const _shipmentstatusindication = document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-shipmenttypeheaderindication");
                          const _shipmentauthenticationremark =  _cargostatusindication[6];
                          const _shipmentlocationstatus =  _cargostatusindication[7];
                          const _shipmentlatitudestatus = _cargostatusindication[8];
                          const _shipmentlongtitudestatus =  _cargostatusindication[9];
                          const _shipmentslocationsresultindication =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-resultsspanheaderindication"); 
                          const _shipmentlocationresultsresponseindication =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-resultsresponsespanheaderindication");

                          const _yourprivateauthenticationisnotprivate = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-privateauthenticationresponseheaderindication");
                          const _manualshippinglocationupdateresponseindication = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-manualshipinglocationselectionresponseheaderindication");
                          const _bysatellitecargodestinationaddressresponseheaderindication = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-byclicklocationselectionresponseheaderindication");

                          const _cargolocationdestinationheaderindications = document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication');
        
                          if ( props.user.authentications.authenticationtype === "Private" ) {

                          const _operation = JSON.parse(evt);

                          const _privateauthenticationlocation = operations.find((location)=> location.coordinates.lat ===  _operation.coordinates.lat && location.coordinates.lon ===  _operation.coordinates.lon );
      
                          locationdestination.lat = _privateauthenticationlocation.coordinates.lat;
                          locationdestination.lon =  _privateauthenticationlocation.coordinates.lon;

                          const center = [locationdestination.lat, locationdestination.lon];

                          const zoom = 17;
                          searchmapreference.setView(center, zoom);

                          locationdestinationcb((coordinates)=> coordinates = {
                            lat: locationdestination.lat,
                            lng: locationdestination.lon
                          })
                          searchmapmarkerreferencecb((coordinates)=> coordinates = {
                            lat: locationdestination.lat,
                            lng: locationdestination.lon
                          })
                          geocoordinatesresultcb((coordinates)=> coordinates = {
                            lat: locationdestination.lat,
                            lon: locationdestination.lon
                          })

                          props.purchaseauthenticationcb((purchaseauthentication)=> purchaseauthentication = {
                          authentication: 'Less charge transactions',
                          destination: {
                            address: {
                              street: _privateauthenticationlocation.street,
                              baranggay: _privateauthenticationlocation.baranggay,
                              trademark: _privateauthenticationlocation.trademark,
                              province: _privateauthenticationlocation.province,
                            city: _privateauthenticationlocation.city,
                            country: _privateauthenticationlocation.country
                            }
                          }
                          });

                        _cargolocationdestinationstatus[0].innerText = "Cargo location was set. Cargo type/delivery.";
                        _cargolocationdestinationstatus[0].style.backgroundColor ="dodgerblue";
                        _cargolocationdestinationstatus[0].style.color = "white";
                        _cargolocationdestinationstatus[0].style.borderRadius = "20px";
                        _cargolocationdestinationstatus[0].style.padding = "5px 15px";

                        _shipmentstatusindication[0].innerText ="Private. Less charge transactions.";
                        _shipmentstatusindication[0].style.backgroundColor ="dodgerblue";
                        _shipmentstatusindication[0].style.color = "white";
                        _shipmentstatusindication[0].style.borderRadius = "20px";
                        _shipmentstatusindication[0].style.padding = "5px 15px";

                        _shipmentauthenticationremark.innerText = `The authentication was ${props.user.authentications.authenticationtype} and location for cargo was within less charge transactions.`;
                        _shipmentauthenticationremark.style.color = "dodgerblue";

                        _shipmentlocationstatus.innerText = `Location: ${_privateauthenticationlocation.street}, ${_privateauthenticationlocation.baranggay}, ${_privateauthenticationlocation.city}, ${_privateauthenticationlocation.province}, ${_privateauthenticationlocation.country}`;
                        _shipmentlocationstatus.style.color = "dodgerblue";

                        _shipmentlatitudestatus.innerText = `Lat: ${locationdestination.lat}`;
                        _shipmentlongtitudestatus.innerText = `Lon: ${locationdestination.lon}`; 

                        _shipmentslocationsresultindication[0].innerText = `Results: ${_privateauthenticationlocation.street}, ${_privateauthenticationlocation.baranggay}, ${_privateauthenticationlocation.city}, ${_privateauthenticationlocation.province}, ${_privateauthenticationlocation.country}`;
                        _shipmentslocationsresultindication[0].style.backgroundColor ="green";
                        _shipmentslocationsresultindication[0].style.color = "white";
                        _shipmentslocationsresultindication[0].style.borderRadius = "20px";
                        _shipmentslocationsresultindication[0].style.padding = "5px 15px";

                        _shipmentlocationresultsresponseindication[0].innerText = "Location visual was displayed on the map, view and toggle cargo address using the marker.";
                        _shipmentlocationresultsresponseindication[0].style.color = "violet";

                        _yourprivateauthenticationisnotprivate[0].innerText = "Your location was set as a cargo address. Type: Cargo/Delivery.";
                        _yourprivateauthenticationisnotprivate[0].style.display = "block";
                        _manualshippinglocationupdateresponseindication[0].style.display = "none";
                        _manualshippinglocationupdateresponseindication[1].style.display = "none";
                        _bysatellitecargodestinationaddressresponseheaderindication[0].style.display = "none";

                  //      _shipmentstatusindication.innerText = "Private authentication. Less charge transactions. Cargo type delivery.";

                      //  _cargolocationdestinationstatus.innerText = 'Private authentication. Less charge transactions. Cargo type delivery';

                //       _cargolocationdestinationspanheaderindication.innerText = "Private authentication shipping set. This location if for less charge transactions";

                    //    _cargolocationdestinationheaderindications[8].innerText = `Lat: ${locationdestination.lat}`;
                  //     _cargolocationdestinationheaderindications[9].innerText = `Lon: ${locationdestination.lon}`; 

                  //     _cargolocationdestinationspanheaderindication.classList.add('purchasingdetails-mapcontainer-maptile-addresscontainer-cargostatusheaderindication');

                    //    const _purchasingmrntotalproductweight = props.allmrnselectedproduct.reduce((previousValue, currentValue)=> previousValue + currentValue.details.weight,0);

                  //     switch (true) {
                  //         case _purchasingmrntotalproductweight === 0: 
                  //          props.totaldeliveryfeecb((totalweight)=> totalweight = 0);
                //          break;
                  //         case _purchasingmrntotalproductweight <= 1000:
                  //           props.totaldeliveryfeecb((totalweight)=> totalweight =  100);
                  //         break;
                //          case _purchasingmrntotalproductweight > 1000 && _purchasingmrntotalproductweight <= 2000:
                //            props.totaldeliveryfeecb((totalweight)=> totalweight = 200);
                //          break;
                //          case _purchasingmrntotalproductweight > 2000 && _purchasingmrntotalproductweight <= 3000:
                //            props.totaldeliveryfeecb((totalweight)=> totalweight = 300);
                //          break;
                //          case _purchasingmrntotalproductweight > 3000 && _purchasingmrntotalproductweight <= 4000:
                  //           props.totaldeliveryfeecb((totalweight)=> totalweight = 400);
                  //         break;
                  //         case _purchasingmrntotalproductweight > 4000 && _purchasingmrntotalproductweight <= 5000:
                  //           props.totaldeliveryfeecb((totalweight)=> totalweight = 500);
                  //         break;
                  //         case _purchasingmrntotalproductweight > 5000 && _purchasingmrntotalproductweight <= 6000:
                  //           props.totaldeliveryfeecb((totalweight)=> totalweight = 600);
                  //         break;
                  //         case _purchasingmrntotalproductweight > 6000 && _purchasingmrntotalproductweight <= 7000:
                  //           props.totaldeliveryfeecb((totalweight)=> totalweight = 700);
                  //        break;
                  //         case _purchasingmrntotalproductweight > 8000 && _purchasingmrntotalproductweight <= 9000:
                  //           props.totaldeliveryfeecb((totalweight)=> totalweight = 800);
                  //         break;
                  //         case _purchasingmrntotalproductweight > 9000 && _purchasingmrntotalproductweight <= 10000:
                  //          props.totaldeliveryfeecb((totalweight)=> totalweight = 900);
                  //         break;
                  //        break;
                  //        case _purchasingmrntotalproductweight === 10000:
                  //           props.totaldeliveryfeecb((totalweight)=> totalweight = 10000);
                  //        break;
                  //        break;
                  //        case _purchasingmrntotalproductweight > 10000:
                  //          props.totaldeliveryfeecb((totalweight)=> totalweight = 0);
                  //        break;
                  //      }

                  //      cargotypecb((cargotype)=> cargotype = 'Location less charge transactions');
  
                          } else {
                          _yourprivateauthenticationisnotprivate[0].style.display = "block";
                          _manualshippinglocationupdateresponseindication[0].style.display = "none";
                          _manualshippinglocationupdateresponseindication[1].style.display = "none";
                          _bysatellitecargodestinationaddressresponseheaderindication[0].style.display = "none";
                          }
                        
                      }}>

          {
            operations.map((operation, operationidx)=> {
              return (
                <Dropdown.Item key={operationidx} eventKey={JSON.stringify(operation)}>
                  {operation.baranggay},{operation.province}, {operation.city}, {operation.street}, {operation.trademark}, {operation.country}
                </Dropdown.Item>
              )
            })
          }

        </DropdownButton>

      <p className='purchasingdetails-mapcontainer-configurationscontainer-privateauthenticationresponseheaderindication'>You're authentication is not private. Proceeding with this option setting a cargo destination address will result into an error response. Change your authentication as Private.</p>

      </Col>

      <p className='purchasingdetails-mapcontainer-configurationscontainer-typeofselectionconfigurationorheaderindication'>OR</p>

      <Col xs={12}
            md={6}
            lg={6}
            id='purchasingdetails-mapcontainer-configurationscontainer-manualcontainer'>

        <Row id='purchasingdetails-mapcontainer-configurationscontainer-manualgridcontainer'>
          <p className='purchasingdetails-mapcontainer-configurationscontainer-manualconfigurationheaderindication'>02. Manual</p>
          <Col xs={6}
                md={4}
                lg={4}>
            <p className='purchasingdetails-mapcontainer-configurationscontainer-coordinatesheaderindication'>Latitude: </p>
          </Col>
          <Col xs={6}
                md={8}
                lg={8}>
            <input type='number'
                    className='purchasingdetails-mapcontainer-configurationscontainer-coordinatesfield'
                    onChange={(evt)=> {

                      const _lat = evt.target.value;
                      const _coordinatesfield = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-coordinatesfield");

                      const _yourprivateauthenticationisnotprivate = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-privateauthenticationresponseheaderindication");
                      const _manualshippinglocationupdateresponseindication = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-manualshipinglocationselectionresponseheaderindication");
                      const _bysatellitecargodestinationaddressresponseheaderindication = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-byclicklocationselectionresponseheaderindication");

                      const _cargolocationdestinationheaderindications = document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication');
                      
                      const _cargostatusindication = document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication");

                      const _cargolocationdestinationstatus =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-cargodestinationsetstatusheaderindication");
                      const _shipmentstatusindication = document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-shipmenttypeheaderindication");
                      const _shipmentauthenticationremark =  _cargostatusindication[6];
                      const _shipmentlocationstatus =  _cargostatusindication[7];
                      const _shipmentlatitudestatus = _cargostatusindication[8];
                      const _shipmentlongtitudestatus =  _cargostatusindication[9];
                      const _shipmentslocationsresultindication =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-resultsheaderindication"); 
                      const _shipmentlocationresultsresponseindication =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-resultsresponseheaderindication");
                  
                    if (  _coordinatesfield[0].value === "" || _coordinatesfield[1].value === "" ) {

                      _manualshippinglocationupdateresponseindication[0].style.display = "block";  
                      _manualshippinglocationupdateresponseindication[1].style.display = "none";  
                      _yourprivateauthenticationisnotprivate[0].style.display = "none";
                      _bysatellitecargodestinationaddressresponseheaderindication[0].style.display = "none";
                      _cargolocationdestinationheaderindications[8].innerText = `Lat: 0`;

                    } else {

                      const _coordinates = {
                      lat: Number(_lat),
                      lon: Number(geocoordinatesresult.lon)
                      };
  
                    locationdestinationcb((coordinates)=> coordinates = {
                      lat: Number(_lat),
                      lng: geocoordinatesresult.lon 
                    })
                    searchmapmarkerreferencecb((coordinates)=> coordinates = {
                      lat: Number(_lat),
                      lng: Number(geocoordinatesresult.lon) 
                    })
                    geocoordinatesresultcb((coordinates)=> coordinates = {
                      lat: Number(_lat),
                      lon: geocoordinatesresult.lon 
                    })

                    geocoordinatesresult.lat = _lat;

                    const center = [Number(geocoordinatesresult.lat), Number(_lat)];
                    const zoom = 17;
                    searchmapreference.setView(center, zoom);
                    
                    _cargolocationdestinationheaderindications[8].innerText = `Lat: ${_lat}`;

                    _yourprivateauthenticationisnotprivate[0].style.display = "none";
                    _manualshippinglocationupdateresponseindication[0].style.display = "none";
                    _manualshippinglocationupdateresponseindication[1].style.display = "none";
                    _bysatellitecargodestinationaddressresponseheaderindication[0].style.display = "none";

                    //  _cargolocationdestinationstatus[0].innerText = "Cargo location was set. Cargo type/delivery.";
                    //  _cargolocationdestinationstatus[0].style.backgroundColor ="dodgerblue";
                    //  _cargolocationdestinationstatus[0].style.color = "white";
                    //  _cargolocationdestinationstatus[0].style.borderRadius = "20px";
                    //  _cargolocationdestinationstatus[0].style.padding = "5px 15px";

                    //   _shipmentstatusindication[0].innerText ="Private. Less charge transactions.";
                    //   _shipmentstatusindication[0].style.backgroundColor ="dodgerblue";
                    //   _shipmentstatusindication[0].style.color = "white";
                    //   _shipmentstatusindication[0].style.borderRadius = "20px";
                    //   _shipmentstatusindication[0].style.padding = "5px 15px";

                  //   _shipmentauthenticationremark.innerText = `The authentication was ${props.user.authentications.authenticationtype} and location for cargo was within less charge transactions.`;
                  //   _shipmentauthenticationremark.style.color = "dodgerblue";

                  //   _shipmentlocationstatus.innerText = `Location: ${_privateauthenticationlocation.street}, ${_privateauthenticationlocation.baranggay}, ${_privateauthenticationlocation.city}, ${_privateauthenticationlocation.province}, ${_privateauthenticationlocation.country}`;
                  //   _shipmentlocationstatus.style.color = "dodgerblue";

                  //    _shipmentlatitudestatus.innerText = `Lat: ${locationdestination.lat}`;
                  //    _shipmentlongtitudestatus.innerText = `Lon: ${locationdestination.lon}`; 

                  //    _shipmentslocationsresultindication[0].innerText = `Results: ${_privateauthenticationlocation.street}, ${_privateauthenticationlocation.baranggay}, ${_privateauthenticationlocation.city}, ${_privateauthenticationlocation.province}, ${_privateauthenticationlocation.country}`;
                  //    _shipmentslocationsresultindication[0].style.backgroundColor ="green";
                  //    _shipmentslocationsresultindication[0].style.color = "white";
                  //    _shipmentslocationsresultindication[0].style.borderRadius = "20px";
                  //    _shipmentslocationsresultindication[0].style.padding = "5px 15px";

                  //    _shipmentlocationresultsresponseindication[0].innerText = "Location is already had a visual on the map, view.";
                  //    _shipmentlocationresultsresponseindication[0].style.color = "violet";

                    }

                    }}/>
          </Col>
          <Col xs={6}
                md={4}
                lg={4}>
            <p className='purchasingdetails-mapcontainer-configurationscontainer-coordinatesheaderindication'>Longitude: </p>
          </Col>
          <Col xs={6}
                md={8}
                lg={8}>
            <input type='number'
                    className='purchasingdetails-mapcontainer-configurationscontainer-coordinatesfield'
                    onChange={(evt)=> {

                      const _lon = evt.target.value;
                      const _coordinatesfield = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-coordinatesfield");

                      const _yourprivateauthenticationisnotprivate = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-privateauthenticationresponseheaderindication");
                      const _manualshippinglocationupdateresponseindication = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-manualshipinglocationselectionresponseheaderindication");

                      const _cargolocationdestinationheaderindications = document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication');
                      
                      const _cargostatusindication = document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication");

                      const _cargolocationdestinationstatus =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-cargodestinationsetstatusheaderindication");
                      const _shipmentstatusindication = document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-shipmenttypeheaderindication");
                      const _shipmentauthenticationremark =  _cargostatusindication[6];
                      const _shipmentlocationstatus =  _cargostatusindication[7];
                      const _shipmentlatitudestatus = _cargostatusindication[8];
                      const _shipmentlongtitudestatus =  _cargostatusindication[9];
                      const _shipmentslocationsresultindication =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-resultsheaderindication"); 
                      const _shipmentlocationresultsresponseindication =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-resultsresponseheaderindication");

                      if (  _coordinatesfield[0].value === "" || _coordinatesfield[1].value === "" ) {
                        _manualshippinglocationupdateresponseindication[0].style.display = "block";  
                        _yourprivateauthenticationisnotprivate[0].style.display = "none";
                        _cargolocationdestinationheaderindications[9].innerText = `Lon: 0`;
                      } else {
                        
                      locationdestinationcb((coordinates)=> coordinates = {
                      lat: Number(geocoordinatesresult.lat),
                      lng: Number(_lon)
                      })
                      searchmapmarkerreferencecb((coordinates)=> coordinates = {
                      lat: Number(geocoordinatesresult.lat),
                      lng: Number(_lon)
                      })
                      geocoordinatesresultcb((coordinates)=> coordinates = {
                        lat: Number(geocoordinatesresult.lat),
                        lon: Number(_lon) 
                      })
                      
                      geocoordinatesresult.lon = _lon;

                      const center = [Number(geocoordinatesresult.lat), Number(_lon)];

                      const zoom = 17;
                      searchmapreference.setView(center, zoom);

                      _cargolocationdestinationheaderindications[9].innerText = `Lon: ${_lon}`;

                      }

                    }}/>
          </Col>
        </Row>

      </Col>
      
        <p className='purchasingdetails-mapcontainer-configurationscontainer-manualshipinglocationselectionresponseheaderindication'>Fill the latitude and longitude fields first with 1 and 1. Change it accordingly with your latitide and longitide. View and toggle sateliite button to set the the exact location on the Map. Change's can be made by the updating marker.<button className="purchasingdetails-mapcontainer-configurationscontainer-manualshipinglocationselectionresponseheaderindication-satellitebutton"
                                                                                                                                                                                                                                                                                                                                                                                                                                                  onClick={ async ()=> {

                                                                                                                                                                                                                                                                                                                                                                                                                                                    props.manualcargoaddressdestinationloadingindicationcb((status)=> status = true); 
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _coordinatesfield = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-coordinatesfield");

                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _yourprivateauthenticationisnotprivate = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-privateauthenticationresponseheaderindication");
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _manualshippinglocationupdateresponseindication = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-manualshipinglocationselectionresponseheaderindication");
                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _cargolocationdestinationheaderindications = document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication');
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _cargostatusindication = document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication");
                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _cargolocationdestinationstatus =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-cargodestinationsetstatusheaderindication");
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _shipmentstatusindication = document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-shipmenttypeheaderindication");
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _shipmentauthenticationremark =  _cargostatusindication[6];
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _shipmentlocationstatus =  _cargostatusindication[7];
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _shipmentlatitudestatus = _cargostatusindication[8];
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _shipmentlongtitudestatus =  _cargostatusindication[9];
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _shipmentslocationsresultindication =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-resultsheaderindication"); 
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _shipmentlocationresultsresponseindication =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-resultsresponseheaderindication");

                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _lat = _coordinatesfield[0].value;
                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _lon = _coordinatesfield[1].value;

                                                                                                                                                                                                                                                                                                                                                                                                                                                    await axiosCreatedInstance.post("/purchasing/manualcoordinates/cargoaddress", {
                                                                                                                                                                                                                                                                                                                                                                                                                                                      lat: _lat,
                                                                                                                                                                                                                                                                                                                                                                                                                                                      lon: _lon
                                                                                                                                                                                                                                                                                                                                                                                                                                                    }).then((response)=> {

                                                                                                                                                                                                                                                                                                                                                                                                                                                    const _responsedata = response.data;
  
                                                                                                                                                                                                                                                                                                                                                                                                                                                    if ( _responsedata.message === "Success getting location by coordinates" ) {

                                                                                                                                                                                                                                                                                                                                                                                                                                                      _cargolocationdestinationstatus[0].innerText = "Cargo location was set. Cargo type/delivery.";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _cargolocationdestinationstatus[0].style.backgroundColor ="dodgerblue";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _cargolocationdestinationstatus[0].style.color = "white";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _cargolocationdestinationstatus[0].style.borderRadius = "20px";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _cargolocationdestinationstatus[0].style.padding = "5px 15px";
                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentstatusindication[0].innerText ="Manual enter of coordinates for cargo destination address. Public. Location for less charge transaction will vary.";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentstatusindication[0].style.backgroundColor ="dodgerblue";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentstatusindication[0].style.color = "white";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentstatusindication[0].style.borderRadius = "20px";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentstatusindication[0].style.padding = "5px 15px";
                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentauthenticationremark.innerText = `The authentication was ${props.user.authentications.authenticationtype} and location will be detected within the system for cargo less charge transactions.`;
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentauthenticationremark.style.color = "dodgerblue";
                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentlocationstatus.innerText = `Location: ${_responsedata.location.address.road}, ${_responsedata.location.address.neighbourhood}, ${_responsedata.location.address.suburb}, ${_responsedata.location.address.city}, ${_responsedata.location.address.road}, ${_responsedata.location.address.region}, ${_responsedata.location.address.country_code.toUpperCase()}`;
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentlocationstatus.style.color = "dodgerblue";
                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentlatitudestatus.innerText = `Lat: ${locationdestination.lat}`;
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentlongtitudestatus.innerText = `Lon: ${locationdestination.lon}`; 
                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentslocationsresultindication[0].innerText = `Results: ${_responsedata.location.address.road}, ${_responsedata.location.address.neighbourhood}, ${_responsedata.location.address.suburb}, ${_responsedata.location.address.city}, ${_responsedata.location.address.road}, ${_responsedata.location.address.region}, ${_responsedata.location.address.country_code.toUpperCase()}`;
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentslocationsresultindication[0].style.backgroundColor ="green";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentslocationsresultindication[0].style.color = "white";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentslocationsresultindication[0].style.borderRadius = "20px";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentslocationsresultindication[0].style.padding = "5px 15px";
                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentlocationresultsresponseindication[0].innerText = "Location visual was displayed on the map, view and toggle cargo address using the marker.";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _shipmentlocationresultsresponseindication[0].style.color = "violet";
                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _yourprivateauthenticationisnotprivate[0].innerText = "Your location was set as a cargo address. Type: Cargo/Delivery.";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _yourprivateauthenticationisnotprivate[0].style.display = "block";

                                                                                                                                                                                                                                                                                                                                                                                                                                                        props.manualcargoaddressdestinationloadingindicationcb((status)=> status = false); 

                                                                                                                                                                                                                                                                                                                                                                                                                                                      _yourprivateauthenticationisnotprivate[0].style.display = "none";

                                                                                                                                                                                                                                                                                                                                                                                                                                                      _manualshippinglocationupdateresponseindication[1].style.display = "block";

                                                                                                                                                                                                                                                                                                                                                                                                                                                    } else {

                                                                                                                                                                                                                                                                                                                                                                                                                                                      _yourprivateauthenticationisnotprivate[0].style.display = "none";

                                                                                                                                                                                                                                                                                                                                                                                                                                                      _manualshippinglocationupdateresponseindication[1].innerText = `Getting location using manual options got an error response: ${_responsedata}`;        
                                                                                                                                                                                                                                                                                                                                                                                                                                                      _manualshippinglocationupdateresponseindication[1].style.display = "block";
                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                    }                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                    })

                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                  }}>   
                                                                                                                                                                                                                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                                                                                                                                                                                                                    props.manualcargoaddressdestinationloadingindication ? 
                                                                                                                                                                                                                                                                                                                                                                                                                                                    (  
                                                                                                                                                                                                                                                                                                                                                                                                                                                      <Spinner animation="border" variant="info" />                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                    )
                                                                                                                                                                                                                                                                                                                                                                                                                                                    :
                                                                                                                                                                                                                                                                                                                                                                                                                                                    (
                                                                                                                                                                                                                                                                                                                                                                                                                                                      <span>Satellite</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                    )
                                                                                                                                                                                                                                                                                                                                                                                                                                                  }             
                                                                                                                                                                                                                                                                                                                                                                                                                                          </button> 
        </p>

        <p className="purchasingdetails-mapcontainer-configurationscontainer-manualshipinglocationselectionresponseheaderindication">Location was found and the location is already viewable in the map using the manual option preparing the cargo address destination.</p> 

        <p className='purchasingdetails-mapcontainer-configurationscontainer-typeofselectionconfigurationorheaderindication'>OR</p>

        <Col xs={12}
            md={12}
            lg={12}
            id='purchasingdetails-mapcontainer-configurationscontainer-byclickcontainer'>
          <p className='purchasingdetails-mapcontainer-configurationscontainer-typeofselectionconfigurationheaderindication'>03. By satellite</p>
        <button id='purchasingdetails-mapcontainer-configurationscontainer-byclickcontainer-currentcoordinatesbutton'
                onClick={ async (evt)=> {

                  const _bysatellitecargodestinationaddressresponseheaderindication = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-byclicklocationselectionresponseheaderindication");

                  if (navigator.geolocation) {
                    await navigator.geolocation.getCurrentPosition(purchasinggetcurrentposition);
                    _bysatellitecargodestinationaddressresponseheaderindication[0].style.display = "block";
                  } else { 
                    alert('Synced')
                  }
                }}>
          Current coordinates
        </button>
        </Col>

        <p className='purchasingdetails-mapcontainer-configurationscontainer-byclicklocationselectionresponseheaderindication'>Your current location was found and set. You can now view map for location view and set shipping configuration.</p>
        <p className='purchasingdetails-mapcontainer-configurationscontainer-typeofselectionconfigurationorheaderindication'>OR</p>
        <p className='purchasingdetails-mapcontainer-configurationscontainer-typeofselectionconfigurationorheaderindication'>or find your current location via sattelite and adjust cursor for shipping location</p>

    </Row>

    <Row id='purchasingdetails-mapcontainer-maptile'>
      <Col xs={4}
            md={3}
            lg={3}
            id='purchasingdetails-mapcontainer-maptile-addresscontainer'>
        <button id='purchasingdetails-mapcontainer-maptile-addresscontainer-setascargodestnationaddressbutton'
                onClick={(evt)=> {

                  const _cargodestiantionstatus = document.querySelector(".purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication purchasingdetails-mapcontainer-maptile-addresscontainer-cargodestinationsetstatusheaderindication");

                  alert(_cargodestiantionstatus.innerText);

                  const _lesschargetransactions = operations.find((location)=> location.street === props.user.details.location.address.street &&  location.baranggay === props.user.details.location.address.baranggay && location.trademark === props.user.details.location.address.trademark  && location.city === props.user.details.location.address.city && location.province === props.user.details.location.address.province  && location.country === props.user.details.location.address.country);
                  const _cargolocationdestinationheaderindications = document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication');
                  const _cargolocationdestinationspanheaderindication = document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[2];

                  if ( _lesschargetransactions === undefined ) { 
                    props.purchaseauthenticationcb((location)=> location = {
                      authentication: 'Standard',
                      destinationadddress: {
                        street: props.user.details.location.address.street,
                        baranggay: props.user.details.location.address.street,
                        trademark: props.user.details.location.address.street,
                        province: props.user.details.location.address.street,
                        city: props.user.details.location.address.street,
                        country: props.user.details.location.address.street
                      }
                    })
                    
                  } else { 

                    props.purchaseauthenticationcb((location)=> location = {
                      authentication: 'Less charge transaction',
                      destinationadddress: {
                        street: props.user.details.location.address.street,
                        baranggay: props.user.details.location.address.street,
                        trademark: props.user.details.location.address.street,
                        province: props.user.details.location.address.street,
                        city: props.user.details.location.address.street,
                        country: props.user.details.location.address.street,
                        coordinates: {
                          lat: 0,
                          lon: 0
                        }
                      }
                    })

                    _cargolocationdestinationspanheaderindication.innerText = 'Default address was set as cargo destination';
                    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[3].innerText = 'Shipment: Cargo type/Door to door';
                    _cargolocationdestinationheaderindications[4].innerText = 'Default address is set to as cargo destination';
                    _cargolocationdestinationheaderindications[7].innerText = `Location: ${props.user.details.location.address.street}, ${props.user.details.location.address.baranggay}, ${props.user.details.location.address.trademark}, ${props.user.details.location.address.province}, ${props.user.details.location.address.city}, ${props.user.details.location.address.country}/Given address`;
                    _cargolocationdestinationheaderindications[8].innerText = `Lat: ${props.user.details.location.address.coordinates.lat}`;
                    _cargolocationdestinationheaderindications[9].innerText = `Lon: ${props.user.details.location.address.coordinates.lon}`;
                    document.querySelector('.purchasingdetails-mapcontainer-maptile-addresscontainer-resultsspanheaderindication').innerText = `${props.user.details.location.address.street}, ${props.user.details.location.address.baranggay}, ${props.user.details.location.address.trademark}, ${props.user.details.location.address.province}, ${props.user.details.location.address.city}, ${props.user.details.location.address.country}`;
                    _cargolocationdestinationspanheaderindication.classList.add('purchasingdetails-mapcontainer-maptile-addresscontainer-cargostatusheaderindication');

                    const _purchasingmrntotalproductweight = props.allmrnselectedproduct.reduce((previousValue, currentValue)=> previousValue + currentValue.details.weight,0);

                //    switch (true) {
                //   case _purchasingmrntotalproductweight === 0: 
                //       props.totaldeliveryfeecb((totalweight)=> totalweight = 0);
              //       break;
              //       case _purchasingmrntotalproductweight <= 1000:
              //         props.totaldeliveryfeecb((totalweight)=> totalweight =  100);
              //       break;
              //        case _purchasingmrntotalproductweight > 1000 && _purchasingmrntotalproductweight <= 2000:
              //          props.totaldeliveryfeecb((totalweight)=> totalweight = 200);
              //        break;
              //        case _purchasingmrntotalproductweight > 2000 && _purchasingmrntotalproductweight <= 3000:
              //          props.totaldeliveryfeecb((totalweight)=> totalweight = 300);
              //        break;
              //       case _purchasingmrntotalproductweight > 3000 && _purchasingmrntotalproductweight <= 4000:
              //         props.totaldeliveryfeecb((totalweight)=> totalweight = 400);
              //       break;
              //       case _purchasingmrntotalproductweight > 4000 && _purchasingmrntotalproductweight <= 5000:
              //         props.totaldeliveryfeecb((totalweight)=> totalweight = 500);
              //       break;
              //       case _purchasingmrntotalproductweight > 5000 && _purchasingmrntotalproductweight <= 6000:
              //         props.totaldeliveryfeecb((totalweight)=> totalweight = 600);
                //      break;
                //      case _purchasingmrntotalproductweight > 6000 && _purchasingmrntotalproductweight <= 7000:
                //        props.totaldeliveryfeecb((totalweight)=> totalweight = 700);
                //     break;
                  //    case _purchasingmrntotalproductweight > 8000 && _purchasingmrntotalproductweight <= 9000:
              //         props.totaldeliveryfeecb((totalweight)=> totalweight = 800);
              //       break;
              //       case _purchasingmrntotalproductweight > 9000 && _purchasingmrntotalproductweight <= 10000:
              //         props.totaldeliveryfeecb((totalweight)=> totalweight = 900);
              //       break;
                ///      break;
                //     case _purchasingmrntotalproductweight === 10000:
                //       props.totaldeliveryfeecb((totalweight)=> totalweight = 10000);
                //     break;
                //     break;
                  //    case _purchasingmrntotalproductweight > 10000:
                  //      props.totaldeliveryfeecb((totalweight)=> totalweight = 0);
                  //    break;
            //        }
                
                    //props.totalmerchandisepricecb((totalpurchasingpayment)=> totalpurchasingpayment = props.allselectedproduct.data.reduce((purchasing, purchases)=> purchasing + purchases.pricesbreakdown.price,0))

                  //alert(JSON.stringify(_lesschargetransactions))
                  //alert(JSON.stringify(props.user.details.location.address))
                  //alert(JSON.stringify(operations))

                  }

                }}>
          USE WHAT LOCATION I GAVE AS MY CARGO, SHIPPING, OR DELIVERY ADDRESS
        </button>
        <br />
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'></p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>Status: <span className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication purchasingdetails-mapcontainer-maptile-addresscontainer-cargodestinationsetstatusheaderindication'>CARGO DESTINATION UNSET</span></p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>Shipment: <span className="purchasingdetails-mapcontainer-maptile-addresscontainer-shipmenttypeheaderindication">Cargo type/Delivery</span></p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>For shipment address will have a remark if it was set using default authentication address or configured address</p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'></p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>The authenticaion was public and location for cargo was within less charge transactions.</p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>Location: Search location on map</p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>Lat: {geocoordinatesresult.lat}</p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>Lon: {geocoordinatesresult.lon}</p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-resultsheaderindication'>Results: <span className='purchasingdetails-mapcontainer-maptile-addresscontainer-resultsspanheaderindication'></span></p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-resultsresponseheaderindication'>Response: <span className='purchasingdetails-mapcontainer-maptile-addresscontainer-resultsresponsespanheaderindication'></span></p>
        <p className="purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication">Marker location: Latitude: {geocoordinatesresult.lat}, Longitude: {geocoordinatesresult.lon} </p>
        <p className="purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication">Cargo destination: <span className="purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication-cargodestinationheaderindication">Cargo destination address here, Complete address </span> <input className="purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication-cargodestinationinputfield" type="text" placeholder="Type your cargo destination address here"/></p>
        <button id='purchasingdetails-mapcontainer-maptile-addresscontainer-setascargodestnationaddressbutton'
                onClick={(evt)=> {

                  const _cargodestinationaddressheaderindication =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication-cargodestinationheaderindication");
                  const _cargodestinationaddressinputfield = document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication-cargodestinationinputfield");
                  
                  _cargodestinationaddressheaderindication[0].style.display = "none";
                  _cargodestinationaddressinputfield[0].style.display = "block";

                  props.purchasingcargodestinationcb((locationaddress)=> locationaddress = ",,,,,");
                  props.purchasingcargoaddresssetcb((state)=> state = false);


                }}>
          Update cargo destination address
        </button>
        <br />
        <button id='purchasingdetails-mapcontainer-maptile-addresscontainer-setascargodestnationaddressbutton'
                onClick={(evt)=> {

              //   setascargodestinationloadingindicationcb((loadingindication)=> loadingindication = true);

                  const _cargodestinationaddressheaderindication =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication-cargodestinationheaderindication");
                  const _cargodestinationaddressinputfield = document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication-cargodestinationinputfield");
                  
                  if ( _cargodestinationaddressinputfield[0].value === "" ) {

                    _cargodestinationaddressheaderindication[0].innerText =  "Cargo destination address here, Complete address";
                    _cargodestinationaddressheaderindication[0].style.display = "block";
                    _cargodestinationaddressinputfield[0].style.display = "none";

                  } else {

                  _cargodestinationaddressheaderindication[0].innerText =  _cargodestinationaddressinputfield[0].value;
                  _cargodestinationaddressheaderindication[0].style.display = "block";
                  _cargodestinationaddressinputfield[0].style.display = "none";

                  
                  props.purchasingcargodestinationcb((locationaddress)=> locationaddress = _cargodestinationaddressinputfield[0].value);
                  props.purchasingcargoaddresssetcb((state)=> state = true);

                  alert(props.purchasingcargodestination);


                  }

                  const _yourprivateauthenticationisnotprivate = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-privateauthenticationresponseheaderindication");
                  const _manualshippinglocationupdateresponseindication = document.querySelectorAll(".purchasingdetails-mapcontainer-configurationscontainer-manualshipinglocationselectionresponseheaderindication");

                  const _cargolocationdestinationheaderindications = document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication');
                  
                  const _cargostatusindication = document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication");

                  const _cargolocationdestinationstatus =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-cargodestinationsetstatusheaderindication");
                  const _shipmentstatusindication = document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-shipmenttypeheaderindication");
                  const _shipmentauthenticationremark =  _cargostatusindication[6];
                  const _shipmentlocationstatus =  _cargostatusindication[7];
                  const _shipmentlatitudestatus = _cargostatusindication[8];
                  const _shipmentlongtitudestatus =  _cargostatusindication[9];
                  const _shipmentslocationsresultindication =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-resultsheaderindication"); 
                  const _shipmentlocationresultsresponseindication =  document.querySelectorAll(".purchasingdetails-mapcontainer-maptile-addresscontainer-resultsresponseheaderindication");

                  if ( props.user.authentications.authenticationtype === "Private") {

          //           _cargolocationdestinationstatus[0].innerText = "Cargo location was set. Cargo type/delivery.";
          //           _cargolocationdestinationstatus[0].style.backgroundColor ="dodgerblue";
          //           _cargolocationdestinationstatus[0].style.color = "white";
          //           _cargolocationdestinationstatus[0].style.borderRadius = "20px";
          //           _cargolocationdestinationstatus[0].style.padding = "5px 15px";

          //           _shipmentstatusindication[0].innerText ="Private. Less charge transactions.";
          //           _shipmentstatusindication[0].style.backgroundColor ="dodgerblue";
          //           _shipmentstatusindication[0].style.color = "white";
          //           _shipmentstatusindication[0].style.borderRadius = "20px";
          //           _shipmentstatusindication[0].style.padding = "5px 15px";

          //           _shipmentauthenticationremark.innerText = `The authentication was ${props.user.authentications.authenticationtype} and location for cargo was within less charge transactions.`;
          //           _shipmentauthenticationremark.style.color = "dodgerblue//";

                  //   _shipmentlocationstatus.innerText = `Location: ${_privateauthenticationlocation.street}, ${_privateauthenticationlocation.baranggay}, ${_privateauthenticationlocation.city}, ${_privateauthenticationlocation.province}, ${_privateauthenticationlocation.country}`;
          //            _shipmentlocationstatus.style.color = "dodgerblue";

        //             _shipmentlatitudestatus.innerText = `Lat: ${locationdestination.lat}`;
        //             _shipmentlongtitudestatus.innerText = `Lon: ${locationdestination.lon}`; 

                  //    _shipmentslocationsresultindication[0].innerText = `Results: ${_privateauthenticationlocation.street}, ${_privateauthenticationlocation.baranggay}, ${_privateauthenticationlocation.city}, ${_privateauthenticationlocation.province}, ${_privateauthenticationlocation.country}`;
        //             _shipmentslocationsresultindication[0].style.backgroundColor ="green";
          //            _shipmentslocationsresultindication[0].style.color = "white";
          //            _shipmentslocationsresultindication[0].style.borderRadius = "20px";
          //            _shipmentslocationsresultindication[0].style.padding = "5px 15px";

          //            _shipmentlocationresultsresponseindication[0].innerText = "Location is already had a visual on the map, view.";
          //            _shipmentlocationresultsresponseindication[0].style.color = "violet";

                  //    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[2].innerText = `Set/${cargotype}`;
                  //    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[2].classList.add('purchasingdetails-mapcontainer-maptile-addresscontainer-cargostatusheaderindication');
                  //    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[3].innerText = 'Shipment: Cargo type/Door to door'
                //     props.cargodestinationsetcb((location)=> location = true);

                    } else if ( props.user.authentications.authenticationtype === "Common public" ) {

                      _cargolocationdestinationstatus[0].innerText = "Cargo location was set. Cargo type/delivery.";
                      _cargolocationdestinationstatus[0].style.backgroundColor ="dodgerblue";
                      _cargolocationdestinationstatus[0].style.color = "white";
                      _cargolocationdestinationstatus[0].style.borderRadius = "20px";
                      _cargolocationdestinationstatus[0].style.padding = "5px 15px";

                      _shipmentstatusindication[0].innerText ="Private. Less charge transactions.";
                      _shipmentstatusindication[0].style.backgroundColor ="dodgerblue";
                      _shipmentstatusindication[0].style.color = "white";
                      _shipmentstatusindication[0].style.borderRadius = "20px";
                      _shipmentstatusindication[0].style.padding = "5px 15px";

                      _shipmentauthenticationremark.innerText = `The authentication was ${props.user.authentications.authenticationtype} and location for cargo was within less charge transactions.`;
                      _shipmentauthenticationremark.style.color = "dodgerblue";

                  //    _shipmentlocationstatus.innerText = `Location: ${_privateauthenticationlocation.street}, ${_privateauthenticationlocation.baranggay}, ${_privateauthenticationlocation.city}, ${_privateauthenticationlocation.province}, ${_privateauthenticationlocation.country}`;
                      _shipmentlocationstatus.style.color = "dodgerblue";

                      _shipmentlatitudestatus.innerText = `Lat: ${locationdestination.lat}`;
                      _shipmentlongtitudestatus.innerText = `Lon: ${locationdestination.lon}`; 

                  //   _shipmentslocationsresultindication[0].innerText = `Results: ${_privateauthenticationlocation.street}, ${_privateauthenticationlocation.baranggay}, ${_privateauthenticationlocation.city}, ${_privateauthenticationlocation.province}, ${_privateauthenticationlocation.country}`;
                      _shipmentslocationsresultindication[0].style.backgroundColor ="green";
                      _shipmentslocationsresultindication[0].style.color = "white";
                      _shipmentslocationsresultindication[0].style.borderRadius = "20px";
                      _shipmentslocationsresultindication[0].style.padding = "5px 15px";

                      _shipmentlocationresultsresponseindication[0].innerText = "Location is already had a visual on the map, view.";
                      _shipmentlocationresultsresponseindication[0].style.color = "violet";
                  //    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[2].innerText = `Set/Delivery type/Cargo`;
                  //    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[2].classList.add('purchasingdetails-mapcontainer-maptile-addresscontainer-cargostatusheaderindication');
                  //    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[3].innerText = 'Shipment: Cargo type/Delivery'
                  //    props.cargodestinationsetcb((location)=> location = true);

                    } else {

                      _cargolocationdestinationstatus[0].innerText = "Cargo location was set. Cargo type/delivery.";
                      _cargolocationdestinationstatus[0].style.backgroundColor ="dodgerblue";
                      _cargolocationdestinationstatus[0].style.color = "white";
                      _cargolocationdestinationstatus[0].style.borderRadius = "20px";
                      _cargolocationdestinationstatus[0].style.padding = "5px 15px";

                      _shipmentstatusindication[0].innerText ="Private. Less charge transactions.";
                      _shipmentstatusindication[0].style.backgroundColor ="dodgerblue";
                      _shipmentstatusindication[0].style.color = "white";
                      _shipmentstatusindication[0].style.borderRadius = "20px";
                      _shipmentstatusindication[0].style.padding = "5px 15px";

                      _shipmentauthenticationremark.innerText = `The authentication was ${props.user.authentications.authenticationtype} and location for cargo was within less charge transactions.`;
                      _shipmentauthenticationremark.style.color = "dodgerblue";

                  //    _shipmentlocationstatus.innerText = `Location: ${_privateauthenticationlocation.street}, ${_privateauthenticationlocation.baranggay}, ${_privateauthenticationlocation.city}, ${_privateauthenticationlocation.province}, ${_privateauthenticationlocation.country}`;
                      _shipmentlocationstatus.style.color = "dodgerblue";

                      _shipmentlatitudestatus.innerText = `Lat: ${locationdestination.lat}`;
                      _shipmentlongtitudestatus.innerText = `Lon: ${locationdestination.lon}`; 

                  //   _shipmentslocationsresultindication[0].innerText = `Results: ${_privateauthenticationlocation.street}, ${_privateauthenticationlocation.baranggay}, ${_privateauthenticationlocation.city}, ${_privateauthenticationlocation.province}, ${_privateauthenticationlocation.country}`;
                      _shipmentslocationsresultindication[0].style.backgroundColor ="green";
                      _shipmentslocationsresultindication[0].style.color = "white";
                      _shipmentslocationsresultindication[0].style.borderRadius = "20px";
                      _shipmentslocationsresultindication[0].style.padding = "5px 15px";

                      _shipmentlocationresultsresponseindication[0].innerText = "Location is already had a visual on the map, view.";
                      _shipmentlocationresultsresponseindication[0].style.color = "violet";
                  //    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[2].innerText = `Set/Delivery type/Cargo`;
                  //    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[2].classList.add('purchasingdetails-mapcontainer-maptile-addresscontainer-cargostatusheaderindication');
                  //    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[3].innerText = 'Shipment: Cargo type/Delivery'
                  //    props.cargodestinationsetcb((location)=> location = true)
                  }
                  

                }}>
        
          {
            props.setascargodestinationloadingindication ? 
            (
              <Spinner animation="border" variant="secondary" />
            )
            :
            (
            <span>Set as my cargo destination</span>
            )
          }

        </button>

        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'></p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'></p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>Fee's:</p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>All non-mrn orders within less charge transaction's place's had 0 fee for cargo type handling service's:</p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>All mrn orders within less charge transaction's place's had 100 pesos fee for more than 10 kilo cargo type handling service's:</p>
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>Standard fee: 100 peso's per kilo to non-mrn and mrn purchases:</p>         
        <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>Set express location</p>

      </Col>
      <Col xs={9}
            md={9}
            lg={9}
            id='purchasingdetails-mapcontainer-maptile-searchcontainer'>
        <MapContainer center={locationdestination} 
                      zoom={17} 
                      style={{height:'100%', width: '100%'}}
                      scrollWheelZoom={false}
                      zoomControl={false}
                      scrollWheelZoom={false}
                      doubleClickZoom={false}
                      touchZoom={false}
                      boxZoom={false}
                      ref={searchmapreferencecb}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

          <LocationMarker searchmapmarkerreference={searchmapmarkerreference}
                          searchmapmarkerreferencecb={searchmapmarkerreferencecb}
                          locationdestination={locationdestination}
                          locationdestinationcb={locationdestinationcb}
                          geocoordinatesresult={geocoordinatesresult}
                          geocoordinatesresultcb={geocoordinatesresultcb}
                          cargotypecb={cargotypecb}/>

        </MapContainer>
      </Col>
    </Row>

  </Col>

  <Col xs={12}
        md={12}
        lg={12}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-tagcontainer'>

    {
    props.purchasing.map((merchandise, merchandiseidx)=> {
        return (
          <Row className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag'>
            <Col xs={12}
                md={12}
                lg={12}
                className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productindexcontainer'>
              <h2 className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productindexheaderindication'>
                0{merchandiseidx + 1}.
              </h2>
            </Col>
            <Col xs={12}
                md={6}
                lg={6}
                className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer'>
              <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailslayoutcontainer'>
                <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsheaderindication'>
                Product name: {merchandise.details.product.name}
                </p>
                <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsheaderindication'>
                Category: {merchandise.details.product.category}
                </p>
                <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsheaderindication'>
                Product: {
                  merchandise.details.product.specification.set ? 
                  (
                    <span>{merchandise.details.product.specification.set.productindication}</span>
                  )
                  : 
                  (
                    <span>Set</span>
                  )
                }
                </p>
                <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsheaderindication'>
                Product purchase pieces: Equal or more than to {merchandise.details.product.specification.set.pcs}
                </p>
                <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsheaderindication'>
                Per {merchandise.details.product.specification.set.pcs} pcs: {merchandise.details.product.pricesbreakdown.price} peso's equal to {merchandise.details.product.pricesbreakdown.price / merchandise.details.product.specification.set.pcs} peso/peso's. Promo price's are for commoner's and civilian's, bulk wholesale price's only implifie's to store's.
                </p>
                <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsheaderindication'>
                  Total type's of this product selected: {props.selectedproductarray.length}
                </p>
                <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsheaderindication'>
                  Total pcs: 0
                </p>
                <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsheaderindication'>
                  Total weight: 0 grams
                </p>
                <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsheaderindication'>
                  Needs: Total of 0 peso's
                </p>
                <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsheaderindication'>
                  This cargo or shipment or delivery current fee: Total of 0 peso's
                </p>
              </Col>
            </Col>
            <Col xs={12}
                md={6}
                lg={6}
                className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productselectionontainer'>
            <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailslayoutcontainer'>
                <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsheaderindication'>
                Selections
                </p>
                <Row className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsgridcontainer'>
                  {
                    merchandise.system.stocks.map((stocks, stocksidx)=> {
                    return (
                        <Col xs={4}
                            md={3}
                            lg={3}
                            className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productselectionimagescontainer'>
                
                        <img src={stocks.details.product.cybervisual.images.maindisplayimage}
                            key={stocksidx}
                            className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productselectionimage'
                            alt='Xirbit-ProductImage' 
                            onClick={ async (evt)=> {

                              const _selectedproductdetailsmodal = document.querySelectorAll('.purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductdetailscontainer');
                              const _selectedproductdetailsmodalorderpcsfield = document.querySelectorAll(".purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductpcsindication");
                              const _selectedproductdetailsmodalorderspecificationfield = document.querySelectorAll("purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductorderspecificationindication");
                  
                              await props.selectedproductcb((selectedproduct)=> selectedproduct = stocks);

                              const _selectedproduct = await props.selectedproductarray.find((data)=> data.authentications.productid === stocks.authentications.productid);

                              if (  _selectedproduct === undefined ) {

                                await props.selectedproductarray.push(
                                  {
                                  productname: stocks.productname,
                                  rapportname: stocks.rapportname,
                                  definition: stocks.definition,
                                  authentications: {
                                    producttype: stocks.authentications.producttype,
                                    productid: stocks.authentications.productid
                                  },
                                  details: {
                                      product: {
                                        name: stocks.details.product.name,
                                        rapportname: stocks.details.product.rapportname,
                                        definition: stocks.details.product.definition,
                                        category: stocks.details.product.category,
                                        specification: {
                                        for: {
                                        part: stocks.details.product.specification.part,
                                        gender: stocks.details.product.specification.gender,
                                        category: stocks.details.product.specification.category 
                                        },
                                        set: {
                                          set: stocks.details.product.specification.set.set,
                                          productindication: stocks.details.product.specification.set.productindication,
                                          pcs: stocks.details.product.specification.set.pcs
                                        },
                                        size: stocks.details.product.specification.size,
                                        color: stocks.details.product.specification.color,
                                        weight: stocks.details.product.specification.weight,
                                        top: stocks.details.product.specification.top,
                                        left: stocks.details.product.specification.left,
                                        bottom: stocks.details.product.specification.bottom,
                                        right: stocks.details.product.specification.right,
                                        front: stocks.details.product.specification.front,
                                        back: stocks.details.product.specification.back
                                        },
                                        pricesbreakdown: {
                                          price: stocks.details.product.pricesbreakdown.price,
                                          capital: stocks.details.product.pricesbreakdown.capital,
                                          suggested_retail_price: stocks.details.product.pricesbreakdown.suggested_retail_price,
                                          vat: stocks.details.product.pricesbreakdown.vat
                                      },
                                      cybervisual: {
                                          images: {
                                            maindisplayimage: stocks.details.product.cybervisual.images.maindisplayimage,
                                            maindisplayimages: stocks.details.product.cybervisual.images.maindisplayimages
                                          },
                                          videos: stocks.details.product.cybervisual.videos
                                      },
                                      },
                                      locations: {
                                      operations: stocks.details.locations.operations
                                      }
                                  },
                                  system: {
                                  request: {
                                      pcs: 0,
                                      orderspecification: "",
                                      merchandise: {
                                        price: stocks.system.request.merchandise.price,
                                        capital: stocks.system.request.merchandise.capital,
                                        suggested_retail_price: stocks.system.request.merchandise.suggested_retail_price,
                                        vat: stocks.system.request.merchandise.vat,
                                        },
                                      shipping: {
                                      category:  stocks.system.request.category,
                                      weight:  stocks.system.request.weight,
                                      fee:  stocks.system.request.fee
                                      },
                                      totalpayment: {
                                        price: stocks.system.request.totalpayment.price
                                      },
                                      product: stocks.system.request.product,
                                  },
                                  stocks: stocks.system.stocks,
                                  purchase: {
                                      people: stocks.system.purchase.people,
                                      xirbit: stocks.system.purchase.xirbit
                                  }
                                  }
                                })

                                _selectedproductdetailsmodalorderpcsfield[0].value = 0;
                                _selectedproductdetailsmodalorderspecificationfield.value = "";

                              } else {

                                _selectedproductdetailsmodalorderpcsfield[0].value = _selectedproduct.system.request.pcs;
                                _selectedproductdetailsmodalorderspecificationfield.value = _selectedproduct.system.request.orderspecification;

                              }

                              _selectedproductdetailsmodal[merchandiseidx].style.display = 'block';

                              // console.log(stocks);
                              // console.log(selectedproduct);
                              console.log(props.selectedproductarray);
                              // console.log(_selectedproduct);

                            }}
                        />


                        </Col>                
                    )
                    })
                  }
                <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductdetailscontainer'>
                  <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailscontainer'>
                    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                    Product id: {props.selectedproduct.authentications.productid}
                    </p>
                    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                    Product part: {props.selectedproduct.details.product.specification.part}
                    </p>
                    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                      Weight:  {props.selectedproduct.details.product.specification.weight}
                    </p>
                    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                      Color: {props.selectedproduct.details.product.specification.color}
                    </p>
                    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                      Size: {props.selectedproduct.details.product.specification.size}
                    </p>
                    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                      Top: {props.selectedproduct.details.product.specification.top}
                    </p>
                    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                      Left: {props.selectedproduct.details.product.specification.left}
                    </p>
                    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                      Bottom: {props.selectedproduct.details.product.specification.bottom}
                    </p>
                    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                      Right: {props.selectedproduct.details.product.specification.right}
                    </p>
                  <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductdisplayimagescontainer'>
                    {
                    props.selectedproduct.length === 0 ? 
                    (
                      <p></p>
                    )
                    :
                    (
                      <React.Fragment>
                        {
                          props.selectedproduct.details.product.cybervisual.images.maindisplayimages.map((displayimage, displayimagesidx)=> {
                            return (
                              <img className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductdisplayimage'
                                  src={displayimage.displayimage}
                                  alt='Xirbit-ProductImage'/>
                            )
                          })
                        }
                      </React.Fragment>
                    )
                    }
                  </Col>
                  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>Purchase</p>
                    <input type='number'
                          className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductpcsindication'
                          placeholder='0'
                          onChange={ async (evt)=> {

                            const _inputfield = evt.target;
                            const _inputfieldvalue = evt.target.value;
                            const _productspecificationcontainer = _inputfield.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                            const _productdetailscontainer =  _productspecificationcontainer.children[1];
                            const _productspecificationlayoutcontainer = _productdetailscontainer.children[0];
                            const _specificproductpurchasetotalpcs = _productspecificationlayoutcontainer.children[6];
                            const _specificproductpurchasetotalweight = _productspecificationlayoutcontainer.children[7];
                            const _needstotalpayment = _productspecificationlayoutcontainer.children[8];
                            const _partialcargofee = _productspecificationlayoutcontainer.children[9];
                            const _getdigitsfromneedstotalpayment = _specificproductpurchasetotalpcs.innerText.match(/(\d+)/);

                            const _selectedproduct = await props.selectedproductarray.find((data)=> data.authentications.productid === props.selectedproduct.authentications.productid);

                            _selectedproduct.system.request.pcs = _inputfieldvalue;

                            const _selectedproducttotalweight = _selectedproduct.details.product.specification.weight;
                            const _selectedproductparsedtotalweight = _selectedproducttotalweight * _inputfieldvalue;
                            const _selectedproducttotalweightfirstdigit = _selectedproductparsedtotalweight.toString().charAt(0);

                            const _selectedproducttotalprice = _inputfieldvalue * _selectedproduct.details.product.pricesbreakdown.price;
                            const _selectedproducttotalcapital = _inputfieldvalue * _selectedproduct.details.product.pricesbreakdown.capital;
                            const _selectedprodicttotalsrp = _inputfieldvalue * _selectedproduct.details.product.pricesbreakdown.suggested_retail_price;
                            const _selectedproducttotalvat = _inputfieldvalue * _selectedproduct.details.product.pricesbreakdown.vat;

                            const _cargofee = await getCargoFee(Number(_selectedproductparsedtotalweight));

                            _selectedproduct.system.request.merchandise.price = Number(_cargofee);
                            _selectedproduct.system.request.merchandise.capital = Number(_selectedproducttotalcapital);
                            _selectedproduct.system.request.merchandise.suggested_retail_price = Number(_selectedprodicttotalsrp);
                            _selectedproduct.system.request.merchandise.vat = Number(_selectedproducttotalvat);
                        
                            _selectedproduct.system.request.shipping.weight = Number(_selectedproductparsedtotalweight);
                            _selectedproduct.system.request.shipping.fee = Number(_cargofee);

                            _selectedproduct.system.request.totalpayment = Number( _selectedproducttotalprice) + Number(_cargofee);
  
                            const _purchsaingtotalmerhandiseprice =  props.selectedproductarray.reduce((accumulator, item)=> { return accumulator + item.details.product.pricesbreakdown.price; }, 0)
                            const _purchasingtotalmerchandisecargofee = props.selectedproductarray.reduce((accumulator, item)=> { return accumulator + item.system.request.shipping.fee; }, 0);
                            const _purchasingtotalweight = props.selectedproductarray.reduce((accumulator, item)=> { return accumulator + item.system.request.shipping.weight; }, 0);
                            const _purchasingtotalmrnnonmrnpcs = props.selectedproductarray.reduce((accumulator, item)=> { return accumulator + item.system.request.pcs; }, 0);
                            
                            const _totalmrnproducts = props.selectedproductarray.filter((products)=> products.details.product.category === "MRN");
                            const _totalnonmrnproducts = props.selectedproductarray.filter((products)=> products.details.product.category === "NONMRN");
                            const _totalmrnproductstotalweight = _totalmrnproducts.reduce((accumulator, item)=> { return accumulator + item.system.request.shipping.weight; }, 0);
                            const _totalnonmrnproductstotalweight = _totalnonmrnproducts.reduce((accumulator, item)=> { return accumulator + item.system.request.shipping.weight; }, 0);

                            props.purchasingtotalmrnproductscb((totalweight)=> totalweight =  _totalmrnproducts);
                            props.purchasingmrnproductstotalweightcb((totalweight)=> totalweight =  _totalmrnproductstotalweight);
                            props.purchasingtotalnonmrnproductscb((totalweight)=> totalweight =  _totalnonmrnproducts);
                            props.purchasingnonmrnproductstotalweightcb((totalweight)=> totalweight =  _totalnonmrnproductstotalweight);
                            
                            props.purchasingtotalmerchandisepaymentcb((amount)=> amount = Number(_purchsaingtotalmerhandiseprice));
                            props.purchasingtotalweightcb((amount)=> amount = Number(_purchasingtotalweight));
                            props.purchasingtotalcargofeecb((amount)=> amount = Number(_purchasingtotalmerchandisecargofee));
                            props.purchasigtotalpaymentcb((amount)=> amount = Number(_purchsaingtotalmerhandiseprice) + Number(_purchasingtotalmerchandisecargofee) );
                            
                            props.selectedproductarraylengthcb((datapcs)=> datapcs =  _purchasingtotalmrnnonmrnpcs);

                            _specificproductpurchasetotalpcs.innerText = `Total pcs: ${_inputfieldvalue}`;
                            _specificproductpurchasetotalweight.innerText = `Total weight: ${ _selectedproductparsedtotalweight} grams`;
                            _needstotalpayment.innerText = `Needs: Total of ${_selectedproducttotalprice} pesos`;
                            _partialcargofee.innerText = `This cargo or shipment or delivery current fee: Total of ${_cargofee} pesos`;
                      
                            // alert(purchasingtotalmrnproducts.length);
                          //  alert(purchasingtotalnonmrnproducts);
                          //  alert(selectedproductarraylength);

                            //alert(_selectedproducttotalprice)
                            // alert(_selectedproducttotalcapital)
                            // alert(_selectedprodicttotalsrp)
                            // alert(_selectedproducttotalvat)

                        //    alert(_selectedproductparsedtotalweight);
                          //   alert(typeof _selectedproductparsedtotalweight);

                            console.log(_selectedproduct);
                            console.log(props.selectedproductarray);

                            componentupdate();

                      //       const _productspecification = merchandise.system.request.product.find((product)=> product.details.category === merchandise.details.product.specification.category && product.details.color === merchandise.details.product.specification.color && product.details.size === merchandise.details.product.specification.size);
                      //       const _requestproductspecificationidx = merchandise.system.request.product.findIndex((product)=> product.details.for.gender === merchandise.details.product.specification.for.gender  && product.details.category === merchandise.details.product.specification.category && product.details.color === merchandise.details.product.specification.color && product.details.size === merchandise.details.product.specification.size);
                      //       const _orderspecification = document.querySelectorAll('.purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductorderspecificationindication');
                            
                    //        const _inputfield = evt.target;
                    //        const _productspecificationcontainer = _inputfield.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                    //        const _productdetailscontainer =  _productspecificationcontainer.children[1];
                    //        const _productspecificationlayoutcontainer = _productdetailscontainer.children[0];
                    //        const _specificproductpurchasetotalpcs = _productspecificationlayoutcontainer.children[5];
                    //        const _specificproductpurchasetotalweight = _productspecificationlayoutcontainer.children[6];
                    //        const _needstotalpayment = _productspecificationlayoutcontainer.children[7];
                    //        const _getdigitsfromneedstotalpayment = _specificproductpurchasetotalpcs.innerText.match(/(\d+)/);

                    //        const _firstfieldcharacter = _inputfieldvalue.charAt(0);
                    //        evt.target.value = parseInt( _inputfieldvalue, 10);

                    //        const selecteddata =  {
                    //          category: selectedproduct.details.product.category,
                    //          pcs: 0,
                    //          details: {
                    //           for: {
                    //             part: selectedproduct.details.product.specification.for.part,
                    //             gender: selectedproduct.details.product.specification.for.gender,
                    //             category: selectedproduct.details.product.specification.for.category
                    //           },
                    //           set: {
                    //            set: selectedproduct.details.product.specification.set.set,
                    //            productindication: selectedproduct.details.product.specification.set.productindication,
                    //            pcs: selectedproduct.details.product.specification.set.pcs,
                    //           },
                    //           size: selectedproduct.details.product.specification.size,
                    //           color: selectedproduct.details.product.specification.color,
                    //           weight: selectedproduct.details.product.specification.weight,
                    //           top: selectedproduct.details.product.specification.top,
                    //           left: selectedproduct.details.product.specification.left,
                    //           bottom: selectedproduct.details.product.specification.bottom,
                    //           right: selectedproduct.details.product.specification.right,
                    //           front: selectedproduct.details.product.specification.front,
                    //           back: selectedproduct.details.product.specification.back
                    //          },
                    //          pricesbreakdown: {
                    //          price: selectedproduct.details.product.pricesbreakdown.price,
                  //             capital: selectedproduct.details.product.pricesbreakdown.capital,
                    //            suggested_retail_price: selectedproduct.details.product.pricesbreakdown.suggested_retail_price,
                    //            vat: selectedproduct.details.product.pricesbreakdown.vat
                    //           },
                  //             specification: _orderspecification[merchandiseidx].value
                  //          }

                  //          const data =  {
                  //             category: selectedproduct.details.product.category,
                  //             pcs: Number(parseInt(evt.target.value,10)),
                  //            details: {
                  //             for: {
                  //              part: selectedproduct.details.product.specification.for.part,
                  //              gender: selectedproduct.details.product.specification.for.gender,
                  //              category: selectedproduct.details.product.specification.for.category
                  //              },
                  //              set: {
                  //               set: selectedproduct.details.product.specification.set.set,
                  //               productindication: selectedproduct.details.product.specification.set.productindication,
                  //              pcs: selectedproduct.details.product.specification.set.pcs,
                  //             },
                  //             size: selectedproduct.details.product.specification.size,
                  //             color: selectedproduct.details.product.specification.color,
                  //             weight: Number(merchandise.details.product.specification.weight) * Number(parseInt(evt.target.value,10)),
                  //             top: selectedproduct.details.product.specification.top,
                  //             left: selectedproduct.details.product.specification.left,
                  //             bottom: selectedproduct.details.product.specification.bottom,
                  //             right: selectedproduct.details.product.specification.right,
                  //             front: selectedproduct.details.product.specification.front,
                  //             back: selectedproduct.details.product.specification.back,
                  //             images: [selectedproduct.details.product.cybervisual.images.maindisplayimages]
                  //             },
                  //             pricesbreakdown: {
                  //              price:  Number(parseInt(evt.target.value,10)) * ( selectedproduct.details.product.pricesbreakdown.price / merchandise.details.product.specification.set.pcs ),
                  //              capital: selectedproduct.details.product.pricesbreakdown.capital,
                  //             suggested_retail_price: selectedproduct.details.product.pricesbreakdown.suggested_retail_price,
                  //             vat: selectedproduct.details.product.pricesbreakdown.vat
                  //            },
                  //            specification: _orderspecification[merchandiseidx].value
                  //          }

                  //          if ( Number(_inputfieldvalue) < 0 ) {
                  //            evt.target.value = '0';
                  //          } else {
                              
                  //          if ( Number(_inputfieldvalue) === 0 || _inputfieldvalue === '0' ) {
                  //             merchandise.system.request.product.splice(_requestproductspecificationidx, 1);
                  //               _specificproductpurchasetotalpcs.innerText = 'Total pcs: 0';
                  //               _specificproductpurchasetotalweight.innerText = 'Total weight: 0';  
                  //               _needstotalpayment.innerText = 'Needs: Total payment of 0 pesos';
                  //               props.allnonmrnselectedproductcb((purchasing)=> purchasing = []);
                  //               props.allmrnselectedproductcb((purchasing)=> purchasing = []);
                  //           } else {
    
                //                if ( _productspecification === undefined ) {

                //                    merchandise.system.request.product.push(data)
                //                   _specificproductpurchasetotalpcs.innerText = 'Total pcs: 1';
                //                   _specificproductpurchasetotalweight.innerText = `Total weight: ${merchandise.details.product.specification.weight}`;
                //                   _needstotalpayment.innerText = `Needs: Total payment of ${merchandise.system.request.product.reduce((previousValue, currentValue)=> Number(previousValue) + Number(currentValue.pricesbreakdown.price),0)} pesos`;
                                
              //                  } else {  
                //                   alert(JSON.stringify(_productspecification))
                //                   merchandise.system.request.product.splice(_requestproductspecificationidx,1);
                //                   merchandise.system.request.product.push(data);
                //                  _specificproductpurchasetotalpcs.innerText = `Total pcs: ${merchandise.system.request.product.reduce((currentValue, previousValue)=> currentValue + previousValue.pcs , 0)}`;
                //                  _specificproductpurchasetotalweight.innerText = `Total weight: ${Number(merchandise.details.product.specification.weight) * Number(data.pcs)}`;
                //                  _needstotalpayment.innerText = `Needs: Total payment of ${merchandise.system.request.product.reduce((previousValue, currentValue)=> Number(previousValue) + Number(currentValue.pricesbreakdown.price),0)} pesos`;  

              //                   }

            //                }

            //                 }

            //                 const _allselectedproduct = props.purchasing.map((purchasing)=> purchasing.system.request.product);
            //                 props.allselectedproduct.data = _allselectedproduct.flat();   

            //                 props.allnonmrnselectedproductcb((purchasingdata)=> purchasingdata = props.allselectedproduct.data.filter((purchasing)=> purchasing.category === 'nonmrn'));

            //                 props.allmrnselectedproductcb((purchasingdata)=> purchasingdata = props.allselectedproduct.data.filter((purchasing)=>   purchasing.category === 'MRN' ));

          //                  props.totalmerchandisepricecb((totalpurchasingpayment)=> totalpurchasingpayment = props.allselectedproduct.data.reduce((purchasing, purchases)=> purchasing + purchases.pricesbreakdown.price,0))
            
                          }}/>

                  <p className='purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'></p>
                  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>Order specification</p>
                    <input type='text'
                          className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductorderspecificationindication'
                          onChange={ async (evt)=> {

                            const _inputfieldvalue = evt.target.value;

                            // const _productspecification = merchandise.system.request.product.find((product)=> product.details.category === merchandise.details.product.specification.category && product.details.color === merchandise.details.product.specification.color && product.details.size === merchandise.details.product.specification.size);
                            // const _requestproductspecificationidx = merchandise.system.request.product.findIndex((product)=> product.details.for.gender === merchandise.details.product.specification.for.gender  && product.details.category === merchandise.details.product.specification.category && product.details.color === merchandise.details.product.specification.color && product.details.size === merchandise.details.product.specification.size);
                            // _productspecification.specification = _inputfieldvalue;

                            const _selectedproduct = await props.selectedproductarray.find((data)=> data.authentications.productid === props.selectedproduct.authentications.productid);

                            _selectedproduct.system.request.orderspeicfication = _inputfieldvalue;

                            componentupdate();

                          }}/>
                  </Col>
                  <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductdetailscontainer-selectedproductclosebuttoncontainer'>
                    <button className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductdetailscontainer-selectedproductclosebutton'
                            onClick={(evt)=> {

                              const _button = evt.target;
                              const _buttoncontainer = _button.parentElement;
                              const _selectedproductdetailsandselectionconfigurationmodal = _buttoncontainer.parentElement;
                              _selectedproductdetailsandselectionconfigurationmodal.style.display = 'none';

                              for(let i=0; i < props.selectedproductarray.length; i++ ) { 
                                if (props.selectedproductarray[i].system.request.pcs == "0" || props.selectedproductarray[i].system.request.pcs == "") {
                                    props.selectedproductarray.splice(i,1); 
                                }
                              }

                              console.log(props.selectedproductarray);

                              componentupdate();

                              }}>
                      close
                    </button>
                  </Col>
                </Col>
                </Row>
            </Col>
            </Col>
          </Row>
        )
      })
    }

  </Col>

  <Col xs={12}
        md={12}
        lg={12}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
    
  </Col>

  <Col xs={12}
        md={12}
        lg={12}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>You have ordered {props.purchasing.length} product (s), your {props.purchasing.length} purchasing tag's list's {props.selectedproductarray.length} items overall weighing {props.purchasingtotalweight} grams</p>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsrequestlimitreachheaderindication'>{props.requestlimitreacherrormessage}</p>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>Scaling for weight is 1000 grams equal to 1 kilo</p>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>Scaling for common public, public and private cargo type delivery: 100 pesos weighting 100 per kilo or 1 kilo</p>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>All door to door deliverie's transactions and cargo type shimpment limit: 10,000 kilo's/1 ton</p>
  </Col>

  <Col xs={12}
        md={12}
        lg={12}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>
      The location you provided as cargo destination address: {props.purchasingcargodestination}
    </p>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>
      You can navigate and use map configuration for your shipping, delivery type or door to door location configuration. Enter latitude and latitude for easy navigation or you can choose addresse's that are within Vanguard's scope.
    </p>
  </Col>

  <Col xs={12}
        md={12}
        lg={12}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>
      {props.purchasingtotalnonmrnproducts.length} NOMRN products, weighting {props.purchasingmrnproductstotalweight} gram's
    </p>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>
      {props.purchasingtotalmrnproducts.length} MRN type products. weighting {props.purchasingnonmrnproductstotalweight} gram's
    </p>
  </Col>

  <Col xs={12}
        md={12}
        lg={12}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-transactionpurchasedetailsheaderindication'>Authentication: {props.user.authentications.authenticationtype}</p>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-transactionpurchasedetailsheaderindication'>Transaction type: Cargo</p> 
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-transactionpurchasedetailsheaderindication'>Cargo type: Delivery</p>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-transactionpurchasedetailsheaderindication'>100 peso's per equal or less 1 kilo</p>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsrequestlimitreachheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-transactionpurchasedetailsheaderindication'>{props.requestlimitreacherrormessage}</p>
  </Col>

  <Col xs={6}
        md={5}
        lg={5}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>Needs:</p>
  </Col>

  <Col xs={6}
        md={7}
        lg={7}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailssubheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailssubheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication-totalamountheaderindication'>
      {props.purchasingtotalmerchandisepayment} peso's 
    </p>
  </Col>

  <Col xs={6}
        md={5}
        lg={5}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>Online transaction request payment:</p>
  </Col>

  <Col xs={6}
        md={7}
        lg={7}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailssubheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailssubheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication-totalamountheaderindication'>
      0 peso's
    </p>
  </Col>

  <Col xs={12}
        md={12}
        lg={12}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>Fee's</p>
  </Col>

  <Col xs={6}
        md={5}
        lg={5}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>Cargo delivery</p>
  </Col>

  <Col xs={6}
        md={7}
        lg={7}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailssubheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailssubheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication-totalamountheaderindication'>
      {props.purchasingtotalcargofee} peso's
    </p>
  </Col>

  <Col xs={6}
        md={5}
        lg={5}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>Other's</p>
  </Col>
  
  <Col xs={6}
        md={7}
        lg={7}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailssubheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailssubheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication-totalamountheaderindication'>
      0 peso's
    </p>
  </Col>

  <Col xs={6}
        md={5}
        lg={5}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>Total transaction price:</p>
  </Col>

  <Col xs={6}
        md={7}
        lg={7}
        className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
    <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>
    {props.purchasigtotalpayment} peso's
    </p>
  </Col>

  <Col xs={12}
        md={5}
        lg={5}
        id='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-paymentbuttoncontainer'>
    <button id='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-posbutton'
            onClick={(evt)=> {
    
              const _button = document.querySelector('#purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-paymentbutton');

              if ( props.purchasingcargoaddressset || !props.purchasingcargoaddressset ) {
                props.cargodestinationsetcb((set)=> set = true);
                const _navigationcontainer = document.getElementById('purchasing-navigationcontainer');
                _button.innerText = 'Payment';
                _button.style.border = '0.1vh solid white';
                _button.style.fontWeight = 'normal';
                _button.style.color = 'white';
                _button.style.backgroundColor = 'black';
                _navigationcontainer.style.left = '0%';
              } else {
                props.cargodestinationsetcb((set)=> set = false);
                _button.innerText = 'Include adress for cargo/shipping/delicery parcel or box destination';
                _button.style.border = '0.3vh solid red';
                _button.style.fontWeight = '900';
                _button.style.color = 'black';
                _button.style.backgroundColor = 'gray';
              }

              //alert("Synced");
             // alert(props.purchasingcargoaddressset);
             // alert(props.cargodestinationset);
             // alert(props.purchasingcargoaddresssetcb);
             // alert(props.cargodestinationsetcb);

             // if (props.cargodestinationset || !props.cargodestinationset) {
            //    const _navigationcontainer = document.getElementById('purchasing-navigationcontainer');
                //_button.innerText = 'Payment';
           //     _button.style.border = '0.1vh solid white';
           //     _button.style.fontWeight = 'normal';
           //     _button.style.color = 'white';
            //    _button.style.backgroundColor = 'black';
            //    _navigationcontainer.style.left = '0%';
           //   } else {
          //      _button.innerText = 'Include adress for cargo/parcel/box destination';
          //      _button.style.border = '0.3vh solid red';
          //      _button.style.fontWeight = '900';
          //      _button.style.color = 'black';
          //      _button.style.backgroundColor = 'gray';
          //    }
              
            }}>
      Point of sale ( POS section grid one under service's and payment service's ) ●
    </button>
    <button id='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-paymentbutton'
            onClick={(evt)=> {
    
              const _button = document.querySelector('#purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-paymentbutton');
              const _purchasingcheckoutdetailsmodal = document.querySelector('#purchasingdetails-purchasingcheckoutdetailscontainer');
 
             {/*
              if (props.paymentmethodset) {
                alert('Payment set')
              } else {
                alert('Unpayment set')
              props.purchasingcheckoutdetailsmodaldisplaypropertycb((display)=> display = "block");
              }
            */}

            if ( _button.innerText.includes("Process payment") ) {
              alert('Unpayment set, complete payment service')
            } else {
              props.purchasingcheckoutdetailsmodaldisplayproperty((display)=> display = "block");
            }
              
            }}>
      Process payment ●
    </button>
  </Col>

  <Col xs={12}
        md={6}
        lg={2}
        id='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-graphscontainer'>
      <Col id='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-graphscontainer-carousellayoutcontainer'>
      <Carousel id='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-graphscontainer-carouselcontainer'
                interval={null}>
        <Carousel.Item className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-graphscontainer-carouselitemcontainer'>
          <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-graphscontainer-carouselcontainer-navigationcontainer'>
            <button className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-graphscontainer-carouselcontainer-navigationcontainer-activitybutton'>
              Activity
            </button>
          </Col>
          <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-graphscontainer-carouselcontainer-contentcontainer'>
            <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-graphscontainer-carouselcontainer-contentcontainer-contentmodalcontainer'>
              <XirbitGraph user={props.user}
                           usercb={props.usercb}/>
            </Col>
          </Col>
        </Carousel.Item>
        <Carousel.Item>
        
        
        </Carousel.Item>
        <Carousel.Item>

        </Carousel.Item>
      </Carousel>
      </Col>
      <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-graphscontainer-carouselcontainer-contentcontainer-contentmodalcontainer-fullmodalviewdisplaycontainer'>
                <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-graphscontainer-carouselcontainer-contentcontainer-contentmodalcontainer-fullmodalviewdisplaycontainer-fullmodalviewdisplayheaderindication'
                  onClick={(evt)=> {
                    alert('Synced')
                  }}>
                Full modal view display ->
                </p>
      </Col>
  </Col>

  <Col xs={12}
        md={12}
        lg={12}
        id='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-paymentbuttoncontainer'
        style={{height:'20vh'}}>
        
  </Col>

  </Row>

  </Col>

 


</Row>
)

}

function LocationMarker(props) {

const map = useMapEvents({
click(e) {
 //map.locate()
},
locationfound(e) {
 props.searchmapmarkerreferencecb(e.latlng)
 //map.flyTo(e.latlng, map.getZoom())
},
})

const [mapmarker, mapmarkercb] = useState(true);

const markernodereference = useRef(null);

const mapeventhandlers = useMemo(

() => ({
 dragend(e) {
  const marker = markernodereference.current
   if (marker != null) {

     mapmarkercb(marker.getLatLng());

     const _stringcoordinates =  marker.getLatLng().toString();
     const _removecoordinatesindication = _stringcoordinates.slice(7,100);
     const _findremainingparenthesis = _removecoordinatesindication.indexOf(')');
     const _almostcleanstringcoodinates = _removecoordinatesindication.slice(0, _findremainingparenthesis);
     const _coordinates = _almostcleanstringcoodinates.split(',');

     props.geocoordinatesresultcb((coordinates)=> coordinates = {
      lat: Number(_coordinates[0]),
      lon: Number(_coordinates[1])
     })
  

   }
   
   props.cargotypecb((cargotype)=> cargotype = '');
  
 }
}),
[],);

const toggledraggablemarker = useCallback(() => {
 mapmarkercb((node) => !node)
}, []);

return props.searchmapmarkerreference === null ? null : (
  <Marker draggable={mapmarkercb}
          eventHandlers={mapeventhandlers}
          position={props.searchmapmarkerreference}
          ref={markernodereference}>
   <Popup minWidth={90}>
     <Col onClick={toggledraggablemarker}>
       <Col className='purchasingdetails-mapcontainer-maptile-searchcontainer-marketdetailsandconfigurationcontainer'>
          <p className='purchasingdetails-mapcontainer-maptile-searchcontainer-marketdetailsandconfigurationheaderindication'>Marker draggable</p>
          <p className='purchasingdetails-mapcontainer-maptile-searchcontainer-marketdetailsandconfigurationheaderindication'>Lat: {props.geocoordinatesresult.lat}</p>
          <p className='purchasingdetails-mapcontainer-maptile-searchcontainer-marketdetailsandconfigurationheaderindication'>Lon: {props.geocoordinatesresult.lon}</p>
       </Col>
     </Col>
   </Popup>
  </Marker>
  )
}