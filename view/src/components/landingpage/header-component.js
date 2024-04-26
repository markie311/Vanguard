import React from 'react';

import { Row,
         Col } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import '../../styles/landingpage/header.scss';

import ActiveBarGraphToggle from '../toggleindications/activebargraphtoggle-component.js';

export default function Header(props) {

 const navigate = useNavigate();
 
  return(
    <Row id='header'>
      <Col xs={8}
           md={8}
           lg={8}
           id='header-headercontainer1'>
       <p id='header-headercontainer1-databaseloginheader'>database login</p>
      </Col>
      <Col xs={4}
           md={4}
           lg={4}
           id='header-headercontainer2'>
       <p id='header-headercontainer2-loginheader'
          onClick={(evt)=> {
             navigate('/database/account')
          }}>login</p>
      </Col>
      <ActiveBarGraphToggle bargraphintervalcb={props.bargraphintervalcb}/>
    </Row>
  )
}