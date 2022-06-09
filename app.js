const express = require('express');
const app = express();

const routerMain = require('./routers/main.js');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/',routerMain);

app.listen(3000, ()=>console.log('Server running...'+"http://localhost:3000"))