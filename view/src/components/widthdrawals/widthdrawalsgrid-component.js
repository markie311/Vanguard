import React from 'react';

import { Row } from 'react-bootstrap';

import '../../styles/widthdrawals/widthdrawalsgrid.scss';

import XirbitWidthdrawalForm from './xirbitwidthdrawalform-component.js'

export default function WidthdrawalsGrid() {
 return(
  <Row id='widthdrawalsgrid'>
    <XirbitWidthdrawalForm />
  </Row>
 )
}