import React, {
         useState,
         useEffect
       } from 'react';

import { Col, 
         Row,
         Spinner } from 'react-bootstrap';

import '../../styles/purchasing/paymentmodal.scss';

import barmovementpercentagecalculation  from '../lib/barmovementpercentagecalculation.js';

import axiosCreatedInstance from '../lib/axiosutil.js';

export default function PaymentModal(props) {

 const [insufficientpayment, insufficientpaymentcb] = useState(true);
 const [totalpayment, totalpaymentcb] = useState(100); 
 const [moneypaymentdeductions, moneypaymentdeductionscb] = useState(0);
 const [remainingmoney, remainingmoneycb] = useState(0);
 const [fundspaymentdeductions, fundspaymentdeductionscb] = useState(0);
 const [remainingfunds, remainingfundscb] = useState(0);

 const [paymentprocessloadingstate, paymentprocessloadingstatecb] = useState(false);

{/*
 useEffect(()=> {

  console.log(JSON.stringify(props.user))
  evaluatePayment();

  const _purchasebargraphindication = document.querySelectorAll('.paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraphindication');
  const _purchasespercentageindication = document.querySelectorAll('.paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraphheaderpercentageindication');
  const _barpercentagemovementinterval = null;

  barmovementpercentagecalculation(_purchasebargraphindication[0], _purchasespercentageindication[0], _barpercentagemovementinterval, 100, 1000);
  barmovementpercentagecalculation(_purchasebargraphindication[1], _purchasespercentageindication[1], _barpercentagemovementinterval, 100, 1000);

 }, [])
*/}

 async function evaluatePayment() {
   if ( props.user.money < totalpayment ) {
     if ( ( props.user.moneyandfunds.money.amount + props.user.moneyandfunds.funds.amount ) < totalpayment) {
       insufficientpaymentcb((payment)=> payment = false)
     } else {
       insufficientpaymentcb((payment)=> payment = true)
     }
   } else {
    insufficientpaymentcb((payment)=> payment = true)
   }
 }

 return (
  <Col xs={12}
       md={12}
       lg={12}
       id='paymentmodal'>
    <Row id='paymentmodal-gridcontainer'> 
      <Col xs={12}
           md={12}
           lg={12} 
           id='paymentmodal-gridcontainer-paymentcontainer'>
        <Row id='paymentmodal-gridcontainer-paymentgridcontainer'>
          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication paymentmodal-gridcontainer-paymentgridcontainer-merchandiselistheaderindication'>Merchandise list</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication paymentmodal-gridcontainer-paymentgridcontainer-pricelistheaderindication'>Price</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication paymentmodal-gridcontainer-paymentgridcontainer-weightlistheaderindication'>Weight</p>
          </Col>
          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-merchandiselistcontainer'>
            {
             props.purchasing.map((merchandise,idx)=> {
                return (
                  <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'
                     key={idx}>
                     {merchandise.details.product.name}
                  </p>
                )
             })
            }
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-pricelistcontainer'>
          {/*
            {
             props.purchasing.map((merchandise,idx)=> {
                return (
                  <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'
                     key={idx}>
                     {merchandise.system.request.product.reduce((previousValue, currentValue)=> previousValue + currentValue.pricesbreakdown.price,0)}
                  </p>
                )
             })
            }
          */}
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-weightlistcontainer'>
            {/* 
                {
                  props.purchasing.map((merchandise,idx)=> {
                    return (
                      <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'
                         key={idx}>
                      {merchandise.system.request.product.reduce((previousValue, currentValue)=> previousValue + currentValue.details.weight,0)}/{merchandise.details.product.category}
                     </p>
                    )
                  })
                }
              */}
          </Col>
          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>Total</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>{props.totalmerchandiseprice} pesos</p>
          </Col>
          
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>{props.allnonmrnselectedproduct.reduce((previousValue, currentValue)=> previousValue + currentValue.details.weight,0) + props.allmrnselectedproduct.reduce((previousValue, currentValue)=> previousValue + currentValue.details.weight,0)} grams</p>
          </Col>

          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'></p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'></p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>mrn/total {props.allmrnselectedproduct.reduce((previousValue, currentValue)=> previousValue + currentValue.details.weight,0)} grams</p>
          </Col>

          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'></p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'></p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
                <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>non-mrn/total {props.allnonmrnselectedproduct.reduce((previousValue, currentValue)=> previousValue + currentValue.details.weight,0)} grams</p>
          </Col>

          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-deliveryheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>Delivery</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-deliveryheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>{props.totaldeliveryfee} pesos</p>
          </Col>
          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer'>
             <div id='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer-togglecontainer'
                  onClick={(evt)=> {

                    const _moneytogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer-togglebutton')
                    const _moneytogglebuttonmarginproperty = _moneytogglebutton.offsetLeft
                    const _fundstogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-fundsheaderindicationcontainer-togglebutton')
                    const _fundstogglebuttonmarginproperty = _fundstogglebutton.style.marginLeft

                    const _paymentresponsemessage = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication')
                    const _processpaymentbutton =  document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-processpaymentbutton')
                    const _deductionscontainer = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionsgridcontainer');
                    const _cantproceedtopaymentheaderindication = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-cantproceestopaymentheaderindication');
                    const _nopriceandlocationtobecalculatedheaderindication = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication');
                    const $paymenthod = [_moneytogglebutton.style.backgroundColor, _fundstogglebutton.style.backgroundColor];
                    const $validatepaymentmethod = $paymenthod.every((togglebuttonproperty)=> togglebuttonproperty === 'gray' );
                    const $activepaymentmethod = $paymenthod.findIndex((paymentmethod)=> paymentmethod === '50%');

                    if ( _moneytogglebuttonmarginproperty > 0 ) {
                     
                      if (!$validatepaymentmethod) {

                        _moneytogglebutton.style.backgroundColor = 'gray';
                        _moneytogglebutton.style.marginLeft = '0%';
                        _paymentresponsemessage.style.color = 'white';
                        _deductionscontainer.style.display = 'none';

                        _nopriceandlocationtobecalculatedheaderindication.style.color = 'red';
                        _nopriceandlocationtobecalculatedheaderindication.innerText = 'no need\'s price and location to be calculated';
                        _nopriceandlocationtobecalculatedheaderindication.style.display = 'block';
                        _cantproceedtopaymentheaderindication.style.color = 'red';
                        _cantproceedtopaymentheaderindication.innerText = 'can\'t proceed to request';
                        props.paymentmethodsetcb((validation)=> validation = false)
                      }

                        _moneytogglebutton.style.backgroundColor = 'gray';
                        _moneytogglebutton.style.marginLeft = '0%';
                        _deductionscontainer.style.display = 'none';

                    } else {
 
                      _moneytogglebutton.style.backgroundColor = 'dodgerblue';
                      _moneytogglebutton.style.marginLeft = '50%';
                      _fundstogglebutton.style.backgroundColor = 'gray';
                      _fundstogglebutton.style.marginLeft = '0%';

                      if ( props.user.moneyandfunds.money.amount < totalpayment ) {

                        if ( (props.user.moneyandfunds.money.amount + props.user.moneyandfunds.funds.amount ) === totalpayment || (props.user.moneyandfunds.money.amount + props.user.moneyandfunds.funds.amount ) < totalpayment ) {
                          _paymentresponsemessage.innerText = `can't proceed to payment: The money was lacking ${props.user.moneyandfunds.money.amount - totalpayment}, even when the remaining lacking amount will be deducted to your fund's`;
                          props.paymentmethodsetcb((validation)=> validation = false);
                          return
                        } else {
                          _deductionscontainer.style.display = 'flex';
                          _paymentresponsemessage.innerText = `The money was lacking ${props.user.moneyandfunds.money.amount - totalpayment}, proceeding processing the request ${totalpayment - props.user.moneyandfunds.money.amount} will be deducted to your funds`;
                          _cantproceedtopaymentheaderindication.style.color = 'white';
                          _cantproceedtopaymentheaderindication.innerText = 'proceed to request';
                          moneypaymentdeductionscb((deductions)=> deductions = totalpayment - props.user.moneyandfunds.money.amount);
                          remainingmoneycb((deductions)=> deductions = 0);
                          fundspaymentdeductionscb((deductions)=> deductions =  totalpayment - props.user.moneyandfunds.money.amount);
                          remainingfundscb((deductions)=> deductions = props.user.moneyandfunds.funds.amount - (totalpayment - props.user.moneyandfunds.money.amount));
                          props.paymentmethodsetcb((validation)=> validation = true)
                          return 
                        }

                      } 

                      if ( props.user.moneyandfunds.money.amount === totalpayment || props.user.moneyandfunds.money.amount > totalpayment ) {

                         _deductionscontainer.style.display = 'flex';
                         moneypaymentdeductionscb((deductions)=> deductions = totalpayment)
                         remainingmoneycb((deductions)=> deductions = props.user.moneyandfunds.money.amount - totalpayment)
                         fundspaymentdeductionscb((deductions)=> deductions = 0)
                         remainingfundscb((deductions)=> deductions = props.user.moneyandfunds.funds.amount)
                     
                         _nopriceandlocationtobecalculatedheaderindication.style.display = 'none';
                         _cantproceedtopaymentheaderindication.style.color = 'white';
                         _cantproceedtopaymentheaderindication.innerText = 'proceed to request';

                         props.paymentmethodsetcb((validation)=> validation = true)

                      }

                    }
                  
                  }}>
               <div id='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer-togglebutton'>

               </div>
             </div>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-moneyamountheaderindication'>{props.user.moneyandfunds.money.amount}</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-moneyheaderindication'>Money</p>
          </Col>
          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer'>
               <div id='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-fundsheaderindicationcontainer-togglecontainer'
                    onClick={(evt)=> {

                      const _moneytogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer-togglebutton')
                      const _moneytogglebuttonmarginproperty = _moneytogglebutton.offsetLeft
                      const _fundstogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-fundsheaderindicationcontainer-togglebutton')
                      const _fundstogglebuttonmarginproperty = _fundstogglebutton.style.marginLeft;
  
                      const _paymentresponsemessage = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication')
                      const _processpaymentbutton =  document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-processpaymentbutton')
                      const _deductionscontainer = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionsgridcontainer')
                      const _cantproceedtopaymentheaderindication = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-cantproceestopaymentheaderindication');
                      const _nopriceandlocationtobecalculatedheaderindication = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication');
                      const $paymenthod = [_moneytogglebutton.style.backgroundColor, _fundstogglebutton.style.backgroundColor];
                      const $validatepaymentmethod = $paymenthod.every((togglebuttonproperty)=> togglebuttonproperty === 'gray' );
                      const $activepaymentmethod = $paymenthod.findIndex((paymentmethod)=> paymentmethod === '50%')

                    
                        if ( _fundstogglebuttonmarginproperty !== '0%' ) {

                          if (!$validatepaymentmethod) {

                            _moneytogglebutton.style.backgroundColor = 'gray';
                            _moneytogglebutton.style.marginLeft = '0%';
                            _paymentresponsemessage.style.color = 'white';
                            _deductionscontainer.style.display = 'none';
                            
                            _nopriceandlocationtobecalculatedheaderindication.style.color = 'red';
                            _nopriceandlocationtobecalculatedheaderindication.innerText = 'no need\'s price and location to be calculated';
                            _nopriceandlocationtobecalculatedheaderindication.style.display = 'block';
                            _cantproceedtopaymentheaderindication.style.color = 'red';
                            _cantproceedtopaymentheaderindication.innerText = 'can\'t proceed to request';
                            props.paymentmethodsetcb((validation)=> validation = false)
                          }
    
                            _fundstogglebutton.style.backgroundColor = 'gray';
                            _fundstogglebutton.style.marginLeft = '0%';
                            _deductionscontainer.style.display = 'none';

                        } else {

                          _fundstogglebutton.style.backgroundColor = 'dodgerblue';
                          _fundstogglebutton.style.marginLeft = '50%';
                          _moneytogglebutton.style.backgroundColor = 'gray';
                          _moneytogglebutton.style.marginLeft = '0%';


                          if ( props.user.moneyandfunds.funds.amount < totalpayment ) {

                            if ( (props.user.moneyandfunds.funds.amount + props.user.moneyandfunds.money.amount ) === totalpayment || (props.user.moneyandfunds.funds.amount + props.user.moneyandfunds.money.amount ) < totalpayment ) {
                              _paymentresponsemessage.innerText = `can't proceed to payment: Your funds was lacking ${props.user.moneyandfunds.funds.amount - totalpayment}, even when the remaining lacking amount will be deducted to money`;
                              props.paymentmethodsetcb((validation)=> validation = false)
                              return
                            } else {
                              _deductionscontainer.style.display = 'flex';
                              _paymentresponsemessage.innerText = `Your funds was lacking ${props.user.moneyandfunds.funds.amount - totalpayment}, proceeding processing the request ${totalpayment - props.user.moneyandfunds.money.amount} will be deducted to money`;
                              _cantproceedtopaymentheaderindication.style.color = 'white';
                              _cantproceedtopaymentheaderindication.innerText = 'proceed to request';
                              moneypaymentdeductionscb((deductions)=> deductions = totalpayment - props.user.moneyandfunds.funds.amount)
                              remainingmoneycb((deductions)=> deductions = props.user.moneyandfunds.money.amount-  ( totalpayment - props.user.moneyandfunds.funds.amount) )
                              fundspaymentdeductionscb((deductions)=> deductions = totalpayment - props.user.moneyandfunds.funds.amount)
                              remainingfundscb((deductions)=> props.user.moneyandfunds.funds.amount - ( totalpayment - props.user.moneyandfunds.funds.amount))
                              props.paymentmethodsetcb((validation)=> validation = true)
                              return 
                            }

                          }

                          if ( props.user.moneyandfunds.funds.amount === totalpayment || props.user.moneyandfunds.funds.amount > totalpayment ) {

                            _deductionscontainer.style.display = 'flex';
                            moneypaymentdeductionscb((deductions)=> deductions = 0);
                            remainingmoneycb((deductions)=> deductions = props.user.moneyandfunds.money.amount );
                            fundspaymentdeductionscb((deductions)=> deductions = totalpayment);
                            remainingfundscb((deductions)=> deductions = props.user.moneyandfunds.funds.amount - totalpayment);

                            _nopriceandlocationtobecalculatedheaderindication.style.display = 'none';
                            _cantproceedtopaymentheaderindication.style.color = 'white';
                            _cantproceedtopaymentheaderindication.innerText = 'proceed to request';

                            props.paymentmethodsetcb((validation)=> validation = true)
   
                          }

                        }

                    }}>
               <div id='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-fundsheaderindicationcontainer-togglebutton'>

               </div>
               </div>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-fundsamountheaderindication'>{props.user.moneyandfunds.funds.amount}</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-fundsheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-fundsheaderindication'>Funds</p>
          </Col>
          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalsigncontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>Total payment</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalamounttobepaidcontainer'>
              <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>{totalpayment}</p>
          </Col>
          <Col xs={0}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalsigncontainer'>
          </Col>
          <Col xs={12}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer'>
               {
                props.cargodestinationset ? (
                 <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindicationa'></p>
                ) 
                : 
                (
                 <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication'>no need's price and location to be calculated</p>
                )
               }
               <Row className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionsgridcontainer'>
                 <Col xs={12}
                      md={12}
                      lg={12}
                      className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionscontainer'>
                         <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionheaderindication'>Calculations</p>
                 </Col>
                 <Col xs={4}
                      md={4}
                      lg={4}
                      className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionscontainer'>
                         <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionheaderindication'>Money</p>
                 </Col>
                 <Col xs={4}
                      md={4}
                      lg={4}
                      className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionscontainer'>
                         <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionheaderindication'>{props.user.moneyandfunds.money.amount} - {moneypaymentdeductions}</p>
                 </Col>
                 <Col xs={4}
                      md={4}
                      lg={4}
                      className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionscontainer'>
                         <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionheaderindication'>
                         {
                          Math.sign(remainingmoney) === -1 ? 
                          (
                            <span>0</span>
                          )
                          :
                          (
                            <span>{remainingmoney}</span>
                          )
                         }
                         </p>
                 </Col>
                 <Col xs={4}
                      md={4}
                      lg={4}
                      className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionscontainer'>
                        <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionheaderindication'>Funds</p>
                 </Col>
                 <Col xs={4}
                      md={4}
                      lg={4}
                      className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionscontainer'>
                         <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionheaderindication'>{props.user.moneyandfunds.funds.amount} - {fundspaymentdeductions}</p>
                 </Col>
                 <Col xs={4}
                      md={4}
                      lg={4}
                      className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionscontainer'>
                         <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionheaderindication'>
                         {
                          Math.sign(remainingfunds) === -1 ? 
                          (
                            <span>0</span>
                          )
                          :
                          (
                            <span>{remainingfunds}</span>
                          )
                         }
                         </p>
                 </Col>
                 <Col xs={4}
                      md={4}
                      lg={4}
                      className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionscontainer'>
                        <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionheaderindication'>Total payment</p>
                 </Col>
                 <Col xs={4}
                      md={4}
                      lg={4}
                      className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionscontainer'>
                        <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionheaderindication'>{totalpayment}</p>
                 </Col>
               </Row>
          </Col>
          <Col xs={12}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentbuttoncontainer'>
            {
              props.cargodestinationset ? (
                <>
                {
                  paymentprocessloadingstate ? 
                  (
                    <Spinner animation="border" 
                             variant="light"
                             className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-processpaymentloadingspinner' />
                  ) : 
                  (
                    <button className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-processpaymentbutton'
                            onClick={ async (evt)=> {

                      const _moneytogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer-togglebutton')
                      const _moneytogglebuttonmarginproperty = _moneytogglebutton.style.marginLeft
                      const _fundstogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-fundsheaderindicationcontainer-togglebutton')
                      const _fundstogglebuttonmarginproperty = _fundstogglebutton.style.marginLeft

                      const _paymentresponsemessage = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication')
                      const _processpaymentbutton =  document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-processpaymentbutton')

                      const _userauthenticationtype = props.user.authentications.authenticationtype
                      const _operationscope = props.operations.find((location)=> location.baranggay === props.user.details.location.baranggay && location.street === props.user.details.location.street )

                      // alert(JSON.stringify(props.user.authentication))
                      //alert(JSON.stringify(_operationscope))
                      //alert(JSON.stringify(props.operations))

                      if ( _moneytogglebuttonmarginproperty !== '50%' && _fundstogglebuttonmarginproperty !== '50%' ) {
                        _paymentresponsemessage.style.color = 'white';
                        _paymentresponsemessage.innerText = 'Choose payment method';
                      } else {
                        if ( props.requestlimitreacherrormessage === 'Request limit reach' ) {
                          _paymentresponsemessage.style.color = 'tomato';
                          _paymentresponsemessage.innerText = 'Request limit reach';
                          return
                        } else {
                          if ( _userauthenticationtype === 'Public' ) {
                            alert(_operationscope)
                             //paymentprocessloadingstatecb((loadingstate)=> loadingstate = true)
                            if ( _operationscope === undefined ) {
                              console.log(props.purchasing)
                              props.databasedata.transactions.push(props.purchasing)
                              console.log(props.databasedata)
                              await axiosCreatedInstance.post('/requests/requests', {
                                user: props.user,
                                purchasing: props.purchasing
                              })
                               .then((response)=> {
                                  alert('Synced')
                                })
                              alert('Public')
                            } else {
                              /// public and scoped in operations regarding about locations
                              alert('Public and scoped in operations regarding about locations')
                            }
    
                          }
                          if ( _userauthenticationtype === 'Private' ) {
                            /// automatic scope in operation regarding about locations
                          } 
                        }
                         
                                              
                      }
                             }}>
                     process payment
                   </button>
                  )
                }
                </>
              ) 
              : 
              (
               <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-cantproceestopaymentheaderindication'>can't proceed to request</p>
              )
            }
          </Col>
        
        </Row>
      </Col>
      <Col xs={12}
           md={12}
           lg={12}
           id='paymentmodal-gridcontainer-aboutpaymentsgraphcontainer'>
        <h5 id='paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-purchaseheader'>Purchase</h5>
        <p className='paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraphheaderindication'>Purchases out of funds</p>
        <p className='paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraphheaderindication paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraphheaderpercentageindication'></p>
        <div className='paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraph'>
           <div className='paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraphindication'>
  
           </div>
        </div>
        <p className='paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraphheaderindication'>Purchases out of converted Money</p>
        <p className='paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraphheaderindication paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraphheaderpercentageindication'></p>
        <div className='paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraph'>
          <div className='paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraphindication'>

          </div>
        </div>
      </Col>
    </Row>
  </Col>
 )
}