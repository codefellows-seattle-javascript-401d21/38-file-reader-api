This is an application that mocks a user signin/signup. 

To use this machine on your local device clone down the repository. 
Run npm install to get the required node modules. Be sure to add these env files:
In your frontend repo: 
    .dev.env should contain 
```
NODE_ENV="dev"
API_URL="http://localhost:3000"
CDN_URL="/"
```
Your backend repo:
    .env should contain
```
NODE_ENV='dev'
API_URL='http://localhost:3000'
CDN_URL='/'
CORS_ORIGINS='http://localhost:8080'
PORT=3000
MONGO_URI='mongodb://localhost:27017/test'
DEBUG=true
SECRET=12345
```
Start a backend server using npm run:watch, start a webpack build using npm run watch, and ensure you have a mongoDB running. 

To reach the signin route visit localhost:8080/welcome/signin
To reach the signup route visit localhost:8080/welcome/signup
To reach the content page visit localhost:8080/content