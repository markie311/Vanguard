import React, {
        useState,
        useEffect
       } from 'react';

import { Row, 
         Col,
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
                             cargodestinationsecbt={cargodestinationsetcb}
                             paymentmethodset={paymentmethodset}
                             paymentmethodsetcb={paymentmethodsetcb}/>
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
                        cargodestinationsecbt={cargodestinationsetcb}
                        paymentmethodset={paymentmethodset}
                        paymentmethodsetcb={paymentmethodsetcb}
                        operations={operations} />
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
    </Row>
 )
}