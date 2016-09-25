var request = require('request');
var apiOptions = {
  server: "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "http://rocky-meadow-67164.herokuapp.com/"
}

var renderHomepage = function(req, res, responseBody){
  res.render('restaurants-list', {
    title: 'rocky-meadow-67164 - Find places to dine at the best discounts!',
    pageHeader: {
      title: 'rocky-meadow-67164',
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
		res.send(500,'Abhinav');
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
