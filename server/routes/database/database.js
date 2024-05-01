const express = require('express');
const Router = require('express').Router();

const mongoose = require('mongoose');
const mongodb = require('../../lib/mongodb/database.js');

const data = require('../../dataschemes/xirbit/xirbitdatascheme');

Router.route('/getdata').get( async (req, res)=> {
  
 try {
 
  await mongodb.connect(process.env.ATLAS_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     dbName: 'Database',
     autoCreate: false
  })

  const Xirbitdata = await mongoose.model('data', data);
  const newxirtbitdata = await Xirbitdata.findById("codetocode-1131143") 

  res.status(200).send(newxirtbitdata)
  console.log('Data was sent to UI')
  console.log(newxirtbitdata)

 } catch (err) {
   console.log('Error while getting data' + '\n' + err);
 }

})

module.exports = Router;