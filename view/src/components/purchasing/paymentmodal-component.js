import React, {
         useState,
         useEffect,
         useCallback,
         useInsertionEffect
       } from 'react';

import { Col, 
         Row,
         Spinner } from 'react-bootstrap';

import '../../styles/purchasing/paymentmodal.scss';

import barmovementpercentagecalculation  from '../lib/barmovementpercentagecalculation.js';

import axiosCreatedInstance from '../lib/axiosutil.js';

import { timestamp } from '../lib/timestamps';


export default function PaymentModal(props) {

  const [, updateStates] = React.useState()
  const allcomponentupdate = React.useCallback(() => updateStates({}), []);

 const [insufficientpayment, insufficientpaymentcb] = useState(true);
 const [totalpayment, totalpaymentcb] = useState(100); 
 const [moneypaymentdeductions, moneypaymentdeductionscb] = useState(0);
 const [remainingmoney, remainingmoneycb] = useState(0);
 const [fundspaymentdeductions, fundspaymentdeductionscb] = useState(0);
 const [remainingfunds, remainingfundscb] = useState(0);
 const [payment, paymentcb] = useState("No options method");

 const [paymentprocessloadingstate, paymentprocessloadingstatecb] = useState(false);

 const [lackingmoneyandfundsconfirmbuttonloadingstate, lackingmoneyandfundsconfirmbuttonloadingstatecb] = useState(false);
 const [lackingmoneyandfundsdontproceedbuttonloadingstate, lackingmoneyandfundsdontproceedbuttonloadingstatecb] = useState(false);


useEffect(()=> {

  console.log(JSON.stringify(props.user))
  //evaluatePayment();


  //const _purchasebargraphindication = document.querySelectorAll('.paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraphindication');
  // const _purchasespercentageindication = document.querySelectorAll('.paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-bargraphheaderpercentageindication');
  // const _barpercentagemovementinterval = null;

  // barmovementpercentagecalculation(_purchasebargraphindication[0], _purchasespercentageindication[0], _barpercentagemovementinterval, 100, 1000);
  // barmovementpercentagecalculation(_purchasebargraphindication[1], _purchasespercentageindication[1], _barpercentagemovementinterval, 100, 1000);
}, [])

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
              props.purchasing.length === 0 ? 
             (
              <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>
               Empty
             </p>
             )
             :
             (
              <React.Fragment>
              {
                props.purchasing.map((merchandise,idx)=> {
                   return (
                     <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'
                        key={idx}>
                        {merchandise.details.product.productname}
                     </p>
                   )
                })
             }
             </React.Fragment>
             )
            }
            
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-pricelistcontainer'>

            {
             props.selectedproductarray.map((merchandise,idx)=> {
                return (
                  <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'
                     key={idx}>
                    {merchandise.system.request.merchandise.price}
                  </p>
                )
             })
            }
          
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-weightlistcontainer'>

            {
              props.selectedproductarray.map((merchandise,idx)=> {
                return (
                  <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'
                      key={idx}>
                  {merchandise.system.request.shipping.weight}
                  </p>
                )
              })
            }

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
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>{props.purchasingtotalpayment} peso's</p>
          </Col>
          
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>{props.purchasingtotalweight} gram's</p>
          </Col>

          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>MRN</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>{props.purchasingtotalpricemrnproducts} peso's</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>mrn/total {props.purchasingmrnproductstotalweight} gram's
             </p>
          </Col>

          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>NONMRN</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>{props.purchasingtotalpricenonmrnproducts} peso's</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalheaderindicationcontainer'>
                <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>non-mrn/total {props.purchasingnonmrnproductstotalweight} gram's</p>
          </Col>

          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-deliveryheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>Product total</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-deliveryheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>{props.purchasingtotalpayment} peso's</p>
          </Col>

          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-deliveryheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>Cargo fee</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-deliveryheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>{props.purchasingtotalcargofee} peso's</p>
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
              <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'>{props.purchasingtotalpayment} peso's</p>
          </Col>

          <Col xs={12}
               md={12}
               lg={12}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalsigncontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'></p>
          </Col>
          <Col xs={12}
               md={12}
               lg={12}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalsigncontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'></p>
          </Col>
          <Col xs={12}
               md={12}
               lg={12}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-totalsigncontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindication'></p>
          </Col>

          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-moneyheaderindication'>Money</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-moneyamountheaderindication'>{props.user.moneyandfunds.money.amount}</p>
          </Col>

          <Col xs={6}
               md={6}
               lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer'>
             <div id='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer-togglecontainer'
                  onClick={(evt)=> {

                    const _moneytogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer-togglebutton');
                    const _moneytogglebuttonmarginproperty = _moneytogglebutton.offsetLeft;
                    const _fundstogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-fundsheaderindicationcontainer-togglebutton');
                    const _fundstogglebuttonmarginproperty = _fundstogglebutton.offsetLeft;

                    const _paymentresponsemessage = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication');
                    const _processpaymentbutton =  document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-processpaymentbutton');
                    const _deductionscontainer = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionsgridcontainer');
                    const _cantproceedtopaymentheaderindication = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-cantproceestopaymentheaderindication');
                    const _nopriceandlocationtobecalculatedheaderindication = document.querySelectorAll('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication');
                    const $paymenthod = [_moneytogglebutton.style.backgroundColor, _fundstogglebutton.style.backgroundColor];
                    const $validatepaymentmethod = $paymenthod.every((togglebuttonproperty)=> togglebuttonproperty === 'gray' );
                    const $activepaymentmethod = $paymenthod.findIndex((paymentmethod)=> paymentmethod === '50%');

                    const _lackingmoneyandfundsconfirmbutton =  document.querySelectorAll(".paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication-confirmbutton");
                    const _lackingmoneyandfundsdontproceedbutton = document.querySelectorAll(".paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication-dontproceedbutton");  

                    const _paymentmodalpaymentstatusresponsemessage = document.querySelectorAll('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication');

                    if ( props.purchasingcargoaddressset === false ) {

                      const _paymentmodalpaymentstatusresponsemessage = document.querySelectorAll('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication');
              
                      if ( _paymentmodalpaymentstatusresponsemessage[0].innerText === "No cargo destination address set" ) {

                        _paymentmodalpaymentstatusresponsemessage[0].innerText = "Please cargo destination address set"
                        
                      } else {

                        _paymentmodalpaymentstatusresponsemessage[0].innerText = "No cargo destination address set";

                      }

                    } else {

                      if ( _moneytogglebuttonmarginproperty === 0 ) {

                        if ( props.purchasingtotalpayment < props.user.moneyandfunds.money.amount || props.purchasingtotalpayment ===  props.user.moneyandfunds.money.amount ) {
                        
                          fundspaymentdeductionscb((deductions)=> deductions = 0);
                          remainingfundscb((money)=> money = props.user.moneyandfunds.funds.amount - 0);
                          moneypaymentdeductionscb((deductions)=> deductions = props.purchasingtotalpayment ); 
                          remainingmoneycb((money)=> money = props.user.moneyandfunds.money.amount - props.purchasingtotalpayment );

                          props.requesttransactiondata.products.pricesbreakdown.payment.money.deducted = true;
                          props.requesttransactiondata.products.pricesbreakdown.payment.money.amount = props.purchasingtotalpayment;
                          props.requesttransactiondata.products.pricesbreakdown.payment.funds.deducted = false;
                          props.requesttransactiondata.products.pricesbreakdown.payment.funds.amount = 0;

                          paymentcb((payment)=> payment = "Money"); 
                          props.purchasingpaymentsetcb((payment)=> payment = true);
                          
                          _deductionscontainer.style.display = 'flex';

                        } else if ( props.purchasingtotalpayment > props.user.moneyandfunds.money.amount ) {

                          if ( ( props.user.moneyandfunds.money.amount + props.user.moneyandfunds.funds.amount ) < props.purchasingtotalpayment ) {

                            props.purchasingpaymentsetcb((payment)=> payment = false);
                            
                            fundspaymentdeductionscb((deductions)=> deductions = props.purchasingtotalpayment - props.user.moneyandfunds.money.amount  );
                            remainingfundscb((money)=> money = props.user.moneyandfunds.funds.amount - ( props.purchasingtotalpayment - props.user.moneyandfunds.money.amount  ));
                            moneypaymentdeductionscb((deductions)=> deductions =   props.purchasingtotalpayment ); 
                            remainingmoneycb((money)=> money = props.user.moneyandfunds.money.amount - props.purchasingtotalpayment );

                            props.requesttransactiondata.products.pricesbreakdown.payment.money.deducted =  false;
                            props.requesttransactiondata.products.pricesbreakdown.payment.money.amount = 0;
                            props.requesttransactiondata.products.pricesbreakdown.payment.funds.deducted = false;
                            props.requesttransactiondata.products.pricesbreakdown.payment.funds.amount = 0;

                            _deductionscontainer.style.display = 'flex';

                          } else {
                               
                            fundspaymentdeductionscb((deductions)=> deductions = props.purchasingtotalpayment - props.user.moneyandfunds.money.amount  );
                            remainingfundscb((money)=> money = props.user.moneyandfunds.funds.amount - ( props.purchasingtotalpayment - props.user.moneyandfunds.money.amount  ));
                            moneypaymentdeductionscb((deductions)=> deductions =   props.purchasingtotalpayment ); 
                            remainingmoneycb((money)=> money = props.user.moneyandfunds.money.amount - props.purchasingtotalpayment );
                    
                            props.requesttransactiondata.products.pricesbreakdown.payment.money.deducted =  true ;
                            props.requesttransactiondata.products.pricesbreakdown.payment.money.amount = props.user.moneyandfunds.money.amount;
                            props.requesttransactiondata.products.pricesbreakdown.payment.funds.deducted = true;
                            props.requesttransactiondata.products.pricesbreakdown.payment.funds.amount = props.purchasingtotalpayment - props.user.moneyandfunds.money.amount;

                            paymentcb((payment)=> payment = "Funds deducted payment/Lacking Money"); 
                            props.purchasingpaymentsetcb((payment)=> payment = true);
                            
                            _deductionscontainer.style.display = 'flex';

                          }

                        } else {

                        }

                        _moneytogglebutton.style.backgroundColor = 'dodgerblue';
                        _moneytogglebutton.style.marginLeft = '50%';
                        _fundstogglebutton.style.backgroundColor = 'gray';
                        _fundstogglebutton.style.marginLeft = '0%';
                        
                        _paymentmodalpaymentstatusresponsemessage[0].style.color = "white";
                        _paymentmodalpaymentstatusresponsemessage[0].innerText = "Payment source's deduction's";

                      } else {

                        props.purchasingpaymentsetcb((payment)=> payment = false);

                        props.requesttransactiondata.products.pricesbreakdown.payment.money.deducted =  false;
                        props.requesttransactiondata.products.pricesbreakdown.payment.money.amount = 0;
                        props.requesttransactiondata.products.pricesbreakdown.payment.funds.deducted = false;
                        props.requesttransactiondata.products.pricesbreakdown.payment.funds.amount = 0;

                        _moneytogglebutton.style.backgroundColor = 'gray';
                        _moneytogglebutton.style.marginLeft = '0%';
                        _deductionscontainer.style.display = 'none';

                      }

                      allcomponentupdate();

                    }

                  }}>
               <div id='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer-togglebutton'>

               </div>
             </div>
          </Col>
         
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-fundsheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-fundsheaderindication'>Funds</p>
          </Col>
          <Col xs={3}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer'>
            <p className='paymentmodal-gridcontainer-paymentgridcontainer-fundsamountheaderindication'>{props.user.moneyandfunds.funds.amount}</p>
          </Col>
          <Col  xs={6}
                md={6}
                lg={6}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer'>
               <div id='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-fundsheaderindicationcontainer-togglecontainer'
                    onClick={(evt)=> {

                      const _moneytogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer-togglebutton');
                      const _moneytogglebuttonmarginproperty = _moneytogglebutton.offsetLeft;
                      const _fundstogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-fundsheaderindicationcontainer-togglebutton');
                      const _fundstogglebuttonmarginproperty = _fundstogglebutton.offsetLeft;
  
                      const _paymentresponsemessage = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication');
                      const _processpaymentbutton =  document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-processpaymentbutton');
                      const _deductionscontainer = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionsgridcontainer');
                      const _cantproceedtopaymentheaderindication = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-cantproceestopaymentheaderindication');
                      const _nopriceandlocationtobecalculatedheaderindication = document.querySelectorAll('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication');
                      const $paymenthod = [_moneytogglebutton.style.backgroundColor, _fundstogglebutton.style.backgroundColor];
                      const $validatepaymentmethod = $paymenthod.every((togglebuttonproperty)=> togglebuttonproperty === 'gray' );
                      const $activepaymentmethod = $paymenthod.findIndex((paymentmethod)=> paymentmethod === '50%');

                      const _lackingmoneyandfundsconfirmbutton =  document.querySelectorAll(".paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication-confirmbutton");
                      const _lackingmoneyandfundsdontproceedbutton = document.querySelectorAll(".paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication-dontproceedbutton");               

                      const _paymentmodalpaymentstatusresponsemessage = document.querySelectorAll('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication');
                  
                      if ( props.purchasingcargoaddressset === false ) {

                        const _paymentmodalpaymentstatusresponsemessage = document.querySelectorAll('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication');
                
                        if ( _paymentmodalpaymentstatusresponsemessage[0].innerText === "No cargo destination address set" ) {
  
                          _paymentmodalpaymentstatusresponsemessage[0].innerText = "Please cargo destination address set"
                          
                        } else {
  
                          _paymentmodalpaymentstatusresponsemessage[0].innerText = "No cargo destination address set";
  
                        }
  
                      } else {
  
                        if ( _fundstogglebuttonmarginproperty === 0 ) {

                          if ( props.purchasingtotalpayment < props.user.moneyandfunds.funds.amount || props.purchasingtotalpayment ===  props.user.moneyandfunds.funds.amount ) {
                          
                            fundspaymentdeductionscb((deductions)=> deductions = props.purchasingtotalpayment);
                            remainingfundscb((money)=> money =  props.user.moneyandfunds.funds.amount - props.purchasingtotalpayment);
                            moneypaymentdeductionscb((deductions)=> deductions = 0 ); 
                            remainingmoneycb((money)=> money =  props.user.moneyandfunds.money.amount );
  
                            props.requesttransactiondata.products.pricesbreakdown.payment.money.deducted = false;
                            props.requesttransactiondata.products.pricesbreakdown.payment.money.amount = 0;
                            props.requesttransactiondata.products.pricesbreakdown.payment.funds.deducted = true;
                            props.requesttransactiondata.products.pricesbreakdown.payment.funds.amount = props.purchasingtotalpayment;
  
                            paymentcb((payment)=> payment = "Funds"); 
                            props.purchasingpaymentsetcb((payment)=> payment = true);
                            
                            _deductionscontainer.style.display = 'flex';
  
                          } else if ( props.purchasingtotalpayment > props.user.moneyandfunds.funds.amount ) {
  
                            if ( ( props.user.moneyandfunds.funds.amount + props.user.moneyandfunds.money.amount ) < props.purchasingtotalpayment ) {
  
                              props.purchasingpaymentsetcb((payment)=> payment = false);
                              
                              fundspaymentdeductionscb((deductions)=> deductions = props.purchasingtotalpayment  );
                              remainingfundscb((money)=> money = props.user.moneyandfunds.funds.amount - props.purchasingtotalpayment );
                              moneypaymentdeductionscb((deductions)=> deductions = props.purchasingtotalpayment - props.user.moneyandfunds.funds.amount); 
                              remainingmoneycb((money)=> money = props.user.moneyandfunds.money.amount - ( props.purchasingtotalpayment - props.user.moneyandfunds.money.amount  ));

                              props.requesttransactiondata.products.pricesbreakdown.payment.money.deducted =  false;
                              props.requesttransactiondata.products.pricesbreakdown.payment.money.amount = 0;
                              props.requesttransactiondata.products.pricesbreakdown.payment.funds.deducted = false;
                              props.requesttransactiondata.products.pricesbreakdown.payment.funds.amount = 0;

                              _deductionscontainer.style.display = 'flex';
  
                            } else {
                                 
                              fundspaymentdeductionscb((deductions)=> deductions = props.purchasingtotalpayment  );
                              remainingfundscb((money)=> money = props.user.moneyandfunds.funds.amount - props.purchasingtotalpayment );
                              moneypaymentdeductionscb((deductions)=> deductions = props.purchasingtotalpayment - props.user.moneyandfunds.funds.amount); 
                              remainingmoneycb((money)=> money = props.user.moneyandfunds.funds.amount - ( props.purchasingtotalpayment - props.user.moneyandfunds.money.amount  ));

                      
                              props.requesttransactiondata.products.pricesbreakdown.payment.money.deducted =  true ;
                              props.requesttransactiondata.products.pricesbreakdown.payment.money.amount = props.user.moneyandfunds.money.amount - ( props.purchasingtotalpayment - props.user.moneyandfunds.money.amount  );
                              props.requesttransactiondata.products.pricesbreakdown.payment.funds.deducted = true;
                              props.requesttransactiondata.products.pricesbreakdown.payment.funds.amount = props.purchasingtotalpayment - props.user.moneyandfunds.funds.amount;
  
                              paymentcb((payment)=> payment = "Money deducted payment/Lacking Funds"); 
                              props.purchasingpaymentsetcb((payment)=> payment = true);
                              
                              _deductionscontainer.style.display = 'flex';
  
                            }
  
                          } else {
  
                          }
  
                          _moneytogglebutton.style.backgroundColor = 'gray';
                          _moneytogglebutton.style.marginLeft = '0%';
                          _fundstogglebutton.style.backgroundColor =  'dodgerblue'; 
                          _fundstogglebutton.style.marginLeft = '50%'; 
                          
                          _paymentmodalpaymentstatusresponsemessage[0].style.color = "white";
                          _paymentmodalpaymentstatusresponsemessage[0].innerText = "Payment source's deduction's";
  
                        } else {
  
                          props.purchasingpaymentsetcb((payment)=> payment = false);
  
                          props.requesttransactiondata.products.pricesbreakdown.payment.money.deducted =  false;
                          props.requesttransactiondata.products.pricesbreakdown.payment.money.amount = 0;
                          props.requesttransactiondata.products.pricesbreakdown.payment.funds.deducted = false;
                          props.requesttransactiondata.products.pricesbreakdown.payment.funds.amount = 0;
                       
                          _fundstogglebutton.style.backgroundColor =  'gray'; 
                          _fundstogglebutton.style.marginLeft = '0%'; 
                          _deductionscontainer.style.display = 'none';
  
                        }
  
                        allcomponentupdate();
  
                      }
                       

                    }}>
               <div id='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-fundsheaderindicationcontainer-togglebutton'>

               </div>
               </div>
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
                 <>
                 <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication'>No payment method</p>
                 <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication'></p>
                 <br />
                 <br />
                 <button className="paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication-confirmbutton">
                  {
                    lackingmoneyandfundsconfirmbuttonloadingstate ?
                    (
                      <Spinner animation="border" variant="light" />
                    )
                    :
                    (
                      <span 
                      onClick={(evt)=> {

                        const _nopriceandlocationtobecalculatedheaderindication = document.querySelectorAll('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication');
                        const _deductionscontainer = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionsgridcontainer');
                        
                        const _lackingmoneyandfundsconfirmbutton =  document.querySelectorAll(".paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication-confirmbutton");
                        const _lackingmoneyandfundsdontproceedbutton = document.querySelectorAll(".paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication-dontproceedbutton");

                        const $bothmoneyandfundsbalance = props.user.moneyandfunds.money.amount + props.user.moneyandfunds.funds.amount;
                        const $totalpayment = props.purchasingtotalpayment + props.purchasingtotalcargofee;

                        const _pricesbreakdowngoldbar = document.querySelectorAll(".paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication");

                        lackingmoneyandfundsconfirmbuttonloadingstatecb((state)=> state = true);

                        if ( payment === "Money" ) {

                          if ( $bothmoneyandfundsbalance >= $totalpayment ) {  

                            moneypaymentdeductionscb((calculation)=> calculation = props.user.moneyandfunds.money.amount );
                            remainingmoneycb((calculation)=> calculation = 0);
                            fundspaymentdeductionscb((calculation)=> calculation =  ( props.purchasingtotalpayment + props.purchasingtotalcargofee ) - props.user.moneyandfunds.money.amount );
                            remainingfundscb((calculation)=> calculation = props.user.moneyandfunds.funds.amount - ( $totalpayment - props.user.moneyandfunds.money.amount));

                            props.requesttransactiondata.products.pricesbreakdown.payment.money.deducted = true;
                            props.requesttransactiondata.products.pricesbreakdown.payment.money.amount = props.user.moneyandfunds.money.amount;
                            props.requesttransactiondata.products.pricesbreakdown.payment.funds.deducted = true;
                            props.requesttransactiondata.products.pricesbreakdown.payment.funds.amount = (  $totalpayment - props.user.moneyandfunds.money.amount ); 

                            paymentcb((payment)=> payment = "Money");
                            props.purchasingpaymentsetcb((payment)=> payment = true);

                          } else {

                           _nopriceandlocationtobecalculatedheaderindication[0].style.color = 'red';
                           _nopriceandlocationtobecalculatedheaderindication[0].innerText = 'Your payment is insufficient. To complete the payment, allow the system to add funds in your account for a meantime for transaction give away\'s.';
                           _nopriceandlocationtobecalculatedheaderindication[0].style.display = 'block';
                            lackingmoneyandfundsconfirmbuttonloadingstatecb((state)=> state = false);

                            paymentcb((payment)=> payment = "No options method");
                            props.purchasingpaymentsetcb((payment)=> payment = false);
                            return;

                          }

                        }

                        if ( payment === "Funds" ) {

                          if ( $bothmoneyandfundsbalance >= $totalpayment ) { 

                            fundspaymentdeductionscb((calculation)=> calculation = props.user.moneyandfunds.funds.amount );
                            remainingfundscb((calculation)=> calculation = 0);
                            moneypaymentdeductionscb((calculation)=> calculation = $totalpayment - props.user.moneyandfunds.funds.amount );
                            remainingmoneycb((calculation)=> calculation = props.user.moneyandfunds.money.amount - ($totalpayment - props.user.moneyandfunds.funds.amount));

                            props.requesttransactiondata.products.pricesbreakdown.payment.money.deducted = true;
                            props.requesttransactiondata.products.pricesbreakdown.payment.money.amount = (  $totalpayment - props.user.moneyandfunds.funds.amount ); 
                            props.requesttransactiondata.products.pricesbreakdown.payment.funds.deducted = true;
                            props.requesttransactiondata.products.pricesbreakdown.payment.funds.amount = props.user.moneyandfunds.funds.amount;

                            paymentcb((payment)=> payment = "Funds");
                            props.purchasingpaymentsetcb((payment)=> payment = true);

                          } else {

                            _nopriceandlocationtobecalculatedheaderindication[0].style.color = 'red';
                            _nopriceandlocationtobecalculatedheaderindication[0].innerText = 'Your payment is insufficient. To complete the payment, allow the system to add funds in your account for a meantime for transaction give away\'s.';
                            _nopriceandlocationtobecalculatedheaderindication[0].style.display = 'block';
                            lackingmoneyandfundsconfirmbuttonloadingstatecb((state)=> state = false);
                            paymentcb((payment)=> payment = "Funds");
                            props.purchasingpaymentsetcb((payment)=> payment = false);
                            return;

                          }
                        } 

                         _nopriceandlocationtobecalculatedheaderindication[0].style.color = 'gray';
                         _nopriceandlocationtobecalculatedheaderindication[0].innerText = 'The lacking balance will be deducted on your Funds.';
                         _nopriceandlocationtobecalculatedheaderindication[0].style.display = 'block';

                         _deductionscontainer.style.display = "flex";

                         lackingmoneyandfundsconfirmbuttonloadingstatecb((state)=> state = false);
                         lackingmoneyandfundsconfirmbuttonloadingstatecb((state)=> state = false);

                      }}>
                       yes
                      </span>
                    )
                  }
                  </button>
                 <button className="paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication-dontproceedbutton">
                 {
                    lackingmoneyandfundsdontproceedbuttonloadingstate ?
                    (
                     <Spinner animation="border" variant="light" />
                    )
                    :
                    (
                     <span 
                     onClick={(evt)=> {

                      const _moneytogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer-togglebutton');
                      const _moneytogglebuttonmarginproperty = _moneytogglebutton.offsetLeft;
                      const _fundstogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-fundsheaderindicationcontainer-togglebutton');
                      const _fundstogglebuttonmarginproperty = _fundstogglebutton.style.marginLeft;

                      const _nopriceandlocationtobecalculatedheaderindication = document.querySelectorAll('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication');
                      const _lackingmoneyandfundsconfirmbutton =  document.querySelectorAll(".paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication-confirmbutton");
                      const _lackingmoneyandfundsdontproceedbutton = document.querySelectorAll(".paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication-dontproceedbutton");
                      const _deductionscontainer = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionsgridcontainer');

                      lackingmoneyandfundsdontproceedbuttonloadingstatecb((state)=> state = true);

                      _nopriceandlocationtobecalculatedheaderindication[0].style.color = 'white';
                      _nopriceandlocationtobecalculatedheaderindication[0].innerText = 'Payment cancel.';
                      _nopriceandlocationtobecalculatedheaderindication[0].style.display = 'block';

                      lackingmoneyandfundsdontproceedbuttonloadingstatecb((state)=> state = false);

                      _lackingmoneyandfundsconfirmbutton[0].style.display = "none";
                      _lackingmoneyandfundsdontproceedbutton[0].style.display = "none";

                      _moneytogglebutton.style.backgroundColor = 'gray';
                      _moneytogglebutton.style.marginLeft = '0%';
                      _deductionscontainer.style.display = 'none';
                      _fundstogglebutton.style.backgroundColor = 'gray';
                      _fundstogglebutton.style.marginLeft = '0%';

                      _deductionscontainer.style.display = "none";

                     }}>
                      don't proceed
                     </span>
                    )
                  }
                  </button>
                 </>
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
                   <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentresponsemessagecontainer-moneyandfundsdeductionheaderindication'>{props.purchasingtotalpayment}</p>
                 </Col>
               </Row>
          </Col>
          <Col xs={12}
               md={3}
               lg={3}
               className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-paymentbuttoncontainer'>
            {
              props.purchasingpaymentset ? 
              (
                <button className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-processpaymentbutton'
                        onClick={ async (evt)=> {


                          const _pricesbreakdownmodal = document.querySelector('#paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer');
                          const _pricesbreakdownmodalgoldbar = document.querySelectorAll('.paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer');
                          const _pricesbreakdownmodalgoldbarheaderindication = document.querySelectorAll('.paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication');

                          const $date = `${timestamp.getDay()}, ${timestamp.getMonth()}, ${timestamp.getDate()}, ${timestamp.getFullYear()}, ${timestamp.getHour()}:${timestamp.getMinutes()}: ${timestamp.getSeconds()}`;

                          _pricesbreakdownmodal.style.height = "auto";

                          const _purchasingsrppricebreakdown = props.selectedproductarray.reduce((previousValue, currentValue)=> { return Number(previousValue) + Number(currentValue.system.request.merchandise.suggested_retail_price)}, 0);
                          const _purchasingbusinessvatpricebreakdown = props.selectedproductarray.reduce((previousValue, currentValue)=> { return Number(previousValue) + Number(currentValue.system.request.merchandise.vat.business)}, 0);
                          const _purchasingvanguardvatpricebreakdown = props.selectedproductarray.reduce((previousValue, currentValue)=> { return Number(previousValue) + Number(currentValue.system.request.merchandise.vat.vanguard)}, 0);
                          const _purchasingoverallcapitalpricebreakdown = props.selectedproductarray.reduce((previousValue, currentValue)=> { return Number(previousValue) + Number(currentValue.system.request.merchandise.capital)}, 0);
                          const _purchasingoveralltotalpcspricebreakdown = props.selectedproductarray.reduce((previousValue, currentValue)=> { return Number(previousValue) + Number(currentValue.system.request.pcs)}, 0);
                          const _purchasingproducttotalpaymentpricebreakdown = props.selectedproductarray.reduce((previousValue, currentValue)=> { return Number(previousValue) + Number(currentValue.system.request.merchandise.price)}, 0);
                          const _purchasingcargototalpricebreakdown = props.selectedproductarray.reduce((previousValue, currentValue)=> { return Number(previousValue) + Number(currentValue.system.request.shipping.fee)}, 0);
                          const  _purchasingweightpricebreakdown  = props.selectedproductarray.reduce((previousValue, currentValue)=> { return Number(previousValue) + Number(currentValue.system.request.shipping.weight)}, 0);
                          const _purchasingreciepttotalpricebreakdown = props.selectedproductarray.reduce((previousValue, currentValue)=> { return Number(previousValue) + Number(currentValue.system.request.merchandise.price)}, 0);

                          const $purchasertransactiongiveaway =  _purchasingbusinessvatpricebreakdown / 2;
                          const $transactiongiveawaypurchaserdeducted = $purchasertransactiongiveaway;
                          const $authenticationstransactiongiveaway = $transactiongiveawaypurchaserdeducted / 2.5;
                          const _vanguard = _purchasingbusinessvatpricebreakdown - ( $purchasertransactiongiveaway +  $authenticationstransactiongiveaway);
                          const authenticationsshare = _purchasingbusinessvatpricebreakdown - (  $purchasertransactiongiveaway  +  _vanguard);

                          _pricesbreakdownmodalgoldbarheaderindication[0].innerText = `Total SRP's, ${_purchasingsrppricebreakdown} pesos`;
                          _pricesbreakdownmodalgoldbarheaderindication[1].innerText = `Total VAT'S, ${_purchasingbusinessvatpricebreakdown} pesos`;
                          _pricesbreakdownmodalgoldbarheaderindication[2].innerText = `Total CAPITAL, ${_purchasingoverallcapitalpricebreakdown} pesos`;
                          _pricesbreakdownmodalgoldbarheaderindication[3].innerText = `Overall total pc's, ${_purchasingoveralltotalpcspricebreakdown} pesos`;
                          _pricesbreakdownmodalgoldbarheaderindication[4].innerText = `Payment, ${_purchasingproducttotalpaymentpricebreakdown} pesos`;
                          _pricesbreakdownmodalgoldbarheaderindication[5].innerText = `Cargo total, ${_purchasingcargototalpricebreakdown} pesos`;
                          _pricesbreakdownmodalgoldbarheaderindication[6].innerText = `Weight, ${_purchasingweightpricebreakdown} grams`;
                          _pricesbreakdownmodalgoldbarheaderindication[7].innerText = `Reciept total, ${_purchasingproducttotalpaymentpricebreakdown + _purchasingcargototalpricebreakdown} pesos`;
                          _pricesbreakdownmodalgoldbarheaderindication[8].innerText = `Transaction give away, ${_purchasingbusinessvatpricebreakdown} pesos`;
                          _pricesbreakdownmodalgoldbarheaderindication[9].innerText = `Your transaction give away, ${$purchasertransactiongiveaway} pesos`;
                          _pricesbreakdownmodalgoldbarheaderindication[10].innerText = `Shared through all, ${$authenticationstransactiongiveaway} pesos`;
                          _pricesbreakdownmodalgoldbarheaderindication[11].innerText = `Vanguard, ${_vanguard} pesos`;

                          _pricesbreakdownmodalgoldbar[0].style.marginTop = "3vh";
                          _pricesbreakdownmodalgoldbar[0].style.opacity = "1";
                          _pricesbreakdownmodalgoldbar[1].style.marginBottom = "3vh";
                          _pricesbreakdownmodalgoldbar[1].style.opacity = "1";
                          _pricesbreakdownmodalgoldbar[2].style.marginTop = "3vh";
                          _pricesbreakdownmodalgoldbar[2].style.opacity = "1";
                          _pricesbreakdownmodalgoldbar[3].style.marginBottom = "3vh";
                          _pricesbreakdownmodalgoldbar[3].style.opacity = "1";
                          _pricesbreakdownmodalgoldbar[4].style.marginTop = "3vh";
                          _pricesbreakdownmodalgoldbar[4].style.opacity = "1";
                          _pricesbreakdownmodalgoldbar[5].style.marginBottom = "3vh";
                          _pricesbreakdownmodalgoldbar[5].style.opacity = "1";
                          _pricesbreakdownmodalgoldbar[6].style.marginTop = "3vh";
                          _pricesbreakdownmodalgoldbar[6].style.opacity = "1";
                          _pricesbreakdownmodalgoldbar[7].style.marginBottom = "3vh";
                          _pricesbreakdownmodalgoldbar[7].style.opacity = "1";
                          _pricesbreakdownmodalgoldbar[8].style.marginTop = "3vh";
                          _pricesbreakdownmodalgoldbar[8].style.opacity = "1";
                          _pricesbreakdownmodalgoldbar[9].style.marginBottom = "3vh";
                          _pricesbreakdownmodalgoldbar[9].style.opacity = "1";
                          _pricesbreakdownmodalgoldbar[10].style.marginTop = "3vh";
                          _pricesbreakdownmodalgoldbar[10].style.opacity = "1";
                          _pricesbreakdownmodalgoldbar[11].style.marginBottom = "3vh";
                          _pricesbreakdownmodalgoldbar[11].style.opacity = "1";

                          const _requesttransactiondataprocessdate = {
                            status: "Processed",
                            date: $date,
                            message: "Payment price breakdown was calculated"
                          }

                          props.requesttransactiondata.date.push(_requesttransactiondataprocessdate);

                        //   alert(JSON.stringify(props.requesttransactiondata));

                          {/*
                          const _moneytogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-moneyheaderindicationcontainer-togglebutton')
                          const _moneytogglebuttonmarginproperty = _moneytogglebutton.style.marginLeft
                          const _fundstogglebutton = document.getElementById('paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-fundsheaderindicationcontainer-togglebutton')
                          const _fundstogglebuttonmarginproperty = _fundstogglebutton.style.marginLeft

                          const _paymentresponsemessage = document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-lackingmoneyandfundsheaderindication')
                          const _processpaymentbutton =  document.querySelector('.paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-processpaymentbutton')

                          const _pricesbreakdownmodal = document.querySelector('#paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer');
                          const _pricesbreakdownmodalgolbar = document.querySelectorAll('.paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer');

                          alert('Synced')
                          _pricesbreakdownmodal.style.height = "auto";

                          _pricesbreakdownmodalgolbar[1].style.top = "0%";
                          _pricesbreakdownmodalgolbar[1].style.opacity = "1";
                          _pricesbreakdownmodalgolbar[2].style.bottom = "0%";
                          _pricesbreakdownmodalgolbar[2].style.opacity = "1";
                          _pricesbreakdownmodalgolbar[3].style.top = "0%";
                          _pricesbreakdownmodalgolbar[3].style.opacity = "1";
                          _pricesbreakdownmodalgolbar[4].style.bottom = "0%";
                          _pricesbreakdownmodalgolbar[4].style.opacity = "1";
                          _pricesbreakdownmodalgolbar[5].style.top = "0%";
                          _pricesbreakdownmodalgolbar[5].style.opacity = "1";
                          _pricesbreakdownmodalgolbar[6].style.bottom = "0%";
                          _pricesbreakdownmodalgolbar[6].style.opacity = "1";
                          _pricesbreakdownmodalgolbar[7].style.top = "0%";
                          _pricesbreakdownmodalgolbar[7].style.opacity = "1";
                          _pricesbreakdownmodalgolbar[8].style.bottom = "0%";
                          _pricesbreakdownmodalgolbar[8].style.opacity = "1";
                          _pricesbreakdownmodalgolbar[9].style.top = "0%";
                          _pricesbreakdownmodalgolbar[9].style.opacity = "1";
                          _pricesbreakdownmodalgolbar[10].style.bottom = "0%";
                          _pricesbreakdownmodalgolbar[10].style.opacity = "1";
                          _pricesbreakdownmodalgolbar[11].style.top = "0%";
                          _pricesbreakdownmodalgolbar[11].style.opacity = "1";

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

                          */}

                          }}>
                    Process temporary reciept breakdown   
                </button>
              ) 
              : 
              (
                <p className='paymentmodal-gridcontainer-paymentgridcontainer-headerindicationcontainer-cantproceestopaymentheaderindication'>can't proceed to request</p>
              )
            }
          </Col>
        
        </Row>
      </Col>
      <Row id="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer">
        <Col xs={12}
             md={12}
             lg={12}
             className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer1">
           <Col className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-layoutcontainer">
            <p className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication">Total SRP'S, 0 peso's</p>
            </Col>
        </Col>
        <Col xs={12}
             md={7}
             lg={7}
             className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer2">
           <Col className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-layoutcontainer">
            <p className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication">Total vat's, 0 peso's</p>
            </Col>
        </Col>
          <Col xs={12}
             md={3}
             lg={3}
             className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer3">
           <Col className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-layoutcontainer">
            <p className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication">overall capital, 0 peso's</p>
            </Col>
        </Col>
          <Col xs={12}
             md={2}
             lg={2}
             className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer4">
           <Col className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-layoutcontainer">
            <p className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication">overalltotalpcs, 0 peso's</p>
            </Col>
        </Col>
        <Col xs={12}
             md={9}
             lg={9}
             className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer5">
           <Col className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-layoutcontainer">
            <p className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication">Payment, 0 peso's</p>
            </Col>
        </Col>
        <Col xs={12}
             md={3}
             lg={3}
             className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer6">
           <Col className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-layoutcontainer">
            <p className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication">Cargo total, 0 peso's</p>
            </Col>
        </Col>
        <Col xs={12}
             md={3}
             lg={3}
             className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer7">
           <Col className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-layoutcontainer">
            <p className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication">Weight, 0 peso's</p>
            </Col>
        </Col>
        <Col xs={12}
             md={3}
             lg={3}
             className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer8">
           <Col className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-layoutcontainer">
            <p className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication">Reciept total, 0 peso's</p>
            </Col>
        </Col>
        <Col xs={12}
             md={3}
             lg={3}
             className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer9">
           <Col className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-layoutcontainer">
            <p className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication">Transaction give away, 0 peso's</p>
            </Col>
        </Col>
        <Col xs={12}
             md={3}
             lg={3}
             className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer10">
           <Col className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-layoutcontainer">
            <p className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication">Your transaction give away, 0 peso's</p>
            </Col>
        </Col>
        <Col xs={12}
             md={3}
             lg={3}
             className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer11">
           <Col className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-layoutcontainer">
            <p className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication">Shared through all, 0 peso's</p>
            </Col>
        </Col>
        <Col xs={12}
             md={9}
             lg={9}
             className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer12">
           <Col className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-layoutcontainer">
            <p className="paymentmodal-gridcontainer-aboutpaymentsgraphcontainer-pricesbreakdowngridcontainer-colcontainer-headerindication">Vanguard</p>
            </Col>
        </Col>
      </Row>
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