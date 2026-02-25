const db = require('../database/connection');
class TeachersController {
  constructor(){

  }
  readAll(req, res){
    const { page = 1 } = req.query;
    const limit = 5;
    const offset = (page - 1) * limit;
    try {
      db.query(`SELECT * FROM teachers LIMIT ? OFFSET ?;`,
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
      db.query(`SELECT * FROM teachers WHERE id = ?;`,
        [id], (err, rows)=> {
          res.status(200).json(rows[0]);
        })
    }catch(err){
      res.status(500).send(err.message);
    }
  }
  post(req, res){
    const { document, first_name, last_name, email, phone } = req.body;
    try {
      db.query(`INSERT INTO teachers (document, first_name, last_name, email, phone)
        VALUES (?,?,?,?,?);`, [document, first_name, last_name, email, phone],
        (err, rows)=> {
          if (err) { res.status(400).send(err.message); }
          res.status(201).json({ msg: `New row inserted in database ${rows.insertId}`})
        }
      );
    }catch(err){
      res.status(500).send(err.message);
    }
  }
  update(req, res){
    const { id } = req.params;
    try{
      const { document, first_name, last_name, email, phone } = req.body;
      db.query(`UPDATE teachers SET document=?, first_name=?, last_name=?, email=?,
        phone=? WHERE id=?;`,[document, first_name, last_name, email, phone, id],
        (err, rows)=> {
          if(err) { res.status(400).send(err.message)}
          if(rows.affectedRows == 1){
            res.status(200).json({ msg: `Row deleted successfully deleted`})
          }
        }
      )
    }catch(err){
      res.status(500).send(err.message);
    }
  }
  delete(req, res){
    const { id } = req.params;
    try{
      db.query(`DELETE FROM teachers WHERE id = ?;`,
        [id], (err, rows)=> {
          if(err){res.status(400).send({ msg: `We couldn't delete this record.`})}
          if(rows.affectedRows == 1){
            res.status(200).send({ msg: "Record succesfully deleted..."})
          }
        }
      )
    }catch(err){
      res.status(500).send(err.message);
    }
  }
  patch(req, res){ res.json({msg: "Patch one teacher"})}
}
module.exports = new TeachersController();
