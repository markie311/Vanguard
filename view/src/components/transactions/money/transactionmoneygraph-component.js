import React from 'react';

import { Row,
       Col } from 'react-bootstrap';

import '../../../styles/transactions/money/transactionmoneygraph.scss';

export default function TransactionMoneyGraph() {
 return (
    <Col xs={12}
         md={5}
         lg={5}
         id='transactionmoneygraph'>
     <Row id='transactionmoneygraph-transactionmoneygraphgridcontainer'>
       <Col xs={12}
            md={6}
            lg={6}
            className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer'>
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-headerindication'>Widthdrawed money out of total deposits this public authentication</p>
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-percentageheaderindication'></p>
         <div className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-bargraph'>
          <div className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-bargraphindication'>

          </div>
         </div>
       </Col>
       <Col xs={12}
            md={6}
            lg={6}
            className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer'>
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-headerindication'>Widthdrawed money out of total deposits last public authentication</p>
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-percentageheaderindication'></p>
         <div className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-bargraph'>
          <div className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-bargraphindication'>

          </div>
         </div>
       </Col>
       <Col xs={12}
            md={6}
            lg={6}
            className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer'>
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-headerindication'>Widthdrawals out of deposited count</p>
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-percentageheaderindication'></p>
         <div className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-bargraph'>
          <div className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-bargraphindication'>

          </div>
         </div>
       </Col>
       <Col xs={12}
            md={12}
            lg={12}
            className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer'>
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-headerindication'>Payments using money</p>
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-percentageheaderindication'></p>
         <div className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-bargraph'>
          <div className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-bargraphindication'>

          </div>
         </div>
       </Col>
       <Col xs={12}
            md={12}
            lg={12}
            className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer'>
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-headerindication'>Money: 0</p>
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-headerindication'>Account strenght: weak</p>
       </Col>
     </Row>
    </Col>
 )
}