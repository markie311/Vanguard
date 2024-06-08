import React from 'react';

import { Row,
         Col
       } from 'react-bootstrap';

import '../../styles/widthdrawals/moneywidthdrawalform.scss';

export default function MoneyWidthdrawalForm(props) {
 return (
    <Row id='moneywidthdrawalform'>
      <Col xs={5}
           md={5}
           lg={5}
           id='moneywidthdrawalform-amountfieldcontainer'>
        <p className='moneywidthdrawalform-fieldheaderindication'>Amount</p>
        <input type='number'
               className='moneywidthdrawalform-field' />
        <p></p>
      </Col>
      <Col xs={7}
           md={7}
           lg={7}
           id='moneywidthdrawalform-amountfieldcontainer'>
        <p className='moneywidthdrawalform-fieldheaderindication'>Password</p>
        <input type='text'
               className='moneywidthdrawalform-field moneywidthdrawalform-passwordfield'/>
        <p></p>
      </Col>
      <Col xs={6}
           md={6}
           lg={6}
           id='moneywidthdrawalform-amountfieldcontainer'>
      
      </Col>
      <Col xs={6}
           md={6}
           lg={6}
           id='moneywidthdrawalform-widthdrawbuttoncontainer'>
         <button id='moneywidthdrawalform-widthdrawbutton'>
            widthdraw {props.widthdrawal}
         </button>
      </Col>
      <Col xs={6}
           md={6}
           lg={6}
           id='moneywidthdrawalform-widthdrawalresponsemessagecontainer'>
        <p id='moneywidthdrawalform-widthdrawalresponsemessage'>
          Password not set. 
        </p>
        <p id='moneywidthdrawalform-widthdrawalresponsemessage'>
         Click proceed to continue. 
        </p>
        
      </Col>
    </Row>
 )
}