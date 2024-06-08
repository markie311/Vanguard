import React, {
        useState
       } from 'react';

import { Row, 
         Col,
         Spinner } from 'react-bootstrap';

import '../../styles/widthdrawals/xirbitwidthdrawalform.scss';

import MoneyWidthdrawalForm from './moneywidthdrawalform-component.js';

export default function XirbitWidthdrawalForm() {

 const [widthdrawal, widthdrawalcb] = useState('');

 const [widthdrawalque, widthdrawalquecb] = useState("Money");
 const [moneywidthdrawalqueloadingindication, moneywidthdrawalqueloadingindicationcb] = useState(false);
 const [fundswidthdrawalqueloadingindication, fundswidthdrawalqueloadingindicationcb] = useState(false);

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

             widthdrawalquecb((quedata)=> quedata = "Money");

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

              widthdrawalquecb((quedata)=> quedata = "Funds");
 
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
    <Col id="xirbitwithdrawalform-widthdrawalhistorybuttoncontainer">
      <XirbitWidthdrawalQue widthdrawalque={widthdrawalque}
                            moneywidthdrawalqueloadingindication={moneywidthdrawalqueloadingindication}
                            moneywidthdrawalqueloadingindicationcb={moneywidthdrawalqueloadingindicationcb}
                            fundswidthdrawalqueloadingindication={fundswidthdrawalqueloadingindication}
                            fundswidthdrawalqueloadingindication={fundswidthdrawalqueloadingindication}
                            fundswidthdrawalqueloadingindicationcb={fundswidthdrawalqueloadingindicationcb}/>
    </Col>
  </Row>
 )
}

function XirbitWidthdrawalQue(props) {
 if ( props.widthdrawalque === "Money" ) {
  return (
    <Col id="xirbitwidthdrawalform-quecontainer">
      <p className="xirbitwidthdrawalform-quecontainer-headerindication">Money widthdrawal que</p>
      <p className="xirbitwidthdrawalform-quecontainer-headerindication">Que, 0</p>
      <p className="xirbitwidthdrawalform-quecontainer-headerindication">Processe's are done manually sending back your deposited Money through comparing your Vanguard phone number and phone number used by your payments</p>
      <button id="xirbitwidthdrawalform-quecontainer-refreshbutton"
              onClick={()=> {
              }}>

        {
           props.moneywidthdrawalqueloadingindication ?
           (
            <Spinner animation="border" variant="secondary" />
           )
           : 
           (
            <span>Refresh</span>
           )
        }

        </button>
    </Col>
  )
 }
 if ( props.widthdrawalque === "Funds" ) {
  return (
    <Col id="xirbitwidthdrawalform-quecontainer">
      <p className="xirbitwidthdrawalform-quecontainer-headerindication">Funds widthdrawal que</p>
      <p className="xirbitwidthdrawalform-quecontainer-headerindication">Que, 0</p>
      <p className="xirbitwidthdrawalform-quecontainer-headerindication">Processe's are done manually sending back your recieved Vanguard currency through comparing your Vanguard phone number and phone number used by your payments</p>
      <button id="xirbitwidthdrawalform-quecontainer-refreshbutton">
        {
          props.fundswidthdrawalqueloadingindication ?
          (
            <Spinner animation="border" variant="secondary" />
          ) 
          :
          ( 
           <span>Refresh</span>
          )
        }</button>
    </Col>
  )
 }
}
