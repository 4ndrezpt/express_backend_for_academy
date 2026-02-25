const express = require('express');
const cors = require('cors');
const app = express();
const studentsRouter = require('./routes/studentsRoute');
const teachersRouter = require('./routes/teachersRoute');
const coursesRouter = require('./routes/coursesRoute');

app.use(express.json());
app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);
app.use('/courses', coursesRouter);

app.get('/', (req, res)=>{
  res.send('HELLO WORLD FROM EXPRESS');
})

app.listen(3000, ()=>{
  console.log('SERVER active in port: ', 3000);
});
