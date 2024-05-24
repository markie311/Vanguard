import React, {
        useState,
        useEffect
       } from 'react';

import { Row, 
         Col,
         Spinner,
         Carousel } from 'react-bootstrap';

import '../../styles/purchasing/purchasing.scss';

import WidthdrawalsGrid from '../widthdrawals/widthdrawalsgrid-component.js';
import PurchasingDetails from '../purchasing/purchasingdetails-component.js';
import TranasctionMoney from '../transactions/money/transactionmoney-component.js';
import TransactionFunds from '../transactions/funds/transactionfunds-component.js';
import PaymentModal from '../purchasing/paymentmodal-component.js';
import { operations } from '../lib/operations.js';

export default function Purchasing(props) {

  const [allselectedproduct, allselectedproductcb] = useState({
    data: []
   });
   
  const [allnonmrnselectedproduct, allnonmrnselectedproductcb] = useState([]);
  const [allmrnselectedproduct, allmrnselectedproductcb] = useState([]);
 
  const [totalmerchandiseprice, totalmerchandisepricecb] = useState(0);
  const [totalmerchandiseweight, totalmerchandiseweightcb] = useState(0);
  const [purchaseauthentication, purchaseauthenticationcb] = useState({
    authentication: '',
    destinationadddress: {
      street: '',
      baranggay: '',
      trademark: '',
      province: '',
      city: '',
      country: '',
      coordinates: {
        lat: 0,
        lon: 0
      }
    }
  });
  
  const [totaldeliveryfee, totaldeliveryfeecb] = useState(0);
  const [requestlimitreacherrormessage, requestlimitreacherrormessagecb] = useState('');
  const [cargodestinationset, cargodestinationsetcb] = useState(false);
  const [paymentmethodset, paymentmethodsetcb] = useState(false);

  const [purchasingcheckoutdetailsmodaldisplayproperty, purchasingcheckoutdetailsmodaldisplaypropertycb] = useState("none");

  {/*
  useEffect(()=> {
    calculateTotalMerchandisePrice()
    calculateTotalMerchandiseWeight()
    calculateTotalDeliveryFee()
   },[])
  */}
  
   async function calculateTotalMerchandisePrice() {
     const _merchandisestotalprice = props.purchasing.reduce((previousValue, currentValue)=> previousValue + currentValue.details.pricesbreakdown.price, 0)
     totalmerchandisepricecb((totalprice)=> totalprice = _merchandisestotalprice)
   }
  
   async function calculateTotalMerchandiseWeight() {
    const _totalmerchandisesweight = props.purchasing.reduce((previousValue, currentValue)=> previousValue + currentValue.details.product.specifications.weight, 0)
    totalmerchandiseweightcb((totalweight)=> totalweight = _totalmerchandisesweight)
   }

   async function calculateTotalDeliveryFee() {

    const _merchandisestotalweight = props.purchasing.reduce((previousValue, currentValue)=> previousValue +  currentValue.details.product.specifications.weight, 0)
    
    switch (true) {
      case _merchandisestotalweight <= 1000:
        totaldeliveryfeecb((totalweight)=> totalweight = 100)
        requestlimitreacherrormessagecb((errormessage)=> errormessage = '')
      break;
      case _merchandisestotalweight > 1000 && _merchandisestotalweight <= 2000:
        totaldeliveryfeecb((totalweight)=> totalweight = 200)
        requestlimitreacherrormessagecb((errormessage)=> errormessage = '')
      break;
      case _merchandisestotalweight > 2000 && _merchandisestotalweight <= 3000:
        totaldeliveryfeecb((totalweight)=> totalweight = 300)
        requestlimitreacherrormessagecb((errormessage)=> errormessage = '')
      break;
      case _merchandisestotalweight > 3000 && _merchandisestotalweight <= 4000:
        totaldeliveryfeecb((totalweight)=> totalweight = 400)
        requestlimitreacherrormessagecb((errormessage)=> errormessage = '')
      break;
      case _merchandisestotalweight > 4000 && _merchandisestotalweight <= 5000:
        totaldeliveryfeecb((totalweight)=> totalweight = 500)
        requestlimitreacherrormessagecb((errormessage)=> errormessage = '')
      break;
      case _merchandisestotalweight > 5000 && _merchandisestotalweight <= 6000:
        totaldeliveryfeecb((totalweight)=> totalweight = 600)
        requestlimitreacherrormessagecb((errormessage)=> errormessage = '')
      break;
      case _merchandisestotalweight > 6000 && _merchandisestotalweight <= 7000:
        totaldeliveryfeecb((totalweight)=> totalweight = 700)
        requestlimitreacherrormessagecb((errormessage)=> errormessage = '')
      break;
      case _merchandisestotalweight > 8000 && _merchandisestotalweight <= 9000:
        totaldeliveryfeecb((totalweight)=> totalweight = 800)
        requestlimitreacherrormessagecb((errormessage)=> errormessage = '')
      break;
      case _merchandisestotalweight > 9000 && _merchandisestotalweight <= 10000:
        totaldeliveryfeecb((totalweight)=> totalweight = 900)
        requestlimitreacherrormessagecb((errormessage)=> errormessage = '')
      break;
      break;
      case _merchandisestotalweight === 10000:
        totaldeliveryfeecb((totalweight)=> totalweight = 10000)
        requestlimitreacherrormessagecb((errormessage)=> errormessage = '')
      break;
      break;
      case _merchandisestotalweight > 10000:
        totaldeliveryfeecb((totalweight)=> totalweight = -0)
        requestlimitreacherrormessagecb((errormessage)=> errormessage = 'Request limit reach')
      break;
    }

 
   }
  
 return (
    <Row id='purchasing'>

      <Row id='purchasing-gridcontainer'>

        {/*
        <Col xs={12}
             md={12}
             lg={12}
             id='purchasing-gridcontainer-navigationcontainer'>
           <button className='purchasing-gridcontainer-navigationcontainer-navigationbutton'
                   onClick={(evt)=> {
                    const _navigationcontainer = document.getElementById('purchasing-navigationcontainer');
                    _navigationcontainer.style.left = '0%';
                   }}>
            Xirbit money and funds ->
           </button>
        </Col>
       */}

        <Col xs={12}
             md={12}
             lg={12}
             className='purchasing-gridcontainer-gridcontentcontainer'>
          <PurchasingDetails user={props.user}

                             allselectedproduct={allselectedproduct}
                             allselectedproductcb={allselectedproductcb}
                             allnonmrnselectedproduct={allnonmrnselectedproduct}
                             allnonmrnselectedproductcb={ allnonmrnselectedproductcb}
                             allmrnselectedproduct={allmrnselectedproduct}
                             allmrnselectedproductcb={allmrnselectedproductcb}

                             totalmerchandiseprice={totalmerchandiseprice}
                             totalmerchandisepricecb={totalmerchandisepricecb}
                             totaldeliveryfee={totaldeliveryfee}
                             totaldeliveryfeecb={totaldeliveryfeecb}
                             purchaseauthentication={purchaseauthentication}
                             purchaseauthenticationcb={purchaseauthenticationcb}

                             purchasing={props.purchasing}
                             requestlimitreacherrormessage={requestlimitreacherrormessage}
                             
                             cargodestinationset={cargodestinationset}
                             cargodestinationsetcb={cargodestinationsetcb}
                             paymentmethodset={paymentmethodset}
                             paymentmethodsetcb={paymentmethodsetcb}
                             
                             manualcargoaddressdestinationloadingindication={props.manualcargoaddressdestinationloadingindication}
                             manualcargoaddressdestinationloadingindicationcb={props.manualcargoaddressdestinationloadingindicationcb}
                             setascargodestinationloadingindication={props.setascargodestinationloadingindication}
                             setascargodestinationloadingindicationcb={props.setascargodestinationloadingindicationcb}
                             purchasingcargodestination={props.purchasingcargodestination}
                             purchasingcargodestinationcb={props.purchasingcargodestinationcb}
                             purchasingcargoaddressset={props.purchasingcargoaddressset}
                             purchasingcargoaddresssetcb={props.urchasingcargoaddresssetcb}
                             purchasingtotalmerchandisepayment={props.purchasingtotalmerchandisepayment}
                             purchasingtotalmerchandisepaymentcb={props.purchasingtotalmerchandisepaymentcb}
                             purchasingtotalweight={props.purchasingtotalweight}
                             purchasingtotalweightcb={props.purchasingtotalweightcb}
                             purchasingtotalcargofee={props.purchasingtotalcargofee}
                             purchasingtotalcargofeecb={props.purchasingtotalcargofeecb}
                             purchasigtotalpayment={props.purchasigtotalpayment}
                             purchasigtotalpaymentcb={props.purchasigtotalpaymentcb}
                             purchasingtotalmrnproducts={props.purchasingtotalmrnproducts}
                             purchasingtotalmrnproductscb={props.purchasingtotalmrnproductscb}
                             purchasingmrnproductstotalweight={props.purchasingmrnproductstotalweight}
                             purchasingmrnproductstotalweightcb={props.purchasingmrnproductstotalweightcb}
                             purchasingtotalnonmrnproducts={props.purchasingtotalnonmrnproducts}
                             purchasingtotalnonmrnproductscb={props.purchasingtotalnonmrnproductscb}
                             purchasingnonmrnproductstotalweight={props.purchasingnonmrnproductstotalweight}
                             purchasingnonmrnproductstotalweightcb={props.purchasingnonmrnproductstotalweightcb}
                             selectedproduct={props.selectedproduct}
                             selectedproductcb={props.selectedproductcb}
                             selectedproductarray={props.selectedproductarray}
                             selectedproductarraycb={props.selectedproductarraycb}
                             selectedproductarraylength={props.selectedproductarraylength}
                             selectedproductarraylengthcb={props.selectedproductarraylengthcb}
                             
                             purchasingcheckoutdetailsmodaldisplayproperty={purchasingcheckoutdetailsmodaldisplayproperty}
                             purchasingcheckoutdetailsmodaldisplaypropertycb={purchasingcheckoutdetailsmodaldisplaypropertycb}/>
        </Col>

      </Row>
      <Col xs={12}
           md={12}
           lg={12}
           id='purchasing-navigationcontainer'>

         <Row id='purchasing-navigationcontainer-contentcontainer'>
          <TranasctionMoney />
          <TransactionFunds />
          <PaymentModal user={props.user}
                        usercb={props.usercb} 
                        purchasing={props.purchasing}
                        databasedata={props.databasedata}
                        databasedatacb={props.databasedatacb}
                        allnonmrnselectedproduct={allnonmrnselectedproduct}
                        allmrnselectedproduct={allmrnselectedproduct}
                        totalmerchandiseprice={totalmerchandiseprice}
                        totalmerchandiseweight={totalmerchandiseweight}
                        totaldeliveryfee={totaldeliveryfee}
                        requestlimitreacherrormessage={requestlimitreacherrormessage}
                        cargodestinationset={cargodestinationset}
                        cargodestinationsetcb={cargodestinationsetcb}
                        paymentmethodset={paymentmethodset}
                        paymentmethodsetcb={paymentmethodsetcb}
                        operations={operations} 
                        
                        purchasingcargodestination={props.purchasingcargodestination}
                        purchasingtotalmerchandisepayment={props.purchasingtotalmerchandisepayment}
                        purchasingtotalweight={props.purchasingtotalweight}
                        purchasingtotalcargofee={props.purchasingtotalcargofee}
                        purchasigtotalpayment={props.purchasigtotalpayment}

                        purchasingcargoaddressset={props.purchasingcargoaddressset}

                        purchasingtotalmrnproducts={props.purchasingtotalmrnproducts}
                        purchasingmrnproductstotalweight={props.purchasingmrnproductstotalweight}
                        purchasingtotalnonmrnproducts={props.purchasingtotalnonmrnproducts}
                        purchasingnonmrnproductstotalweight={props.purchasingnonmrnproductstotalweight}

                        selectedproductarray={props.selectedproductarray}/>
         </Row>

         <Col id='purchasing-navigationcontainer-closebuttoncontainer'>
           <p id='purchasing-navigationcontainer-closebutton'
              onClick={(evt)=> {
                const _navigationcontainer = document.getElementById('purchasing-navigationcontainer');
                _navigationcontainer.style.left = '-95%';
              }}>
            close
           </p>
         </Col>
      </Col>

      <Col id="purchasingdetails-purchasingcheckoutdetailscontainer"
           style={{display: purchasingcheckoutdetailsmodaldisplayproperty}}>
        <Col id="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer">
          <Col id="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer">
            <Col id="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept">
            <h4 id="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-headerindication">Date: 00-00-00, 00:00:00</h4>
            <h4 id="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-headerindication">Transaction id: 111111-1111-111</h4>
            <h4 id="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-headerindication">Branch: Handled by main branch</h4>
            <br/>
            <h4 id="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-headerindication">Front reciept</h4>
            <br/>
            <br/>
              <Row id="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer">
                <Col xs={6}
                     md={6}
                     lg={6}
                     className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer">
                  <h5 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-headerindication">Payments</h5>
                </Col>
                <Col xs={6}
                     md={6}
                     lg={6}
                     className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer">
                    <h5 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-headerindication">Additional details</h5>
                </Col>
                <Col xs={6}
                     md={6}
                     lg={6}
                     className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer">
                <Col className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-mainheaderindicationcontainer">
                 <h5 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-mainheaderindication">TOTAL PURCHASE, 0 peso's</h5>
                 <h5 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-mainheaderindication">TRANSACTION GIVE AWAY, 0 peso's</h5>
                </Col>
                </Col>
                <Col xs={6}
                     md={6}
                     lg={6}
                     className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer">
                <Col className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-mainheaderindicationcontainer">
                 <h5 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-mainheaderindication">Vanguard transaction give away covered</h5>
                 <h5 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-mainheaderindication">Online reciept</h5>
                 <h5 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-mainheaderindication">Vanguard holder, common public</h5>
                </Col>
                </Col>

                <Col xs={6}
                     md={6}
                     lg={6}
                     className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer">
                    <h5 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-headerindication">Transaction</h5>
                </Col>

                <Col xs={6}
                     md={6}
                     lg={6}
                     className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer">
                    <h5 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-headerindication">|||||||||||||||||||||||||||||</h5>
                    <h5 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-headerindication">Vanguard's signiture</h5>
                </Col>

                <Col xs={6}
                     md={6}
                     lg={6}
                     className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer">
                <Col className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-mainheaderindicationcontainer">
                 <h5 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-mainheaderindication">TOTAL PURCHASE, 0 peso's</h5>
                 <h5 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept-detailsgridcontainer-colcontainer-mainheaderindication">TRANSACTION GIVE AWAY, 0 peso's</h5>
                </Col>
                </Col>

                
               
              </Row>
            </Col>
            <Col id="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-backreciept">
             <h4 id="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-backreciept-headerindication">Back reciept</h4>
             
             <h4 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-closebuttoncontainer-headerindication"
                onClick={()=> {

                  const _purchasingcheckdetailsreciept = document.querySelector("#purchasingdetails-purchasingcheckoutdetailscontainer");
                  purchasingcheckoutdetailsmodaldisplaypropertycb((display)=> display = "none");

             }}>keep</h4>
  
            </Col>
          </Col>
          <Col id="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-closebuttoncontainer">
            <h4 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-closebuttoncontainer-headerindication"
                onClick={()=> {

                 const _frontreciept = document.querySelector("#purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-frontreciept");
                 const _backreciept = document.querySelector("#purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-resultscontainer-backreciept");

                 const _recieptflippingcondition = _frontreciept.style.opacity;
                 
                 if ( _recieptflippingcondition === "1" ) {
                  _frontreciept.style.opacity = "0";
                  _backreciept.style.opacity = "1";
                 } else {
                  _frontreciept.style.opacity = "1";
                  _backreciept.style.opacity = "0";
                 }

            }}>flip</h4>
            <h4 className="purchasingdetails-purchasingcheckoutdetailscontainer-configurationcontainer-closebuttoncontainer-headerindication"
                onClick={()=> {

                  const _confirmationcontainer = document.querySelector("#purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer");
                  _confirmationcontainer.style.display = "flex";

             }}>payment</h4>
          </Col>
        </Col>
        <Col id="purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer">
           <img src="../images/purchasing/checkout/checkoutcheck.png"
                id="purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-checkoutcheck"
                alt="VANGUARD-IMAGE-CHECKOUTCHECK"/>
          <h1 className="purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-checkoutcheck-responsemessage">Checkoutcheck response message</h1>
          <h1 className="purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-checkoutcheck-responsemessage">Checkoutcheck additional information response message</h1>
          <Spinner animation="border" variant="primary" size="lg" id="purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-checkoutcheck-loadingindicator"/>
          <h1 id="purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-submitindication"
              onClick={(evt)=> {

                 alert(props.purchasingcargoaddressset);
                 alert(props.purchasingpaymentset);

                 const _checkoutresponsedisplayimage = document.querySelector("#purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-checkoutcheck");
                 const _checkoutresponsemessage = document.querySelectorAll(".purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-checkoutcheck-responsemessage"); 
                 const _checkoutresponseloadingindicator = document.querySelector("#purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-checkoutcheck-loadingindicator"); 
                 const _checkoutsubmitindication = document.querySelector("#purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-submitindication"); 
                 const _checkoutclosebuttonindication = document.querySelector("#purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-closebuttonindication");

                 if ( props.purchasingcargoaddressset === false && props.purchasingpaymentset === true ) {
                  _checkoutresponsedisplayimage.src = "../images/purchasing/checkout/checkouterror.png";
                  _checkoutresponsedisplayimage.style.display = "block";
                  _checkoutresponsedisplayimage.src = "../images/purchasing/checkout/checkouterror.png";
                  _checkoutresponsedisplayimage.style.display = "block";
                  _checkoutresponsemessage[0].innerText = "Payment was set yet there's an error occured, ";
                  _checkoutresponsemessage[1].innerText = "No purchasing cargo destination address";
                  _checkoutresponsemessage[0].style.display = "block";
                  _checkoutresponsemessage[1].style.display = "block";
                 }
                 if ( props.purchasingpaymentset === false &&  props.purchasingcargoaddressset === true ) {
                  _checkoutresponsedisplayimage.src = "../images/purchasing/checkout/checkouterror.png";
                  _checkoutresponsedisplayimage.style.display = "block";
                  _checkoutresponsedisplayimage.style.display = "block";
                  _checkoutresponsemessage[0].innerText = "Purchasing cargo destination was set yet there's an error occured, ";
                  _checkoutresponsemessage[1].innerText = "No payment.";
                  _checkoutresponsemessage[0].style.display = "block";
                  _checkoutresponsemessage[1].style.display = "block";
                 }
                 if (  props.purchasingpaymentset === false &&  props.purchasingcargoaddressset === false ) {
                  _checkoutresponsedisplayimage.src = "../images/purchasing/checkout/checkouterror.png";
                  _checkoutresponsedisplayimage.style.display = "block";
                  _checkoutresponsedisplayimage.style.display = "block";
                  _checkoutresponsemessage[0].innerText = "Error occured, ";
                  _checkoutresponsemessage[1].innerText = "No cargo destination address.";
                  _checkoutresponsemessage[0].style.display = "block";
                  _checkoutresponsemessage[1].style.display = "block";
                 }
                 if ( props.purchasingpaymentset === true &&  props.purchasingcargoaddressset === true ) {
                    _checkoutresponsedisplayimage.src = "../images/purchasing/checkout/checkouterror.png";
                    _checkoutresponsedisplayimage.style.display = "block";
                    _checkoutresponsedisplayimage.src = "../images/purchasing/checkout/checkouterror.png";
                    _checkoutresponsedisplayimage.style.display = "block";
                    _checkoutresponsemessage[0].innerText = "Sucessfully processed a payment";
                    _checkoutresponsemessage[1].innerText = "Continue to transactions, graph or account";
                    _checkoutresponsemessage[0].style.display = "block";
                    _checkoutresponsemessage[1].style.display = "block";
                 }

              
               //  _checkoutsubmitindication.style.display = "none";

           }}>Submit payment</h1> 
          <h1 id="purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-closebuttonindication"
               onClick={()=> {

                const _confirmationcontainer = document.querySelector("#purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer");
                const _checkoutresponsedisplayimage = document.querySelector("#purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-checkoutcheck");
                const _checkoutresponsemessage = document.querySelectorAll(".purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-checkoutcheck-responsemessage"); 
                const _checkoutresponseloadingindicator = document.querySelector("#purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-checkoutcheck-loadingindicator"); 
                const _checkoutsubmitindication = document.querySelector("#purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-submitindication"); 
                const _checkoutclosebuttonindication = document.querySelector("#purchasingdetails-purchasingcheckoutdetailscontainer-confirmationcontainer-closebuttonindication");

                _checkoutresponsedisplayimage.style.display = "none";
                _checkoutresponsemessage[0].style.display = "none";
                _checkoutresponsemessage[1].style.display = "none";
                _checkoutsubmitindication.style.display = "block";

                _confirmationcontainer.style.display = "none";

           }}>close</h1>
        </Col>
     </Col>
      
    </Row>
 )
}