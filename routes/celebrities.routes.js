const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model')

router.get("/", async (req, res, next) => {
   try {
    const allCelebs = await Celebrity.find()
    res.render("celebrities/celebrities", {allCelebs})       
   } catch (error) {
    console.log('error creating new celebrity', error)       
   }
})

router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrities")
})

router.post("/create", async (req, res, next) => {
    try {
       const newCelebrity = await Celebrity.create(req.body)
       console.log(req.body)
       res.redirect("/celebrities")
   } catch (err) {
        res.redirect("/celebrities/create");
        console.log("this POST-method is just not working!!", (err))
   }
})


module.exports = router

