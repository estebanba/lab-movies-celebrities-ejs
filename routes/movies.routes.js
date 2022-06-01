const router = require('express').Router()
const Movie = require('../models/Movie.model')
const Celebrity = require('../models/Celebrity.model')

router.get("/", async (req, res) => {
    const allMovies = await Movie.find()
    res.render("movies/movies", {allMovies})
 })
 
router.get("/create", async (req, res) => {
    const castInfo =  await Celebrity.find()
    res.render("movies/new-movies", { castInfo })
 })
 
 router.post("/create", async (req, res) => {
     try {
        console.log(req.body)
        await Movie.create(req.body)
        res.redirect("/movies")
    } catch (error) {
         res.redirect("/movies/create");
         console.log("this POST-method is just not working!!", (error))
    }
 })

// router.post('/create', async (req, res) => {
//     try {
//       await Movie.create(req.body)
//       res.redirect('/movies')
//     } catch (error) {
//       console.log('Error creating movie: ', error)
//       res.redirect('/movies/create')
//     }
//   })

module.exports = router
