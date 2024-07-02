import React, {
    useState,
    useCallback
  } from 'react';

import { Row, 
         Col,
         Spinner } from 'react-bootstrap';

import '../../styles/deposit/deposit.scss';

export default function Deposit() {

 const [deposittransactiontype, deposittransactiontypecb] = useState("");

 const [depositnotifythetelleraboutthistransaction, depositnotifythetelleraboutthistransactioncb] = useState(false);
 const [depositnotifythetellerthatyouwillalreadysendtheamount, depositnotifythetellerthatyouwillalreadysendtheamountcb] = useState(false);

 return (
   <Col id="deposit">
    <Col id="deposit-headerindicationscontainer">
      <p id="deposit-mainheaderindication">Deposit to Vanguard using the account's below</p>
      <p className="deposit-subheaderindication">Accounts</p>
      <p className="deposit-headerindication">● Gcash account number 09539959025</p>
    </Col>
    <Col id="deposit-depositconfigurationcontainer">
      <Col id="deposit-depositconfigurationcontainer-depositaccountsbuttonscontainer">
        <p className="deposit-secondarymainheaderindication">CHOOSE TYPE OF TRANSACTION</p>
        <Col id="deposit-depositconfigurationcontainer-depositaccountsbuttonscontainer-buttonscontainer">
         <button id="deposit-depositconfigurationcontainer-depositaccountsbuttonscontainer-button"
                 onClick={()=> {
                  const _deposittoggledtransactiontyperesponsmessage = document.querySelector('#deposit-choosetypeoftransactionheaderindication');
                  deposittransactiontypecb((deposittransactiontype)=> deposittransactiontype = "Gcash");
                  _deposittoggledtransactiontyperesponsmessage.innerText = "Gcash account number:  0 9 5 3 9 9 5 9 0 2 5";
                 }}>Gcash</button>
         <button id="deposit-depositconfigurationcontainer-depositaccountsbuttonscontainer-button"
                   onClick={()=> {
                    const _deposittoggledtransactiontyperesponsmessage = document.querySelector('#deposit-choosetypeoftransactionheaderindication');
                    deposittransactiontypecb((deposittransactiontype)=> deposittransactiontype = "Walk in");
                    _deposittoggledtransactiontyperesponsmessage.innerText = "Input credentials";
                   }} >
             Walk in
         </button>
         <button id="deposit-depositconfigurationcontainer-depositaccountsbuttonscontainer-button"
                   onClick={()=> {
                    const _deposittoggledtransactiontyperesponsmessage = document.querySelector('#deposit-choosetypeoftransactionheaderindication');
                    deposittransactiontypecb((deposittransactiontype)=> deposittransactiontype = "");
                    _deposittoggledtransactiontyperesponsmessage.innerText = "Response message: Choose transaction";
                   }} >
             Cancel
         </button>
        </Col>
        <p id="deposit-choosetypeoftransactionheaderindication">Gcash account number:  0 9 5 3 9 9 5 9 0 2 5</p>
      </Col>
      <Col id="deposit-depositconfigurationcontainer-deposittransactiontypecontainer">
        <DepositTransactionType deposittransactiontype={deposittransactiontype}
                                deposittransactiontypecb={deposittransactiontypecb}
                                
                                depositnotifythetelleraboutthistransaction={depositnotifythetelleraboutthistransaction}
                                depositnotifythetelleraboutthistransactioncb={depositnotifythetelleraboutthistransactioncb}
                                
                                depositnotifythetellerthatyouwillalreadysendtheamount={depositnotifythetellerthatyouwillalreadysendtheamount}
                                depositnotifythetellerthatyouwillalreadysendtheamountcb={depositnotifythetellerthatyouwillalreadysendtheamountcb}/>
      </Col>
    </Col>
   </Col>
 )

}

function DepositTransactionType(props) {  
 if ( props.deposittransactiontype === "" ) {
 return (
  <Col id="deposittransactiontypecontainer">
    <p className="deposittransactiontypecontainer-headerindication">CHOOSE TRANSACTION</p>
  </Col>
 )
 }
 if ( props.deposittransactiontype === "Gcash" ) {
  return (
   <Col id="deposittransactiontypecontainer">
    <Col id="deposittransactiontypecontainer-processesheaderindicationscontainer">
     <p className="deposittransactiontypecontainer-headerindication">Que: 0 people</p>
     <p className="deposittransactiontypecontainer-headerindication">Processing: 0 people</p>
     <p className="deposittransactiontypecontainer-headerindication">Processed: 0 of 0 total people ( deposit requests )</p>
     <p className="deposittransactiontypecontainer-headerindication">Serving: 0 count</p>
     <p className="deposittransactiontypecontainer-headerindication">Your count: 0 count</p>
    </Col>
    <Col id="deposittransactiontypecontainer-configurationbuttoncontainer">
      <button id="deposittransactiontypecontainer-configurationbuttoncontainer-notifythetelleraboutthisrequest"
              onClick={()=> {
        props.depositnotifythetelleraboutthistransactioncb((state)=> state = true);
      }}>
      {
        props.depositnotifythetelleraboutthistransaction ? 
        (
          <Spinner animation="border" variant="light" />
        )
        : 
        (
          <span>NOTIFY THE TELLER YOU HAVE A DEPOSIT TRANSACTION</span>
        )
      }
      </button>

      <p id="deposittransactiontypecontainer-depositconfigurationresponsemessageheaderindication">
        The teller was notified. Make sure that your Vanguard phone number and Gcash account number is just the same before proceeding to the next process.
      </p>
      
      <button id="deposittransactiontypecontainer-configurationbuttoncontainer-notifythetellerthatyouwillalreadysendtheamount"
              onClick={()=> {
        props.depositnotifythetelleraboutthistransactioncb((state)=> state = true);
      }}>
      {
        props.depositnotifythetellerthatyouwillalreadysendtheamount ? 
        (
          <Spinner animation="border" variant="light" />
        )
        : 
        (
          <span>NOTIFY THE TELLER YOU WILL ALREADY SEND THE AMOUNT USING YOUR GCASH ACCOUNT NUMBER</span>
        )
      }
      </button>
    </Col>
   </Col>
  )
  }
  if ( props.deposittransactiontype === "Walk in" ) {
    return (
     <Col id="deposittransactiontypecontainer">
       <p className="deposittransactiontypecontainer-headerindication">Walk in</p>
     </Col>
    )
 }
}