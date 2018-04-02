## 38 File Reader API

here are the ENV for front end and back end.

### Backend 
```
PORT=3000
DEBUG=true
CORS_ORIGINS=http://localhost:8080
SECRET='Gregor and The Hound'
MONGO_URI=mongodb://localhost/testdb
AWS_BUCKET=‘you stuff here’
AWS_ACCESS_KEY_ID='you stuff here’
AWS_SECRET_ACCESS_KEY=you stuff here’
```

---
### Frontend

```
NODE_ENV="dev"
API_URL="http://localhost:3000"
CDN_URL="/"
```

---
## to start it up

do the navagate to the file and then do a `npm i` and it should load all the packages and then run in 3 different terminals 

* in the backend file
```javascript
npm run start-db
```

* in the backend file
```javascript
npm run start:watch
```

* in the frontend 
```javascript
npm run watch
```


---
### no test for frontend. 


---
## login/Signup
go to `localhost:8080/welcome/signin` for sign in and `localhost:8080/welcome/signup` for signing up.

login with a 
* username
* email
* password

and signin is done with 
* username
* password


---
## Content page 
go to `localhost:8080/content` to get to your page where you have a profile and a area to upload images. once you have uploaded an image, it will be displayed below with the comment that you added for it.

you will noticed that you dont have a avatar image so you will need to go to the `settings`to update your profile.

---
## Settings
here you can see your profile and then you can update your avatar image and your Bio. just click on the update button and update your info. once complete, your info will be saved and you can go back to your content page. 

