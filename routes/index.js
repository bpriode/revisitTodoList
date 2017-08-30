
const express = require("express");
const models = require("../models/index");

const router = express.Router();


router.get('/', function(req, res){
  models.todos.findAll({
  })
  .then(function(data){
    res.render('list', {task: data});
  })
});

router.post("/", function (req, res) {
  models.todos.create({
    title: req.body.task,
    completed: false
  })
  .then(function(data) {
    res.redirect('/');
  });
});

router.post('/completed/:id', function(req, res) {
  models.todos.update({
    completed: true,
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function(data) {
    res.redirect('/');
  });
});


router.get('/destroy/:id', function(req, res) {
  models.todos.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(data) {
    res.redirect('/');
  });
});

router.get('/edit/:id', function(req, res) {
  models.todos.findOne({
  })
  .then(function(data){
    res.render('edit', {task: data});
  })
})

router.post('/edit/:id', function(req, res) {
  models.todos.update({
    title: req.body.task
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function(data) {
    res.redirect('/');
  });
});


module.exports = router;
