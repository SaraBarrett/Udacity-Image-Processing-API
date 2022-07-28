import express, { Request, Response } from 'express';   
const imageLoading = express.Router();


imageLoading.get('/', (req : Request, res: Response) => {

    if(req.query){
        const name = req.query['name'];
        switch(name !== "") { 
            case name === 'encenada': { 
                res.send('<img src="./images/encenadaport.jpg" name="source" alt="encenada" width="900" height="600"/><br/><br/><form method="POST" action="/update"><input type="number" name="widht" placeholder="widht" required><input type="number" name="height" placeholder="height" required><input type="hidden" name="name" value="'+name+'"><input type="submit" value="Resize"></from>');
               break; 
            } 
            case name === 'fjord': { 
                res.send('<img src="./images/fjord.jpg" name="source" alt="encenada" width="900" height="600"/><br/><br/><form method="POST" action="/update"><input type="number" name="widht" placeholder="widht"><input type="number" name="height" placeholder="height"><input type="hidden" name="name" value="'+name+'"><input type="submit" value="Resize"></from>');
               break; 
            }
            case name === 'iceland': { 
                res.send('<img src="./images/icelandwaterfall.jpg" name="source" alt="encenada" width="900" height="600"/><br/><br/><form method="POST" action="/update"><input type="number" name="widht" placeholder="widht" required><input type="number" name="height" placeholder="height" required><input type="hidden" name="name" value="'+name+'"><input type="submit" value="Resize"></from>');
               break; 
            }
            case name === 'palmtunnel': { 
                res.send('<img src="./images/palmtunnel.jpg" name="source" alt="encenada" width="900" height="600"/><br/><br/><form method="POST" action="/update"><input type="number" name="widht" placeholder="widht" required><input type="number" name="height" placeholder="height" required><input type="hidden" name="name" value="'+name+'"><input type="submit" value="Resize"></from>');
               break; 
            }
            case name === 'santamonica': { 
                res.send('<img src="./images/santamonica.jpg" name="source" alt="encenada" width="900" height="600"/><br/><br/><form method="POST" action="/update"><input type="number" name="widht" placeholder="widht" required><input type="number" name="height" placeholder="height" required><input type="hidden" name="name" value="'+name+'"><input type="submit" value="Resize"></from>');
               break; 
            } 
            default: { 
                res.send('<h3>We dont have any image with this name, please choose another.</h3>');
               break; 
            } 
         }
    }else{
        res.send('<h3>Add an image name to load!</h3>');
    }    
});


export default imageLoading;