const express = require('express')
const app = express()
const PORT = 8000

const cartoons = {
  barbie: {
    title: 'Barbie in a Diamond Castle',
    genre: 'Fantasy',
    year: 2001,
  },

  zootopia: {
    title: 'Zootopia',
    genre: 'Fantasy',
    year: 2016,
  },

  'tom and jerry': {
    title: 'Tom and Jerry',
    genre: 'Fantasy',
    year: 1996,
    funfact: 'Duhhhh!!!!!!!! Everybody loves Tom and Jerry',
  },
}

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/index.html`)
})

// :cartoonName means that its the query parameter and nota part of the api
app.get('/api/:cartoonName', (request, response) => {
  const cartoonTitle = request.params.cartoonName.toLowerCase()
  if (cartoons[cartoonTitle]) {
    response.json(cartoons[cartoonTitle])
  } else {
    response.json(cartoons['tom and jerry'])
  }
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})

// const express = require('express');
// const app = express();
// const cors = require('cors');
// const { default: mongoose } = require('mongoose');
// require('dotenv').config()

// // Mongo DB Connections
// mongoose.connect(process.env.MONGO_DB_URL, {
//     useNewUrlParser: true,

//     useUnifiedTopology: true,
// }).then(response=>{
//     console.log('MongoDB Connection Succeeded.')
// }).catch(error=>{
//     console.log('Error in DB connection: ' + error)
// });

// // Middleware Connections
// app.use(cors())
// app.use(express.json())

// // Routes

// // Connection
// const PORT = process.env.PORT || 5000
// app.listen(PORT, ()=>{
//     console.log('App running in port: '+PORT)
// })
