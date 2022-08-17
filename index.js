
const express = require('express');
const wordCounter  = require('./wordCounter.js');
const app = express();              
const port = 5000;                  
app.use(express.text())

app.post('/test', (req, res) => {
  const wf = wordCounter.wordFreq(req.body)
  res.send(wf);
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});