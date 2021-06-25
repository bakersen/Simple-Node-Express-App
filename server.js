const express = require('express');
const bodyParser= require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=> {
   res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => { 
  console.log(req.body)
})

app.listen(3000, ()=>{console.log('listening on 3000')})


// WHEN YOU ARE READING FROM THE SERVER
// 1. when you a visit a browser ==> Browser conducts a READ operation
// 2. it conducts this READ operation by sending a GET request to the SERVER
// 3. Express(helps with creating a server) handles GET request by using the get() method



// 1. When you want to submit some data to the server, the browser conducts a CREATE operation 
// 2. it conducts this CREATE operation by sending a POST request to the server. 
// 3. This POST request can be triggered either with JavaScript or through a <form> element.
// 4. Express(helps with creating a server) handles POST request by using the post() method
