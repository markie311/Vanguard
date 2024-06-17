import React, {
         useState,
         useEffect
       } from 'react';

import { Row, 
         Col,
         Spinner } from 'react-bootstrap';

import { useNavigate,
         useLocation } from 'react-router-dom';


import '../../styles/xirbitmarketing/xirbitmarketing.scss';

import MarketingDisplay from './xirbitmarketingdisplay-component.js';
import Transactions from '../transactions/request/transactions-component.js';
import CompaniesPortfolio from '../portfolios/companiesportfolio-component.js';
import BusinessesPortfolio from '../portfolios/businessesportfolio-component.js';
import VanguardProduction from '../vanguardproduction/vanguardproduction-component.js';
import Exports from '../exportsimports/exports-component.js';
import Imports from '../exportsimports/imports-component.js';

import barmovementpercentacalculation  from '../lib/barmovementpercentagecalculation.js';

export default function XirbitMarketing(props) {

const [marketingloadingindicationstatemodaldisplayproperty, marketingloadingindicationstatemodaldisplaypropertycb] = useState('none');
const [marketingnavigationbarmodaldisplayproperty, marketingnavigationbarmodaldisplaypropertycb] = useState('flex');
const [marketingviewmodaldisplayproperty, marketingviewmodaldisplaypropertycb] = useState('none');
const [transactionsmodaldisplayproperty, transactionsmodaldisplaypropertycb] = useState('none');

const location = useLocation();
const path = location.pathname;

{/*
useEffect(()=> {
  
 const _totalpurchasesbarpercentage =  document.querySelectorAll('.xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication');
 const _totalpurchasespectagageindication = document.querySelectorAll('.xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication');
 const _totalsalesonacategorybarpercentage =  document.querySelectorAll('.xirbitmarketing-xirbitgraphmarketing-graphbarindication');
 const _totalsalesonacategorypectagageindication = document.querySelectorAll('.xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication');
 const _barpercentagemovementinterval = null;

 barmovementpercentacalculation(_totalpurchasesbarpercentage[0], _totalpurchasespectagageindication[0], _barpercentagemovementinterval, 100, 1000);
 barmovementpercentacalculation(_totalpurchasesbarpercentage[1], _totalpurchasespectagageindication[1], _barpercentagemovementinterval, 100, 1000);
 barmovementpercentacalculation(_totalpurchasesbarpercentage[2], _totalpurchasespectagageindication[2], _barpercentagemovementinterval, 100, 1000);
 barmovementpercentacalculation(_totalpurchasesbarpercentage[3], _totalpurchasespectagageindication[3], _barpercentagemovementinterval, 100, 1000);
 barmovementpercentacalculation(_totalpurchasesbarpercentage[4], _totalpurchasespectagageindication[4], _barpercentagemovementinterval, 100, 1000);

 barmovementpercentacalculation(_totalsalesonacategorybarpercentage[0], _totalsalesonacategorypectagageindication[0], _barpercentagemovementinterval, 100, 1000);
 barmovementpercentacalculation(_totalsalesonacategorybarpercentage[1], _totalsalesonacategorypectagageindication[1], _barpercentagemovementinterval, 100, 1000);
 barmovementpercentacalculation(_totalsalesonacategorybarpercentage[2], _totalsalesonacategorypectagageindication[2], _barpercentagemovementinterval, 100, 1000);
 barmovementpercentacalculation(_totalsalesonacategorybarpercentage[3], _totalsalesonacategorypectagageindication[3], _barpercentagemovementinterval, 100, 1000);
 barmovementpercentacalculation(_totalsalesonacategorybarpercentage[4], _totalsalesonacategorypectagageindication[4], _barpercentagemovementinterval, 100, 1000);

},[])
*/}

const marketingnavigationbuttons = {
  vanguardproduction: () => {
    document.querySelector("#companiesportfoliocontainer").style.display = "none";
    document.querySelector("#businessportfoliocontainer").style.display = "none";
    document.querySelector("#exportscontainer").style.display = "none";
    document.querySelector("#importscontainer").style.display = "none";
    marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'flex');
    marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none');
    marketingviewmodaldisplaypropertycb((display)=> display = 'none');
    transactionsmodaldisplaypropertycb((display)=> display = 'none');
    setTimeout(()=>{
      document.querySelector("#vanguardproductioncontainer").style.display = "block";
      marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'none');
      marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none');
    }, 3000)
  },
  marketing: () => {
    document.querySelector("#companiesportfoliocontainer").style.display = "none";
    document.querySelector("#businessportfoliocontainer").style.display = "none";
    document.querySelector("#vanguardproductioncontainer").style.display = "none";
    document.querySelector("#exportscontainer").style.display = "none";
    document.querySelector("#importscontainer").style.display = "none";
    marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'flex');
    marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none');
    marketingviewmodaldisplaypropertycb((display)=> display = 'none');
    transactionsmodaldisplaypropertycb((display)=> display = 'none');
    setTimeout(()=>{
      marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'none');
      marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'flex');
    }, 3000)
  },
  companies: () => {
    document.querySelector("#businessportfoliocontainer").style.display = "none";
    document.querySelector("#vanguardproductioncontainer").style.display = "none";
    document.querySelector("#exportscontainer").style.display = "none";
    document.querySelector("#importscontainer").style.display = "none";
    marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'flex');
    marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none');
    marketingviewmodaldisplaypropertycb((display)=> display = 'none');
    transactionsmodaldisplaypropertycb((display)=> display = 'none');
    setTimeout(()=>{
      document.querySelector("#companiesportfoliocontainer").style.display = "block";
      marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'none');
      marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none');
    }, 3000)
  },
  businesses: () => {
    document.querySelector("#companiesportfoliocontainer").style.display = "none";
    document.querySelector("#vanguardproductioncontainer").style.display = "none";
    document.querySelector("#exportscontainer").style.display = "none";
    document.querySelector("#importscontainer").style.display = "none";
    marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'flex');
    marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none');
    marketingviewmodaldisplaypropertycb((display)=> display = 'none');
    transactionsmodaldisplaypropertycb((display)=> display = 'none');
    setTimeout(()=>{
      document.querySelector("#businessportfoliocontainer").style.display = "block";
      marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'none');
      marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none');
    }, 3000)
  },
  list: () => {
    document.querySelector("#companiesportfoliocontainer").style.display = "none";
    document.querySelector("#businessportfoliocontainer").style.display = "none";
    document.querySelector("#vanguardproductioncontainer").style.display = "none";
    document.querySelector("#exportscontainer").style.display = "none";
    document.querySelector("#importscontainer").style.display = "none";
    marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'flex');
    marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none');
    marketingviewmodaldisplaypropertycb((display)=> display = 'none');
    transactionsmodaldisplaypropertycb((display)=> display = 'none');
    setTimeout(()=>{
      marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'none')
      marketingviewmodaldisplaypropertycb((display)=> display = 'block')  
    }, 3000)
  },
  transactions: () => {
    document.querySelector("#companiesportfoliocontainer").style.display = "none";
    document.querySelector("#businessportfoliocontainer").style.display = "none";
    document.querySelector("#vanguardproductioncontainer").style.display = "none";
    document.querySelector("#exportscontainer").style.display = "none";
    document.querySelector("#importscontainer").style.display = "none";
    marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'flex');
    marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none');
    marketingviewmodaldisplaypropertycb((display)=> display = 'none');
    transactionsmodaldisplaypropertycb((display)=> display = 'none');
    setTimeout(()=>{
      marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'none');
      transactionsmodaldisplaypropertycb((display)=> display = 'block');
    }, 3000)
  },
  exports: () => {
    document.querySelector("#companiesportfoliocontainer").style.display = "none";
    document.querySelector("#businessportfoliocontainer").style.display = "none";
    document.querySelector("#vanguardproductioncontainer").style.display = "none";
    document.querySelector("#importscontainer").style.display = "none";
    marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'flex');
    marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none');
    marketingviewmodaldisplaypropertycb((display)=> display = 'none');
    transactionsmodaldisplaypropertycb((display)=> display = 'none');
    setTimeout(()=>{
      document.querySelector("#exportscontainer").style.display = "block";
      marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'none');
      transactionsmodaldisplaypropertycb((display)=> display = 'none');
    }, 3000)
  },
  imports: () => {
    document.querySelector("#companiesportfoliocontainer").style.display = "none";
    document.querySelector("#businessportfoliocontainer").style.display = "none";
    document.querySelector("#vanguardproductioncontainer").style.display = "none";
    document.querySelector("#exportscontainer").style.display = "none";
    marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'flex');
    marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none');
    marketingviewmodaldisplaypropertycb((display)=> display = 'none');
    transactionsmodaldisplaypropertycb((display)=> display = 'none');
    setTimeout(()=>{
      document.querySelector("#importscontainer").style.display = "block";
      marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'none');
      transactionsmodaldisplaypropertycb((display)=> display = 'none');
    }, 3000)
  }
}

