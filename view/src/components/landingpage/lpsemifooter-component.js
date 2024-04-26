import React from 'react';

import { Row,
         Col } from 'react-bootstrap';

import '../../styles/landingpage/lpsemifooter.scss';

export default function LPSemiFooter() {
 return(
  <Row id='lpsemifooter'>
   <Col xs={12}
        md={6}
        lg={6}
        className='lpsemifooter-headercontainer'>
     <h1 className='lpsemifooter-header'>R'castillo street, Jerome, Davao City | 09958749222</h1>
     <p className='lpsemifooter-header lpsemifooter-subheader'>Transactions are wanting the limit operating to place per places. Productions are the key to operate nationwide. What matters is how to solve the availabilitie's amd what is done to the processe's making it fast without the wide conflicts.</p>
     <p className='lpsemifooter-seemapforoperationheader'>See map for operations</p>
   </Col>
   <Col xs={12}
        md={6}
        lg={6}
        id='lpsemifooter-operationcontainer'>
    <div className='lpsemifooter-operationheadercontainer'>
      <h5 className='lpsemifooter-operationheader'>Operation</h5>
    </div>
    <p  className='lpsemifooter-operationpositioninglocationheader lpsemifooter-operationlocationheader'>National Road, Maa | 0995874922</p>
    <p  className='lpsemifooter-operationlocationheader'>Bugac, Maaa | 0995874922</p>
    <p  className='lpsemifooter-operationlocationheader'>Ecoland ( SM ) | 0995874922</p>
    <p  className='lpsemifooter-operationlocationheader'>Ecoland Terminal | 0995874922</p>
    <p  className='lpsemifooter-operationlocationheader'>Sandawa | 0995874922</p>
    <p  className='lpsemifooter-operationlocationheader'>Bucana | 0995874922</p>
    <p  className='lpsemifooter-operationlocationheader'>Bankerohan | 0995874922</p>
    <p  className='lpsemifooter-operationlocationheader'>Quirino | 0995874922</p>
    <p  className='lpsemifooter-operationlocationheader'>Claveria | 0995874922</p>
   </Col>
   <Col xs={6}
        md={6}
        lg={6}
        id='lpsemifooter-operationrecieptandpackagingsampleheaderindicationscontainer'>
     <h5 className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-header'>Online orders, door to  door delivery transactions, deliveries, shipments</h5>
     <p className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-subheader'>This is the basis for the transaction give away to be manually counted and remember by you any moment!!!</p>
     <Row className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-nationwidemaindepositsdestinationscontainer'>
      <Col xs={12}
           md={6}
           lg={6}
           className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-nationwidemaindepositsdestinationscontainer-nationdepositsdestinationscontainer'>
       <p  className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-nationwidemaindepositsdestinationscontainer-nationdepositsdestinationheaderindication'>Nationwide deposits destinations</p>
      </Col>
      <Col xs={12}
           md={6}
           lg={6}>
       <p className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-nationwidemaindepositsdestinationscontainer-nationdepositsdestinationsheaderindicationscontainer-nationdepositsdestinationheaderindication'>01. Gcash - 09958749222</p>
       <p className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-nationwidemaindepositsdestinationscontainer-nationdepositsdestinationsheaderindicationscontainer-nationdepositsdestinationheaderindication'>02. Paypal - 09958749222</p>
      </Col>
      <Col xs={12}
           md={6}
           lg={6}
           className='lpsimefooter-expcontainer'>
       <p className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-nationwidemaindepositsdestinationscontainer-nationdepositsdestinationsheaderindicationscontainer-nationdepositsdestinationheaderindication'>Text</p>
       <p className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-nationwidemaindepositsdestinationscontainer-nationdepositsdestinationsheaderindicationscontainer-nationdepositsdestinationheaderindication'>| Via walk in/your address |</p>
       <p className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-nationwidemaindepositsdestinationscontainer-nationdepositsdestinationsheaderindicationscontainer-nationdepositsdestinationheaderindication'>Contact number's that is used to deposit, must be the same number binded into this account to be converted as Xitbit CURRENCY.</p>

      </Col>
     </Row>
     <p id='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-seeotherusefulimageheader'>See other useful images</p>
     <p className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-manualcountingrecieptpositioningsequencenumberpartsheader lpsemifooter-operationrecieptandpackagingsampleimagecontainer-manualcountingrecieptsequencenumberpartsheader'>01.</p>
     <p className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-manualcountingrecieptpartsheader'>Merchandise's listing ( Upper part )</p>
     <p className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-manualcountingrecieptsequencenumberpartsheader'>02.</p>
     <p className='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-manualcountingrecieptpartsheader'>Counting reciept ( Tearable )</p>
   </Col>
   <Col xs={6}
        md={6}
        lg={6}
        id='lpsemifooter-operationrecieptandpackagingsampleimagecontainer'>
     <img src='../images/landingpage/bondpaperimage.jpg'
          id='lpsemifooter-operationrecieptandpackagingsampleimagecontainer-manualcountingrecieptimage'/>
   </Col>
  </Row>
 )
}
