const express = require("express")
const router = express.Router()

const users = [
    {
        "name": "jon",
        "age": "15"
    }
]

router.get('/', (req, res) =>{
    res.send(users)
})
module.exports = router
