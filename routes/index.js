const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");

router.get("/notes", (req, res) => {
    res.json(db)
})

router.post("/notes", (req, res) => {
    const note = req.body;
    note.id = db.length
    db.push(note)
    console.log(db)
    fs.writeFileSync("./db/db.json", JSON.stringify(db))
    res.json(db)
})

router.delete("/notes/:id", (req, res) => {
    let newdb = []
    for (let i = 0; i < db.length; i++) {
        if (db[i].id != req.params.id) {
            newdb.push(db[i])
        }
    }
    res.json(newdb);
})

module.exports = router;