import React, {
        useState,
        useEffect
       } from 'react';

import{ Col,
        Row } from 'react-bootstrap';

import '../../styles/office/office.scss';

import OfficeLogin from "./officelogin/office-logincomponent.js";
import OfficeHamburger from "./officehamburger/officehamburger-component.js";

export default function Office(props) {

 const [loginauthenticationtype, loginauthenticationtypecb] = useState('Hamburger');
 const [officemainnavigationcontentview, officemainnavigationcontentviewcb] = useState('Auth');
 const [officecontentview, officecontentviewcb] = useState('Auth');
 const [mainnavigationbuttonscontainerdisplayproperty, mainnavigationbuttonscontainerdisplaypropertycb] = useState('flex');

 return (
  <Row id='office'>

    <Row id='office-mainnavigationcontainer'
	       style={{display: mainnavigationbuttonscontainerdisplayproperty}}>
     <Col xs={12}
          md={3}
          lg={3}
          className="office-mainnavigationcontainer-mainnavigationbuttoncontainer">
            <button className='office-mainnavigationcontainer-positioningmainnavigationbutton office-mainnavigationcontainer-mainnavigationbutton'
                    onClick={(evt)=> {
                      const _hamburgernavigationbutton =  document.querySelector('.office-mainnavigationcontainer-positioningmainnavigationbutton');
                      const _mainnavigationbuttons = document.querySelectorAll('.office-mainnavigationcontainer-mainnavigationbutton');
                      for ( let i = 0; i < _mainnavigationbuttons.length; i++) {
                        const _button = _mainnavigationbuttons[i];
                        _button.style.border = 'none';
                      }
                      _hamburgernavigationbutton.style.border = '0.5vh solid gray';
                      loginauthenticationtypecb((loginauthentication)=> loginauthentication = 'Hamburger');
                    }}>
              Hamburger
            </button>
     </Col>
     <Col xs={12}
          md={3}
          lg={3} 
          className="office-mainnavigationcontainer-mainnavigationbuttoncontainer">
          <button className='office-mainnavigationcontainer-mainnavigationbutton'
                    onClick={(evt)=> {
                      const _hamburgernavigationbutton =  document.querySelector('.office-mainnavigationcontainer-positioningmainnavigationbutton');
                      const _mainnavigationbuttons = document.querySelectorAll('.office-mainnavigationcontainer-mainnavigationbutton');
                      for ( let i = 0; i < _mainnavigationbuttons.length; i++) {
                        const _button = _mainnavigationbuttons[i];
                        _button.style.border = 'none';
                      }
                      _hamburgernavigationbutton.style.border = '0.5vh solid none';
                      _mainnavigationbuttons[1].style.border = '0.5vh solid gray';
                      loginauthenticationtypecb((loginauthentication)=> loginauthentication = 'Assistant');
                    }}>
            Assistants
            </button>
     </Col>
     <Col xs={12}
          md={3} 
          lg={3} 
          className="office-mainnavigationcontainer-mainnavigationbuttoncontainer">
            <button className='office-mainnavigationcontainer-mainnavigationbutton'
                    onClick={(evt)=> {
                      const _hamburgernavigationbutton =  document.querySelector('.office-mainnavigationcontainer-positioningmainnavigationbutton');
                      const _mainnavigationbuttons = document.querySelectorAll('.office-mainnavigationcontainer-mainnavigationbutton');
                      for ( let i = 0; i < _mainnavigationbuttons.length; i++) {
                        const _button = _mainnavigationbuttons[i];
                        _button.style.border = 'none';
                      }
                      _hamburgernavigationbutton.style.border = '0.5vh solid none';
                      _mainnavigationbuttons[2].style.border = '0.5vh solid gray';
                      loginauthenticationtypecb((loginauthentication)=> loginauthentication = 'Office');
                    }}>
            Office
            </button>
     </Col>
    </Row>
    <Col xs={12}
	       md={12}
         lg={12}
         id="office-view">
     <OfficeViewModalsContainer loginauthenticationtype={loginauthenticationtype}
                                officemainnavigationcontentview={officemainnavigationcontentview}
                                officemainnavigationcontentviewcb={officemainnavigationcontentviewcb}
                                mainnavigationbuttonscontainerdisplayproperty={mainnavigationbuttonscontainerdisplayproperty}
                                mainnavigationbuttonscontainerdisplaypropertycb={mainnavigationbuttonscontainerdisplaypropertycb}
                                
                                vanguarddata={props.vanguarddata}
                                vanguardatacb={props.vanguarddatacb}
                                
                                user={props.user}
                                usercb={props.usercb}
                               
                                />
    </Col>
  </Row>
 )
}

