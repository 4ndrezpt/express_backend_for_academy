const db = require('../database/connection');
class StudentsController {
  constructor(){

  }
  readAll(req, res){
    try {
      db.query(`SELECT * FROM students LIMIT 0, 20`,
        (err, rows) => {
          res.status(200).json({ id: rows });
        })
    }catch(err){
      res.status(500).send(err.message);
    }
  }
  readOne(req, res){
    //get URL params
    const { id } = req.params;
    res.json({msg: `Get one the students ${id}`})}
  post(req, res){
    const { document, student_name, last_name, email } = req.body;
    try {
      db.query(`INSERT INTO students (id, document, student_name, student_lname, email, phone)
        VALUES(0, ?, ?, ?, ?, null);`,
        [ document, student_name, last_name, email],(err, rows)=>{
          if(err) {
            res.status(400).send(err);
          }
          res.status(201).json({msg: `New row inserted in database ${rows.inserteId}`})
        });
    } catch(err){
      res.status(500).send(err.message);
    }
  }
  patch(req, res){ res.json({msg: "Patch one student"})}
  update(req, res){ res.json({msg: "Update one student"})}
  delete(req, res){ res.json({msg: "Delete one student"})}
}
module.exports = new StudentsController();
