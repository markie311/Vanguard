const express = require('express');
const Router = require('express').Router();

const mongoose = require('mongoose');
const mongodb = require('../../lib/mongodb/database.js');

const xirbitdata = require('../../dataschemes/xirbit/xirbitdatascheme');
const generateint32stringdatatype  = require('../../lib/generateInt32StringDataType.js');

//const datascheme = require('../dataschemes/data/dataschemes.js');
//const productscheme = require('../dataschemes/product/productscheme.js');

Router.route('/requests').post( async(req, res)=> {
 
 const _user = req.body.user;
 const _purchasing = req.body.purchasing;

 let _nonmrnproducts = _purchasing.filter((products)=> { return products.details.product.xirbitcategory === 'Non-mrn' } );
 let _mrnproducts = _purchasing.filter((products)=> { return products.details.product.xirbitcategory === 'Mrn'} );

 if ( _nonmrnproducts === undefined ) {
  _nonmrnproducts = 0
 } else {
  _nonmrnproducts =  _nonmrnproducts.length 
 }
 if ( _mrnproducts === undefined ) {
  _mrnproducts = 0
 } else {
  _mrnproducts = _mrnproducts.length
 }

 const _operations = _purchasing.map((purchases,idx)=> {
   return {
    product: purchases.details.product.name,
    operations: purchases.locations.operations
   }
 })

 //console.log(JSON.stringify(_operations));
 const _fpurchases = _purchasing.find((merchandise)=> merchandise.authentications.producttype === 'Food' );
 const _mrnpurchases = _purchasing.find((merchandise)=> merchandise.authentications.producttype !== 'Food' );

 let _transactionid = null;
 const _userprivateauthenticationid =  _user.authentications.authenticationid.slice(-5);

 if ( _fpurchases !== undefined && _mrnpurchases !== undefined ) {

  _transactionid = `f&mrn-${_user.authentications.authenticationid}-${generateint32stringdatatype(5)}`;

 } else {

    if ( _fpurchases !== undefined && _mrnpurchases === undefined && _purchasing.length > 0 ) {
      _transactionid = `fa-${_user.authentications.authenticationid}-${generateint32stringdatatype(5)}`;
    } 
    if ( _fpurchases !== undefined && _mrnpurchases === undefined && _purchasing.length === 1 ) {
      _transactionid = `${_purchasing[0].details.product.name}-${_user.authentications.authenticationid}-${generateint32stringdatatype(5)}`;
    }
    if ( _fpurchases === undefined && _mrnpurchases !== undefined && _purchasing.length > 0 ) {
      _transactionid = `srtsndmrns-${_user.authentications.authenticationid}-${generateint32stringdatatype(5)}`;
    }
    if ( _fpurchases === undefined && _mrnpurchases !== undefined && _purchasing.length === 1 ) {
      _transactionid = `${_purchasing[0].details.product.name}-${_user.authentications.authenticationid}-${generateint32stringdatatype(5)}`;
    }

 }

 try { 

   await mongodb.connect(process.env.ATLAS_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     dbName: 'Database',
     autoCreate: false
   })
  
   const Xirbitdata = mongoose.model('data', xirbitdata);
   const newxirbitdata = await Xirbitdata.findById("codetocode-1131143");

   console.log(newxirbitdata)
   
   const $request = {
    request: {
     asked: 'Request/Purchasing',
     authentication: _user.authentications.authenticationtype
    },
    authentication: {
      transactionid: _transactionid,
     _userprivateauthenticationid: _userprivateauthenticationid
    },
    status: {
     now: true,
     recent: false
    },
    user: {
     userauthenticationid: _user.authentications.authenticationid,
    },
    location: {
     user: {
      street:  _user.details.location.street,
      baranggay:  _user.details.location.baranggay,
      trademark:  _user.details.location.trademark,
      city:  _user.details.location.city,
      province: _user.details.location.province,
      country:  _user.details.location.country
     },
     destination: {
      street:  _user.details.location.shipment.location.street,
      baranggay:  _user.details.location.shipment.location.baranggay,
      trademark:  _user.details.location.shipment.location.trademark,
      city:  _user.details.location.shipment.location.city,
      province: _user.details.location.shipment.location.province,
      country:  _user.details.location.shipment.location.country
     },
     operations: _operations
    },
    message: {
     subject: 'Request to purchase',
     message: `To ${_user.details.location.street}, ${_user.details.location.baranggay}, ${_user.details.location.trademark}, ${_user.details.location.city}, ${_user.details.location.province}, ${_user.details.location.country} + '\n' + Pass to recent if the products will be available after 1 day delay for shipments, deliveries and door to door service.`,
    },
    data: {
     nonmrn:  _nonmrnproducts,
     mrn:  _mrnproducts,
     products: _purchasing
    }
   }

   newxirbitdata.requests.now.requests.data.push($request);
   newxirbitdata.requests.now.requests.count = Number(newxirbitdata.requests.now.requests.count) + 1;

   newxirbitdata.save()
   .then( async (response)=> {
     res.status(200).send('Request to purchasing was sent');
     console.log('Request to purchasing was sent');
   })

 } catch(err) {
    console.log('Error sending a request to purchasing' + '\n' + err)
 }

})


module.exports = Router;