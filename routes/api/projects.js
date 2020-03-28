var express = require('express');
var router = express.Router();
var { getRepos } = require('../../db/postgres');

/* GET users listing. */
router.get('/', function(request, response, next) {
  return getRepos()
    .then(res => {
      return response.json(res.rows)
    })
    .catch(e => console.error(e.stack))

});

module.exports = router;