const movies = require('./db.json')
let globalId = 11

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        // const id = req.params.id
        const {id} = req.params

        const index = movies.findIndex(mov => {
            console.log(mov, id)
            return mov.id === +id
        })

        movies.splice(index, 1)

        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        // const body = req.body

        // const newMovie = {
        //     id: globalId,
        //     title: body.title,
        //     rating: body.rating,
        //     imageURL: body.imageURL
        // }
        let {title, rating, imageURL} = req.body

        let newMovie = {
            id: globalId,
            title, 
            rating,
            imageURL
        }

        movies.push(newMovie)
        res.status(200).send(movies)
        globalId++
    },
    updateMovie: (req, res) => {
        const { id } = req.params
        const { type } = req.body
        const index = movies.findIndex(mov => {
            return mov.id === +id
        })

        if(movies[index].rating === 5 && type === 'plus'){
            res.status(400).send('cannot go above 5')
        } else if(movies[index].rating === 1 && type === "minus"){
            res.status(400).send('cannot go below 1')
        } else if(type === 'plus'){
            movies[index].rating++
            res.status(200).send(movies)
        } else if(type === 'minus'){
            movies[index].rating--
            res.status(200).send(movies)
        } else {
            res.sendStatus(400)
        }
    }
}