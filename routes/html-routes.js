const router = require('express').Router();
const path = require('path');

//get route to send "index.html" as resposne

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../02-Challenge/Develop/public/index.html'))
});

//get route to send "note.html" as a response

router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, "../02-Challenge/Develop/public/notes.html"))
});

module.exports = router;