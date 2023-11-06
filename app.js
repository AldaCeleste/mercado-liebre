const express = require('express');
const path= require('path');
const app = express();

const publicFolderPath = path.resolve(__dirname,'./public');
app.use(express.static(publicFolderPath));

app.listen(3000,()=>{
  console.log('Servidor en marcha en el puerto 3000');
})
app.get('/',(req, res)=>{
  res.sendFile(path.resolve(__dirname, './view/home.html'))
})

app.get('/register',(req, res)=>{
  res.sendFile(path.resolve(__dirname,'./view/register.html'))
})