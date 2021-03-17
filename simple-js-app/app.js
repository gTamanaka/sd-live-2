const express = require('express')
const path = require('path');
const mustacheExpress = require('mustache-express');
const axios = require('axios').default;

const app = express()
const PORT = process.env.PORT || '3000'
const HELPY = process.env.HELPY || "0.0.0.0"

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


app.get("/", async (req,res,next)=>{
  try {
    let temperatura = (await axios.get(`http://${HELPY}:8000`)).data
    res.render( 'index', {line: temperatura})
    // res.sendFile(path.join(__dirname + '/index.html'));
  } catch (error) {
   console.error(error) 
  }
})


app.listen(PORT,()=>{
  console.log(`Servidor Up, pronto para receber requests na porta ${PORT}`)
})
