const express = require('express');
const Router = require('express').Router();

const mongoose = require('mongoose');
const mongodb = require('../../lib/mongodb/database.js');

const axios = require("axios");
const timestamps = require('../../lib/timestamps/timestamps');

const data = require('../../dataschemes/xirbit/xirbitdatascheme');
const generateint32stringdatatype  = require('../../lib/generateInt32StringDataType.js');


const transactionscheme = require('../../dataschemes/transactions/product/transactionscheme.js');
const moneyandfundstransactionscheme = require('../../dataschemes/transactions/moneyandfunds/moneyandfundstransactionscheme.js');
const people = require('../../dataschemes/user/usersscheme.js');

Router.route("/manualcoordinates/cargoaddress").post( async (req, res)=> {

 try {

    const _latitude = req.body.lat;
    const _longitude = req.body.lon;

    console.log(_latitude);
    console.log(_longitude);

    const config = {
     method: 'post',
     url: `https://us1.locationiq.com/v1/reverse?key=pk.780763eb29578848f4814e90d10cf402&lat=${_latitude}&lon=${_longitude}&format=json`,
     data: {
      name: 'Pixel 6A',
      cost: 'Latest offering by Google. Clean UI',
      categoryId: 5,
      cost: 28000
    }
    }


    axios(config).then(response => {

     const _responsedata = response.data;

     console.log(_responsedata);

     res.status(200).send({
      location: {
      coordinates:  {
       latitude: _responsedata.lat,
       longitude: _responsedata.lon
      },
      address: _responsedata.address
      },
      message: "Success getting location by coordinates"
    });
         
     
    });

    console.log("Successful getting location by coordinates at purchasing manual selection of cargo address");
    
 } catch(err) {
    console.log("Error:" + " " + err)
    res.status(200).send(err);
    
 }

})

