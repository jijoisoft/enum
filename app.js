const express = require('express');
const app = express();
const port = 8081;

var engine = require('./core/engine.js');//include engine
var qry = "3.4.2.2.2.5.6.5.6.9@isgcs.com"; //qry take from a variable
var phone = engine.getPhoneFromQuery(qry);// 1. get phgone no
var response = engine.getResponseForPhone(phone);// get response
var output = phone + ' ' + response;
app.get('/', (req, res) => res.send(output));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  



