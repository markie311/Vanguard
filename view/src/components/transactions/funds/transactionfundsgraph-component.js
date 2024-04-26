import React from 'react';

import { Row,
       Col } from 'react-bootstrap';

import '../../../styles/transactions/funds/transactionfundsgraph.scss';

export default function TransactionFundsGraph() {
 return (
    <Col xs={12}
         md={5}
         lg={5}
         id='transactionfundsgraph'>
     <Row id='transactionfundsgraph-transactionfundsgraphgridcontainer'>
       <Col xs={12}
            md={6}
            lg={6}
            className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer'>
         <p className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-headerindication'>Widthdrawed funds out of total deposits this public authentication</p>
         <p className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-percentageheaderindication'></p>
         <div className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-bargraph'>
          <div className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-bargraphindication'>

          </div>
         </div>
       </Col>
       <Col xs={12}
            md={6}
            lg={6}
            className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer'>
         <p className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-headerindication'>Widthdrawed funds out of total deposits last public authentication</p>
         <p className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-percentageheaderindication'></p>
         <div className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-bargraph'>
          <div className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-bargraphindication'>

          </div>
         </div>
       </Col>
       <Col xs={12}
            md={6}
            lg={6}
            className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer'>
         <p className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-headerindication'>Widthdrawals out of funds this public authentication</p>
         <p className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-percentageheaderindication'></p>
         <div className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-bargraph'>
          <div className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-bargraphindication'>

          </div>
         </div>
       </Col>
       <Col xs={12}
            md={6}
            lg={6}
            className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer'>
         <p className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-headerindication'>Widthdrawals out of funds last public authentication</p>
         <p className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-percentageheaderindication'></p>
         <div className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-bargraph'>
          <div className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-bargraphindication'>

          </div>
         </div>
       </Col>
       <Col xs={12}
            md={12}
            lg={12}
            className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer'>
         <p className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-headerindication'>Payments using funds</p>
         <p className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-percentageheaderindication'></p>
         <div className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-bargraph'>
          <div className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-bargraphindication'>

          </div>
         </div>
       </Col>
       <Col xs={12}
            md={12}
            lg={12}
            className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer'>
         <p className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-headerindication transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-myfundsheaderindication'>My Funds: 0</p>
         <p className='transactionfundsgraph-transactionfundsgraphgridcontainer-graphcontentcontainer-headerindication'>Account strenght: weak</p>
       </Col>
     </Row>
    </Col>
 )
}