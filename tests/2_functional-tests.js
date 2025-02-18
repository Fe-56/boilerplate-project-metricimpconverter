const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  test('Convert a valid input', (done) => {
    chai
      .request(server)
      .get('/api/convert?input=10L')
      .end(function (err, res) {
        assert.deepEqual(res.status, 200);
        assert.deepEqual(res.body, {"initNum":10,"initUnit":"L","returnNum":2.64172,"returnUnit":"gal","string":"10 liters converts to 2.64172 gallons"});
        done();
      });
  });

  test('Convert an invalid input', (done) => {
    chai
      .request(server)
      .get('/api/convert?input=32g')
      .end(function (err, res) {
        assert.deepEqual(res.status, 200);
        assert.deepEqual(res.text, 'invalid unit');
        done();
      });
  });

  test('Convert an invalid number', (done) => {
    chai
      .request(server)
      .get('/api/convert?input=3/7.2/4kg')
      .end(function (err, res) {
        assert.deepEqual(res.status, 200);
        assert.deepEqual(res.text, 'invalid number');
        done();
      });
  });

  test('Convert an invalid number AND unit', (done) => {
    chai
      .request(server)
      .get('/api/convert?input=3/7.2/4kilomegagram')
      .end(function (err, res) {
        assert.deepEqual(res.status, 200);
        assert.deepEqual(res.text, 'invalid number and unit');
        done();
      });
  });

  test('Convert with no number', (done) => {
    chai
      .request(server)
      .get('/api/convert?input=kg')
      .end(function (err, res) {
        assert.deepEqual(res.status, 200);
        assert.deepEqual(res.body, {"initNum":1,"initUnit":"kg","returnNum":2.20462,"returnUnit":"lbs","string":"1 kilograms converts to 2.20462 pounds"});
        done();
      });
  });
});
