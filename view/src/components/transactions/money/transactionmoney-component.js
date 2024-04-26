import React from 'react';

import { Col,
         Row } from 'react-bootstrap';

import '../../../styles/transactions/money/transactionmoney.scss';

export default function TransactionMoney() {
 return(
    <Col xs={12}
         md={6}
         lg={6}
         id='transactionmoney'>
      <Col xs={12}
           md={6}
           lg={6}
           id='transactionomoney-transactionmoney-modalcontainer'>
       <Col id='transactionmoney-transactionmoney-modalcontainer-navigationcontainer'>
         <button className='transaction-transactiongraphnavigationbutton'>Graph</button>
         <button className='transaction-transactiongraphnavigationbutton'>Transactions</button>
       </Col>
       <Col id='transactionmoney-transactionmoney-modalcontainer-contentcontainer'>
       
       </Col>
      </Col>
      <Col xs={12}
           md={6}
           lg={6}
           id='transactionmoney-transactionmoneyamountcontainer'
           onClick={(evt)=> {
             const transactionmoneymodal = document.getElementById('transactionomoney-transactionmoney-modalcontainer');
             const transactionmoneymodalheightproperty = transactionmoneymodal.clientHeight;
              
              if ( transactionmoneymodalheightproperty > 0 ) {
                transactionmoneymodal.style.border = '0vh solid white'
                transactionmoneymodal.style.height = '0vh';
              } else {
                transactionmoneymodal.style.border = '0.1vh solid white'
                transactionmoneymodal.style.height = '60vh';
              }

           }}>
       <p className='transactionmoney-transactionmoneyheaderindication'>Money</p>
       <p className='transactionmoney-transactionmoneyamountheaderindication'>0</p>
      </Col>
    </Col>
 )
}