import request from 'supertest';
import helloworld from './helloworld'; // Update the import

describe('GET /hello', () => {
  it('responds with status 200 and "Hello world"', async () => {
    const response = await request(helloworld).get('/hello'); // Update the request
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world');
  });
});
