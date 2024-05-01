require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const mongodb = require('./lib/mongodb/database');

const app = express();
const cors = require('cors');

const databaseRoute = require('./routes/database/database.js');
const usersRoute = require('./routes/users/usersRoute.js');
const requestsroute = require('./routes/requests/requestsroute.js');

const PORT = process.env.PORT || 4000 ;

app.use(cors({
 origin: "*",
 methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
 preflightContinue: false,
 optionsSuccessStatus: 200
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/requests/', requestsroute);
app.use('/userauthentication/', usersRoute);
app.use('/data/', databaseRoute);

mongoose.connect(process.env.ATLAS_URI, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 autoCreate: false
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));