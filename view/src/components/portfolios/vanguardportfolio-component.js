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

  const [vanguardcompaniesportfolio, vanguardcompaniesportfoliocb] = useState('0vh');
  const [vanguardbusinessesportfolio, vanguardbusinessesportfoliocb] = useState('0vh');

 return (
    <Col id="vanguardporfolio">
      <Col className="vanguardporfolio-porfolioscontainer">
        <Col className="vanguardporfolio-porfolioscontainer-buttoncontainer">
          <button className="vanguardporfolio-porfolioscontainer-buttoncontainer-button"
                  onClick={()=> {
                    vanguardcompaniesportfoliocb((height)=> height === "0vh" ? "100vh" : "0vh");
                  }}>
            Companies
          </button>
        </Col>
        <Row className="vanguardporfolio-porfolioscontainer-porfolioscontainer"
             style={{height: vanguardcompaniesportfolio}}>
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
          <button className="vanguardporfolio-porfolioscontainer-buttoncontainer-button"
                    onClick={()=> {
                      vanguardbusinessesportfoliocb((height)=> height === "0vh" ? "100vh" : "0vh");
                    }}>
            Businesses
          </button>
        </Col>
        <Row className="vanguardporfolio-porfolioscontainer-porfolioscontainer">
          <Col xs={12}
               md={12}
               lg={12}
               className="vanguardporfolio-porfolioscontainer-porfolioscontainer-layoutcontainer"
               style={{height: vanguardbusinessesportfolio}}>
            <BusinessesPortfolio businesses={props.businesses}/>
          </Col>
        </Row>
      </Col>
    </Col>
 )
}

