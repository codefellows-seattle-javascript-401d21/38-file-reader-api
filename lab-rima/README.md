## Signin/Signup
There are three routes:
> /welcome/signup to sign up

> /welcome/signin to sign in

> /content -> once you are authenticated, you will be redirected to this page or you can access manually

#### Usage
1. Clone this repo in your desired location.
2. Run
```
npm install
```
3. Run
```
npm run build
```
4. Go to localhost:8080/welcome/signup to signup
#### Config
In .env for backend
```
PORT=3000
DEBUG=true
CORS_ORIGINS=http://localhost:8080
SECRET='any string you like'
MONGO_URI=mongodb://localhost/testdb
```
In .env for frontend
```
CDN_URL=/
NODE_ENV=dev
API_URL=http://localhost:3000
```
