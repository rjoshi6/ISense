var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 4004,
    publicDir = process.argv[2] || __dirname + '/public';
var exec = require('child_process').exec;
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;



//Show homepage
app.get("/", function (req, res) {
  res.redirect("/index.html");
  console.log("shubham ");
});
app.get("/index/", function (req, res) {
  res.redirect("/index.html");
  console.log("shubham ");
});

app.get("/search", function (req, res){
  console.log("shubham batra");
   var pro_name = req.query.name;
   var pro_code = req.query.code;
   var pro_category = req.query.category;
   var pro_brand = req.query.brand;
   var products;



  MongoClient.connect('mongodb://127.0.0.1:27017/prisync', function(err, db) {
  if (err) throw err;
    console.log("Connected to Database");


    var documen = {name:pro_name, code:pro_code , category:pro_category, brand:pro_brand };

  //insert record
  db.collection('urlinfo').insert(documen, function(err, records) {
    if (err) throw err;
    });

 db.collection('urlinfo').find({}, function(err, products){
    if(err){
        console.log(err);
        res.json(err);
    }
    else{
        res.json(products);
    }
});  //line 48 ======
 console.log(products);
 res.json(products);

  });
  db.close();
});
  //console.log(res.body);

app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));
//Search page
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

console.log("Server showing %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port);