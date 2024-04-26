import React,
         { useState } from 'react';
import { Row,
         Col } from 'react-bootstrap';

import '../../styles/database/databasedepositsconfigurationmodal.scss';

export default function DatabaseDepositsConfigurationModal(props) {

 const [depositsnavigationheaderborderbottomproperty, depositsnavigationheaderborderbottompropertycb] = useState('none');
 const [widthdrawalsnavigationheaderborderbottomproperty, widthdrawalsnavigationheaderborderbottompropertycb] = useState('none');

 const [depositsconfigurationcontainerleftproperty, depositsconfigurationcontainerleftpropertycb] = useState('-100%');
 const [widthdrawalconfigurationcontainerleftproperty, widthdrawalconfigurationcontainerleftpropertycb] = useState('-100%');

 return (
  <Row id='database-depositconfigurationmodal'>
   <Col xs={12}
        md={2}
        lg={2}
        id='database-depositconfigurationmodal-navigationheaderindicationcontainer'>
    <p className='database-depositconfigurationmodal-navigationheaderindication'
       style={{borderBottom: depositsnavigationheaderborderbottomproperty}}
       onClick={(evt)=> {

        depositsnavigationheaderborderbottompropertycb((borderbottom)=> borderbottom === 'none' ? '0.1vh solid white' : 'none');
        widthdrawalsnavigationheaderborderbottompropertycb((borderbottom)=> borderbottom = 'none');
        depositsconfigurationcontainerleftpropertycb((leftproperty)=> leftproperty === '-100%' ? '0%' : '-100%');
        widthdrawalconfigurationcontainerleftpropertycb((leftproperty)=> leftproperty = '-100%');

       }}>
     Deposits
    </p>
    <p className='database-depositconfigurationmodal-navigationheaderindication'
       style={{borderBottom: widthdrawalsnavigationheaderborderbottomproperty}}
        onClick={(evt)=> {

          widthdrawalsnavigationheaderborderbottompropertycb((borderbottom)=> borderbottom === 'none' ? '0.1vh solid white' : 'none');
          depositsnavigationheaderborderbottompropertycb((borderbottom)=> borderbottom = 'none');
          widthdrawalconfigurationcontainerleftpropertycb((leftproperty)=> leftproperty === '-100%' ? '0%' : '-100%');
          depositsconfigurationcontainerleftpropertycb((leftproperty)=> leftproperty = '-100%');

        }}>
     Widthdrawals
    </p>
    <p className='database-depositconfigurationmodal-navigationheaderindication'
        onClick={(evt)=> {

         props.depositsconfigurationcontainer();

        }}>
     close
    </p>
   </Col>
   <Col  xs={12}
         md={10}
         lg={10}
         id='database-depositconfigurationmodal-layoutconfigurationcontainer'>

    <Col id='database-depositconfigurationmodal-configurationcontainer-indicationsandbuttonscontainer'>
    </Col>

    <Col id='database-depositconfigurationmodal-depositsconfigurationcontainer'
         style={{left: depositsconfigurationcontainerleftproperty}}>
    </Col>

    <Col id='database-depositconfigurationmodal-widthdrawalsconfigurationcontainer'
         style={{left: widthdrawalconfigurationcontainerleftproperty}}>
    </Col>

   </Col>

  </Row>
 )
}