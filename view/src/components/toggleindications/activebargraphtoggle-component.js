import React from 'react';

import { Row,
         Col } from 'react-bootstrap';

import '../../styles/toggleindications/activabargraphtoggle.scss';

export default function ActiveBarGraphToggle(props) {
 return (
   <Row xs={12}
        md={12}
        lg={12}
        id='activebargraphtoggle'>
    <Col xs={3}
         md={2}
         lg={2}
         id='activebargraphtoggle-togglecontainer'>
      <p id='activebargraphtoggle-togglecontainer-loaduidataheaderindication'>Load UI graph data</p>
      <div id='activebargraphtoggle-togglecontainer-togglebutton'
           onClick={(evt)=> {

            const _togglebuttonindication = document.querySelector('#activebargraphtoggle-togglecontainer-togglebuttonindication')
            const _togglebuttonindicationmarginleftproperty = _togglebuttonindication.style.marginLeft
            const _intervalbutton = document.querySelectorAll('.activebargraphtoggle-togglecontainer-getdataintervalscontainer-intervaldelaybutton');

            if ( _togglebuttonindicationmarginleftproperty === '' || _togglebuttonindicationmarginleftproperty === '0%' ) {
                _togglebuttonindication.style.backgroundColor = 'dodgerblue';
                _togglebuttonindication.style.marginLeft = '40%';
                _intervalbutton[0].style.opacity = '1';
            } else {
                _togglebuttonindication.style.backgroundColor = 'gray';
                _togglebuttonindication.style.marginLeft = '0%';
                _intervalbutton[0].style.opacity = '0';
            }



           }}>
       <div id='activebargraphtoggle-togglecontainer-togglebuttonindication'>

       </div>
      </div>
    </Col>
    <Col xs={9}
         md={8}
         lg={8}
         id='activebargraphtoggle-togglecontainer-getdataintervalscontainer'>
     {
       [
        {
        buttonindication: '120 secs update data delay interval'
        }
       ].map((button,idx)=> {
        return (
          <button key={idx}
                  className='activebargraphtoggle-togglecontainer-getdataintervalscontainer-intervaldelaybutton'
                  onClick={(evt)=> {
                   evt.target.style.opacity = '0'
                  }}>
              {button.buttonindication}
          </button>
        )
       })
     }
    </Col>
   </Row>
 )
}