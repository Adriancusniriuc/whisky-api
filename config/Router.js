const router = require('express').Router()
const whiskies = require('../controllers/whiskies')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')


router.route('/whiskies')
  .get(whiskies.index)
  .post(secureRoute, whiskies.create)


router.route('/whiskies/:id')
  .get(whiskies.show)
  .put(secureRoute, whiskies.update)
  .delete(secureRoute, whiskies.destroy)
  //destroy is whatever you called your remove function

router.route('/whiskies/:id/comments')
  .post(secureRoute, whiskies.commentCreate)
//remember to add the secure

router.route('/whiskies/:id/comments/:commentId')
  .delete(secureRoute, whiskies.commentDelete)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)
module.exports = router