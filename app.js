const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // POST: recognize json data 
app.use(express.urlencoded({extended: false})); // POST: recognize form data

app.get('/', (req,res) => {
    //default content-typ: text/html
    res.set('Content-Type', 'text/html');
    // receive csv
    // process csv
    // try to save csv info to database
    // if database save is success
    // then we send back "we saved to database, and here is the info in csv"
    res.status(200).send('I got it bro');
});

app.get('/getJSON-auto', (req,res)=>{
    //.send() auto detects type of content
    // this one can take what ever info
    res.send({ msg: "message from JSON object" })
})

app.get('/getJSON-json()', (req, res) =>{
    // this one only takes json as argument
    res.json({msg: "JSON using res.json"})
})
app.get('/getHeaderContent', (req,res) =>{
    res.send(req.header('host') + "\ncontent\n" + req.rawHeaders);
})

app.listen(PORT, () => {
    console.log("Example app listening on port 3000!");
});

app.post('/contact', (req, res) => {
    console.log(req.body.name);
    if (!req.body.name)
    {
        // send error
        return res.status(400).send('csv-file required');
    }
    res.send(req.header('Content-Type') + "\n" + req.body.name);
})

 // Console will print the message
 console.log('Server running at http://127.0.0.1:3000/');