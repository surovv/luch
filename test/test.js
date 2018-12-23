var assert = require('assert');

const {luch, getAbsoluteUrl} = require('../dist');

describe('Luch CRUD', function() {
  let withJSONPlaceholder;

  beforeEach(function() {
    withJSONPlaceholder = getAbsoluteUrl('https://jsonplaceholder.typicode.com');
  });


  describe('luch.get', function() {
    it('should return list of posts', function(done) {
      luch.get(withJSONPlaceholder('/posts'))
        .then(resp => {
          assert.equal(resp.status, 200);
          return resp.json();
        })
        .then((json) => {
          assert.equal(json.length, 100);
          done();
        })
        .catch(done)
    });

    it('should return first of posts', function(done) {
      luch.get(withJSONPlaceholder('/posts/1'))
        .then(resp => {
          assert.equal(resp.status, 200);
          return resp.json();
        })
        .then((json) => {
          assert.equal(json.id, 1);
          done();
        })
        .catch(done)
    });
  });


  describe('luch.post', function() {
    it('should create post with 101 id', function(done) {
      luch.post(withJSONPlaceholder('/posts'), {
          title: 'foo',
          body: 'bar',
          userId: 1
        })
        .then(resp => {
          assert.equal(resp.status, 201);
          return resp.json();
        })
        .then((json) => {
          assert.equal(json.id, 101);
          done();
        })
        .catch(done)
    });
  });

  describe('luch.put', function(done) {
    it('should update post with 1 id', function(done) {
      luch.put(withJSONPlaceholder('/posts/1'), {
          title: 'lo',
          body: 'fi',
          userId: 14
        })
        .then(resp => {
          assert.equal(resp.status, 200);
          return resp.json();
        })
        .then((json) => {
          assert.equal(json.id, 1);
          done();
        })
        .catch(done)
    });
  });

  describe('luch.delete', function() {
    it('should return 200  status when delete post', function(done) {
      luch.delete(withJSONPlaceholder('/posts/1'))
        .then((resp) => {
          assert.equal(resp.status, 200);
          done();
        })
        .catch(done)
    });
  });
});
