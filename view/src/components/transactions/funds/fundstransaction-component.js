import React from 'react';

import { Row,
         Col } from 'react-bootstrap';

import '../../../styles/transactions/funds/fundstransaction.scss';

export default function MoneyTransaction(props) {
 return (
  <Col xs={12}
       md={7}
       lg={7}
       id='fundstransaction'>
    <Row id='fundstransaction-moneytransactiongridcontainer'>
      <Col xs={12}
           md={12}
           lg={12}
           id='fundstransaction-fundstransactiongridcontainer-headercontainer'>
        <h1 id='fundstransaction-fundstransactiongridcontainer-headerindication'>History</h1>
      </Col>
      <Col id='fundstransaction-fundstransactiongridcontainer-historycontainer'>
        {
         [].map((transaction,idx)=> {
           return (
            <div key={idx}
                 className='fundstransaction-fundstransactiongridcontainer-transaction'>
              <div className='fundstransaction-moneytransactiongridcontainer-transactioncontentcontainer'>
                <Col className='fundstransaction-fundstransactiongridcontainer-transactioncontent'>
                 <p className='fundstransaction-fundstransactiongridcontainer-transactioncontenheaderindication'>Date: </p>
                 <p className='fundstransaction-fundstransactiongridcontainer-transactioncontenheaderindication'>Transaction id:</p>
                 <p className='fundstransaction-fundstransactiongridcontainer-transactioncontenheaderindication'>Status</p>
                 <p className='fundstransaction-fundstransactiongridcontainer-transactioncontenheaderindication'>Message</p>
                 <p className='fundstransaction-fundstransactiongridcontainer-transactioncontenheaderindication'>Transaction type: </p>
                 <p className='fundstransaction-fundstransactiongridcontainer-transactioncontentclosebuttonheaderindication'
                    onClick={(evt)=> {
                      const _node = evt.target;
                      const _detailscontainer = _node.parentElement.parentElement;
                      _detailscontainer.style.display = 'none';
                    }}>
                    close
                 </p>
                </Col>
              </div>
              <p className='fundstransaction-fundstransactiongridcontainer-transaction-transactionheaderindication'
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