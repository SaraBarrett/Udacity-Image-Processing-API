import express, { Request, Response } from 'express';   
const resizeImage = express.Router();
import resize from './personalModules/resize';    
import fs from 'fs'

resizeImage.post('/', async (req : Request, res : Response) => {

    const height = req.body.height;
    const widht = req.body.widht;
    const name = req.body.name;
  
 
    try{
        const path = './public/images/resized'+name+widht+'X'+height+'.jpg'
        if (fs.existsSync(path)) {
            return res.send('<img src="./images/resized'+name+widht+'X'+height+'.jpg" name="source" alt="encenada" wwidth="'+widht+'" height="'+height+'"/><br/><br/><form method="POST" action="/update"><input type="number" name="widht" placeholder="widht"><input type="number" name="height" placeholder="height"><input type="hidden" name="name" value="'+name+'"><input type="submit" value="Resize"></from>');
        }else{
            await resize(widht, height, name);
        }
    }catch(error){
        console.log('Resize is not working');
    }
 
    switch(name !== "") { 
        case name === 'encenada': { 
            res.send('<img src="./images/encenadaport.jpg" name="source" alt="encenada" width="'+widht+'" height="'+height+'"/><br/><br/><form method="POST" action="/update"><input type="number" name="widht" placeholder="widht"><input type="number" name="height" placeholder="height"><input type="hidden" name="name" value="'+name+'"><input type="submit" value="Resize"></from>');
           break; 
        } 
        case name === 'fjord': { 
            res.send('<img src="./images/fjord.jpg" name="source" alt="encenada" wwidth="'+widht+'" height="'+height+'"/><br/><br/><form method="POST" action="/update"><input type="number" name="widht" placeholder="widht"><input type="number" name="height" placeholder="height"><input type="hidden" name="name" value="'+name+'"><input type="submit" value="Resize"></from>');
           break; 
        }
        case name === 'iceland': { 
            res.send('<img src="./images/icelandwaterfall.jpg" name="source" alt="encenada" wwidth="'+widht+'" height="'+height+'"/><br/><br/><form method="POST" action="/update"><input type="number" name="widht" placeholder="widht"><input type="number" name="height" placeholder="height"><input type="hidden" name="name" value="'+name+'"><input type="submit" value="Resize"></from>');
           break; 
        }
        case name === 'palmtunnel': { 
            res.send('<img src="./images/palmtunnel.jpg" name="source" alt="encenada" width="'+widht+'" height="'+height+'"/><br/><br/><form method="POST" action="/update"><input type="number" name="widht" placeholder="widht"><input type="number" name="height" placeholder="height"><input type="hidden" name="name" value="'+name+'"><input type="submit" value="Resize"></from>');
           break; 
        }
        case name === 'santamonica': { 
            res.send('<img src="./images/santamonica.jpg" name="source" alt="encenada" width="'+widht+'" height="'+height+'"/><br/><br/><form method="POST" action="/update"><input type="number" name="widht" placeholder="widht"><input type="number" name="height" placeholder="height"><input type="hidden" name="name" value="'+name+'"><input type="submit" value="Resize"></from>');
           break; 
        } 
     }
});


export default resizeImage;