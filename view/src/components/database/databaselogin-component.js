import React from 'react';

import { Row,
         Col,
         Spinner } from 'react-bootstrap';

import '../../styles/database/databaselogin.scss';

import TransactionMoneyGraph from '../transactions/money/transactionmoneygraph-component.js';
import MoneyTransaction from '../transactions/money/moneytransaction-component.js';
import TransactionFundsGraph from '../transactions/funds/transactionfundsgraph-component.js';
import Transactions from '../transactions/request/transactions-component.js';

export default function DatabaseLogin(props) {
 return (
  <Col id='databaselogin'>
   <Row id='databaselogin-authenticationpublicitytypecontainer'>
     <Col xs={12}
          md={6}
          lg={6}
          className='databaselogin-authenticationpublicitytypecontainer-authenticationpublicitytypecontainer'>

       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypeheaderindication'>
	      Three types of account holders 
       </p>
       <br/>
       <br/>

       <p className=  'databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypeheaderindication'> 
       	 Common public account
       </p>

       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	      What: Common public account, all holder of this account means their location are in the common public, visitor's or a commoner. Share's for transactions are coming from Vanguard revnue's, income. Transaction give away's made by Vanguard will be shared to the public account holder's and private authentications.
       </p>
       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	      When: By a transaction, simplie'st on a purchase, the data of it, the detail's, that include's amount and information needed to be circled, will be encripted automatically using proggraming and manually by paper reciept's. Real amounts, locations, place's, company and Time are handle by Vanguard with it's system to share it Globally and on each registration with bar graphs, on a private portfolio and a Global porfolio. 
       </p>
       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	      Where: Globally
       </p>
       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	      How: The payments for this registrations are free in Bank transfer, E-wallet transfer and payments through a Vanguard personel, there is no registration fee holding this account.
       </p>
     
      <br/>
      <br/>
      <br/>

        <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypeheaderindication'>Public account
       </p>
       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	      What: Next to the common public as visitor's or cmmoner's. Belonging publicly specific by registrations and authentication's. This type of account does not commonly refering by each Location despite through the Vanguard community.
       </p> 
       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	      When:  By a transaction, simplie'st on a purchase, the data of it, the detail's, that include's amount and information needed to be circled, will be encripted automatically using proggraming and manually by paper reciept's. Real amounts, locations, place's, company and Time are handle by Vanguard with it's system to share it to the Private authentication's with bar graphs on a private portfolio and a Global porfolio. 
       </p>
       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	      Where: Private authentication's.
       </p>
       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	      How: The payments for this registration's are free and on a Life-time. Choose what account you feel that you belonged. Transaction give away's will be following the sequence. Activating less 3% on the 10% widthdrawal commisions you must pay a 100 peso's active within 15 days to have only 7% widthdrawal commosion's. 
       </p>

       <br/>
       <br/>
       <br/>

       <p className='databaselogin-authenticationpublicitytypecontainer-privateauthenticationpublicitytypeheaderindication'>Private account authentication</p>

       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
        	What: All transaction give away's are shared Globally among visitor's, commoner's and on the public registration holder's. What is a need that need's to sustain it self, reason's are a business or self reason's.
       </p>

       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	     When:  By a transaction, simplie'st on a purchase, the data of it, the detail's, that include's amount and information needed to be circled, will be encripted automatically using proggraming and manually by paper reciept's. Real amounts, locations, place's, company and Time are handle by Vanguard with it's system to share it Globally with bar graphs on a private portfolio and a Global porfolio. 
       </p>
       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
       How: The payments for this registration's are free and on a Life-time. Choose what account you feel that you belonged. Transaction give away's will be following the sequence. Activating less 5% on the 10% widthdrawal commisions you must pay a 50 peso's active within 15 days to have only 5% widthdrawal commosion's. 
       </p>

       <br/>                                                 
       <br/>                                                
       <br/>

       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypeheaderindication'>
	      Registrations
       </p>

       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	       Common public account holdor's, as a visitor or a commoner, free and for a life-time, recieving transction give away's privately and sharing Globally through Vanguard.
       </p>

       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
        Public account holder's, belonging to a specific registration on any location's, free and for a life-time, recieving transction give away's privately through Vanguard. Activing, 100 peso's within 15 day's for 7% widthdrawal commosion's. 
       </p> 

       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	      Private authentication's, free and for a life-time, sharing Globally and recieving transction give away's privately, Activing, 50 peso's within 15 day's for 5% widthdrawal commosion's. 
       </p>
       
       <br />
       <br />
       <br />
       
       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypeheaderindication'>
	       Deposit accounts and number                                                                                                                                                                          
       </p>

       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	       0995874922 - Gcash account number
       </p>

    </Col>   
     <Col xs={12}
          md={6}
          lg={6}
          id='databaselogin-authenticationpublicitytypecontainer-authenticationdetailscontainer'>
       <PublicAuthenticationDetails user={props.user}
                                    usercb={props.usercb}/>
     </Col>
   </Row>
   <Money viewport={props.viewport}/>
   <Funds viewport={props.viewport}/>
   <Col xs={12}
        md={12}
        lg={12}
        id='databaselogin-requesttransactioncontainer'>
     <Transactions viewport={props.viewport}
                   requesttransactiondata={props.requesttransactiondata}/>
   </Col>
   <ConfigurationAuthenticationModal />
   <PasswordSetup />
   <DatabasePictureContainer user={props.user}/>
  </Col>
 )
}

