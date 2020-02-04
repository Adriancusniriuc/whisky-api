const mongoose = require('mongoose') // importing mongoose, we need it to create schema and models
const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
}
)

const whiskySchema = new mongoose.Schema({ //  created a schema for our collection, (blueprint)
  // we can define the shape of our records, and what types the values you should be, if they are required or not, and other information
  distilery: { type: String, required: true },
  name: { type: String },
  age: { type: String },
  image: { type: String },
  description: { type: String },
  comments: [commentSchema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
},
{
  timestamps: true
}
)

// When the whiskies create controller is used to attempt to make a new Dinosaur, the object sent must pass all the validations, or it will be rejected

//  registered our schema to a model and exported it

module.exports = mongoose.model('Whisky', whiskySchema)


// dangerRating: { type: Number, required: true, min: 1, max: 5 }, // this feild must be a number, its required, and between 1 and 5
// image: { type: String, required: true },
// description: { type: String, required: true, maxlength: 500 } // another required string, but this one has a max length