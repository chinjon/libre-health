var express = require('express');
var router = express.Router();

router.get('/', (request,response) => {
  response.render("./../../public/index.html")
});

module.exports = router;
