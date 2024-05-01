const express = require('express');
const Router = require('express').Router();

const mongoose = require('mongoose');
const mongodb = require('../../lib/mongodb/database.js');

const data = require('../../dataschemes/xirbit/xirbitdatascheme');
const timestamps = require('../../lib/timestamps/timestamps');
const generateint32stringdatatype  = require('../../lib/generateInt32StringDataType.js');

Router.route('/commonpublicaccountauthentication').get(async(req, res)=> {

  const $usercookie = req.body.usercookie;

   try {

    await mongodb.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Database',
      autoCreate: false
    })

    const VanguardUserData =  mongoose.model('data', data);
    const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

    if (  $usercookie === " " ) {

     return res.sendStatus(200).send("Assist common public account authentication and it's registration");

    } else {

      console.log(newvanguarduserdata)
      const _currentlysaveuserauthenticationlength = newvanguarduserdata.people.length;
      console.log(_currentlysaveuserauthenticationlength) 

      return res.send(_currentlysaveuserauthenticationlength.toString());

    }

   } catch(err) {

     console.log("Error on page load up, getting all common public account authentications length:" + "\n" + err);

   } finally {

     await mongoose.connection.close();

   }

})

Router.route('/authentication').post(async(req,res)=> {
 
  const _user = req.body.$usercookie;
  const _userauthenticationid = `${timestamps.dateNow()}-${generateint32stringdatatype(8)}`;

  try {

    await mongodb.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Database',
      autoCreate: false
    })

    const VanguardUserData =  mongoose.model('data', data);
    const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

    if ( _user !== '' ) { 

        const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _user);
        res.status(200).send(_currentlysaveuserauthentication);
        console.log('User authentication data was sent to UI');

    } else {

      const userscheme = {
        authentications: {
        authenticationtype: 'Public',
        authenticationid: _userauthenticationid,
        password: {
          set: false,
          password: ''
        }
        },
        details: {
         surials: {
          firstname: '',
          middlename: '',
          lastname: '',
          nickname: ''
         },
         location: {
           address: {
            street: '',
            baranggay: '',
            trademark: '',
            city: '',
            province: '',
            country: ''
          },
          shipment: {
            type: '',
            location: {
             street: '',
             baranggay: '',
             trademark: '',
             city: '',
             province: '',
             country: ''
            }
          }
        }
        },
        moneyandfunds: {
          money: {
           amount: 0,
           history: []
          },
          funds: {
           amount: 0,
           history: []
          }
        },
        transactions: [],
        purchases: []
      }
    
      newvanguarduserdata.people.push(userscheme);
    
      newvanguarduserdata.save()
        .then( async (response)=> {
          const _userauthentication = userscheme;
          console.log('Public authentication saved');
          res.status(200).send(_userauthentication);
        })
      }

     } catch(err) {
      console.log('Error on getting UI authentication data' + '\n' + err);
     }

})

module.exports = Router;

