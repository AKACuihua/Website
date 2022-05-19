var loki = require('lokijs');

var db = new loki('data.json', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000
});
// implement the autoloadback referenced in loki constructor
function databaseInitialize() {
  var ktvs = db.getCollection("ktvs");
  if (ktvs === null) {
    ktvs = db.addCollection("ktvs");
  }
}

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Handle the Form */
router.post('/form', function (req, res, next) {

  console.log("req.body");
  console.log(req.body);

  db.getCollection("ktvs").insert(req.body);

  let result = db.getCollection("ktvs").find();

  result.forEach(function (b) {
    delete b.age;
    delete b.remarks;
  });

  res.json(result);

});

module.exports = router;


