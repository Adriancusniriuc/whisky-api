const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Whisky = require('../models/whisky')
const User = require('../models/user')

mongoose.connect(dbURI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'adrian',
          email: 'adrian@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        },
        {
          username: 'eusebiu',
          email: 'eusebiu@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }
      ])
    })
    .then(createdUsers => {
      console.log(`${createdUsers.length} users created`)
      return Whisky.create([
        {
          distilery: 'Yoichi' ,
          name: 'Yoichi',
          age: '12',
          image: 'https://static.whiskybase.com/storage/whiskies/5/4/48/59588-big.jpg',
          description: 'The pot stills of the Yoichi distillery are still directly heated, proffering hot spots in the stills, which in turn gives the whisky some wonderful sweet, rich notes.',
          user: createdUsers[0]
        }, {
          distilery: 'Ardbeg' ,
          name: 'Supernova' ,
          age: 'NAS',
          image: 'https://static.whiskybase.com/storage/whiskies/7/1/966/172469-big.jpg',
          description: 'Super peaty toffee, crystallised ginger, lime marmalade, star anise, iodine, sweet vanilla and espresso.',
          user: createdUsers[1]
        }, {
          distilery: 'Laphroaig' ,
          name: 'Laphroaig'  ,
          age: '23',
          image: 'https://static.whiskybase.com/storage/whiskies/4/4/714/79738-big.jpg' ,
          description: 'Big rush of sweetness, in fact it’s an explosion of sweetness, with fiery chilli heat, TCP, sweet cereals and a touch of cola syrup.',
          user: createdUsers[0]
        }, {
          distilery: 'Arran',
          name: 'The illicit stills' ,
          age: 'NAS',
          image: 'https://static.whiskybase.com/storage/whiskies/7/1/963/112606-big.jpg' ,
          description: 'Peat warmth really starts to build up here, alongside robust Christmas spices. Hints of Sherried plums and a touch of apple.',
          user: createdUsers[0]
        }, {
          distilery: 'Ardbeg' ,
          name: 'Perpetuum' ,
          age: 'NAS',
          image: 'https://static.whiskybase.com/storage/whiskies/6/6/031/106386-big.jpg' ,
          description: 'chocolate, fresh citrus, hazelnut, treacle toffee, fig and smoked meat. Creamy, great mouthfeel.'   ,     
          user: createdUsers[1]
        }, {
          distilery: 'Glendronach' ,
          name: 'Glendronach',
          age: '23' ,
          image: 'https://static.whiskybase.com/storage/whiskies/7/8/380/122286-big.jpg' ,
          description: 'Naturally sweet with fine measure of spiciness and salty tang to keep things in order',
          user: createdUsers[1]
        }
      ])
    })
    .then(createdWhiskies => console.log(`${createdWhiskies.length} whiskies created `))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())

})







