
import sharp from 'sharp';

import express from 'express';


const app = express();
app.use(express.static('public'));


const resize = (widthVal : string, heightVal : string, name : string) => {
  switch(name !=="") { 
    case name === 'encenada': { 
      sharp('./public/images/encenadaport.jpg')
      .resize(Number(widthVal), Number(heightVal))
      .toFile('./public/images/resized'+name+widthVal+'X'+heightVal+'.jpg');
       break; 
    } 
    case name === 'fjord': { 
      sharp('./public/images/fjord.jpg')
      .resize(Number(widthVal), Number(heightVal))
      .toFile('./public/images/resized'+name+widthVal+'X'+heightVal+'.jpg');
       break; 
    }
    case name === 'iceland': { 
      sharp('./public/images/icelandwaterfall.jpg')
      .resize(Number(widthVal), Number(heightVal))
      .toFile('./public/images/resized'+name+widthVal+'X'+heightVal+'.jpg');
       break; 
    }
    case name === 'palmtunnel': { 
      sharp('./public/images/palmtunnel.jpg')
      .resize(Number(widthVal), Number(heightVal))
      .toFile('./public/images/resized'+name+widthVal+'X'+heightVal+'.jpg');
       break; 
    }
    case name === 'santamonica': { 
      sharp('./public/images/santamonica.jpg')
      .resize(Number(widthVal), Number(heightVal))
      .toFile('./public/images/resized'+name+widthVal+'X'+heightVal+'.jpg');
       break; 
    } 
    default: { 
      sharp('./public/images/encenadaport.jpg')
      .resize(Number(widthVal), Number(heightVal))
      .toFile('./public/images/resized'+widthVal+'X'+heightVal+'.jpg');
       break; 
    }
  } 
}


export default resize;