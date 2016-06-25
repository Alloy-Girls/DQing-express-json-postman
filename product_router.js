var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json());

router.post('/', require("./addItem").insertData);
router.delete('/:id', require("./deleteItem"));
router.get('/:id', require("./findItem").findOne);
router.get('/', require("./findItem").findAll);
router.put('/:id', require("./updateItem"));

module.exports  = router;
