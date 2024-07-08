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
   <WelcomeIntroduction    user={props.user}
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

                 // alert("Error: Assisting common public authentications as a practicing account")
                 const _registermenowwithapracticingaccountresponsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-registermenowresponsemessage");
                 const _registermenowwithacommoneraccountresponsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-continuewithapracticingaccountresponsemessage");

                 _registermenowwithacommoneraccountresponsemessage.style.display = "none";
                 _registermenowwithapracticingaccountresponsemessage.innerText = "Registered and authenticated. Your practicing account is ready to use the data on Vanguard with freedom. All activitivie's only for practicing. You change your commoner, public and private account's into a practicing account any moment without any change's on your transaction's";
                 _registermenowwithapracticingaccountresponsemessage.style.display = "block";

                  {/*
                  const _usercookie = document.cookie;
                  const _parsedcookie = _usercookie.slice(9,31);

                  registermenowrequestloadingstatecb((state)=> state = true);

                  axiosCreatedInstance.post("/userauthentication/assistcommonpublicauthentication", {
                    $usercookie: _parsedcookie
                  }).then( async (response)=> {

                   const responsedata = response.data;
                   const responsedatamessage = responsedata.message;
                   const authenticationtype = responsedata.userauthentication.authentications.authenticationtype;

                   if ( responsedatamessage === "Authenticated" ) {

                      switch(authenticationtype) {
                        case "Common public": 
                          const _responsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-registermenowresponsemessage");
                          _responsemessage.style.visibility = "visible";
                          props.usercb((user)=> user = responsedata)
                          _responsemessage.innerText = "You are already authenticated as a Common public account holder. This registration type is for a Life-time. Dont forget to have a copy of your authentication ID somewhere else for future verification. You may configure your current address and different address for other purposes like shippings, pick ups and develiries.";
                          registermenowrequestloadingstatecb((state)=> state = false);
                        break;
                     //   case "Public":
                     //   _responsemessage.style.visibiliy = "visible";
                     //   _responsemessage.innerText = "You are already authenticated as a Common public account holder. This registration type is for a Life-time Dont forget to have a copy of your authentication ID somewhere else for future verification. You may configure your current address and different address for other purposes like shippings, pick ups and develiries.";
                     //    registermenowrequestloadingstatecb((state)=> state = false);
                     //    break;
                     //    case "Private": 
                    //     break;
                    //     case "Practicing account": 
                    //     break;
                        default:

                      }

                   } else {

                     const _responsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-registermenowresponsemessage");
                     _responsemessage.style.visibility = "visible";
                     props.usercb((user)=> user = responsedata)
                     _responsemessage.innerText = "You are now registered as a Common Public account holder having it's authentication. Dont forget to have a copy of your authentication ID somewhere else for future verification. You may configure your current address and different address for other purposes like shippings, pick ups and develiries.";
                     registermenowrequestloadingstatecb((state)=> state = false);
                      await props.setCommonPublicAccountAuthenticationIDCookie(responsedata.userauthentication);

                   }

                  })  
                  */}

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

                 // alert("Error: Assisting common public authentications as a practicing account")
                  const _registermenowwithapracticingaccountresponsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-registermenowresponsemessage");
                  const _registermenowwithacommoneraccountresponsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-continuewithapracticingaccountresponsemessage");

                  _registermenowwithapracticingaccountresponsemessage.style.display = "none";
                  _registermenowwithacommoneraccountresponsemessage.innerText = "You are now registered and authenticated as a commoner. Your transaction's are real and all the change's made will be saved and will have a record authenticated physically and following Vanguard's authentication's policie's";
                  _registermenowwithacommoneraccountresponsemessage.style.display = "block";

                  {/*
                  continuewithapracticingcb((state)=> state = true);

                  const _usercookie = document.cookie;
                  const _parsedcookie = _usercookie.slice(9,31);

                  axiosCreatedInstance.post("/userauthentication/assistcommonpublicauthentication/practicingaccount", {
                    $usercookie: _parsedcookie  
                   })
                  .then( async (response)=> {

                  const responsedata = response.data;
                  const _responsemessage = document.getElementById("vanguardwelcomeintroduction-welcomeintroductionheader-continuewithapracticingaccountresponsemessage");
                 
                    switch(responsedata.authentications.authenticationtype) {
                       case "Common public": 
                        props.usercb((user)=> user = responsedata)
                        _responsemessage.style.visibility = "visible";
                        _responsemessage.innerText = "You are already authenticated as a common public account holder and it's registration is for a Life-time. No need to get a practicing account.";
                        continuewithapracticingcb((state)=> state = false);
                       break;
                       case "Public":
                        // _responsemessage.style.visibility = "visible";
                        // _responsemessage.innerText = "You are already authenticated as a common public account holder and it's registration is for a Life-time. No need to get a practicing account.";
                        // continuewithapracticingcb((state)=> state = false);
                       break;
                       case "Private":
                        //  _responsemessage.style.visibility = "visible";
                        //    _responsemessage.innerText = "You are already authenticated as a common public account holder and it's registration is for a Life-time. No need to get a practicing account.";
                        //  continuewithapracticingcb((state)=> state = false);
                       break;
                       case "Practicing account":
                          props.usercb((user)=> user = responsedata)
                          continuewithapracticingcb((state)=> state = false);
                          _responsemessage.style.visibility = "visible";
                          _responsemessage.innerText = "You now got a practicing account. There a lot to be observed and take your moments doing it specially on mappings. Enjoy practicing transactions on purchases and widthdrawal buttons.";
                       break;
                      default:
                    }

                    await props.setCommonPublicAccountAuthenticationIDCookie(responsedata);

                    }) 
                  */}

                }}>
          {
           continuewithapracticing ?
           (
            <Spinner animation="border" variant="dark" />
           )
           :
           (
            <span>
              REGISTER AND AUTHENTICATE ME NOW WITH A COMMONER ACCOUNT WHILE PRACTICING AND USING THIS PUBLIC WEBSITE
            </span>
           )

          }
        </button>

        <p id="vanguardwelcomeintroduction-welcomeintroductionheader-continuewithapracticingaccountresponsemessage">You can close the modal now</p>

      </Col>
    </Col>
  )

}