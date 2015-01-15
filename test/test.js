var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('<html><body><hr>Some Text<hr></body></html>', done);
  });
});
