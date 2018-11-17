const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Microservice DevOps'))

app.get('/suma/:number1/:number2', function (req, res) {
   var number1 = parseInt(req.params.number1);
   var number2 = parseInt(req.params.number2);
   var suma = number1 + number2;
   res.send( 'Result: ' + suma);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