Router.route('/submitpayment').post( async (req, res)=> {

   try {

    const $date = `${timestamps.getDay()}, ${timestamps.getMonth()}, ${timestamps.getDate()}, ${timestamps.getFullYear()}, ${timestamps.getHour()}:${timestamps.getMinutes()}: ${timestamps.getSeconds()}`;

    const $purchasingtransactionid = req.body.$requesttransactiondata.transactionid;
    const $purchaserauthenticationtype = req.body.$requesttransactiondata.user.authentications.authenticationtype;
    const $purchaserauthenticationid = req.body.$requesttransactiondata.user.authentications.authenticationid;
    const $purchaserdetailssurials = req.body.$requesttransactiondata.user.details.surials;
    const $purchaserlocation = req.body.$requesttransactiondata.user.details.location.address;
    const $cargodestination = req.body.$requesttransactiondata.cargo.locations.destination;
    const $purchasingdates = req.body.$requesttransactiondata.date;
    const $purchasingproductsdetailsandlists = req.body.$requesttransactiondata.products;
    const $purchasingcargodetails = req.body.$requesttransactiondata.cargo;
    const $purchasingpaymentdetails = req.body.$requesttransactiondata.payment;
    const $purchasingtransactiongiveaway = req.body.$requesttransactiondata.transactiongiveaway;
    const $purchasertransactiongiveaway = req.body.$requesttransactiondata.transactiongiveaway.purchaser;
    const $autehnticationstransactiongiveaway = req.body.$requesttransactiondata.transactiongiveaway.people;
    const _vanguard =  req.body.$requesttransactiondata.transactiongiveaway.vanguard;

    console.log($purchaserauthenticationtype);
    console.log($purchaserauthenticationid);
    console.log($purchaserdetailssurials);
    console.log($purchaserlocation);
    console.log($cargodestination);

    await mongodb.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Database',
      autoCreate: false
    })

    const VanguardUserData =  mongoose.model('data', data);
    const newvanguarduserdata =  await VanguardUserData.findById("codetocode-1131143");

    const $currentlysaveuserauthentication = await newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === $purchaserauthenticationid);
    const $sharinguthentications = newvanguarduserdata.people;
    const $commonpublicauthentications = await newvanguarduserdata.people.filter((users)=> users.authentications.authenticationtype === "Common public");
    const $publicauthentications = await newvanguarduserdata.people.filter((users)=> users.authentications.authenticationtype === "Public");
    const $privateauthentications = await newvanguarduserdata.people.filter((users)=> users.authentications.authenticationtype ===  "Private");

    if ( $currentlysaveuserauthentication === undefined ) {
      res.status(200).send("The registration was not found in the system");
      return
    } 

    console.log($commonpublicauthentications.length);
    console.log($publicauthentications.length);
    console.log($privateauthentications.length);

    console.log("Request transaction data");
    console.log(req.body.$requesttransactiondata);
    console.log("Request transaction data / products / merchandise");
    console.log(req.body.$requesttransactiondata.products.pricesbreakdown.merchandise);
    console.log("Request transaction data / products / cargo");
    console.log(req.body.$requesttransactiondata.products.pricesbreakdown.cargo);
    console.log("Request transaction data / product / payments");
    console.log(req.body.$requesttransactiondata.products.pricesbreakdown.payment);
    console.log("Request transaction data / cargo");
    console.log(req.body.$requesttransactiondata.cargo);
    console.log("Request transaction data / payments");
    console.log(req.body.$requesttransactiondata.payments);
    console.log("Request transaction data / transaction give away");
    console.log(req.body.$requesttransactiondata.transactiongiveaway);

    switch($purchaserauthenticationtype) {
      case "Common public":

      break;
      case "Public":

       const $bank = $sharinguthentications.length;

       const $bankcondition = ( newvanguarduserdata.moneyandfunds.credits.transactiongiveaway.bank  + $autehnticationstransactiongiveaway ) / $bank;

       $currentlysaveuserauthentication.moneyandfunds.funds.amount =  $currentlysaveuserauthentication.moneyandfunds.funds.amount - req.body.$requesttransactiondata.products.pricesbreakdown.payment.funds.amount;
       $currentlysaveuserauthentication.moneyandfunds.money.amount =  $currentlysaveuserauthentication.moneyandfunds.money.amount - req.body.$requesttransactiondata.products.pricesbreakdown.payment.money.amount;

       if ( $bankcondition >= 1 ) {

         req.body.$requesttransactiondata.date.push({
           status: "Data processed",
           date: $date,
           message: "All data are gathered, preparing data's for validation, accepting the request"
         });

         req.body.$requesttransactiondata.messages.push({
           status: "This part data was processed and gathered for validation, accepting the request", 
           date: $date,
           message: "Next will be confirmation to accept, decline or request.",
         });
    
         newvanguarduserdata.marketing.products.merchandises.push(req.body.$requesttransactiondata);
         $currentlysaveuserauthentication.transactions.push(req.body.$requesttransactiondata);

         $currentlysaveuserauthentication.moneyandfunds.funds.amount = $currentlysaveuserauthentication.moneyandfunds.funds.amount + $purchasertransactiongiveaway;

         for ( let i = 0; i > $sharinguthentications.length; i++) {
            $sharinguthentications[i].moneyandfunds.funds.amount = $sharinguthentications[i].moneyandfunds.funds.amount + $bankcondition;
         }

         newvanguarduserdata.moneyandfunds.credits.vanguard.push({
          date: $purchasingdates,
          status: {
            current: [
              {
              status: "Fixed income",
              date: $date,
              message: "Fixed income for purchases deducted"
             }
            ],
            requested: [],
            confirmedandtobedelivered: [],
            delayed: [],
            delivered: [],
            confirmedasrecieved: []
          },
          transactionid: "",
          transactiontype: "Practicing",
          user: {
            authentications: req.body.$requesttransactiondata.user.authentications,
            details: req.body.$requesttransactiondata.user.details,
          }, 
          messages: [
            {
              status: "Fixed income",
              date: $date,
              message: "Fixed income for purchases deducted"
            }
          ],
          products: $purchasingproductsdetailsandlists,
          cargo: $purchasingcargodetails,
          payments: $purchasingpaymentdetails,
          transactiongiveaway: $purchasingtransactiongiveaway
         });

         newvanguarduserdata.moneyandfunds.credits.transactiongiveaway.bank = 0;

       } else {

        req.body.$requesttransactiondata.date.push({
          status: "Data processed",
          date: $date,
          message: "All data are gathered, preparing data's for validation, accepting the request"
        });

        req.body.$requesttransactiondata.messages.push({
          status: "This part data was processed and gathered for validation, accepting the request", 
          date: $date,
          message: "Next will be confirmation to accept, decline or request.",
        });
   
        newvanguarduserdata.marketing.products.merchandises.push(req.body.$requesttransactiondata);
        $currentlysaveuserauthentication.transactions.push(req.body.$requesttransactiondata);

        $currentlysaveuserauthentication.moneyandfunds.funds.amount = $currentlysaveuserauthentication.moneyandfunds.funds.amount + $purchasertransactiongiveaway;

        newvanguarduserdata.moneyandfunds.credits.vanguard.push({
          date: $purchasingdates,
          status: {
            current: [
              {
              status: "Fixed income",
              date: $date,
              message: "Fixed income for purchases deducted"
             }
            ],
            requested: [],
            confirmedandtobedelivered: [],
            delayed: [],
            delivered: [],
            confirmedasrecieved: []
          },
          transactionid: "",
          transactiontype: "Practicing",
          user: {
            authentications: req.body.$requesttransactiondata.user.authentications,
            details: req.body.$requesttransactiondata.user.details,
          }, 
          messages: [
            {
              status: "Fixed income",
              date: $date,
              message: "Fixed income for purchases deducted"
            }
          ],
          products: $purchasingproductsdetailsandlists,
          cargo: $purchasingcargodetails,
          payments: $purchasingpaymentdetails,
          transactiongiveaway: $purchasingtransactiongiveaway
         });

        newvanguarduserdata.moneyandfunds.credits.transactiongiveaway.bank = newvanguarduserdata.moneyandfunds.credits.transactiongiveaway.bank + $bankcondition;

       }

       console.log("Synced");

      break;
      case "Private":

      break;
      default: 
    }


    

   

    // console.log("People");
    //  console.log(newvanguarduserdata.people);
    //  console.log("Vanguard marketing product merchabndises transaction");
    //  console.log(newvanguarduserdata.marketing.products.merchandises);

    res.status(200).send("R E S");
 
   } catch(err) {
  
      console.log("Error: " + err);

   } finally {
 
   }
 
 });

module.exports = Router;