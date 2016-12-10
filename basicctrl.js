'use strict';

const BasicController = require('slet').BasicController

module.exports = class MyBasicController extends BasicController {
  constructor(app, ctx, next) {
    super(app, ctx, next)
  }
  
  get() {
    return {
      msg: 'this is a get'
    }
  } 

  post() {
    return {
      msg: 'this is a post'
    }
  } 

}
