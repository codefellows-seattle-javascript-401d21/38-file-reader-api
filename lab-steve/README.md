# 38 - File Reader API

- **Author**: Steve Carpenter
- **Version**: 1.0.0

## Overview
This is a simple app that currently allows a user to sign in or sign up.
They can visit their `/profile` page to see a welcome message and sign out.
Once signed in, they are given a token which is stored in localStorage and cookies.
This token allows them to upload photos to the app which are then stored in
Amazon S3 bucket using API keys stored in their backend `.env` file.

## Getting Started
- Clone the repository to your local directory from [here](https://github.com/stevegcarpenter/38-file-reader-api)
- Install all the necessary modules using the `npm install` command in both the backend and frontend directories
- Start the mongo database in the backend directory by running `npm run start-db`
- Start `nodemon` in the backend directory by running `npm run start:watch`
- Run the webpack build in the front end directory by executing `npm run watch`
- Open the browser to `http://localhost:8080` and enjoy

### Details
- In the front end directory, you will need a `.dev.env` with the following environment variables defined:
```bash
CDN_URL
NODE_ENV
API_URL
```
- In the back end directory, you will need a `.env` file with the following environment variables defined:
```bash
PORT
DEBUG
CORS_ORIGINS
SECRET
MONGO_URI
AWS_ACCESS_KEY_ID='<a aws access key id>'
AWS_SECRET_ACCESS_KEY='<a aws secret access key>'
AWS_BUCKET='<a aws bucket>'
```

## Architecture
- [JavaScript](https://www.javascript.com/)
- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Webpack](https://webpack.js.org/)
- [npm](https://npmjs.org/)

## Change Log
```
```
