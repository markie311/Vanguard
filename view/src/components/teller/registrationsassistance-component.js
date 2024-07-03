import React, { useState } from 'react';

import { Row,
         Col,
         Spinner } from 'react-bootstrap';

import '../../styles/teller/registrationsassistance.scss';

export default function RegistrationsAssistance() {

   const [notifythetelleryouwillhaveachangeregistrationtypeloadingstate, notifythetelleryouwillhaveachangeregistrationtypeloadingstatecb] = useState(false);

 return (
  <Col id="registrationsassistance">
   <Col id="registrationsassistance-registrationtypecontainer-registrationassistancecontainer">
    <h1 id="registrationsassistance-mainheaderindication">WELCOME TO CHANGING REGISTRATION ASSISTANCE</h1>
    <h5 className="registrationsassistance-subheaderindication">Notify the teller for a registration change process</h5>
   </Col>
    <Col id="registrationsassistance-registrationtypeheaderindicationcontainer">     
      <h1 id="registrationsassistance-registrationtypecontainer-registrationttypemainheaderindication">Account type</h1>
      <h5  id="registrationsassistance-registrationtypecontainer-registrationttypesubheaderindication">Common public</h5>
    </Col>
    <Col id="registrationsassistance-configurationcontainer">
     <Col id="registrationsassistance-configurationcontainer-quecontainer">
       <p className="registrationsassistance-configurationcontainer-quecontainer-headerindication">Que: 0 people</p>
       <p className="registrationsassistance-configurationcontainer-quecontainer-headerindication">Processing: 0 people</p>
       <p className="registrationsassistance-configurationcontainer-quecontainer-headerindication">Processed: 0 people</p>
       <p className="registrationsassistance-configurationcontainer-quecontainer-headerindication">Serving: 0</p>
       <p className="registrationsassistance-configurationcontainer-quecontainer-headerindication">Your count: 0</p>
     </Col>
     <Col id="registrationsassistance-configurationcontainer-configurationcontainer">
       <button className="registrationsassistance-configurationcontainer-configurationcontainer-notifythetellerconfigurationbutton">
         {
            notifythetelleryouwillhaveachangeregistrationtypeloadingstate ? 
            (
             <Spinner animation="border" variant="light" />
            )
            :
            (
             <span>Notify the teller you will change your registration type</span>
            )
         }
        </button>
        <button className="registrationsassistance-configurationcontainer-configurationcontainer-configurationbutton">
         {
            notifythetelleryouwillhaveachangeregistrationtypeloadingstate ? 
            (
             <Spinner animation="border" variant="light" />
            )
            :
            (
             <span>Commoner</span>
            )
         }
        </button>
        <button className="registrationsassistance-configurationcontainer-configurationcontainer-configurationbutton">
         {
            notifythetelleryouwillhaveachangeregistrationtypeloadingstate ? 
            (
             <Spinner animation="border" variant="light" />
            )
            :
            (
             <span>Public</span>
            )
         }
        </button>
        <button className="registrationsassistance-configurationcontainer-configurationcontainer-configurationbutton">
         {
            notifythetelleryouwillhaveachangeregistrationtypeloadingstate ? 
            (
             <Spinner animation="border" variant="light" />
            )
            :
            (
             <span>Private</span>
            )
         }
        </button>
        <p className="registrationsassistance-configurationcontainer-configurationcontainer-configurationbutton-sendtheamount">You can now send the amount, 0 peso's for practicing account valid within 15 days. Wait for the confimation your account was change with the loading indicator passed by the teller</p>
        <Spinner animation="border" variant="light" className="registrationsassistance-configurationcontainer-configurationcontainer-configurationbutton-sendtheamount-loadingindicator"/>
     </Col>
    </Col>
  </Col>
 )
}