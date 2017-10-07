var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/prisync";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database" + url + "created!");
var myobj = [
            { name:'sri', code:'java' , category:'oops', brand:'spectra'  }
            
        ];
db.collection("prisync").insertMany(myobj,function(err,res){
    
    if(err) throw err;
     console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
});
   /* var query = {status: 'Open'};
    db.collection("prisync").find({query}).toArray(function(err,result){
        if(err) throw err;
    console.log(result);
    db.close();
    });*/
  
});