function PublicAuthenticationDetails(props) {
  return (
    <Row id='publicahtneticationdetails'>
      <Col xs={12}
           md={12}
           lg={12}>
        <h1 id='publicahtneticationdetails-publicauthenticationdetailsheaderindication'>Public authentication</h1>
      </Col>
      <Col xs={12}
           md={5}
           lg={5}>
         <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Account authentication #:</p>
      </Col>
      <Col xs={12}
           md={7}
           lg={7}>
         <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'> <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-informatioonheaderindication'>{props.user.authentications.authenticationid}</span></p>
      </Col>

      <Col xs={12}
           md={5}
           lg={5}>
        <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Account authentication:</p>
      </Col>
      <Col xs={12}
           md={7}
           lg={7}>
         <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'> <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-informatioonheaderindication'>{props.user.authentications.authenticationtype}</span></p>
      </Col>

      <Col xs={12}
           md={3}
           lg={3}>
         <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Authentication:</p>
      </Col>
      <Col xs={12}
           md={8}
           lg={8}>
         <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'> <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-informatioonheaderindication'>Life time free common public logged in authentication</span></p>
      </Col>

      <Col xs={12}
           md={3}
           lg={3}>
         <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Unauthentication:</p>
      </Col>

      <Col xs={12}
           md={8}
           lg={8}>
         <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'> <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-informatioonheaderindication'>Will not unauthenticate. Common public are a free life-time registrations</span></p>
      </Col>

      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Password set: {
        false ? (
          <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-paswordsetfalseheaderindication'>false</span>
        ) 
        : 
        (
          <span className='publicahtneticationdet ails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-paswordsettrueheaderindication'>true</span>
        )
      }</p>
      <br />
      <Col xs={12}
           md={12}
           lg={12}>
         <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Funds:</p>
      </Col>
      
      <Col xs={12}
           md={12}
           lg={12}>
         <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'> <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-informatioonheaderindication'>Will recieve funds as a part of Vanguard's transactions</span></p>
      </Col>
      
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Deposits: 0 count</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Can deposit: {
        true ? (
          <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-candepositfalseheaderindication'>false</span>
        ) 
        : 
        (
          <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-candeposittrueheaderindication'>true</span>
        )
      }</p>

      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Total active merchandise transctions including delayed and commented: 0</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Total widthdrawals: 0</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Total deposits or money converted to Xirbit funds: 0</p>
      <br />
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>First name: ●●●●●●●●●●●●●●●●</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-nametogglebutton'
            onClick={(evt)=> {
              const _userfirstname = document.querySelectorAll(".publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication");
              if ( _userfirstname[16].innerText.includes("●")) {
                _userfirstname[16].innerText = `Firstname: ${props.user.details.surials.firstname}`;
              } else {
                _userfirstname[16].innerText = "Firstname: ●●●●●";
              }
            }}>
       show
      </p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Middle name: ●●●●●●●●●●●●●●●●</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-nametogglebutton'
            onClick={(evt)=> {
            const _userfirstname = document.querySelectorAll(".publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication");
              if ( _userfirstname[17].innerText.includes("●")) {
                _userfirstname[17].innerText = `Middle name: ${props.user.details.surials.middlename}`;
              } else {
                _userfirstname[17].innerText = "Middle name: ●●●●●";
              }
          }}>show</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Last name: ●●●●●●●●●●●●●●●●</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-nametogglebutton'
      onClick={(evt)=> {
          const _userfirstname = document.querySelectorAll(".publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication");
        if ( _userfirstname[18].innerText.includes("●")) {
                _userfirstname[18].innerText = `Last name: ${props.user.details.surials.lastname}`;
              } else {
                _userfirstname[18].innerText = "Last name: ●●●●●";
         }
      }}>show</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>or</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Nickname: ●●●●●●●●●●●●●●●●</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-nametogglebutton'
            onClick={(evt)=> {
               const _userfirstname = document.querySelectorAll(".publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication");
              if ( _userfirstname[20].innerText.includes("●")) {
                _userfirstname[20].innerText = `Nick name: ${props.user.details.surials.nickname}`;
              } else {
                _userfirstname[20].innerText = "Nick name: ●●●●●";
         }
            }}>show</p>
      <br />
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Given address</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Street: <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-informatioonheaderindication'>{props.user.details.location.address.street}</span></p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Baranggay: <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-informatioonheaderindication'>{props.user.details.location.address.trademark}</span></p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Trademark: <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-informatioonheaderindication'>{props.user.details.location.address.city}</span></p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>City: <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-informatioonheaderindication'>{props.user.details.location.address.province}</span></p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Province: <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-informatioonheaderindication'>{props.user.details.location.address.province}</span></p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Country: <span className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-informatioonheaderindication'>{props.user.details.location.address.country}</span></p>
    </Row>
  )
}

