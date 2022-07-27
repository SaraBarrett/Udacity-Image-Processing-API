import express from 'express';   
import imageLoading from './api/imageLoading';  
import resizeImage from './api/resizeImage';    

const routes = express.Router();

routes.get('/', (req, res) => { 
    res.send('Main Route');
});


routes.use('/loading', imageLoading);
routes.use('/update', resizeImage);

export default routes;