import {start} from './library/server.js';
start({PORT: process.env.PORT, MONGO_URI: process.env.MONGO_URI});  