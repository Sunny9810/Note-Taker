const router = require ("express").Router();
const {v4: uuidv4} = require('uuid');
const fs = require ("fs");

//the GET request for api routes
router.get('/api/notes', async (req,res)=>{
    const dbJSON =await JSON.parse(fs.readFileSync("db/db.json","utf8"));
    res.json(dbJson);
});

//the POST request for api routes
router.post('/api/notes', (req,res) => {
    let dbJson= JSON.parse(fs.readFileSync("db/db.json","utf8"));
    let newFeedback ={
        title:req.body.title,
        text:req.body.text,
        id: uuidv4()
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
    res.json(dbJson)
});
