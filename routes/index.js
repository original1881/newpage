var express = require('express');
var router = express.Router();

var controller = require('../controller/controller');

/* GET home page. */
router.get('/', controller.getIndex);

router.post('/request', controller.postRequest);

module.exports = router;
