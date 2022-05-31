const router = require('express').Router()

const Celebrity = require('../models/Celebrity.model')

router.get("/celebrities", async (req, res, next) => {
   const allCelebs = await Celebrity.find()
   //console.log(allCelebs)
   res.render("../views/celebrities/celebrities.ejs", {allCelebs})
})

router.get("/celebrities/create", (req, res, next) => {
    console.log("ddddd")
    res.render("../views/celebrities/new-celebrities")
})

router.post("/celebrities/create", async (req, res, next) => {
    try {
       const newCelebrity = await Celebrity.create(req.body)
       console.log(req.body)
       res.redirect("/celebrities/")
   } catch (err) {
        res.redirect("/celebrities/create");
        console.log("this POST-method is just not working!!", (err))
   }
})


module.exports = router