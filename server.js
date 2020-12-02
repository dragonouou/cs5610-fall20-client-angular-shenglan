const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/cs5610-fall20-client-angular-shenglan'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/cs5610-fall20-client-angular-shenglan/index.html'));});
app.listen(process.env.PORT || 3000);
