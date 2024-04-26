import React from 'react';

import { Row,
         Col } from 'react-bootstrap';

import '../../../styles/transactions/funds/transactionfunds.scss';

export default function TransactionFunds() {
 return(
    <Col xs={12}
         md={6}
         lg={6}
         id='transactionfunds'>
    <Col xs={12}
        md={6}
        lg={6}
        id='transactionfunds-transactionfunds-modalcontainer'>
    <Col id='transactionfunds-transactionfunds-modalcontainer-navigationcontainer'>
    </Col>
    <Col id='transactionfunds-transactionfunds-modalcontainer-contentcontainer'>
    </Col>
    </Col>
    <Col xs={12}
        md={6}
        lg={6}
        id='transactionfunds-transactionfundsamountcontainer'
        onClick={(evt)=> {
            const transactionfundsmodal = document.getElementById('transactionfunds-transactionfunds-modalcontainer');
            const transactionfundsmodalheightproperty = transactionfundsmodal.clientHeight;
             if ( transactionfundsmodalheightproperty > 0 ) {
               transactionfundsmodal.style.borderLeft = '0vh solid white';
               transactionfundsmodal.style.borderRight = '0vh solid white';
               transactionfundsmodal.style.height = '0vh';
             } else {
                transactionfundsmodal.style.borderLeft = '0.1vh solid white';
                transactionfundsmodal.style.borderRight = '0.1vh solid white';
               transactionfundsmodal.style.height = '60vh';
             }

          }}>
    <p className='transactionfunds-transactionfundsheaderindication'>Funds</p>
    <p className='transactionfunds-transactionfundsamountheaderindication'>0</p>
    </Col>
</Col>
 )
}