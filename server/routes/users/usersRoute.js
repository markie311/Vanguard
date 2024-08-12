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
  
  /// try and catch block for new users 
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
       authenticationtype: 'Practicing',
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
         authenticationtype: 'Practicing',
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

  } 
  /// try and catch function for users who registered an old process with the new FGH new authentication process.
  else {

    /// condition learning the user account if it was using an old version of registration process or not.
    /// FGH code, new code for new registrations stated on authentication ID'S on newer version of a regitrations process.

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
        };
    
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

        ///// practicing account validation / for it's appropriate response of practicing accounts to be only change in the user dashboard
        if (  _currentlysaveuserauthentication.authentications.authenticationtype === "Practicing" ) {

          console.log('User already registered with a practing account');   
        
          res.status(200).send({
           userauthentication: _tryfghnewresgistrationtypepracticingaccount,
           message: `User already registered with a practicing account: Your current authentication was already a ${_currentlysaveuserauthentication.authentications.authenticationtype} account`
          });

        } 
        ///// commoner account's and private account's validation / for it's appropriate response of the said accounts to be only change in the user dashboard
        else {

          console.log(`User already registered with a ${_currentlysaveuserauthentication.authentications.authenticationtype.toLowerCase()} account`);   
        
          res.status(200).send({
           userauthentication: _tryfghnewresgistrationtypepracticingaccount,
           message: `User already registered with a ${_currentlysaveuserauthentication.authentications.authenticationtype.toLowerCase()} account: You can only go back changing your current authenteticaion to be a practicing one in your dashboard.`
          });

        }

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

        console.log(`User already was already registered on a new registration process authentication FGH. The validation failed. Check your internet connection or go to your neighborhood for assistance: ${err}`);

        res.status(200).send({
          userauthentication: _currentlysaveuserauthentication,
          message: `User already was already registered on a new registration process authentication FGH. The validation failed. Check your internet connection or go to your neighborhood for assistance: ${err}`
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
          authenticationtype:  "Practicing account",
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
                                message: "New practicing account type FGH authentication account registration changed and saved"
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
  
  /// try and catch block for new users 
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
       authenticationtype: 'Commoner',
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

  } 
  
   /// try and catch function for users who registered using an old process or new validating the authentication only for practicing accounts to register as commonner successfully.
   /// condition learning the user account if it was using an old version of registration process or not.
   /// FGH code, new code for new registrations stated on authentication ID'S on newer version of a regitrations process.

  else {

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
        const _currentlysaveuserauthenticationregistrationrecordindex =  newvanguarduserdata.people.indexOf(_currentlysaveuserauthentication);

        if ( _currentlysaveuserauthentication.authentications.authenticationtype === "Practicing" ) {

          const _tryfghnewresgistrationtypepracticingtocommonerupgradedregistrations = {
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
      
          const _tryfghnewresgistrationtypepracticingtocommonercommoneraccount = {
            authentications: {
             authenticationtype:  "Commoner",
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

          newvanguarduserdata.people.splice(_currentlysaveuserauthenticationregistrationrecordindex, 1);
          newvanguarduserdata.people.push(_tryfghnewresgistrationtypepracticingtocommonercommoneraccount);
  
          await newvanguarduserdata.save()
          .then(async(response)=> {
    
            console.log("Practicing account was validated and change into a commoner account by request. All your transactions are expected to be saved with records that will be affecting the Vanguard portfolio");    
    
            res.status(200).send({
              userauthentication:_tryfghnewresgistrationtypepracticingtocommonercommoneraccount,
              message: "Practicing account was validated and change into a commoner account by request. All your transactions are expected to be saved with records that will be affecting the Vanguard portfolio"
            });
    
          }) 

        } else {

          const _commonerresgistrationtypeupgradedregistrations = {
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
      
          const _commonerresgistrationtypecommoneraccount = {
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
  
          console.log(`User already registered with a ${_currentlysaveuserauthentication.authentications.authenticationtype.toLowerCase()} account. You can go back to a practicing account to practice using this public website with overall freedom not affecting other's and Vanguard portfolio`);    
  
          res.status(200).send({
           userauthentication: _commonerresgistrationtypecommoneraccount,
           message: `User already registered with a ${_currentlysaveuserauthentication.authentications.authenticationtype.toLowerCase()} account. You can go back to a practicing account to practice using this public website with overall freedom not affecting other's and Vanguard portfolio`
          });

        }

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
          authenticationtype: 'Commoner',
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
        newvanguarduserdata.people.push(_trynewfghnewresgistrationtypecommoneraccount);

        await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('New commoner account type FGH authentication account registration changed and saved');
          res.status(200).send({ 
                                userauthentication: _trynewfghnewresgistrationtypecommoneraccount,
                                message: "New commoner account type FGH authentication account registration changed and saved"
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

//// user configuration firstname change route
Router.route("/changefirstname").post( async (req, res)=> {

  const _firstname = req.body.$userconfigurationfirstname;
  const _userauthenticationid = req.body.$userauthenticationid;

  try {

  await mongodb.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Database',
    autoCreate: false
  })

  const VanguardUserData =  mongoose.model('data', data);
  const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

  const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _userauthenticationid);
 
  _currentlysaveuserauthentication.details.surials.firstname = _firstname;

  await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Changing your firstname was successful');
          res.status(200).send({ 
                                message: `Changing your firstname was successful`
                              });
          
        })

  } catch(err) {

      console.log(`Changing your firstname failed. Error, ${err}`);
      res.status(200).send({ 
                            message: `Changing your firstname failed. Error: ${err}`
                          });


  }

})

//// user configuration middlename change route
Router.route("/changemiddlename").post( async (req, res)=> {

  const _middlename = req.body.$userconfigurationmiddlename;
  const _userauthenticationid = req.body.$userauthenticationid;

  try {

  await mongodb.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Database',
    autoCreate: false
  })

  const VanguardUserData =  mongoose.model('data', data);
  const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

  const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _userauthenticationid);
 
  _currentlysaveuserauthentication.details.surials.middlename = _middlename;

  await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Changing your middlename was successful');
          res.status(200).send({ 
                                message: `Changing your middlename was successful`
                              });
          
        })

  } catch(err) {

      console.log(`Changing your middlename failed. Error, ${err}`);
      res.status(200).send({ 
                            message: `Changing your middlename failed. Error: ${err}`
                          });


  }

})

