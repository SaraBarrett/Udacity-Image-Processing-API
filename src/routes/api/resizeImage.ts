import express from 'express';   
const resizeImage = express.Router();
import resize from './personalModules/resize';    

resizeImage.post('/', (req, res) => {


    const height = req.body.height;
    const widht = req.body.widht;
    resize(widht, height);
    
});


export default resizeImage;