async function handleviewport() {
  if ( props.viewport === 'xs' ) {
    if ( marketingnavigationbarmodaldisplayproperty === 'flex') {
      marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'flex')
      marketingviewmodaldisplaypropertycb((display)=> display = 'none')
      transactionsmodaldisplaypropertycb((display)=> display = 'none')
    }
   if ( marketingviewmodaldisplayproperty === 'block' ) {
    marketingviewmodaldisplaypropertycb((display)=> display = 'block')
    marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none')
    transactionsmodaldisplaypropertycb((display)=> display = 'none')
   }
  if ( transactionsmodaldisplayproperty === 'block' ) {
    transactionsmodaldisplaypropertycb((display)=> display = 'block')  
    marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none')
    marketingviewmodaldisplaypropertycb((display)=> display = 'none')
   }
  }
  if ( props.viewport === 'lg' || props.viewport === 'md' ) {
    
    await marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'block')
  }
}

const navigate = useNavigate();

 return (
  <Row id='xirbitmarketing'>
    
   <XirbitMarketingHeader navigate={navigate}
                          marketingnavigationbuttons={marketingnavigationbuttons}/>

   <XirbitMarketingView marketingnavigationbarmodaldisplayproperty={marketingnavigationbarmodaldisplayproperty}
                       marketingloadingindicationstatemodaldisplayproperty={marketingloadingindicationstatemodaldisplayproperty}
                       user={props.user}
                       usercb={props.usercb}
                       purchasing={props.purchasing}
                       purchasingcb={props.purchasingcb}
                       merchandisescheme={props.merchandisescheme}
                       products={props.products}
                       marketingviewmodaldisplayproperty={marketingviewmodaldisplayproperty}
                       viewport={props.viewport}
                       transactionsmodaldisplayproperty={transactionsmodaldisplayproperty}
                       
                       requesttransactiondata={props.requesttransactiondata}
                       
                       companies={props.companies}
                       companiescb={props.companiescb}
                       
                       businesess={props.businesess}
                       businessescbb={props.businessescb}/>

   <Col id='xirbitmarketing-xirbitgraphmarketing'>
    <XirbitMarketingGragphContainer />
   </Col>

  </Row>
 )
}

