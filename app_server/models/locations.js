var mongoose = require( 'mongoose' );
require('./restaurants')

var restaurantSchema = new mongoose.Schema({
  restaurantName: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  email: String,
  address: String,
  city: String,
  zipcode: String,
  region: String,
  cuisine: [String],
  features: [String],
  keywords: [String],
  about: String,
  websiteURL: String,
  menuURL: String,
  openingHours: [openingHoursSchema],
  discountHours: [discountHoursSchema]
});

var openingHoursSchema = new mongoose.Schema({
  daysAndHours: {type: String}
});

var discountHoursSchema = new mongoose.Schema({
  days: {type:String, required: true},
  hours: String,
  discount: String
})
