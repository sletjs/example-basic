'use strict';

const BasicController = require('slet').BasicController

module.exports = class MyController extends BasicController {
  constructor(app, ctx, next) {
    super(app, ctx, next)
  }
  
  get() { 
    var a = this.query.a
    // this.renderType='view'
    return {
      a: 'this is a',
      b: {
        c: 'ssddssdd a= ' + a
      }
    }
  } 
}
