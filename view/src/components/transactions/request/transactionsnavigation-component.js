import React from 'react';

import { Row,  
         Col } from 'react-bootstrap';

import '../../../styles/transactions/request/trasnsactionsnavigation.scss';

import Transactions from './transactions-component.js';

export default function TransactionsNavigation() {
 return(
  <Row id='transactionnavigation'>
   <Col xs={12}
        md={12}
        lg={12}
        className='tranasctionnavigation-navigationcontainer'>
     <h1 className='tranasctionnavigation-navigationcontainer-navigationheaderindication'>Widthdrawals</h1>
     <div className='tranasctionnavigation-navigationcontainer-navigationbargraph'>
      <div  className='tranasctionnavigation-navigationcontainer-navigationbargraphindication'>
 
      </div>
     </div>
   </Col>
   <Transactions />
   <Col xs={12}
        md={12}
        lg={12}
        className='tranasctionnavigation-navigationcontainer'>
     <h1 className='tranasctionnavigation-navigationcontainer-navigationheaderindication'>Deliveries</h1>
     <div className='tranasctionnavigation-navigationcontainer-navigationbargraph'>
      <div  className='tranasctionnavigation-navigationcontainer-navigationbargraphindication'>
 
      </div>
     </div>
   </Col>
   <Transactions />
   <Col xs={12}
        md={12}
        lg={12}
        className='tranasctionnavigation-navigationcontainer'>
     <h1 className='tranasctionnavigation-navigationcontainer-navigationheaderindication'>Door to door handing out service</h1>
     <div className='tranasctionnavigation-navigationcontainer-navigationbargraph'>
      <div  className='tranasctionnavigation-navigationcontainer-navigationbargraphindication'>
 
      </div>
     </div>
   </Col>
   <Transactions />
  </Row>
 )
} 