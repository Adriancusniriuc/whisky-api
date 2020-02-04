const express = require('express') // importing the express package 
const mongoose = require('mongoose') // our ORM (middle person) to talk to mongo db for us
const bodyParser = require('body-parser') // importing the body parser package
const app = express() // building our express server

const { port, dbURI } = require('./config/environment') // importing some of our environment variables we need here, these are defined and exported from './config/enivornment.js'
const logger = require('./lib/logger') // importing our logger middleware function, defined and exported from './lib/logger.js'
const router = require('./config/router') // importing our custom router set up, created and exported from './confic/router.js'

//  use mongoose to make the connection to the Mongo Database, it connects using the dbURI address importing from the environment file, we pass it some options and a callback function that will display anY potential error if the connection fails, and a message to let us know it has connected if all goes well
// What are some issues that could occur here? No 1, ensure Mongo is turned on using the `mongod` command in terminal, if it is running, check your dbURI connection string for any errors
mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true }, (err) => {
  if (err) return console.log(err)
  console.log('Mongo is connected')
})

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json()) // registering body parser as the first peice of middleware, creating `req.body` on any reguest containing data sent in the body, (POST AND PUT REQUESTS), next is called automatically from here
 
app.use(logger) // next up is the logger middleware, check this out in './lib/logger', is simply console.logs the incoming request method and url, then calls next()

// Remeber, calling next() from middleware allows the request to fall through to the next piece of middleware, so in our case here, bodyParser calls next itself to allow the request to fall through to the logger, then in the logger, we call next() to allow the request to fall through to the router.

app.use('/api',router) // Our last peice of middleware, the router, this is where the request will fall through into our custom router, the HTTP verb method and request url will be matched inside the router, and relay that request to its appropriate controller, see more in './congif/router.js'
app.use('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(port, () => console.log(`Express is up and running on ${port}`)) // Our call to app.listen to start the process.



// Steps to follow for tonight’s homework:
//Yarn init
// - Install packages
// yarn add express body-parser mongoose bcrypt and require them in index 

// - config/environment.js
// Set up the file (do look up how we did it in class you’re not expected to know the syntax for this)
// port 4000 and the location of your database aka 
//call your database whatever you want your collection to be called

// - index.js
// require express, port - get the app running first (console.log). 
//const { port, dbURI } = require('./config/environment')
//Check everything is working using $ yarn start


// - index.js
// Set up mongoose, databaseURI - make sure this connects. If they both work don’t forget to add your body-parser next. 


// Set up the logger file.  inside the lib folder

// - index.js 
// import the logger and check everything is working (don’t worry about the router yet)

// - models
// don’t forget to require mongoose!
// Make the schema (and model), keep it simple!

// - db/ seeds.js
// Make seeds file and test that it builds (3 seeds is enough)
// Don’t forget to import your model in the seeds
// Add the 'seed' script in your package.json (check the classwork's package json;

// {
//   "name": "jurassic-park-api",
//   "version": "1.0.0",
//   "main": "index.js",
//   "license": "MIT",
//   "scripts": {
//     "start": "nodemon",
//     "seed": "node db/seeds.js"
//   },
//   "dependencies": {
//     "body-parser": "^1.19.0",
//     "express": "^4.17.1",
//     "mongoose": "^5.8.10"
//   }
// }


// Don’t forget to run this command for the seeds to be added to the DB: $ yarn seed 


// - router & controllers 
// Make routes and each controller - INDEX and CREATE are required, 
// SHOW, UPDATE, DELETE are bonus
//controllers - whhiskies.js import the models const Whisky = require('../models/whisky') 
// Only write one route at one time and test in insomnia in between. 


// - index.js
// don’t forget to import the router! 
//const router = require('./config/Router')


// ---
// The file structure should look like this:
// -> config
//    — environment.js
//    — router.js
// -> controllers
//    — js file for your controllers
// -> db
//    — seeds.js
// -> models
//    — js file for your models
// -> index.js


//day 2

// Authentication Lab
// Don't forget to install bcrypt & jsonwebtoken
// 1. Create the user model
// - Build out the basic model
// - Set up the virtual field for passwordConfirmation (watch the spelling)
// 2. Set up the user methods
// - .pre('validate') to check for match between password and passwordConfirmation
// - .pre('save') to hash password using bcrypt before saving to db
// - Don't add the validatePassword yet.
// - Export User model
// 3. Make auth controllers
// - Make the register function
// - Hook up the route for register and TEST!
// - If you are getting 'module' missing errors it's likely that there's an issue with your importing and exporting
// - Make the login function
// 4. Validation
// - Add secret to `config/environment.js` and require it
// - Remember to make `validatePassword()` in the user model
// - Hook up the route for login and TEST!
// 5. Make a secureRoute folder in lib
// - Make a `secureRoute()` function
// - Check to see if a token exists
// - Check if token is valid
// 6. Import secure route to routes and add it to any routes that should be secure. Leave this as the last step so that testing can be easier