function Money(props) {
  return(
    <Row id='databaselogin-moneydetailscontainer'>
      <Col xs={12}
           md={12}
           lg={12}
           id='databaselogin-moneydetailscontainer-moneyheaderindicationcontainer'>
         <h1 id='databaselogin-moneydetailscontainer-moneyheaderindication'>Money</h1>
      </Col>
      <TransactionMoneyGraph viewport={props.viewport}/>
      <MoneyTransaction viewport={props.viewport}/>
    </Row>
  )
}

function Funds(props) {
 return (
  <Row id='databaselogin-fundsdetailscontainer'>
  <Col xs={12}
       md={12}
       lg={12}
       id='databaselogin-fundsdetailscontainer-fundsheaderindicationcontainer'>
     <h1 id='databaselogin-fundsdetailscontainer-fundsheaderindication'>Funds</h1>
  </Col>

  <TransactionFundsGraph viewport={props.viewport}/>

  <MoneyTransaction viewport={props.viewport}/>

</Row>
 )
}

function ConfigurationAuthenticationModal() {
 return (
  <Row xs={12}
       md={12}
       lg={12}
       id='configurationauthenticationdetailsmodal'>

    <hr />
     <p className='configurationauthenticationdetailsmodal-headerindication'>Account details configuration</p>
    <hr />
   
    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-headerindicationcontainer'>
        <p className='configurationauthenticationdetailsmodal-headerindication'>First name</p>
    </Col>
    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-fieldcontainer'>
      <input type='text'
             className='configurationauthenticationdetailsmodal-field'/>
    </Col>

    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
        <button className='configurationauthenticationdetailsmodal-savebutton'>
         save
        </button>
      </Col>
      <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
         <Spinner animation="border" variant="secondary" />
      </Col>
    </Col>
      
    <Col xs={12}
         md={6}
         lg={6}
         className='configurationauthenticationdetailsmodal-responsemessagecontainer'>
      <p className='configurationauthenticationdetailsmodal-responsemessage'>Response message</p>
    </Col>

    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-headerindicationcontainer'>
        <p className='configurationauthenticationdetailsmodal-headerindication'>Middle name</p>
    </Col>

    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-fieldcontainer'>
      <input type='text'
             className='configurationauthenticationdetailsmodal-field'/>
    </Col>

    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
        <button className='configurationauthenticationdetailsmodal-savebutton'>
         save
        </button>
      </Col>
      <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
         <Spinner animation="border" variant="secondary" />
      </Col>
    </Col>
    
    <Col xs={12}
         md={6}
         lg={6}
         className='configurationauthenticationdetailsmodal-responsemessagecontainer'>
      <p className='configurationauthenticationdetailsmodal-responsemessage'>Response message</p>
    </Col>

    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-headerindicationcontainer'>
        <p className='configurationauthenticationdetailsmodal-headerindication'>Last name</p>
    </Col>
    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-fieldcontainer'>
      <input type='text'
             className='configurationauthenticationdetailsmodal-field'/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
        <button className='configurationauthenticationdetailsmodal-savebutton'>
         save
        </button>
      </Col>
      <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
         <Spinner animation="border" variant="secondary" />
      </Col>
    </Col>
    <Col xs={12}
         md={6}
         lg={6}
         className='configurationauthenticationdetailsmodal-responsemessagecontainer'>
      <p className='configurationauthenticationdetailsmodal-responsemessage'>Response message</p>
    </Col>
  
    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-headerindicationcontainer'>
        <p className='configurationauthenticationdetailsmodal-headerindication'>Nickname</p>
    </Col>

    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-fieldcontainer'>
      <input type='text'
             className='configurationauthenticationdetailsmodal-field'/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
        <button className='configurationauthenticationdetailsmodal-savebutton'>
         save
        </button>
      </Col>
      <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
         <Spinner animation="border" variant="secondary" />
      </Col>
    </Col>
    <Col xs={12}
         md={6}
         lg={6}
         className='configurationauthenticationdetailsmodal-responsemessagecontainer'>
      <p className='configurationauthenticationdetailsmodal-responsemessage'>Response message</p>
    </Col>

    <br />
    <br />
    <br />
    <br />
    <br />


    <hr />
    <hr />
  
    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-headerindicationcontainer'>
        <p className='configurationauthenticationdetailsmodal-headerindication'>Street</p>
    </Col>
    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-fieldcontainer'>
      <input type='text'
             className='configurationauthenticationdetailsmodal-field'/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
        <button className='configurationauthenticationdetailsmodal-savebutton'>
         save
        </button>
      </Col>
      <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
         <Spinner animation="border" variant="secondary" />
      </Col>
    </Col>
    <Col xs={12}
         md={6}
         lg={6}
         className='configurationauthenticationdetailsmodal-responsemessagecontainer'>
      <p className='configurationauthenticationdetailsmodal-responsemessage'>Response message</p>
    </Col>

    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-headerindicationcontainer'>
        <p className='configurationauthenticationdetailsmodal-headerindication'>Baranggay</p>
    </Col>
    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-fieldcontainer'>
      <input type='text'
             className='configurationauthenticationdetailsmodal-field'/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
        <button className='configurationauthenticationdetailsmodal-savebutton'>
         save
        </button>
      </Col>
      <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
         <Spinner animation="border" variant="secondary" />
      </Col>
    </Col>
    <Col xs={12}
         md={6}
         lg={6}
         className='configurationauthenticationdetailsmodal-responsemessagecontainer'>
      <p className='configurationauthenticationdetailsmodal-responsemessage'>Response message</p>
    </Col>

    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-headerindicationcontainer'>
        <p className='configurationauthenticationdetailsmodal-headerindication'>Trademark</p>
    </Col>
    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-fieldcontainer'>
      <input type='text'
             className='configurationauthenticationdetailsmodal-field'/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
        <button className='configurationauthenticationdetailsmodal-savebutton'>
         save
        </button>
      </Col>
      <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
         <Spinner animation="border" variant="secondary" />
      </Col>
    </Col>
    <Col xs={12}
         md={6}
         lg={6}
         className='configurationauthenticationdetailsmodal-responsemessagecontainer'>
      <p className='configurationauthenticationdetailsmodal-responsemessage'>Response message</p>
    </Col>

    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-headerindicationcontainer'>
        <p className='configurationauthenticationdetailsmodal-headerindication'>City</p>
    </Col>
    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-fieldcontainer'>
      <input type='text'
             className='configurationauthenticationdetailsmodal-field'/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
        <button className='configurationauthenticationdetailsmodal-savebutton'>
         save
        </button>
      </Col>
      <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
         <Spinner animation="border" variant="secondary" />
      </Col>
    </Col>
    <Col xs={12}
         md={6}
         lg={6}
         className='configurationauthenticationdetailsmodal-responsemessagecontainer'>
      <p className='configurationauthenticationdetailsmodal-responsemessage'>Response message</p>
    </Col>

    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-headerindicationcontainer'>
        <p className='configurationauthenticationdetailsmodal-headerindication'>Province</p>
    </Col>
    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-fieldcontainer'>
      <input type='text'
             className='configurationauthenticationdetailsmodal-field'/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
        <button className='configurationauthenticationdetailsmodal-savebutton'>
         save
        </button>
      </Col>
      <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
         <Spinner animation="border" variant="secondary" />
      </Col>
    </Col>
    <Col xs={12}
         md={6}
         lg={6}
         className='configurationauthenticationdetailsmodal-responsemessagecontainer'>
      <p className='configurationauthenticationdetailsmodal-responsemessage'>Response message</p>
    </Col>
    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-headerindicationcontainer'>
        <p className='configurationauthenticationdetailsmodal-headerindication'>Country</p>
    </Col>
    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-fieldcontainer'>
      <input type='text'
             className='configurationauthenticationdetailsmodal-field'/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
        <button className='configurationauthenticationdetailsmodal-savebutton'>
         save
        </button>
      </Col>
      <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
         <Spinner animation="border" variant="secondary" />
      </Col>
    </Col>
    <Col xs={12}
         md={6}
         lg={6}
         className='configurationauthenticationdetailsmodal-responsemessagecontainer'>
      <p className='configurationauthenticationdetailsmodal-responsemessage'>Response message</p>
    </Col>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <hr />
     <p>User picture</p>
    <hr />

    <br />
    <br />

     <Col xs={12}
        md={12}
	lg={12}
        className="configurationauthenticationdetailsmodal-cardidpicturescontainer-frontdetailscontainer">
     <Col className="configurationauthenticationdetailsmodal-cardidpicturecontainer"> 
         <img src="../images/landingpage/bondpaperimage.jpg"
              id="configurationauthenticationdetailsmodal-cardiduserpicture"
	      onClick={(evt)=> {
               const _picturemodal = document.querySelectorAll(".configurationauthenticationdetailsmodal-cardiddisplaymodal");
	      _picturemodal[0].style.display = "block";
	     }}/>
       <Col className="configurationauthenticationdetailsmodal-cardidpicturecontainer-changeuserpicturebuttoncontainer">
	<input type="file" id="configurationauthenticationdetailsmodal-userpicture"/>
	 <label for="configurationauthenticationdetailsmodal-userpicture"
                className="configurationauthenticationdetailsmodal-cardidpicturecontainer-changeuserpicturebutton">
	 change user picture
	 </label>
      </Col>

      </Col>
      <Col className="configurationauthenticationdetailsmodal-cardiddisplaymodal"> 
        <Col id="databasemobileidcard-frontlayout-cardiddisplaymodal-cardiduserpicturecontainer">
          <img src="../images/landingpage/bondpaperimage.jpg"
               id="configurationauthenticationdetailsmodal-cardiddisplaymodal-cardiduserpicture"/>
        </Col>
        <Col id="databasemobileidcard-frontlayout-cardiddisplaymodal-closebuttoncontainer">
         <button id="databasemobileidcard-frontlayout-cardiddisplaymodal-closebutton"
                onClick={(evt)=> {
                 const _picturemodal = document.querySelectorAll(".configurationauthenticationdetailsmodal-cardiddisplaymodal");
	        _picturemodal[0].style.display = "none";
	     }}>
	   close
        </button>
        </Col>
      </Col>
    </Col>


    <hr id="configurationauthenticationdetailsmodal-usersigniturehr"/>
     <p>User signiture</p>
    <hr />

    <br />
    <br />

   <Col xs={12}
        md={12}
	      lg={12}
        className="configurationauthenticationdetailsmodal-cardidpicturescontainer-backdetailscontainer">
     <Col className="configurationauthenticationdetailsmodal-cardidpicturecontainer"> 
         <img src="../images/landingpage/bondpaperimage.jpg"
              id="configurationauthenticationdetailsmodal-cardiduserpicture"
	      onClick={(evt)=> {
               const _picturemodal = document.querySelectorAll(".configurationauthenticationdetailsmodal-cardiddisplaymodal");
	      _picturemodal[1].style.display = "block";
	     }}/>
        <Col className="configurationauthenticationdetailsmodal-cardidpicturecontainer-changeuserpicturebuttoncontainer">
	 <input type="file" id="configurationauthenticationdetailsmodal-usersigniture"/>
	 <label for="configurationauthenticationdetailsmodal-usersigniture"
         className="configurationauthenticationdetailsmodal-cardidpicturecontainer-changeuserpicturebutton">change user signiture
	 </label>
	</Col>
      </Col>
      <Col className="configurationauthenticationdetailsmodal-cardiddisplaymodal"> 
        <Col id="databasemobileidcard-frontlayout-cardiddisplaymodal-cardiduserpicturecontainer">
          <img src="../images/landingpage/bondpaperimage.jpg"
               id="configurationauthenticationdetailsmodal-cardiddisplaymodal-cardiduserpicture"/>
        </Col>
        <Col id="databasemobileidcard-frontlayout-cardiddisplaymodal-closebuttoncontainer">
         <button id="databasemobileidcard-frontlayout-cardiddisplaymodal-closebutton"
                onClick={(evt)=> {
                 const _picturemodal = document.querySelectorAll(".configurationauthenticationdetailsmodal-cardiddisplaymodal");
	        _picturemodal[1].style.display = "none";
	     }}>
	   close
        </button>
        </Col>
      </Col>
    </Col>

  </Row>
 )
}

