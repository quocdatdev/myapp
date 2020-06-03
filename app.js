require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(morgan(':date[iso] :method :url :status :res[content-length] - :response-time ms | :req[header] | :req[query] | :req[body]'))
app.use(morgan(':date[iso] :method :url :status :res[content-length] - :response-time ms | :req[header] | :req[query] | :req[body]',{
    stream: fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' })
  }))
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use('/index', routes);
app.use('/',(req,res)=>{
    res.send('Your server still alive!')
})
app.listen(PORT, console.log('Server is running on port',PORT));

