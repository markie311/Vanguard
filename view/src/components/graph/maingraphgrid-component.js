import React, {
        useState,
        useEffect
       } from 'react';

import { Col, 
         Row } from 'react-bootstrap';

import '../../styles/graph/maingraphgrid.scss';

import barmovementpercentacalculation from '../lib/barmovementpercentagecalculation.js';

import { useNavigate }  from 'react-router-dom';

export default function MainGraphGrid(props) {

 const [pageloaded, pageloadedcb] = useState(false);

 const navigate = useNavigate();

 useEffect(()=> {

  {/*
  bargraphinterval={props.bargraphinterval}
  bargraphsdelayinteval={props.bargraphsdelayinteval}
  barpercentagemovementinterval={props.barpercentagemovementinterval}
  barpercentagemovementintervalcb={props.barpercentagemovementintervalcb}
  */}

 
      const _salesbarpercentage =  document.querySelectorAll('.maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphindication');
      const _salespectagageindication = document.querySelectorAll('.maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication-percentageindication');

      const _contributionsbarpercentage =  document.querySelectorAll('.maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication');
      const _contributionspectagageindication = document.querySelectorAll('.maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication');

      const _presentfundscontributionheaderindication = document.querySelectorAll(".maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphfundsheaderindication")[0];
      const _pastfundscontributionheaderindication = document.querySelectorAll(".maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphfundsheaderindication")[1];
      const _barpercentagemovementinterval = null;

      const $usercurrentpurchases = props.user.purchases.current.reduce((accumulator, transaction)=>  Number(accumulator) + Number(transaction.payments.totalproductpayment), 0);
      const $last15dayspurchases = props.user.purchases.last15days.reduce((accumulator, transaction)=>  Number(accumulator) + Number(transaction.payments.totalproductpayment), 0);
      const $currentpurchasesoutofoverallvanguardmarketing = props.user.purchases.current.reduce((accumulator, transaction)=>  Number(accumulator) + Number(transaction.payments.totalproductpayment), 0);
      const $last15dayspurchasesoutofoverallvanguardmarketing = props.user.purchases.last15days.reduce((accumulator, transaction)=>  Number(accumulator) + Number(transaction.payments.totalproductpayment), 0);

      const $currentrecievetransactiongiveaway = props.user.purchases.current.reduce((accumulator, transaction)=>  Number(accumulator) + Number(transaction.transactiongiveaway.purchaser), 0);
      const $last15daystransactiongiveaway = props.user.purchases.current.reduce((accumulator, transaction)=>  Number(accumulator) + Number(transaction.transactiongiveaway.purchaser), 0)


      barmovementpercentacalculation(_salesbarpercentage[0], _salespectagageindication[0], _barpercentagemovementinterval, Number($usercurrentpurchases), 50000);
      barmovementpercentacalculation(_salesbarpercentage[1], _salespectagageindication[1], _barpercentagemovementinterval, Number($last15dayspurchases), 50000);
      barmovementpercentacalculation(_contributionsbarpercentage[0], _contributionspectagageindication[0], _barpercentagemovementinterval, Number($currentpurchasesoutofoverallvanguardmarketing), 50000);
      barmovementpercentacalculation(_contributionsbarpercentage[0], _contributionspectagageindication[0], _barpercentagemovementinterval, Number($currentrecievetransactiongiveaway), 50000);

      barmovementpercentacalculation(_contributionsbarpercentage[1], _presentfundscontributionheaderindication, _barpercentagemovementinterval, Number($last15dayspurchasesoutofoverallvanguardmarketing), 50000);

    //  barmovementpercentacalculation(_contributionsbarpercentage[0], _contributionspectagageindication[0], _barpercentagemovementinterval, Number($purchasesoutofoverallvanguardmarketing), 50000);
    //  barmovementpercentacalculation(_contributionsbarpercentage[1], _contributionspectagageindication[1], _barpercentagemovementinterval, 100, 50000);
    //  barmovementpercentacalculation(_contributionsbarpercentage[2], _contributionspectagageindication[2], _barpercentagemovementinterval, 100, 50000);

 },[])

 return (
    <Col xs={12}
         md={12}
         lg={12}
         id='maingraphgrid'>
      <Row id='maingraphgrid-graphnavigationcontainer'>
       <Col xs={5}
            md={6}
            lg={6}
            id='maingraphgrid-graphnavigationcontainer-mapbackgroundimagecontainer'>
         <img src='../images/graph/graphmapbackgorundimage.png'
              id='maingraphgrid-graphnavigationcontainer-mapbackgroundimage'/>
       </Col>
       <Col xs={7}
            md={6}
            lg={6}
            id='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer'>
          <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication'>Within this coming 15 days</p>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphcontainer'>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication'>Total purchase's within this coming 15 days on common-public transactions</p>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication-percentageindication'></p>
            <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraph'>
              <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphindication'>
              </div>
            </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphcontainer'>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication'>Total purchase's within this coming 15 days on public transactions</p>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication-percentageindication'></p>
            <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraph'>
              <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphindication'>
              </div>
            </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphcontainer'>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication'>Total purchase's within this coming 15 days on private transactions</p>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication-percentageindication'></p>
            <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraph'>
              <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphindication'>
              </div>
            </div>
         </Col>
         <br />
         <br />
         <br />
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication'>Last 15 days</p>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphcontainer'>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication'>Total purchase's last 15 days on common-public transactions</p>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication-percentageindication'></p>
            <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraph'>
              <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphindication'>
              </div>
            </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphcontainer'>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication'>Total purchase's last 15 days on public transactions</p>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication-percentageindication'></p>
            <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraph'>
              <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphindication'>
              </div>
            </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphcontainer'>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication'>Total purchase's last 15 days on private transactions</p>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication-percentageindication'></p>
            <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraph'>
              <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphindication'>
              </div>
            </div>
         </Col>
       </Col>
       <Col xs={12}
            md={12}
            lg={12}
            id='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-presentcontributionscontainer'>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
           <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>THIS COMING 15 DAYS</p>
           <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>PRODUCTS</p>
           <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Purchase's out of overall Vanguard marketing</p>
           <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Out of 1,000,000</p>
           <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication'></p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>TRANSACTION GIVE AWAY</p>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Total transaction give away as a whole Vanguard transaction happening within this 15 days. ( Commoner common publc, public and private authetications )</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication'></p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Out of 0 peso's total purchase's</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphfundsheaderindication'>0</p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Total transaction give away for common public transactions</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication'></p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Out of 0 peso's total purchase's made by the common public</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphfundsheaderindication'>0</p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Total transaction give away for public transactions</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication'></p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Out of 0 peso's total purchase's made by the public</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphfundsheaderindication'>0</p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Total transaction give away for private transactions</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication'></p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Out of 0 peso's total purchase's made by private authentications</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphfundsheaderindication'>0</p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         <Col xs={12}
            md={12}
            lg={12}
            id='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-pastcontributionscontainer'>
             <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
           <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>LAST 15 DAYS</p>
           <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>PRODUCTS</p>
           <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Purchases out of overall Vanguard marketing</p>
           <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Out of 1,000</p>
           <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication'></p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>TRANSACTION GIVE AWAY</p>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Total transaction give away as a whole Vanguard transaction given last 15 days. ( Commoner common publc, public and private authetications )</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication'></p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Out of 0 peso's total purchase's</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphfundsheaderindication'>0</p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Total transaction give away for common public transactions</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication'></p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Out of 0 peso's total purchase's made by the common public</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphfundsheaderindication'>0</p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Total transaction give away for public transactions</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication'></p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Out of 0 peso's total purchase's made by the public</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphfundsheaderindication'>0</p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Total transaction give away for private transactions</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication'></p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Out of 0 peso's total purchase's made by the private</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphfundsheaderindication'>0</p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         </Col>
        <p id='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionscontainer-seeimportantcontentsheader'
           onClick={()=> {
            navigate('/vanguardportfolio')
           }}>View complete Vanguard portfolio -></p>
       </Col>
      </Row>
    </Col>
 )
}