const express = require('express');
const Router = require('express').Router();

const mongoose = require('mongoose');
const mongodb = require('../../lib/mongodb/database.js');

const axios = require("axios");

const xirbitdata = require('../../dataschemes/xirbit/xirbitdatascheme');
const generateint32stringdatatype  = require('../../lib/generateInt32StringDataType.js');


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

module.exports = Router;