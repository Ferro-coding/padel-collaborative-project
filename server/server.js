const express = require('express')
const app = express()

app.get("/api", (req, res) =>{
    res.json({"users":["userOne", "usertwo", "userThree"]})
})


app.listen(5000, ()=>{console.log("srrver started on port 5000")})