import React from 'react';

import { Row,
         Col } from 'react-bootstrap';

import '../../../styles/transactions/money/moneytransaction.scss';

export default function MoneyTransaction(props) {
 return (
  <Col xs={12}
       md={7}
       lg={7}
       id='moneytransaction'>
    <Row id='moneytransaction-moneytransactiongridcontainer'>
      <Col xs={12}
           md={12}
           lg={12}
           id='moneytransaction-moneytransactiongridcontainer-headercontainer'>
        <h1 id='moneytransaction-moneytransactiongridcontainer-headerindication'>History</h1>
      </Col>
      <Col id='moneytransaction-moneytransactiongridcontainer-historycontainer'>
        {
         [].map((transaction,idx)=> {
           return (
            <div key={idx}
                 className='moneytransaction-moneytransactiongridcontainer-transaction'>
              <div className='moneytransaction-moneytransactiongridcontainer-transactioncontentcontainer'>
                <Col className='moneytransaction-moneytransactiongridcontainer-transactioncontent'>
                 <p className='moneytransaction-moneytransactiongridcontainer-transactioncontenheaderindication'>Date: </p>
                 <p className='moneytransaction-moneytransactiongridcontainer-transactioncontenheaderindication'>Transaction id:</p>
                 <p className='moneytransaction-moneytransactiongridcontainer-transactioncontenheaderindication'>Status</p>
                 <p className='moneytransaction-moneytransactiongridcontainer-transactioncontenheaderindication'>Message</p>
                 <p className='moneytransaction-moneytransactiongridcontainer-transactioncontenheaderindication'>Transaction type: </p>
                 <p className='moneytransaction-moneytransactiongridcontainer-transactioncontentclosebuttonheaderindication'
                    onClick={(evt)=> {
                      const _node = evt.target;
                      const _detailscontainer = _node.parentElement.parentElement;
                      _detailscontainer.style.display = 'none';
                    }}>
                    close
                 </p>
                </Col>
              </div>
              <p className='moneytransaction-moneytransactiongridcontainer-transaction-transactionheaderindication'
                 onClick={(evt)=> {
                const _node = evt.target;
                const _transaction =_node.parentElement;
                const _detailscontainer = _transaction.children[0];
                const _transactiondisplayoffsettopproperty = _transaction.offsetTop;
                const _detailscontaineroffsettop = _transactiondisplayoffsettopproperty / 10;
                if ( props.viewport === 'xs' ) {
                  const _translation = `${'translate(1%,' + _detailscontaineroffsettop + '%)'}`;
                  _detailscontainer.style.transform = _translation;
                  _detailscontainer.style.display = 'block';
                } else {
                  const _translation = `${'translate(21%,' + _detailscontaineroffsettop + '%)'}`;
                  _detailscontainer.style.transform = _translation;
                  _detailscontainer.style.display = 'block';
                }
               
                 }}>
                {transaction}
              </p>
            </div>
           )
         })
        }
      </Col>
    </Row>
  </Col>
 )
}