function XirbitMarketingHeader(props) {

  return (

    <Row id='xirbitmarketing-navigationheadercontainer'>
     <button className='xirbitmarketing-navigationviewbutton'
             onClick={(evt)=> { props.marketingnavigationbuttons.marketing() }}>
       Marketing
     </button>
     <button className='xirbitmarketing-navigationpositioningviewbutton xirbitmarketing-navigationviewbutton'
             onClick={(evt)=> { props.marketingnavigationbuttons.companies() }}>
       Companies
     </button>
     <button className='xirbitmarketing-navigationpositioningviewbutton xirbitmarketing-navigationviewbutton'
             onClick={(evt)=> { props.marketingnavigationbuttons.businesses() }}>
      Businesses
     </button>
     <button className='xirbitmarketing-navigationpositioningviewbutton xirbitmarketing-navigationviewbutton'
             onClick={(evt)=> { props.marketingnavigationbuttons.vanguardproduction() }}>
        Vanguard Production
     </button>
     <button className='xirbitmarketing-navigationviewbutton'
             onClick={(evt)=> { props.marketingnavigationbuttons.list() }}>
       ALL PRODUCT LIST
      </button>
     <button className='xirbitmarketing-navigationviewbutton'
             onClick={(evt)=> { props.marketingnavigationbuttons.transactions() }}>
        Transactions
     </button>
     <button className='xirbitmarketing-navigationpositioningviewbutton xirbitmarketing-navigationviewbutton'
             onClick={(evt)=> { props.marketingnavigationbuttons.exports() }}>
      Export's
     </button>
     <button className='xirbitmarketing-navigationpositioningviewbutton xirbitmarketing-navigationviewbutton'
             onClick={(evt)=> { props.marketingnavigationbuttons.imports() }}>
      Import's
     </button>
   </Row>
  )
}