/// user configuration last name change route 
Router.route("/changelastname").post( async (req, res)=> {

  const _lastname = req.body.$userconfigurationlastname;
  const _userauthenticationid = req.body.$userauthenticationid;

  try {

  await mongodb.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Database',
    autoCreate: false
  })

  const VanguardUserData =  mongoose.model('data', data);
  const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

  const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _userauthenticationid);
 
  _currentlysaveuserauthentication.details.surials.lastname = _lastname;

  await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Changing your lastname was successful');
          res.status(200).send({ 
                                message: `Changing your lastname was successful`
                              });
          
        })
   
  } catch(err) {

      console.log(`Changing your lastname failed. Error, ${err}`);
      res.status(200).send({ 
                            message: `Changing your lastname failed. Error: ${err}`
                          });


  }

})

/// user configuration nick name change route 
Router.route("/changenickname").post( async (req, res)=> {

  const _nickname = req.body.$userconfigurationnickname;
  const _userauthenticationid = req.body.$userauthenticationid;

  try {

  await mongodb.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Database',
    autoCreate: false
  })

  const VanguardUserData =  mongoose.model('data', data);
  const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

  const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _userauthenticationid);
 
  _currentlysaveuserauthentication.details.surials.nickname = _nickname;
  
   await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Changing your nickname was successful');
          res.status(200).send({ 
                                message: `Changing your nickname was successful`
                              });
          
        })
   
  } catch(err) {

      console.log(`Changing your nickname failed. Error, ${err}`);
      res.status(200).send({ 
                            message: `Changing your nickname failed. Error: ${err}`
                          });


  }

})

//// user configuration change street address
Router.route("/changestreetaddress").post( async (req, res)=> {

  const _streetaddress = req.body.$userconfigurationstreetaddress;
  const _userauthenticationid = req.body.$userauthenticationid;

  try {

  await mongodb.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Database',
    autoCreate: false
  })

  const VanguardUserData =  mongoose.model('data', data);
  const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

  const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _userauthenticationid);
 
  _currentlysaveuserauthentication.details.location.address.street = _streetaddress;

   await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Changing your street address was successful');
          res.status(200).send({ 
                                message: `Changing your street address was successful`
                              });
          
        })
   
  } catch(err) {

      console.log(`Changing your street address failed. Error, ${err}`);
      res.status(200).send({ 
                            message: `Changing your street address failed. Error: ${err}`
                          });


  }

})

