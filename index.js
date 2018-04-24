
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

// app.get('/', (req, res) => {
//     res.send({hey: 'man'});
// });

//clientID    115335116427-i1h88rejotjd1hdr4pe6r0mdg3g57tvh.apps.googleusercontent.com


const PORT = process.env.PORT || 5000;
app.listen(PORT);

//https://pacific-dusk-41353.herokuapp.com/ | https://git.heroku.com/pacific-dusk-41353.git