function XirbitMarketingView(props) {

  return (

   <Col xs={12}
        md={12}
        lg={12} 
        id='xirbitmarketing-viewcontainer'>

     <XirbitMarketingNavigationBar marketingnavigationbarmodaldisplayproperty={props.marketingnavigationbarmodaldisplayproperty}
                                  companies={props.companies}
                                  companiescb={props.companiescb}/>

     <XirbitMarketingLoadingIndicationStateModal marketingloadingindicationstatemodaldisplayproperty={props.marketingloadingindicationstatemodaldisplayproperty}/>

     <MarketingView user={props.user}
                    usercb={props.usercb}
                    purchasing={props.purchasing}
                    purchasingcb={props.purchasingcb}
                    merchandisescheme={props.merchandisescheme}
                    products={props.products}
                    marketingviewmodaldisplayproperty={props.marketingviewmodaldisplayproperty}/>

      <Transactions viewport={props.viewport}
                    transactionsmodaldisplayproperty={props.transactionsmodaldisplayproperty}
                    requesttransactiondata={props.requesttransactiondata}/>   

      <Row className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer">
        <Col xs={12}
              md={12}
              lg={12}
              className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer">
          <Row className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer">
            <h2 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-aboutmaindataheaderindication">TWO MAIN DATA'S WILL APPLY AS HISTORY PASS</h2>
            <Col xs={12}
                 md={6}
                 lg={6}
                 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer">
              <h1 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-headerindication">WIthin this coming 15 days</h1>
              <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-headerindication">0 peso's out of 0 peso's worth of marketed products</p>
              <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-headerindication">0%</p>
              <div className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-bargraph">
               <div className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-bargraphindication">

               </div>
              </div>
            </Col>
            <Col xs={12}
                 md={6}
                 lg={6}
                 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer">
              <h1 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-headerindication">Last 15 days</h1>
              <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-headerindication">0 peso's out of 0 peso's worth of marketed products</p>
              <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-headerindication">0%</p>
              <div className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-bargraph">
               <div className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-bargraphindication">

               </div>
              </div>
            </Col>
          </Row>
          <Row className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer">
            <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">History</p>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
          </Row>
        </Col>
        <Col xs={12}
              md={12}
              lg={12}
              className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailsclosebuttoncontainer">
            <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailsclosebuttoncontainer-closebuttonheaderindication"
                onClick={()=> {
                const _productgraphcontainer = document.querySelectorAll(".xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer");
                _productgraphcontainer[0].style.display = "none";
                }}>
              close
            </p>
        </Col>
      </Row>  

      <Col className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer">
       <Col className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectscontentcontainer">
         {
          props.companies.map((company, companyidx)=> {
            return (
              <React.Fragment>
                {
                  company.projects.map((project, projectidx)=> {
                    return (
                      <Col className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer"
                           key={projectidx}>
                      <p className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Date: {project.date}</p>
                      <p className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Purpose: {project.purpose}</p>
                      <p className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Contributions, {project.contributions.contributioncompletion} pesos's completion on each project on each destined locations, 0 location's will have the budget on the said amount's</p>
                      <p className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Contributed: {project.contributions.contributed}</p>
                      <p className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">LOCATIONS: {project.contributions.contributed}</p>

                      {
                        project.locations.map((location, locationidx)=> {
                          return (
                            <Col className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-locationcontainer"
                                 key={locationidx}>
                              <p className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">0{locationidx}. {location.location.baranggay}, {location.location.street}, {location.location.trademark}, {location.location.city}, {location.location.province}, {location.location.country}</p>
                              <p className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Purpose: {location.purpose}</p>
                              <p className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Contributions, {location.contributions.contributioncompletion} pesos's completion on each project on each destined locations, 0 location's will have the budget on the said amount's</p>
                              <p className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Contributed: {location.contributions.contributed}</p>
                              <p className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Location's: {location.contributions.contributed}</p>
                            </Col>
                          )
                        })
                      }
                    </Col>
                    )
                  })
                }
              </React.Fragment>
            )
          })
         }
       </Col>
       <Col className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectsclosebuttoncontainer">
        <p className="xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectsclosebuttoncontainer-closebuttonheaderindication"
           onClick={()=> {
            const _companyprojectscontainer = document.querySelectorAll(".xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer");
            _companyprojectscontainer[0].style.display = "none";
            }}>
          close
        </p>
       </Col>
      </Col>

      <Col className="xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer">
        <Col className="xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer-productdetailscontainer">
        </Col>
        <Col className="xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer-closebuttoncontainer">
          <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer-closebuttoncontainer-closebuttonheaderindication"
            onClick={()=> {
              const _productdetailscontainer = document.querySelectorAll(".xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer");
              _productdetailscontainer[0].style.display = "none";
            }}>
            close
          </p>
        </Col>
      </Col>

      <Col id="companiesportfoliocontainer">
         <CompaniesPortfolio companies={props.companies}/>
      </Col>

      <Col id="businessportfoliocontainer">
         <BusinessesPortfolio businesses={props.businesess}/>
      </Col>

      <Col id="vanguardproductioncontainer">
        <VanguardProduction />
      </Col>

      <Col id="exportscontainer">
       <Exports />
      </Col>

      <Col id="importscontainer">
       <Imports />
      </Col>

   </Col>

  )

}

