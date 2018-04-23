
const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send({hey: 'man'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//https://pacific-dusk-41353.herokuapp.com/ | https://git.heroku.com/pacific-dusk-41353.git