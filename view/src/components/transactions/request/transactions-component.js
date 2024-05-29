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
          <Col xs={12}
               md={12}
               lg={12}
               className='transactions-transactionscontainer-transactions'>
            <Row className='transactions-transactionscontainer-transactionsgridcontainer'>
              <Col xs={12}
                   md={6}
                   lg={6}
                   className='transactions-transactionscontainer-transactionsgridcontainer-productindicationheadercontainer'>
                <p className='transactions-transactionscontainer-transactionsgridcontainer-somedetailsheaderindication'>Date: {props.requesttransactiondata.date.at(-1).date}</p>
                <p className='transactions-transactionscontainer-transactionsgridcontainer-statusheaderindication'>Transaction id:</p>
                <p className='transactions-transactionscontainer-transactionsgridcontainer-statusheaderindication'>Transaction type:</p>
                <p className='transactions-transactionscontainer-transactionsgridcontainer-statusheaderindication'>Transaction type:</p>
                <p className='transactions-transactionscontainer-transactionsgridcontainer-statusheaderindication'>Product: 0 pesos's</p>
                <p className='transactions-transactionscontainer-transactionsgridcontainer-statusheaderindication'>Cargo: 0 pesos's</p>
                <p className='transactions-transactionscontainer-transactionsgridcontainer-transactiongiveawaysnippetindication'>Transaction give away covered</p>
              </Col>
              <Col xs={12}
                   md={6}
                   lg={6}
                   className='transactions-transactionscontainer-transactionsgridcontainer-productimagecontainer'>

                   {
                    props.requesttransactiondata.products.list.length === 0 ? 
                    (
                     <p className='transactions-transactionscontainer-transactionsgridcontainer-statusheaderindication'>Error. No list no display</p>
                    )
                    :
                    (
                      <React.Fragment>
                      {
                       props.requesttransactiondata.products.list.map((list, listidx)=> {
                         return (
                          <React.Fragment>
                           <img key={listidx}
                                src='../images/landingpage/blacktablebackgroundwithpaper.jpg'
                                alt='Xirbit-Merchandise-Image'
                                className='transactions-transactionscontainer-transactionsgridcontainer-productimage'
                                onClick={(evt)=> {

                                  let _transactiondetailscontainer = document.querySelectorAll('.transactions-transactionscontainer-transactions');
                                  let _transactiondetailscontaineroffsetleft = _transactiondetailscontainer[idx].offsetLeft

                                  const _transactiondetailsproductdisplayimage = document.querySelectorAll(".transactions-transactionscontainer-transactionsgridcontainer-productimage");
                                  const _transactiondetailsproductdisplayimageoffsetleft = _transactiondetailsproductdisplayimage[listidx].offsetLeft;

                                   if ( props.viewport === 'xs' ) {
              
                                      if ( _transactiondetailsproductdisplayimage[idx].offsetLeft > 0 ) {
                                        document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')[listidx].style.transform = 'translate(-10%, -45%)';
                                        document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')[listidx].style.display = 'block';
                                      } else {
                                        document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')[listidx].style.transform = 'translate(-10%, -45%)';
                                        document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')[listidx].style.display = 'block';
                                      }
              
                                   } else {

                                     document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')[listidx].style.transform = 'translate(-40%, -60%)';
                                     document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')[listidx].style.display = 'block';
              
                                   }
                                
                                 }}/>
                        
                            <Col className='transactions-transactionscontainer-transactiondetailscontainer'>
                              <Row className="transactions-transactionscontainer-transactiondetailscontainer-gridcontainer">
                               <Col xs={12}
                                    md={12}
                                    lg={12}
                                    className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Product name:</p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Rapport name: </p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Definition: </p>
                               </Col>
                               <Col xs={12}
                                    md={12}
                                    lg={12}
                                    className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                               </Col>
                               <Col xs={12}
                                    md={12}
                                    lg={12}
                                    className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Product price:</p>
                               </Col>
                               <Col xs={12}
                                    md={12}
                                    lg={12}
                                    className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                  <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Weight:</p>
                               </Col>
                               <Col xs={12}
                                    md={12}
                                    lg={12}
                                    className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>FOR</p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Part: </p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Gender: </p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Category: </p>
                               </Col>
                               <Col xs={12}
                                    md={12}
                                    lg={12}
                                    className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>SPECIFICATION</p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Size: </p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Color: </p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Weight: </p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Top: </p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Left: </p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Bottom: </p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Right: </p>
                               </Col>
                               <Col xs={12}
                                    md={12}
                                    lg={12}
                                    className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Request</p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Pcs: </p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>pcs total amount: </p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>pcs total weight: </p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>pcs total cargo: </p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Total payment: </p>
                               </Col>
                               <Col xs={12}
                                    md={12}
                                    lg={12}
                                    className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'></p>
                               </Col>
                               <Col xs={12}
                                  md={12}
                                  lg={12}
                                  className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsheaderindication'>Product display image's</p>
                               </Col>
                               <Row className="transactions-transactionscontainer-transactiondetailscontainer-displayimagescontainercontainer">

                               <img key={listidx}
                                    src='../images/landingpage/blacktablebackgroundwithpaper.jpg'
                                    alt='Xirbit-Merchandise-Image'
                                    className='transactions-transactionscontainer-transactiondetailscontainer-displayimagescontainercontainer-maindisplayimage'/>

                               <img key={listidx}
                                    src='../images/landingpage/blacktablebackgroundwithpaper.jpg'
                                    alt='Xirbit-Merchandise-Image'
                                    className='transactions-transactionscontainer-transactiondetailscontainer-displayimagescontainercontainer-maindisplayimage'/>
                                
                               </Row>
                               </Row>
                               <Col className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsclosebuttonheaderindicationcontainer'>
                                <p className='transactions-transactionscontainer-transactiondetailscontainer-transactiondetailsclosebuttonheaderindication'
                                  onClick={(evt)=> {
                                    alert("Synced")
                                    const _transactiondetialscontainer = document.querySelectorAll('.transactions-transactionscontainer-transactiondetailscontainer')
                                    _transactiondetialscontainer[listidx].style.display = 'none'
                                  }}>
                                  close
                                </p>
                               </Col>
                            </Col>    

                          </React.Fragment>
                         )
                      })
                     }
                      </React.Fragment>
                    )
                   }

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