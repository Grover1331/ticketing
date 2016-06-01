var request = require('request');
var apiOptions = {
  server: "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "http://hungerpass.herokuapp.com"
}

var renderHomepage = function(req, res, responseBody){
  res.render('restaurants-list', {
    title: 'HungerPASS - Find places to dine at the best discounts!',
    pageHeader: {
      title: 'HungerPASS',
      strapline: 'Find places to dine at the best discounts!'
    },
    restaurants: responseBody
  });
  module.exports.homeRestaurantList = function(req, res) {
    renderHomepage(req, res);
  }
};

/* GET 'home' page */
module.exports.homeRestaurantList = function(req, res) {
  var requestOptions, path;
  path = '/api/restaurants';
  requestOptions = {
    url : apiOptions.server + path,
    method: "GET",
    json: {}
  };
  request(
    requestOptions,
    function(err, response, body) {
      renderHomepage(req, res, body);
    }
  );
};

// /* GET 'restaurant detail' page */
module.exports.restaurantInfo = function(req, res) {
  res.render('restaurant-info', {title: 'Resaurant Info'})
}

/* GET 'add new restaurants' page */
module.exports.newRestaurantForm = function(req, res) {
  res.render('add-new-restaurant-form', {title: 'Add New Restaurant'})
}
