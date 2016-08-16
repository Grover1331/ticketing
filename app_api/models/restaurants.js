var mongoose = require( 'mongoose' );

var discountHoursSchema = new mongoose.Schema({
  days: {type: String, required: true},
  hours: String,
  discount: String
});

var restaurantSchema = new mongoose.Schema({
  restaurantName: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  email: String,
  address: String,
  city: String,
  zipcode: String,
  latitude: String,
  longitude: String,
  region: String,
  price: String,
  cuisine: [String],
  features: [String],
  keywords: [String],
  restrictions: String,
  partySize: String,
  about: String,
  imageURL: String,
  websiteURL: String,
  menuURL: String,
  openingHours: String,
  discountHours: [discountHoursSchema]
});

mongoose.model('Restaurant', restaurantSchema);