//// user configuration change baranggay address
Router.route("/changebaranggayaddress").post( async (req, res)=> {

  const _baranggayaddress = req.body.$userconfigurationbaranggayaddress;
  const _userauthenticationid = req.body.$userauthenticationid;

  try {

  await mongodb.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Database',
    autoCreate: false
  })

  const VanguardUserData =  mongoose.model('data', data);
  const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

  const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _userauthenticationid);
 
  _currentlysaveuserauthentication.details.location.address.baranggay = _baranggayaddress;
  
   await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Changing your baranggay address was successful');
          res.status(200).send({ 
                                message: `Changing your baranggay address was successful`
                              });
          
        })
  
  } catch(err) {

      console.log(`Changing your baranggay address failed. Error, ${err}`);
      res.status(200).send({ 
                            message: `Changing your baranggay address failed. Error: ${err}`
                          });


  }

})

//// user configuration change trademark address
Router.route("/changetrademarkaddress").post( async (req, res)=> {

  const _trademarkaddress = req.body.$userconfigurationtrademarkaddress;
  const _userauthenticationid = req.body.$userauthenticationid;

  try {

  await mongodb.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Database',
    autoCreate: false
  })

  const VanguardUserData =  mongoose.model('data', data);
  const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

  const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _userauthenticationid);
 
  _currentlysaveuserauthentication.details.location.address.trademark = _trademarkaddress;
  
   await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Changing your trademark address was successful');
          res.status(200).send({ 
                                message: `Changing your trademark address was successful`
                              });
          
        })
  
  } catch(err) {

      console.log(`Changing your trademark address failed. Error, ${err}`);
      res.status(200).send({ 
                            message: `Changing your trademark address failed. Error: ${err}`
                          });


  }

})

/// user configuration change city address
Router.route("/changecityaddress").post( async (req, res)=> {

  const _cityaddress = req.body.$userconfigurationcityaddress;
  const _userauthenticationid = req.body.$userauthenticationid;

  try {

  await mongodb.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Database',
    autoCreate: false
  })

  const VanguardUserData =  mongoose.model('data', data);
  const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

  const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _userauthenticationid);
 
  _currentlysaveuserauthentication.details.location.address.city = _cityaddress;

   await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Changing your city address was successful');
          res.status(200).send({ 
                                message: `Changing your city address was successful`
                              });
          
        })
  
  } catch(err) {

      console.log(`Changing your city address failed. Error, ${err}`);
      res.status(200).send({ 
                            message: `Changing your city address failed. Error: ${err}`
                          });


  }

})

/// user configuration change province address
Router.route("/changeprovinceaddress").post( async (req, res)=> {

  const _provinceaddress = req.body.$userconfigurationprovinceaddress;
  const _userauthenticationid = req.body.$userauthenticationid;

  try {

  await mongodb.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Database',
    autoCreate: false
  })

  const VanguardUserData =  mongoose.model('data', data);
  const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");

  const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _userauthenticationid);
 
  _currentlysaveuserauthentication.details.location.address.province = _provinceaddress;

   await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Changing your province address was successful');
          res.status(200).send({ 
                                message: `Changing your province address was successful`
                              });
          
        })
  
  } catch(err) {

      console.log(`Changing your province address failed. Error, ${err}`);
      res.status(200).send({ 
                            message: `Changing your province address failed. Error: ${err}`
                          });


  }

})

/// user configuration change country address 
Router.route("/changecountryaddress").post( async (req, res)=> {

  const _countryaddress = req.body.$userconfigurationcountryaddress;
  const _userauthenticationid = req.body.$userauthenticationid;

  try {

    await mongodb.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Database',
      autoCreate: false
    })
  
    const VanguardUserData =  mongoose.model('data', data);
    const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");
  
    const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _userauthenticationid);
   
    _currentlysaveuserauthentication.details.location.address.country = _countryaddress;

   await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Changing your country address was successful');
          res.status(200).send({ 
                                message: `Changing your country address was successful`
                              });
          
        })

  } catch(err) {

      console.log(`Changing your province address failed. Error, ${err}`);
      res.status(200).send({ 
                            message: `Changing your country address failed. Error: ${err}`
                          });


  }

})

