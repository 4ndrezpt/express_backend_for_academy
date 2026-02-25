const express = require('express');
const router= express.Router();
const coursesController = require('../controllers/coursesController');

//getAll
router.get(('/'), coursesController.readAll);
router.post('/', coursesController.post);
router.route("/:id")
  .get(coursesController.readOne)
  .put(coursesController.update)
  .delete(coursesController.delete)
  .patch(coursesController.patch);
//getOne

module.exports = router;
