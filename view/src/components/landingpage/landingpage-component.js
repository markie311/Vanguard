import React, {
          useState
       } from 'react';

import { Row, 
         Col,
         Spinner } from 'react-bootstrap';

import '../../styles/landingpage/landingpage.scss';

import { timestamp } from '../lib/timestamps';

import axiosCreatedInstance from '../lib/axiosutil.js';

import Header from './header-component.js';
import LandingPageIntroduction from './landingpageintroduction-component.js';
import LPSemiFooter from './lpsemifooter-component';
import NavigationButtons from '../navigations/navigationbuttons/navigationbuttons-component.js';
import Footer from '../footer/footer-component.js';
import XirbitGraph from '../graph/xirbitgraph-component.js';
import Deposit from '../deposit/deposit-component.js';
import WidthdrawalsGrid from '../widthdrawals/widthdrawalsgrid-component.js';
import PrivacyAndPolicy from '../privacyandpolicy/privacyandpolicy-component.js';

export default function LandingPage(props) { 

 return(
  <Row id='landingpage'>
   <Row xs={12}
        md={12}
        lg={12}
        id='landingpage-navigationbargraphcontainer'
        style={{width: props.landingpagenavigationbargraphwidthproperty, left: props.landingpagenavigationbargraphleftproperty}}>
     <Col xs={12}
          md={12}
          lg={12}
          id='landingpage-navigationbargraphheadercontainer'>
      <p id='landingpage-navigationbargraphclosebutton'
         onClick={(evt)=> {
          if ( props.viewport === 'xs' ) {
              props.landingpagenavigationbargraphleftpropertycb((left)=> left === '90%' ? '0' : '-90%');
              return 
          }
              props.landingpagenavigationbargraphleftpropertycb((left)=> left === '80%' ? '0' : '-80%');
         }}>close</p>
     </Col>
     <Col xs={12}
          md={12}
          lg={12}
          id='landingpage-navigationbargraphcomponentcontainer'>
       <XirbitGraph user={props.user}
                    usercb={props.usercb}/>
     </Col>
   </Row>
   <Col id="landingpage-depositnavigationcontainer"
        style={{left: props.landingpagedepositnavigationleftproperty}}>
     <Col id="landingpage-depositnavigationcontainer-navigationcontainer">
       <Deposit />
     </Col>
     <Col id="landingpage-depositnavigationcontainer-closebuttoncontainer">
       <p id="landingpage-depositnavigationcontainer-closebuttoncontainer-closebutton"
          onClick={()=> {
            props.landingpagedepositnavigationleftpropertycb((left)=> left = '-100%');
          }}>close</p>
     </Col>
   </Col>
   <Row id='landingpage-widthdrawalsnavigationcontainer'
        style={{width: props.landingpagewidthdrwalnavigationwidthproperty, left: props.landingpagewidthdrwalnavigationleftproperty}}>
      <Col xs={12}
          md={12}
          lg={12}
          id='landingpage-widthdrawalsnavigationheadercontainer'>
        <p id='landingpage-widthdrawalsnavigationcontainerclosebutton'
           onClick={(evt)=> {
          if ( props.viewport === 'xs' ) {
            props.landingpagewidthdrwalnavigationleftpropertycb((left)=> left === '-90%' ? '0' : '-90%');
            return 
          }
            props.landingpagewidthdrwalnavigationleftpropertycb((left)=> left === '-100%' ? '0' : '-100%');
         }}>close</p>
     </Col>
     <Col id='landingpage-widthdrawalsnavigationcontainer-widthdrawalsnavigationcomponentcontainer'>
       <WidthdrawalsGrid />
     </Col>
   </Row>
   <Col xs={12}
        md={12}
        lg={12}
        id='landingpage-content'>
    <Header bargraphinterval={props.bargraphinterval}
            bargraphintervalcb={props.bargraphintervalcb}/>
    <LandingPageIntroduction />
    <LPSemiFooter />
    <NavigationButtons viewport={props.viewport}

                       landingpagenavigationbargraphleftproperty={props.landingpagenavigationbargraphleftproperty}
                       landingpagenavigationbargraphleftpropertycb={props.landingpagenavigationbargraphleftpropertycb}

                       landingpagedepositnavigationleftproperty={props.landingpagedepositnavigationleftproperty}
                       landingpagedepositnavigationleftpropertycb={props.landingpagedepositnavigationleftpropertycb}

                       landingpagewidthdrwalnavigationleftpropertycb={props.landingpagewidthdrwalnavigationleftpropertycb}

                       welcomeintroductiontopprop={props.welcomeintroductiontopprop}
                       welcomeintroductiontoppropcb={props.welcomeintroductiontoppropcb}
                       welcomeintroductionopacityprop={props.welcomeintroductionopacityprop}
                       welcomeintroductionopacitypropcb={props.welcomeintroductionopacitypropcb}/>

    <PrivacyAndPolicy />
    <Footer />
   </Col>
   <WelcomeIntroduction   maintenance={props.maintenance}
                          maintenancecb={props.maintenancecb} 
                          user={props.user}
                          usercb={props.usercb}
                          setCommonPublicAccountAuthenticationIDCookie={props.setCommonPublicAccountAuthenticationIDCookie}
                          welcomeinmtroductionmesssage={props.elcomeinmtroductionmesssage}
                          welcomeinmtroductionmesssagecb={props.welcomeinmtroductionmesssagecb}
                          welcomeintroductiontopprop={props.welcomeintroductiontopprop}
                          welcomeintroductiontoppropcb={props.welcomeintroductiontoppropcb}
                          welcomeintroductionopacityprop={props.welcomeintroductionopacityprop}
                          welcomeintroductionopacitypropcb={props.welcomeintroductionopacitypropcb}
                         />
  </Row>
 )
} 

