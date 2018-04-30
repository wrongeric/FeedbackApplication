const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");
// const authRoutes = require('./routes/authROutes');

mongoose.connect(keys.mongoURI);

const app = express();

// authRoutes(app);
require("./routes/authRoutes")(app);

//https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=115335116427-i1h88rejotjd1hdr4pe6r0mdg3g57tvh.apps.googleusercontent.com
//error message 400 Error: redirect_uri_mismatch

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//https://pacific-dusk-41353.herokuapp.com/ | https://git.heroku.com/pacific-dusk-41353.git
