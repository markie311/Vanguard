import React from "react"; 

import { Row, 
	 Col 
       } from "react-bootstrap"; 

import "../../../styles/office/officelogin/officelogin.scss";

export default function OfficeLogin(props) {
 return (
  <Col id='office-login'>
   <Col id='office-login-headercontainer'>
    <p id='office-login-headercontainer-headerindication'>Note: {props.loginauthenticationtype} login</p>
   </Col>
   <Col id='office-login-fieldscontainer'>
    <input type='text'
           className='office-login-userinputfield'/>
    <br />
    <input type='text'
	   className='office-login-userinputfield'/>
    <br />
    <button id='office-login-loginbutton'
	     onClick={(evt)=> {

        const _mainnavigationbuttoncontainer = document.querySelector('#office-mainnavigationcontainer');
	
	if ( props.loginauthenticationtype === 'Hamburger' ) {
          props.officemainnavigationcontentviewcb((mainnavigationview)=> mainnavigationview = 'Hamburger');
        }

	if ( props.loginauthenticationtype === 'Assistant' ) {
          props.officemainnavigationcontentviewcb((mainnavigationview)=> mainnavigationview = 'Assistants');
        }
	
	if ( props.loginauthenticationtype === 'Office' ) {
	  props.officemainnavigationcontentviewcb((mainnavigationview)=> mainnavigationview = 'Office');
        }

	props.mainnavigationbuttonscontainerdisplaypropertycb((displayproperty)=> displayproperty = 'none' );

	}}>
	login
      </button>
   </Col>


  </Col>
 )
}

