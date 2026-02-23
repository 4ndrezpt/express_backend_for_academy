const express = require('express');
const router= express.Router();
const teachersController = require('../controllers/teachersController');

//getAll
router.get(('/'), teachersController.readAll);
router.post('/', teachersController.post);
router.route("/:id")
  .get(teachersController.readOne)
  .put(teachersController.update)
  .delete(teachersController.delete)
  .patch(teachersController.patch);
//getOne

module.exports = router;
