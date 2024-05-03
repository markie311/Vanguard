const express = require('express');
const Router = require('express').Router();

const mongoose = require('mongoose');
const mongodb = require('../../lib/mongodb/database.js');

const data = require('../../dataschemes/xirbit/xirbitdatascheme');
const timestamps = require('../../lib/timestamps/timestamps');
const generateint32stringdatatype  = require('../../lib/generateInt32StringDataType.js');

Router.route("/assistcommonpublicauthentication").post( async (req,res)=> {

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
    
    const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _user);
    const newvanguardpeopleuserdatasequence = await newvanguarduserdata.people.length;

    const userscheme = {
      authentications: {
      authenticationtype: 'Common public',
      authenticationid: _userauthenticationid,
      password: {
        set: false,
        password: ''
      }
      },
      details: {  
       surials: {
        firstname: `${"Commoner" + " " + newvanguardpeopleuserdatasequence + " " + "FIRST NAME"}`,
        middlename: `${"Commoner" + " " + newvanguardpeopleuserdatasequence + " " + "MIDDLE NAME"}`,
        lastname: `${"Commoner" + " " + newvanguardpeopleuserdatasequence + " " + "LAST NAME"}`,
        nickname: `${"Commoner" + " " + newvanguardpeopleuserdatasequence + " " + "NICKNAME"}`
       },
       location: {
         address: {
          street: 'Current address',
          baranggay: 'Current address',
          trademark: 'Current address',
          city: 'Current address',
          province: 'Current address',
          country: 'Current address'
        },
        shipment: {
          type: '',
          location: {
           street: 'Shipment address',
           baranggay: 'Shipment address',
           trademark: 'Shipment address',
           city: 'Shipment address',
           province: 'Shipment address',
           country: 'Shipment address'
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
    
    const _userauthentication = userscheme;

    if ( _user !== "" ) {

      res.status(200).send({
                            userauthentication: _userauthentication,
                            message: "Authenticated"
                          });

       console.log("Twice authentication account already registered");

    } else {

      newvanguarduserdata.people.push(userscheme);
    
      await newvanguarduserdata.save()
        .then(async(response)=> {
          console.log('Public authentication saved');
          res.status(200).send({ 
                                userauthentication: _userauthentication,
                                message: "Public authentication saved"
                               });
        })

    }

  

  } catch(err) {

     console.log("Error while assisting common public registration and registration:" + "\n" + err)

  } finally {
  }

})

Router.route("/assistcommonpublicauthentication/practicingaccount").post( async (req, res)=> {

try {

  const _user = req.body.$usercookie;
  const _userauthenticationid = `${timestamps.dateNow()}-${generateint32stringdatatype(8)}`;

  if ( _user !== "" ) {

    await mongodb.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Database',
      autoCreate: false
    })
  
    const VanguardUserData =  mongoose.model('data', data);
    const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

    const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _user);
  
    const _currentlysaveuserauthenticationauthenticationtype = _currentlysaveuserauthentication.authentications.authenticationtype;
   
    const newvanguardpeopleuserdatasequence = await newvanguarduserdata.people.length;

    
     switch(_currentlysaveuserauthenticationauthenticationtype) {
      case "Common public":
        res.status(200).send(_currentlysaveuserauthentication);
        console.log("Twice authentication account already registered");
      break;
      case "Public":
        res.status(200).send(_currentlysaveuserauthentication);
        console.log("Twice authentication account already registered");
      break;
      case "Private":
        res.status(200).send(_currentlysaveuserauthentication);
        console.log("Twice authentication account already registered");
      break;
      case "Practicing account":
        res.status(200).send(_currentlysaveuserauthentication);
        console.log("Twice authentication account already registered");
      break;
      default:
     }

  } else {

    await mongodb.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Database',
      autoCreate: false
    })

    const VanguardUserData =  mongoose.model('data', data);
    const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

    const newvanguardpeopleuserdatasequence = await newvanguarduserdata.people.length;

    const userscheme = {
      authentications: {
      authenticationtype: 'Practicing account',
      authenticationid: _userauthenticationid,
      password: {
        set: false,
        password: ''
      }
      },
      details: {  
       surials: {
        firstname: `${"Practicing" + " " + newvanguardpeopleuserdatasequence + " " + "FIRST NAME"}`,
        middlename: `${"Practicing" + " " + newvanguardpeopleuserdatasequence + " " + "MIDDLE NAME"}`,
        lastname: `${"Practicing" + " " + newvanguardpeopleuserdatasequence + " " + "LAST NAME"}`,
        nickname: `${"Practicing" + " " + newvanguardpeopleuserdatasequence + " " + "NICKNAME"}`
       },
       location: {
         address: {
          street: 'Current address',
          baranggay: 'Current address',
          trademark: 'Current address',
          city: 'Current address',
          province: 'Current address',
          country: 'Current address'
        },
        shipment: {
          type: '',
          location: {
           street: 'Shipment address',
           baranggay: 'Shipment address',
           trademark: 'Shipment address',
           city: 'Shipment address',
           province: 'Shipment address',
           country: 'Shipment address'
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
  
    await newvanguarduserdata.save()
      .then(async(response)=> {
        const _userauthentication = userscheme;
        console.log("Practicing account saved");
        res.status(200).send(_userauthentication);
      })
  }

} catch(err) {

} finally {
 await mongoose.connection.close()
}

})

Router.route("/").post(async (req, res)=> {
  
  try {

    await mongodb.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Database',
      autoCreate: false
    })

    const VanguardUserData =  mongoose.model('data', data);
    const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");


  } catch(err) {

  } finally { 

  }

})

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
          console.log('Common public registration authenticated and saved');
          res.status(200).send(_userauthentication);
        })
      }

     } catch(err) {
      console.log('Error on getting UI authentication data' + '\n' + err);
     }

})

module.exports = Router;

