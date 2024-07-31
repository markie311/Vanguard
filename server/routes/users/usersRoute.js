const express = require('express');
const Router = require('express').Router();

const mongoose = require('mongoose');
const mongodb = require('../../lib/mongodb/database.js');

const data = require('../../dataschemes/xirbit/xirbitdatascheme');
const timestamps = require('../../lib/timestamps/timestamps');
const generateint32stringdatatype  = require('../../lib/generateInt32StringDataType.js');

/// registration / assisting practicing account
Router.route("/assistpracticingaccountauthentication").post( async (req,res)=> {

  const _user = req.body.$usercookie;
  const _userauthenticationid = `${timestamps.dateNow()}-${generateint32stringdatatype(8)}-FGH`;
  const _date = `${timestamps.getDay()}, ${timestamps.getMonth()}, ${timestamps.getDate()},${timestamps.getFullYear()}, ${timestamps.getHour()}:${timestamps.getMinutes()}:${timestamps.getSeconds()},`
  
 
  if ( _user === "" ) {

    const _upgradedregistrations = {
      date: _date,
      status: [
       {
        date: _date,
        status: '',
        type: 'Practicing account authentication'
       }
      ],
      registration: {
        type: 'Practicing account',
        registrationspan: 'life-time',
        authenticationspan: 'life-time'
      },
      messages: [
        {
          date: _date,
          status: 'Practicing account authenticated',
          payments: {
            amount: 0,
            currency: "undefined/practicing account authentication",
            paymenttype: 'undefined/practicing account authentication'
          }
        }
      ]
    }

    const _practicingaccount = {
      authentications: {
       authenticationtype: 'Practicing account',
       authenticationid: _userauthenticationid,
       privateauthenticationkey: [],
       password: {
        set: false,
        password: 'password'
       }
      },
      details: {
       surials: {
        firstname: 'Edit your practicing account firstname' ,
        middlename: 'Edit your practicing account middlename',
        lastname: 'Edit your practicing account lastname',
        nickname: 'Edit your practicing account nickname',
       },
       location: {
         address: {
          street: 'Edit your practicing account current street address',
          baranggay: 'Edit your practicing account current baranggay address',
          trademark: 'Edit your practicing account current trademark address',
          city: 'Edit your practicing account current city address',
          province: 'Edit your practicing account current province address',
          country: 'Edit your practicing account current country address',
          coordinates: {
           lat: 0,
           lon: 0
          }
         },
         shipment: {
           type: '',
           address: {
             street: 'Edit your practicing account current shipping street address',
             baranggay: 'Edit your practicing account current shipping baranggay address',
             trademark: 'Edit your practicing account current shipping trademark address',
             city: 'Edit your practicing account current shipping city address',
             province: 'Edit your practicing account current shipping province address',
             country: 'Edit your practicing account current shipping country address',
             coordinates: {
               lat: 0,
               lon: 0
             }
           }
         }
       },
       contact: []
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
      purchases: {
        current: [],
        last15days: [],
        history: []
      },
      upgradedregistrations: [_upgradedregistrations] 
    };

    try {

      await mongodb.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'Database',
        autoCreate: false
      })

      const VanguardUserData =  mongoose.model('data', data);
      const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

      newvanguarduserdata.people.push(_practicingaccount);

      await newvanguarduserdata.save()
      .then(async(response)=> {

        console.log('Practicing account registered');

        res.status(200).send({
          userauthentication: _practicingaccount,
          message: "Practicing account registered"
        });

      }) 

    } catch(err) {

      const _upgradedregistrationsregistrationfaildefaultaccount = {
        date: _date,
        status: [
         {
          date: _date,
          status: '',
          type: 'Practicing account authentication'
         }
        ],
        registration: {
          type: 'Practicing account',
          registrationspan: 'life-time',
          authenticationspan: 'life-time'
        },
        messages: [
          {
            date: _date,
            status: 'Practicing account authenticated',
            payments: {
              amount: 0,
              currency: "undefined/practicing account authentication",
              paymenttype: 'undefined/practicing account authentication'
            }
          }
        ]
      }
  
      const _practicingaccountregistrationfaildefaultaccount = {
        authentications: {
         authenticationtype: 'Practicing account',
         authenticationid: _userauthenticationid,
         privateauthenticationkey: [],
         password: {
          set: false,
          password: 'password'
         }
        },
        details: {
         surials: {
          firstname: 'Edit your practicing account firstname' ,
          middlename: 'Edit your practicing account middlename',
          lastname: 'Edit your practicing account lastname',
          nickname: 'Edit your practicing account nickname',
         },
         location: {
           address: {
            street: 'Edit your practicing account current street address',
            baranggay: 'Edit your practicing account current baranggay address',
            trademark: 'Edit your practicing account current trademark address',
            city: 'Edit your practicing account current city address',
            province: 'Edit your practicing account current province address',
            country: 'Edit your practicing account current country address',
            coordinates: {
             lat: 0,
             lon: 0
            }
           },
           shipment: {
             type: 'Edit your practicing account current shipping street address',
             address: {
               street: 'Edit your practicing account current shipping street address',
               baranggay: 'Edit your practicing account current shipping baranggay address',
               trademark: 'Edit your practicing account current shipping trademark address',
               city: 'Edit your practicing account current shipping city address',
               province: 'Edit your practicing account current shipping province address',
               country: 'Edit your practicing account current shipping country address',
               coordinates: {
                 lat: 0,
                 lon: 0
               }
             }
           }
         },
         contact: []
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
        purchases: {
          current: [ ],
          last15days: [],
          history: [ ]
        },
        upgradedregistrations: [_upgradedregistrationsregistrationfaildefaultaccount] 
      };

      res.status(200).send({
        userauthentication: _practicingaccountregistrationfaildefaultaccount,
        message: `Practicing account registration failed: ${err}`
      });

      console.log(`Practicing account registration failed: ${err}`);

    } 

  } else {

     /// condition learning the user account if it was using an old version of registration process or not.
     /// FGH code, new code for new registrations stated on authentication ID'S on newer version of a regitrations process
     if ( _user.includes('FGH') === true ) {

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

        const _tryfghnewresgistrationtypeupgradedregistrations = {
          date: _date,
          status: [
           {
            date: _date,
            status: '',
            type: 'Practicing account authentication'
           }
          ],
          registration: {
            type: 'Practicing account',
            registrationspan: 'life-time',
            authenticationspan: 'life-time'
          },
          messages: [
            {
              date: _date,
              status: 'Practicing account authenticated',
              payments: {
                amount: 0,
                currency: "undefined/practicing account authentication",
                paymenttype: 'undefined/practicing account authentication'
              }
            }
          ]
        }
    
        const _tryfghnewresgistrationtypepracticingaccount = {
          authentications: {
           authenticationtype:  _currentlysaveuserauthentication.authentications.authenticationtytpe,
           authenticationid: _currentlysaveuserauthentication.authentications.authenticationid,
           privateauthenticationkey:  _currentlysaveuserauthentication.authentications.privateauthenticationkey,
           password: {
            set:  _currentlysaveuserauthentication.authentications.password.set,
            password:  _currentlysaveuserauthentication.authentications.password.password
           }
          },
          details: {
           surials: {
            firstname:  _currentlysaveuserauthentication.details.surials.firstname,
            middlename:  _currentlysaveuserauthentication.details.surials.middlename,
            lastname:  _currentlysaveuserauthentication.details.surials.lastname,
            nickname:  _currentlysaveuserauthentication.details.surials.nickname,
           },
           location: {
             address: {
              street: _currentlysaveuserauthentication.details.location.address.street,
              baranggay: _currentlysaveuserauthentication.details.location.address.baranggay,
              trademark: _currentlysaveuserauthentication.details.location.address.trademark,
              city: _currentlysaveuserauthentication.details.location.address.city,
              province: _currentlysaveuserauthentication.details.location.address.province,
              country: _currentlysaveuserauthentication.details.location.address.country,
              coordinates: {
               lat: _currentlysaveuserauthentication.details.location.address.coordinates.lat,
               lon: _currentlysaveuserauthentication.details.location.address.coordinates.lon
              }
             },
             shipment: {
               type:  _currentlysaveuserauthentication.details.location.shipment.type,
               address: {
                 street:  _currentlysaveuserauthentication.details.location.shipment.address.street,
                 baranggay:  _currentlysaveuserauthentication.details.location.shipment.address.baranggay,
                 trademark:  _currentlysaveuserauthentication.details.location.shipment.address.trademark,
                 city:  _currentlysaveuserauthentication.details.location.shipment.address.city,
                 province:  _currentlysaveuserauthentication.details.location.shipment.address.province,
                 country:  _currentlysaveuserauthentication.details.location.shipment.address.country,
                 coordinates: {
                   lat:  _currentlysaveuserauthentication.details.location.shipment.address.coordinates.lat,
                   lon:  _currentlysaveuserauthentication.details.location.shipment.address.coordinates.lon
                 }
               }
             }
           },
           contact:  _currentlysaveuserauthentication.details.contact
          },
          moneyandfunds: {
           money: {
            amount:  _currentlysaveuserauthentication.moneyandfunds.money.amount,
            history: _currentlysaveuserauthentication.moneyandfunds.money.history
          },
          funds: {
           amount: _currentlysaveuserauthentication.moneyandfunds.funds.amount,
           history: _currentlysaveuserauthentication.moneyandfunds.money.history
          }   
          },
          transactions: _currentlysaveuserauthentication.transactions,
          purchases: {
            current: _currentlysaveuserauthentication.purchases.current,
            last15days: _currentlysaveuserauthentication.purchases.last15days,
            history: _currentlysaveuserauthentication.purchases.history
          },
          upgradedregistrations: _currentlysaveuserauthentication.upgradedregistrations
        };

        console.log("User already registered with a practicing account");    

        res.status(200).send({
         userauthentication: _tryfghnewresgistrationtypepracticingaccount,
         message: "User already registered with a practicing account"
        });


      } catch(err) {
  
        await mongodb.connect(process.env.ATLAS_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          dbName: 'Database',
          autoCreate: false
        })
    
        const VanguardUserData =  mongoose.model('data', data);
        const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

        const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _user);

        console.log(`User already was already registered on a new registration process authentication FGH, the validation failed: ${err}`);

        res.status(200).send({
          userauthentication: _currentlysaveuserauthentication,
          message: `User already was already registered on a new registration process authentication FGH, the validation failed: ${err}`
        });
  
  
      } 

     } else {

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
        const _currentlysaveuserauthenticationregistrationrecordindex =  newvanguarduserdata.people.indexOf(_currentlysaveuserauthentication);

        const _tryfghnewresgistrationtypenewupgradedregistrations = {
          date: _date,
          status: [
          {
            date: _date,
            status: '',
            type: 'Practicing account authentication'
          }
          ],
          registration: {
            type: 'Practicing account',
            registrationspan: 'life-time',
            authenticationspan: 'life-time'
          },
          messages: [
            {
              date: _date,
              status: 'Practicing account authenticated',
              payments: {
                amount: 0,
                currency: "undefined/practicing account authentication",
                paymenttype: 'undefined/practicing account authentication'
              }
            }
          ]
        }
    
        const _trynewfghnewresgistrationtypepracticingaccount = {
          authentications: {
          authenticationtype:  _currentlysaveuserauthentication.authentications.authenticationtytpe,
          authenticationid: `${_currentlysaveuserauthentication.authentications.authenticationid}-FGH`,
          privateauthenticationkey:  _currentlysaveuserauthentication.authentications.privateauthenticationkey,
          password: {
            set:  _currentlysaveuserauthentication.authentications.password.set,
            password:  _currentlysaveuserauthentication.authentications.password.password
          }
          },
          details: {
            surials: {
              firstname:  _currentlysaveuserauthentication.details.surials.firstname,
              middlename:  _currentlysaveuserauthentication.details.surials.middlename,
              lastname:  _currentlysaveuserauthentication.details.surials.lastname,
              nickname:  _currentlysaveuserauthentication.details.surials.nickname,
            },
            location: {
              address: {
                street: _currentlysaveuserauthentication.details.location.address.street,
                baranggay: _currentlysaveuserauthentication.details.location.address.baranggay,
                trademark: _currentlysaveuserauthentication.details.location.address.trademark,
                city: _currentlysaveuserauthentication.details.location.address.city,
                province: _currentlysaveuserauthentication.details.location.address.province,
                country: _currentlysaveuserauthentication.details.location.address.country,
                coordinates: {
                lat: _currentlysaveuserauthentication.details.location.address.coordinates.lat,
                lon: _currentlysaveuserauthentication.details.location.address.coordinates.lon
                }
              },
              shipment: {
                type:  _currentlysaveuserauthentication.details.location.shipment.type,
                address: {
                  street:  _currentlysaveuserauthentication.details.location.shipment.address.street,
                  baranggay:  _currentlysaveuserauthentication.details.location.shipment.address.baranggay,
                  trademark:  _currentlysaveuserauthentication.details.location.shipment.address.trademark,
                  city:  _currentlysaveuserauthentication.details.location.shipment.address.city,
                  province:  _currentlysaveuserauthentication.details.location.shipment.address.province,
                  country:  _currentlysaveuserauthentication.details.location.shipment.address.country,
                  coordinates: {
                    lat:  _currentlysaveuserauthentication.details.location.shipment.address.coordinates.lat,
                    lon:  _currentlysaveuserauthentication.details.location.shipment.address.coordinates.lon
                  }
                }
              }
            },
            contact:  _currentlysaveuserauthentication.details.contact
          },
          moneyandfunds: {
          money: {
            amount:  _currentlysaveuserauthentication.moneyandfunds.money.amount,
            history: _currentlysaveuserauthentication.moneyandfunds.money.history
          },
          funds: {
          amount: _currentlysaveuserauthentication.moneyandfunds.funds.amount,
          history: _currentlysaveuserauthentication.moneyandfunds.money.history
          }   
          },
          transactions: _currentlysaveuserauthentication.transactions,
          purchases: {
            current: _currentlysaveuserauthentication.purchases.current,
            last15days: _currentlysaveuserauthentication.purchases.last15days,
            history: _currentlysaveuserauthentication.purchases.history
          },
          upgradedregistrations: _currentlysaveuserauthentication.upgradedregistrations
        };

        newvanguarduserdata.people.splice(_currentlysaveuserauthenticationregistrationrecordindex, 1);
        newvanguarduserdata.people.push(_trynewfghnewresgistrationtypepracticingaccount);

        await newvanguarduserdata.save()
        .then(async(response)=> {

          console.log('New practicing account type FGH authentication account registration changed and saved');
          res.status(200).send({ 
                                userauthentication: _trynewfghnewresgistrationtypepracticingaccount,
                                message: "New account type practicing registration account changed and saved"
                              });

        })

     } catch(err) {
    
      await mongodb.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'Database',
        autoCreate: false
      })
  
      const VanguardUserData =  mongoose.model('data', data);
      const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

      const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _user);

      const _catchfghnewresgistrationtypenewupgradedregistrations = {
        date: _date,
        status: [
        {
          date: _date,
          status: '',
          type: 'Practicing account authentication'
        }
        ],
        registration: {
          type: 'Practicing account',
          registrationspan: 'life-time',
          authenticationspan: 'life-time'
        },
        messages: [
          {
            date: _date,
            status: 'Practicing account authenticated',
            payments: {
              amount: 0,
              currency: "undefined/practicing account authentication",
              paymenttype: 'undefined/practicing account authentication'
            }
          }
        ]
      }
  
      const _catchnewfghnewresgistrationtypepracticingaccount = {
        authentications: {
        authenticationtype:  _currentlysaveuserauthentication.authentications.authenticationtytpe,
        authenticationid: `${_currentlysaveuserauthentication.authentications.authenticationid}-FGH`,
        privateauthenticationkey:  _currentlysaveuserauthentication.authentications.privateauthenticationkey,
        password: {
          set:  _currentlysaveuserauthentication.authentications.password.set,
          password:  _currentlysaveuserauthentication.authentications.password.password
        }
        },
        details: {
          surials: {
            firstname:  _currentlysaveuserauthentication.details.surials.firstname,
            middlename:  _currentlysaveuserauthentication.details.surials.middlename,
            lastname:  _currentlysaveuserauthentication.details.surials.lastname,
            nickname:  _currentlysaveuserauthentication.details.surials.nickname,
          },
          location: {
            address: {
              street: _currentlysaveuserauthentication.details.location.address.street,
              baranggay: _currentlysaveuserauthentication.details.location.address.baranggay,
              trademark: _currentlysaveuserauthentication.details.location.address.trademark,
              city: _currentlysaveuserauthentication.details.location.address.city,
              province: _currentlysaveuserauthentication.details.location.address.province,
              country: _currentlysaveuserauthentication.details.location.address.country,
              coordinates: {
              lat: _currentlysaveuserauthentication.details.location.address.coordinates.lat,
              lon: _currentlysaveuserauthentication.details.location.address.coordinates.lon
              }
            },
            shipment: {
              type:  _currentlysaveuserauthentication.details.location.shipment.type,
              address: {
                street:  _currentlysaveuserauthentication.details.location.shipment.address.street,
                baranggay:  _currentlysaveuserauthentication.details.location.shipment.address.baranggay,
                trademark:  _currentlysaveuserauthentication.details.location.shipment.address.trademark,
                city:  _currentlysaveuserauthentication.details.location.shipment.address.city,
                province:  _currentlysaveuserauthentication.details.location.shipment.address.province,
                country:  _currentlysaveuserauthentication.details.location.shipment.address.country,
                coordinates: {
                  lat:  _currentlysaveuserauthentication.details.location.shipment.address.coordinates.lat,
                  lon:  _currentlysaveuserauthentication.details.location.shipment.address.coordinates.lon
                }
              }
            }
          },
          contact:  _currentlysaveuserauthentication.details.contact
        },
        moneyandfunds: {
        money: {
          amount:  _currentlysaveuserauthentication.moneyandfunds.money.amount,
          history: _currentlysaveuserauthentication.moneyandfunds.money.history
        },
        funds: {
        amount: _currentlysaveuserauthentication.moneyandfunds.funds.amount,
        history: _currentlysaveuserauthentication.moneyandfunds.money.history
        }   
        },
        transactions: _currentlysaveuserauthentication.transactions,
        purchases: {
          current: _currentlysaveuserauthentication.purchases.current,
          last15days: _currentlysaveuserauthentication.purchases.last15days,
          history: _currentlysaveuserauthentication.purchases.history
        },
        upgradedregistrations: _currentlysaveuserauthentication.upgradedregistrations
      };

      console.log(`New practicing account type FGH authentication account registration failed: ${err}`);
      
      res.status(200).send({ 
                            userauthentication: _catchnewfghnewresgistrationtypepracticingaccount,
                            message: `New practicing account type FGH authentication account registration failed: ${err}`
                          });

     }

     }

  }

})

