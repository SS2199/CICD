const request = require("supertest");
const server = require("./helloworld"); // Adjust the path as needed
const express = require("express"); // Import the express module

describe('GET /hello', () => {
  it('responds with status 200 and "Hello world"', async () => {
    const response = await request(server).get('/hello');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world');
  });
});
