import test from 'ava'

var app = require('./app')
var sletTest = require('slettest')

test.cb('GET / return json', t => {
  sletTest(app)
    .get('/')
    .expect(200, function (err, res) {
      t.ifError(err)
      t.is(res.body.msg, "this is a get", 'get msg')
      t.end()
    })
})

test.cb('POST / return json', t => {
  sletTest(app)
    .post('/')
    .expect(200, function (err, res) {
      t.ifError(err)
      t.is(res.body.msg, "this is a post", 'post msg')
      t.end()
    })
})
