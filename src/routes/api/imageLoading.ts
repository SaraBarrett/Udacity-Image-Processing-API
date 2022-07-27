import express from 'express';   
const imageLoading = express.Router();


imageLoading.get('/', (req, res) => {
    
    res.send('<img src="./images/encenadaport.jpg" name="source" alt="encenada" width="900" height="600"/><br/><br/><form method="POST" action="/update"><input type="number" name="widht" placeholder="widht"><input type="number" name="height" placeholder="height"><input type="submit" value="Resize"></from>');
    
});


export default imageLoading;