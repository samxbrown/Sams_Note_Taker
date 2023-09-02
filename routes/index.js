const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");

router.get("/notes",(req,res) => {
    res.json(db)
})

router.post("/notes",(req,res) => {
    // console.log(req.body)
    db.push(req.body)
    console.log(db)
    fs.writeFileSync("./db/db.json", JSON.stringify(db))
    res.json(db)
})

module.exports = router;