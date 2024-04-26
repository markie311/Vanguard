import React, {
    useState,
    useRef,
    useCallback,
    useMemo
  } from 'react';

import { Row,
         Col,
         Carousel,
         Dropdown,
         DropdownButton } from 'react-bootstrap';

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

import XirbitGraph from '../graph/xirbitgraph-component.js';

export default function PurchasingDetais(props) { 

const [selectedproduct, selectedproductcb] = useState(
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
);

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

locationdestinationcb((coordinates)=> coordinates = {
  lat: position.coords.latitude,
  lng: position.coords.longitude
})
searchmapmarkerreferencecb((coordinates)=> coordinates = {
  lat: locationdestination.lat,
  lng: locationdestination.lon
})
geocoordinatesresultcb((coordinates)=> coordinates = {
  lat: position.coords.latitude,
  lon: position.coords.longitude
})

 const center = [position.coords.latitude, position.coords.longitude];
 const zoom = 13;
 searchmapreference.setView(center, zoom);

 _cargolocationdestinationheaderindications[8].innerText = `Lat: ${position.coords.latitude}`;
 _cargolocationdestinationheaderindications[9].innerText = `Lon: ${position.coords.longitude}`;

}

function purchasinggetprivateauthenticationlocations(location, location2) {
 alert(location)
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
     <Col xs={12}
          md={6}
          lg={6}
          id='purchasingdetails-mapcontainer-configurationscontainer-automaticselectioncontainer'>
     <p className='purchasingdetails-mapcontainer-configurationscontainer-typeofselectionconfigurationheaderindication'>Private authentication</p>

      <DropdownButton id="dropdown-basic-button" title="Dropdown button" onSelect={(evt)=> {

         const _operation = JSON.parse(evt);
         const _privateauthenticationlocation = operations.find((location)=> location.coordinates.lat ===  _operation.coordinates.lat && location.coordinates.lon ===  _operation.coordinates.lon );
         const _cargolocationdestinationheaderindications = document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication');

         locationdestination.lat = _privateauthenticationlocation.coordinates.lat;
         locationdestination.lon =  _privateauthenticationlocation.coordinates.lon;

         const center = [locationdestination.lat, locationdestination.lon];

         const zoom = 13;
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

         _cargolocationdestinationheaderindications[8].innerText = `Lat: ${locationdestination.lat}`;
         _cargolocationdestinationheaderindications[9].innerText = `Lon: ${locationdestination.lon}`; 

         const _cargolocationdestinationspanheaderindication = document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[2]
         _cargolocationdestinationspanheaderindication.innerText = 'Location for less charge transaction was set';
         document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[3].innerText = 'Shipment: Cargo type/Door to door';
         _cargolocationdestinationspanheaderindication.classList.add('purchasingdetails-mapcontainer-maptile-addresscontainer-cargostatusheaderindication');

         const _purchasingmrntotalproductweight = props.allmrnselectedproduct.reduce((previousValue, currentValue)=> previousValue + currentValue.details.weight,0);

         switch (true) {
           case _purchasingmrntotalproductweight === 0: 
            props.totaldeliveryfeecb((totalweight)=> totalweight = 0);
           break;
           case _purchasingmrntotalproductweight <= 1000:
             props.totaldeliveryfeecb((totalweight)=> totalweight =  100);
           break;
           case _purchasingmrntotalproductweight > 1000 && _purchasingmrntotalproductweight <= 2000:
             props.totaldeliveryfeecb((totalweight)=> totalweight = 200);
           break;
           case _purchasingmrntotalproductweight > 2000 && _purchasingmrntotalproductweight <= 3000:
             props.totaldeliveryfeecb((totalweight)=> totalweight = 300);
           break;
           case _purchasingmrntotalproductweight > 3000 && _purchasingmrntotalproductweight <= 4000:
             props.totaldeliveryfeecb((totalweight)=> totalweight = 400);
           break;
           case _purchasingmrntotalproductweight > 4000 && _purchasingmrntotalproductweight <= 5000:
             props.totaldeliveryfeecb((totalweight)=> totalweight = 500);
           break;
           case _purchasingmrntotalproductweight > 5000 && _purchasingmrntotalproductweight <= 6000:
             props.totaldeliveryfeecb((totalweight)=> totalweight = 600);
           break;
           case _purchasingmrntotalproductweight > 6000 && _purchasingmrntotalproductweight <= 7000:
             props.totaldeliveryfeecb((totalweight)=> totalweight = 700);
           break;
           case _purchasingmrntotalproductweight > 8000 && _purchasingmrntotalproductweight <= 9000:
             props.totaldeliveryfeecb((totalweight)=> totalweight = 800);
           break;
           case _purchasingmrntotalproductweight > 9000 && _purchasingmrntotalproductweight <= 10000:
             props.totaldeliveryfeecb((totalweight)=> totalweight = 900);
           break;
           break;
           case _purchasingmrntotalproductweight === 10000:
             props.totaldeliveryfeecb((totalweight)=> totalweight = 10000);
           break;
           break;
           case _purchasingmrntotalproductweight > 10000:
             props.totaldeliveryfeecb((totalweight)=> totalweight = 0);
           break;
         }

         cargotypecb((cargotype)=> cargotype = 'Location less charge transactions');

 
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

     </Col>
     <Col xs={12}
          md={6}
          lg={6}
          id='purchasingdetails-mapcontainer-configurationscontainer-manualcontainer'>
       <Row id='purchasingdetails-mapcontainer-configurationscontainer-manualgridcontainer'>
        <p className='purchasingdetails-mapcontainer-configurationscontainer-manualconfigurationheaderindication'>Manual</p>
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
                   const _cargolocationdestinationheaderindications = document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication');

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
                   const zoom = 13;
                   searchmapreference.setView(center, zoom);
                   
                   _cargolocationdestinationheaderindications[8].innerText = `Lat: ${_lat}`;;


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
                    const _cargolocationdestinationheaderindications = document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication');

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
                    const zoom = 13;

                    searchmapreference.setView(center, zoom);
                    _cargolocationdestinationheaderindications[9].innerText = `Lat: ${_lon}`;;

                  }}/>
         </Col>
       </Row>
     </Col>
     <Col xs={12}
          md={12}
          lg={12}
          id='purchasingdetails-mapcontainer-configurationscontainer-byclickcontainer'>
        <p className='purchasingdetails-mapcontainer-configurationscontainer-typeofselectionconfigurationheaderindication'>By click selection</p>
       <button id='purchasingdetails-mapcontainer-configurationscontainer-byclickcontainer-currentcoordinatesbutton'
               onClick={(evt)=> {
                 if (navigator.geolocation) {
                   navigator.geolocation.getCurrentPosition(purchasinggetcurrentposition);
                 } else { 
                  alert('Synced')
                 }
               }}>
         Current coordinates
       </button>
     </Col>
   </Row>

   <Row id='purchasingdetails-mapcontainer-maptile'>
     <Col xs={4}
          md={3}
          lg={3}
          id='purchasingdetails-mapcontainer-maptile-addresscontainer'>
       <button id='purchasingdetails-mapcontainer-maptile-addresscontainer-setascargodestnationaddressbutton'
               onClick={(evt)=> {

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

                  switch (true) {
                    case _purchasingmrntotalproductweight === 0: 
                     props.totaldeliveryfeecb((totalweight)=> totalweight = 0);
                    break;
                    case _purchasingmrntotalproductweight <= 1000:
                      props.totaldeliveryfeecb((totalweight)=> totalweight =  100);
                    break;
                    case _purchasingmrntotalproductweight > 1000 && _purchasingmrntotalproductweight <= 2000:
                      props.totaldeliveryfeecb((totalweight)=> totalweight = 200);
                    break;
                    case _purchasingmrntotalproductweight > 2000 && _purchasingmrntotalproductweight <= 3000:
                      props.totaldeliveryfeecb((totalweight)=> totalweight = 300);
                    break;
                    case _purchasingmrntotalproductweight > 3000 && _purchasingmrntotalproductweight <= 4000:
                      props.totaldeliveryfeecb((totalweight)=> totalweight = 400);
                    break;
                    case _purchasingmrntotalproductweight > 4000 && _purchasingmrntotalproductweight <= 5000:
                      props.totaldeliveryfeecb((totalweight)=> totalweight = 500);
                    break;
                    case _purchasingmrntotalproductweight > 5000 && _purchasingmrntotalproductweight <= 6000:
                      props.totaldeliveryfeecb((totalweight)=> totalweight = 600);
                    break;
                    case _purchasingmrntotalproductweight > 6000 && _purchasingmrntotalproductweight <= 7000:
                      props.totaldeliveryfeecb((totalweight)=> totalweight = 700);
                    break;
                    case _purchasingmrntotalproductweight > 8000 && _purchasingmrntotalproductweight <= 9000:
                      props.totaldeliveryfeecb((totalweight)=> totalweight = 800);
                    break;
                    case _purchasingmrntotalproductweight > 9000 && _purchasingmrntotalproductweight <= 10000:
                      props.totaldeliveryfeecb((totalweight)=> totalweight = 900);
                    break;
                    break;
                    case _purchasingmrntotalproductweight === 10000:
                      props.totaldeliveryfeecb((totalweight)=> totalweight = 10000);
                    break;
                    break;
                    case _purchasingmrntotalproductweight > 10000:
                      props.totaldeliveryfeecb((totalweight)=> totalweight = 0);
                    break;
                  }
              
                  //props.totalmerchandisepricecb((totalpurchasingpayment)=> totalpurchasingpayment = props.allselectedproduct.data.reduce((purchasing, purchases)=> purchasing + purchases.pricesbreakdown.price,0))

                 //alert(JSON.stringify(_lesschargetransactions))
                 //alert(JSON.stringify(props.user.details.location.address))
                 //alert(JSON.stringify(operations))

                }
               }}>
         Use what I given location as my cargo destination address
       </button>
       <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'></p>
       <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication purchasingdetails-mapcontainer-maptile-addresscontainer-statusheaderindication'>Status: <span className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>CARGO DESTINATION UNSET</span></p>
       <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>Shipment: Cargo type/Delivery</p>
       <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>Destination address not set to as default authentication address</p>
       <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'></p>
       <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>The authenticaion was public and location for cargo was within less charge transactions.</p>
       <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>Location: Search location on map</p>
       <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>Lat: {geocoordinatesresult.lat}</p>
       <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication'>Lon: {geocoordinatesresult.lon}</p>
       <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-resultsheaderindication'>Results: <span className='purchasingdetails-mapcontainer-maptile-addresscontainer-resultsspanheaderindication'></span></p>
       <p className='purchasingdetails-mapcontainer-maptile-addresscontainer-resultsresponseheaderindication'>Response: <span classMame='purchasingdetails-mapcontainer-maptile-addresscontainer-resultsresponsespanheaderindication'></span></p>
       <button id='purchasingdetails-mapcontainer-maptile-addresscontainer-setascargodestnationaddressbutton'
               onClick={(evt)=> {
                 alert('Set as cargo destination address')
               }}>
         Find location
       </button>
       <br />
       <button id='purchasingdetails-mapcontainer-maptile-addresscontainer-setascargodestnationaddressbutton'
               onClick={(evt)=> {
                   if ( cargotype === 'Location less charge transactions') {
                    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[2].innerText = `Set/${cargotype}`;
                    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[2].classList.add('purchasingdetails-mapcontainer-maptile-addresscontainer-cargostatusheaderindication');
                    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[3].innerText = 'Shipment: Cargo type/Door to door'
                    props.cargodestinationsetcb((location)=> location = true)
                  } else {
                    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[2].innerText = `Set/Delivery type/Cargo`;
                    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[2].classList.add('purchasingdetails-mapcontainer-maptile-addresscontainer-cargostatusheaderindication');
                    document.querySelectorAll('.purchasingdetails-mapcontainer-maptile-addresscontainer-headerindication')[3].innerText = 'Shipment: Cargo type/Delivery'
                    props.cargodestinationsetcb((location)=> location = true)
                  }
                

               }}>
         Set as my cargo destination
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
                    zoom={13} 
                    style={{height:'100%', width: '100%'}}
                    scrollWheelZoom={false}
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
                Total pcs: 0
              </p>
              <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsheaderindication'>
                Total weight: 0
              </p>
              <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-productdetailsheaderindication'>
                Needs: Total of 0 pesos
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
                           onClick={(evt)=> {
                             selectedproductcb((selectedproduct)=> selectedproduct = stocks)
                             const _selectedproductdetailsandselectionconfigurationmodal = document.querySelectorAll('.purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductdetailscontainer');
                             _selectedproductdetailsandselectionconfigurationmodal[merchandiseidx].style.display = 'block';
                           }}
                       />


                      </Col>                
                   )
                  })
                }
               <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductdetailscontainer'>
                <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailscontainer'>
                  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                   Product part: {selectedproduct.details.product.specification.part}
                  </p>
                  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                    Weight:  {selectedproduct.details.product.specification.weight}
                  </p>
                  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                    Color: {selectedproduct.details.product.specification.color}
                  </p>
                  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                    Size: {selectedproduct.details.product.specification.size}
                  </p>
                  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                    Top: {selectedproduct.details.product.specification.top}
                  </p>
                  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                    Left: selectedproduct.details.product.specification.left}
                  </p>
                  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                    Bottom: {selectedproduct.details.product.specification.bottom}
                  </p>
                  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>
                    Right: {selectedproduct.details.product.specification.right}
                  </p>
                 <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductdisplayimagescontainer'>
                  {
                   selectedproduct.length === 0 ? 
                   (
                    <p></p>
                   )
                   :
                   (
                     <React.Fragment>
                      {
                         selectedproduct.details.product.cybervisual.images.maindisplayimages.map((displayimage, displayimagesidx)=> {
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
                         onChange={(evt)=> {

                           const _inputfieldvalue = evt.target.value;
                           const _productspecification = merchandise.system.request.product.find((product)=> product.details.category === merchandise.details.product.specification.category && product.details.color === merchandise.details.product.specification.color && product.details.size === merchandise.details.product.specification.size);
                           const _requestproductspecificationidx = merchandise.system.request.product.findIndex((product)=> product.details.for.gender === merchandise.details.product.specification.for.gender  && product.details.category === merchandise.details.product.specification.category && product.details.color === merchandise.details.product.specification.color && product.details.size === merchandise.details.product.specification.size);
                           const _orderspecification = document.querySelectorAll('.purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductorderspecificationindication');
                           
                           const _inputfield = evt.target;
                           const _productspecificationcontainer = _inputfield.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                           const _productdetailscontainer =  _productspecificationcontainer.children[1];
                           const _productspecificationlayoutcontainer = _productdetailscontainer.children[0];
                           const _specificproductpurchasetotalpcs = _productspecificationlayoutcontainer.children[5];
                           const _specificproductpurchasetotalweight = _productspecificationlayoutcontainer.children[6];
                           const _needstotalpayment = _productspecificationlayoutcontainer.children[7];
                           const _getdigitsfromneedstotalpayment = _specificproductpurchasetotalpcs.innerText.match(/(\d+)/);

                           const _firstfieldcharacter = _inputfieldvalue.charAt(0);
                           evt.target.value = parseInt( _inputfieldvalue, 10);

                           const selecteddata =  {
                             category: selectedproduct.details.product.category,
                             pcs: 0,
                             details: {
                              for: {
                                part: selectedproduct.details.product.specification.for.part,
                                gender: selectedproduct.details.product.specification.for.gender,
                                category: selectedproduct.details.product.specification.for.category
                              },
                              set: {
                               set: selectedproduct.details.product.specification.set.set,
                               productindication: selectedproduct.details.product.specification.set.productindication,
                               pcs: selectedproduct.details.product.specification.set.pcs,
                              },
                              size: selectedproduct.details.product.specification.size,
                              color: selectedproduct.details.product.specification.color,
                              weight: selectedproduct.details.product.specification.weight,
                              top: selectedproduct.details.product.specification.top,
                              left: selectedproduct.details.product.specification.left,
                              bottom: selectedproduct.details.product.specification.bottom,
                              right: selectedproduct.details.product.specification.right,
                              front: selectedproduct.details.product.specification.front,
                              back: selectedproduct.details.product.specification.back
                             },
                             pricesbreakdown: {
                              price: selectedproduct.details.product.pricesbreakdown.price,
                              capital: selectedproduct.details.product.pricesbreakdown.capital,
                              suggested_retail_price: selectedproduct.details.product.pricesbreakdown.suggested_retail_price,
                              vat: selectedproduct.details.product.pricesbreakdown.vat
                             },
                             specification: _orderspecification[merchandiseidx].value
                           }

                           const data =  {
                             category: selectedproduct.details.product.category,
                             pcs: Number(parseInt(evt.target.value,10)),
                             details: {
                              for: {
                               part: selectedproduct.details.product.specification.for.part,
                               gender: selectedproduct.details.product.specification.for.gender,
                               category: selectedproduct.details.product.specification.for.category
                              },
                              set: {
                               set: selectedproduct.details.product.specification.set.set,
                               productindication: selectedproduct.details.product.specification.set.productindication,
                               pcs: selectedproduct.details.product.specification.set.pcs,
                              },
                              size: selectedproduct.details.product.specification.size,
                              color: selectedproduct.details.product.specification.color,
                              weight: Number(merchandise.details.product.specification.weight) * Number(parseInt(evt.target.value,10)),
                              top: selectedproduct.details.product.specification.top,
                              left: selectedproduct.details.product.specification.left,
                              bottom: selectedproduct.details.product.specification.bottom,
                              right: selectedproduct.details.product.specification.right,
                              front: selectedproduct.details.product.specification.front,
                              back: selectedproduct.details.product.specification.back,
                              images: [selectedproduct.details.product.cybervisual.images.maindisplayimages]
                             },
                             pricesbreakdown: {
                              price:  Number(parseInt(evt.target.value,10)) * ( selectedproduct.details.product.pricesbreakdown.price / merchandise.details.product.specification.set.pcs ),
                              capital: selectedproduct.details.product.pricesbreakdown.capital,
                              suggested_retail_price: selectedproduct.details.product.pricesbreakdown.suggested_retail_price,
                              vat: selectedproduct.details.product.pricesbreakdown.vat
                             },
                             specification: _orderspecification[merchandiseidx].value
                           }

                           if ( Number(_inputfieldvalue) < 0 ) {
                             evt.target.value = '0';
                           } else {
                             
                           if ( Number(_inputfieldvalue) === 0 || _inputfieldvalue === '0' ) {
                               merchandise.system.request.product.splice(_requestproductspecificationidx, 1);
                               _specificproductpurchasetotalpcs.innerText = 'Total pcs: 0';
                               _specificproductpurchasetotalweight.innerText = 'Total weight: 0';  
                               _needstotalpayment.innerText = 'Needs: Total payment of 0 pesos';
                               props.allnonmrnselectedproductcb((purchasing)=> purchasing = []);
                               props.allmrnselectedproductcb((purchasing)=> purchasing = []);
                           } else {
  
                               if ( _productspecification === undefined ) {

                                  merchandise.system.request.product.push(data)
                                 _specificproductpurchasetotalpcs.innerText = 'Total pcs: 1';
                                 _specificproductpurchasetotalweight.innerText = `Total weight: ${merchandise.details.product.specification.weight}`;
                                 _needstotalpayment.innerText = `Needs: Total payment of ${merchandise.system.request.product.reduce((previousValue, currentValue)=> Number(previousValue) + Number(currentValue.pricesbreakdown.price),0)} pesos`;
                              
                               } else {  
                                 alert(JSON.stringify(_productspecification))
                                 merchandise.system.request.product.splice(_requestproductspecificationidx,1);
                                 merchandise.system.request.product.push(data);
                                _specificproductpurchasetotalpcs.innerText = `Total pcs: ${merchandise.system.request.product.reduce((currentValue, previousValue)=> currentValue + previousValue.pcs , 0)}`;
                                _specificproductpurchasetotalweight.innerText = `Total weight: ${Number(merchandise.details.product.specification.weight) * Number(data.pcs)}`;
                                _needstotalpayment.innerText = `Needs: Total payment of ${merchandise.system.request.product.reduce((previousValue, currentValue)=> Number(previousValue) + Number(currentValue.pricesbreakdown.price),0)} pesos`;  

                               }

                           }

                           }

                           const _allselectedproduct = props.purchasing.map((purchasing)=> purchasing.system.request.product);
                           props.allselectedproduct.data = _allselectedproduct.flat();   

                           props.allnonmrnselectedproductcb((purchasingdata)=> purchasingdata = props.allselectedproduct.data.filter((purchasing)=> purchasing.category === 'nonmrn'));

                           props.allmrnselectedproductcb((purchasingdata)=> purchasingdata = props.allselectedproduct.data.filter((purchasing)=>   purchasing.category === 'MRN' ));

                           props.totalmerchandisepricecb((totalpurchasingpayment)=> totalpurchasingpayment = props.allselectedproduct.data.reduce((purchasing, purchases)=> purchasing + purchases.pricesbreakdown.price,0))
          
                         }}/>

                 <p className='purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'></p>
                 <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-detailsheaderindication'>Order specification</p>
                  <input type='text'
                         className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductorderspecificationindication'
                         onChange={(evt)=> {

                           const _inputfieldvalue = evt.target.value;
                           const _productspecification = merchandise.system.request.product.find((product)=> product.details.category === merchandise.details.product.specification.category && product.details.color === merchandise.details.product.specification.color && product.details.size === merchandise.details.product.specification.size);
                           const _requestproductspecificationidx = merchandise.system.request.product.findIndex((product)=> product.details.for.gender === merchandise.details.product.specification.for.gender  && product.details.category === merchandise.details.product.specification.category && product.details.color === merchandise.details.product.specification.color && product.details.size === merchandise.details.product.specification.size);
                           
                           _productspecification.specification = _inputfieldvalue
                           
                         }}/>
                </Col>
                <Col className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductdetailscontainer-selectedproductclosebuttoncontainer'>
                  <button className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsgridcontainer-merchandisedetailstag-productdetailscontainer-selectedproductdetailscontainer-selectedproductclosebutton'
                           onClick={(evt)=> {

                             const _button = evt.target;
                             const _buttoncontainer = _button.parentElement;
                             const _selectedproductdetailsandselectionconfigurationmodal = _buttoncontainer.parentElement;
                             _selectedproductdetailsandselectionconfigurationmodal.style.display = 'none';

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
   <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>You have ordered {props.purchasing.length} products, your {props.purchasing.length} purchasing tag's list's {props.allselectedproduct.data.reduce((purchasing, purchases)=> purchasing + purchases.pcs ,0)} items overall weighing {props.allselectedproduct.data.reduce((purchasing, purchases)=> purchasing + purchases.details.weight ,0)} grams</p>
   <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsrequestlimitreachheaderindication'>{props.requestlimitreacherrormessage}</p>
   <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>Scaling was 1000 grams equal to 1 kilo</p>
   <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>Door to door or delivery transactions or cargo order/purchase limit: 10,000 kilo's/1 ton</p>
 </Col>

 <Col xs={12}
      md={12}
      lg={12}
      className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
   <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>
     The location you provided as cargo destination address: {props.user.details.location.shipment.address.street}, {props.user.details.location.shipment.address.baranggay}, {props.user.details.location.shipment.address.trademark}, {props.user.details.location.shipment.address.province}, {props.user.details.location.shipment.address.city}, {props.user.details.location.shipment.address.country}.
   </p>
   <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>
     You can navigate to map for your shipping, delivery type or door to door location configuration. Enter latitude and latitude for easy navigation or you can choose addresse's that are Xirbit is within your scope.
   </p>
 </Col>

 <Col xs={12}
      md={12}
      lg={12}
      className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
   <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>
    {props.allnonmrnselectedproduct.length} nonmrn products, weighting {props.allnonmrnselectedproduct.reduce((purchasing, purchases)=> purchasing + purchases.details.weight, 0)} grams
   </p>
   <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>
    {props.allmrnselectedproduct.length} MRN type products. weighting {props.allmrnselectedproduct.reduce((purchasing, purchases)=> purchasing + purchases.details.weight, 0)} grams
   </p>
 </Col>

 <Col xs={12}
      md={12}
      lg={12}
      className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-transactionpurchasedetailsheaderindication'>Authentication: {props.user.authentications.authenticationtype}</p>
  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-transactionpurchasedetailsheaderindication'>Transaction type: Cargo</p>
  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-transactionpurchasedetailsheaderindication'>Cargo type: Delivery</p>
  <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-transactionpurchasedetailsheaderindication'>100 peso's per, equal or less 1 kilo</p>
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
     {props.totalmerchandiseprice} pesos
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
     0 pesos
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
     {props.totaldeliveryfee} pesos
   </p>
 </Col>

 <Col xs={6}
      md={5}
      lg={5}
      className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer'>
   <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication'>Others</p>
 </Col>
 
 <Col xs={6}
      md={7}
      lg={7}
      className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailssubheaderindicationcontainer'>
   <p className='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailssubheaderindication purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-purchasedetailsheaderindication-totalamountheaderindication'>
     0 pesos
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
   {props.totalmerchandiseprice + props.totaldeliveryfee} pesos
   </p>
 </Col>

 <Col xs={12}
      md={5}
      lg={5}
      id='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-paymentbuttoncontainer'>
   <button id='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-posbutton'
           onClick={(evt)=> {
   
             const _button = document.querySelector('#purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-paymentbutton');

             if (props.cargodestinationset || !props.cargodestinationset) {
               const _navigationcontainer = document.getElementById('purchasing-navigationcontainer');
               //_button.innerText = 'Payment';
               _button.style.border = '0.1vh solid white';
               _button.style.fontWeight = 'normal';
               _button.style.color = 'white';
               _button.style.backgroundColor = 'black';
               _navigationcontainer.style.left = '0%';
             } else {
              _button.innerText = 'Include adress for cargo/parcel/box destination';
              _button.style.border = '0.3vh solid red';
              _button.style.fontWeight = '900';
              _button.style.color = 'black';
              _button.style.backgroundColor = 'gray';
             }
            
           }}>
     Point of sale ( POS section grid one under service's and payment service's ) ●
   </button>
   <button id='purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-paymentbutton'
           onClick={(evt)=> {
   
             const _button = document.querySelector('#purchasingdetails-purchasedetailsgridcontainer-purchasedetailsheaderindicationcontainer-paymentbutton');

             if (props.paymentmethodset) {
               alert('Payment set')
             } else {
               alert('Unpayment set')
             }
            
           }}>
     Proceed ●
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
             <XirbitGraph />
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
 map.locate()
},
locationfound(e) {
 props.searchmapmarkerreferencecb(e.latlng)
 map.flyTo(e.latlng, map.getZoom())
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