const db = require('../database/connection');
class TeachersController {
  constructor(){

  }
  readAll(req, res){ res.json({msg: "Get all the Teachers"})}
  readOne(req, res){
    //get URL params
    const { id } = req.params;
    res.json({msg: `Get one of the teacher ${id}`})}
  post(req, res){ res.json({msg: "Post one teacher"})}
  patch(req, res){ res.json({msg: "Patch one teacher"})}
  update(req, res){ res.json({msg: "Update one teacher"})}
  delete(req, res){ res.json({msg: "Delete one teacher"})}
}
module.exports = new TeachersController();
