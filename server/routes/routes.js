var express = require('express');
const path = require('path')
const router = express.Router();
var Burgers = require('../controller/burgers');

router.get('/:id', Burgers.index);

module.exports = router;