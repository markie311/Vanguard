import React, {
          useState
       } from 'react';

import { Row, 
         Col,
         Spinner } from 'react-bootstrap';

import '../../styles/landingpage/landingpage.scss';

import { timestamp } from '../lib/timestamps';

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
   <WelcomeIntroduction  welcomeinmtroductionmesssage={props.elcomeinmtroductionmesssage}
                         welcomeinmtroductionmesssagecb={props.welcomeinmtroductionmesssagecb}
                         />
  </Row>
 )
} 

function WelcomeIntroduction(props) {


  const [registermenowrequestloadingstate, registermenowrequestloadingstatecb] = useState(false);
  const [continuewithapracticing, continuewithapracticingcb] = useState(false);

  return (
    <Col id="vanguardwelcomeintroduction">
      <Col id="vanguardwelcomeintroduction-closebuttoncontainer">
      <button id="vanguardwelcomeintroduction-closebutton"
              onClick={(evt)=> {

                const _welcomeintroductionmodal = document.getElementById("vanguardwelcomeintroduction");
                _welcomeintroductionmodal.style.top = "-100vh";
                _welcomeintroductionmodal.style.opacity = "0";

              }}>
        x
      </button>
      </Col>
      <Col id="vanguardwelcomeintroduction-welcomeintroductionheadercontainer">
        <p id="vanguardwelcomeintroduction-welcomeintroductionheader">Welcome to Vanguard public website</p>
        <p id="vanguardwelcomeintroduction-welcomeintroductionheader">You are suppose to enter a common public account holder</p>
        <p id="vanguardwelcomeintroduction-welcomeintroductionheader">Common public are determined by locations, anywhere, that the public is more of on the spot, on a topic by interests.</p>
        <p id="vanguardwelcomeintroduction-welcomeintroductionheader">Common public account's are free of registration and for a Life-time recieving transactions give aways even without maintaining a balance on your accounts</p>
        <p id="vanguardwelcomeintroduction-welcomeintroductionheader">Vanguard's public website is out and all data are with freedom to use without worrying for real transactions to a purpose of being comfortable with the system using self given data to practice.</p>
        <button id="vanguardwelcomeintroduction-welcomeintroductionheader-registermenowbutton"
                onClick={()=> {
                  registermenowrequestloadingstatecb((state)=> state = true)
                }}>
          {
            registermenowrequestloadingstate ? 
            (
             <Spinner animation="border" variant="dark" />
            )
            :
            (
              <span>Register and authenticate me now to practice this public website</span>
            )
          }
        </button>

        <p id="vanguardwelcomeintroduction-welcomeintroductionheader-registermenowresponsemessage">You are already done with this process</p>

        <button id="vanguardwelcomeintroduction-welcomeintroductionheader-continuewithapracticingaccountbutton"
                onClick={(evt)=> {
                  continuewithapracticingcb((state)=> state = true)
                }}>
          {
           continuewithapracticing ?
           (
            <Spinner animation="border" variant="dark" />
           )
           :
           (
            <span>
              Continue with a practicing accounts to practice this public website
            </span>
           )

          }
          </button>
          
          <p id="vanguardwelcomeintroduction-welcomeintroductionheader-continuewithapracticingaccountresponsemessage">You can close the modal now</p>

      </Col>
    </Col>
  )

}