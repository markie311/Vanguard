import React from 'react';

import { Row,
         Col } from 'react-bootstrap';

import '../../../styles/marketing/items/marketing.scss';

export default function Marketing(props) {
 return (
  <Row id='marketing'>
    <Col xs={12}
         md={12}
         lg={12}
         id='marketing-marketingheadercontainer'>
    
    </Col>
    <Col xs={12}
         md={12}
         lg={12}
         id='marketing-marketing'>
      <Row id='marketing-marketing-gridcontainer'>
       {
        props.merchandisescheme.map((merchandise,idx)=> {
         return (
          <Col xs={12}
               md={4}
               lg={4}
               key={idx}
               className='marketing-marketingsnippet'>
           <h1 className='marketing-marketingsnipper-merchandiseindicationheader marketing-marketingsnipper-merchandiseindicationheader-merchandisenameheader'>{merchandise.usage.details.merchandisename}</h1>
           <p className=' marketing-marketingsnipper-merchandiseindicationheader marketing-marketingsnipper-merchandiseindicationheader-merchandisedescriptionheader'>{merchandise.usage.details.merchandisespecifications.primary.description}</p>
           <Row className='marketing-marketingsnippet-statisticsgridcontainer'>
           </Row>
          </Col>
         )
        })
       }
      </Row>
      <Col id='marketing-marketing-togglebuttoncontainer'>
         <h1 id='marketing-marketing-togglebutton'>Marketing</h1>
      </Col>
    </Col>
    <Col xs={12}
         md={12}
         lg={12}
         id='marketing-marketing-statisticscontainer'>
       <Row id='marketing-marketing-statisticsgridcontainer'>
         <Col xs={12}
              md={6}
              lg={6}
              id='marketing-marketing-statisticsgridcontainer-statisticssalescontainer'>
         </Col>
         <Col xs={12}
              md={6}
              lg={6}
              id='marketing-marketing-statisticsgridcontainer-peoplestatisticscontainer'>
         </Col>
       </Row>
       <Col xs={12}
            md={12}
            lg={12}
            id='marketing-marketing-statisticscontainer-togglebuttoncontainer'>
         <h1 id='marketing-marketing-statisticscontainer-togglebutton'>Statistics</h1>
       </Col>
    </Col>
    <Row xs={12}
         md={12}
         lg={12}
         id='marketing-marketing-updatescontainer'>
      <Col xs={12}
           md={4}
           lg={4}
           id='marketing-marketing-updatescontainer-mainneedsupdatescontainer'>
        Main needs updates
      </Col>
      <Col xs={12}
           md={6}
           lg={6}
           id='marketing-marketing-updatescontainer-configurationscontainer'>
       Configurations container
      </Col>
    </Row>
    <Row id='marketing-marketing-sellingauthenticationcodecontainer'>
      <Col xs={7}
           md={8}
           lg={8}
           id='marketing-marketing-sellingauthenticationcodecontainer-authenticationcodecontainer'>
       <p  id='marketing-marketing-sellingauthenticationcodecontainer-authenticationcode'>●●●●●●●●●●●●●●●●●●●●●●●●●●●●</p>
      </Col>
      <Col xs={5}
           md={4}
           lg={4}
           id='marketing-marketing-sellingauthenticationcodecontainer-showauthenticationcodecontainer'>
        <p id='marketing-marketing-sellingauthenticationcodecontainer-showauthenticationcodebutton'>show</p>
      </Col>
    </Row>
  </Row>
 )
}