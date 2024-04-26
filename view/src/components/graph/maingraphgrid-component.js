import React, {
        useState,
        useEffect
       } from 'react';

import { Col, 
         Row } from 'react-bootstrap';

import '../../styles/graph/maingraphgrid.scss';

import barmovementpercentacalculation from '../lib/barmovementpercentagecalculation.js';

export default function MainGraphGrid(props) {

 const [pageloaded, pageloadedcb] = useState(false);


 useEffect(()=> {

  {/*
  bargraphinterval={props.bargraphinterval}
  bargraphsdelayinteval={props.bargraphsdelayinteval}
  barpercentagemovementinterval={props.barpercentagemovementinterval}
  barpercentagemovementintervalcb={props.barpercentagemovementintervalcb}
  */}

 
      const _salesbarpercentage =  document.querySelectorAll('.maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphindication');
      const _salespectagageindication = document.querySelectorAll('.maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication-percentageindication')
      const _contributionsbarpercentage =  document.querySelectorAll('.maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication');
      const _contributionspectagageindication = document.querySelectorAll('.maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication')
      const _barpercentagemovementinterval = null;

      barmovementpercentacalculation(_salesbarpercentage[0], _salespectagageindication[0], _barpercentagemovementinterval, 100, 1000);
      barmovementpercentacalculation(_salesbarpercentage[1], _salespectagageindication[1], _barpercentagemovementinterval, 100, 1000);
      barmovementpercentacalculation(_contributionsbarpercentage[0], _contributionspectagageindication[0], _barpercentagemovementinterval, 100, 1000);
      barmovementpercentacalculation(_contributionsbarpercentage[1], _contributionspectagageindication[1], _barpercentagemovementinterval, 100, 1000);
      barmovementpercentacalculation(_contributionsbarpercentage[2], _contributionspectagageindication[2], _barpercentagemovementinterval, 100, 1000);

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
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphcontainer'>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication'>Improving sales this 15 days public or non public transaction give away authentication</p>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication-percentageindication'></p>
            <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraph'>
              <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphindication'>
              </div>
            </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphcontainer'>
            <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-bargraphheaderindication'>Last sales this 15 days public or non public transaction give away authentication</p>
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
           <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Purchases out of overall Xirbit marketing</p>
           <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication'></p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Visited Xirbit ENT for development website for contents</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication'></p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Recieved transaction give away as a whole Xirbit transaction this 15 days authentication ( public or non public graph access based )</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication-percentageheaderindication'></p>
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
           <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Purchases out of overall Xirbit marketing</p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Visited Xirbit ENT for development website for contents</p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         <Col className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphcontainer'>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphheaderindication'>Recieved transaction give away as a whole Xirbit transaction this 15 days authentication ( public or non public graph access based )</p>
         <p className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphfundsheaderindication'>0</p>
             <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraph'>
               <div className='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionsbargraphindication'>
               
               </div>
             </div>
         </Col>
         </Col>
        <p id='maingraphgrid-graphnavigationcontainer-graphmainnavigationcontainer-contributionscontainer-seeimportantcontentsheader'>See important contents -></p>
       </Col>
      </Row>
    </Col>
 )
}