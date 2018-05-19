const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/user"); //order of require statements can result in errors
require("./models/Survey");
require("./services/passport");

// const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// authRoutes(app);
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

//https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=115335116427-i1h88rejotjd1hdr4pe6r0mdg3g57tvh.apps.googleusercontent.com
//error message 400 Error: redirect_uri_mismatch

if (process.env.NODE_ENV === "production") {
  //Express will serve up production assets like our main.js or main.css files
  app.use(express.static("client/build"));
  //Express will serve up the index.html file if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//https://pacific-dusk-41353.herokuapp.com/ | https://git.heroku.com/pacific-dusk-41353.git
