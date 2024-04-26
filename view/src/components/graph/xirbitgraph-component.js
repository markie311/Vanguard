import React from 'react';

import { Row,
         Col } from 'react-bootstrap';

import '../../styles/graph/xirbitgraph.scss';

import MainGrapGrid from './maingraphgrid-component.js';

export default function XirbitGraph(props) {
 return(
  <Row id='xirbitgraph'>
     <MainGrapGrid />
  </Row>
 )
}