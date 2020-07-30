const app = require('./server') // Link to your server file
const supertest = require('supertest');
const request = require('supertest')

describe('API Test', () => {
	
	it('gets the test endpoint', done => {
		request(app)
	    	.get('/ping')
 			.expect(200)
	        .end(function(err, res) {
	        	expect(res.body.message).toBe('ok');
	        	done();
	    	});
	})


	afterAll(done => {
    	app.close();
    	done();
	});
})