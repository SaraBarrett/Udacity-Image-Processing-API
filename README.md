# Udacity-Image-Processing-API

"scripts": {
"start": "nodemon src/index.ts",
"build": "npx tsc",
"lint": "eslint --ext .js,.ts .",
"prettier": "prettier --write ./**/**.ts",
"jasmine": "jasmine",
"test": "npm run build && npm run jasmine"
}

Endpoints:

- http://localhost:2000/
- http://localhost:2000/loading?name= //encenada, fjord, iceland, palmtunnel, santamonica
- http://localhost:2000/update
