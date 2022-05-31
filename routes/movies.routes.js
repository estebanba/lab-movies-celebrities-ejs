const router = require('express').Router()

const MovieModel = require('../models/Movie.model')
const Celebrity = require('../models/Celebrity.model')

router.get("/movies", async (req, res, next) => {
    const allMovies = await MovieModel.find()
    res.render("../views/movies/movies.ejs", {allMovies})
 })
 
 router.get("/movies/create", async(req, res, next) => {
    try {
    const castInfo =  await Celebrity.find()
    //console.log(castInfo, "the cast is")
     res.render("../views/movies/new-movies", {castInfo})
    } catch (err) {
        console.log ("rendering the new-movies-page failed", err)
    }
 })
 
 router.post("/movies/create", async (req, res, next) => {
     try {
        const newMovie = await MovieModel.create(req.body)
        console.log(req.body)
        res.redirect("/movies")
    } catch (err) {
         res.redirect("/movies/create");
         console.log("this POST-method is just not working!!", (err))
    }
 })

module.exports = router