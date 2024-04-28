import React from 'react';

import { Row, 
         Col } from 'react-bootstrap';

import '../../styles/landingpage/landingpage.scss';

import Header from './header-component.js';
import LandingPageIntroduction from './landingpageintroduction-component.js';
import LPSemiFooter from './lpsemifooter-component';
import NavigationButtons from '../navigations/navigationbuttons/navigationbuttons-component.js';
import Footer from '../footer/footer-component.js';
import XirbitGraph from '../graph/xirbitgraph-component.js';
import WidthdrawalsGrid from '../widthdrawals/widthdrawalsgrid-component.js';
import PrivacyAndPolicy from '../privacyandpolicy/privacyandpolicy-component.js'

export default function LandingPage(props) { 
 return(
  <Row id='landingpage'>
   <Row xs={12}
        md={12}
        lg={12}
        id='landingpage-navigationbargraphcontainer'
        style={{width: props.landingpagenavigationbargraphwidthproperty, left: props.landingpagenavigationbargraphleftproperty}}>
     <Col xs={12}
          md={12}
          lg={12}
          id='landingpage-navigationbargraphheadercontainer'>
     <p id='landingpage-navigationbargraphclosebutton'
        onClick={(evt)=> {
         if ( props.viewport === 'xs' ) {
             props.landingpagenavigationbargraphleftpropertycb((left)=> left === '90%' ? '0' : '-90%')
             return 
         }
          props.landingpagenavigationbargraphleftpropertycb((left)=> left === '80%' ? '0' : '-80%')
        }}>close</p>
     </Col>
     <Col xs={12}
          md={12}
          lg={12}
          id='landingpage-navigationbargraphcomponentcontainer'>
       <XirbitGraph />
     </Col>
   </Row>
   <Row id='landingpage-widthdrawalsnavigationcontainer'
        style={{width: props.landingpagewidthdrwalnavigationwidthproperty, left: props.landingpagewidthdrwalnavigationleftproperty}}>
      <Col xs={12}
          md={12}
          lg={12}
          id='landingpage-widthdrawalsnavigationheadercontainer'>
        <p id='landingpage-widthdrawalsnavigationcontainerclosebutton'
           onClick={(evt)=> {
          if ( props.viewport === 'xs' ) {
            props.landingpagewidthdrwalnavigationleftpropertycb((left)=> left === '-90%' ? '0' : '-90%')
            return 
          }
            props.landingpagewidthdrwalnavigationleftpropertycb((left)=> left === '-100%' ? '0' : '-100%')
         }}>close</p>
     </Col>
     <Col id='landingpage-widthdrawalsnavigationcontainer-widthdrawalsnavigationcomponentcontainer'>
       <WidthdrawalsGrid />
     </Col>
   </Row>
   <Col xs={12}
        md={12}
        lg={12}
        id='landingpage-content'>
    <Header bargraphinterval={props.bargraphinterval}
            bargraphintervalcb={props.bargraphintervalcb}/>
    <LandingPageIntroduction />
    <LPSemiFooter />
    <NavigationButtons viewport={props.viewport}
                       landingpagenavigationbargraphleftproperty={props.landingpagenavigationbargraphleftproperty}
                       landingpagenavigationbargraphleftpropertycb={props.landingpagenavigationbargraphleftpropertycb}
                       landingpagewidthdrwalnavigationleftpropertycb={props.landingpagewidthdrwalnavigationleftpropertycb}/>
    <PrivacyAndPolicy />
    <Footer />
   </Col>
   <WelcomeIntroduction />
  </Row>
 )
} 

function WelcomeIntroduction(props) {
return (
  <Col id="vanguardwelcomeintroduction">
   <p>Welcome introduction</p>
  </Col>
)
}