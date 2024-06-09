import React from 'react';

import { Row,
         Col } from 'react-bootstrap';

import '../../styles/footer/footer.scss';

export default function Footer() {
 return (
  <Row id='footer'>
   <Col xs={12}
        md={12}
        lg={12}
        id='footer-footercontainer1'>
     <p className='footer-header footer-footercontainer1-footerfirstheader'>© 2022 with the expectations that is longing to happen and stops, Vanguard. All rights reserved. </p>
   </Col>
  </Row>
 )
}