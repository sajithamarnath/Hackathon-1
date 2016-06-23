// Simple async test for HTTP 200 response code using supertest

'use strict';
var request = require("supertest"),		// to help with http assertions, assertion library
    app = require("../app").getApp;		// trying to get the 'app' being exported in app.js


//we are moving to root, and expecting a 200 OK response
describe('GET /', function(){
  it('expects HTTP response 200', function(done){
    request(app)
     .get('/')
	 .expect(200, done);
  });
});