const express = require('express');
const router= express.Router();
const studentsController = require('../controllers/studentsController');

//getAll
router.get(('/'), studentsController.readAll);
router.post('/', studentsController.post);
router.route("/:id")
  .get(studentsController.readOne)
  .put(studentsController.update)
  .delete(studentsController.delete)
  .patch(studentsController.patch);
//getOne

module.exports = router;
