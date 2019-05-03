# Lab 37 - Cookies Front End
Joy Hou, March 6, 2018

## Description
We are taking an already built back end and building a front end for it. The app allows the user to sign up and sign in and routes the user to a dashboard page upon successful sign up / sign in. CRUD requests are made from the front end to the back end. The user data is stored and the user is validated in the back end. We are receiving a token back from the back end upon successful sign in / sign up, and we are storing that token in local storage and as a cookie. Upon log out, we clear local storage and our cookie. 

After sign in, the user is directed to the dashboard page, which allows the user to upload photos. The photos are stored in a AWS s3 bucket and the information for the photo is stored in MongoDB on the back end. 

## .dev.env
CDN_URL=/
NODE_ENV=dev
API_URL=http://localhost:3000

## How To Use
Git clone the repository and follow directions in the back-end README to run the back end. Then, with the back end running, from the front-end directory, use "npm run watch" and navigate in your browser to localhost:8080. 

## How To Test
From the front-end directory and with the back end running, use "npm run test" to run tests.

## Components
### Main
The Main component renders the app to the page.

### App
The App component creates a store and sets up Redux and routes. It renders either the Landing or Dashboard components depending on if a token exists in the store. 

## Navbar
The Navbar component renders either the "Signup" and "Signin" page links, or the "Dashboard" and "Logout" page links depending on whether the user is logged in. It handles the deletion of the cookies and dispatching the deletion to the store state when the user logs out. 

## Landing
The Landing component renders the AuthForm component and decides whether the to dispatch our sign in or sign up actions upon submission of the form in AuthForm. It records the route history to allow for back and forward functionality in the browser. 

## AuthForm
The AuthForm component renders the sign in and sign up form elements to the page. It handles the error handling for the form, sets default values to the form, and handles form submission.

## Dashboard
The user is directed to the dashboard component after being logged in. It contains the photo form.
