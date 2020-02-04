const Whisky = require('../models/whisky')

function index(req, res) {
  Whisky
    .find()
    .populate('user')
    .then(foundWhiskies => res.status(200).json(foundWhiskies))
    .catch(err => console.log(err))
}
function create(req, res) {
  req.body.user = req.currentUser // you can only delete a whiksy if yours
  Whisky
    .create(req.body)
    .then(createdWhisky => res.status(201).json(createdWhisky))
    .catch(err => console.log(err))
}

function show(req, res) {
  Whisky
    .findById(req.params.id)
    .populate('user')
    .then(whisky => { 
      if (!whisky) return res.status(404).json({ message: 'Not Found ' })
      res.status(202).json(whisky)
    })
    .catch(err => res.json(err))
    //to be updated with the user stuff
}

function update(req, res, next) {
  Whisky
    .findById(req.params.id) 
    .then(whisky  => {
      if (!whisky) return res.status(404).json({ message: 'Not Found ' }) 
      Object.assign(whisky, req.body) 
      //aka spread operator
      whisky.save()  
    })
    .then(whisky => res.status(202).json(whisky))
    .catch(next)
}


function destroy(req, res) {
  Whisky
    .findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json(err))
}

function commentDelete(req, res) {
  Whisky
    .findById(req.params.id)
    .then(whisky =>{
      if (!whisky) return res.status(404).json({ message: 'Not Found' })
      const comment = whisky.comments.id(req.params.commentId)
      if (!comment.user.equals(req.currentUser._id)) {
        return res.status(401).json({ message: 'NOT YOUR USER ' })
      } else {
        comment.remove()
        return whisky.save().then(() => res.sendStatus(204))
      } 
    })
    .catch(err => res.json(err))
}

// function whiskyDelete(req, res) {
//   Whisky
//     .findByIdAndDelete(req.params.id)
//     .then(whisky => {
//       if (!whisky) return res.status(404).json({ message: 'Not Found' })
//       const whisky = whisky.id(req.params.id)

//     })
  
// }


function commentCreate(req, res, next) {
  req.body.user = req.currentUser
  Whisky
    .findById(req.params.id)
    .then(whisky => {
      if (!whisky) return res.status(404).json({ message: 'Not Found' })
      whisky.comments.push(req.body)
      return whisky.save()
    })
    .then(whisky => res.status(201).json(whisky))
    .catch(next)
}

module.exports = { index, create, show, update, destroy ,commentCreate, commentDelete }