# mongodb
##### most popular way of working with MongDB and Node.js is through using the package called *mongoose*-----the reason is because it vastly simplifies and cuts down on the code that is required in order to work with your MongoDB database.

### https://www.mongodb.com/docs/drivers/?_ga=2.155542648.2128888816.1667508921-2052471801.1667508921
##### the mongoDB link already step by step tell us how to get started using the native MongoDB Node.js driver.

####### npm init -y   -------------means yes for everything, we do not need to step by step see the package.json requirment

1. mongod  ------- run mongodb,  run mongod first and then open mongo shell
2. write mongod first, and then node app.js to connect database
3. show dbs   ------ can see db part
4. use databaseName    ------ and then  show collections  ------- can see collection's name
5. db.databaseName.find()     ------- show all data we currently have
6. swithc to our database first:   use fruitsDB  ------- and then delete the database using:  db.dropDtabase()


##### mongoose package elegant mongodb modeling for node.js---- ODM is Object Document Mapper   ----- it will allow the node.js app which speaks the language of js objects to be able to talk to the MongoDB database which speaks in the language of documents and collections and databases

1. studio 3T is the professional GUI for MongoDB.
2. turn on mongod first, and then use studio 3T to connect mongoDB, and we can creat database in studio 3T



### create data
* db.createCollection(name, options)

### updata data
* db.collection.update()
* db.collection.save()

### insert data
* db.COLLECTION_NAME.insert(document) 或 db.COLLECTION_NAME.save(document)
* db.collection.insertOne() 用于向集合插入一个新文档
* db.collection.insertMany() 用于向集合插入一个多个文档
* db.col.insert({title: 'MongoDB 教程', 
    description: 'MongoDB 是一个 Nosql 数据库',
    like:'100'  
})

### delete data
* db.collection.drop()

### query
* db.collection.find(query, projection)
* db.col.find().pretty()
