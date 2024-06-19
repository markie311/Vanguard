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
                        const _companyprojectscontainer = document.querySelectorAll(".companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer");
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
                                        const _productdetailscontainer = document.querySelectorAll(".companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer");
                                        _productdetailscontainer[0].style.display = "block";
                                     }}>view product</button>
                             <button className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-detailsgridcontainer-colcontainer-companyproductslistscontainer-productspecificationcontainer-productspecification-buttonscontainer-graphbutton"
                                      onClick={()=> {
                                        const _productgraphcontainer = document.querySelectorAll(".companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer");
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

     <Row className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer">
        <Col xs={12}
              md={12}
              lg={12}
              className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer">
          <Row className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer">
            <h2 className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-aboutmaindataheaderindication">TWO MAIN DATA'S WILL APPLY AS HISTORY PASS</h2>
            <Col xs={12}
                 md={6}
                 lg={6}
                 className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer">
              <h1 className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-headerindication">WIthin this coming 15 days</h1>
              <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-headerindication">0 peso's out of 0 peso's worth of marketed products</p>
              <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-headerindication">0%</p>
              <div className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-bargraph">
               <div className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-bargraphindication">

               </div>
              </div>
            </Col>
            <Col xs={12}
                 md={6}
                 lg={6}
                 className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer">
              <h1 className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-headerindication">Last 15 days</h1>
              <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-headerindication">0 peso's out of 0 peso's worth of marketed products</p>
              <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-headerindication">0%</p>
              <div className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-bargraph">
               <div className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-gridcontainer-colcontainer-bargraphindication">

               </div>
              </div>
            </Col>
          </Row>
          <Row className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer">
            <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">History</p>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
            <Col xs={6}
                 md={3}
                 lg={3}
                 className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-colcontainer">
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Locations</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">00. Maa, Trinidad, near insta grill, Davao City, Davao Del Sur, Philippine's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Total product's sold based on capital: 0 peso's</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Made 0 peso's VAT given as a transaction give away by Vanguard</p>
             <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailscontentcontainer-historycontainer-headerindication">Shared across 0 peple on this location</p>
            </Col>
          </Row>
        </Col>
        <Col xs={12}
              md={12}
              lg={12}
              className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailsclosebuttoncontainer">
            <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer-graphdetailsclosebuttoncontainer-closebuttonheaderindication"
                onClick={()=> {
                const _productgraphcontainer = document.querySelectorAll(".companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productgraphcontainer");
                _productgraphcontainer[0].style.display = "none";
                }}>
              close
            </p>
        </Col>
     </Row> 

     <Col className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer">
      <Col className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectscontentcontainer">
        {
        props.companies.map((company, companyidx)=> {
          return (
            <React.Fragment>
              {
                company.projects.map((project, projectidx)=> {
                  return (
                    <Col className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer"
                          key={projectidx}>
                    <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Date: {project.date}</p>
                    <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Purpose: {project.purpose}</p>
                    <p className="companiesportfolio-xirbitmarketingnavigationbarxirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Contributions, {project.contributions.contributioncompletion} pesos's completion on each project on each destined locations, 0 location's will have the budget on the said amount's</p>
                    <p className="companiesportfolio-xirbitmarketingnavigationbarxirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Contributed: {project.contributions.contributed}</p>
                    <p className="companiesportfolio-xirbitmarketingnavigationbarxirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">LOCATIONS: {project.contributions.contributed}</p>

                    {
                      project.locations.map((location, locationidx)=> {
                        return (
                          <Col className="companiesportfolio-xirbitmarketingnavigationbarxirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-locationcontainer"
                                key={locationidx}>
                            <p className="companiesportfolio-xirbitmarketingnavigationbarxirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">0{locationidx}. {location.location.baranggay}, {location.location.street}, {location.location.trademark}, {location.location.city}, {location.location.province}, {location.location.country}</p>
                            <p className="companiesportfolio-xirbitmarketingnavigationbarxirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Purpose: {location.purpose}</p>
                            <p className="companiesportfolio-xirbitmarketingnavigationbarxirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Contributions, {location.contributions.contributioncompletion} pesos's completion on each project on each destined locations, 0 location's will have the budget on the said amount's</p>
                            <p className="companiesportfolio-xirbitmarketingnavigationbarxirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Contributed: {location.contributions.contributed}</p>
                            <p className="companiesportfolio-xirbitmarketingnavigationbarxirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectdetailscontainer-headerindication">Location's: {location.contributions.contributed}</p>
                          </Col>
                        )
                      })
                    }
                  </Col>
                  )
                })
              }
            </React.Fragment>
          )
        })
        }
      </Col>
      <Col className="companiesportfolio-xirbitmarketingnavigationbarxirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectsclosebuttoncontainer">
      <p className="companiesportfolio-xirbitmarketingnavigationbarxirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer-projectsclosebuttoncontainer-closebuttonheaderindication"
          onClick={()=> {
          const _companyprojectscontainer = document.querySelectorAll(".companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-companyprojectcontainer");
          _companyprojectscontainer[0].style.display = "none";
          }}>
        close
      </p>
      </Col>
     </Col>

     <Col className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer">
        <Col className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer-productdetailscontainer">
        </Col>
        <Col className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer-closebuttoncontainer">
          <p className="companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer-closebuttoncontainer-closebuttonheaderindication"
            onClick={()=> {
              const _productdetailscontainer = document.querySelectorAll(".companiesportfolio-xirbitmarketingnavigationbar-marketdetailscontainer-productdetailscontainer");
              _productdetailscontainer[0].style.display = "none";
            }}>
            close
          </p>
        </Col>
      </Col>


   </Col>
 )
}