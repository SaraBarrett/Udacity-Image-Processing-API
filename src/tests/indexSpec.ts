import supertest from 'supertest';
//import imageLoading from '../routes/api/imageLoading';  
//import resize from '../routes/api/personalModules/resize';    
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('gets the api endpoint that loads an image', async (done) => {
        const response = await request.get('/loading');
        expect(response.status).toBe(200);
        done();
    }
)});

/*it('expects to resize an image and save it', () => {
    request(app)
    .post("/update")
    .type("form")
    .send({ item: "hey" })
    .then(() => {
      request(app)
        .get("/test")
        .expect({ array: ["hey"] }, done);
    });
});

it('expects to resize an image and save it', () => {
  expect(myFunc(5)).toEqual(25);
});*/