function OfficeViewModalsContainer(props) {

 if ( props.officemainnavigationcontentview === 'Auth' ) {
  return (
    <Col id="office-officeviewmodalscontainer">
     <OfficeLogin loginauthenticationtype={props.loginauthenticationtype}
                  officemainnavigationcontentview={props.officemainnavigationcontentview}
                  officemainnavigationcontentviewcb={props.officemainnavigationcontentviewcb}
                  mainnavigationbuttonscontainerdisplaypropertycb={props.mainnavigationbuttonscontainerdisplaypropertycb}/>
    </Col>
   )
 }

 if ( props.officemainnavigationcontentview === 'Hamburger' ) {
  return (
   <Col id="office-officeviewmodalscontainer">
     <OfficeHamburger officemainnavigationcontentviewcb={props.officemainnavigationcontentviewcb}
	                    mainnavigationbuttonscontainerdisplaypropertycb={props.mainnavigationbuttonscontainerdisplaypropertycb}
                      vanguarddata={props.vanguarddata}
                      vanguardatacb={props.vanguarddatacb}
                      user={props.user}
                      usercb={props.usercb}/>
   </Col>
   )
 }

 if ( props.officemainnavigationcontentview === 'Assistants' ) {
   return (
    <Col id="office-officeviewmodalscontainer">
     Office view modals container
    </Col>
   ) 
 }

if ( props.officemainnavigationcontentview === 'Office' ) {
  return ( 
   <Col id="office-officeviewmodalscontainer">
    Office view modals container
   </Col>
   )

}

}

function OfficeContenNavigationtView(props) {

 if ( props.officemainnavigationcontentview === 'Auth' ) {
     return (
          <Col id='office-contentnavigationview'>
            <OfficeLogin loginauthenticationtype={props.loginauthenticationtype}
                         officemainnavigationcontentviewcb={props.officemainnavigationcontentviewcb}
                         officecontentviewcb={props.officecontentviewcb}/>
          </Col>
     )
 }

 if ( props.officemainnavigationcontentview === 'Hamburger' ) {
     return (
          <Col id='office-contentnavigationcontentview'>
            <OfficeHamburgerContentNavigation loginauthenticationtype={props.loginauthenticationtype}
                         officemainnavigationcontentviewcb={props.officemainnavigationcontentviewcb}
                         officecontentviewcb={props.officecontentviewcb}/>
          </Col>
     )
 }

 if ( props.officemainnavigationcontentview === 'Assistants' ) {
     return (
          <Col id='office-contentnavigationcontentview'>
            <OfficeAssistantContenNavigation loginauthenticationtype={props.loginauthenticationtype}
                         officemainnavigationcontentviewcb={props.officemainnavigationcontentviewcb}
                         officecontentviewcb={props.officecontentviewcb}/>
          </Col>
     )
 }

 if ( props.officemainnavigationcontentview === 'Office' ) {
     return (
          <Col id='office-contentnavigationcontentview'>
            <OfficeDataContentNavigation loginauthenticationtype={props.loginauthenticationtype}
                         officemainnavigationcontentviewcb={props.officemainnavigationcontentviewcb}
                         officecontentviewcb={props.officecontentviewcb}/>
          </Col>
     )
 }
 
}

function OfficeContentView(props) {

 if ( props.officecontentview === 'Auth' ) {
  return (
   <Col id='office-contentview'>
     <OfficeLoginIntroductionPage />
   </Col>
  )
 }

 if ( props.officecontentview === 'Hamburger' ) {
     return (
      <Col id='office-contentview'>
        <OfficeHamburgerContent />
      </Col>
     )
 }

 if ( props.officecontentview === 'Assistants' ) {
     return (
      <Col id='office-contentview'>
        <OfficeDataContentView />
      </Col>
     )
 }

 if ( props.officecontentview === 'Office' ) {
     return (
      <Col id='office-contentview'>
        <OfficeDataContentNavigation />
      </Col>
     )
 }

}

function OfficeLoginIntroductionPage() {
 return (
  <Col id='office-loginintroductionpage'>
    <h1 id='office-loginintroductionpage-loginheaderindication'>LOGIN</h1>
  </Col>
 )
}

function OfficeHamburgerContentNavigation(props) {
 return (
  <Row id='office-hamburgercontentnavigation'>
    <Col xs={4}
	 md={3}
	 lg={3}
	 className="office-hamburgercontent-navigationbuttoncontainer">
     <button className="office-hamburgercontent-navigationbutton">
      Assistants
     </button>
   </Col>
   <Col xs={4}
	md={3}
	lg={3}
	className="office-hamburgercontent-navigationbuttoncontainer">
    <button className="office-hamburgercontent-navigationbutton">
     office
    </button>
   </Col>
   <Col xs={4}
	md={3}
	lg={3}
	className="office-hamburgercontent-navigationbuttoncontainer">
    <button className="office-hamburgercontent-navigationbutton">
     log out
    </button>
  </Col>
  </Row>
 )
}

function OfficeHamburgerContent(props) {
 return (
  <Row id='office-hamburgercontent'>
   <Col xs={3}
        md={3}
	lg={3}
	className="office-hamburgercontent-navigationbuttoncontainer">
    <button className="office-hamburgercontent-navigationbutton">
     Assistants 
    </button>
   </Col>
   <Col xs={3}
	md={3}
	lg={3}
	className="office-hamburgercontent-navigationbuttoncontainer">
     <button className="office-hamburgercontent-navigationbutton">
      Assistants
     </button>
    </Col>
  </Row>
 )
}

function OfficeAssistantContenNavigation(props) {
 return (
  <Col id='office-assistantcontentnavigation'>
   Office assistant content navigation
  </Col>
 )
}

function OfficeAssistantContent(props) {
 return (
  <Col id='office-assistantcontent'>
     Office assistant content
  </Col>
 )
}

function OfficeDataContentNavigation(props) {
 return (
  <Col id='office-datacontentnavigation'>
     Office data content navigation
  </Col>
 ) 
}

function OfficeDataContentView(props) {
 return (
  <Col id='office-datacontentview'>
   Office data content view
  </Col>
 )
}
