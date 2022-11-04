# mongodb
##### most popular way of working with MongDB and Node.js is through using the package called *mongoose*-----the reason is because it vastly simplifies and cuts down on the code that is required in order to work with your MongoDB database.

### https://www.mongodb.com/docs/drivers/?_ga=2.155542648.2128888816.1667508921-2052471801.1667508921
##### the mongoDB link already step by step tell us how to get started using the native MongoDB Node.js driver.

####### npm init -y   -------------means yes for everything, we do not need to step by step see the package.json requirment

1. mongod  ------- run mongodb
2. write mongod first, and then node app.js to connect database
3. show dbs   ------ can see db part
4. use databaseName    ------ and then  show collections  ------- can see collection's name
5. db.databaseName.find()     ------- show all data we currently have
6. swithc to our database first:   use fruitsDB  ------- and then delete the database using:  db.dropDtabase()


##### mongoose package elegant mongodb modeling for node.js---- ODM is Object Document Mapper   ----- it will allow the node.js app which speaks the language of js objects to be able to talk to the MongoDB database which speaks in the language of documents and collections and databases
