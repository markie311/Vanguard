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
  production: () => {

  },
  marketing: () => {
    marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'flex')
    marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none')
    marketingviewmodaldisplaypropertycb((display)=> display = 'none')
    transactionsmodaldisplaypropertycb((display)=> display = 'none')
    setTimeout(()=>{
      marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'none')
      marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'block')  
    }, 3000)
  },
  list: () => {
    marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'flex')
    marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none')
    marketingviewmodaldisplaypropertycb((display)=> display = 'none')
    transactionsmodaldisplaypropertycb((display)=> display = 'none')
    setTimeout(()=>{
      marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'none')
      marketingviewmodaldisplaypropertycb((display)=> display = 'block')  
    }, 3000)
  },
  transactions: () => {
    marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'flex')
    marketingnavigationbarmodaldisplaypropertycb((display)=> display = 'none')
    marketingviewmodaldisplaypropertycb((display)=> display = 'none')
    transactionsmodaldisplaypropertycb((display)=> display = 'none')
    setTimeout(()=>{
      marketingloadingindicationstatemodaldisplaypropertycb((display)=> display = 'none')
      transactionsmodaldisplaypropertycb((display)=> display = 'block')  
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
                       transactionsmodaldisplayproperty={transactionsmodaldisplayproperty}/>

   <Col id='xirbitmarketing-xirbitgraphmarketing'>
    <XirbitMarketingGragphContainer />
   </Col>

  </Row>
 )
}

