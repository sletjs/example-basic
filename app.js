'use strict';

const Slet = require('slet');
const app = new Slet({
    root: __dirname,
    debug: false
});

app.router('/', ('./basicctrl') )  

// app.start(3000)

module.exports = app