import React, {
        useState
       } from 'react';

import { Row, 
         Col } from 'react-bootstrap';

import '../../styles/widthdrawals/xirbitwidthdrawalform.scss';

import MoneyWidthdrawalForm from './moneywidthdrawalform-component.js';

export default function XirbitWidthdrawalForm() {

 const [widthdrawal, widthdrawalcb] = useState('');

 return (
  <Row id='xirbitwidthdrawalform'>   
    <Col xs={6}
         md={6}
         lg={6}
         className='xirbitwidthdrawalform-moneyandfundsheaderindicationcontainer'>
      <p className='xirbitwidthdrawalform-moneyheaderindication'>Money</p>
      <p className='xirbitwidthdrawalform-amountheaderindication'>0</p>
    </Col>
    <Col xs={6}
         md={6}
         lg={6}
         className='xirbitwidthdrawalform-moneyandfundsheaderindicationcontainer-moneytogglebuttoncontainer'>
       <div className='xirbitwidthdrawalform-moneyandfundsheaderindicationcontainer-moneytogglebutton'
            onClick={(evt)=> {

             const _moneytogglebutton = document.querySelector('.xirbitwidthdrawalform-moneyandfundsheaderindicationcontainer-moneytogglebuttonindicator');
             const _moneytogglebuttonindicator = _moneytogglebutton.style.marginLeft;
             const _fundstogglebutton = document.querySelector('.xirbitwidthdrawalform-moneyandfundsheaderindicationcontainer-fundstogglebuttonindicator');
             const _fundstogglebuttonindicator = _fundstogglebutton.style.marginLeft;
 
             if ( _moneytogglebuttonindicator !== '50%') {
              _moneytogglebutton.style.marginLeft = '50%';
              _moneytogglebutton.style.backgroundColor = 'dodgerblue';
              _fundstogglebutton.style.marginLeft = '0%';
              _fundstogglebutton.style.backgroundColor = 'gray';
              widthdrawalcb((widthdrawal)=> widthdrawal = 'money')
             } else {
              _moneytogglebutton.style.marginLeft = '0%';
              _moneytogglebutton.style.backgroundColor = 'gray';
              _fundstogglebutton.style.marginLeft = '50%';
              _fundstogglebutton.style.backgroundColor = 'dodgerblue';
              widthdrawalcb((widthdrawal)=> widthdrawal = 'funds')
             }

            }}>
        <div className='xirbitwidthdrawalform-moneyandfundsheaderindicationcontainer-moneytogglebuttonindicator'>

        </div>
       </div> 
    </Col>
    <Col xs={6}
         md={6}
         lg={6}
         className='xirbitwidthdrawalform-moneyandfundsheaderindicationcontainer'>
      <p className='xirbitwidthdrawalform-fundsheaderindication'>Funds</p>
      <p className='xirbitwidthdrawalform-amountheaderindication'>0</p>
    </Col>
    <Col xs={6}
         md={6}
         lg={6}
         className='xirbitwidthdrawalform-moneyandfundsheaderindicationcontainer-fundstogglebuttoncontainer'>
       <div className='xirbitwidthdrawalform-moneyandfundsheaderindicationcontainer-fundstogglebutton'
            onClick={(evt)=> {

              const _moneytogglebutton = document.querySelector('.xirbitwidthdrawalform-moneyandfundsheaderindicationcontainer-moneytogglebuttonindicator');
              const _moneytogglebuttonindicator = _moneytogglebutton.style.marginLeft;
              const _fundstogglebutton = document.querySelector('.xirbitwidthdrawalform-moneyandfundsheaderindicationcontainer-fundstogglebuttonindicator');
              const _fundstogglebuttonindicator = _fundstogglebutton.style.marginLeft;
  
              if ( _fundstogglebuttonindicator !== '50%') {
               _fundstogglebutton.style.marginLeft = '50%';
               _fundstogglebutton.style.backgroundColor = 'dodgerblue';
               _moneytogglebutton.style.marginLeft = '0%';
               _moneytogglebutton.style.backgroundColor = 'gray';
               widthdrawalcb((widthdrawal)=> widthdrawal = 'funds')
              } else {
               _fundstogglebutton.style.marginLeft = '0%';
               _fundstogglebutton.style.backgroundColor = 'gray';
               _moneytogglebutton.style.marginLeft = '50%';
               _moneytogglebutton.style.backgroundColor = 'dodgerblue';
               widthdrawalcb((widthdrawal)=> widthdrawal = 'money')
              }
 
             }}>
        <div className='xirbitwidthdrawalform-moneyandfundsheaderindicationcontainer-fundstogglebuttonindicator'>

        </div>
       </div> 
    </Col>
    <Col xs={12}
         md={12}
         lg={12}
         id='xirbitwithdrawalform-widthdrawalformcontainer'>
       <MoneyWidthdrawalForm widthdrawal={widthdrawal}/>
    </Col>
    <Col id='xirbitwithdrawalform-widthdrawalhistorybuttoncontainer'>
      <button id='xirbitwithdrawalform-widthdrawalhistorybutton'>History</button>
    </Col>
  </Row>
 )
}
