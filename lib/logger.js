// a simplem piece of custom middle ware we have written to log the method and url of incoming requests

function logger(req, res, next) { // receaives the default arugments for express middleware
  console.log(`Incoming ${req.method} to ${req.url}`) // logs some information about the request
  next() // calls next() so the request object can fall through to the next peice of middleware, in our case, the router, see 'index.js' to see why the router is considered 'next'
}

module.exports = logger // and exporting it so we can use it in index.js