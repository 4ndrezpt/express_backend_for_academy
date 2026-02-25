const db = require('../database/connection');
class StudentsController {
  constructor(){

  }
  readAll(req, res){
    const { page = 1} = req.query; //default values if its not provided
    const limit = 5;
    //console.log(page, limit);
    const offset = (page - 1) * limit;
    try {
      db.query(`SELECT * FROM students LIMIT ? OFFSET ?`,
        [limit, offset], (err, rows) => {
          res.status(200).json({ id: rows });
        })
    }catch(err){
      res.status(500).send(err.message);
    }
  }
  readOne(req, res){
    //get URL params
    const { id } = req.params;
    try{
      db.query(`SELECT * FROM students WHERE id = ?`,
        [id], (err, rows) => {
          if(err) {
            res.status(400).send(err.message);
          }
          res.status(200).json(rows[0]);
        });
    }catch(err){
      res.status(500).send(err.message);
    }

  }
  post(req, res){
    const { document, student_name, last_name, email } = req.body;
    try {
      db.query(`INSERT INTO students (id, document, student_name, student_lname, email, phone)
        VALUES(0, ?, ?, ?, ?, null);`,
        [ document, student_name, last_name, email],(err, rows)=>{
          if(err) {
            res.status(400).send(err.message);
          }
          res.status(201).json({msg: `New row inserted in database ${ rows.insertId }`})
        });
    } catch(err){
      res.status(500).send(err.message);
    }
  }
  update(req, res){
    const { id } = req.params;
    try {
      const { document, student_name, last_name, email } = req.body
      db.query(`UPDATE students SET document=?, student_name=?, student_lname=?, email=? WHERE id=?;`,
        [document, student_name, last_name, email, id], (err, rows)=> {
        if (err) {
          res.status(400).send(err);
        }
        if(rows.affectedRows == 1){
          res.status(200).json({ msg: 'Row updated successfully...' });
        }
      });
    }catch(err){
      res.status(500).send(err.message)
    }
  }
  delete(req, res){
    const { id } = req.params;
    try{
      db.query(`DELETE FROM students * WHERE id = ?;`,
        [id], (err, rows) => {
          if(err){
            res.status(400).send({ msg: `We Couldn't delete this row` });
          }
          if(rows.affectedRows == 1){
            res.status(200).send({ msg: `Row deleted succesfully` });
          }
        });
    }catch(err){
      res.status(500).send(err.message);
    }
  }
  patch(req, res){ res.json({msg: "Patch one student"})}
}
module.exports = new StudentsController();
