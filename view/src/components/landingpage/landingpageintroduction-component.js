import React from 'react';

import { Row,
         Col } from 'react-bootstrap';

import '../../styles/landingpage/landingpageintroduction.scss';

export default function LandingPageIntroduction() {
 return(
   <Row id='landingpageintroduction'>
     <h1 className='landingpageintroduction-header landingpageintroduction-impactandconcernssubheader'>The feeling of the impact, what will be lost as renovation. What are the not suppose to be concern's, replacing confidence</h1>
     <h2 className='landingpageintroduction-header landingpageintroduction-entfordevelopmentheader'> an ENT on development</h2>
     <h1 className='landingpageintroduction-header landingpageintroduction-hereandisubheader'>Happy here's, there's, for finally that what is lost, comfort's going back there and here, will be the decision  of I's as whole and completes</h1>
    <Col id='landingpageintroduction-container'>
     <h1 className='landingpageintroduction-containerheader landingpageintroduction-containerheader-xirbitheader'>Vanguard</h1>
     <p className='landingpageintroduction-containerheader landingpageintroduction-containerheader-xirbitsubheader2'>charisma with a charm, questionable luck</p>
     <div id='landingpageintroduction-containerheader-horizontalrule'></div>
     <h1 className='landingpageintroduction-containerheader landingpageintroduction-containerheader-xirbitsubheader1'>Strong, stable, fast & satisfying</h1>
     <img src='../images/landingpage/blacktablebackgroundwithpaper.jpg'
          id='landingpageintroduction-containerheader-backgroundimage'/>
     <h1 className='landingpageintroduction-containerheader landingpageintroduction-containerheader-xirbitsubheader2'>Asynchoronous luck & synchronous belief's</h1>
    </Col>
   </Row>
 )
}