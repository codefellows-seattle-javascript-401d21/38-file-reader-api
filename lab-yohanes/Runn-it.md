#Front-End
RUN FRONT END
npm run watch


#Back-End
RUN MONGO SHELL
mongo

RUN MONGO DATABASE
npm run start-db

RUN SERVER
npm run start:watch

#MONGO-DB
PULL UP DATABASE
user cfgram

db.user.find().pretty()