/// phone number route / save 
Router.route("/vanguardphonenumber/save").post( async (req, res)=> {

  const _phonenumber = Number(req.body.$userconfigurationphonenumber);
  const _userauthenticationid = req.body.$userauthenticationid;
  const _date = `${timestamps.getDay()}, ${timestamps.getMonth()}, ${timestamps.getDate()},${timestamps.getFullYear()}, ${timestamps.getHour()}:${timestamps.getMinutes()}:${timestamps.getSeconds()},`

  try {

    await mongodb.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Database',
      autoCreate: false
    })
  
    const VanguardUserData =  mongoose.model('data', data);
    const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");
  
    const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _userauthenticationid);
 
    if ( _currentlysaveuserauthentication.details.contact.length === 0 ) {

      _currentlysaveuserauthentication.details.contact.push({
        provider: "Globe, TM, Talk N Text, Smart, SUN, or DITO",
        type: "Set",
        number: _phonenumber,
        date: []
      });
  
      if ( _currentlysaveuserauthentication.details.contact[0].date.length === 0 ) {
  
        _currentlysaveuserauthentication.details.contact[0].date.push({
          status: "Set",
          date: _date,
          message: `${_currentlysaveuserauthentication.details.surials.firstname}, ${_currentlysaveuserauthentication.details.surials.middlename}, ${_currentlysaveuserauthentication.details.surials.lastname} set his phone number ${_phonenumber}`,
        });
  
        await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Phone number successfully saved and set');
          res.status(200).send({ 
                                message: `Phone number successfully saved and set`
                              });
          
        })
  
      } else {
  
        _currentlysaveuserauthentication.details.contact[0].date.push({
          status: "Changed",
          date: _date,
          message: `${_currentlysaveuserauthentication.details.surials.firstname}, ${_currentlysaveuserauthentication.details.surials.middlename}, ${_currentlysaveuserauthentication.details.surials.lastname} changed his phone number ${_phonenumber}`,
        });
  
        await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Phone number successfully changed and set');
          res.status(200).send({ 
                                message: `Phone number successfully changed and set`
                              });
          
        })
  
      }

    } else {

      if ( _currentlysaveuserauthentication.details.contact[0].date.length === 0 ) {
  
        _currentlysaveuserauthentication.details.contact[0].date.push({
          status: "Set",
          date: _date,
          message: `${_currentlysaveuserauthentication.details.surials.firstname}, ${_currentlysaveuserauthentication.details.surials.middlename}, ${_currentlysaveuserauthentication.details.surials.lastname} set his phone number ${_phonenumber}`,
        });
  
        await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Phone number successfully saved and set');
          res.status(200).send({ 
                                message: `Phone number successfully saved and set`
                              });
          
        })
  
      } else {
  
        _currentlysaveuserauthentication.details.contact[0].date.push({
          status: "Changed",
          date: _date,
          message: `${_currentlysaveuserauthentication.details.surials.firstname}, ${_currentlysaveuserauthentication.details.surials.middlename}, ${_currentlysaveuserauthentication.details.surials.lastname} changed his phone number ${_phonenumber}`,
        });
  
        await newvanguarduserdata.save()
        .then(async(response)=> {
          
          console.log('Phone number successfully changed and set');
          res.status(200).send({ 
                                message: `Phone number successfully changed and set`
                              });
          
        })
  
      }
      
    }
 

  } catch(err) {

    console.log(`Saving phone number failed. Error, ${err}`);
    res.status(200).send({ 
                          message: `Saving phone number failed. Error: ${err}`
                        });

  }

})

/// password configuration route / configure
Router.route("/passwordconfiguration").post( async (req, res)=> {
  
  const _password = req.body.$userconfigurationpassword;
  const _userauthenticationid = req.body.$userauthenticationid;
  const _date = `${timestamps.getDay()}, ${timestamps.getMonth()}, ${timestamps.getDate()},${timestamps.getFullYear()}, ${timestamps.getHour()}:${timestamps.getMinutes()}:${timestamps.getSeconds()},`

  try {
    
    await mongodb.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Database',
      autoCreate: false
    })
  
    const VanguardUserData =  mongoose.model('data', data);
    const newvanguarduserdata = await VanguardUserData.findById("codetocode-1131143");
  
    const _currentlysaveuserauthentication = newvanguarduserdata.people.find((users)=> users.authentications.authenticationid === _userauthenticationid);

    _currentlysaveuserauthentication.authentications.password.set = true;
    _currentlysaveuserauthentication.authentications.password.password = _password;
    
    console.log(_password);
    console.log(_currentlysaveuserauthentication.authentications.password.set);
    console.log( _currentlysaveuserauthentication.authentications.password.passsword);

    await newvanguarduserdata.save()
    .then( async (response)=> {
      
      console.log('Password successfully saved and set');
      res.status(200).send({ 
                            message: `Password successfully saved and set`
                          });
      
    })
  

  } catch(err) {

    console.log(`Password configuration failed. Error, ${err}`);
    res.status(200).send({ 
                          message: `Password configuration failed. Error: ${err}`
                        });

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

//// 
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

