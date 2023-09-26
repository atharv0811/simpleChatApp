const express = require('express');
const bodyParser = require('body-parser');
const loginroute = require('./routes/login');
const chatroutes = require('./routes/chat');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(loginroute);
app.use(chatroutes);
app.listen(4000);