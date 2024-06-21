import React, {
    useState,
    useEffect
  } from 'react';

import { Row, 
         Col,
         Spinner } from 'react-bootstrap';

import '../../styles/portfolios/vanguardportfolio.scss';

import CompaniesPortfolio from '../portfolios/companiesportfolio-component.js';
import BusinessesPortfolio from '../portfolios/businessesportfolio-component.js';
import VanguardProduction from '../vanguardproduction/vanguardproduction-component.js';

export default function VanguardPortfolio(props) {
 return (
    <Col id="vanguardporfolio">
      <Col className="vanguardporfolio-porfolioscontainer">
        <Col className="vanguardporfolio-porfolioscontainer-buttoncontainer">
          <button className="vanguardporfolio-porfolioscontainer-buttoncontainer-button">
            Companies
          </button>
        </Col>
        <Row className="vanguardporfolio-porfolioscontainer-porfolioscontainer">
          <Col xs={12}
               md={12}
               lg={12}
               className="vanguardporfolio-porfolioscontainer-porfolioscontainer-layoutcontainer">
            <CompaniesPortfolio companies={props.companies}/>
          </Col>
        </Row>
      </Col>
      <Col className="vanguardporfolio-porfolioscontainer">
        <Col className="vanguardporfolio-porfolioscontainer-buttoncontainer">
          <button className="vanguardporfolio-porfolioscontainer-buttoncontainer-button">
            Companies
          </button>
        </Col>
        <Row className="vanguardporfolio-porfolioscontainer-porfolioscontainer">
          <Col xs={12}
               md={12}
               lg={12}
               className="vanguardporfolio-porfolioscontainer-porfolioscontainer-layoutcontainer">
            <BusinessesPortfolio companies={props.businesses}/>
          </Col>
        </Row>
      </Col>
    </Col>
 )
}

