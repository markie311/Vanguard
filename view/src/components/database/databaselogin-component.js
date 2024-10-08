import React, {
         useState,
         useCallback
       } from 'react';

import { Row,
         Col,
         Spinner } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import axiosCreatedInstance from '../lib/axiosutil.js';

import '../../styles/database/databaselogin.scss';


import TransactionMoneyGraph from '../transactions/money/transactionmoneygraph-component.js';
import MoneyTransaction from '../transactions/money/moneytransaction-component.js';
import TransactionFundsGraph from '../transactions/funds/transactionfundsgraph-component.js';
import FundsTransaction from '../transactions/funds/fundstransaction-component.js';
import Transactions from '../transactions/request/transactions-component.js';

import { timestamp } from '../../components/lib/timestamps';

export default function DatabaseLogin(props) {

  const navigate = useNavigate();
  const [, states] = useState();
  const deepupdate = useCallback(() => states({}), []);

  const [userconfigurationfirstname, userconfigurationfirstnamecb] = useState("");
  const [userconfigurationfirstnameloadingindication, userconfigurationfirstnameloadingindicationcb] = useState(false);
 
  const [userconfigurationmiddlename, userconfigurationmiddlenamecb] = useState("");
  const [userconfigurationmiddlenameloadingindication, userconfigurationmiddlenameloadingindicationcb] = useState(false);

  const [userconfigurationlastname, userconfigurationlastnamecb] = useState("");
  const [userconfigurationlastnameloadingindication, userconfigurationlastnameloadingindicationcb] = useState(false);

  const [userconfigurationnickname, userconfigurationnicknamecb] = useState("");
  const [userconfigurationnicknameloadingindication, userconfigurationnicknameloadingindicationcb] = useState(false);

  const [userconfigurationstreetaddress, userconfigurationstreetaddresscb] = useState("");
  const [userconfigurationstreetaddressloadingindication, userconfigurationstreetaddressloadingindicationcb] = useState(false);

  const [userconfigurationbaranggayaddress, userconfigurationbaranggayaddresscb] = useState("");
  const [userconfigurationbaranggayaddressloadingindication, userconfigurationbaranggayaddressloadingindicationcb] = useState(false);

  const [userconfigurationtrademarkaddress, userconfigurationtrademarkaddresscb] = useState("");
  const [userconfigurationtrademarkaddressloadingindication, userconfigurationtrademarkaddressloadingindicationcb] = useState(false);

  const [userconfigurationcityaddress, userconfigurationcityaddresscb] = useState("");
  const [userconfigurationcityaddressloadingindication, userconfigurationcityaddressloadingindicationcb] = useState(false);

  const [userconfigurationprovinceaddress, userconfigurationprovinceaddresscb] = useState("");
  const [userconfigurationprovinceaddressloadingindication, userconfigurationprovinceaddressloadingindicationcb] = useState(false);

  const [userconfigurationcountryaddress, userconfigurationcountryaddresscb] = useState("");
  const [userconfigurationcountryaddressloadingindication, userconfigurationcountryaddressloadingindicationcb] = useState(false);

  const [userconfigurationphonenumber, userconfigurationphonenumbercb] = useState("XXXX-XXXX-XXX-X");
  const [userconfigurationphonenumberloadingindication, userconfigurationphonenumberloadingindicationcb] = useState(false);

  const [userconfigurationpassword, userconfigurationpasswordcb] = useState("");
  const [userconfigurationpasswordloadingindication, userconfigurationpasswordloadingindicationcb] = useState(false);

  const [userconfigurationuserpicture, userconfigurationuserpicturecb] = useState("");

  const [userconfigurationusersigniture, userconfigurationusersigniturecb] = useState("");

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

       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypeheaderindication'>
	      Changing accounts                                                                                                                                                                         
       </p>

       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	       Common public account - Only on 15 and 30 date's 8am-8pm PH standard time
       </p>

       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	       Public account - Only on 15 and 30 date's 8am-8pm PH standard time
       </p>

       <p className='databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication'>
	       Private account - Only on 15 and 30 date's 8am-8pm PH standard time
       </p>

       <button id="databaselogin-authenticationpublicitytypecontainer-publicauthenticationpublicitytypesubeaderindication-navigatetotellerregistrationsdashboardbutton"
               onClick={()=> {
                 navigate('/registrationsassistance');
               }}
       >
        Navigate to teller registration's dashboard
        </button>

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
   <ConfigurationAuthenticationModal user={props.user}
                                     usercb={props.usercb}
                                     
                                     userconfigurationfirstname={userconfigurationfirstname}
                                     userconfigurationfirstnamecb={userconfigurationfirstnamecb}

                                     userconfigurationfirstnameloadingindication={userconfigurationfirstnameloadingindication}
                                     userconfigurationfirstnameloadingindicationcb={userconfigurationfirstnameloadingindicationcb}
                                     
                                     userconfigurationmiddlename={userconfigurationmiddlename}
                                     userconfigurationmiddlenamecb={userconfigurationmiddlenamecb}

                                     userconfigurationmiddlenameloadingindication={userconfigurationmiddlenameloadingindication}
                                     userconfigurationmiddlenameloadingindicationcb={userconfigurationmiddlenameloadingindicationcb}

                                     userconfigurationlastname={userconfigurationlastname}
                                     userconfigurationlastnamecb={userconfigurationlastnamecb}

                                     userconfigurationlastnameloadingindication={userconfigurationlastnameloadingindication}
                                     userconfigurationlastnameloadingindicationcb={userconfigurationlastnameloadingindicationcb}

                                     userconfigurationnickname={userconfigurationnickname}
                                     userconfigurationnicknamecb={userconfigurationnicknamecb}

                                     userconfigurationnicknameloadingindication={userconfigurationnicknameloadingindication}
                                     userconfigurationnicknameloadingindicationcb={userconfigurationnicknameloadingindicationcb}

                                     userconfigurationstreetaddress={userconfigurationstreetaddress}
                                     userconfigurationstreetaddresscb={userconfigurationstreetaddresscb}

                                     userconfigurationstreetaddressloadingindication={userconfigurationstreetaddressloadingindication}
                                     userconfigurationstreetaddressloadingindicationcb={userconfigurationstreetaddressloadingindicationcb}

                                     userconfigurationbaranggayaddress={userconfigurationbaranggayaddress}
                                     userconfigurationbaranggayaddresscb={userconfigurationbaranggayaddresscb}

                                     userconfigurationbaranggayaddressloadingindication={userconfigurationbaranggayaddressloadingindication}
                                     userconfigurationbaranggayaddressloadingindicationcb={userconfigurationbaranggayaddressloadingindicationcb}

                                     userconfigurationtrademarkaddress={userconfigurationtrademarkaddress}
                                     userconfigurationtrademarkaddresscb={userconfigurationtrademarkaddresscb}

                                     userconfigurationtrademarkaddressloadingindication={userconfigurationtrademarkaddressloadingindication}
                                     userconfigurationtrademarkaddressloadingindicationcb={userconfigurationtrademarkaddressloadingindicationcb}

                                     userconfigurationcityaddress={userconfigurationcityaddress}
                                     userconfigurationcityaddresscb={userconfigurationcityaddresscb}

                                     userconfigurationcityaddressloadingindication={userconfigurationcityaddressloadingindication}
                                     userconfigurationcityaddressloadingindicationcb={userconfigurationcityaddressloadingindicationcb}

                                     userconfigurationprovinceaddress={userconfigurationprovinceaddress}
                                     userconfigurationprovinceaddresscb={userconfigurationprovinceaddresscb}

                                     userconfigurationprovinceaddressloadingindication={userconfigurationprovinceaddressloadingindication}
                                     userconfigurationprovinceaddressloadingindicationcb={userconfigurationprovinceaddressloadingindicationcb}

                                     userconfigurationcountryaddress={userconfigurationcountryaddress}
                                     userconfigurationcountryaddresscb={userconfigurationcountryaddresscb}

                                     userconfigurationcountryaddressloadingindication={userconfigurationcountryaddressloadingindication}
                                     userconfigurationcountryaddressloadingindicationcb={userconfigurationcountryaddressloadingindicationcb}

                                     userconfigurationuserpicture={userconfigurationuserpicture}
                                     userconfigurationuserpicturecb={userconfigurationuserpicturecb}
                                     userconfigurationusersigniture={userconfigurationusersigniture}
                                     userconfigurationusersigniturecb={userconfigurationusersigniturecb}

                                     userconfigurationphonenumber={userconfigurationphonenumber}
                                     userconfigurationphonenumbercb={ userconfigurationphonenumbercb}
                                     userconfigurationphonenumberloadingindication={userconfigurationphonenumberloadingindication}
                                     userconfigurationphonenumberloadingindicationcb={userconfigurationphonenumberloadingindicationcb}

                                     deepupdate={deepupdate}/>
   <PasswordSetup  user={props.user}
                   usercb={props.usercb}
                   userconfigurationpassword={userconfigurationpassword}
                   userconfigurationpasswordcb={userconfigurationpasswordcb}
                   userconfigurationpasswordloadingindication={userconfigurationpasswordloadingindication}
                   userconfigurationpasswordloadingindicationcb={userconfigurationpasswordloadingindicationcb}/>

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
        <h1 id='publicahtneticationdetails-publicauthenticationdetailsheaderindication'>Practicing authentication</h1>
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
                _userfirstname[16].innerText = "Firstname: ●●●●●●●●●●●●●●●●";
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
                _userfirstname[17].innerText = "Middle name: ●●●●●●●●●●●●●●●●";
              }
          }}>show</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Last name: ●●●●●●●●●●●●●●●●</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-nametogglebutton'
      onClick={(evt)=> {
          const _userfirstname = document.querySelectorAll(".publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication");
        if ( _userfirstname[18].innerText.includes("●")) {
                _userfirstname[18].innerText = `Last name: ${props.user.details.surials.lastname}`;
              } else {
                _userfirstname[18].innerText = "Last name: ●●●●●●●●●●●●●●●●";
         }
      }}>show</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>or</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication'>Nickname: ●●●●●●●●●●●●●●●●</p>
      <p className='publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication-nametogglebutton'
            onClick={(evt)=> {
               const _userfirstname = document.querySelectorAll(".publicahtneticationdetails-publicauthenticationdetailsheaderindication-publicauthenticationdetailsheaderindication");
              if ( _userfirstname[20].innerText.includes("●")) {
                _userfirstname[20].innerText = `Nickname: ${props.user.details.surials.nickname}`;
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

  <FundsTransaction viewport={props.viewport}/>

</Row>
 )
}

function ConfigurationAuthenticationModal(props) {
 return (
  <Row xs={12}
       md={12}
       lg={12}
       id='configurationauthenticationdetailsmodal'>

    <hr />
    <Col xs={12}
         md={12}
         lg={12}
         className='configurationauthenticationdetailsmodal-mainheaderindicationcontainer'>
     <p className='configurationauthenticationdetailsmodal-headerindication'>Account details configuration</p>
    </Col>
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
             className='configurationauthenticationdetailsmodal-field'
             value={props.userconfigurationfirstname}
             onChange={(evt)=> {
               const _userconfigurationfirstnameresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
               props.userconfigurationfirstnamecb((firstname)=> firstname = evt.target.value);
             }}/>
    </Col>

    <Col xs={12}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
       {
          props.userconfigurationfirstnameloadingindication ?  
          (
          <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
            <Spinner animation="border" variant="secondary" />
          </Col>
          )
          :
          (
            <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>

              <button className='configurationauthenticationdetailsmodal-savebutton'
                      onClick={ async (evt)=> {
    
                        const _userconfigurationfirstnameresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
    
                        await props.userconfigurationfirstnameloadingindicationcb((loadingindication)=> loadingindication = true);
    
                        axiosCreatedInstance.post("/userauthentication/changefirstname", {
                          $userconfigurationfirstname:  props.userconfigurationfirstname,
                          $userauthenticationid: props.user.authentications.authenticationid
                        }).then( async (response)=> {
    
                            const _responsedatamessage = response.data.message; 
    
                            switch(true) {
                            case _responsedatamessage.includes("Changing your firstname was successful"):
                              _userconfigurationfirstnameresponssemessage[0].style.color = "dodgerblue";
                              _userconfigurationfirstnameresponssemessage[0].innerText = _responsedatamessage;  
                              await props.userconfigurationfirstnameloadingindicationcb((loadingindication)=> loadingindication = false);
                              break;
                              case _responsedatamessage.includes("Changing your firstname failed. Error:"):
                              _userconfigurationfirstnameresponssemessage[0].style.color = "tomato";
                              _userconfigurationfirstnameresponssemessage[0].innerText = _responsedatamessage;  
                              await props.userconfigurationfirstnameloadingindicationcb((loadingindication)=> loadingindication = false);
                              break;
                            }
    
                            
                        })
    
                        
                      }}>
              save
              </button>
   
            </Col>
          )
       }
   
    
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
             className='configurationauthenticationdetailsmodal-field'
             value={props.userconfigurationmiddlename}
             onChange={(evt)=> {
               const _userconfigurationmiddlenameresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
               props.userconfigurationmiddlenamecb((middlename)=> middlename = evt.target.value);
             }}/>
    </Col>

    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      {
        props.userconfigurationmiddlenameloadingindication ? 
        (
         <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
          <Spinner animation="border" variant="secondary" />
         </Col>
        )
        :
        (
         <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
          <button className='configurationauthenticationdetailsmodal-savebutton'
                  onClick={ async (evt)=> {
      
                    const _userconfigurationmiddlenameresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
  
                    await props.userconfigurationmiddlenameloadingindicationcb((loadingindication)=> loadingindication = true);
  
                    axiosCreatedInstance.post("/userauthentication/changemiddlename", {
                      $userconfigurationmiddlename:  props.userconfigurationmiddlename,
                      $userauthenticationid: props.user.authentications.authenticationid
                    }).then( async (response)=> {
  
                        const _responsedatamessage = response.data.message; 
  
                        switch(true) {
                        case _responsedatamessage.includes("Changing your middlename was successful"):
                          _userconfigurationmiddlenameresponssemessage[1].style.color = "dodgerblue";
                          _userconfigurationmiddlenameresponssemessage[1].innerText = _responsedatamessage;  
                          await props.userconfigurationmiddlenameloadingindicationcb((loadingindication)=> loadingindication = false);
                          break;
                          case _responsedatamessage.includes("Changing your middlename failed. Error:"):
                          _userconfigurationmiddlenameresponssemessage[1].style.color = "tomato";
                          _userconfigurationmiddlenameresponssemessage[1].innerText = _responsedatamessage;  
                          await props.userconfigurationmiddlenameloadingindicationcb((loadingindication)=> loadingindication = false);
                          break;
                        }
  
                        
                    })
  
                    
                  }}>
           save
          </button>
         </Col>
        )
      }
  
      
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
             className='configurationauthenticationdetailsmodal-field'
             value={props.userconfigurationlastname}
             onChange={(evt)=> {
               const _userconfigurationlastnameresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
               props.userconfigurationlastnamecb((lastname)=> lastname = evt.target.value);
             }}/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
       {
        props.userconfigurationlastnameloadingindication ? 
        (
          <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
           <Spinner animation="border" variant="secondary" />
          </Col>
        )
        :
        (
          <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
           <button className='configurationauthenticationdetailsmodal-savebutton'
                   onClick={ async (evt)=> {
        
                    const _userconfigurationlastnameresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
  
                    await props.userconfigurationlastnameloadingindicationcb((loadingindication)=> loadingindication = true);
  
                    axiosCreatedInstance.post("/userauthentication/changelastname", {
                      $userconfigurationlastname:  props.userconfigurationlastname,
                      $userauthenticationid: props.user.authentications.authenticationid
                    }).then( async (response)=> {
  
                        const _responsedatamessage = response.data.message; 
  
                        switch(true) {
                          case _responsedatamessage.includes("Changing your lastname was successful"):
                          _userconfigurationlastnameresponssemessage[2].style.color = "dodgerblue";
                          _userconfigurationlastnameresponssemessage[2].innerText = _responsedatamessage;  
                          await props.userconfigurationlastnameloadingindicationcb((loadingindication)=> loadingindication = false);
                          break;  
                          case _responsedatamessage.includes("Changing your lastname failed. Error:"):
                          _userconfigurationlastnameresponssemessage[2].style.color = "tomato";
                            _userconfigurationlastnameresponssemessage[2].innerText = _responsedatamessage;  
                          await props.userconfigurationlastnameloadingindicationcb((loadingindication)=> loadingindication = false);
                          break;
                        }
  
                        
                    })
  
                    
                   }}>
           save
          </button>
          </Col>
        )
       }
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
             className='configurationauthenticationdetailsmodal-field'
             value={props.userconfigurationnickname}
             onChange={(evt)=> {
               const _userconfigurationnicknameresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
               props.userconfigurationnicknamecb((lastname)=> lastname = evt.target.value);
             }}/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      
          {
             props.userconfigurationnicknameloadingindication ?
             (
              <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
               <Spinner animation="border" variant="secondary" />
              </Col>
             )
             :
             (
              <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
                <button className='configurationauthenticationdetailsmodal-savebutton'
                        onClick={ async (evt)=> {
                
                          const _userconfigurationnicknameresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");

                          await props.userconfigurationnicknameloadingindicationcb((loadingindication)=> loadingindication = true);

                          axiosCreatedInstance.post("/userauthentication/changenickname", {
                            $userconfigurationnickname:  props.userconfigurationnickname,
                            $userauthenticationid: props.user.authentications.authenticationid
                          }).then( async (response)=> {

                              const _responsedatamessage = response.data.message; 

                              switch(true) {
                                case _responsedatamessage.includes("Changing your nickname was successful"):
                                _userconfigurationnicknameresponssemessage[3].style.color = "dodgerblue";
                                _userconfigurationnicknameresponssemessage[3].innerText = _responsedatamessage;  
                                await props.userconfigurationnicknameloadingindicationcb((loadingindication)=> loadingindication = false);
                                break;  
                                case _responsedatamessage.includes("Changing your nickname failed. Error:"):
                                  _userconfigurationnicknameresponssemessage[3].style.color = "tomato";
                                  _userconfigurationnicknameresponssemessage[3].innerText = _responsedatamessage;  
                                await props.userconfigurationnicknameloadingindicationcb((loadingindication)=> loadingindication = false);
                                break;
                              }

                              
                          })

                          
                        }}>
                save
                </button>
              </Col>
             )
          }

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
             className='configurationauthenticationdetailsmodal-field'
             value={props.userconfigurationstreetaddress}
             onChange={(evt)=> {
               const _userconfigurationstreetaddressresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
               props.userconfigurationstreetaddresscb((streetaddress)=> streetaddress = evt.target.value);
             }}/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      {
        props.userconfigurationstreetaddressloadingindication ?
        (
         <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
           <Spinner animation="border" variant="secondary" />
         </Col>
        )
        :
        (
         <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
          <button className='configurationauthenticationdetailsmodal-savebutton'
                   onClick={ async (evt)=> {
                
                    const _userconfigurationstreetaddressresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");

                    await props.userconfigurationstreetaddressloadingindicationcb((loadingindication)=> loadingindication = true);

                    axiosCreatedInstance.post("/userauthentication/changestreetaddress", {
                      $userconfigurationstreetaddress:  props.userconfigurationstreetaddress,
                      $userauthenticationid: props.user.authentications.authenticationid
                    }).then( async (response)=> {

                        const _responsedatamessage = response.data.message; 

                        switch(true) {
                          case _responsedatamessage.includes("Changing your street address was successful"):
                          _userconfigurationstreetaddressresponssemessage[4].style.color = "dodgerblue";
                          _userconfigurationstreetaddressresponssemessage[4].innerText = _responsedatamessage;  
                          await props.userconfigurationstreetaddressloadingindicationcb((loadingindication)=> loadingindication = false);
                          break;  
                          case _responsedatamessage.includes("Changing your street address failed. Error:"):
                            _userconfigurationstreetaddressresponssemessage[4].style.color = "tomato";
                            _userconfigurationstreetaddressresponssemessage[4].innerText = _responsedatamessage;  
                          await props.userconfigurationstreetaddressloadingindicationcb((loadingindication)=> loadingindication = false);
                          break;
                        }

                        
                    })

                    
                  }}>
           save
          </button>
         </Col>
        )
      }
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
             className='configurationauthenticationdetailsmodal-field'
             value={props.userconfigurationbaranggayddress}
             onChange={(evt)=> {
               const _userconfigurationbaranggayaddressresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
               props.userconfigurationbaranggayaddresscb((baranggayaddress)=> baranggayaddress = evt.target.value);
             }}/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
    {
      props.userconfigurationbaranggayaddressloadingindication ?
      (
      <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
         <Spinner animation="border" variant="secondary" />
      </Col>
      )
      :
      (
        <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
        <button className='configurationauthenticationdetailsmodal-savebutton'
                onClick={ async (evt)=> {
                
                  const _userconfigurationbaranggayaddressresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");

                  await props.userconfigurationbaranggayaddressloadingindicationcb((loadingindication)=> loadingindication = true);

                  axiosCreatedInstance.post("/userauthentication/changebaranggayaddress", {
                    $userconfigurationbaranggayaddress:  props.userconfigurationbaranggayaddress,
                    $userauthenticationid: props.user.authentications.authenticationid
                  }).then( async (response)=> {

                      const _responsedatamessage = response.data.message; 

                      switch(true) {
                        case _responsedatamessage.includes("Changing your baranggay address was successful"):
                         _userconfigurationbaranggayaddressresponssemessage[5].style.color = "dodgerblue";
                         _userconfigurationbaranggayaddressresponssemessage[5].innerText = _responsedatamessage;  
                        await props.userconfigurationbaranggayaddressloadingindicationcb((loadingindication)=> loadingindication = false);
                        break;  
                        case _responsedatamessage.includes("Changing your baranggay address failed. Error:"):
                          _userconfigurationbaranggayaddressresponssemessage[5].style.color = "tomato";
                          _userconfigurationbaranggayaddressresponssemessage[5].innerText = _responsedatamessage;  
                        await props.userconfigurationbaranggayaddressloadingindicationcb((loadingindication)=> loadingindication = false);
                        break;
                      }

                      
                  })

                  
                }}>
         save
        </button>
      </Col>
      )
    }

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
             className='configurationauthenticationdetailsmodal-field'
             value={props.userconfigurationtrademarkddress}
             onChange={(evt)=> {
               const _userconfigurationtrademarkaddressresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
               props.userconfigurationtrademarkaddresscb((trademarkaddress)=> trademarkaddress = evt.target.value);
             }}/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
    {
      props.userconfigurationtrademarkaddressloadingindication ? 
      (
      <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
         <Spinner animation="border" variant="secondary" />
      </Col>
      )
      :
      (
      <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
        <button className='configurationauthenticationdetailsmodal-savebutton'
                onClick={ async (evt)=> {
                
                  const _userconfigurationtrademarkaddressresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");

                  await props.userconfigurationtrademarkaddressloadingindicationcb((loadingindication)=> loadingindication = true);

                  axiosCreatedInstance.post("/userauthentication/changetrademarkaddress", {
                    $userconfigurationtrademarkaddress:  props.userconfigurationtrademarkaddress,
                    $userauthenticationid: props.user.authentications.authenticationid
                  }).then( async (response)=> {

                      const _responsedatamessage = response.data.message; 

                      switch(true) {
                        case _responsedatamessage.includes("Changing your trademark address was successful"):
                         _userconfigurationtrademarkaddressresponssemessage[6].style.color = "dodgerblue";
                         _userconfigurationtrademarkaddressresponssemessage[6].innerText = _responsedatamessage;  
                        await props.userconfigurationtrademarkaddressloadingindicationcb((loadingindication)=> loadingindication = false);
                        break;  
                        case _responsedatamessage.includes("Changing your trademark address failed. Error:"):
                          _userconfigurationtrademarkaddressresponssemessage[6].style.color = "tomato";
                          _userconfigurationtrademarkaddressresponssemessage[6].innerText = _responsedatamessage;  
                        await props.userconfigurationtrademarkaddressloadingindicationcb((loadingindication)=> loadingindication = false);
                        break;
                      }

                      
                  })

                  
                }}>
         save
        </button>
      </Col>
      )
    }
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
             className='configurationauthenticationdetailsmodal-field'
             value={props.userconfigurationcityddress}
             onChange={(evt)=> {
               const _userconfigurationcityaddressresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
               props.userconfigurationcityaddresscb((trademarkaddress)=> trademarkaddress = evt.target.value);
             }}/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
     {
      props.userconfigurationcityaddressloadingindication ? 
      (
       <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
        <Spinner animation="border" variant="secondary" />
       </Col>
      )
      :
      (
        <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
          <button className='configurationauthenticationdetailsmodal-savebutton'
                  onClick={ async (evt)=> {
                  
                    const _userconfigurationcityaddressresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");

                    await props.userconfigurationcityaddressloadingindicationcb((loadingindication)=> loadingindication = true);

                    axiosCreatedInstance.post("/userauthentication/changecityaddress", {
                      $userconfigurationcityaddress:  props.userconfigurationcityaddress,
                      $userauthenticationid: props.user.authentications.authenticationid
                    }).then( async (response)=> {

                        const _responsedatamessage = response.data.message; 

                        switch(true) {
                          case _responsedatamessage.includes("Changing your city address was successful"):
                          _userconfigurationcityaddressresponssemessage[7].style.color = "dodgerblue";
                          _userconfigurationcityaddressresponssemessage[7].innerText = _responsedatamessage;  
                          await props.userconfigurationcityaddressloadingindicationcb((loadingindication)=> loadingindication = false);
                          break;  
                          case _responsedatamessage.includes("Changing your city address failed. Error:"):
                            _userconfigurationcityaddressresponssemessage[7].style.color = "tomato";
                            _userconfigurationcityaddressresponssemessage[7].innerText = _responsedatamessage;  
                          await props.userconfigurationcityaddressloadingindicationcb((loadingindication)=> loadingindication = false);
                          break;
                        }

                        
                    })

                  }}>
          save
          </button>
       </Col>
      )
     }
    
   
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
             className='configurationauthenticationdetailsmodal-field'
             value={props.userconfigurationprovinceddress}
             onChange={(evt)=> {
               const _userconfigurationprovinceddressresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
               props.userconfigurationprovinceaddresscb((trademarkaddress)=> trademarkaddress = evt.target.value);
             }}/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      {
        props.userconfigurationprovinceaddressloadingindication ?
        (
          <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
            <Spinner animation="border" variant="secondary" />
          </Col>
        )
        :
        (
        <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
          <button className='configurationauthenticationdetailsmodal-savebutton'
                  onClick={ async (evt)=> {
                
                    const _userconfigurationprovinceaddressresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
  
                    await props.userconfigurationprovinceaddressloadingindicationcb((loadingindication)=> loadingindication = true);
  
                    axiosCreatedInstance.post("/userauthentication/changeprovinceaddress", {
                      $userconfigurationprovinceaddress:  props.userconfigurationprovinceaddress,
                      $userauthenticationid: props.user.authentications.authenticationid
                    }).then( async (response)=> {
  
                        const _responsedatamessage = response.data.message; 
  
                        switch(true) {
                          case _responsedatamessage.includes("Changing your province address was successful"):
                            _userconfigurationprovinceaddressresponssemessage[8].style.color = "dodgerblue";
                            _userconfigurationprovinceaddressresponssemessage[8].innerText = _responsedatamessage;  
                          await props.userconfigurationprovinceaddressloadingindicationcb((loadingindication)=> loadingindication = false);
                          break;  
                          case _responsedatamessage.includes("Changing your province address failed. Error:"):
                            _userconfigurationprovinceaddressresponssemessage[8].style.color = "tomato";
                            _userconfigurationprovinceaddressresponssemessage[8].innerText = _responsedatamessage;  
                          await props.userconfigurationprovinceaddressloadingindicationcb((loadingindication)=> loadingindication = false);
                          break;
                        }
  
                        
                    })

                  }}>
           save
          </button>
        </Col>
        )
      }
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
             className='configurationauthenticationdetailsmodal-field'
             value={props.userconfigurationcountryddress}
             onChange={(evt)=> {
               const _userconfigurationcountryaddressresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");
               props.userconfigurationcountryaddresscb((trademarkaddress)=> trademarkaddress = evt.target.value);
             }}/>
    </Col>
    <Col xs={4}
         md={2}
         lg={2}
         className='configurationauthenticationdetailsmodal-savebuttonandloadingindicationcontainer'>
      {
        props.userconfigurationcountryaddressloadingindication ? 
        (
        <Col className='configurationauthenticationdetailsmodal-loadingindicationcontainer'>
          <Spinner animation="border" variant="secondary" />
        </Col>
        )
        :
        (
        <Col className='configurationauthenticationdetailsmodal-savebuttoncontainer'>
             <button className='configurationauthenticationdetailsmodal-savebutton' 
                     onClick={ async (evt)=> {
                        
                          const _userconfigurationcountryaddressresponssemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-responsemessage");

                          await props.userconfigurationcountryaddressloadingindicationcb((loadingindication)=> loadingindication = true);

                          axiosCreatedInstance.post("/userauthentication/changecountryaddress", {
                            $userconfigurationcountryaddress:  props.userconfigurationcountryaddress,
                            $userauthenticationid: props.user.authentications.authenticationid
                          }).then( async (response)=> {

                              const _responsedatamessage = response.data.message; 

                              switch(true) {
                                case _responsedatamessage.includes("Changing your country address was successful"):
                                  _userconfigurationcountryaddressresponssemessage[9].style.color = "dodgerblue";
                                  _userconfigurationcountryaddressresponssemessage[9].innerText = _responsedatamessage;  
                                await props.userconfigurationcountryaddressloadingindicationcb((loadingindication)=> loadingindication = false);
                                break;  
                                case _responsedatamessage.includes("Changing your country address failed. Error:"):
                                  _userconfigurationcountryaddressresponssemessage[9].style.color = "tomato";
                                  _userconfigurationcountryaddressresponssemessage[9].innerText = _responsedatamessage;  
                                await props.userconfigurationcountryaddressloadingindicationcb((loadingindication)=> loadingindication = false);
                                break;
                              }

                              
                          })

                     }}>
                save
             </button>
        </Col>
        )
      }

    </Col>
    <Col xs={12}
         md={6}
         lg={6}
         className='configurationauthenticationdetailsmodal-responsemessagecontainer'>
      <p className='configurationauthenticationdetailsmodal-responsemessage'>Response message</p>
    </Col>

    <Col xs={12}
         md={12}
         lg={12}
         className="configurationauthenticationdetailsmodal-contactmodalcontainer">
      <Col className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer">
        <Row className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailsheaderindicationcontainer">
          <Col xs={12}
               md={3}
               lg={4}
               className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailsheaderindicationcontainer-contactdetailindicationtypecontainer">
                <p className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailsheaderindicationcontainer-contactdetailindicationtypecontainer-contactdetailsheaderindication">Phone number</p>
          </Col>
                                 
          <Col xs={12}
               md={9}
               lg={8}
               className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailsheaderindicationcontainer-contactdetailbuttonsindicationscontainer"
               type="text"
               value={props.userconfigurationphonenumber}
               onChange={(evt)=> {
                  const _fieldvalue = evt.target.value
                  props.userconfigurationphonenumbercb((contactnumber)=> contactnumber = _fieldvalue);
               }}>

              <input className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailsheaderindicationcontainer-contactnumberfield"/>

              <button className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailsheaderindicationcontainer-configurationbutton"
                       onClick={()=> {
                        const _phonenumberrequirementsmodalconfirmationmodalcontainer = document.querySelectorAll(".configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer");
                        const _phonenumberrequestresponsemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailsheaderindicationcontainer-responsemessageheaderindication");
                        if (  props.userconfigurationphonenumber === "XXXX-XXXX-XXX-X" ||  props.userconfigurationphonenumber === "" || props.userconfigurationphonenumber.length < 10) {
                          _phonenumberrequestresponsemessage[0].innerText = "Make sure to provide your phone number in correct digits";
                          _phonenumberrequestresponsemessage[0].style.visibility = "visible";
                        } else {
                          _phonenumberrequirementsmodalconfirmationmodalcontainer[0].style.display = "flex";
                        }

                        
                       }}>
                 save
               </button>

              <p className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailsheaderindicationcontainer-responsemessageheaderindication">Response message</p>
          </Col>
        </Row>
      </Col>
      <Row className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer">
        <Col xs={12}
             md={12}
             lg={12}
             className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer-colcontainer">
          <p className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer-colcontainer-headerindication">transaction give away phone number contact card</p>
          <p className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer-colcontainer-headerindication"></p>
        </Col>
        <Col xs={6}
             md={4}
             lg={3}
             className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer-colcontainer">
          <p className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer-colcontainer-headerindication">Phone number: {props.userconfigurationphonenumber}</p>
        </Col>
        <Col xs={6}
             md={4}
             lg={3}
             className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer-colcontainer">
          <p className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer-colcontainer-headerindication">Gcash account number √ </p>
        </Col>
        <Col xs={6}
             md={4}
             lg={3}
             className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer-colcontainer">
          <p className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer-colcontainer-headerindication">Main active gcash account number √ </p>
        </Col>
        <Col xs={6}
             md={4}
             lg={3}
             className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer-colcontainer">
          <p className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer-colcontainer-headerindication">
          Globe, TM, Talk N Text, Smart, SUN, or DITO √ </p>
        </Col>
        <Col xs={12}
             md={12}
             lg={12}
             className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer-requirementbuttoncolcontainer">
            {
              props.userconfigurationphonenumberloadingindication ? 
              (
                <Spinner className="configurationauthenticationdetailsmodal-loadingindicationcontainer-loadingindicationspinner"
                animation="border" 
                variant="secondary" />
              )
              :
              (
                <button className="configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer-colcontainer-requirementsbutton"
                onClick={ async ()=> {

                  const _phonenumberrequirementsmodalconfirmationmodalcontainer = document.querySelectorAll(".configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailslistscontainer");
                  const _phonenumberrequestresponsemessage = document.querySelectorAll(".configurationauthenticationdetailsmodal-contactmodalcontainer-contactdetailscontainer-contactdetailsheaderindicationcontainer-responsemessageheaderindication");
                     
                  await props.userconfigurationphonenumberloadingindicationcb((loadingindication)=> loadingindication = true);

                  axiosCreatedInstance.post("/userauthentication/vanguardphonenumber/save", {
                    $userconfigurationphonenumber: props.userconfigurationphonenumber,
                    $userauthenticationid: props.user.authentications.authenticationid
                  }).then( async (response)=> {

                      const _responsedatamessage = response.data.message; 

                      switch(true) {
                        case _responsedatamessage.includes("Phone number successfully saved and set"):
                          _phonenumberrequestresponsemessage[0].style.color = "dodgerblue";
                          _phonenumberrequestresponsemessage[0].innerText = _responsedatamessage;  
                          _phonenumberrequestresponsemessage[0].style.visibility = "visible";
                        await props.userconfigurationphonenumberloadingindicationcb((loadingindication)=> loadingindication = false);
                        _phonenumberrequirementsmodalconfirmationmodalcontainer[0].style.display = "none";
                        break;  
                        case _responsedatamessage.includes("Phone number successfully changed and set"):
                          _phonenumberrequestresponsemessage[0].style.color = "dodgerblue";
                          _phonenumberrequestresponsemessage[0].innerText = _responsedatamessage;  
                          _phonenumberrequestresponsemessage[0].style.visibility = "visible";
                        await props.userconfigurationphonenumberloadingindicationcb((loadingindication)=> loadingindication = false);
                        _phonenumberrequirementsmodalconfirmationmodalcontainer[0].style.display = "none";
                        break; 
                        case _responsedatamessage.includes("Saving phone number failed. Error:"):
                          _phonenumberrequestresponsemessage[0].style.color = "tomato";
                          _phonenumberrequestresponsemessage[0].innerText = _responsedatamessage;  
                          _phonenumberrequestresponsemessage[0].style.visibility = "visible";
                        await props.userconfigurationphonenumberloadingindicationcb((loadingindication)=> loadingindication = false);
                        _phonenumberrequirementsmodalconfirmationmodalcontainer[0].style.display = "none";
                        break;
                      }

                      
                  })

                }}>
                 I have check and verified the following requirements complied using this phone number as Vanguard contact
               </button>
              )
            }
        </Col>
      </Row>
    </Col>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

  

  </Row>
 )
}

function PasswordSetup(props) {
 return (
  <Row id='passwordsetup'>
    <Col xs={12}
         md={6}
         lg={6}
         className='passwordsetup-fieldandheaderindicationcontainer'>
     <p className='passwordsetup-fieldandheaderindicationcontainer-fieldheaderindcation'>Password</p>
     <input className='passwordsetup-fieldandheaderindicationcontainer-field'
            type='password'
            value={props.userconfigurationpassword}
            onChange={(evt)=> {
              props.userconfigurationpasswordcb((password)=> password = evt.target.value);
            }}/>
     <p className='passwordsetup-fieldandheaderindicationcontainer-responsemessage'>Response message</p>
    </Col>
    <Col xs={12}
         md={6}
         lg={6}
         className='passwordsetup-fieldandheaderindicationcontainer'>

      <button className='passwordsetup-button'
              onClick={(evt)=> {

                const _passwordvisibilitytogglebutton = evt.target;
                const _passwordvalue = document.querySelectorAll(".passwordsetup-fieldandheaderindicationcontainer-field")[0];

                if ( _passwordvalue.type === "password" ) {
                  _passwordvalue.type = "text";
                  _passwordvisibilitytogglebutton.innerText = "hide";
                } else {
                  _passwordvalue.type = "password";
                  _passwordvisibilitytogglebutton.innerText = "show";
                }

              }}>show</button>
      <button className='passwordsetup-button'>
        {
         props.userconfigurationpasswordloadingindication ?
         (
          <Spinner className="configurationauthenticationdetailsmodal-loadingindicationcontainer-loadingindicationspinner"
                  animation="border" 
                  variant="secondary" />
         )
         :
         (
          <span onClick={ async (evt)=> {
                
                const _userconfigurationtpasswordrequestconfigurationresponssemessage = document.querySelectorAll(".passwordsetup-fieldandheaderindicationcontainer-responsemessage");

                await props.userconfigurationpasswordloadingindicationcb((loadingindication)=> loadingindication = true);

                axiosCreatedInstance.post("/userauthentication/passwordconfiguration", {
                  $userconfigurationpassword:  props.userconfigurationpassword,
                  $userauthenticationid: props.user.authentications.authenticationid
                }).then( async (response)=> {

                    const _responsedatamessage = response.data.message; 

                    switch(true) {
                      case _responsedatamessage.includes("Password successfully saved and set"):
                        _userconfigurationtpasswordrequestconfigurationresponssemessage[0].style.color = "skyblue";
                        _userconfigurationtpasswordrequestconfigurationresponssemessage[0].innerText = _responsedatamessage;  
                        _userconfigurationtpasswordrequestconfigurationresponssemessage[0].style.visibility = "visible";
                      await props.userconfigurationpasswordloadingindicationcb((loadingindication)=> loadingindication = false);
                      break;  
                      case _responsedatamessage.includes("Password configuration failed. Error:"):
                        _userconfigurationtpasswordrequestconfigurationresponssemessage[0].style.color = "red";
                        _userconfigurationtpasswordrequestconfigurationresponssemessage[0].innerText = _responsedatamessage;  
                        _userconfigurationtpasswordrequestconfigurationresponssemessage[0].style.visibility = "visible";
                      await props.userconfigurationpasswordloadingindicationcb((loadingindication)=> loadingindication = false);
                      break;
                    }
                    
                })

          }}>configure</span> 
         )
        }
      </button>
    </Col>
  </Row>
 )
}

function DatabasePictureContainer(props) {
return (
<Col id="databasemobileidcard-layoutcontainer">
 <Row id="databasemobileidcard"> 
   <Col id="databasemobileidcard-frontlayout">
   <p className="databasemobileidcard-frontlayout-cardidpicturescontainer-frontdetailscontainerfrontdetailsmainheaderindication">Vanguard mobile ID</p>
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
       <p className="databasemobileidcard-frontlayout-cardidpicturescontainer-frontdetailscontainerfrontdetailsheaderindication">{props.user.details.location.address.street}, {props.user.details.location.address.street}, {props.user.details.location.address.street}, {props.user.details.location.address.street}, {props.user.details.location.address.street}, {props.user.details.location.address.street}</p>
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
         <p className="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailscontainer-backdetailsheaderindication">VANGUARD ID HOLDER VANGUARD SIGNITURE</p>
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
	<p className="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailscontainer-backdetailsheaderindication">MY CONTACT NUMBER</p>
	<p className="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailscontainer-backdetailssubheaderindication">00000000000</p>
      </Col>
      <Col xs={6}
	   md={6}
	   lg={6}
	   className="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailscontainer">
	<p className="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailscontainer-backdetailsheaderindication">VANGUARD MAIN CONTACT NUMBER</p>
	<p className="databasemobileidcard-backlayout-cardidpicturescontainer-backdetailscontainer-backdetailssubheaderindication">00000000000</p>
      </Col>
     </Row>
   </Col>
 </Row>
</Col>
)
}