function XirbitMarketingLoadingIndicationStateModal(props) {
 return(
  <Col id='xirbitmarketingloadingindicationstatemodal'
       style={{display: props.marketingloadingindicationstatemodaldisplayproperty}}>
   <Spinner animation="border" 
            variant="danger"
            className='xirbitmarketingloadingindicationstatemodalspinner'/>
  </Col>
 )
}

function XirbitMarketingNavigationBar(props) {

 const marketing = [
  {
   marketingindication: 'A'
  },
  {
   marketingindication: 'F'
  },
  {
    marketingindication: 'SN'
  },
  {
    marketingindication: 'AP'
  },
  {
    marketingindication: 'MRN'
  }
 ]

 return ( 
   <Row id='xirbitmarketingnavigationbar'
        style={{display: props.marketingnavigationbarmodaldisplayproperty}}>

    <Col xs={12}
         md={12}
         lg={12} 
         id='xirbitmarketingnavigationbar-navigationcontainer'> 
           
     <Col xs={12}
          md={12}
          lg={12}
          id='xirbitmarketingnavigationbar-headercontainer'>
        <h1 className='xirbitmarketingnavigationbar-headercontainer-headerindication'>Good day, welcome to Xirbit marketing link</h1>
        <p className='xirbitmarketingnavigationbar-headercontainer-subheaderindication'>You can navigate anywhere and check your own Public Marketing Portfolio</p>
     </Col>

     <Row id='xirbitmarketingnavigationbar-navigationsnippet-gridcontainer'>

        <Col xs={12}
             md={4}
             lg={4}
            className='xirbitmarketingnavigationbar-navigationsnippet-navigationsnippetcontainer'>
          <Row className='xirbitmarketingnavigationbar-navigationsnippet'>
            <Col xs={4}
                 md={4}
                 lg={4}
                 className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationcontainer'>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheadercontainer'>
                <button className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheader'
                        onClick={()=> {
                          const _marketingdetailscontainer = document.querySelector("#xirbitmarketingnavigationbar-marketdetailscontainer");
                          _marketingdetailscontainer.style.display = "block";
                        }}>A</button>
              </div>
            </Col>
            <Col xs={8}
                md={8}
                lg={8}
                className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer'>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Abrreviation A: All</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases within this 15 days</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                </div>
              </div>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases last 15 days</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                </div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs={12}
             md={4}
             lg={4}
             className='xirbitmarketingnavigationbar-navigationsnippet-navigationsnippetcontainer'>
          <Row className='xirbitmarketingnavigationbar-navigationsnippet'>
          <Col xs={4}
                md={4}
                lg={4}
                className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationcontainer'>
            <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheadercontainer'>
              <button className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheader'
                      onClick={()=> {
                        const _marketingdetailscontainer = document.querySelector("#xirbitmarketingnavigationbar-marketdetailscontainer");
                        _marketingdetailscontainer.style.display = "block";
                      }}>F</button>
            </div>
          </Col>
          <Col xs={8}
              md={8}
              lg={8}
              className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer'>
            <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Abrreviation F: Foods</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases within this 15 days</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                </div>
              </div>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases last 15 days</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                </div>
              </div>
          </Col>
        </Row>
        </Col>

        <Col xs={12}
             md={4}
             lg={4}
            className='xirbitmarketingnavigationbar-navigationsnippet-navigationsnippetcontainer'>
          <Row className='xirbitmarketingnavigationbar-navigationsnippet'>
          <Col xs={4}
                md={4}
                lg={4}
                className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationcontainer'>
            <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheadercontainer'>
              <button className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheader'
                      onClick={()=> {
                        const _marketingdetailscontainer = document.querySelector("#xirbitmarketingnavigationbar-marketdetailscontainer");
                        _marketingdetailscontainer.style.display = "block";
                      }}>SN</button>
            </div>
          </Col>
          <Col xs={8}
              md={8}
              lg={8}
              className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer'>
           <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Abrreviation SN: Snacks</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases within this 15 days</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                </div>
              </div>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases last 15 days</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                </div>
              </div>
          </Col>
        </Row>
        </Col>

        <Col xs={12}
             md={4}
             lg={4}
            className='xirbitmarketingnavigationbar-navigationsnippet-navigationsnippetcontainer'>
          <Row className='xirbitmarketingnavigationbar-navigationsnippet'>
            <Col xs={4}
                md={4}
                lg={4}
                className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationcontainer'>
            <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheadercontainer'>
              <button className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheader'
                      onClick={()=> {
                       const _marketingdetailscontainer = document.querySelector("#xirbitmarketingnavigationbar-marketdetailscontainer");
                       _marketingdetailscontainer.style.display = "block";
                      }}>AP</button>
            </div>
          </Col>
          <Col xs={8}
                md={8}
                lg={8}
                className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer'>
           <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Abrreviation AP: Apparels</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases within this 15 days</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                </div>
              </div>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases last 15 days</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                </div>
              </div>
          </Col>
        </Row>
        </Col>

        <Col xs={12}
             md={4}
             lg={4}
            className='xirbitmarketingnavigationbar-navigationsnippet-navigationsnippetcontainer'>
          <Row className='xirbitmarketingnavigationbar-navigationsnippet'>
          <Col xs={4}
                md={4}
                lg={4}
                className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationcontainer'>
            <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheadercontainer'>
              <button className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheader'
                      onClick={()=> {
                        const _marketingdetailscontainer = document.querySelector("#xirbitmarketingnavigationbar-marketdetailscontainer");
                        _marketingdetailscontainer.style.display = "block";
                      }}>MN</button>
            </div>
          </Col>
          <Col xs={8}
              md={8}
              lg={8}
              className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer'>
            <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Abrreviation MN: Merchandise's</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases within this 15 days</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                </div>
              </div>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases last 15 days</p>
              <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
              <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                </div>
              </div>
          </Col>
        </Row>
        </Col>

     </Row>

    </Col>

    <Col xs={12}
         md={12}
         lg={12}
         id='xirbitmarketingnavigationbar-marketdetailscontainer'>
      <Col id="xirbitmarketingnavigationbar-marketdetailscontainer-closebuttoncontainer">
        <button id="xirbitmarketingnavigationbar-marketdetailscontainer-closebuttoncontainer-closebuttonheaderindication"
                onClick={()=> {
                    const _marketingdetailscontainer = document.querySelector("#xirbitmarketingnavigationbar-marketdetailscontainer");
                    _marketingdetailscontainer.style.display = "none";
                }}>
          close
        </button>
      </Col>
      <Row id="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer">
        {
          props.companies.map((company, companyidx)=> {
            return (
              <Col xs={12}
                   md={12}
                   lg={12}
                   className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer">
                <p className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyheaderindication">{company.details.companyname}</p>
              {
              company.product.list.map((companyproduct, companyproductidx)=> {
                return (
                  <Col className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer"
                       key={companyproductidx}>

                    <p className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">{companyproduct.productname}'s, {companyproduct.productname}</p>
                    <p className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">Made 0 peso's as profit and revenue on all marketed product's</p>
                    <p className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">{companyproduct.productname}'s available product's depending on variations</p>

                    <Col className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer">
                     {
                      companyproduct.specifications.map((companyproductspecification, companyproductspecificationidx)=> {
                        return (
                          <Col className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer-productspecification">
                           <p className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">0{companyproductspecificationidx}. {companyproductspecification.productname}, made 0 peso's as profit and revenue on all marketed product's</p>
                           <Col className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer-productspecification-buttonscontainer"> 
                             <button className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer-productspecification-buttonscontainer-viewbutton"
                                      onClick={()=> { 
                                        const _productdetailscontainer = document.querySelectorAll(".xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer");
                                        _productdetailscontainer[0].style.display = "block";
                                     }}>view product</button>
                             <button className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer-productspecification-buttonscontainer-graphbutton"
                                      onClick={()=> {
                                        const _productgraphcontainer = document.querySelectorAll(".xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer");
                                        _productgraphcontainer[0].style.display = "block";
                                       }}>
                                graph
                             </button>
                           </Col>
                          </Col>
                        )
                      })
                     }
                    </Col>

                  </Col>
                )
              })
              }
              </Col>
            )
          })
        }
      </Row>
    </Col>

   </Row>
 )
}

