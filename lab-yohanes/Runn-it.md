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

#LAST LEFT OFF
Part 3 26 minutes right before we upload images to our database using Amazon SW3 buckets. To Be Continued... 