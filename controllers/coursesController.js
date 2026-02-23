const db = require('../database/connection');

class CoursesController {
  constructor(){

  }
  readAll(req, res){ res.json({msg: "Get all the couses"})}
  readOne(req, res){
    //get URL params
    const { id } = req.params;
    res.json({msg: `Get one the couses ${id}`})}
  post(req, res){ res.json({msg: "Post one courses"})}
  patch(req, res){ res.json({msg: "Patch one courses"})}
  update(req, res){ res.json({msg: "Update one courses"})}
  delete(req, res){ res.json({msg: "Delete one courses"})}
}
module.exports = new CoursesController();
