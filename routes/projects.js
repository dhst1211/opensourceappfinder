var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let query = "SELECT * FROM `repository` ORDER BY id ASC";

  db.query(query, (err, result) => {
    if (err) {
        res.redirect('/');
    }

    res.render('projects.ejs', {
        title: "Projects page",
        projects: result
    });
  });

});

module.exports = router;
