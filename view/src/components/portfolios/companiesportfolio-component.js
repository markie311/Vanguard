import React, {
    useState
 } from 'react';

import { Row, 
   Col } from 'react-bootstrap';

import '../../styles/portfolios/companiesportfolio.scss';

export default function CompaniesPortfolio(props) {

 return (
   <Col id="companiesportfolio">

     <p className="companiesportfolio-headerindication">Companies and their Portfolio's</p>

     <Row id="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer">
        {
          props.companies.map((company, companyidx)=> {
            return (
              <Col xs={12}
                   md={4}
                   lg={4}
                   className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer">
               <Col className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-layoutcontainer">
                <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyheaderindication">{company.details.companyname}</p>
                {
                company.product.list.map((companyproduct, companyproductidx)=> {
                return (
                  <Col className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer"
                       key={companyproductidx}>

                    <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">{companyproduct.productname}'s, {companyproduct.productname}</p>
                    <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">Made 0 peso's as profit and revenue on all marketed product's</p>
                    <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">Kukaku also gave contributions to commoner's, to the public and private authentication's through Vanguards transactions giving the VAT as it's self profit and revenue.</p>
                    <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">{company.details.companyname} contributed to Vanguard, <button className="xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication-seeprojectsbutton"
                      onClick={()=> {
                        const _companyprojectscontainer = document.querySelectorAll(".xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer");
                        _companyprojectscontainer[0].style.display = "block";
                        }}>see project's</button></p>
                    <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">{companyproduct.productname}'s available product's depending on variations</p>

                    <Col className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer">
                     {
                      companyproduct.specifications.map((companyproductspecification, companyproductspecificationidx)=> {
                        return (
                          <Col className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer-productspecification">
                           <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistsheaderindication">0{companyproductspecificationidx}. {companyproductspecification.productname}, made 0 peso's as profit and revenue on all marketed product's</p>
                           <Col className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer-productspecification-buttonscontainer"> 
                             <button className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer-productspecification-buttonscontainer-viewbutton"
                                      onClick={()=> { 
                                        const _productdetailscontainer = document.querySelectorAll(".xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer");
                                        _productdetailscontainer[0].style.display = "block";
                                     }}>view product</button>
                             <button className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer-productspecification-buttonscontainer-graphbutton"
                                      onClick={()=> {
                                        const _productgraphcontainer = document.querySelectorAll(".xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer");
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

   </Col>
 )
}