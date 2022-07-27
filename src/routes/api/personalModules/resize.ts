
import sharp from 'sharp';

import express from 'express';


const app = express();
app.use(express.static('public'));


const resize = (widthVal : string, heightVal : string) => {
  sharp('./public/images/encenadaport.jpg')
  .resize(Number(widthVal), Number(heightVal))
  .toFile('./public/images/resizedencenada'+widthVal+'X'+heightVal+'.jpg');
}


export default resize;