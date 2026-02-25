const db = require('../database/connection');

class CoursesController {
  constructor(){

  }
  readAll(req, res){
    const { page = 1 } = req.query;
    const limit = 5;
    const offset = (page - 1) * limit;
    try{
      db.query(`SELECT  * FROM courses LIMIT ? OFFSET ?;`,
        [limit, offset], (err, rows)=> {
          res.status(200).json({ id: rows });
        });
    }catch(err){
      res.status(500).json(err.message);
    }
  }
  readOne(req, res){
    //get URL params
    const { id } = req.params;
    try{
      db.query(`SELECT * FROM courses WHERE id=?`, [id],(err, rows)=>{
        if(err){
          res.status(400).send(err.message);
        }
        res.status(200).json(rows[0]);
      })
    }catch (err) {
      res.status(500).send(err.message);
    }
  }
  post(req, res){
    const { name, description, academy_id } = req.body;
    try{
      db.query(`INSERT INTO courses (name, description, academy_id) VALUES (?, ?, ?)`,
        [ name, description, academy_id ],(err,rows)=>{
          if(err){
            res.status(400).send(err.message);
          }
          res.status(201).json({ msg: `New row inserted into courses ${rows.insertId}`})
      })
    }catch(err){
      res.status(500).send(err.message);
    }
  }
  update(req, res){
    const { id } = req.params;
    try {
      const { name, description, academy_id } = req.body;
      db.query(`UPDATE courses SET name=?, description=?, academy_id=? WHERE id=?`),
      [name, description, academy_id, id], (err, rows)=> {
        if(err){
          res.status(400).send(err);
        }
        if(rows.affectedRows == 1){
          res.status(200).json({ msg: `Rows updated successfully...`})
        }
      }
    } catch(err){
      res.status(500).send(err.message);
    }
  }
  delete(req, res){
    const { id } = req.params;
    try{
      db.query(`DELETE FROM courses * WHERE id = ?;`, [id],
        (err, rows)=> {
          if(err){
            res.status(400).send({ msg: "We couldn't delete the row from registries."})
          }
          if(rows.affectedRows == 1){
            res.status(200).send({ msg: "Row deletected successfully..."})
          }
        })
    }catch(err) {
      res.status(500).send(err.message);
    }
  }

  patch(req, res){ res.json({msg: "Patch one courses"})}
}
module.exports = new CoursesController();