/// registration / register a commoner
Router.route("/registercommoneraccountauthentication").post( async (req,res)=> {

  const _user = req.body.$usercookie;
  const _userauthenticationid = `${timestamps.dateNow()}-${generateint32stringdatatype(8)}-FGH`;
  const _date = `${timestamps.getDay()}, ${timestamps.getMonth()}, ${timestamps.getDate()},${timestamps.getFullYear()}, ${timestamps.getHour()}:${timestamps.getMinutes()}:${timestamps.getSeconds()},`
  
  if ( _user === "" ) {

    const _upgradedregistrations = {
      date: _date,
      status: [
       {
        date: _date,
        status: '',
        type: 'Commoner account authentication'
       }
      ],
      registration: {
        type: 'Commoner account',
        registrationspan: 'life-time',
        authenticationspan: 'life-time'
      },
      messages: [
        {
          date: _date,
          status: 'Commoner account registered',
          payments: {
            amount: 0,
            currency: "undefined/commoner account authentication",
            paymenttype: 'undefined/commoner account authentication'
          }
        }
      ]
    }

    const _commoneraccount = {
      authentications: {
       authenticationtype: 'Commoner account',
       authenticationid: _userauthenticationid,
       privateauthenticationkey: [],
       password: {
        set: false,
        password: 'password'
       }
      },
      details: {
       surials: {
        firstname: 'Edit your commoner account firstname' ,
        middlename: 'Edit your commoner account middlename',
        lastname: 'Edit your commoner account lastname',
        nickname: 'Edit your commoner account nickname',
       },
       location: {
         address: {
          street: 'Edit your commoner account current street address',
          baranggay: 'Edit your commoner account current baranggay address',
          trademark: 'Edit your commoner account current trademark address',
          city: 'Edit your commoner account current city address',
          province: 'Edit your commoner account current province address',
          country: 'Edit your commoner account current country address',
          coordinates: {
           lat: 0,
           lon: 0
          }
         },
         shipment: {
           type: '',
           address: {
             street: 'Edit your commoner account current shipping street address',
             baranggay: 'Edit your commoner account current shipping baranggay address',
             trademark: 'Edit your commoner account current shipping trademark address',
             city: 'Edit your commoner account current shipping city address',
             province: 'Edit your commoner account current shipping province address',
             country: 'Edit your commoner account current shipping country address',
             coordinates: {
               lat: 0,
               lon: 0
             }
           }
         }
       },
       contact: []
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
      purchases: {
        current: [],
        last15days: [],
        history: []
      },
      upgradedregistrations: [_upgradedregistrations] 
    };

    try {

      await mongodb.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'Database',
        autoCreate: false
      })

      const VanguardUserData =  mongoose.model('data', data);
      const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

      newvanguarduserdata.people.push(_commoneraccount);

      await newvanguarduserdata.save()
      .then(async(response)=> {

        console.log('Commoner account registered');

        res.status(200).send({
          userauthentication: _commoneraccount,
          message: "Commoner account registered"
        });

      }) 

    } catch(err) {

      const _upgradedregistrationsregistrationfaildefaultaccount = {
        date: _date,
        status: [
         {
          date: _date,
          status: '',
          type: 'Commoner account authentication'
         }
        ],
        registration: {
          type: 'Commoner account',
          registrationspan: 'life-time',
          authenticationspan: 'life-time'
        },
        messages: [
          {
            date: _date,
            status: 'Commoner account authenticated',
            payments: {
              amount: 0,
              currency: "undefined/commoner account authentication",
              paymenttype: 'undefined/commoner account authentication'
            }
          }
        ]
      }
  
      const _commneraccountregistrationfaildefaultaccount = {
        authentications: {
         authenticationtype: 'Commoner account',
         authenticationid: _userauthenticationid,
         privateauthenticationkey: [],
         password: {
          set: false,
          password: 'password'
         }
        },
        details: {
         surials: {
          firstname: 'Edit your commoner account firstname' ,
          middlename: 'Edit your commoner account middlename',
          lastname: 'Edit your commoner account lastname',
          nickname: 'Edit your commoner account nickname',
         },
         location: {
           address: {
            street: 'Edit your commoner account current street address',
            baranggay: 'Edit your commoner account current baranggay address',
            trademark: 'Edit your commoner account current trademark address',
            city: 'Edit your commoner account current city address',
            province: 'Edit your commoner account current province address',
            country: 'Edit your commoner account current country address',
            coordinates: {
             lat: 0,
             lon: 0
            }
           },
           shipment: {
             type: 'Edit your commoner account current shipping street address',
             address: {
               street: 'Edit your commoner account current shipping street address',
               baranggay: 'Edit your commoner account current shipping baranggay address',
               trademark: 'Edit your commoner account current shipping trademark address',
               city: 'Edit your commoner account current shipping city address',
               province: 'Edit your commoner account current shipping province address',
               country: 'Edit your commoner account current shipping country address',
               coordinates: {
                 lat: 0,
                 lon: 0
               }
             }
           }
         },
         contact: []
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
        purchases: {
          current: [ ],
          last15days: [],
          history: [ ]
        },
        upgradedregistrations: [_upgradedregistrationsregistrationfaildefaultaccount] 
      };

      res.status(200).send({
        userauthentication: _commneraccountregistrationfaildefaultaccount,
        message: `Commoner account registration failed: ${err}`
      });

      console.log(`Commoner account registration failed: ${err}`);

    } 

  } else {

     /// condition learning the user account if it was using an old version of registration process or not.
     /// FGH code, new code for new registrations stated on authentication ID'S on newer version of a regitrations process

     if ( _user.includes('FGH') === true ) {

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

        const _tryfghnewresgistrationtypeupgradedregistrations = {
          date: _date,
          status: [
           {
            date: _date,
            status: '',
            type: 'Commoner account authentication'
           }
          ],
          registration: {
            type: 'Commoner account',
            registrationspan: 'life-time',
            authenticationspan: 'life-time'
          },
          messages: [
            {
              date: _date,
              status: 'Commoner account authenticated',
              payments: {
                amount: 0,
                currency: "undefined/commoner account authentication",
                paymenttype: 'undefined/commoner account authentication'
              }
            }
          ]
        }
    
        const _tryfghnewresgistrationtypecommoneraccount = {
          authentications: {
           authenticationtype:  _currentlysaveuserauthentication.authentications.authenticationtytpe,
           authenticationid: _currentlysaveuserauthentication.authentications.authenticationid,
           privateauthenticationkey:  _currentlysaveuserauthentication.authentications.privateauthenticationkey,
           password: {
            set:  _currentlysaveuserauthentication.authentications.password.set,
            password:  _currentlysaveuserauthentication.authentications.password.password
           }
          },
          details: {
           surials: {
            firstname:  _currentlysaveuserauthentication.details.surials.firstname,
            middlename:  _currentlysaveuserauthentication.details.surials.middlename,
            lastname:  _currentlysaveuserauthentication.details.surials.lastname,
            nickname:  _currentlysaveuserauthentication.details.surials.nickname,
           },
           location: {
             address: {
              street: _currentlysaveuserauthentication.details.location.address.street,
              baranggay: _currentlysaveuserauthentication.details.location.address.baranggay,
              trademark: _currentlysaveuserauthentication.details.location.address.trademark,
              city: _currentlysaveuserauthentication.details.location.address.city,
              province: _currentlysaveuserauthentication.details.location.address.province,
              country: _currentlysaveuserauthentication.details.location.address.country,
              coordinates: {
               lat: _currentlysaveuserauthentication.details.location.address.coordinates.lat,
               lon: _currentlysaveuserauthentication.details.location.address.coordinates.lon
              }
             },
             shipment: {
               type:  _currentlysaveuserauthentication.details.location.shipment.type,
               address: {
                 street:  _currentlysaveuserauthentication.details.location.shipment.address.street,
                 baranggay:  _currentlysaveuserauthentication.details.location.shipment.address.baranggay,
                 trademark:  _currentlysaveuserauthentication.details.location.shipment.address.trademark,
                 city:  _currentlysaveuserauthentication.details.location.shipment.address.city,
                 province:  _currentlysaveuserauthentication.details.location.shipment.address.province,
                 country:  _currentlysaveuserauthentication.details.location.shipment.address.country,
                 coordinates: {
                   lat:  _currentlysaveuserauthentication.details.location.shipment.address.coordinates.lat,
                   lon:  _currentlysaveuserauthentication.details.location.shipment.address.coordinates.lon
                 }
               }
             }
           },
           contact:  _currentlysaveuserauthentication.details.contact
          },
          moneyandfunds: {
           money: {
            amount:  _currentlysaveuserauthentication.moneyandfunds.money.amount,
            history: _currentlysaveuserauthentication.moneyandfunds.money.history
          },
          funds: {
           amount: _currentlysaveuserauthentication.moneyandfunds.funds.amount,
           history: _currentlysaveuserauthentication.moneyandfunds.money.history
          }   
          },
          transactions: _currentlysaveuserauthentication.transactions,
          purchases: {
            current: _currentlysaveuserauthentication.purchases.current,
            last15days: _currentlysaveuserauthentication.purchases.last15days,
            history: _currentlysaveuserauthentication.purchases.history
          },
          upgradedregistrations: _currentlysaveuserauthentication.upgradedregistrations
        };

        console.log("User already registered with a commoner account");    

        res.status(200).send({
         userauthentication:_tryfghnewresgistrationtypecommoneraccount,
         message: "User already registered with a commoner account"
        });


      } catch(err) {
  
        await mongodb.connect(process.env.ATLAS_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          dbName: 'Database',
          autoCreate: false
        })
    
        const VanguardUserData =  mongoose.model('data', data);
        const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

        const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _user);

        console.log(`User already was already registered on a new registration process authentication FGH, the validation failed: ${err}`);

        res.status(200).send({
          userauthentication: _currentlysaveuserauthentication,
          message: `User already was already registered on a new registration process authentication FGH, the validation failed: ${err}`
        });
  
  
      } 

     } else {

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
        const _currentlysaveuserauthenticationregistrationrecordindex =  newvanguarduserdata.people.indexOf(_currentlysaveuserauthentication);

        const _tryfghnewresgistrationtypenewupgradedregistrations = {
          date: _date,
          status: [
          {
            date: _date,
            status: '',
            type: 'Commoner account authentication'
          }
          ],
          registration: {
            type: 'Commoner account',
            registrationspan: 'life-time',
            authenticationspan: 'life-time'
          },
          messages: [
            {
              date: _date,
              status: 'Commoner account authenticated',
              payments: {
                amount: 0,
                currency: "undefined/commoner account authentication",
                paymenttype: 'undefined/commoner account authentication'
              }
            }
          ]
        }
    
        const _trynewfghnewresgistrationtypecommoneraccount = {
          authentications: {
          authenticationtype:  _currentlysaveuserauthentication.authentications.authenticationtytpe,
          authenticationid: `${_currentlysaveuserauthentication.authentications.authenticationid}-FGH`,
          privateauthenticationkey:  _currentlysaveuserauthentication.authentications.privateauthenticationkey,
          password: {
            set:  _currentlysaveuserauthentication.authentications.password.set,
            password:  _currentlysaveuserauthentication.authentications.password.password
          }
          },
          details: {
            surials: {
              firstname:  _currentlysaveuserauthentication.details.surials.firstname,
              middlename:  _currentlysaveuserauthentication.details.surials.middlename,
              lastname:  _currentlysaveuserauthentication.details.surials.lastname,
              nickname:  _currentlysaveuserauthentication.details.surials.nickname,
            },
            location: {
              address: {
                street: _currentlysaveuserauthentication.details.location.address.street,
                baranggay: _currentlysaveuserauthentication.details.location.address.baranggay,
                trademark: _currentlysaveuserauthentication.details.location.address.trademark,
                city: _currentlysaveuserauthentication.details.location.address.city,
                province: _currentlysaveuserauthentication.details.location.address.province,
                country: _currentlysaveuserauthentication.details.location.address.country,
                coordinates: {
                lat: _currentlysaveuserauthentication.details.location.address.coordinates.lat,
                lon: _currentlysaveuserauthentication.details.location.address.coordinates.lon
                }
              },
              shipment: {
                type:  _currentlysaveuserauthentication.details.location.shipment.type,
                address: {
                  street:  _currentlysaveuserauthentication.details.location.shipment.address.street,
                  baranggay:  _currentlysaveuserauthentication.details.location.shipment.address.baranggay,
                  trademark:  _currentlysaveuserauthentication.details.location.shipment.address.trademark,
                  city:  _currentlysaveuserauthentication.details.location.shipment.address.city,
                  province:  _currentlysaveuserauthentication.details.location.shipment.address.province,
                  country:  _currentlysaveuserauthentication.details.location.shipment.address.country,
                  coordinates: {
                    lat:  _currentlysaveuserauthentication.details.location.shipment.address.coordinates.lat,
                    lon:  _currentlysaveuserauthentication.details.location.shipment.address.coordinates.lon
                  }
                }
              }
            },
            contact:  _currentlysaveuserauthentication.details.contact
          },
          moneyandfunds: {
          money: {
            amount:  _currentlysaveuserauthentication.moneyandfunds.money.amount,
            history: _currentlysaveuserauthentication.moneyandfunds.money.history
          },
          funds: {
          amount: _currentlysaveuserauthentication.moneyandfunds.funds.amount,
          history: _currentlysaveuserauthentication.moneyandfunds.money.history
          }   
          },
          transactions: _currentlysaveuserauthentication.transactions,
          purchases: {
            current: _currentlysaveuserauthentication.purchases.current,
            last15days: _currentlysaveuserauthentication.purchases.last15days,
            history: _currentlysaveuserauthentication.purchases.history
          },
          upgradedregistrations: _currentlysaveuserauthentication.upgradedregistrations
        };

        newvanguarduserdata.people.splice(_currentlysaveuserauthenticationregistrationrecordindex, 1);
        newvanguarduserdata.people.push(_trynewfghnewresgistrationtypepracticingaccount);

        await newvanguarduserdata.save()
        .then(async(response)=> {

          console.log('New practicing account type FGH authentication account registration changed and saved');
          res.status(200).send({ 
                                userauthentication: _trynewfghnewresgistrationtypecommoneraccount,
                                message: "New account type practicing registration account changed and saved"
                              });

        })

     } catch(err) {
    
      await mongodb.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'Database',
        autoCreate: false
      })
  
      const VanguardUserData =  mongoose.model('data', data);
      const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

      const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _user);

      const _catchfghnewresgistrationtypenewupgradedregistrations = {
        date: _date,
        status: [
        {
          date: _date,
          status: '',
          type: 'Commoner account authentication'
        }
        ],
        registration: {
          type: 'Commoner account',
          registrationspan: 'life-time',
          authenticationspan: 'life-time'
        },
        messages: [
          {
            date: _date,
            status: 'Commoner account authenticated',
            payments: {
              amount: 0,
              currency: "undefined/commoner account authentication",
              paymenttype: 'undefined/commoner account authentication'
            }
          }
        ]
      }
  
      const _catchnewfghnewresgistrationtypecommoneraccount = {
        authentications: {
        authenticationtype:  _currentlysaveuserauthentication.authentications.authenticationtytpe,
        authenticationid: `${_currentlysaveuserauthentication.authentications.authenticationid}-FGH`,
        privateauthenticationkey:  _currentlysaveuserauthentication.authentications.privateauthenticationkey,
        password: {
          set:  _currentlysaveuserauthentication.authentications.password.set,
          password:  _currentlysaveuserauthentication.authentications.password.password
        }
        },
        details: {
          surials: {
            firstname:  _currentlysaveuserauthentication.details.surials.firstname,
            middlename:  _currentlysaveuserauthentication.details.surials.middlename,
            lastname:  _currentlysaveuserauthentication.details.surials.lastname,
            nickname:  _currentlysaveuserauthentication.details.surials.nickname,
          },
          location: {
            address: {
              street: _currentlysaveuserauthentication.details.location.address.street,
              baranggay: _currentlysaveuserauthentication.details.location.address.baranggay,
              trademark: _currentlysaveuserauthentication.details.location.address.trademark,
              city: _currentlysaveuserauthentication.details.location.address.city,
              province: _currentlysaveuserauthentication.details.location.address.province,
              country: _currentlysaveuserauthentication.details.location.address.country,
              coordinates: {
              lat: _currentlysaveuserauthentication.details.location.address.coordinates.lat,
              lon: _currentlysaveuserauthentication.details.location.address.coordinates.lon
              }
            },
            shipment: {
              type:  _currentlysaveuserauthentication.details.location.shipment.type,
              address: {
                street:  _currentlysaveuserauthentication.details.location.shipment.address.street,
                baranggay:  _currentlysaveuserauthentication.details.location.shipment.address.baranggay,
                trademark:  _currentlysaveuserauthentication.details.location.shipment.address.trademark,
                city:  _currentlysaveuserauthentication.details.location.shipment.address.city,
                province:  _currentlysaveuserauthentication.details.location.shipment.address.province,
                country:  _currentlysaveuserauthentication.details.location.shipment.address.country,
                coordinates: {
                  lat:  _currentlysaveuserauthentication.details.location.shipment.address.coordinates.lat,
                  lon:  _currentlysaveuserauthentication.details.location.shipment.address.coordinates.lon
                }
              }
            }
          },
          contact:  _currentlysaveuserauthentication.details.contact
        },
        moneyandfunds: {
        money: {
          amount:  _currentlysaveuserauthentication.moneyandfunds.money.amount,
          history: _currentlysaveuserauthentication.moneyandfunds.money.history
        },
        funds: {
        amount: _currentlysaveuserauthentication.moneyandfunds.funds.amount,
        history: _currentlysaveuserauthentication.moneyandfunds.money.history
        }   
        },
        transactions: _currentlysaveuserauthentication.transactions,
        purchases: {
          current: _currentlysaveuserauthentication.purchases.current,
          last15days: _currentlysaveuserauthentication.purchases.last15days,
          history: _currentlysaveuserauthentication.purchases.history
        },
        upgradedregistrations: _currentlysaveuserauthentication.upgradedregistrations
      };

      console.log(`New commoner account type FGH authentication account registration failed: ${err}`);
      
      res.status(200).send({ 
                            userauthentication: _catchnewfghnewresgistrationtypecommoneraccount,
                            message: `New commoner account type FGH authentication account registration failed: ${err}`
                          });

     }

     }

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

