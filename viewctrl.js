'use strict';

const ViewController = require('slet').ViewController

module.exports = class MyController extends ViewController {
  constructor(app, ctx, next) {
    super(app, ctx, next)
  }
  
  get() { 
    var a = this.query.a
    // this.renderType='view'
    return {
      tpl: 'index',
      data: {
        title: 'ssddssdd a= ' + a
      }
    }
  } 
}