function MarketingView(props) {

 const navigate = useNavigate();

 return(
  <Col id='marketingview'
       style={{display: props.marketingviewmodaldisplayproperty}}>
    <Col id='marketingview-navigationbarcontainer'>
     <button className='markertingview-navigationbarcontaine-purchasingbutton'
             onClick={(evt)=> {
               navigate('/purchasing')
             }}>
      Purchasing <span className='markertingview-navigationbarcontaine-purchasingbutton-purchasingcountheaderindication'>{props.purchasing.length}</span>
    </button>
    </Col>
    <Col id='marketing-marketingdisplaycontainer'>
     <MarketingDisplay user={props.user}
                       purchasing={props.purchasing}
                       purchasingcb={props.purchasingcb}
                       viewport={props.viewport}
                       merchandisescheme={props.merchandisescheme}
                       products={props.products}/>
    </Col>
  </Col>
 )
}

function XirbitMarketingGragphContainer(props) {
 return (
  <Col id='xirbitmarketing-xirbitgraphmarketing-graph'>
  
   <Col id='xirbitmarketing-xirbitgraphmarketing-graph-container1'>
    <Row id='xirbitmarketing-xirbitgraphmarketing-graph-gridcontainer'>
      <Col xs={12}
           md={6}
           lg={6}
           className="xirbitmarketing-xirbitgraphmarketing-graph-gridcontainer-colcontainer">
        <Row className="xirbitmarketing-xirbitgraphmarketing-graph-gridcontainer-colcontainer-gridcontainer">
          <Col xs={12}
              md={6}
              lg={6}
              className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
              <h1 className='xirbitmarketing-xirbitgraphmarketing-graph-barmainheader'>WITHIN THIS COMING 15 DAYS</h1>
          </Col>
          <Col xs={12}
              md={6}
              lg={6}
              className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'><span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>F</span> Rice Kohaku White Grains</p>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'>0%</p>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>
              
            </div>
            </div>
          </Col>
          <Col xs={12}
               md={6}
               lg={6}
              className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'><span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>F</span> Rice Kohaku Black Grains </p>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'>0%</p>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>

            </div>
            </div>
          </Col>
          <Col xs={12}
              md={6}
              lg={6}
              className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'><span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>SN</span> Lumpia shanghai</p>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'>0%</p>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>
              
            </div>
            </div>
          </Col>
          <Col xs={12}
              md={6}
              lg={6}
              className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'><span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>AP</span> Clark's white immitation shoe's</p>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'>0%</p>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>

            </div>
            </div>
          </Col>
          <Col xs={12}
              md={6}
              lg={6}
              className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'><span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>AP</span> SoFab clarkson's sandal's</p>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'>0%</p>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>

            </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col  xs={12}
           md={6}
           lg={6}
           className="xirbitmarketing-xirbitgraphmarketing-graph-gridcontainer-colcontainer">
       <Row className="xirbitmarketing-xirbitgraphmarketing-graph-gridcontainer-colcontainer-gridcontainer"> 
         <Col xs={12}
              md={6}
              lg={6}
              className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
             <h1 className='xirbitmarketing-xirbitgraphmarketing-graph-barmainheader'>LAST 15 DAYS</h1>
         </Col>
         <Col xs={12}
              md={6}
              lg={6}
              className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'><span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>F</span> Kohaku Black Grains</p>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'>0%</p>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>
              
            </div>
            </div>
          </Col>
          <Col xs={12}
              md={6}
              lg={6}
              className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'><span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>F</span> Kohaku Jasmine Grains </p>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'>0%</p>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>

            </div>
            </div>
          </Col>
          <Col xs={12}
              md={6}
              lg={6}
              className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'><span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>SN</span> Happy</p>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'>0%</p>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>
              
            </div>
            </div>
          </Col>
          <Col xs={12}
              md={6}
              lg={6}
              className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'><span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>AP</span> Nike Seasonal White Shoe's</p>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'>0%</p>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>

            </div>
            </div>
          </Col>
          <Col xs={12}
              md={6}
              lg={6}
              className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'><span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>MRN</span> Judge White T-shirt</p>
            <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'>0%</p>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
            <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>

            </div>
            </div>
          </Col>
      </Row>
      </Col>
     </Row>
   </Col>

  </Col>
 )
}