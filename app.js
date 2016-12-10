'use strict';

const Slet = require('slet');
const app = new Slet({
    root: __dirname,
    debug: true
});

app.router('/', require('./basicctrl') )  

app.start(3000) 