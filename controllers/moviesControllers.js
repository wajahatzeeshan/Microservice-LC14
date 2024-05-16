import Movie from "../models/movie.js"

async function getAllMovies(req, res, next) {
    try {
        const movies = await Movie.find()
         res.status(200).json(movies)
    } catch(error) {
        //console.error(error);
        next(error)
    }
    //return res.send("this is coming from the GET controller function");
}

async function createMovie(req,res,next){
    try{
        const newMovie = await Movie.create(req.body)

         res.status(201).send(newMovie)
    } catch (err) {
        next(err)
    }
    //return res.send("this is coming from the POST controller");
}

async function getSingleMovie(req, res, next){
    try{
        const movie = await Movie.findById(req.params.id)
         res.status(200).send(movie);
    } catch (err) {
        next(err)
    }
    //return res.send("this is coming from the POST controller");
}

async function updateMovie(req,res,next){
    try{
        const movie = await Movie.findById(req.params.id)

        if (!movie){
         res.send({message: "No movie found"})
        }

        movie.set(req.body)
        movie.save()
        res.status(200).json(movie)

    } catch (err) {
        next(err)
    }
    //return res.send("this is coming from the POST controller");
}

async function deleteMovie(req,res,next){
    try{
        const movie = await Movie.findByIdAndDelete(req.params.id)
    
        if (!movie) {
            return res.status(404).send({message: "Movie does not exist"})
        }
     return res.status(200).json(movie)
    } catch (err) {
        next(err)
    }
    //return res.send("this is coming from the POST controller");
}

export default{
    getAllMovies,
    createMovie,
    getSingleMovie,
    updateMovie,
    deleteMovie
}