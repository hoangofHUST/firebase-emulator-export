const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

//setup router
const router = require('./routes/route');
app.use(router);

app = require('./error')(app);
const port = process.env.PORT || 3000;
app.listen(port, err => {
    if (err) console.log(err);
    console.log('Running in port ' + port);
});
module.exports = app;
