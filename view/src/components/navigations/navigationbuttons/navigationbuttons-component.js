import React from 'react';

import { Row, Col } from 'react-bootstrap';

import { useNavigate }  from 'react-router-dom';

import '../../../styles/navigations/navigationbuttons/navigationbuttons.scss'

export default function NavigationButtons(props) {

 const navigate = useNavigate();

 const navigationbuttons = [
  {
    buttonindication: 'Graph',
    buttonlink: null
  },
  {
    buttonindication: 'Widthdrawals',
    buttonlink: null
  },
  {
    buttonindication: 'Xirbit marketing',
    buttonlink: '/xirbitmarketing'
  },
  {
    buttonindication: 'Sell items',
    buttonlink: '/xirbitmarketing'
  },
  {
    buttonindication: 'Auction',
    buttonlink:'/xirbitmarketing'
  },
  {
    buttonindication: 'Bidding',
    buttonlink: '/xirbitmarketing'
  }
 ]
 
 return (
  <Row id='navigationbuttons'>
    {
      navigationbuttons.map((button, idx)=> {
        if ( button.buttonindication === 'Xirbit marketing' ) {
          return (
           <Col xs={12}
                md={12}
                lg={12}
                className='navigationbuttons-buttonscontainer'>
            <button className='navigationbuttons-button navigationbuttons-buttonlink'
                    key={idx}
                    to={button.buttonlink}
                    onClick={(evt)=> {
                       navigate('/xirbitmarketing')
                    }}>
                0{idx}. {button.buttonindication}
             </button>
            </Col>
           )
        } 
        if ( button.buttonindication === 'Sell items' ) {
          return (
           <Col xs={12}
                md={12}
                lg={12}
                className='navigationbuttons-buttonscontainer'>
            <button className='navigationbuttons-button navigationbuttons-buttonlink'
                    key={idx}
                    to={button.buttonlink}
                    onClick={(evt)=> {
                       //navigate('/marketing/selling');
                       navigate('/xirbitmarketing');
                    }}>
                0{idx}. {button.buttonindication}
             </button>
            </Col>
           )
        } 
        if ( button.buttonindication === 'Graph' ) {
          return (
           <Col xs={12}
                md={12}
                lg={12}
                className='navigationbuttons-buttonscontainer'>
              <button className='navigationbuttons-button navigationbuttons-buttonlink'
                      key={idx}
                      to={button.buttonlink}
                      onClick={(evt)=> {
                        if ( props.viewport === 'xs' ) {
                          props.landingpagenavigationbargraphleftpropertycb((left)=> left === '-90%' ? '0%' : '-90%')
                          return
                        }
                          props.landingpagenavigationbargraphleftpropertycb((left)=> left === '-90%' ? '0%' : '-90%')
                      }}>
                  0{idx}. {button.buttonindication}
              </button>
         </Col>
          )
        }
        if ( button.buttonindication === 'Widthdrawals' ) {
          return (
           <Col xs={12}
                md={12}
                lg={12}
                className='navigationbuttons-buttonscontainer'>
              <button className='navigationbuttons-button navigationbuttons-buttonlink'
                      key={idx}
                      to={button.buttonlink}
                      onClick={(evt)=> {
                        if ( props.viewport === 'xs' ) {
                          props.landingpagewidthdrwalnavigationleftpropertycb((left)=> left === '-100%' ? '0%' : '-100%')
                          return
                        }
                          props.landingpagewidthdrwalnavigationleftpropertycb((left)=> left === '-90%' ? '0%' : '-90%')
                      }}>
                  0{idx}. {button.buttonindication}
              </button>
         </Col>
          )
        }
        if ( button.buttonindication !== 'Xirbit marketing' || button.buttonindication !== 'Sell items' ) {
          {/*
          return (
            <Col xs={12}
                 md={12}
                 lg={12}
                 className='navigationbuttons-buttonscontainer'>
              <button className='navigationbuttons-button'
                      key={idx}
                      onClick={(evt)=> {
                        //navigate('/marketing/selling');
                        // navigate('/xirbitmarketing');
                     }}>
                 0{idx}. {button.buttonindication}
              </button>
           </Col>
          )
        */}
        }
      })
    }
  </Row>
 )
}