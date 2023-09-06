const request = require('supertest');
const helloworld = require('./helloworld'); // Replace with the actual path to your Express app

describe('GET /hello', () => {
  it('responds with status 200 and "Hello world"', async () => {
    const response = await request(helloworld).get('/hello'); 
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world');
  });
});
