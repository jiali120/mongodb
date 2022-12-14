//jshint esversion:6

const mongoose = require('mongoose');

//only use one line to replace 8 to 27 lines
//connect database if the database not exist will creat one
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true})

// Replace the uri string with your connection string.
/*const url ='mongodb://localhost:27107'
  //"mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";

  //database name
  const dbName = 'fruitsDB';

const client = new MongoClient(url, { useNewUrlParser: true});

// use connect method to connect to the server
client.connect(function(err){
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    findDocuments(db, function(){
        client.close();
    });   
});*/


//replace 51 to 93 lines
//creat schema
const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
})


const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "apple",
  rating: 8,
  review: "Great"

});

fruit.save();

//mogoose insert
/*
//if want to add new fruit
const kiwi = new Fruit({
  name: "kiwi",
  score: 8,
  review: "Great"
  
});

const orange = new Fruit({
  name: "orange",
  score: 6,
  review: "just so so"
});
*/

// so now we add find function and then we will comment the insert function,
//becasue if we still keep insert function, everytime when i run the code, 
//our database will insert them again and again
/*Fruit.insertMany([kiwi, orange], function(err){
  if(err){
    console.log(err);
  }else{
    console.log("succesfully saved all the fruit")
  }
});*/

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    //console.log(fruits);

    //after connection our database, we need to close it
    mongoose.connection.close();

    //loop thought fruits array that we got back from our database
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }
})











//mongo
/*const insertDocuments =  function(db, callback){
    //Get the documents collection 
    const collection = db.collection('fruits');

    //Insert some documents
    collection.insertMany([
        //insert some data in here
        {name: "apple",
         score: 8,
          review: "Great"},
        {name: "orange",
         score: 6,
         review: "banana"},
        {name: "apple",
         score: 9,
         review: "Great"}
    ], function(err, result){

        // dedicated to validation
        //validate to make sure that there are no errors when we inserted our document
        assert.equal(err, null);
        //ensure we have 3 results that are inserted into our collection
        // if that is so then we are going to log inserted 3 documents into the collection.
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });

};

//we are going to get back the objct that we got from the find function and we are going to log those fruits in to the console
const findDocuments = function(db, callback){
    //get the documents collection
    const collection = db.collection('fruits');
    //find some documents
    collection.find({}).toArray(function(err,fruits){
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits)
        callback(fruits);
    })
}*/

/*async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/