function PasswordSetup() {
 return (
  <Row id='passwordsetup'>
    <Col xs={12}
         md={6}
         lg={6}
         className='passwordsetup-fieldandheaderindicationcontainer'>
     <p className='passwordsetup-fieldandheaderindicationcontainer-fieldheaderindcation'>Password</p>
     <input className='passwordsetup-fieldandheaderindicationcontainer-field'
            type='password'/>
     <p className='passwordsetup-fieldandheaderindicationcontainer-responsemessage'>Response message</p>
    </Col>
    <Col xs={12}
         md={6}
         lg={6}
         className='passwordsetup-fieldandheaderindicationcontainer'>
      <button className='passwordsetup-button'>show</button>
      <button className='passwordsetup-button'>configure</button>
    </Col>
  </Row>
 )
}

function DatabasePictureContainer(props) {
return (
<Col id="databasemobileidcard-layoutcontainer">
 <Row id="databasemobileidcard"> 
   <Col id="databasemobileidcard-frontlayout">
    <Col id="databasemobileidcard-frontlayout-cardidpicturescontainer">
      <Col id="databasemobileidcard-frontlayout-cardidpicturecontainer"> 
         <img src="../images/landingpage/bondpaperimage.jpg"
              id="databasemobileidcard-frontlayout-cardiduserpicture"
	      onClick={(evt)=> {
           const _picturemodal = document.querySelector("#databasemobileidcard-frontlayout-cardiddisplaymodal");
	         _picturemodal.style.display = "block";
	     }}/>
      </Col>
      <Col id="databasemobileidcard-frontlayout-cardiddisplaymodal"> 
        <Col id="databasemobileidcard-frontlayout-cardiddisplaymodal-cardiduserpicturecontainer">
          <img src="../images/landingpage/bondpaperimage.jpg"
               id="databasemobileidcard-frontlayout-cardiddisplaymodal-cardiduserpicture"/>
        </Col>
        <Col id="databasemobileidcard-frontlayout-cardiddisplaymodal-closebuttoncontainer">
         <button id="databasemobileidcard-frontlayout-cardiddisplaymodal-closebutton"
                onClick={(evt)=> {
                 const _picturemodal = document.querySelector("#databasemobileidcard-frontlayout-cardiddisplaymodal");
	        _picturemodal.style.display = "none";
	     }}>
	   close
        </button>
        </Col>
      </Col>
     </Col>
     <Col id="databasemobileidcard-frontlayout-cardidpicturescontainer-frontdetailscontainer">
       <p className="databasemobileidcard-frontlayout-cardidpicturescontainer-frontdetailscontainerfrontdetailsheaderindication">{props.user.details.surials.firstname} {props.user.details.surials.middlename} {props.user.details.surials.lastname}</p>
       <p className="databasemobileidcard-frontlayout-cardidpicturescontainer-frontdetailscontainerfrontdetailsheaderindication">{props.user.details.location.address.street}, {props.user.details.location.address.street}, {props.user.details.location.address.street}, {props.user.details.location.address.street}, {props.user.details.location.address.street}, {props.user.details.location.address.street},</p>
     </Col>
    </Col>

   <Col id="databasemobileidcard-backlayout"> 
    <Col id="databasemobileidcard-backlayout-cardidpicturescontainer">
      <Col id="databasemobileidcard-backlayout-cardidpicturecontainer"> 
         <img src="../images/landingpage/bondpaperimage.jpg"
              id="databasemobileidcard-backlayout-cardiduserpicture"
	      onClick={(evt)=> {
               const _picturemodal = document.querySelector("#databasemobileidcard-backlayout-cardiddisplaymodal");
	      _picturemodal.style.display = "block";
	     }}/>
         <p className="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailscontainer-backdetailsheaderindication">ID HOLDER SIGNITURE</p>
      </Col>
      <Col id="databasemobileidcard-backlayout-cardiddisplaymodal"> 
        <Col id="databasemobileidcard-backlayout-cardiddisplaymodal-cardiduserpicturecontainer">
          <img src="../images/landingpage/bondpaperimage.jpg"
               id="databasemobileidcard-backlayout-cardiddisplaymodal-cardiduserpicture"/>
        </Col>
        <Col id="databasemobileidcard-backlayout-cardiddisplaymodal-closebuttoncontainer">
         <button id="databasemobileidcard-backlayout-cardiddisplaymodal-closebutton"
	         onClick={(evt)=> {
                   const _picturemodal = document.querySelector("#databasemobileidcard-backlayout-cardiddisplaymodal");
	           _picturemodal.style.display = "none";
	     }}>
	   close
        </button>
        </Col>
      </Col>
     </Col>
     <Row id="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailsgridcontainer">
      <Col xs={6}
	   md={6}
	   lg={6}
	   className="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailscontainer">
	<p className="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailscontainer-backdetailsheaderindication">My CONTACT NUMBER</p>
	<p className="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailscontainer-backdetailssubheaderindication">00000000000</p>
      </Col>
      <Col xs={6}
	   md={6}
	   lg={6}
	   className="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailscontainer">
	<p className="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailscontainer-backdetailsheaderindication">VANGUARD MAIN CONTAINER NUMBER</p>
	<p className="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailscontainer-backdetailssubheaderindication">00000000000</p>
      </Col>
     </Row>
   </Col>
 </Row>
</Col>
)
}
