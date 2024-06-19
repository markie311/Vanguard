import React, {
    useState
 } from 'react';

import { Row, 
   Col } from 'react-bootstrap';

import '../../styles/portfolios/businessesportfolio.scss';

export default function BusinessesPortfolio(props) {
 return (
   <Row id="businessesportfolio">
       <p className="businessesportfolio-headerindication">Businesses and their Portfolio's</p>

    <Row id="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer">
      {
      props.businesses.map((business, businessidx)=> {
         return (
            <Col xs={12}
               md={4}
               lg={4}
               className="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer">
            <Col className="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-layoutcontainer">
            <p className="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyheaderindication">{business.details.businessname}</p>
            {
            business.product.list.map((businessproduct, businessproductidx)=> {
            return (
               <Col className="businessesportfolioxirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer"
                     key={businessproductidx}>

                  <p className="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">{businessproduct.productname}'s, {businessproduct.productname}</p>
                  <p className="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">Made 0 peso's as profit and revenue on all marketed product's</p>
                  <p className="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">Kukaku also gave contributions to commoner's, to the public and private authentication's through Vanguards transactions giving the VAT as it's self profit and revenue.</p>
                  <p className="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">{business.details.businessname} contributed to Vanguard, <button className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication-seeprojectsbutton"
                  onClick={()=> {
                     const _businessprojectscontainer = document.querySelectorAll(".xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer");
                     _businessprojectscontainer[0].style.height = "95%";
                     _businessprojectscontainer[0].style.top = "3%";
                     _businessprojectscontainer[0].style.display = "block";
                     }}>see project's</button></p>
                  <p className="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">{businessproduct.productname}'s available product's depending on variations</p>

                  <Col className="businessesportfolioxirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer">
                  {
                  businessproduct.specifications.map((_businessproductspecification, _businessproductspecificationidx)=> {
                     return (
                        <Col className="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer-productspecification">
                        <p className="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">0{_businessproductspecificationidx}. {_businessproductspecification.productname}, made 0 peso's as profit and revenue on all marketed product's</p>
                        <Col className="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer-productspecification-buttonscontainer"> 
                           <button className="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer-productspecification-buttonscontainer-viewbutton"
                                    onClick={()=> { 
                                    const _productdetailscontainer = document.querySelectorAll(".xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer");
                                    _productdetailscontainer[0].style.height = "95%";
                                    _productdetailscontainer[0].style.top = "3%";
                                    _productdetailscontainer[0].style.display = "block";
                                 }}>view product</button>
                           <button className="businessesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer-productspecification-buttonscontainer-graphbutton"
                                    onClick={()=> {
                                    const _productgraphcontainer = document.querySelectorAll(".xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer");
                                    _productgraphcontainer[0].style.height = "95%";
                                    _productgraphcontainer[0].style.top = "3%";
                                    _productgraphcontainer[0].style.display = "block";
                                    }}>
                              graph
                           </button>
                        </Col>
                        </Col>
                     )
                  })
                  }
                  </Col>

               </Col>
            )
            })
            }
            </Col>
            </Col>
         )
      })
      }
    </Row>

   </Row>
 )
}