function XirbitMarketingHeader(props) {

  return (

    <Row id='xirbitmarketing-navigationheadercontainer'>
     <button className='xirbitmarketing-navigationpositioningviewbutton xirbitmarketing-navigationviewbutton'>Production</button>
     <button className='xirbitmarketing-navigationviewbutton'
             onClick={(evt)=> { props.marketingnavigationbuttons.marketing() }}>Marketing</button>
     <button className='xirbitmarketing-navigationviewbutton'
             onClick={(evt)=> { props.marketingnavigationbuttons.list() }}>List</button>
     <button className='xirbitmarketing-navigationviewbutton'
             onClick={(evt)=> { props.marketingnavigationbuttons.transactions() }}>Transactions</button>
     <button className='xirbitmarketing-navigationviewbutton'
             onClick={(evt)=> { props.navigate('/database') }}>
          
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

     <XirbitMarketingNavigationBar marketingnavigationbarmodaldisplayproperty={props.marketingnavigationbarmodaldisplayproperty}/>

     <XirbitMarketingLoadingIndicationStateModal marketingloadingindicationstatemodaldisplayproperty={props.marketingloadingindicationstatemodaldisplayproperty}/>

     <MarketingView user={props.user}
                    usercb={props.usercb}
                    purchasing={props.purchasing}
                    purchasingcb={props.purchasingcb}
                    merchandisescheme={props.merchandisescheme}
                    products={props.products}
                    marketingviewmodaldisplayproperty={props.marketingviewmodaldisplayproperty}/>

      <Transactions viewport={props.viewport}
                    transactionsmodaldisplayproperty={props.transactionsmodaldisplayproperty}/>        

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
         md={5}
         lg={5}
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
                 md={6}
                 lg={6}
                className='xirbitmarketingnavigationbar-navigationsnippet-navigationsnippetcontainer'>
              <Row className='xirbitmarketingnavigationbar-navigationsnippet'>
              <Col xs={4}
                   md={4}
                   lg={4}
                   className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationcontainer'>
                <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheadercontainer'>
                  <h4 className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheader'>A</h4>
                </div>
              </Col>
              <Col xs={8}
                   md={8}
                   lg={8}
                   className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer'>
                <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases this 15 days public authentication</p>
                <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
                <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
                  <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                  </div>
                </div>
              </Col>
            </Row>
            </Col>

            <Col xs={12}
                md={6}
                lg={6}
                className='xirbitmarketingnavigationbar-navigationsnippet-navigationsnippetcontainer'>
              <Row className='xirbitmarketingnavigationbar-navigationsnippet'>
              <Col xs={4}
                    md={4}
                    lg={4}
                    className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationcontainer'>
                <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheadercontainer'>
                  <h4 className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheader'>F</h4>
                </div>
              </Col>
              <Col xs={8}
                  md={8}
                  lg={8}
                  className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer'>
                <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases this 15 days public authentication</p>
                <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
                <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
                  <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                  </div>
                </div>
              </Col>
            </Row>
            </Col>

            <Col xs={12}
                md={6}
                lg={6}
                className='xirbitmarketingnavigationbar-navigationsnippet-navigationsnippetcontainer'>
              <Row className='xirbitmarketingnavigationbar-navigationsnippet'>
              <Col xs={4}
                    md={4}
                    lg={4}
                    className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationcontainer'>
                <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheadercontainer'>
                  <h4 className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheader'>SN</h4>
                </div>
              </Col>
              <Col xs={8}
                  md={8}
                  lg={8}
                  className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer'>
                <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases this 15 days public authentication</p>
                <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
                <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
                  <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                  </div>
                </div>
              </Col>
            </Row>
            </Col>

            <Col xs={12}
                md={6}
                lg={6}
                className='xirbitmarketingnavigationbar-navigationsnippet-navigationsnippetcontainer'>
              <Row className='xirbitmarketingnavigationbar-navigationsnippet'>
              <Col xs={4}
                    md={4}
                    lg={4}
                    className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationcontainer'>
                <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheadercontainer'>
                  <h4 className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheader'>AP</h4>
                </div>
              </Col>
              <Col xs={8}
                  md={8}
                  lg={8}
                  className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer'>
                <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases this 15 days public authentication</p>
                <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-percentageheaderindication'></p>
                <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraph'>
                  <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-bargraphindication'>

                  </div>
                </div>
              </Col>
            </Row>
            </Col>

            <Col xs={12}
                md={6}
                lg={6}
                className='xirbitmarketingnavigationbar-navigationsnippet-navigationsnippetcontainer'>
              <Row className='xirbitmarketingnavigationbar-navigationsnippet'>
              <Col xs={4}
                    md={4}
                    lg={4}
                    className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationcontainer'>
                <div className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheadercontainer'>
                  <h4 className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheader'>MRN</h4>
                </div>
              </Col>
              <Col xs={8}
                  md={8}
                  lg={8}
                  className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer'>
                <p className='xirbitmarketingnavigationbar-navigationsnippet-categoryindicationheaderandbargraphcontainer-headerindication'>Total purchases this 15 days public authentication</p>
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
         md={7}
         lg={7}
         id='xirbitmarketingnavigationbar-marketdetailscontainer'>
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
  
   <Col xs={12}
        md={4}
        lg={4}
        id='xirbitmarketing-xirbitgraphmarketing-graph-container1'>
    <Row id='xirbitmarketing-xirbitgraphmarketing-graph-gridcontainer'>
      <Col xs={12}
           md={6}
           lg={6}
           className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
        <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'>All <span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>A</span></p>
        <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'></p>
        <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
         <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>
           
         </div>
        </div>
       </Col>
       <Col xs={12}
           md={6}
           lg={6}
           className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
        <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'>Food <span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>F</span></p>
        <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'></p>
        <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
         <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>

         </div>
        </div>
       </Col>
       <Col xs={12}
           md={6}
           lg={6}
           className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
        <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'>Snacks <span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>SN</span></p>
        <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'></p>
        <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
         <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>
          
         </div>
        </div>
       </Col>
       <Col xs={12}
           md={6}
           lg={6}
           className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
        <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'>Apparels <span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>AP</span></p>
        <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'></p>
        <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
         <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>

         </div>
        </div>
        </Col>
        <Col xs={12}
           md={6}
           lg={6}
           className='xirbitmarketing-xirbitgraphmarketing-graph-barandbarindicationcontainer'>
        <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader'>Merchandise <span className='xirbitmarketing-xirbitgraphmarketing-graph-barheaderabbereviation'>MRN</span></p>
        <p className='xirbitmarketing-xirbitgraphmarketing-graph-barheader xirbitmarketing-xirbitgraphmarketing-graph-barheaderpercentageheaderindication'></p>
        <div className='xirbitmarketing-xirbitgraphmarketing-graphbar'>
         <div className='xirbitmarketing-xirbitgraphmarketing-graphbarindication'>

         </div>
        </div>
       </Col>
     </Row>
   </Col>
   <Col xs={12}
        md={12}
        lg={12}
        id='xirbitmarketing-xirbitgraphmarketing-graph-container2'>
   </Col>

  </Col>
 )
}