function WelcomeIntroduction(props) {


  const [registermenowrequestloadingstate, registermenowrequestloadingstatecb] = useState(false);
  const [continuewithapracticing, continuewithapracticingcb] = useState(false);

  return (
    <Col id="vanguardwelcomeintroduction"
         style={{top: props.welcomeintroductiontopprop, opacity: props.welcomeintroductionopacitypropcb}}>
      <Col id="vanguardwelcomeintroduction-closebuttoncontainer">
      <button id="vanguardwelcomeintroduction-closebutton"
              onClick={(evt)=> {

                const _welcomeintroductionmodal = document.getElementById("vanguardwelcomeintroduction");

                const _usercookie = document.cookie;
                const _parsedcookie = _usercookie.slice(9,31);

                const _registermenowwithapracticingaccountresponsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-registermenowresponsemessage");
                const _registermenowwithacommoneraccountresponsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-continuewithapracticingaccountresponsemessage");

                if ( props.maintenance === true ) {
                } {

                }

                _registermenowwithapracticingaccountresponsemessage.style.display = "none";
                _registermenowwithacommoneraccountresponsemessage.style.display = "none";

                 props.welcomeintroductiontoppropcb((top)=> top = "-110vh");
                 props.welcomeintroductionopacitypropcb((opacity)=> opacity = "0");


             //   props.welcomeintroductiontoppropcb((top)=> top = "-110vh");
             //   props.welcomeintroductionopacitypropcb((opacity)=> opacity = "0");

             //   const _registermenowresponsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-registermenowresponsemessage");
             //   const _continuewithapracticingaccountresponsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-continuewithapracticingaccountresponsemessage");

             //   _registermenowresponsemessage.style.visibility = "hidden";
             //   _continuewithapracticingaccountresponsemessage.style.visibility = "hidden";

            //    axiosCreatedInstance.post("/userauthentication/assistcommonpublicauthentication", {
            //      $usercookie: _parsedcookie
            //    }).then( async (response)=> {

           //       const responsedata = response.data;
           //       const _responsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-registermenowresponsemessage");
                //  await props.setCommonPublicAccountAuthenticationIDCookie(responsedata.userauthentication);
           //       _responsemessage.style.visibility = "visible";
         //         _responsemessage.innerText = "You are now registered. Dont forget to have a copy of your authentication ID somewhere else for future verification. You may configure your current address and different address for other purposes like shippings, pick ups and develiries.";
         //         registermenowrequestloadingstatecb((state)=> state = false);

         //}) 

              }}>
        x
      </button>
      </Col>
      <Col id="vanguardwelcomeintroduction-welcomeintroductionheadercontainer">
        <p id="vanguardwelcomeintroduction-welcomeintroductionheader">Welcome to Vanguard public website</p>
        <p id="vanguardwelcomeintroduction-welcomeintroductionheader">You are suppose to enter a common public account holder</p>
        <p id="vanguardwelcomeintroduction-welcomeintroductionheader">Common public are determined by locations, anywhere, that the public is more of on the spot, on a topic by interests.</p>
        <p id="vanguardwelcomeintroduction-welcomeintroductionheader">Common public account's are free of registration and for a Life-time recieving transactions give aways even without maintaining a balance on your accounts</p>
        <p id="vanguardwelcomeintroduction-welcomeintroductionheader">Vanguard's public website is out and all data are with freedom to use without worrying for real transactions to a purpose of being comfortable with the system using self given data to practice.</p>

        <button id="vanguardwelcomeintroduction-welcomeintroductionheader-registermenowbutton"
                onClick={()=> {

                   const _usercookie = document.cookie;
                   const _parsedcookie = _usercookie.slice(9,36);

                   const _registermenowwithapracticingaccountresponsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-registermenowresponsemessage");
                   const _registermenowwithacommoneraccountresponsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-continuewithapracticingaccountresponsemessage");

                   if ( props.maintenance === false ) {
                    
                    registermenowrequestloadingstatecb((state)=> state = true);

                    axiosCreatedInstance.post("/userauthentication/assistpracticingaccountauthentication", {
                      $usercookie: _parsedcookie
                    }).then( async (response)=> {

                    const responsedata = response.data;
                    const responsedatamessage = responsedata.message;
                    const authenticationtype = responsedata.userauthentication.authentications.authenticationtype;

                    switch(true) {
                      case responsedatamessage.includes('Practicing account registered'):

                        await props.setCommonPublicAccountAuthenticationIDCookie(responsedata);

                       _registermenowwithacommoneraccountresponsemessage.style.display = "none";
                       _registermenowwithapracticingaccountresponsemessage.innerText = "Registered. Your practicing account is ready to use all the data on Vanguard with freedom. All activitivie's are for practicing only and the records on each transaction made are still saved on a consideration to practice more observing change's on validation's. You can change your commoner, public and private account's into a practicing account any moment without any change's on your transaction's or personal account's";
                       _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                       await registermenowrequestloadingstatecb((state)=> state = false);

                      break;
                      case responsedatamessage.includes('Practicing account registration failed'):

                      _registermenowwithacommoneraccountresponsemessage.style.display = "none";

                      _registermenowwithapracticingaccountresponsemessage.style.color = "tomato";
                      _registermenowwithapracticingaccountresponsemessage.innerText = responsedatamessage;
                      _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                      await registermenowrequestloadingstatecb((state)=> state = false);

                      break;
                      case responsedatamessage.includes('User already registered with a practicing account'):

                        _registermenowwithacommoneraccountresponsemessage.style.display = "none";
                         
                        _registermenowwithapracticingaccountresponsemessage.style.color = "orange";
                        _registermenowwithapracticingaccountresponsemessage.innerText = responsedatamessage;
                        _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                        await registermenowrequestloadingstatecb((state)=> state = false);

                      break;
                      case responsedatamessage.includes('User already was already registered on a new registration process authentication FGH, the validation failed'):

                        _registermenowwithacommoneraccountresponsemessage.style.display = "none";
                         
                        _registermenowwithapracticingaccountresponsemessage.style.color = "tomato";
                        _registermenowwithapracticingaccountresponsemessage.innerText = responsedatamessage;
                        _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                        await registermenowrequestloadingstatecb((state)=> state = false);

                      break;
                      case responsedatamessage.includes('New practicing account type FGH authentication account registration changed and saved'):

                        await props.setCommonPublicAccountAuthenticationIDCookie(responsedata);

                        _registermenowwithacommoneraccountresponsemessage.style.display = "none";
                        _registermenowwithapracticingaccountresponsemessage.innerText = "System detected that you are present on early developments of Vanguard. Your practicing account was changed following a new registration process of authencation F-G-H. Your authentication ID was only change and all the data are only possible to change whenever there is an update that what was saved, follow Vanguard's rules to record manually on papers, on databases and through messaging recieving the transacions IDS important for evaluation that is also your solid proofs. You can still use all the data on Vanguard with freedom. All activitivie's are for practicing only and the records on each transaction made are still saved on a consideration to practice more observing change's on validation's. You can change your commoner, public and private account's into a practicing account any moment without any change's on your transaction's or personal account's";
                        _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                        await registermenowrequestloadingstatecb((state)=> state = false);

                      break;
                      case responsedatamessage.includes('New practicing account type FGH authentication account registration failed'):
                        
                      _registermenowwithacommoneraccountresponsemessage.style.display = "none";
                       
                      _registermenowwithapracticingaccountresponsemessage.style.color = "tomato";
                      _registermenowwithapracticingaccountresponsemessage.innerText = responsedatamessage;
                      _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                      await registermenowrequestloadingstatecb((state)=> state = false);

                      break;
                     
                    }
                    })  
                   
                   } {

                    _registermenowwithacommoneraccountresponsemessage.style.display = "none";
                    _registermenowwithapracticingaccountresponsemessage.innerText = "Current in maintenance sample response message: Registered and authenticated. Your practicing account is ready to use the data on Vanguard with freedom. All activitivie's only for practicing. You change your commoner, public and private account's into a practicing account any moment without any change's on your transaction's";
                    _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                   }

                }}>

           {
            registermenowrequestloadingstate ? 
            (
             <Spinner animation="border" variant="dark" />
            )
            :
            (
              <span>REGISTER AND AUTHENTICATE ME NOW WITH A PRACTICING ACCOUNT TO PRACTICE THIS PUBLIC WEBSITE</span>
            )
           }

        </button>

        <p id="vanguardwelcomeintroduction-welcomeintroductionheader-registermenowresponsemessage">You are already done with this process</p>

        <button id="vanguardwelcomeintroduction-welcomeintroductionheader-continuewithapracticingaccountbutton"
                onClick={(evt)=> {

                  const _usercookie = document.cookie;
                  const _parsedcookie = _usercookie.slice(9,36);

                  const _registermenowwithapracticingaccountresponsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-registermenowresponsemessage");
                  const _registermenowwithacommoneraccountresponsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-continuewithapracticingaccountresponsemessage");

                  continuewithapracticingcb((state)=> state = true);

                   if ( props.maintenance === false ) {
                    
                    registermenowrequestloadingstatecb((state)=> state = true);

                    axiosCreatedInstance.post("/userauthentication/registercommoneraccountauthentication", {
                      $usercookie: _parsedcookie
                    }).then( async (response)=> {

                    const responsedata = response.data;
                    const responsedatamessage = responsedata.message;
                    const authenticationtype = responsedata.userauthentication.authentications.authenticationtype;

                    await continuewithapracticingcb((state)=> state = false);

                    switch(true) {
                      case responsedatamessage.includes('Commoner account registered'):

                        await props.setCommonPublicAccountAuthenticationIDCookie(responsedata);

                       _registermenowwithacommoneraccountresponsemessage.style.display = "none";
                       _registermenowwithapracticingaccountresponsemessage.innerText = "Registered. Your commoner account is ready to use all the data on Vanguard with freedom. All activitivie's and the all type of records on each transaction will always be remembered and saved. Consideration to practice more observing change's on validation's. You can change your commoner, public and private account's into a practicing account any moment without any change's on your transaction's or personal account's";
                       _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                       await continuewithapracticingcb((state)=> state = false);

                      break;
                      case responsedatamessage.includes('Commoner account registration failed'):

                      _registermenowwithacommoneraccountresponsemessage.style.display = "none";

                      _registermenowwithapracticingaccountresponsemessage.style.color = "tomato";
                      _registermenowwithapracticingaccountresponsemessage.innerText = responsedatamessage;
                      _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                      await continuewithapracticingcb((state)=> state = false);

                      break;
                      case responsedatamessage.includes('User already registered with a commoner account'):

                        _registermenowwithacommoneraccountresponsemessage.style.display = "none";
                         
                        _registermenowwithapracticingaccountresponsemessage.style.color = "orange";
                        _registermenowwithapracticingaccountresponsemessage.innerText = responsedatamessage;
                        _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                        await continuewithapracticingcb((state)=> state = false);

                      break;
                      case responsedatamessage.includes('User already was already registered on a new registration process authentication FGH, the validation failed'):

                        _registermenowwithacommoneraccountresponsemessage.style.display = "none";
                         
                        _registermenowwithapracticingaccountresponsemessage.style.color = "tomato";
                        _registermenowwithapracticingaccountresponsemessage.innerText = responsedatamessage;
                        _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                        await continuewithapracticingcb((state)=> state = false);

                      break;
                      case responsedatamessage.includes('New commoner account type FGH authentication account registration changed and saved'):

                        await props.setCommonPublicAccountAuthenticationIDCookie(responsedata);

                        _registermenowwithacommoneraccountresponsemessage.style.display = "none";
                        _registermenowwithapracticingaccountresponsemessage.innerText = "System detected that you are present on early developments of Vanguard. Your commoner account was changed following a new registration process of authencation F-G-H. Your authentication ID was only change and all the data are only possible to change whenever there is an update that what was saved, follow Vanguard's rules to record manually on papers, on databases and through messaging recieving the transacions IDS important for evaluation that is also your solid proofs. You can still use all the data on Vanguard with freedom. All activitivie's are for practicing only and the records on each transaction made are still saved on a consideration to practice more observing change's on validation's. You can change your commoner, public and private account's into a practicing account any moment without any change's on your transaction's or personal account's";
                        _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                        await continuewithapracticingcb((state)=> state = false);

                      break;
                      case responsedatamessage.includes('New commoner account type FGH authentication account registration failed'):
                        
                      _registermenowwithacommoneraccountresponsemessage.style.display = "none";
                       
                      _registermenowwithapracticingaccountresponsemessage.style.color = "tomato";
                      _registermenowwithapracticingaccountresponsemessage.innerText = responsedatamessage;
                      _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                      await continuewithapracticingcb((state)=> state = false);

                      break;
                     
                    }
                    })  
                   
                   } {

                     _registermenowwithapracticingaccountresponsemessage.style.display = "none";
                     _registermenowwithacommoneraccountresponsemessage.innerText = "Current in maintenance sample response message: You are now registered and authenticated as a commoner. Your transaction's are real and all the change's made will be saved and will have a record authenticated physically and following Vanguard's authentication's policie's";
                    _registermenowwithacommoneraccountresponsemessage.style.display = "block";

                   }

                }}>
          {
           continuewithapracticing ?
           (
            <Spinner animation="border" variant="dark" />
           )
           :
           (
            <span>
              REGISTER AND AUTHENTICATE ME NOW WITH A COMMONER ACCOUNT PRACTICING WHILE USING THIS PUBLIC WEBSITE ON IT'S REAL TRANSACTIONS  
            </span>
           )

          }
        </button>

        <p id="vanguardwelcomeintroduction-welcomeintroductionheader-continuewithapracticingaccountresponsemessage">You can close the modal now</p>

      </Col>
    </Col>
  )

}