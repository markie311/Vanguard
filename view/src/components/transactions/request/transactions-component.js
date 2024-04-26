import React from 'react';

import { Row,
         Col } from 'react-bootstrap';

import '../../../styles/transactions/request/transactions.scss';

export default function Transactions(props) {
 return (
  <Col id='transactions'
       style={{display:props.transactionsmodaldisplayproperty}}>
    <Col id='transactions-transactionsnavigationcontainer'>
     {
      [
        {
          buttonindication: 'Requested',
          backgroundcolor: 'black'
        },
        {
          buttonindication: 'Confirmed and to be delivered',
          backgroundcolor: 'black'
        },
        {
          buttonindication: 'Delayed',
          backgroundcolor: 'black'
        },
        {
          buttonindication: 'black',
          backgroundcolor: 'black'
        },
        {
          buttonindication: 'Delivered',
          backgroundcolor: 'black'
        },
        {
          buttonindication: 'Confirmed as recieved',
          backgroundcolor: 'black'
        }
      ].map((button,idx)=> {
        if ( idx === 0 ) {
          return (
            <React.Fragment key={idx}>
              <button key={idx}
                      className='transactions-transactionsnavigationcontainer-positioniongnavigationbutton transactions-transactionsnavigationcontainer-navigationbutton'
                      style={{backgroundColor: button.backgroundcolor}}>
                {button.buttonindication}
              </button>
              <br/>
            </React.Fragment>
          )
        } else {
          return (
            <React.Fragment key={idx}>
              <button key={idx}
                      className='transactions-transactionsnavigationcontainer-navigationbutton'
                      style={{backgroundColor: button.backgroundcolor}}>
                {button.buttonindication}
              </button>
            <br/>
            </React.Fragment>
          )
        }
        
      })
     }
    </Col>
    <Row id='transactions-transactionscontainer'>
    {
      [
      'a transaction content',
      'a transaction content'
      ].map((transaction,idx)=> {
        return (
          <Col xs={6}
               md={12}
               lg={12}
               className='transactions-transactionscontainer-transactions'>
            <Row className='transactions-transactionscontainer-transactionsgridcontainer'>
              <Col xs={12}
                   md={6}
                   lg={6}
                   className='transactions-transactionscontainer-transactionsgridcontainer-productindicationheadercontainer'>
                <p className='transactions-transactionscontainer-transactionsgridcontainer-somedetailsheaderindication'>Date: </p>
                <p className='transactions-transactionscontainer-transactionsgridcontainer-statusheaderindication'>Status:</p>
              </Col>
              <Col xs={12}
                   md={6}
                   lg={6}
                   className='transactions-transactionscontainer-transactionsgridcontainer-productimagecontainer'
                   onClick={(evt)=> {
                    let _transactiondetailscontainer = document.querySelectorAll('.transactions-transactionscontainer-transactions');
                    let _transactiondetailscontaineroffsetleft = _transactiondetailscontainer[idx].offsetLeft
                     if ( props.viewport === 'xs' ) {
                        if ( _transactiondetailscontaineroffsetleft > 0 ) {
                          document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')[idx].style.transform = 'translate(-52.5%, -45%)';
                          document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')[idx].style.display = 'flex';
                        } else {
                          document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')[idx].style.transform = 'translate(3.5%, -45%)';
                          document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')[idx].style.display = 'flex';
                        }

                     } else {
                      document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')[idx].style.transform = 'translate(0%, 10%)';
                        document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')[idx].style.display = 'flex'; 
                     }
                  
                   }}>
                <img src='../images/landingpage/blacktablebackgroundwithpaper.jpg'
                     alt='Xirbit-Merchandise-Image'
                     className='transactions-transactionscontainer-transactionsgridcontainer-productimage'/>
              </Col>
            </Row>
            <Row className='transactions-transactionscontainer-transactiondetailscontainer'>
              <Col xs={12}
                   md={12}
                   lg={12}
                   className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Date</p>
                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Transaction id</p>
                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Status</p>
              </Col>
              <Col xs={12}
                   md={12}
                   lg={12}
                   className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Message</p>
              </Col>
              <Col xs={12}
                   md={12}
                   lg={12}
                   className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Transaction type</p>
              </Col>
               <Col xs={12}
                   md={12}
                   lg={12}
                   className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsclosebuttonheaderindication'
                   onClick={(evt)=> {
                     const _transactiondetialscontainer = document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')
                     _transactiondetialscontainer[idx].style.display = 'none'
                   }}>
                  close
                </p>
              </Col>
            </Row>
           </Col>
        )
      })
    }
    </Row>
  </Col>
 )
}