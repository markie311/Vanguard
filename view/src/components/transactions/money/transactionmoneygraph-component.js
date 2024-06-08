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
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-headerindication'>Widthdrawed money out of total deposits using current currencie's this authentication</p>
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
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-headerindication'>Widthdrawed Vanguard currency out of total current money currency deposited last authentication</p>
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
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-headerindication'>Widthdrawals out of all deposited count</p>
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
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-headerindication'>Total payments using money</p>
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
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-headerindication transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-mymoneyheaderindication'>My Money: 0</p>
         <p className='transactionmoneygraph-transactionmoneygraphgridcontainer-graphcontentcontainer-headerindication'>Account strenght: weak</p>
       </Col>
     </Row>
    </Col>
 )
}