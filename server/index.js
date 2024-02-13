const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const ctrl = require('./controller.js')

app.get(`/api/movies`, ctrl.getMovies)
app.delete(`/api/movies/:id`, ctrl.deleteMovie)
app.post(`/api/movies`, ctrl.createMovie)
app.put(`/api/movies/:id`, ctrl.updateMovie)


app.listen(4004, () => console.log(`Take us to warp ${4004}!`))













// 1. straitforward import and dot notation
// const ctrl = require('./controller.js')
// console.log(ctrl)

// app.get(`/api/movies`, ctrl.getMovies)
// app.delete(`/api/movies/:id`, ctrl.deleteMovie)

// 2. Importing the object and then destructuring on a separate line
// const ctrl = require('./controller.js')
// const {getMovies, deleteMovie} = ctrl


// 3. Importing and immediately desctructuring on the same line. 
// const {getMovies, deleteMovie} = require('./controller.js')

// app.get(`/api/movies`, getMovies)
// app.delete(`/api/movies/:id`, deleteMovie)



// const myObj = {
//     name:'Scott',
//     age: 25
// }

// console.log(myObj.name)

// // const name = myObj.name
// const {name} = myObj

// console.log(name)