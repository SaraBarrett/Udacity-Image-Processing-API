import supertest from 'supertest'; 
import app from '../index';
import resize from '../routes/api/personalModules/resize';

const request = supertest(app);


describe('Endpoint responses', () => {
  it('Main endpoint expects to return 200', async () => {
    const response = await request.get('/');
    expect(response.status)
    .toBe(200);
  })
  it('gets the api endpoint with the query parameter', async () => {
    const response = await request.get('/loading');
    expect(response.status)
    .toBe(200);
  })
});


describe('Test functionality - Resize an image and name it with right path', () => {
  const path = './public/images/resizedsantamonica500X600.jpg';

  it('should exist an image with the new name', async () => {
    await resize('500', '600', 'santamonica');
    expect(path).toBeDefined();
  })
});
 
